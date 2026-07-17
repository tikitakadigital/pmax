import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import { breadcrumb, serviceSchema, faqPage } from '@/lib/schema'
import { getT } from '@/lib/i18n'

const SLUGS = ['ai-visibility','google-ads','paid-social','seo','conversion-design','analytics','creative','visibility-engineering']

export function generateStaticParams() {
  return ['de','es'].flatMap(lang => SLUGS.map(slug => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const t = getT(lang)
  const detail = t.serviceDetail[slug]
  if (!detail) return {}
  return {
    title: detail.metaTitle,
    description: detail.metaDesc,
    alternates: {
      canonical: `https://pmax.online/${lang}/services/${slug}/`,
      languages: { 'en': `https://pmax.online/services/${slug}/`, 'de': `https://pmax.online/de/services/${slug}/`, 'es': `https://pmax.online/es/services/${slug}/`, 'x-default': `https://pmax.online/services/${slug}/` },
    },
    openGraph: {
      type: 'website',
      siteName: 'pmax',
      title: detail.metaTitle,
      description: detail.metaDesc,
      url: `https://pmax.online/${lang}/services/${slug}/`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'pmax — Performance marketing from Mallorca' }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@pmaxonline',
      title: detail.metaTitle,
      description: detail.metaDesc,
      images: ['/og-image.jpg'],
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const t = getT(lang)
  const detail = t.serviceDetail[slug]
  if (!detail) notFound()

  const svcItem = t.services.serviceItems.find(s => s.slug === slug)
  const p = `/${lang}`
  const pageUrl = `https://pmax.online/${lang}/services/${slug}/`

  const svcLabel = lang === 'de' ? 'Leistungen' : lang === 'es' ? 'Servicios' : 'Services'
  const jsonLd = [
    breadcrumb([
      { name: 'Home', url: `https://pmax.online/${lang}/` },
      { name: svcLabel, url: `https://pmax.online/${lang}/services/` },
      { name: svcItem?.title ?? slug, url: pageUrl },
    ]),
    serviceSchema({ name: svcItem?.title ?? slug, description: detail.metaDesc, url: pageUrl, serviceType: svcItem?.title ?? slug }),
    faqPage(detail.faqs),
  ]

  const seeResultsLabel = lang === 'de' ? 'Zu den Referenzen' : lang === 'es' ? 'Ver resultados' : 'See results'
  const relatedWorkLabel = lang === 'de' ? 'Verwandte Referenz' : lang === 'es' ? 'Trabajo relacionado' : 'Related work'
  const archiveLabel = lang === 'de' ? 'Aus dem Archiv.' : lang === 'es' ? 'Del archivo.' : 'From the archive.'
  const caseStudyLabel = lang === 'de' ? 'Fallstudie' : lang === 'es' ? 'Caso de estudio' : 'Case study'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href={p}>Home</Link><span className="sep">/</span>
              <Link href={`${p}/services`}>{svcLabel}</Link><span className="sep">/</span>
              <span>{svcItem?.title}</span>
            </nav>
            <span className="page-intro-eyebrow">{lang === 'de' ? `Leistung · ${svcItem?.num ?? ''}` : lang === 'es' ? `Servicio · ${svcItem?.num ?? ''}` : `Service · ${svcItem?.num ?? ''}`}</span>
            <h1 className="page-intro-title">{detail.headline}</h1>
            <p className="page-intro-deck">{detail.deck}</p>
          </div>
        </section>

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

        <section className="section">
          <div className="container">
            <header className="section-head reveal">
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">{lang === 'de' ? 'Die Methode' : lang === 'es' ? 'La metodología' : 'The method'}</div>
                <h2 className="section-head-title">{lang === 'de' ? 'Was wir tun.' : lang === 'es' ? 'Qué hacemos.' : 'What we do.'}</h2>
              </div>
            </header>
            <div className="prose">{detail.prose}</div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-h">
          <div className="container">
            <header className="section-head reveal" style={{ marginBottom: 24 }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">FAQ</div>
                <h2 className="section-head-title" id="faq-h">{lang === 'de' ? 'Fragen, beantwortet.' : lang === 'es' ? 'Preguntas, respondidas.' : 'Questions, answered.'}</h2>
              </div>
            </header>
            <FaqList items={detail.faqs} />
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <header className="section-head reveal">
            <div style={{ flex: 1, minWidth: 280 }}>
              <div className="section-head-kicker">{relatedWorkLabel}</div>
              <h2 className="section-head-title">{archiveLabel}</h2>
            </div>
          </header>
          <Link href={`${p}/cases`} className="stream-card is-slate" style={{ display: 'grid' }}>
            <div>
              <span className="stream-kicker">{caseStudyLabel}</span>
              <h3 className="stream-head">{seeResultsLabel} →</h3>
            </div>
          </Link>
        </section>

        <section className="container" style={{ padding: '24px 0 96px' }}>
          <div className="promo reveal">
            <div>
              <span className="promo-eyebrow">{lang === 'de' ? 'Gespräch vereinbaren' : lang === 'es' ? 'Hablemos' : "Let's talk"}</span>
              <h2 className="promo-headline">{lang === 'de' ? 'Kostenloses erstes Gespräch.' : lang === 'es' ? 'Primera llamada gratuita.' : 'Free first conversation.'}</h2>
              <p className="promo-deck">{lang === 'de' ? 'Erzählen Sie uns, was Sie aufbauen wollen. Wir sagen Ihnen direkt, ob wir das richtige Team sind.' : lang === 'es' ? 'Cuéntanos qué quieres construir. Te diremos si somos el equipo adecuado.' : 'Tell us what you want to build. We\'ll tell you whether we\'re the right team.'}</p>
            </div>
            <Link href={`${p}/contact`} className="btn-primary" style={{ whiteSpace: 'nowrap', fontSize: 13, padding: '14px 22px' }}>
              {lang === 'de' ? 'Gespräch buchen' : lang === 'es' ? 'Reservar llamada' : 'Book a call'} <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer locale={lang} />
    </>
  )
}
