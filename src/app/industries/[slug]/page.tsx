import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import { breadcrumb, serviceSchema, faqPage } from '@/lib/schema'
import { siteAlternates } from '@/lib/hreflang'
import { industryDetails, getIndustryDetail } from '@/lib/content/industries-detail'

export function generateStaticParams() {
  return industryDetails.map(i => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const detail = getIndustryDetail(slug)
  if (!detail) return {}
  return {
    title: detail.metaTitle,
    description: detail.metaDesc,
    alternates: siteAlternates(`/industries/${slug}/`),
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const detail = getIndustryDetail(slug)
  if (!detail) notFound()

  const industryName = detail.eyebrow.replace('Industry · ', '')
  const pageUrl = `https://pmax.online/industries/${slug}/`
  const jsonLd = [
    breadcrumb([
      { name: 'Home', url: 'https://pmax.online/' },
      { name: 'Industries', url: 'https://pmax.online/industries/' },
      { name: industryName, url: pageUrl },
    ]),
    serviceSchema({
      name: `${industryName} digital marketing`,
      description: detail.metaDesc,
      url: pageUrl,
      serviceType: `${industryName} marketing`,
    }),
    ...(detail.faqs && detail.faqs.length > 0 ? [faqPage(detail.faqs)] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        {/* PAGE INTRO */}
        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span>
              <Link href="/industries">Industries</Link><span className="sep">/</span>
              <span>{industryName}</span>
            </nav>
            <span className="page-intro-eyebrow">{detail.eyebrow}</span>
            <h1 className="page-intro-title">{detail.pageTitle}</h1>
            <p className="page-intro-deck">{detail.deck}</p>
          </div>
        </section>

        {/* STATS */}
        <section className="container" style={{ padding: '48px 0' }}>
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
            <header className="section-head reveal">
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">{detail.sectionKicker}</div>
                <h2 className="section-head-title">{detail.sectionTitle}</h2>
              </div>
              {detail.sectionAside && (
                <p className="section-head-aside">{detail.sectionAside}</p>
              )}
            </header>
            <div className="prose">{detail.prose}</div>
          </div>
        </section>

        {/* FAQ */}
        {detail.faqs && detail.faqs.length > 0 && (
          <section className="section faq-section" aria-labelledby="faq-h">
            <div className="container">
              <header className="section-head reveal" style={{ marginBottom: 24 }}>
                <div style={{ flex: 1, minWidth: 280 }}>
                  <div className="section-head-kicker">FAQ</div>
                  <h2 className="section-head-title" id="faq-h">Questions, answered.</h2>
                </div>
              </header>
              <FaqList items={detail.faqs} />
            </div>
          </section>
        )}

        {/* RELATED CASE */}
        {detail.relatedCase && (
          <section className="container" style={{ padding: '48px 0' }}>
            <header className="section-head reveal">
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">Related work</div>
                <h2 className="section-head-title">From the&nbsp;archive.</h2>
              </div>
            </header>
            <Link href={`/cases/${detail.relatedCase.slug}`} className={`stream-card ${detail.relatedCase.variant}`} style={{ display: 'grid' }}>
              <div>
                <span className="stream-kicker">Case study</span>
                <h3 className="stream-head">{detail.relatedCase.title}</h3>
              </div>
            </Link>
          </section>
        )}

        {/* PROMO */}
        <section className="container" style={{ padding: '24px 0 96px' }}>
          <div className="promo reveal">
            <div>
              <span className="promo-eyebrow">Work with us</span>
              <h2 className="promo-headline">Let&apos;s grow your {industryName.toLowerCase()} brand.</h2>
              <p className="promo-deck">Tell us about your current setup. We&apos;ll show you where the gaps are — no pitch, no pressure.</p>
            </div>
            <Link href={`/contact?topic=${detail.promoTopic}`} className="btn-primary" style={{ whiteSpace: 'nowrap', fontSize: 13, padding: '14px 22px' }}>
              Get a free audit <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
