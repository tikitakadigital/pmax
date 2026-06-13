import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import SectionHead from '@/components/SectionHead'
import PromoBlock from '@/components/PromoBlock'
import { breadcrumb, faqPage } from '@/lib/schema'
import { cases } from '@/lib/content/cases'

export const metadata: Metadata = {
  title: 'Marketing Agency in Mallorca | pmax',
  description: 'A performance-led marketing agency in Calvià, Mallorca. Google Ads, Meta, SEO and AI search for German- and English-speaking businesses. Flat monthly fee, never a % of spend.',
  robots: 'index,follow,max-image-preview:large',
  alternates: {
    canonical: 'https://pmax.online/marketing-agency-mallorca/',
    languages: {
      en: 'https://pmax.online/marketing-agency-mallorca/',
      de: 'https://pmax.online/de/marketing-agentur-mallorca/',
      es: 'https://pmax.online/es/agencia-de-marketing-mallorca/',
      'x-default': 'https://pmax.online/marketing-agency-mallorca/',
    },
  },
  openGraph: {
    title: 'Marketing agency in Mallorca — pmax',
    description: 'A performance-led marketing agency in Calvià, Mallorca. Google Ads, Meta, SEO and AI search for German- and English-speaking businesses. Flat monthly fee.',
    url: 'https://pmax.online/marketing-agency-mallorca/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing agency in Mallorca — pmax',
    description: 'Performance-led marketing agency in Calvià, Mallorca. Google Ads, Meta, SEO and AI search. Flat monthly fee.',
    site: '@pmaxonline',
  },
  other: {
    'geo.region': 'ES-PM',
    'geo.placename': 'Calvia, Mallorca, Spain',
    'geo.position': '39.5639;2.5089',
    'ICBM': '39.5639, 2.5089',
  },
}

const faqs = [
  {
    q: 'Is pmax a full-service marketing agency?',
    a: 'We cover the full stack — paid ads, SEO, AI search, CRO, analytics and creative — but run it performance-first, leading with what moves revenue.',
  },
  {
    q: 'How much does a marketing agency in Mallorca cost?',
    a: 'Island retainers typically run €500–3,000 by scope. pmax works on a flat monthly fee agreed up front, never a percentage of ad spend.',
  },
  {
    q: 'Do you work with German-speaking businesses in Mallorca?',
    a: 'Yes — campaigns, reporting and communication in German, from our base in Calvià.',
  },
  {
    q: 'Can you run marketing in English and Spanish too?',
    a: 'English and German as standard, Spanish where it helps your customers.',
  },
  {
    q: 'Where in Mallorca are you based?',
    a: 'Calvià, Mallorca — serving the island, the Balearics, and brands across Europe.',
  },
  {
    q: 'Do you only work with businesses based in Mallorca?',
    a: 'No. Based in Mallorca, working with brands across Europe.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pmax.online/marketing-agency-mallorca/#localbusiness',
  name: 'pmax — Marketing Agency Mallorca',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/marketing-agency-mallorca/',
  telephone: '+34871242160',
  email: 'hello@pmax.online',
  priceRange: '€€',
  vatID: 'ESB57948123',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Cordova, 5',
    addressLocality: 'Calvià',
    addressRegion: 'Illes Balears',
    postalCode: '07184',
    addressCountry: 'ES',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 39.5639, longitude: 2.5089 },
  areaServed: [
    { '@type': 'Place', name: 'Mallorca' },
    { '@type': 'Place', name: 'Palma de Mallorca' },
    { '@type': 'Place', name: 'Calvià' },
    { '@type': 'Place', name: 'Balearic Islands' },
  ],
  knowsLanguage: ['en', 'de', 'es', 'ca'],
  sameAs: [
    'https://www.linkedin.com/company/pmax-online-s-l/',
    'https://www.facebook.com/profile.php?id=61590296614624',
  ],
}

const jsonLd = [
  breadcrumb([
    { name: 'Home', url: 'https://pmax.online/' },
    { name: 'Marketing Agency Mallorca', url: 'https://pmax.online/marketing-agency-mallorca/' },
  ]),
  localBusinessSchema,
  faqPage(faqs),
]

