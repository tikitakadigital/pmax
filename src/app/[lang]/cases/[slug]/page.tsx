import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { breadcrumb, orgRef } from '@/lib/schema'
import { cases } from '@/lib/content/cases'
import { getCaseDetail } from '@/lib/content/cases-detail'
import { getT } from '@/lib/i18n'
import { caseSlug, canonicalCaseSlug, casePath, caseAlternates } from '@/lib/content/case-slugs'

export function generateStaticParams() {
  return ['de','es'].flatMap(lang => cases.map(c => ({ lang, slug: caseSlug(c.slug, lang) })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug: localSlug } = await params
  const slug = canonicalCaseSlug(localSlug, lang)
  if (!slug) return {}
  const t = getT(lang)
  const locItem = t.cases.items.find(i => i.slug === slug)
  const detail = getCaseDetail(slug)
  const loc = t.caseDetail[slug]
  if (!detail && !locItem) return {}
  return {
    title: loc?.metaTitle ?? detail?.metaTitle ?? `${locItem?.title} | pmax`,
    description: loc?.metaDesc ?? detail?.metaDesc,
    alternates: caseAlternates(slug, lang as 'de' | 'es'),
  }
}

export default async function CasePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug: localSlug } = await params
  const slug = canonicalCaseSlug(localSlug, lang)
  if (!slug) notFound()
  const t = getT(lang)
  const detail = getCaseDetail(slug)
  const locItem = t.cases.items.find(i => i.slug === slug)
  const loc = t.caseDetail[slug]
  if (!detail) notFound()

  const p = `/${lang}`
  const casesLabel = lang === 'de' ? 'Referenzen' : lang === 'es' ? 'Trabajo' : 'Work'
  const heroTitle = loc?.heroTitle ?? locItem?.title ?? detail.heroTitle
  const stats = loc?.stats ?? detail.stats
  const prose = loc?.prose ?? detail.prose
  const isTranslated = !!loc?.prose

  const caseUrl = `https://pmax.online${casePath(slug, lang)}`
  const jsonLd = [
    breadcrumb([
      { name: 'Home', url: `https://pmax.online/${lang}/` },
      { name: casesLabel, url: `https://pmax.online/${lang}/cases/` },
      { name: locItem?.title ?? detail.breadcrumbLabel, url: caseUrl },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${caseUrl}#article`,
      headline: loc?.metaTitle ?? detail.metaTitle,
      description: loc?.metaDesc ?? detail.metaDesc,
      url: caseUrl,
      author: { '@id': 'https://pmax.online/#org' },
      publisher: { '@id': 'https://pmax.online/#org' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': caseUrl },
      inLanguage: lang,
    },
    orgRef,
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className={`case-hero ${detail.heroVariant}`}>
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href={p}>Home</Link><span className="sep">/</span>
              <Link href={`${p}/cases`}>{casesLabel}</Link><span className="sep">/</span>
              <span>{detail.breadcrumbLabel}</span>
            </nav>
            <span className="case-hero-kicker">{detail.heroKicker}</span>
            <h1 className="case-hero-title">{heroTitle}</h1>
            {(loc?.heroDeck ?? detail.heroDeck) && <p className="case-hero-deck">{loc?.heroDeck ?? detail.heroDeck}</p>}
          </div>
        </section>

        <section className="container" style={{ padding: '56px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            {stats.map(({ num, label }) => (
              <li key={label} className="stat">
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <div className="container">
            {!isTranslated && (
              <div style={{ marginBottom: 32, padding: '14px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid #2d2d2d', borderRadius: 8, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#949494', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <span>{lang === 'de' ? 'Diese Fallstudie ist auf Englisch verfügbar' : 'Este caso de estudio está disponible en inglés'}</span>
                <Link href={casePath(slug, 'en')} style={{ color: 'var(--color-jelly-mint)' }}>
                  {lang === 'de' ? 'Auf Englisch lesen →' : 'Leer en inglés →'}
                </Link>
              </div>
            )}
            <div className="prose" style={{ maxWidth: 760, margin: '0 auto' }}>
              {prose}
            </div>
          </div>
        </section>

        {detail.relatedCases && (
          <section className="container" style={{ padding: '24px 0 96px' }}>
            <header className="section-head reveal">
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">{lang === 'de' ? 'Weitere Referenzen' : lang === 'es' ? 'Más trabajo' : 'Related work'}</div>
                <h2 className="section-head-title">{lang === 'de' ? 'Mehr aus dem Archiv.' : lang === 'es' ? 'Más del archivo.' : 'More from the archive.'}</h2>
              </div>
            </header>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {detail.relatedCases.map(rc => (
                <Link key={rc.slug} href={casePath(rc.slug, lang)} className={`stream-card ${rc.variant}`}>
                  <div>
                    <span className="stream-kicker">{lang === 'de' ? 'Fallstudie' : lang === 'es' ? 'Caso de estudio' : 'Case study'}</span>
                    <h3 className="stream-head">{rc.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>
      <Footer locale={lang} />
    </>
  )
}
