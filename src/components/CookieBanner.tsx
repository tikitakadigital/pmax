'use client'

import { useState, useEffect, useId } from 'react'

const COOKIE_NAME = 'pmax_consent'
const COOKIE_DAYS = 365
const ADMIN_API = process.env.NEXT_PUBLIC_ADMIN_API_URL ?? ''

type ConsentType = 'accept_all' | 'reject_all' | 'custom'

interface ConsentState {
  analytics: boolean
  marketing: boolean
}

function readConsent(): ConsentState | null {
  if (typeof document === 'undefined') return null
  try {
    const raw = document.cookie.split('; ').find(c => c.startsWith(COOKIE_NAME + '='))?.split('=')[1]
    if (!raw) return null
    return JSON.parse(decodeURIComponent(raw))
  } catch { return null }
}

function writeConsent(state: ConsentState) {
  const expires = new Date(Date.now() + COOKIE_DAYS * 86400000).toUTCString()
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(state))}; expires=${expires}; path=/; SameSite=Lax`
}

function updateConsentMode(state: ConsentState) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  function gtag(...args: unknown[]) { (window.dataLayer as unknown[]).push(args) }
  gtag('consent', 'update', {
    analytics_storage: state.analytics ? 'granted' : 'denied',
    ad_storage: state.marketing ? 'granted' : 'denied',
    ad_user_data: state.marketing ? 'granted' : 'denied',
    ad_personalization: state.marketing ? 'granted' : 'denied',
  })
}

function getOrCreateSessionId(): string {
  const key = 'pmax_sid'
  let id = sessionStorage.getItem(key)
  if (!id) {
    id = crypto.randomUUID()
    sessionStorage.setItem(key, id)
  }
  return id
}

async function logConsent(type: ConsentType, state: ConsentState) {
  if (!ADMIN_API) return
  try {
    await fetch(`${ADMIN_API}/api/consent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: getOrCreateSessionId(),
        pageUrl: window.location.href,
        consentType: type,
        analytics: state.analytics,
        marketing: state.marketing,
      }),
      keepalive: true,
    })
  } catch { /* fire-and-forget */ }
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    openCookieSettings?: () => void
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [managing, setManaging] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const analyticsId = useId()
  const marketingId = useId()

  useEffect(() => {
    const existing = readConsent()
    if (!existing) {
      setVisible(true)
    }
    // Expose re-open trigger for footer link
    window.openCookieSettings = () => setVisible(true)
    return () => { delete window.openCookieSettings }
  }, [])

  function accept() {
    const state = { analytics: true, marketing: true }
    writeConsent(state)
    updateConsentMode(state)
    logConsent('accept_all', state)
    setVisible(false)
  }

  function reject() {
    const state = { analytics: false, marketing: false }
    writeConsent(state)
    updateConsentMode(state)
    logConsent('reject_all', state)
    setVisible(false)
  }

  function saveCustom() {
    const state = { analytics, marketing }
    writeConsent(state)
    updateConsentMode(state)
    logConsent('custom', state)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9998 }}
      />

      {/* Banner */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        style={{
          position: 'fixed',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(560px, calc(100vw - 32px))',
          background: '#0f0f0f',
          border: '1px solid #2a2a2a',
          borderRadius: 8,
          padding: 24,
          zIndex: 9999,
          boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
        }}
      >
        <div style={{ fontWeight: 900, fontSize: 15, letterSpacing: '-0.3px', marginBottom: 8 }} id="cookie-banner-title">
          We use cookies
        </div>
        <p style={{ fontSize: 13, color: '#999', lineHeight: 1.6, margin: '0 0 20px' }}>
          We use cookies for analytics (to understand how the site is used) and marketing (to measure ad performance).
          Strictly necessary cookies are always active.{' '}
          <a href="/legal/cookies" target="_blank" rel="noopener" style={{ color: '#3cffd0', textDecoration: 'none' }}>Cookie policy →</a>
        </p>

        {managing && (
          <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 6, padding: '16px 18px', marginBottom: 20 }}>
            {/* Necessary — always on */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, marginBottom: 12, borderBottom: '1px solid #222' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Necessary</div>
                <div style={{ fontSize: 12, color: '#666', marginTop: 2 }}>Session, security, consent preference. Always active.</div>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#3cffd0', letterSpacing: '0.05em' }}>ALWAYS ON</div>
            </div>

            {/* Analytics */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, marginBottom: 12, borderBottom: '1px solid #222' }}>
              <div style={{ paddingRight: 12 }}>
                <label htmlFor={analyticsId} style={{ fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Analytics</label>
                <div style={{ fontSize: 12, color: '#666', marginTop: 2 }}>Google Analytics via GTM — page views, session data. No personal data shared.</div>
              </div>
              <Toggle id={analyticsId} checked={analytics} onChange={setAnalytics} />
            </div>

            {/* Marketing */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ paddingRight: 12 }}>
                <label htmlFor={marketingId} style={{ fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Marketing</label>
                <div style={{ fontSize: 12, color: '#666', marginTop: 2 }}>Google Ads conversion tracking and remarketing signals.</div>
              </div>
              <Toggle id={marketingId} checked={marketing} onChange={setMarketing} />
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button
            onClick={accept}
            style={{ background: '#3cffd0', color: '#000', fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 4, border: 'none', cursor: 'pointer', flex: 1 }}
          >
            Accept all
          </button>
          {managing ? (
            <button
              onClick={saveCustom}
              style={{ background: '#1e1e1e', color: '#e5e5e5', fontWeight: 600, fontSize: 13, padding: '10px 20px', borderRadius: 4, border: '1px solid #333', cursor: 'pointer', flex: 1 }}
            >
              Save selection
            </button>
          ) : (
            <button
              onClick={() => setManaging(true)}
              style={{ background: '#1e1e1e', color: '#e5e5e5', fontWeight: 600, fontSize: 13, padding: '10px 20px', borderRadius: 4, border: '1px solid #333', cursor: 'pointer', flex: 1 }}
            >
              Manage
            </button>
          )}
          <button
            onClick={reject}
            style={{ background: 'transparent', color: '#666', fontSize: 13, padding: '10px 16px', borderRadius: 4, border: '1px solid #222', cursor: 'pointer' }}
          >
            Reject all
          </button>
        </div>
      </div>
    </>
  )
}

function Toggle({ id, checked, onChange }: { id: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        flexShrink: 0,
        width: 40,
        height: 22,
        borderRadius: 11,
        background: checked ? '#3cffd0' : '#333',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        transition: 'background 0.2s',
        padding: 0,
      }}
    >
      <span style={{
        position: 'absolute',
        top: 3,
        left: checked ? 21 : 3,
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: checked ? '#000' : '#888',
        transition: 'left 0.2s',
      }} />
    </button>
  )
}
