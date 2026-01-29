import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        const { fullName, email, subject, message } = req.body;

        // Validate required fields
        if (!fullName || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields'
            });
        }

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
                <h2 style="color: #0290C4;">New Contact Form Submission</h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
                    <h3 style="margin-top: 0;">Contact Details</h3>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <hr style="border: 1px solid #ddd; margin: 20px 0;">
                    <h3>Message:</h3>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                    This email was sent from the iLock website contact form.
                </p>
            </div>
        `;

        // Email options
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: `Contact Form: ${subject}`,
            html: emailHtml
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully! We\'ll get back to you soon.'
        });

    } catch (error) {
        console.error('Error sending contact email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.'
        });
    }
}
