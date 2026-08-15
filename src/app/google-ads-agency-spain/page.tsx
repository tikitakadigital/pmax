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
  title: 'Google Ads Agency Spain | pmax — Based in Spain, fluent in your market',
  description: 'pmax is a Google Ads agency based in Spain. We run Search, Shopping and Performance Max for businesses entering the Spanish market and brands already here — in Spanish, German, English and Catalan. Flat fees, no % of spend.',
  robots: 'index,follow,max-image-preview:large',
  alternates: {
    canonical: 'https://pmax.online/google-ads-agency-spain/',
    languages: {
      en: 'https://pmax.online/google-ads-agency-spain/',
      de: 'https://pmax.online/de/google-ads-agentur-spanien/',
      es: 'https://pmax.online/es/agencia-google-ads-espana/',
      'x-default': 'https://pmax.online/google-ads-agency-spain/',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'pmax',
    title: 'Google Ads Agency Spain | pmax — Based in Spain, fluent in your market',
    description: 'pmax is a Google Ads agency based in Spain. Search, Shopping and Performance Max for businesses entering the Spanish market — in Spanish, German, English and Catalan.',
    url: 'https://pmax.online/google-ads-agency-spain/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pmaxonline',
    title: 'Google Ads Agency Spain | pmax — Based in Spain, fluent in your market',
    description: 'pmax is a Google Ads agency based in Spain. Search, Shopping and Performance Max in Spanish, German, English and Catalan.',
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
    q: 'What does a Google Ads agency based in Spain do differently?',
    a: 'The main difference is market fluency and accountability. Spain is not one homogenous market — CPCs in Madrid and Barcelona run meaningfully higher than in Andalucía or the islands, seasonality swings are extreme in tourism-adjacent categories, and the four-language reality (Spanish, Catalan, English, German) means a single-language campaign misses large segments of the buying public. A Spain-based agency that runs accounts here every day understands which geo-bid adjustments actually matter, which keywords convert versus which just look good in a report, and how to handle Spanish invoicing and IVA settings that routinely trip up agencies working the country remotely.',
  },
  {
    q: 'We are a foreign business entering the Spanish market — can you help?',
    a: 'That is our most common brief from new clients. Germany and the UK in particular are sending more businesses into Spain in 2025–2026, attracted by lower operating costs, strong domestic consumption, and record inbound tourism driving service demand. We set up the account from scratch in Spanish, advise on localised landing pages, help you understand where competition is thin versus where you will be outspent, and give honest guidance on budget before you commit. We do not work on percentage of spend, so our advice on whether to increase budget is never conflicted.',
  },
  {
    q: 'How do Google Ads CPCs in Spain compare to the UK or Germany?',
    a: 'Generally 30–60% lower in most B2B and e-commerce categories — which makes Spain genuinely attractive for market entry right now. Madrid and Barcelona are the exceptions: certain financial, legal and real estate keywords in the capital now match or exceed London CPCs. The bigger opportunity is that English-language competition for Spanish commercial intent is still thin. Most of the brands bidding on "Google Ads agency Spain" in English are either small local shops or large global networks — the mid-market is underserved. That is exactly where we sit.',
  },
  {
    q: 'Do you run Performance Max and Shopping for Spanish e-commerce?',
    a: 'Yes. Spain is one of the fastest-growing e-commerce markets in Western Europe — annual online retail growth has consistently outpaced the EU average and shows no sign of slowing. PMax is the dominant vehicle for shopping intent, but it requires proper guardrails: brand exclusions to stop it cannibalising organic brand traffic, asset groups split by margin tier, and CRM data fed back in for accounts with a meaningful offline component. We also handle Spanish Merchant Center configuration — IVA tax settings, Correos and MRW shipping rules, and the product data quality issues that cause Spanish Shopping campaigns to underperform for foreign sellers.',
  },
  {
    q: 'What does tourism seasonality mean for Google Ads in Spain?',
    a: 'Spain broke its international visitor record in 2024 and is on track to do so again in 2025. That is good news for tourism businesses but it creates a CPC problem for everyone else: advertisers in hospitality, activities, villa rentals and marine see demand spike in Q2–Q3 when they need to have already won their rankings and audience lists. For year-round businesses the tourist season inflates auction floors in adjacent categories from April through September. We model the seasonality curve for every account, build pre-season — not during-season — and plan budgets around actual demand, not calendar quarters.',
  },
  {
    q: 'Do you charge a percentage of Google Ads spend?',
    a: 'No. Flat monthly retainer, always. Percentage-of-spend pricing creates a structural conflict of interest: the agency earns more by recommending bigger budgets regardless of efficiency. Our fee does not change whether your media budget is €3,000 or €300,000 per month. We never touch your media money — you pay Google directly, we manage the account. When you ask us whether to increase spend, we have no financial reason to say yes.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pmax.online/google-ads-agency-spain/#localbusiness',
  name: 'pmax — Google Ads Agency Spain',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/google-ads-agency-spain/',
  telephone: '+34871242160',
  email: 'hello@pmax.online',
  priceRange: '€€',
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
    { '@type': 'Country', name: 'Spain' },
    { '@type': 'City', name: 'Madrid' },
    { '@type': 'City', name: 'Barcelona' },
    { '@type': 'Place', name: 'Mallorca' },
    { '@type': 'AdministrativeArea', name: 'European Union' },
  ],
  knowsLanguage: ['es', 'de', 'en', 'ca'],
  sameAs: ['https://www.linkedin.com/company/pmax-online-s-l/'],
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
    { name: 'Google Ads Agency Spain', url: 'https://pmax.online/google-ads-agency-spain/' },
  ]),
  localBusinessSchema,
  faqPage(faqs),
]

