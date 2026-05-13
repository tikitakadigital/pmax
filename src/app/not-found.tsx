import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-mint)', display: 'block', marginBottom: 24 }}>
            404
          </span>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 88px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 24 }}>
            Page not found.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--color-text-muted)', marginBottom: 40, maxWidth: 480 }}>
            This page doesn&apos;t exist — or it may have moved. The homepage has everything you need.
          </p>
          <Link href="/" className="btn-primary">
            Back to home <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
