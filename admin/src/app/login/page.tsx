'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const json = await res.json()
      if (res.ok) {
        router.push('/dashboard')
        router.refresh()
      } else {
        setError(json.error ?? 'Login failed')
      }
    } catch {
      setError('Network error — try again')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.5px', marginBottom: 4 }}>
            pmax<span style={{ color: 'var(--mint)' }}>.</span>
          </div>
          <div style={{ color: 'var(--muted)', fontSize: 13 }}>Sign in to admin</div>
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

          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--muted)', marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Password
            </label>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div style={{ background: '#f8717110', border: '1px solid #f8717130', borderRadius: 4, padding: '10px 12px', color: '#f87171', fontSize: 13 }}>
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} style={{ marginTop: 4 }}>
            {loading ? 'Signing in…' : 'Sign in →'}
          </button>
        </form>

        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <Link href="/forgot-password" style={{ fontSize: 13, color: 'var(--muted)' }}>
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  )
}
