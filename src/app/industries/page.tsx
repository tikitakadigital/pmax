import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { siteAlternates } from '@/lib/hreflang'
import { breadcrumb, orgRef } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Industries we serve — 10 digital marketing playbooks | pmax',
  description: 'Tailored digital marketing for 10 sectors: e-commerce, real estate, healthcare, hospitality, renewables, boating, HR, retail, automotive and energy.',
  alternates: siteAlternates('/industries/'),
}

const industries = [
  {
    slug: 'ecommerce',
    num: '01',
    badge: 'Most active',
    title: 'E-commerce',
    deck: 'DTC, marketplace and omni-channel retail. Feed optimisation, Performance Max, paid social creative — the full revenue stack.',
    tags: ['Shopify', 'WooCommerce', 'Shopware', 'Magento'],
    variant: 'is-mint',
    featured: true,
    cta: 'See e-commerce playbook',
  },
  {
    slug: 'real-estate',
    num: '02',
    title: 'Real estate',
    deck: 'Valuation lead gen, listing portals, sales-team CRM integration. Agencies in Mallorca, Madrid, Hamburg and Vienna.',
    variant: 'is-slate',
  },
  {
    slug: 'healthcare',
    num: '03',
    title: 'Healthcare',
    deck: 'DTC clinics, telehealth and aesthetic medicine. Regulator-aware copy, HIPAA/GDPR-compliant tracking, multilingual patient journeys.',
    variant: 'is-outlined',
  },
  {
    slug: 'renewables',
    num: '04',
    title: 'Renewables & cleantech',
    deck: 'Solar, heat pumps and EV infrastructure. Long buying cycles, technical buyers, six-figure lead values.',
    variant: 'is-violet',
  },
  {
    slug: 'boating',
    num: '05',
    title: 'Boating & yachting',
    deck: 'Charter, brokerage and marinas across the Balearics and the Med. Seasonal media planning in eleven languages.',
    variant: 'is-yellow',
  },
  {
    slug: 'hr',
    num: '06',
    title: 'HR & recruiting',
    deck: 'B2B SaaS, recruitment marketing, employer branding. LinkedIn is usually the lead channel; everything else supports it.',
    variant: 'is-pink',
  },
  {
    slug: 'retail',
    num: '07',
    title: 'Retail',
    deck: 'Multi-location physical retail. Local Inventory Ads, in-store conversion tracking, geo-targeted Meta and Google.',
    variant: 'is-blue',
  },
  {
    slug: 'automotive',
    num: '08',
    title: 'Automotive',
    deck: 'New, used, EV. Dealer groups in three countries growing test drives without growing headcount.',
    variant: 'is-orange',
  },
  {
    slug: 'energy',
    num: '09',
    title: 'Energy',
    deck: 'Utility marketing, demand response, B2B energy services. Long sales cycles, complex value propositions.',
    variant: 'is-slate',
  },
  {
    slug: 'hospitality',
    num: '10',
    title: 'Hospitality',
    deck: 'Hotels, resorts and short-stay rentals. Direct-booking growth, OTA dependency reduction, multilingual creative.',
    variant: 'is-outlined',
  },
]

const jsonLd = [
  breadcrumb([
    { name: 'Home', url: 'https://pmax.online/' },
    { name: 'Industries', url: 'https://pmax.online/industries/' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://pmax.online/industries/#collection',
    name: 'Industries we serve — 10 digital marketing playbooks | pmax',
    description: 'Tailored digital marketing for 10 sectors: e-commerce, real estate, healthcare, hospitality, renewables, boating, HR, retail, automotive and energy.',
    url: 'https://pmax.online/industries/',
    publisher: { '@id': 'https://pmax.online/#org' },
    inLanguage: 'en',
  },
  orgRef,
]

export default function IndustriesPage() {
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
              <span>Industries</span>
            </nav>
            <span className="page-intro-eyebrow">Industries we work with</span>
            <h1 className="page-intro-title">
              Same method.<br />Ten <em>industries</em>.
            </h1>
            <p className="page-intro-deck">
              We don&apos;t pretend to be generalists. Over six years we&apos;ve built deep playbooks
              for ten industries — each with its own buying cycle, regulation, competitive dynamic,
              and definition of a good lead.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="svc-grid reveal-stagger">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className={`svc-card ${ind.variant}${ind.featured ? ' featured' : ''}`}
                >
                  <span className="svc-num">{ind.num}{ind.badge ? ` · ${ind.badge}` : ''}</span>
                  <h2 className="svc-title">{ind.title}</h2>
                  <p className="svc-deck">{ind.deck}</p>
                  {ind.tags && (
                    <div className="svc-tags">
                      {ind.tags.map(t => <span key={t}>{t}</span>)}
                    </div>
                  )}
                  {ind.cta && (
                    <span className="svc-cta">{ind.cta} <span className="arrow" aria-hidden="true">→</span></span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
