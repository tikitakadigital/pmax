'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    // Always show success — don't reveal whether the email exists
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ maxWidth: 360, width: '100%', textAlign: 'center' }}>
          <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Check your inbox</div>
          <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>
            If that email is in our system, a reset link is on its way. It expires in 1 hour.
          </p>
          <Link href="/login" style={{ display: 'inline-block', marginTop: 20, fontSize: 13 }}>
            ← Back to sign in
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <div style={{ marginBottom: 28 }}>
          <Link href="/login" style={{ fontSize: 13, color: 'var(--muted)', display: 'block', marginBottom: 20 }}>← Back to sign in</Link>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Reset password</div>
          <div style={{ color: 'var(--muted)', fontSize: 13 }}>We&apos;ll send a reset link to your email.</div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--muted)', marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Email
            </label>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="hello@pmax.online"
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending…' : 'Send reset link →'}
          </button>
        </form>
      </div>
    </div>
  )
}
