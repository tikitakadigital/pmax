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
  title: 'SEO Company Mallorca | pmax — Local & multilingual SEO from Calvià',
  description: 'pmax is an SEO company in Mallorca. We rank Balearic businesses in four languages — Spanish, German, English and Catalan — with technical SEO, local search and AI visibility. Based in Calvià.',
  alternates: {
    canonical: 'https://pmax.online/seo-company-mallorca/',
    languages: {
      en: 'https://pmax.online/seo-company-mallorca/',
      de: 'https://pmax.online/de/seo-agentur-mallorca/',
      es: 'https://pmax.online/es/agencia-seo-mallorca/',
      'x-default': 'https://pmax.online/seo-company-mallorca/',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'pmax',
    title: 'SEO Company Mallorca | pmax — Local & multilingual SEO from Calvià',
    description: 'pmax is an SEO company in Mallorca. We rank Balearic businesses in four languages — Spanish, German, English and Catalan — with technical SEO, local search and AI visibility.',
    url: 'https://pmax.online/seo-company-mallorca/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pmaxonline',
    title: 'SEO Company Mallorca | pmax — Local & multilingual SEO from Calvià',
    description: 'pmax is an SEO company in Mallorca. We rank Balearic businesses in four languages — Spanish, German, English and Catalan — with technical SEO, local search and AI visibility.',
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
    q: 'What does an SEO company in Mallorca do differently from a mainland agency?',
    a: 'Mallorca is a four-language market — Spanish, German, English and Catalan — and a business that only ranks in one of them is invisible to most of its customers. An SEO company that understands the island builds and ranks pages in every relevant language with proper hreflang, plans for tourism seasonality, and treats Palma, Calvià, Andratx and Pollença as separate local markets rather than one.',
  },
  {
    q: 'How long does SEO take to work for a Mallorca business?',
    a: 'Technical fixes can move local rankings in a few weeks. A Google Business Profile, optimised properly with reviews, can enter the local pack within one to two months. Compounding organic growth from content typically shows from month six. Anyone guaranteeing a number-one ranking faster is either fibbing or doing something that gets you penalised later.',
  },
  {
    q: 'Do you rank businesses in German and Spanish, not just English?',
    a: 'Yes. We work in Spanish, German, English and Catalan. For most Mallorca businesses the German-speaking expat and visitor market is the single most underserved SEO opportunity on the island, because almost no local agency builds proper German-language pages. We do — translated and optimised, never auto-translated.',
  },
  {
    q: 'How important is a Google Business Profile for ranking in Mallorca?',
    a: 'For local searches, the Google Business Profile and the local map pack are roughly half the battle. A verified, fully-optimised profile with genuine reviews that mention your service will often move you up faster than any on-page change. We set it up and manage it as part of every local SEO engagement.',
  },
  {
    q: 'Where in Mallorca is pmax based?',
    a: 'We are based in Calvià, in the south-west of Mallorca, twenty minutes from Palma. We work with clients across the whole island and remotely with brands across Europe.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pmax.online/seo-company-mallorca/#localbusiness',
  name: 'pmax — SEO Company Mallorca',
  image: 'https://pmax.online/og-image.jpg',
  url: 'https://pmax.online/seo-company-mallorca/',
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
    { '@type': 'Place', name: 'Mallorca' },
    { '@type': 'Place', name: 'Palma de Mallorca' },
    { '@type': 'Place', name: 'Calvià' },
    { '@type': 'Place', name: 'Andratx' },
    { '@type': 'Place', name: 'Pollença' },
    { '@type': 'Place', name: 'Balearic Islands' },
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
    { name: 'SEO Company Mallorca', url: 'https://pmax.online/seo-company-mallorca/' },
  ]),
  localBusinessSchema,
  faqPage(faqs),
]

