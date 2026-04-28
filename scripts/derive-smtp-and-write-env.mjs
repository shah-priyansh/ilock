import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

// AWS SES SMTP password derivation v4
// https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html#smtp-credentials-convert
function deriveSmtpPassword(secretAccessKey, region) {
    const date = '11111111';
    const service = 'ses';
    const terminal = 'aws4_request';
    const message = 'SendRawEmail';
    const versionByte = Buffer.from([0x04]);

    const hmac = (key, data) =>
        crypto.createHmac('sha256', key).update(data, 'utf8').digest();

    const kDate = hmac('AWS4' + secretAccessKey, date);
    const kRegion = hmac(kDate, region);
    const kService = hmac(kRegion, service);
    const kTerminal = hmac(kService, terminal);
    const kMessage = hmac(kTerminal, message);

    const signatureAndVersion = Buffer.concat([versionByte, kMessage]);
    return signatureAndVersion.toString('base64');
}

const region = process.argv[2];
const senderEmail = process.argv[3];
const recipientEmail = process.argv[4];
const envPath = process.argv[5];

if (!region || !senderEmail || !recipientEmail || !envPath) {
    console.error('Usage: node derive-smtp-and-write-env.mjs <region> <sender> <recipient> <envPath>');
    process.exit(1);
}

let stdinData = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { stdinData += chunk; });
process.stdin.on('end', () => {
    let parsed;
    try {
        parsed = JSON.parse(stdinData);
    } catch (e) {
        console.error('Failed to parse stdin JSON');
        process.exit(2);
    }
    const ak = parsed?.AccessKey?.AccessKeyId;
    const sk = parsed?.AccessKey?.SecretAccessKey;
    if (!ak || !sk) {
        console.error('Missing AccessKeyId or SecretAccessKey in input');
        process.exit(3);
    }

    const smtpPassword = deriveSmtpPassword(sk, region);
    const smtpHost = `email-smtp.${region}.amazonaws.com`;

    const block = [
        '',
        '# Amazon SES SMTP — for contact form (server/server.js + api/submit-contact.js)',
        `SMTP_HOST=${smtpHost}`,
        'SMTP_PORT=587',
        `SMTP_USERNAME=${ak}`,
        `SMTP_PASSWORD=${smtpPassword}`,
        `SENDER_EMAIL=${senderEmail}`,
        `RECIPIENT_EMAIL=${recipientEmail}`,
        ''
    ].join('\n');

    fs.appendFileSync(envPath, block);
    console.log(`OK: appended SMTP env vars (SMTP_USERNAME=${ak}, host=${smtpHost}) to ${path.basename(envPath)}`);
});
