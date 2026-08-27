'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

function ResetForm() {
  const params = useSearchParams()
  const token = params.get('token') ?? ''
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!token) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#f87171' }}>Invalid reset link.</p>
        <Link href="/forgot-password" style={{ fontSize: 13 }}>Request a new one →</Link>
      </div>
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (password !== confirm) { setError('Passwords do not match'); return }
    if (password.length < 12) { setError('Password must be at least 12 characters'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      })
      const json = await res.json()
      if (res.ok) {
        router.push('/login?reset=1')
      } else {
        setError(json.error ?? 'Failed. The link may have expired.')
      }
    } catch {
      setError('Network error — try again')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--muted)', marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          New password
        </label>
        <input type="password" required minLength={12} value={password} onChange={e => setPassword(e.target.value)} autoComplete="new-password" />
        <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>Minimum 12 characters</div>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--muted)', marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Confirm password
        </label>
        <input type="password" required minLength={12} value={confirm} onChange={e => setConfirm(e.target.value)} autoComplete="new-password" />
      </div>
      {error && (
        <div style={{ background: '#f8717110', border: '1px solid #f8717130', borderRadius: 4, padding: '10px 12px', color: '#f87171', fontSize: 13 }}>
          {error}
        </div>
      )}
      <button type="submit" disabled={loading}>{loading ? 'Saving…' : 'Set new password →'}</button>
    </form>
  )
}

export default function ResetPasswordPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Set new password</div>
          <div style={{ color: 'var(--muted)', fontSize: 13 }}>Choose a strong password for your admin account.</div>
        </div>
        <Suspense>
          <ResetForm />
        </Suspense>
      </div>
    </div>
  )
}
