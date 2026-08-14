import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { breadcrumb, orgRef } from '@/lib/schema'
import { getT } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getT(lang)
  return {
    title: t.cases.metaTitle,
    description: t.cases.metaDesc,
    alternates: {
      canonical: `https://pmax.online/${lang}/cases/`,
      languages: { 'en': 'https://pmax.online/cases/', 'de': 'https://pmax.online/de/cases/', 'es': 'https://pmax.online/es/cases/', 'x-default': 'https://pmax.online/cases/' },
    },
  }
}

export default async function CasesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getT(lang)
  const c = t.cases
  const p = `/${lang}`

  const crumbLabel = lang === 'de' ? 'Referenzen' : lang === 'es' ? 'Trabajo' : 'Work'
  const jsonLd = [
    breadcrumb([{ name: 'Home', url: `https://pmax.online/${lang}/` }, { name: crumbLabel, url: `https://pmax.online/${lang}/cases/` }]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `https://pmax.online/${lang}/cases/#collection`,
      name: c.metaTitle,
      description: c.metaDesc,
      url: `https://pmax.online/${lang}/cases/`,
      publisher: { '@id': 'https://pmax.online/#org' },
      inLanguage: lang,
    },
    orgRef,
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
            <span className="page-intro-eyebrow">{c.eyebrow}</span>
            <h1 className="page-intro-title">{c.title}</h1>
            <p className="page-intro-deck">{c.deck}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-head reveal">
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">{c.allKicker}</div>
                <h2 className="section-head-title">{c.allTitle}</h2>
              </div>
              <Link href={`${p}/services`} className="btn-tertiary">{c.seeServices}</Link>
            </header>
            <ol className="stream" style={{ listStyle: 'none' }}>
              {c.items.map(item => (
                <li key={item.slug} className="stream-item">
                  <span className="stream-stamp">{item.stamp}</span>
                  <Link href={`${p}/cases/${item.slug}`} className={`stream-card ${item.variant}`}>
                    <div>
                      <span className="stream-kicker">{item.kicker}</span>
                      <h2 className="stream-head">{item.title}</h2>
                      <p className="stream-deck">{item.deck}</p>
                    </div>
                    <div className="stream-result">
                      <span className="num">{item.result.num}</span>
                      <span className="label">{item.result.label}</span>
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
              <span className="promo-eyebrow">{c.promoEyebrow}</span>
              <h2 className="promo-headline">{c.promoHeadline}</h2>
              <p className="promo-deck">{c.promoDeck}</p>
            </div>
            <Link href={`${p}/contact`} className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              {c.promoBtn} <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer locale={lang} />
    </>
  )
}
