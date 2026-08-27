'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/leads', label: 'Leads' },
  { href: '/consent', label: 'Consent log' },
]

export default function AdminNav({ email }: { email: string }) {
  const path = usePathname()
  const router = useRouter()

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
    router.refresh()
  }

  return (
    <aside style={{
      width: 200,
      minHeight: '100vh',
      background: 'var(--surface)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontWeight: 900, fontSize: 16, letterSpacing: '-0.5px' }}>
          pmax<span style={{ color: 'var(--mint)' }}>.</span>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 2 }}>
          Admin
        </div>
      </div>

      <nav style={{ flex: 1, padding: '12px 8px' }}>
        {links.map(l => {
          const active = path.startsWith(l.href)
          return (
            <Link key={l.href} href={l.href} style={{
              display: 'block',
              padding: '8px 12px',
              borderRadius: 4,
              color: active ? 'var(--mint)' : 'var(--text)',
              fontWeight: active ? 600 : 400,
              background: active ? '#3cffd010' : 'transparent',
              marginBottom: 2,
              fontSize: 13,
              textDecoration: 'none',
            }}>
              {l.label}
            </Link>
          )
        })}
      </nav>

      <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8, wordBreak: 'break-all' }}>{email}</div>
        <button onClick={logout} className="btn btn-ghost" style={{ width: '100%', fontSize: 12, padding: '6px 12px' }}>
          Sign out
        </button>
      </div>
    </aside>
  )
}
