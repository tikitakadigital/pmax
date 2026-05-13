import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import { siteAlternates } from '@/lib/hreflang'
import { breadcrumb } from '@/lib/schema'
import { services } from '@/lib/content/services'

export const metadata: Metadata = {
  title: 'Performance marketing services — Google Ads, SEO & AI | pmax',
  description: 'Google Ads, Meta, LinkedIn, SEO, AI visibility, conversion design and analytics — seven services run to deliver measurable, profitable results.',
  alternates: siteAlternates('/services/'),
}

const faqs = [
  { q: 'What services does pmax offer?', a: 'pmax offers seven core services: AI search visibility (GEO), Google Ads (Search, Shopping, Performance Max, YouTube), paid social (Meta, TikTok, LinkedIn, Microsoft Ads), SEO (technical, content, digital PR, local), conversion design (CRO and A/B testing), analytics and tracking (GA4, server-side GTM, Consent Mode v2, CRM-fed offline conversions), and creative production (performance creative, landing pages, UGC video at scale).' },
  { q: 'What size of business does pmax typically work with?', a: 'Every size. Some of our best work has been for small Mallorca businesses doing their first proper Google or Meta campaigns. We also run programmes for European brands spending six figures a month on media. What matters more than your budget is whether the work can actually move your business — we will tell you honestly on the first call.' },
  { q: 'Do you charge a percentage of media spend?', a: 'No. We charge flat monthly retainers. We believe percentage-of-spend creates the wrong incentives — agencies recommending higher budgets to grow their own revenue. A flat fee aligns us with what is genuinely right for your business, which sometimes means recommending you spend less, not more.' },
  { q: 'Where is pmax based and which markets do you serve?', a: 'We are based in Calvià, Mallorca, Spain, with the majority of our 14-person team in our Mallorca office. We work in English, German and Spanish, serving clients across the DACH region, Iberia, the UK, Benelux and the Nordics. About 60% of our clients are German-speaking, 25% English-speaking, 15% Spanish-speaking.' },
  { q: 'How long are pmax retainers?', a: 'Initial retainers are 6 months. After that, contracts roll month-to-month with a 60-day notice period either way. Our 12-month retention rate is 93%, but we never lock clients in beyond what is fair — if we are not delivering, you should be able to leave easily.' },
]

const jsonLd = [
  breadcrumb([{ name: 'Home', url: 'https://pmax.online/' }, { name: 'Services', url: 'https://pmax.online/services/' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
]

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>Services</span>
            </nav>
            <span className="page-intro-eyebrow">01 — What we do</span>
            <h1 className="page-intro-title">
              Performance marketing,<br />built like <em>engineering</em>.
            </h1>
            <p className="page-intro-deck">
              Seven services. One operating system. We don&apos;t sell channels in isolation — we run a system where Google Ads, Meta, SEO, AI search and analytics all work from the same data and the same goal: profitable growth you can actually measure.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-head reveal">
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">All services</div>
                <h2 className="section-head-title">Pick a&nbsp;starting&nbsp;point.</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
                <p className="section-head-aside" style={{ margin: 0 }}>Most clients start with one or two services and grow into a fuller programme as the numbers come in. We&apos;re happy either way.</p>
                <Link href="/cases" className="btn-tertiary">See client results →</Link>
              </div>
            </header>

            <div className="svc-grid reveal-stagger">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className={`svc-card ${s.variant}${s.featured ? ' featured' : ''}`}>
                  <span className="svc-num">{s.num}{s.badge ? ` · ${s.badge}` : ''}</span>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-deck">{s.deck}</p>
                  {s.tags && (
                    <div className="svc-tags">
                      {s.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                  )}
                  <span className="svc-cta">See the method <span className="arrow" aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container" style={{ padding: '64px 0 96px' }}>
          <div className="promo reveal">
            <div>
              <span className="promo-eyebrow">Start a project</span>
              <h2 className="promo-headline">Want to talk through a&nbsp;service?</h2>
              <p className="promo-deck">First call is 30 minutes, on us. We&apos;ll look at where you are now and tell you honestly which one or two services would move the needle for your business.</p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              Book a call <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-h">
          <div className="container">
            <header className="section-head reveal" style={{ marginBottom: 24 }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div className="section-head-kicker">FAQ</div>
                <h2 className="section-head-title" id="faq-h">Questions, answered.</h2>
              </div>
            </header>
            <FaqList items={faqs} />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