export default function SeoCompanyMallorcaPage() {
  const ledxpress = cases.find(c => c.slug === 'ledxpress')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro">
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span>
              <span>SEO Company Mallorca</span>
            </nav>
            <span className="page-intro-eyebrow">SEO · Mallorca · Calvià</span>
            <h1 className="page-intro-title">SEO company<br />in Mallorca.</h1>
            <p className="page-intro-deck">
              Most of your customers aren&apos;t searching in one language. We rank Balearic businesses
              in Spanish, German, English and Catalan — with technical SEO, local search and AI
              visibility done properly. Based in Calvià, working across the island.
            </p>
          </div>
        </section>

        <section className="container" style={{ padding: '48px 0' }}>
          <ul className="stats reveal-stagger" style={{ listStyle: 'none', padding: 0 }}>
            <li className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">languages we rank Mallorca businesses in</span>
            </li>
            <li className="stat">
              <span className="stat-num">+218%</span>
              <span className="stat-label">median non-brand organic clicks in 12 months</span>
            </li>
            <li className="stat">
              <span className="stat-num">Calvià</span>
              <span className="stat-label">our base — 20 minutes from Palma</span>
            </li>
            <li className="stat">
              <span className="stat-num">€€</span>
              <span className="stat-label">flat retainers, never % of media spend</span>
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              kicker="the island problem"
              title={<>SEO in Mallorca is a<br />four-language problem.</>}
            />
            <div className="prose reveal">
              <p>
                Here is the thing most SEO companies in Mallorca quietly get wrong: they optimise in
                one language and call it done. But the customer base on this island doesn&apos;t work
                that way.
              </p>
              <p>
                A plumber in Palma is searched for as <em>&ldquo;fontanero Palma&rdquo;</em> by locals,{' '}
                <em>&ldquo;Klempner Mallorca&rdquo;</em> by the German residents who make up a huge share
                of the island&apos;s spending power, <em>&ldquo;plumber Mallorca&rdquo;</em> by British
                and Scandinavian expats, and occasionally in Catalan too. Four queries, four languages,
                four sets of competitors — for the same business. If you only rank in Spanish, you are
                invisible to most of the people with money to spend.
              </p>
              <p>
                This is the single biggest, most under-exploited SEO opportunity on the island, and
                almost nobody builds for it properly. We do.
              </p>

              <h2>What we actually do</h2>

              <h3>1. Build and rank in every language that matters</h3>
              <p>
                Real, locale-specific pages in Spanish, German, English and Catalan — written and
                optimised, never auto-translated — with hreflang implemented correctly so Google serves
                the right page to the right searcher. The German-speaking market in particular is wide
                open, because so few local agencies build for it.
              </p>

              <h3>2. Win the Google Business Profile and the local pack</h3>
              <p>
                For a search like <em>&ldquo;SEO company Mallorca&rdquo;</em> or{' '}
                <em>&ldquo;restaurant Port d&apos;Andratx&rdquo;</em>, the map pack is roughly half
                the battle. We verify and fully optimise your Google Business Profile, build a genuine
                review programme, and keep your NAP (name, address, phone) consistent across every
                directory — the signals that actually move local pack rankings.
              </p>

              <h3>3. Treat the island as the many local markets it is</h3>
              <p>
                Palma, Calvià, Andratx, Pollença, Alcúdia — these are distinct local markets with
                distinct competition. We build location relevance that targets the towns you actually
                serve, instead of a single vague &ldquo;Mallorca&rdquo; page that ranks nowhere.
              </p>

              <h3>4. Plan for the season</h3>
              <p>
                Search demand on Mallorca is brutally seasonal. A villa-rental business and a tax
                advisor have opposite curves. We model the seasonality of your specific category and
                make sure your rankings and content are in place <em>before</em> demand peaks, not
                chasing it after.
              </p>

              <h3>5. The technical foundations, then AI visibility</h3>
              <p>
                Crawl, indexation, Core Web Vitals, schema, internal linking — the unglamorous
                engineering that everything else depends on. Then the newer work of{' '}
                <Link href="/services/ai-visibility">AI search visibility</Link>: making sure your
                business is the one ChatGPT, Perplexity and Google&apos;s AI Overviews recommend when
                someone asks for a company in Mallorca.
              </p>

              <div className="prose-callout">
                <div className="prose-callout-kicker">The honest version</div>
                <p>
                  SEO is not magic and it is not instant. Technical fixes move things in weeks; a
                  Google Business Profile can enter the local pack in a month or two; content compounds
                  from around month six. Anyone promising you a guaranteed number-one ranking next week
                  is either fibbing or about to get you penalised. We would rather tell you the truth
                  and keep you for five years.
                </p>
              </div>

              <p style={{ marginTop: 8 }}>
                Read this page in{' '}
                <Link href="/de/seo-agentur-mallorca/">German (SEO Agentur Mallorca)</Link>
                {' '}or{' '}
                <Link href="/es/agencia-seo-mallorca/">Spanish (Agencia SEO Mallorca)</Link>.
              </p>
              <p>
                Need Google Ads alongside SEO?{' '}
                <Link href="/google-ads-agency-spain/">Our Google Ads agency in Spain page</Link>
                {' '}covers paid search for Mallorca and the Spanish market — regional CPCs, multilingual
                campaign structure and Performance Max for Spanish e-commerce.
              </p>
              <p>
                Want SEO, Google Ads and paid social under one retainer?{' '}
                <Link href="/marketing-agency-mallorca/">Our marketing agency in Mallorca page</Link>
                {' '}covers the full-service approach — how we scope, price and run integrated
                programmes from Calvià.
              </p>

              <h2>Who we work with on the island</h2>
              <p>
                Hospitality and villa rentals, real estate offices, restaurants, clinics and dental
                practices, retail and service businesses, charter and marine companies, and local
                e-commerce brands selling from Mallorca to the rest of Europe. If your customers find
                you through search — in any language — we can help.
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
              <span className="stream-stamp">{ledxpress.stamp}</span>
              <Link href={`/cases/${ledxpress.slug}`} className={`stream-card ${ledxpress.variant}`}>
                <div>
                  <span className="stream-kicker">{ledxpress.kicker}</span>
                  <h3 className="stream-head">{ledxpress.title}</h3>
                  <p className="stream-deck">{ledxpress.deck}</p>
                  <div className="stream-meta">
                    {ledxpress.meta.map(m => <span key={m}>{m}</span>)}
                  </div>
                </div>
                <div className="stream-result">
                  <span className="num">{ledxpress.result.num}</span>
                  <span className="label">{ledxpress.result.label}</span>
                </div>
              </Link>
            </li>
          </ol>
        </section>

        <PromoBlock
          eyebrow="Free 30-min SEO audit"
          headline={<>Want to know where you actually<br />rank in Mallorca?</>}
          deck="Share read access and tell us the languages your customers search in — we will send back a one-page diagnosis with three concrete things to fix this quarter. No sales pressure, no deck."
          ctaHref="/contact"
          ctaLabel="Request audit"
          secondaryHref="/services/seo"
          secondaryLabel="Our full SEO service →"
        />

      </main>
      <Footer />
    </>
  )
}
