import { Resend } from "resend";

const nextAuthUrl = process.env.NEXTAUTH_URL;
const emailProvider = `${process.env.APP_NAME}@${process.env.RESEND_EMAIL_DOMAIN}`;

const resend = new Resend(process.env.RESENkD_API_KEY);

export async function sendTwoFactorTokenEmail(email: string, token: string) {
  await resend.emails.send({
    from: emailProvider,
    to: email,
    subject: "2FA code",
    html: `<p>Your 2FA : ${token}</>`,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetLink = `${nextAuthUrl}/auth/new-password/?token=${token}`;

  await resend.emails.send({
    from: emailProvider,
    to: email,
    subject: "Reset your password",
    html: `<p>Click to <a href='${resetLink}'>reset password</a>.</p>`,
  });
}

export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `${nextAuthUrl}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: emailProvider,
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href='${confirmLink}'>here</a>.</p>`,
  });
}
