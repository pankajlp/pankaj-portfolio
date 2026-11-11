import nodemailer from "nodemailer";

// Outgoing mail for the contact and RFQ-pilot forms, configured entirely from
// environment variables so the provider can be switched in Vercel without a
// code change. Every SMTP_* / MAIL_* value is optional and falls back to the
// original Zoho setup, so existing deployments keep working unchanged.
//
//   SMTP_HOST  default smtppro.zoho.in (Zoho paid). Free Zoho: smtp.zoho.in.
//              Brevo: smtp-relay.brevo.com
//   SMTP_PORT  default 465 (TLS). 587 uses STARTTLS.
//   SMTP_USER  login; default ZOHO_EMAIL
//   SMTP_PASS  password / SMTP key; default ZOHO_PASSWORD
//   MAIL_FROM  sender address (must be allowed by the provider); default ZOHO_EMAIL
//   MAIL_TO    inbox that receives submissions; default ZOHO_EMAIL

const port = Number(process.env.SMTP_PORT) || 465;

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtppro.zoho.in",
  port,
  secure: port === 465,
  auth: {
    user: process.env.SMTP_USER || process.env.ZOHO_EMAIL,
    pass: process.env.SMTP_PASS || process.env.ZOHO_PASSWORD,
  },
});

export const mailFrom = process.env.MAIL_FROM || process.env.ZOHO_EMAIL;
export const mailTo = process.env.MAIL_TO || process.env.ZOHO_EMAIL;