export default function GoogleAdsAgencySpainPage() {
  const imero = cases.find(c => c.slug === 'imero')!
  const gabiona = cases.find(c => c.slug === 'gabionas')!
  const luxaflex = cases.find(c => c.slug === 'luxaflex')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span>
              <span>Google Ads Agency Spain</span>
            </nav>
            <span className="page-intro-eyebrow">Google Ads · Spain · Based in Calvià</span>
            <h1 className="page-intro-title">Google Ads agency<br />in Spain.</h1>
            <p className="page-intro-deck">
              Most agencies that claim to cover Spain are either remote UK or US shops with nobody
              on the ground, or local Spanish agencies whose English SEO is invisible to foreign
              buyers. We are physically based in Spain, run accounts in Spanish, German, English
              and Catalan every day, and charge flat fees — never a percentage of your spend.
            </p>
          </div>
        </section>

        <section className="container reveal" style={{ padding: '48px 0 0' }}>
          <div className="card-outlined" style={{ padding: 0, overflow: 'hidden' }}>
            <Image
              src="/palma-cathedral.webp"
              alt="Palma Cathedral, Mallorca — pmax is based in Spain"
              width={1200}
              height={800}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">€8.4M</span>
              <span className="stat-label">annual Google Ads media managed across active accounts</span>
            </li>
            <li className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">languages we run campaigns in — Spanish, German, English, Catalan</span>
            </li>
            <li className="stat">
              <span className="stat-num">Spain</span>
              <span className="stat-label">where we are based — not managing remotely from London</span>
            </li>
            <li className="stat">
              <span className="stat-num">0%</span>
              <span className="stat-label">of media spend charged as a fee — flat retainer, always</span>
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              kicker="the spain brief"
              title={<>Spain in 2026 is a different<br />Google Ads market than it was.</>}
            />
            <div className="prose reveal">
              <p>
                Spain&apos;s economy has outperformed most of Western Europe since 2023. Tourism
                is breaking records, foreign direct investment is rising, and a wave of German and
                British businesses is entering the market — attracted by lower operating costs,
                strong domestic consumption, and a young, digitally-native population that buys
                online at one of the highest rates in the EU. The result: Spanish Google Ads
                auctions are getting more competitive, CPCs are rising in the major cities, and the
                window to enter cheaply is narrowing.
              </p>
              <p>
                At the same time, the opportunity for foreign businesses searching in English is
                still wide open. Most of the competition on queries like &ldquo;Google Ads agency
                Spain&rdquo; is either small local shops or large global networks charging 15–20%
                of media spend. The mid-market — a genuinely Spain-based team that understands the
                market and charges flat fees — is almost uncontested.
              </p>

              <h2>What running Google Ads in Spain actually requires</h2>

              <h3>1. Four languages, not one</h3>
              <p>
                Spain has four co-official languages and a significant English and German-speaking
                population on the coasts and islands. A campaign that only runs in Castilian Spanish
                ignores Catalan speakers in the Barcelona and Valencia markets (who convert well for
                local businesses that address them in Catalan), the English-speaking expat and
                tourist market on the Costa del Sol and the islands, and the German-speaking market
                concentrated in Mallorca, Tenerife and Gran Canaria. We build and manage in every
                language that has commercial volume for your category — not as a upsell, as a
                standard practice.
              </p>

              <h3>2. Regional CPC strategy is not optional</h3>
              <p>
                Madrid and Barcelona now bid at levels close to Northern European cities for premium
                categories — B2B software, legal, financial services, high-end real estate. The rest
                of Spain bids significantly lower. If you are running a single national campaign
                without geographic bid adjustments, you are either overpaying in the provinces or
                losing in the cities. The right structure depends on your product, your margins and
                where your customers actually are. We model this per account — there is no formula
                that works for everyone.
              </p>

              <h3>3. Tourism seasonality distorts CPCs beyond the obvious categories</h3>
              <p>
                Spain broke its international visitor record in 2024. That is good news for
                tourism businesses, but it creates an auction problem for everyone else. Advertisers
                in hospitality, activities, villa rentals and marine drive up CPCs in adjacent
                categories from April through September. Year-round businesses that do not plan for
                this end up paying Q2–Q3 rates they did not budget for. We model the full-year
                demand curve for every Spanish account and plan spend accordingly — not by calendar
                quarter.
              </p>

              <h3>4. Performance Max for Spanish e-commerce — with guardrails</h3>
              <p>
                Spain is one of the fastest-growing e-commerce markets in Western Europe and{' '}
                <Link href="/services/google-ads">Performance Max</Link> is the primary vehicle for
                shopping intent. But PMax without proper setup absorbs brand traffic, conflates margin
                tiers and produces ROAS figures that look strong in the platform and mean nothing for
                your P&L. In every Spanish account we manage, the first step is brand exclusions to
                stop PMax cannibalising organic brand search, asset groups split by product margin,
                and — where the sales cycle is longer than a week — CRM data fed back into Smart
                Bidding. Spanish Merchant Center also requires specific configuration: IVA tax
                settings, carrier-specific shipping rules, and product data quality fixes that
                foreign sellers routinely miss.
              </p>
              <figure style={{ margin: '32px 0' }}>
                <div className="card-outlined" style={{ padding: 0, overflow: 'hidden' }}>
                  <Image
                    src="/google-ads-dashboard-spain.webp"
                    alt="Google Ads dashboard showing Spanish-language search terms — pmax account management"
                    width={1400}
                    height={696}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <figcaption style={{ marginTop: 10, fontSize: 13, color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                  Spanish-language search terms from a live pmax-managed Google Ads account.
                </figcaption>
              </figure>

              <h3>5. The foreign-market-entry brief</h3>
              <p>
                A meaningful share of the businesses searching for a Google Ads agency in Spain in
                English are not yet operating here. They are evaluating Spain as a market, or they
                have taken the decision and need someone to execute. This is work we do regularly —
                setting up Spanish accounts from scratch, localising ad copy properly (not
                auto-translated), advising on landing page strategy, and giving honest guidance on
                which Spanish categories and regions have room for a new entrant and which are
                already saturated. Because we charge flat fees, our advice on whether to enter
                aggressively or cautiously has no financial bias.
              </p>

              <div className="prose-callout">
                <div className="prose-callout-kicker">On fees — the short version</div>
                <p>
                  Every agency that charges a percentage of media spend has an incentive to grow your
                  budget, regardless of whether that benefits you. We charge a flat monthly retainer.
                  You pay Google directly. We have no financial interest in your spend level going up
                  — only in your results improving. That is not a standard agency model in Spain or
                  anywhere else. It is the model we built the business on because we think the other
                  one is broken.
                </p>
              </div>

              <p style={{ marginTop: 8 }}>
                This page is also available in{' '}
                <Link href="/es/agencia-google-ads-espana/">Spanish (Agencia Google Ads España)</Link>
                {' '}and{' '}
                <Link href="/de/google-ads-agentur-spanien/">German (Google Ads Agentur Spanien)</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="faq-h">
          <div className="container">
            <SectionHead kicker="FAQ" title={<span id="faq-h">Questions, answered.</span>} />
            <FaqList items={faqs} />
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <SectionHead kicker="Related work" title="From the archive." />
          <ol className="stream reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stream-item">
              <span className="stream-stamp">{imero.stamp}</span>
              <Link href={`/cases/${imero.slug}`} className={`stream-card ${imero.variant}`}>
                <div>
                  <span className="stream-kicker">{imero.kicker}</span>
                  <h3 className="stream-head">{imero.title}</h3>
                  <p className="stream-deck">{imero.deck}</p>
                  <div className="stream-meta">
                    {imero.meta.map(m => <span key={m}>{m}</span>)}
                  </div>
                </div>
                <div className="stream-result">
                  <span className="num">{imero.result.num}</span>
                  <span className="label">{imero.result.label}</span>
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
                  <div className="stream-meta">
                    {gabiona.meta.map(m => <span key={m}>{m}</span>)}
                  </div>
                </div>
                <div className="stream-result">
                  <span className="num">{gabiona.result.num}</span>
                  <span className="label">{gabiona.result.label}</span>
                </div>
              </Link>
            </li>
            <li className="stream-item">
              <span className="stream-stamp">{luxaflex.stamp}</span>
              <Link href={`/cases/${luxaflex.slug}`} className={`stream-card ${luxaflex.variant}`}>
                <div>
                  <span className="stream-kicker">{luxaflex.kicker}</span>
                  <h3 className="stream-head">{luxaflex.title}</h3>
                  <p className="stream-deck">{luxaflex.deck}</p>
                  <div className="stream-meta">
                    {luxaflex.meta.map(m => <span key={m}>{m}</span>)}
                  </div>
                </div>
                <div className="stream-result">
                  <span className="num">{luxaflex.result.num}</span>
                  <span className="label">{luxaflex.result.label}</span>
                </div>
              </Link>
            </li>
          </ol>
        </section>

        <PromoBlock
          eyebrow="Free Google Ads audit"
          headline={<>Want to know what your Spanish<br />campaigns are actually costing you?</>}
          deck="Share read access to your Google Ads account and tell us what you are trying to grow in Spain — we will send back a one-page diagnosis with the three biggest structural issues and a rough size of each. No deck, no pitch."
          ctaHref="/contact"
          ctaLabel="Request audit"
          secondaryHref="/services/google-ads"
          secondaryLabel="Our full Google Ads service →"
        />

      </main>
      <Footer />
    </>
  )
}
