import express from 'express';
import cors from 'cors';
import pkg from 'nodemailer';
const { createTransport } = pkg;
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Configure nodemailer with Amazon SES SMTP
const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP Configuration Error:', error);
    } else {
        console.log('SMTP Server is ready to send emails');
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Form submission endpoint
app.post('/api/submit-valuation', upload.array('photos', 10), async (req, res) => {
    try {
        const { watchBrand, modelName, phone, email } = req.body;
        const photos = req.files;

        // Validate required fields
        if (!watchBrand || !modelName || !phone || !email) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields'
            });
        }

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
                    ${photos && photos.length > 0 ? `<p><strong>Photos:</strong> ${photos.length} file(s) attached</p>` : '<p><strong>Photos:</strong> Not provided</p>'}
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                    This email was sent from the iLock website valuation form.
                </p>
            </div>
        `;

        // Email options
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: `New Watch Valuation - ${watchBrand} ${modelName}`,
            html: emailHtml,
            attachments: photos && photos.length > 0 ? photos.map(photo => ({
                filename: photo.originalname,
                content: photo.buffer
            })) : []
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({
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
});

// Contact form submission endpoint
app.post('/api/submit-contact', async (req, res) => {
    try {
        const { fullName, email, subject, message } = req.body;

        // Validate required fields
        if (!fullName || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields'
            });
        }

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

        res.json({
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
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
