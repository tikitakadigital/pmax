import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import { breadcrumb, serviceSchema, faqPage } from '@/lib/schema'
import { getT } from '@/lib/i18n'

const SLUGS = ['ecommerce','real-estate','healthcare','renewables','boating','hr','retail','automotive','energy','hospitality']

export function generateStaticParams() {
  return ['de','es'].flatMap(lang => SLUGS.map(slug => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const t = getT(lang)
  const detail = t.industryDetail[slug]
  if (!detail) return {}
  return {
    title: detail.metaTitle,
    description: detail.metaDesc,
    alternates: {
      canonical: `https://pmax.online/${lang}/industries/${slug}/`,
      languages: { 'en': `https://pmax.online/industries/${slug}/`, 'de': `https://pmax.online/de/industries/${slug}/`, 'es': `https://pmax.online/es/industries/${slug}/`, 'x-default': `https://pmax.online/industries/${slug}/` },
    },
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const t = getT(lang)
  const detail = t.industryDetail[slug]
  if (!detail) notFound()

  const indItem = t.industries.items.find(i => i.slug === slug)
  const p = `/${lang}`
  const indLabel = lang === 'de' ? 'Branchen' : lang === 'es' ? 'Sectores' : 'Industries'
  const industryName = indItem?.title ?? slug
  const pageUrl = `https://pmax.online/${lang}/industries/${slug}/`

  const jsonLd = [
    breadcrumb([
      { name: 'Home', url: `https://pmax.online/${lang}/` },
      { name: indLabel, url: `https://pmax.online/${lang}/industries/` },
      { name: industryName, url: pageUrl },
    ]),
    serviceSchema({ name: `${industryName} ${lang === 'de' ? 'Marketing' : lang === 'es' ? 'marketing' : 'digital marketing'}`, description: detail.metaDesc, url: pageUrl, serviceType: `${industryName} marketing` }),
    ...(detail.faqs && detail.faqs.length > 0 ? [faqPage(detail.faqs)] : []),
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
              <Link href={`${p}/industries`}>{indLabel}</Link><span className="sep">/</span>
              <span>{industryName}</span>
            </nav>
            <span className="page-intro-eyebrow">{lang === 'de' ? `Branche · ${industryName}` : lang === 'es' ? `Sector · ${industryName}` : `Industry · ${industryName}`}</span>
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
                <h2 className="section-head-title">{lang === 'de' ? 'Wie wir arbeiten.' : lang === 'es' ? 'Cómo trabajamos.' : 'How we work.'}</h2>
              </div>
            </header>
            <div className="prose">{detail.prose}</div>
          </div>
        </section>

        {detail.faqs && detail.faqs.length > 0 && (
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
        )}

        <section className="container" style={{ padding: '24px 0 96px' }}>
          <div className="promo reveal">
            <div>
              <span className="promo-eyebrow">{lang === 'de' ? 'Mit uns arbeiten' : lang === 'es' ? 'Trabaja con nosotros' : 'Work with us'}</span>
              <h2 className="promo-headline">{lang === 'de' ? `Ihre ${industryName}-Marke wachsen lassen.` : lang === 'es' ? `Hacemos crecer tu marca de ${industryName.toLowerCase()}.` : `Grow your ${industryName.toLowerCase()} brand.`}</h2>
              <p className="promo-deck">{lang === 'de' ? 'Erzählen Sie uns von Ihrem aktuellen Setup. Wir zeigen Ihnen, wo die Lücken sind.' : lang === 'es' ? 'Cuéntanos sobre tu situación actual. Te mostramos dónde están las oportunidades.' : 'Tell us about your current setup. We\'ll show you where the gaps are.'}</p>
            </div>
            <Link href={`${p}/contact`} className="btn-primary" style={{ whiteSpace: 'nowrap', fontSize: 13, padding: '14px 22px' }}>
              {lang === 'de' ? 'Kostenloses Audit' : lang === 'es' ? 'Auditoría gratuita' : 'Get a free audit'} <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer locale={lang} />
    </>
  )
}
