import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { siteAlternates } from '@/lib/hreflang'
import { breadcrumb } from '@/lib/schema'
import { cases } from '@/lib/content/cases'

export const metadata: Metadata = {
  title: 'Case studies — digital marketing results | pmax',
  description: '10 digital marketing case studies: +365% SEO revenue, −93% cost per lead, +307% sign-ups. Real results from e-commerce, real estate, SaaS, retail and more.',
  alternates: siteAlternates('/cases/'),
}

const jsonLd = breadcrumb([
  { name: 'Home', url: 'https://pmax.online/' },
  { name: 'Work', url: 'https://pmax.online/cases/' },
])

export default function CasesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>Work</span>
            </nav>
            <span className="page-intro-eyebrow">Selected work · 2024–2026</span>
            <h1 className="page-intro-title">
              Real <em>numbers</em><br />from real clients.
            </h1>
            <p className="page-intro-deck">
              Ten projects where the right small change moved the business. We share what we built,
              what worked, and — where useful — what didn&apos;t.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-head reveal">
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">All work · 2024–2026</div>
                <h2 className="section-head-title">Ten projects.</h2>
              </div>
              <Link href="/services" className="btn-tertiary">See our services →</Link>
            </header>
            <ol className="stream" style={{ listStyle: 'none' }}>
              {cases.map((c) => (
                <li key={c.slug} className="stream-item">
                  <span className="stream-stamp">{c.stamp}</span>
                  <Link href={`/cases/${c.slug}`} className={`stream-card ${c.variant}`}>
                    <div>
                      <span className="stream-kicker">{c.kicker}</span>
                      <h2 className="stream-head">{c.title}</h2>
                      <p className="stream-deck">{c.deck}</p>
                      <div className="stream-meta">
                        {c.meta.map(m => <span key={m}>{m}</span>)}
                      </div>
                    </div>
                    <div className="stream-result">
                      <span className="num">{c.result.num}</span>
                      <span className="label">{c.result.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container" style={{ padding: '64px 0 96px' }}>
          <div className="promo reveal">
            <div>
              <span className="promo-eyebrow">Want a similar result?</span>
              <h2 className="promo-headline">Tell us what you&apos;re trying to grow.</h2>
              <p className="promo-deck">We&apos;ll look at your numbers, your competitors and your category — and tell you honestly whether we&apos;re the right team to help.</p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              Start a project <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
