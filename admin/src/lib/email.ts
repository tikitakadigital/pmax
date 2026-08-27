import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = 'pmax admin <hello@pmax.online>'
const ADMIN_URL = process.env.ADMIN_URL ?? 'https://admin.pmax.online'

export async function sendPasswordReset(email: string, token: string) {
  const link = `${ADMIN_URL}/reset-password?token=${token}`

  await resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Reset your pmax admin password',
    html: `
      <!DOCTYPE html><html><head><meta charset="utf-8"></head>
      <body style="margin:0;padding:0;background:#0a0a0a;font-family:system-ui,sans-serif">
        <div style="max-width:480px;margin:48px auto;padding:32px;background:#111;border-radius:8px;border:1px solid #222">
          <div style="font-size:20px;font-weight:900;color:#fff;letter-spacing:-0.5px;margin-bottom:24px">
            pmax<span style="color:#3cffd0">.</span> admin
          </div>
          <p style="font-size:15px;color:#ccc;margin:0 0 16px;line-height:1.6">
            A password reset was requested for this account. Click the button below to set a new password.
            The link expires in <strong style="color:#fff">1 hour</strong>.
          </p>
          <a href="${link}" style="display:inline-block;background:#3cffd0;color:#000;font-weight:700;font-size:14px;padding:12px 24px;border-radius:4px;text-decoration:none;margin:8px 0 24px">
            Reset password →
          </a>
          <p style="font-size:13px;color:#555;margin:0;line-height:1.6">
            If you did not request this, ignore this email — your password has not changed.
          </p>
          <hr style="border:none;border-top:1px solid #222;margin:24px 0">
          <p style="font-size:12px;color:#444;margin:0">
            pmax Online S.L. · Calle Cordova 5 · 07184 Calvià · Mallorca
          </p>
        </div>
      </body></html>
    `,
  })
}
