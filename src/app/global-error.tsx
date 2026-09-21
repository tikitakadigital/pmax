'use client'

// Replaces the root layout when it fails, so this cannot rely on globals.css
// being applied — every style here is inline.
export default function GlobalError() {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#131313', color: '#f2f2f2', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <main
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 24px',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ maxWidth: 480 }}>
            <span
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#3cffd0',
                display: 'block',
                marginBottom: 24,
              }}
            >
              Something went wrong
            </span>
            <h1
              style={{
                fontSize: 'clamp(32px, 6vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: '0 0 20px',
              }}
            >
              This page didn&apos;t load.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: '#999', margin: '0 0 32px' }}>
              Part of the page failed to load. Reloading usually fixes it.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                background: '#3cffd0',
                color: '#000',
                fontWeight: 700,
                fontSize: 14,
                padding: '13px 26px',
                borderRadius: 4,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Reload the page
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}
