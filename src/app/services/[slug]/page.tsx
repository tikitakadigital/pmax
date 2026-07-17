import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import { breadcrumb, serviceSchema, faqPage } from '@/lib/schema'
import { siteAlternates } from '@/lib/hreflang'
import { services } from '@/lib/content/services'
import { serviceDetails, getServiceDetail } from '@/lib/content/services-detail'

export function generateStaticParams() {
  return services.filter(s => s.slug !== 'visibility-engineering').map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const detail = getServiceDetail(slug)
  const service = services.find(s => s.slug === slug)
  if (!detail && !service) return {}
  return {
    title: detail?.metaTitle ?? `${service?.title} | pmax`,
    description: detail?.metaDesc ?? service?.deck,
    alternates: siteAlternates(`/services/${slug}/`),
    openGraph: {
      type: 'website',
      siteName: 'pmax',
      title: detail?.metaTitle ?? `${service?.title} | pmax`,
      description: detail?.metaDesc ?? service?.deck,
      url: `https://pmax.online/services/${slug}/`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'pmax — Performance marketing from Mallorca' }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@pmaxonline',
      title: detail?.metaTitle ?? `${service?.title} | pmax`,
      description: detail?.metaDesc ?? service?.deck,
      images: ['/og-image.jpg'],
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const detail = getServiceDetail(slug)
  const service = services.find(s => s.slug === slug)
  if (!service) notFound()

  const pageUrl = `https://pmax.online/services/${slug}/`
  const jsonLd = [
    breadcrumb([
      { name: 'Home', url: 'https://pmax.online/' },
      { name: 'Services', url: 'https://pmax.online/services/' },
      { name: service.title, url: pageUrl },
    ]),
    ...(detail ? [
      serviceSchema({
        name: service.title,
        description: detail.metaDesc,
        url: pageUrl,
        serviceType: service.title,
      }),
      faqPage(detail.faqs),
    ] : []),
  ]

  // Fallback for services without detail content
  if (!detail) {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Nav />
        <main id="main">
          <section className="page-intro">
            <div className="container">
              <nav className="page-intro-crumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span className="sep">/</span>
                <Link href="/services">Services</Link><span className="sep">/</span>
                <span>{service.title}</span>
              </nav>
              <span className="page-intro-eyebrow">Service · {service.num}</span>
              <h1 className="page-intro-title">{service.title}.</h1>
              <p className="page-intro-deck">{service.longDeck ?? service.deck}</p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

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
              <Link href="/services">Services</Link><span className="sep">/</span>
              <span>{service.title}</span>
            </nav>
            <span className="page-intro-eyebrow">Service · {detail.num}</span>
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
                <h2 className="section-head-title">What we&nbsp;do.</h2>
              </div>
            </header>
            <div className="prose">{detail.prose}</div>
          </div>
        </section>

        {/* FAQ */}
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
              <span className="promo-eyebrow">{detail.promoEyebrow}</span>
              <h2 className="promo-headline">{detail.promoHeadline}</h2>
              <p className="promo-deck">{detail.promoDeck}</p>
            </div>
            <Link href={`/contact/?topic=${detail.promoTopic}`} className="btn-primary" style={{ whiteSpace: 'nowrap', fontSize: 13, padding: '14px 22px' }}>
              {detail.promoCtaLabel} <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