export default function MarketingAgencyMallorcaPage() {
  const unisono = cases.find(c => c.slug === 'unisono')!
  const ledxpress = cases.find(c => c.slug === 'ledxpress')!
  const gabiona = cases.find(c => c.slug === 'gabionas')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span>
              <span>Marketing Agency Mallorca</span>
            </nav>
            <span className="page-intro-eyebrow">Marketing agency · Mallorca · Calvià</span>
            <h1 className="page-intro-title">Marketing agency<br />in Mallorca.</h1>
            <p className="page-intro-deck">
              pmax is a marketing agency in Calvià, Mallorca. We work with German- and
              English-speaking business owners on the island — and with brands across Europe
              that want their marketing run by people who answer the phone. Flat monthly fee,
              agreed up front. Never a percentage of your ad spend.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">7</span>
              <span className="stat-label">services — one integrated team running all of them</span>
            </li>
            <li className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">languages we run campaigns and reporting in</span>
            </li>
            <li className="stat">
              <span className="stat-num">Calvià</span>
              <span className="stat-label">our base — 20 minutes from Palma, on the island</span>
            </li>
            <li className="stat">
              <span className="stat-num">0&nbsp;%</span>
              <span className="stat-label">of media spend charged as fee — always a flat retainer</span>
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              kicker="the approach"
              title={<>What a marketing agency in<br />Mallorca should actually do.</>}
            />
            <div className="prose reveal">
              <p>
                Most agencies on the island sell you a deck. We sell you a fix. Everything we run
                answers to one question — <em>is it actually growing the business?</em> If it
                isn&apos;t, we stop. No vanity metrics, no report full of impressions you can&apos;t
                spend. We are performance-led: the numbers we report are the ones that show up in
                your bank account.
              </p>

              <h2>Seven services, one way of working</h2>
              <ul>
                <li><Link href="/services/google-ads">Google Ads &amp; Performance Max</Link> — Search, Shopping, PMax and YouTube on a clean conversion setup.</li>
                <li><Link href="/services/paid-social">Paid social</Link> — Meta, TikTok and LinkedIn, connected to your CRM.</li>
                <li><Link href="/services/seo">SEO</Link> — technical, content and local SEO that compounds across AI search.</li>
                <li><Link href="/services/ai-visibility">AI search visibility (GEO)</Link> — be the brand ChatGPT, Perplexity and Gemini recommend.</li>
                <li><Link href="/services/conversion-design">Conversion design (CRO)</Link> — more revenue from the same traffic.</li>
                <li><Link href="/services/analytics">Analytics &amp; tracking</Link> — server-side GTM, Consent Mode v2, dashboards that don&apos;t lie.</li>
                <li><Link href="/services/creative">Creative production</Link> — a steady flow of ads, landing pages and video built for testing.</li>
              </ul>

              <h2>Built for Mallorca&apos;s market — in three languages</h2>
              <p>
                Mallorca&apos;s marketing is multilingual by necessity. We run campaigns, landing
                pages, SEO content and reporting in <strong>English, German and Spanish</strong>.
                We know the local channels and the verticals that drive the island: real estate,
                hospitality, e-commerce, healthcare, boating &amp; yachting, and professional
                services. Owner-run businesses based here, and European brands run from the island.
              </p>

              <h2>How we charge</h2>
              <p>
                A flat monthly fee, agreed up front — not a percentage of your media spend.
                Predictable whether you spend €2,000 or €200,000. Our incentive is to make the
                spend work, not to inflate it.
              </p>

              <h2>How we work — four steps, no surprises</h2>
              <ol>
                <li><strong>Listen</strong> — the business first, then the data, then the platforms.</li>
                <li><strong>Fix</strong> — tracking, feeds, schema: the foundations everything stands on.</li>
                <li><strong>Grow</strong> — campaigns scale, creative finds its rhythm.</li>
                <li><strong>Defend</strong> — SEO, AI search and brand protection that compound for years.</li>
              </ol>

              <p style={{ marginTop: 8 }}>
                This page is also available in{' '}
                <Link href="/de/marketing-agentur-mallorca/">German (Marketing Agentur Mallorca)</Link>
                {' '}and{' '}
                <Link href="/es/agencia-de-marketing-mallorca/">Spanish (Agencia de Marketing Mallorca)</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="container" style={{ padding: '0 0 48px' }}>
          <SectionHead kicker="Real results" title="With the numbers in front." />
          <ol className="stream reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stream-item">
              <span className="stream-stamp">{unisono.stamp}</span>
              <Link href={`/cases/${unisono.slug}`} className={`stream-card ${unisono.variant}`}>
                <div>
                  <span className="stream-kicker">{unisono.kicker}</span>
                  <h3 className="stream-head">{unisono.title}</h3>
                  <p className="stream-deck">{unisono.deck}</p>
                  <div className="stream-meta">{unisono.meta.map(m => <span key={m}>{m}</span>)}</div>
                </div>
                <div className="stream-result">
                  <span className="num">{unisono.result.num}</span>
                  <span className="label">{unisono.result.label}</span>
                </div>
              </Link>
            </li>
            <li className="stream-item">
              <span className="stream-stamp">{ledxpress.stamp}</span>
              <Link href={`/cases/${ledxpress.slug}`} className={`stream-card ${ledxpress.variant}`}>
                <div>
                  <span className="stream-kicker">{ledxpress.kicker}</span>
                  <h3 className="stream-head">{ledxpress.title}</h3>
                  <p className="stream-deck">{ledxpress.deck}</p>
                  <div className="stream-meta">{ledxpress.meta.map(m => <span key={m}>{m}</span>)}</div>
                </div>
                <div className="stream-result">
                  <span className="num">{ledxpress.result.num}</span>
                  <span className="label">{ledxpress.result.label}</span>
                </div>
              </Link>
            </li>
            <li className="stream-item">
              <span className="stream-stamp">{gabiona.stamp}</span>
              <Link href={`/cases/${gabiona.slug}`} className={`stream-card ${gabiona.variant}`}>
                <div>
                  <span className="stream-kicker">{gabiona.kicker}</span>
                  <h3 className="stream-head">{gabiona.title}</h3>
                  <p className="stream-deck">{gabiona.deck}</p>
                  <div className="stream-meta">{gabiona.meta.map(m => <span key={m}>{m}</span>)}</div>
                </div>
                <div className="stream-result">
                  <span className="num">{gabiona.result.num}</span>
                  <span className="label">{gabiona.result.label}</span>
                </div>
              </Link>
            </li>
          </ol>
        </section>

        <section className="section" aria-labelledby="faq-h">
          <div className="container">
            <SectionHead kicker="FAQ" title={<span id="faq-h">Questions, answered.</span>} />
            <FaqList items={faqs} />
          </div>
        </section>

        <PromoBlock
          eyebrow="A 30-minute call. No deck. No sales pitch."
          headline={<>Tell us what&apos;s stuck.</>}
          deck="We'll tell you, straight, whether we're the right marketing agency for your business in Mallorca — most calls end with a clear next step, not always with us."
          ctaHref="/contact"
          ctaLabel="Book a call"
          secondaryHref="/cases"
          secondaryLabel="See all case studies →"
        />

      </main>
      <Footer />
    </>
  )
}
