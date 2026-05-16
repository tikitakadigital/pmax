import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { breadcrumb } from '@/lib/schema'
import { siteAlternates } from '@/lib/hreflang'
import { caseDetails, getCaseDetail } from '@/lib/content/cases-detail'

export function generateStaticParams() {
  return caseDetails.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const detail = getCaseDetail(slug)
  if (!detail) return {}
  return {
    title: detail.metaTitle,
    description: detail.metaDesc,
    alternates: siteAlternates(`/cases/${slug}/`),
  }
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const detail = getCaseDetail(slug)
  if (!detail) notFound()

  const jsonLd = breadcrumb([
    { name: 'Home', url: 'https://pmax.online/' },
    { name: 'Work', url: 'https://pmax.online/cases/' },
    { name: detail.breadcrumbLabel, url: `https://pmax.online/cases/${slug}/` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        {/* CASE HERO */}
        <section className={`case-hero ${detail.heroVariant}`}>
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span>
              <Link href="/cases">Work</Link><span className="sep">/</span>
              <span>{detail.breadcrumbLabel}</span>
            </nav>
            <span className="case-hero-kicker">{detail.heroKicker}</span>
            <h1 className="case-hero-title">{detail.heroTitle}</h1>
            {detail.heroDeck && <p className="case-hero-deck">{detail.heroDeck}</p>}
          </div>
        </section>

        {/* STATS */}
        <section className="container" style={{ padding: '56px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            {detail.stats.map(({ num, label }) => (
              <li key={label} className="stat">
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* PROSE */}
        <section className="section">
          <div className="container">
            <div className="prose" style={{ maxWidth: 760, margin: '0 auto' }}>
              {detail.prose}
            </div>
          </div>
        </section>

        {/* RELATED CASES */}
        {detail.relatedCases && (
          <section className="container" style={{ padding: '24px 0 96px' }}>
            <header className="section-head reveal">
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">Related work</div>
                <h2 className="section-head-title">More from the&nbsp;archive.</h2>
              </div>
            </header>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {detail.relatedCases.map(rc => (
                <Link key={rc.slug} href={`/cases/${rc.slug}`} className={`stream-card ${rc.variant}`}>
                  <div>
                    <span className="stream-kicker">Case study</span>
                    <h3 className="stream-head">{rc.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* PROMO */}
        {detail.promo && (
          <section className="container" style={{ padding: detail.relatedCases ? '0 0 96px' : '24px 0 96px' }}>
            <div className="promo reveal">
              <div>
                <span className="promo-eyebrow">{detail.promo.eyebrow}</span>
                <h2 className="promo-headline">{detail.promo.headline}</h2>
                <p className="promo-deck">{detail.promo.deck}</p>
              </div>
              <Link href={`/contact/?topic=${detail.promo.topic}`} className="btn-primary" style={{ whiteSpace: 'nowrap', fontSize: 13, padding: '14px 22px' }}>
                {detail.promo.ctaLabel} <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  )
}
