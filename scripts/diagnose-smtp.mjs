import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local', override: true });

const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USERNAME', 'SMTP_PASSWORD', 'SENDER_EMAIL', 'RECIPIENT_EMAIL'];
const presence = Object.fromEntries(required.map(k => [k, process.env[k] ? `✓ (${k === 'SMTP_PASSWORD' ? '[' + process.env[k].length + ' chars]' : process.env[k]})` : '✗ MISSING']));
console.log('Env vars:', JSON.stringify(presence, null, 2));

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.SMTP_USERNAME, pass: process.env.SMTP_PASSWORD }
});

console.log('\nVerifying SMTP connection...');
try {
    await transporter.verify();
    console.log('SMTP verify: OK');
} catch (e) {
    console.log('SMTP verify FAILED:', e.code, '-', e.message);
    process.exit(1);
}

console.log('\nSending test email...');
try {
    const info = await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'SES SMTP diagnostic test',
        text: 'If you see this, SMTP is working end-to-end.'
    });
    console.log('Send OK. messageId:', info.messageId);
} catch (e) {
    console.log('Send FAILED:', e.code, '-', e.message);
    if (e.response) console.log('SES response:', e.response);
}
