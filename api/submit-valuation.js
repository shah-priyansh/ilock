import nodemailer from 'nodemailer';
import formidable from 'formidable';

export const config = {
    api: {
        bodyParser: false, // Disable default body parser for file uploads
    },
};

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        // Parse form data with file uploads
        const form = formidable({
            multiples: true,
            maxFileSize: 10 * 1024 * 1024, // 10MB
            maxFiles: 10,
            keepExtensions: true
        });

        const [fields, files] = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) reject(err);
                resolve([fields, files]);
            });
        });

        // Extract field values (formidable returns arrays)
        const watchBrand = Array.isArray(fields.watchBrand) ? fields.watchBrand[0] : fields.watchBrand;
        const modelName = Array.isArray(fields.modelName) ? fields.modelName[0] : fields.modelName;
        const phone = Array.isArray(fields.phone) ? fields.phone[0] : fields.phone;
        const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;

        // Validate required fields
        if (!watchBrand || !modelName || !phone || !email) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields'
            });
        }

        // Get uploaded photos
        const photos = files.photos ? (Array.isArray(files.photos) ? files.photos : [files.photos]) : [];

        // Configure nodemailer with Amazon SES SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD
            }
        });

        // Prepare email content
        const emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #0290C4;">New Watch Valuation Request</h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
                    <h3 style="margin-top: 0;">Watch Details</h3>
                    <p><strong>Brand:</strong> ${watchBrand}</p>
                    <p><strong>Model Name:</strong> ${modelName}</p>
                    <p><strong>Phone Number:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    ${photos.length > 0 ? `<p><strong>Photos:</strong> ${photos.length} file(s) attached</p>` : '<p><strong>Photos:</strong> Not provided</p>'}
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                    This email was sent from the iLock website valuation form.
                </p>
            </div>
        `;

        // Prepare attachments
        const attachments = await Promise.all(photos.map(async (photo) => {
            const fs = await import('fs');
            return {
                filename: photo.originalFilename,
                content: fs.readFileSync(photo.filepath)
            };
        }));

        // Email options
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: `New Watch Valuation - ${watchBrand} ${modelName}`,
            html: emailHtml,
            attachments: attachments
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Your valuation request has been submitted successfully!'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit valuation request. Please try again later.'
        });
    }
}
