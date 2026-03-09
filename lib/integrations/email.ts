import nodemailer from 'nodemailer';

export async function sendLeadEmail(payload: { subject: string; text: string }) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.LEAD_EMAIL_TO;
  const timeoutMs = Number(process.env.SMTP_TIMEOUT_MS ?? 8_000);

  if (!host || !user || !pass || !from || !to) {
    return { ok: true, skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: timeoutMs,
    greetingTimeout: timeoutMs,
    socketTimeout: timeoutMs
  });

  await transporter.sendMail({ from, to, subject: payload.subject, text: payload.text });
  return { ok: true };
}
