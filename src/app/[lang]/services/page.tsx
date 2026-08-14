import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import { breadcrumb, orgRef } from '@/lib/schema'
import { getT } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getT(lang)
  return {
    title: t.services.metaTitle,
    description: t.services.metaDesc,
    alternates: {
      canonical: `https://pmax.online/${lang}/services/`,
      languages: { 'en': 'https://pmax.online/services/', 'de': 'https://pmax.online/de/services/', 'es': 'https://pmax.online/es/services/', 'x-default': 'https://pmax.online/services/' },
    },
  }
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getT(lang)
  const s = t.services
  const p = `/${lang}`

  const crumbLabel = lang === 'de' ? 'Leistungen' : lang === 'es' ? 'Servicios' : 'Services'
  const jsonLd = [
    breadcrumb([{ name: 'Home', url: `https://pmax.online/${lang}/` }, { name: crumbLabel, url: `https://pmax.online/${lang}/services/` }]),
    orgRef,
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: s.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href={p}>Home</Link><span className="sep">/</span>
              <span>{crumbLabel}</span>
            </nav>
            <span className="page-intro-eyebrow">{s.eyebrow}</span>
            <h1 className="page-intro-title">{s.title}</h1>
            <p className="page-intro-deck">{s.deck}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-head reveal">
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">{s.allKicker}</div>
                <h2 className="section-head-title">{s.allTitle}</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
                <p className="section-head-aside" style={{ margin: 0 }}>{s.allAside}</p>
                <Link href={`${p}/cases`} className="btn-tertiary">{s.seeResults}</Link>
              </div>
            </header>
            <div className="svc-grid reveal-stagger">
              {s.serviceItems.map(svc => (
                <Link key={svc.slug} href={`${p}/services/${svc.slug}`} className={`svc-card ${svc.variant}${'featured' in svc && svc.featured ? ' featured' : ''}`}>
                  <span className="svc-num">{'badge' in svc && svc.badge ? `/ ${svc.num} — ${svc.badge}` : `/ ${svc.num}`}</span>
                  <h3 className="svc-title">{svc.title}</h3>
                  <p className="svc-deck">{svc.deck}</p>
                  {'tags' in svc && svc.tags && <div className="svc-tags">{svc.tags.map((tag: string) => <span key={tag}>{tag}</span>)}</div>}
                  <span className="svc-cta">{s.learnMore} <span className="arrow" aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container" style={{ padding: '64px 0 96px' }}>
          <div className="promo reveal">
            <div>
              <span className="promo-eyebrow">{lang === 'de' ? 'Projekt starten' : lang === 'es' ? 'Iniciar proyecto' : 'Start a project'}</span>
              <h2 className="promo-headline">{s.ctaTitle}</h2>
              <p className="promo-deck">{s.ctaDeck}</p>
            </div>
            <Link href={`${p}/contact`} className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              {s.ctaBtn} <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-h">
          <div className="container">
            <header className="section-head reveal" style={{ marginBottom: 24 }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">{s.faqKicker}</div>
                <h2 className="section-head-title" id="faq-h">{s.faqTitle}</h2>
              </div>
            </header>
            <FaqList items={s.faqs} />
          </div>
        </section>

      </main>
      <Footer locale={lang} />
    </>
  )
}
