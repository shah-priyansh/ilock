# Email Setup Guide - Amazon SES SMTP

This guide will help you set up Amazon SES SMTP for sending emails from the contact form.

## Prerequisites

- AWS Account (create one at https://aws.amazon.com if you don't have one)
- Access to AWS Console
- A verified email address or domain

## Step 1: Verify Your Email Address

1. Go to [AWS SES Console](https://console.aws.amazon.com/ses/)
2. Select your preferred region (e.g., US East 1)
3. Click on "Verified identities" in the left sidebar
4. Click "Create identity"
5. Choose "Email address"
6. Enter the email address you want to use as the sender (e.g., noreply@yourdomain.com)
7. Click "Create identity"
8. Check your inbox and click the verification link in the email from AWS

**Note:** In sandbox mode, you can only send emails to verified email addresses. You'll also need to verify the recipient email address following the same steps above.

## Step 2: Create SMTP Credentials

1. In the AWS SES Console, click on "SMTP settings" in the left sidebar
2. Note down the **SMTP endpoint** (e.g., `email-smtp.us-east-1.amazonaws.com`)
3. Note down the **Port** (usually `587` for TLS)
4. Click "Create SMTP credentials"
5. Enter a name for the credentials (e.g., "ilock-website-smtp")
6. Click "Create"
7. **IMPORTANT:** Download the credentials file or copy the **SMTP username** and **SMTP password**
   - You won't be able to see the password again!

## Step 3: Request Production Access (Optional but Recommended)

By default, SES is in sandbox mode with these limitations:
- Can only send to verified email addresses
- Limited to 200 emails per day
- Maximum 1 email per second

To remove these limitations:
1. In SES Console, click "Account dashboard"
2. Click "Request production access"
3. Fill out the form explaining your use case
4. AWS typically approves requests within 24 hours

## Step 4: Configure Environment Variables

1. Create a `.env` file in the root of your project:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and fill in your credentials:
   ```env
   # Server Configuration
   PORT=3001

   # Amazon SES SMTP Configuration
   SMTP_HOST=email-smtp.us-east-1.amazonaws.com    # Your SMTP endpoint from Step 2
   SMTP_PORT=587
   SMTP_USERNAME=your_actual_smtp_username           # From Step 2
   SMTP_PASSWORD=your_actual_smtp_password           # From Step 2

   # Email Configuration
   SENDER_EMAIL=noreply@yourdomain.com               # Your verified sender email
   RECIPIENT_EMAIL=your-email@example.com            # Where form submissions will be sent
   ```

## Step 5: Test the Setup

1. Start the backend server:
   ```bash
   npm run server
   ```

2. In a separate terminal, start the frontend:
   ```bash
   npm run dev
   ```

   Or run both together:
   ```bash
   npm run dev:all
   ```

3. Navigate to `http://localhost:5173/landing`
4. Fill out the form and submit
5. Check the recipient email inbox for the submission

## Troubleshooting

### Email Not Sending

1. **Check server logs** for error messages
2. **Verify SMTP credentials** are correct in `.env`
3. **Check sender email** is verified in SES
4. **Check recipient email** is verified (if in sandbox mode)
5. **Check region** - SMTP endpoint must match the region where you created credentials

### "Email address is not verified" Error

- In sandbox mode, both sender and recipient must be verified
- Go to SES Console > Verified identities > Create identity
- Verify the recipient email address

### Connection Timeout

- Check your SMTP_HOST and SMTP_PORT are correct
- Some networks block port 587; try port 465 (and set `secure: true` in server.js)
- Check your AWS security group settings

## Security Best Practices

1. ✅ Never commit `.env` file to git (it's already in `.gitignore`)
2. ✅ Use environment variables for all sensitive data
3. ✅ Rotate SMTP credentials periodically
4. ✅ Use SES sending quotas and alarms to prevent abuse
5. ✅ Enable DKIM and SPF for your domain for better deliverability

## Cost

Amazon SES Pricing:
- First 62,000 emails per month: FREE (if sent from EC2)
- Otherwise: $0.10 per 1,000 emails
- No monthly fees

For most websites, the costs are negligible.

## Additional Resources

- [Amazon SES Documentation](https://docs.aws.amazon.com/ses/)
- [SES SMTP Credentials Guide](https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html)
- [Moving Out of Sandbox](https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html)
