import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import SectionHead from '@/components/SectionHead'
import PromoBlock from '@/components/PromoBlock'
import { breadcrumb, faqPage } from '@/lib/schema'
import { cases } from '@/lib/content/cases'

export const metadata: Metadata = {
  title: 'Marketing Agency in Mallorca — Flat Fee | pmax',
  description: 'pmax is a performance marketing agency in Calvià, Mallorca. Google Ads, Meta, SEO and AI search for German- and English-speaking businesses. Flat monthly fee, never a % of spend. 93% twelve-month client retention.',
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
    type: 'website',
    siteName: 'pmax',
    title: 'Marketing agency in Mallorca — pmax',
    description: 'Performance-led marketing agency in Calvià, Mallorca. Google Ads, Meta, SEO and AI search. Flat monthly fee, 93% client retention.',
    url: 'https://pmax.online/marketing-agency-mallorca/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pmaxonline',
    title: 'Marketing agency in Mallorca — pmax',
    description: 'Performance-led marketing agency in Calvià, Mallorca. Flat monthly fee, never a % of spend.',
    images: ['/og-image.jpg'],
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
    q: 'What does a marketing agency in Mallorca typically charge?',
    a: 'Island retainers vary widely — from €500/month for a single-channel freelancer to €8,000+/month for a full-service agency. pmax works on a flat monthly fee agreed up front, typically €1,500–€5,000 depending on scope and channel count. We never take a percentage of media spend, so our incentive is to make the budget work — not to inflate it.',
  },
  {
    q: 'How long until we see results from marketing?',
    a: 'Paid channels move in weeks — Google Ads and Meta can generate leads within days of launch if the account is set up correctly. SEO compounds from around month three, with meaningful organic growth visible by month six. AI search visibility (appearing in ChatGPT, Perplexity, Gemini) builds over quarters as entity and authority signals accumulate. We will tell you the honest timeline for your specific category on the first call.',
  },
  {
    q: 'What makes you different from an agency on the Spanish mainland?',
    a: 'We are based on the island. We understand that Mallorca\'s buyer populations search in four languages — Spanish, German, English and Catalan — and that a plumbing business in Calvià and a luxury villa brand in Andratx are completely different marketing problems. We have run campaigns for Mallorca businesses since 2019 and know the seasonal demand curves, the local CPC differences, and which channels actually convert on the island.',
  },
  {
    q: 'Do you run campaigns and reporting in German?',
    a: 'Yes. German is a core language for us — campaigns, landing pages, reporting and client communication all in German. The German-speaking buyer population on Mallorca is the single most under-served marketing segment on the island: high spending power, actively searching, and almost entirely ignored by local agencies who only work in Spanish.',
  },
  {
    q: 'Can you handle all our marketing channels under one retainer?',
    a: 'Yes. We run Google Ads, Meta, TikTok, LinkedIn, SEO, AI search visibility, conversion design and analytics under one integrated team and one flat monthly fee. Most clients start with two or three channels and expand as performance data shows where to invest next.',
  },
  {
    q: 'How do we start?',
    a: 'A 30-minute call with no deck and no sales pitch. We ask about the business, where growth is stuck, and what you\'ve tried. We tell you honestly whether we\'re the right agency for your situation — and if we\'re not, we\'ll say so. Most calls end with a clear next step.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pmax.online/marketing-agency-mallorca/#localbusiness',
  name: 'pmax — Marketing Agency Mallorca',
  legalName: 'PMax Online S.L.',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/marketing-agency-mallorca/',
  telephone: '+34871242160',
  email: 'hello@pmax.online',
  priceRange: '€€',
  vatID: 'ESB57948123',
  foundingDate: '2019',
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
    { '@type': 'Place', name: 'Spain' },
    { '@type': 'Place', name: 'Europe' },
  ],
  knowsLanguage: ['en', 'de', 'es', 'ca'],
  sameAs: [
    'https://www.linkedin.com/company/pmax-online-s-l/',
    'https://www.facebook.com/profile.php?id=61590296614624',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '2',
    bestRating: '5',
  },
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
            <span className="page-intro-eyebrow">Marketing agency · Mallorca · Calvià · Est. 2019</span>
            <h1 className="page-intro-title">Marketing agency<br />in Mallorca.</h1>
            <p className="page-intro-deck">
              pmax (PMax Online S.L.) is a performance marketing agency in Calvià, Mallorca.
              We run Google Ads, Meta, SEO and AI search for German- and English-speaking
              businesses on the island — and for European brands that want their marketing
              run by people who answer the phone. Flat monthly fee, agreed up front.
              Never a percentage of your ad spend.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">93&nbsp;%</span>
              <span className="stat-label">twelve-month client retention rate</span>
            </li>
            <li className="stat">
              <span className="stat-num">€8.4M</span>
              <span className="stat-label">annual paid media managed across active accounts</span>
            </li>
            <li className="stat">
              <span className="stat-num">Calvià</span>
              <span className="stat-label">our base — 20 minutes from Palma, on the island since 2019</span>
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
              kicker="the mallorca market"
              title={<>Marketing in Mallorca is a seven-service,<br />four-language, twelve-month problem.</>}
            />
            <div className="prose reveal">
              <p>
                Mallorca is not a simple market to run marketing in. There are four overlapping
                buyer populations — Spanish residents, German expats and property owners,
                English-speaking tourists and retirees, and a Catalan-speaking local base —
                each searching differently, each responding to different messages, and each
                active in different seasons.
              </p>
              <p>
                A villa rental business in Andratx needs German Google Ads in January (early
                bookers), English Meta in March (peak decision), and Spanish SEO year-round
                for the local search share. A restaurant in Palma needs Google Maps visibility
                in four languages and a Meta presence that converts during the tourist months
                without burning budget in January. A yacht charter company needs remarketing
                windows of 60–90 days, not the Meta default of 30.
              </p>
              <p>
                Most agencies on the island pick one channel, one language, and call it done.
                The businesses that grow here run an integrated programme — paid, organic,
                and AI search — and they run it in the languages their customers actually use.
              </p>

              <h2>Seven services, one integrated team</h2>
              <ul>
                <li><Link href="/services/google-ads">Google Ads &amp; Performance Max</Link> — Search, Shopping, PMax and YouTube on a clean conversion setup. Brand exclusions on PMax, proper offline conversion imports, weekly account reviews.</li>
                <li><Link href="/services/paid-social">Paid social</Link> — Meta, TikTok and LinkedIn connected to your CRM. Creative-led and measured against revenue, not impressions.</li>
                <li><Link href="/seo-company-mallorca">SEO</Link> — technical, content and local SEO in four languages. Rankings that compound and carry into AI search.</li>
                <li><Link href="/services/ai-visibility">AI search visibility (GEO)</Link> — be the business ChatGPT, Perplexity and Google AI Overviews cite when someone asks for an agency, villa, hotel or service in Mallorca.</li>
                <li><Link href="/services/conversion-design">Conversion design (CRO)</Link> — more revenue from the same traffic. Landing page rebuilds, booking flow optimisation, A/B testing.</li>
                <li><Link href="/services/analytics">Analytics &amp; tracking</Link> — server-side GTM, Consent Mode v2, GA4, CRM-fed offline conversions. The measurement layer everything else depends on.</li>
                <li><Link href="/services/creative">Creative production</Link> — ads, landing pages and video on a weekly cadence, briefed by media data and built for testing.</li>
              </ul>

              <h2>Who we work with on the island</h2>
              <ul>
                <li><strong>Hospitality and villa rentals</strong> — hotels, boutique rentals and villa agencies. Multilingual campaigns for a market that peaks hard in summer and goes quiet in January.</li>
                <li><strong>Real estate</strong> — agencies serving German and English-speaking buyers searching for island property in their own language. See our <Link href="/industries/real-estate/">real estate marketing playbook</Link>.</li>
                <li><strong>Marine and yachting</strong> — charter businesses with long booking windows and a genuinely global customer base. Eight-language campaigns, 90-day remarketing.</li>
                <li><strong>Healthcare and aesthetics</strong> — clinics in Palma and Calvià serving international patients who research across languages before enquiring.</li>
                <li><strong>Professional services</strong> — lawyers, architects, accountants and consultants serving Mallorca&apos;s expatriate community in German and English.</li>
                <li><strong>E-commerce</strong> — Mallorcan brands selling to Germany, the UK and the rest of Europe. Multilingual SEO, Shopping and Performance Max.</li>
              </ul>

              <h2>How we charge</h2>
              <p>
                A flat monthly fee, agreed before we start — not a percentage of your media
                spend. Typical retainers run €1,500–€5,000/month depending on channel count
                and scope. The media budget is paid directly by you to the platforms; we never
                handle it. Our incentive is to make the spend work, not to inflate it — which
                is the structural problem with percentage-fee agencies.
              </p>

              <h2>How we work — four steps</h2>
              <ol>
                <li><strong>Listen</strong> — the business first, then the data, then the platforms. We spend the first week understanding where revenue actually comes from before touching a campaign.</li>
                <li><strong>Fix</strong> — tracking, feeds, schema, Google Business Profile: the foundations everything else stands on. Most new accounts have at least one significant measurement problem.</li>
                <li><strong>Grow</strong> — campaigns scale, creative finds its rhythm, SEO starts compounding.</li>
                <li><strong>Defend</strong> — SEO, AI search and brand protection that compound for years, not quarters.</li>
              </ol>

              <div className="prose-callout">
                <div className="prose-callout-kicker">The honest version</div>
                <p>
                  Marketing does not work overnight, and any agency that says otherwise is either
                  lying or selling you something with short legs. Paid channels move in weeks.
                  SEO compounds from month three. AI search visibility builds over quarters.
                  The businesses we work with for three or four years get dramatically better
                  outcomes than the ones who measure us at ninety days. If that timeline
                  does not work for you, we are probably not the right fit — and we will tell
                  you that on the first call.
                </p>
              </div>

              <p style={{ marginTop: 8 }}>
                This page is also available in{' '}
                <Link href="/de/marketing-agentur-mallorca/">German (Marketing Agentur Mallorca)</Link>
                {' '}and{' '}
                <Link href="/es/agencia-de-marketing-mallorca/">Spanish (Agencia de Marketing Mallorca)</Link>.
              </p>
              <p>
                Looking for Google Ads specifically across Spain?{' '}
                <Link href="/google-ads-agency-spain/">Our Google Ads agency in Spain page</Link>
                {' '}covers multilingual paid search across the Spanish market — regional CPCs,
                campaign structure and Performance Max.
              </p>
            </div>
          </div>
        </section>

        <section className="container reveal" style={{ padding: '0 0 48px' }}>
          <figure style={{ margin: 0 }}>
            <div className="card-outlined" style={{ padding: 0, overflow: 'hidden' }}>
              <Image
                src="/palma-cathedral.webp"
                alt="Palma Cathedral, Mallorca — pmax is based in Calvià, 20 minutes away"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>
            <figcaption style={{ marginTop: 10, fontSize: 13, color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
              Based in Calvià, Mallorca (PMax Online S.L. · VAT ES B57948123) — 20 minutes from Palma Cathedral
            </figcaption>
          </figure>
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
