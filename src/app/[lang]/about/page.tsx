import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { breadcrumb, org } from '@/lib/schema'
import { getT } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getT(lang)
  return {
    title: t.about.metaTitle,
    description: t.about.metaDesc,
    alternates: {
      canonical: `https://pmax.online/${lang}/about/`,
      languages: { 'en': 'https://pmax.online/about/', 'de': 'https://pmax.online/de/about/', 'es': 'https://pmax.online/es/about/', 'x-default': 'https://pmax.online/about/' },
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getT(lang)
  const a = t.about
  const p = `/${lang}`

  const jsonLd = [
    breadcrumb([{ name: 'Home', url: `https://pmax.online/${lang}/` }, { name: a.eyebrow, url: `https://pmax.online/${lang}/about/` }]),
    { '@context': 'https://schema.org', '@type': 'AboutPage', url: `https://pmax.online/${lang}/about/`, about: { '@id': 'https://pmax.online/#org' } },
    { '@context': 'https://schema.org', ...org },
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
              <span>{a.eyebrow}</span>
            </nav>
            <span className="page-intro-eyebrow">{a.eyebrow}</span>
            <h1 className="page-intro-title">{a.title}</h1>
            <p className="page-intro-deck">{a.deck}</p>
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat"><span className="stat-num">2023</span><span className="stat-label">{lang === 'de' ? 'Gründung auf Mallorca durch Philipp Enders' : lang === 'es' ? 'Fundada en Mallorca por Philipp Enders' : 'Founded in Mallorca by Philipp Enders'}</span></li>
            <li className="stat"><span className="stat-num">€18M</span><span className="stat-label">{lang === 'de' ? 'Gesamtes Kunden-Mediabudget seit Gründung' : lang === 'es' ? 'Total de inversión publicitaria gestionada' : 'Total client media spend managed'}</span></li>
            <li className="stat"><span className="stat-num">7</span><span className="stat-label">{lang === 'de' ? 'Länder, in denen unsere Kunden tätig sind' : lang === 'es' ? 'Países en los que operan nuestros clientes' : 'Countries our clients operate in'}</span></li>
            <li className="stat"><span className="stat-num">93%</span><span className="stat-label">{lang === 'de' ? 'Kundenbindungsrate über 12 Monate' : lang === 'es' ? 'Tasa de retención de clientes a 12 meses' : 'Client retention over 12 months'}</span></li>
          </ul>
        </section>

        <section className="section">
          <div className="container about-layout">
            <div className="prose reveal">
              <h2>{a.whyTitle}</h2>
              {a.whyText}
              <h2>{a.howTitle}</h2>
              {a.howText}
              <h2>{a.beliefsTitle}</h2>
              <ul>
                {a.beliefs.map(b => (
                  <li key={b.strong}><strong>{b.strong}</strong> {b.text}</li>
                ))}
              </ul>
              <h2>{a.certsTitle}</h2>
              <p>{a.certsText}</p>
              <h2>{a.servicesTitle}</h2>
              <p>{a.servicesText}</p>
              <p>{a.casesText}</p>
            </div>

            <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="card-outlined reveal" style={{ padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)', marginBottom: 14 }}>
                  {a.leadershipLabel}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36, lineHeight: 0.95, color: '#fff', marginBottom: 8 }}>Philipp Enders</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#949494', marginBottom: 14 }}>{a.founderRole}</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: '#e9e9e9', margin: 0 }}>{a.founderBio}</p>
                <a href="https://www.linkedin.com/company/pmax-online-s-l/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', gap: 8, marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)' }}>LinkedIn →</a>
              </div>

              <div className="card-slate reveal" style={{ padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-jelly-mint)', marginBottom: 14 }}>{a.officeLabel}</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.55, color: '#fff', margin: 0 }}>Calle Cordova, 5<br />07184 Calvià<br />Mallorca, Spain</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color: '#e9e9e9', margin: '14px 0 0' }}>
                  <a href="tel:+34871242160">+34 871 242 160</a><br />
                  <a href="mailto:hello@pmax.online">hello@pmax.online</a>
                </p>
              </div>

              <div className="reveal" style={{ border: '1px solid var(--color-ultraviolet)', borderRadius: 'var(--radius-card)', padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-ultraviolet)', marginBottom: 14 }}>{a.startTitle}</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: '#e9e9e9', margin: '0 0 18px' }}>{a.startDeck}</p>
                <Link href={`${p}/contact`} className="btn-primary" style={{ display: 'flex', justifyContent: 'center' }}>
                  {a.startCta} <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </aside>
          </div>
        </section>

      </main>
      <Footer locale={lang} />
    </>
  )
}
