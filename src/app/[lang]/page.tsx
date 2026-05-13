import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import StatCounter from '@/components/StatCounter'
import SectionHead from '@/components/SectionHead'
import PromoBlock from '@/components/PromoBlock'
import { getT } from '@/lib/i18n'
import { cases } from '@/lib/content/cases'
import { org, website } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getT(lang)
  return {
    title: t.home.metaTitle,
    description: t.home.metaDesc,
    alternates: {
      canonical: `https://pmax.online/${lang}/`,
      languages: { 'en': 'https://pmax.online/', 'de': 'https://pmax.online/de/', 'es': 'https://pmax.online/es/', 'x-default': 'https://pmax.online/' },
    },
  }
}

const jsonLd = [
  { '@context': 'https://schema.org', ...org },
  website,
]

export default async function LangHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getT(lang)
  const h = t.home
  const p = `/${lang}`

  const marqueeServices = [
    { label: 'Google Ads' }, { label: lang === 'de' ? 'KI-Suchbarkeit' : 'Visibilidad en IA', alt: true },
    { label: 'Meta Ads' }, { label: 'SEO', alt: true },
    { label: 'LinkedIn Ads' }, { label: 'Performance Max', alt: true },
    { label: 'CRO' }, { label: lang === 'de' ? 'Creative' : 'Creatividad', alt: true },
  ]
  const marqueeIndustries = t.industries.items.map((item, i) => ({ label: item.title, alt: i % 2 === 0 }))

  const recentCases = cases.slice(0, 5)
  const caseItems = t.cases.items

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="hero-meta">
              <span className="live">{lang === 'de' ? 'Live von Mallorca' : 'En directo desde Mallorca'}</span>
              <span>Calvià · Hamburg · Remote</span>
              <span>{lang === 'de' ? 'Unabhängig seit 2023' : 'Independientes desde 2023'}</span>
            </div>
            <div id="hero-title" className="hero-mark" aria-hidden="true">
              pmax<span className="dot-mark" aria-hidden="true" />
            </div>
            <div className="hero-rotator" aria-hidden="true">
              <div className="hero-rotator-list">
                {h.rotator.map(w => <span key={w}>{w}</span>)}
              </div>
            </div>
            <div className="hero-tagline-row">
              <h1 className="hero-whisper">{h.tagline}</h1>
              <div className="hero-actions">
                <Link href={`${p}/cases`} className="btn-tertiary">{h.workCta.replace(' →', '')}</Link>
                <Link href={`${p}/contact`} className="nav-cta">
                  {lang === 'de' ? 'Gespräch vereinbaren' : 'Habla con nosotros'} <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="hero-deck">
              <div>
                <span className="hero-deck-eyebrow">{h.deckEyebrow}</span>
                <p className="hero-deck-text">{h.deckText}</p>
              </div>
              <aside className="hero-deck-side" aria-label="Quick facts">
                <StatCounter prefix="€" value={42} suffix="M+" label={h.statSpend} />
                <StatCounter value={120} suffix="+" label={h.statBrands} />
                <StatCounter value={3} suffix={lang === 'de' ? ' Sprachen' : ' idiomas'} label={h.statLangs} />
              </aside>
            </div>
          </div>
        </section>

        <Marquee items={marqueeServices} />

        {/* SERVICES */}
        <section className="section" aria-labelledby="svc-title">
          <div className="container">
            <SectionHead kicker={h.svcKicker} title={h.svcTitle} aside={h.svcAside} />
            <div className="svc-grid reveal-stagger">
              {t.services.serviceItems.map(s => (
                <Link key={s.slug} href={`${p}/services/${s.slug}`} className={`svc-card ${s.variant}${'featured' in s && s.featured ? ' featured' : ''}`}>
                  <span className="svc-num">{'badge' in s && s.badge ? `/ ${s.num} — ${s.badge}` : `/ ${s.num}`}</span>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-deck">{s.deck}</p>
                  {'tags' in s && s.tags && (
                    <div className="svc-tags">{s.tags.map((tag: string) => <span key={tag}>{tag}</span>)}</div>
                  )}
                  <span className="svc-cta">{h.svcCta} <span className="arrow" aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="section" aria-labelledby="work-title">
          <div className="container">
            <SectionHead kicker={h.workKicker} title={h.workTitle} aside={h.workAside} action={<Link href={`${p}/cases`} className="btn-tertiary">{h.workCta}</Link>} />
            <ol className="stream reveal-stagger">
              {recentCases.map(c => {
                const loc = caseItems.find(i => i.slug === c.slug)
                return (
                  <li key={c.slug} className="stream-item">
                    <span className="stream-stamp">{loc?.stamp ?? c.stamp}</span>
                    <Link href={`${p}/cases/${c.slug}`} className={`stream-card ${c.variant}`}>
                      <div>
                        <span className="stream-kicker">{loc?.kicker ?? c.kicker}</span>
                        <h3 className="stream-head">{loc?.title ?? c.title}</h3>
                        <p className="stream-deck">{loc?.deck ?? c.deck}</p>
                      </div>
                      <div className="stream-result">
                        <span className="num">{loc?.result?.num ?? c.result.num}</span>
                        <span className="label">{loc?.result?.label ?? c.result.label}</span>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        <Marquee items={marqueeIndustries} reverse />
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 20 }}>
          <Link href={`${p}/industries`} className="btn-tertiary">{h.industriesCta} <span className="arrow" aria-hidden="true">→</span></Link>
        </div>

        {/* PROCESS */}
        <section className="section" aria-labelledby="process-title">
          <div className="container">
            <SectionHead kicker={h.processKicker} title={h.processTitle} aside={h.processAside} />
            <ol className="stats reveal-stagger">
              {h.processSteps.map(({ step, word, time, desc }) => (
                <li key={step} className="stat">
                  <span className="t-mono-timestamp" style={{ color: 'var(--color-mint)' }}>Step {step}</span>
                  <span className="stat-num">{word}<em>{time}</em></span>
                  <span className="stat-label">{desc}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* JOURNAL */}
        <section className="section" aria-labelledby="journal-title">
          <div className="container">
            <SectionHead kicker={h.journalKicker} title={h.journalTitle} aside={h.journalAside} action={<Link href={`${p}/blog`} className="btn-tertiary">{h.journalCta}</Link>} />
            <div className="svc-grid reveal-stagger">
              {t.blog.posts.slice(0, 3).map((post, i) => {
                const variants = ['is-mint', 'is-slate', 'is-outlined']
                return (
                  <Link key={post.slug} href={`${p}/blog/${post.slug}`} className={`svc-card ${variants[i] ?? 'is-outlined'}`}>
                    <span className="svc-num">{lang === 'de' ? 'Journal' : 'Blog'}</span>
                    <h3 className="svc-title">{post.title}</h3>
                    <p className="svc-deck">{post.deck}</p>
                    <span className="svc-cta">{h.journalRead} <span className="arrow" aria-hidden="true">→</span></span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <PromoBlock
          eyebrow={h.promo.eyebrow}
          headline={h.promo.headline}
          deck={h.promo.deck}
          ctaHref={`${p}/contact`}
          ctaLabel={h.promo.cta}
          secondaryHref={`mailto:hello@pmax.online`}
          secondaryLabel={h.promo.secondary}
        />

      </main>
      <Footer locale={lang} />
    </>
  )
}
