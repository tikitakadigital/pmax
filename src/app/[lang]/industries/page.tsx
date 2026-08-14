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
    title: t.industries.metaTitle,
    description: t.industries.metaDesc,
    alternates: {
      canonical: `https://pmax.online/${lang}/industries/`,
      languages: { 'en': 'https://pmax.online/industries/', 'de': 'https://pmax.online/de/industries/', 'es': 'https://pmax.online/es/industries/', 'x-default': 'https://pmax.online/industries/' },
    },
  }
}

export default async function IndustriesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getT(lang)
  const ind = t.industries
  const p = `/${lang}`

  const crumbLabel = lang === 'de' ? 'Branchen' : lang === 'es' ? 'Sectores' : 'Industries'
  const jsonLd = [
    breadcrumb([{ name: 'Home', url: `https://pmax.online/${lang}/` }, { name: crumbLabel, url: `https://pmax.online/${lang}/industries/` }]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `https://pmax.online/${lang}/industries/#collection`,
      url: `https://pmax.online/${lang}/industries/`,
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
            <span className="page-intro-eyebrow">{ind.eyebrow}</span>
            <h1 className="page-intro-title">{ind.title}</h1>
            <p className="page-intro-deck">{ind.deck}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="svc-grid reveal-stagger">
              {ind.items.map((item) => (
                <Link key={item.slug} href={`${p}/industries/${item.slug}`} className={`svc-card ${item.variant}${'featured' in item && item.featured ? ' featured' : ''}`}>
                  <span className="svc-num">{'badge' in item && item.badge ? `${item.num} · ${item.badge}` : item.num}</span>
                  <h2 className="svc-title">{item.title}</h2>
                  <p className="svc-deck">{item.deck}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer locale={lang} />
    </>
  )
}
