import type { ReactNode } from 'react'

export interface IndustryDetail {
  slug: string
  metaTitle: string
  metaDesc: string
  eyebrow: string
  pageTitle: ReactNode
  deck: string
  stats: { num: ReactNode; label: string }[]
  sectionKicker: string
  sectionTitle: string
  sectionAside?: string
  prose: ReactNode
  faqs?: { q: string; a: string }[]
  relatedCase?: { slug: string; variant: string; title: string }
  promoTopic: string
}

export const industryDetails: IndustryDetail[] = [
  {
    slug: 'ecommerce',
    metaTitle: 'E-commerce marketing — Shopify, DTC & Performance Max | pmax',
    metaDesc: 'A growth system for DTC, marketplace and omni-channel retailers — feed optimisation, Performance Max, paid social, SEO and AI shopping visibility.',
    eyebrow: 'Industry · E-commerce',
    pageTitle: <>E-commerce that<br /><em>actually</em> scales.</>,
    deck: 'A growth system for DTC, marketplace and omni-channel retailers — built around clean conversion data, profit-aware bidding, and creative volume that keeps up with the algorithm.',
    stats: [
      { num: '42+', label: 'E-commerce brands grown' },
      { num: '€38m', label: 'Ad spend managed in 2025' },
      { num: '3.8x', label: 'Median blended ROAS for active retainers' },
      { num: '19', label: 'Languages we run creative in' },
    ],
    sectionKicker: 'The playbook',
    sectionTitle: 'What we run for e-commerce clients.',
    sectionAside: 'Six things, in roughly this order. We rarely do all six at once.',
    prose: (
      <>
        <h2>1. Profit-aware conversion tracking</h2>
        <p>Most e-commerce ad accounts optimise for revenue. The good ones optimise for gross profit. We feed your true product margins (and return rates, where relevant) back into Google and Meta as conversion values, so the algorithms learn to chase the customers who actually make you money — not just the ones who spend the most.</p>
        <h2>2. A feed that sells</h2>
        <p>Your product feed is your shop window. We rewrite titles, fix attributes, standardise images, add custom labels for margin and seasonality, and prune SKUs that don&apos;t deserve impressions. The work is unglamorous and the impact is enormous: feed quality drives Shopping CTR, PMax efficiency, and increasingly, AI shopping visibility too.</p>
        <h2>3. Performance Max — but transparent</h2>
        <p>PMax works. But &ldquo;let Google handle it&rdquo; is a recipe for spending money on brand traffic you&apos;d have won for free. We split PMax by category, exclude brand terms cleanly, set profit-based tROAS targets, and use Search themes only where they earn their place.</p>
        <h2>4. Paid social — connected to the CRM</h2>
        <p>Meta CAPI and TikTok Events API, hooked into your back-end so the platforms learn from real LTV — not just first-purchase events. Then a creative pipeline that ships 10–20 fresh assets a week, because creative is now the biggest lever on social performance.</p>
        <h2>5. SEO + AI visibility</h2>
        <p>Category pages, product detail SEO, structured data (Product, Offer, AggregateRating), and the technical foundations that win in both Google search and the new AI shopping interfaces. The same work, two channels.</p>
        <h2>6. Retention &amp; CRO</h2>
        <p>Email + SMS + on-site CRO. A typical retainer ships one A/B test a week and one email automation a fortnight. Compounded over a year, that&apos;s where the margin lives.</p>
        <hr />
        <h2>Platforms we run on</h2>
        <p>Shopify, WooCommerce, Shopware, Magento, BigCommerce, custom. We don&apos;t replatform clients unless something is genuinely broken.</p>
      </>
    ),
    faqs: [
      { q: 'What e-commerce platforms does pmax work with?', a: 'Shopify, Shopify Plus, Shopware, WooCommerce, Magento (Adobe Commerce) and headless builds on top of these. We have ongoing retainers on all five. Platform choice rarely determines marketing outcomes — but feed quality, schema and site speed always do, and we engineer all three regardless of platform.' },
      { q: 'What is a good ROAS for an e-commerce brand?', a: 'It depends entirely on your gross profit margin and customer lifetime value. A 2.5x blended ROAS on a 35% margin brand losing money on first purchase but profitable over LTV can be excellent. A 5x ROAS on a 12% margin brand can be a slow disaster. We always model break-even ROAS from your actual margin and LTV data before setting targets.' },
      { q: 'How do you handle iOS privacy and cookieless tracking for e-commerce?', a: 'Server-side tagging, Consent Mode v2, conversion APIs for every major platform (Meta CAPI, TikTok Events, Google Enhanced Conversions, LinkedIn Conversions API), and first-party data strategy. Together these recover 30–50% of the conversion data that default browser-side tracking now loses.' },
    ],
    promoTopic: 'ecom-audit',
  },

  {
    slug: 'real-estate',
    metaTitle: 'Real estate digital marketing — valuation leads & SEO | pmax',
    metaDesc: 'Performance marketing for estate agencies — valuation lead generation, listing portal SEO and CRM-integrated nurture. Specialists in Mallorca and Spain.',
    eyebrow: 'Industry · Real estate',
    pageTitle: <>Real estate<br />built for <em>real</em> growth.</>,
    deck: 'A lead generation system for real estate agencies — built around the moment a homeowner first considers selling, and the long six-month journey from there to signed mandate.',
    stats: [
      { num: '14', label: 'Agencies grown in Mallorca, Madrid, Hamburg and Vienna' },
      { num: '€620k', label: 'Average annual media managed per client' },
      { num: '3.8x', label: 'Median uplift in qualified valuation leads' },
      { num: '6', label: 'Languages we run portal listings in' },
    ],
    sectionKicker: 'The playbook',
    sectionTitle: 'What we run for real estate clients.',
    prose: (
      <>
        <h2>1. Valuation lead generation</h2>
        <p>The valuation form is the single highest-leverage page on most real estate websites. We rebuild it from scratch — multi-step, mobile-first, with property questions that pre-qualify the seller before they hit &ldquo;submit&rdquo;. Average conversion rate on our valuation pages: 11.2%, against an industry baseline of about 2%.</p>
        <h2>2. Listing portal optimisation</h2>
        <p>Idealista, Immoscout24, Engel &amp; Völkers, Rightmove — every portal has different ranking signals, different image requirements, different premium placement economics. We treat each portal as its own channel and optimise it accordingly.</p>
        <h2>3. CRM-integrated lead nurture</h2>
        <p>The average residential sale takes 4–7 months from first valuation to signed mandate. We wire your CRM into the ad platforms so they learn from actual mandates signed, not just form fills.</p>
        <h2>4. Local + AI search</h2>
        <p>&ldquo;Real estate agent Mallorca&rdquo; is increasingly answered by ChatGPT and Google AI Overviews, not the traditional ten blue links. We do the schema, content and trust-signal work to be the agency that gets cited.</p>
      </>
    ),
    relatedCase: { slug: 'primundus', variant: 'is-violet', title: 'See similar work — PRIMUNDUS: regional SEO growing 4.2x in 9 months' },
    promoTopic: 'real-estate-audit',
  },

  {
    slug: 'healthcare',
    metaTitle: 'Healthcare marketing — clinics, telehealth & DTC | pmax',
    metaDesc: 'Performance marketing for healthcare brands — DTC clinics, telehealth, aesthetic medicine. GDPR-compliant tracking and multilingual patient journeys.',
    eyebrow: 'Industry · Healthcare',
    pageTitle: <>Healthcare<br />built for <em>real</em> growth.</>,
    deck: 'A patient-first growth system for healthcare brands — built around regulatory rigour, EEAT content, and the trust signals that genuinely move conversion in a category where trust is the product.',
    stats: [
      { num: '9', label: 'Active healthcare retainers' },
      { num: 'EU + UK', label: 'GDPR and MHRA / EMA-compliant by default' },
      { num: '4.2x', label: 'Median uplift in qualified patient enquiries' },
      { num: '100%', label: 'Server-side, consent-aware tracking' },
    ],
    sectionKicker: 'The playbook',
    sectionTitle: 'What we run for healthcare clients.',
    prose: (
      <>
        <h2>1. Regulator-aware advertising</h2>
        <p>Healthcare advertising lives inside tight rules — different ones in every country, every channel and every product category. We know them, we copy-edit to them, and we get ads approved on the first submission.</p>
        <h2>2. EEAT content that earns trust</h2>
        <p>Every piece of medical content we publish is byline-attributed to a real clinician, peer-reviewed, and dated. Google&apos;s EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) framework isn&apos;t optional for healthcare — it&apos;s the entire game.</p>
        <h2>3. HIPAA / GDPR-compliant tracking</h2>
        <p>Server-side GTM, consent-aware conversion APIs, no PII passed to ad platforms. Your tracking still works — the data just stays on the right side of the law.</p>
        <h2>4. AI visibility for medical queries</h2>
        <p>Patients increasingly ask ChatGPT and Perplexity about symptoms, treatments and providers. Showing up — accurately, safely, with citations — is the new SEO. We do the structured work to be the answer.</p>
      </>
    ),
    relatedCase: { slug: 'primundus', variant: 'is-pink', title: 'See similar work — PRIMUNDUS: regional SEO growing care enquiries 4.2x' },
    promoTopic: 'healthcare-audit',
  },

  {
    slug: 'renewables',
    metaTitle: 'Renewables digital marketing — solar, EV & heat pumps | pmax',
    metaDesc: 'Digital marketing for solar, heat pump and EV brands. Long buying cycles, technical buyers, six-figure lead values — built for the full funnel.',
    eyebrow: 'Industry · Renewables & cleantech',
    pageTitle: <>Renewables &amp; cleantech<br />built for <em>real</em> growth.</>,
    deck: 'A growth system for renewables brands — built for long buying cycles, technical buyers, and the six-figure lead values that justify patient, well-targeted marketing.',
    stats: [
      { num: '7', label: 'Active renewables retainers' },
      { num: '€2,400', label: 'Median qualified lead value' },
      { num: <>6<em>mo</em></>, label: 'Median buyer journey, captured end-to-end' },
      { num: '4/4', label: 'AI engines citing our renewables clients by name' },
    ],
    sectionKicker: 'The playbook',
    sectionTitle: 'What we run for renewables and cleantech clients.',
    prose: (
      <>
        <h2>1. Buyer-journey-mapped content</h2>
        <p>A solar buyer asks fifteen different questions in the six months between &ldquo;we should look into this&rdquo; and &ldquo;sign the contract&rdquo;. We build content for every one of them — calculators, comparison tables, regulatory explainers — and route each piece to the right paid channel.</p>
        <h2>2. Region-specific Google Ads</h2>
        <p>Solar incentives differ city by city, region by region. Generic national campaigns waste enormous amounts of money. We build geo-segmented account structures that match the actual policy landscape.</p>
        <h2>3. AI visibility for high-intent queries</h2>
        <p>&ldquo;Best solar installer in Spain&rdquo; is now an AI-answered question. We do the technical and content work to be the brand that ChatGPT, Perplexity and Gemini cite.</p>
        <h2>4. Long-cycle attribution</h2>
        <p>Most renewables companies don&apos;t close deals for six months. We wire CRM-fed offline conversions into the ad platforms so they learn from contracts signed, not just form fills.</p>
      </>
    ),
    relatedCase: { slug: 'energy-utility', variant: 'is-mint', title: 'See similar work — B2B energy utility: 5.2x more SQLs via organic search' },
    promoTopic: 'renewables-audit',
  },

  {
    slug: 'boating',
    metaTitle: 'Yacht charter & boating marketing agency | pmax',
    metaDesc: 'Multilingual performance marketing for yacht charter, brokerage and marina businesses. Seasonal media planning across the Mediterranean in 11 languages.',
    eyebrow: 'Industry · Boating & yachting',
    pageTitle: <>Boating &amp; yachting<br />built for <em>real</em> growth.</>,
    deck: 'A seasonal, multilingual growth system for charter, brokerage and marina businesses — built around the long booking window and high average order values that define the category.',
    stats: [
      { num: '6', label: 'Active charter / brokerage retainers in the Med' },
      { num: '4.6x', label: 'Median ROAS through the season' },
      { num: '11', label: 'Languages we run creative in' },
      { num: '€38k', label: 'Average booking value across active accounts' },
    ],
    sectionKicker: 'The playbook',
    sectionTitle: 'What we run for boating and yachting clients.',
    prose: (
      <>
        <h2>1. Seasonal media planning</h2>
        <p>A charter business has four distinct seasonal phases — early-bird, peak, late-availability, shoulder. Each phase has different audiences, different price elasticity, different creative. We build a calendar that pre-allocates budget to phases — and re-allocates dynamically through the season.</p>
        <h2>2. Multilingual paid search</h2>
        <p>Your customers Google in English, German, French, Italian, Spanish, Russian. Each language has its own competitive dynamics and its own keyword research. We run separate, properly-localised accounts per language — not auto-translated copies.</p>
        <h2>3. Long-window remarketing</h2>
        <p>The typical Med charter is researched 6–12 weeks before booking. Most remarketing windows are 30 days. We rebuild the retargeting strategy around the actual buying cycle — and stay top-of-mind without burning frequency.</p>
        <h2>4. Booking-system integration</h2>
        <p>MMK, Booking Manager, custom systems. We integrate with whichever booking system you run, so conversion data feeds back into the platforms.</p>
      </>
    ),
    relatedCase: { slug: 'luxaflex', variant: 'is-blue', title: 'See related work — Luxaflex franchise network: scaling local performance marketing' },
    promoTopic: 'boating-audit',
  },

  {
    slug: 'hr',
    metaTitle: 'HR & recruiting marketing — LinkedIn & employer brand | pmax',
    metaDesc: 'LinkedIn demand generation for HR tech, recruitment platforms and large employers. CRM-fed lead scoring, offline conversions and employer brand content.',
    eyebrow: 'Industry · HR & recruiting',
    pageTitle: <>HR &amp; recruiting<br />built for <em>real</em> growth.</>,
    deck: 'A B2B and employer-brand growth system for HR tech, recruitment platforms and large employers — built around LinkedIn as the lead channel, with everything else supporting it.',
    stats: [
      { num: '5', label: 'Active HR / recruitment retainers' },
      { num: '2.3x', label: 'Median pipeline-value uplift' },
      { num: '€42', label: 'Median cost per qualified candidate' },
      { num: '71%', label: 'SAL rate on demo-stage leads' },
    ],
    sectionKicker: 'The playbook',
    sectionTitle: 'What we run for HR and recruiting clients.',
    prose: (
      <>
        <h2>1. LinkedIn Ads, properly</h2>
        <p>Conversation Ads, Document Ads, Thought Leader Ads — used together they outperform a single-format strategy by 2–3x. We design audience and creative architectures that make LinkedIn the cheapest place to find your buyer.</p>
        <h2>2. CRM-fed offline conversions</h2>
        <p>The single biggest unlock for B2B marketing in 2026 is feeding LinkedIn the data it needs to optimise for real revenue — not form fills. We do the engineering to make that happen.</p>
        <h2>3. Employer brand at scale</h2>
        <p>For large employers, recruitment is a brand problem before it&apos;s a sourcing problem. We build employer-brand content systems that make you the company candidates actively pursue.</p>
        <h2>4. Content the right candidates read</h2>
        <p>Engineering hires read different things from sales hires. Senior leaders read different things from junior. We segment your content strategy by the candidate persona that actually moves the needle.</p>
      </>
    ),
    relatedCase: { slug: 'vc-investor', variant: 'is-yellow', title: 'See similar work — Venture capital investor: 312% more event sign-ups via LinkedIn' },
    promoTopic: 'hr-audit',
  },

  {
    slug: 'retail',
    metaTitle: 'Multi-location retail marketing — Local Inventory Ads | pmax',
    metaDesc: 'Performance marketing for multi-location retail. Local Inventory Ads, in-store conversion tracking, geo-targeted Meta and Google across 60+ locations.',
    eyebrow: 'Industry · Retail',
    pageTitle: <>Retail<br />built for <em>real</em> growth.</>,
    deck: 'A multi-location growth system for physical retail — bringing online-style measurement to in-store performance, and the centralised quality control that scales across dozens or hundreds of locations.',
    stats: [
      { num: '4', label: 'Multi-location retail accounts (60+ locations)' },
      { num: '+184%', label: 'Median uplift in tracked showroom visits' },
      { num: '€71', label: 'Average tracked cost per in-store visit' },
      { num: '8', label: 'Countries we manage local retail in' },
    ],
    sectionKicker: 'The playbook',
    sectionTitle: 'What we run for retail clients.',
    prose: (
      <>
        <h2>1. Local Inventory Ads</h2>
        <p>If you have physical stock in physical stores, Local Inventory Ads on Google are the most underused channel in retail. We do the product-feed engineering and in-store data syncing required to actually run them.</p>
        <h2>2. Geo-targeted Meta</h2>
        <p>One creative library, dozens of geo-targeted ad sets — each calibrated to the trading area of a specific location. The centralised brand, the local relevance.</p>
        <h2>3. In-store conversion tracking</h2>
        <p>QR-coded landing pages, in-store check-in flows, POS-fed offline conversions. We bring the same rigorous measurement to in-store visits that you&apos;d expect from e-commerce.</p>
        <h2>4. Franchise-friendly templates</h2>
        <p>For dealer and franchise networks: centralised quality control on creative and campaign structure, local control on budget and offers. The architecture that lets a 60-dealer network ship the same campaign in a week.</p>
      </>
    ),
    relatedCase: { slug: 'luxaflex', variant: 'is-orange', title: 'See similar work — Luxaflex: scaling performance marketing across 60+ franchisees' },
    promoTopic: 'retail-audit',
  },

  {
    slug: 'automotive',
    metaTitle: 'Automotive digital marketing — new, used & EV brands | pmax',
    metaDesc: 'Performance marketing for automotive manufacturers, dealer groups and EV brands. Brand-lift studies, dealer consolidation and test-drive lead generation.',
    eyebrow: 'Industry · Automotive',
    pageTitle: <>Automotive<br />built for <em>real</em> growth.</>,
    deck: 'A growth system for the modern auto buyer\'s journey — half consideration funnel, half local lead generation — built for manufacturers, dealer groups and EV brands.',
    stats: [
      { num: '+38%', label: 'Median purchase-intent lift on brand campaigns' },
      { num: '+61%', label: 'Median uplift in tracked test drives' },
      { num: '4', label: 'Markets running our consolidated dealer-group programmes' },
      { num: 'EV-ready', label: 'Specialist credentials in EV brand and lead gen' },
    ],
    sectionKicker: 'The playbook',
    sectionTitle: 'What we run for automotive clients.',
    prose: (
      <>
        <h2>1. Brand-lift studies, properly designed</h2>
        <p>Most automotive brand budgets are spent without proof. We build Brand Lift Study methodologies into every flight — measuring aided recall, purchase intent and consideration, so the next budget conversation is grounded in evidence.</p>
        <h2>2. Dealer-group consolidation</h2>
        <p>Dealer groups running 4–12 dealerships independently usually overspend by 30–40% versus a consolidated account structure. We do the consolidation, with each dealer still getting the local creative they need.</p>
        <h2>3. Test drive lead generation</h2>
        <p>Form fills are not test drives. We wire dealer DMS systems into the ad platforms so they optimise for actual showroom appointments, not browser-stage interest.</p>
        <h2>4. EV-specific funnel design</h2>
        <p>EV buyers research differently — longer cycles, more questions about charging and incentives, more comparison shopping. We build EV-specific funnels that meet that buyer where they actually are.</p>
      </>
    ),
    relatedCase: { slug: 'automotive', variant: 'is-slate', title: 'See similar work — Auto manufacturer: brand ads that lifted purchase intent 38%' },
    promoTopic: 'automotive-audit',
  },

  {
    slug: 'energy',
    metaTitle: 'Energy & utilities marketing — B2B SEO & search | pmax',
    metaDesc: 'B2B digital marketing for energy suppliers and utility services. Long buying cycles, CRM-fed attribution, LinkedIn demand generation and technical content.',
    eyebrow: 'Industry · Energy',
    pageTitle: <>Energy<br />built for <em>real</em> growth.</>,
    deck: 'A B2B growth system for energy suppliers and utility services — built for nine-to-fourteen-month buying cycles, six-figure contract values, and the technical buyers who do their own research.',
    stats: [
      { num: '5.2x', label: 'Median uplift in SQLs via organic search' },
      { num: '€1.8M', label: 'Annual contract value tracked to single retainer' },
      { num: <>14<em>mo</em></>, label: 'Median captured buyer journey' },
      { num: 'B2B', label: 'Built for procurement, IT and operations buyers' },
    ],
    sectionKicker: 'The playbook',
    sectionTitle: 'What we run for energy clients.',
    prose: (
      <>
        <h2>1. Buyer-journey-mapped content</h2>
        <p>Energy procurement is research-heavy. We build content for every research question — comparison tools, contract template explainers, regulatory guides — and route paid channels to the highest-intent moments.</p>
        <h2>2. CRM-fed long-cycle attribution</h2>
        <p>14-month buying cycles need 14-month attribution. We engineer CRM connections so platforms optimise for contracts signed, not white-paper downloads.</p>
        <h2>3. LinkedIn as the lead channel</h2>
        <p>Energy procurement decisions live on LinkedIn. We run conversation ads, document ads and thought-leader ads — connected to your CRM, optimised for actual revenue.</p>
        <h2>4. AI visibility for technical queries</h2>
        <p>Technical buyers increasingly ask ChatGPT and Perplexity. We make sure your brand is the answer.</p>
      </>
    ),
    relatedCase: { slug: 'energy-utility', variant: 'is-blue', title: 'See similar work — B2B energy utility: 5.2x more SQLs via organic search' },
    promoTopic: 'energy-audit',
  },

  {
    slug: 'hospitality',
    metaTitle: 'Hotel & hospitality marketing — direct bookings & OTA | pmax',
    metaDesc: 'Performance marketing for hotels focused on direct bookings. OTA dependency reduction, Google Hotel Ads, Meta for hospitality, multilingual creative.',
    eyebrow: 'Industry · Hospitality',
    pageTitle: <>Hospitality<br />built for <em>real</em> growth.</>,
    deck: 'A hospitality growth system focused on the one metric that actually moves margin — direct bookings — and the OTA dependency reduction that follows from getting them right.',
    stats: [
      { num: '+52%', label: 'Median uplift in direct bookings' },
      { num: '€184k', label: 'Annual OTA commission saved per typical client' },
      { num: <>11<em>wks</em></>, label: 'Average time to direct-booking parity with OTAs' },
      { num: '9', label: 'Languages we run hospitality creative in' },
    ],
    sectionKicker: 'The playbook',
    sectionTitle: 'What we run for hospitality clients.',
    prose: (
      <>
        <h2>1. Meta Advantage+ for hospitality</h2>
        <p>Hotel and resort brands consistently underperform on Meta because the standard funnel doesn&apos;t match the buying journey. We design hospitality-specific creative and audience architectures that close the booking on Meta — not later on Booking.com.</p>
        <h2>2. Google Hotel Ads</h2>
        <p>Hotel Ads sit in the highest-intent inventory Google sells. We do the rate-feed engineering, parity management and bidding strategy required to actually win them at sensible CPCs.</p>
        <h2>3. Booking flow CRO</h2>
        <p>Most hotel websites lose 80%+ of bookings at checkout. A simpler four-step flow, mobile-first, with the right price signals — and direct bookings rise without any extra media spend.</p>
        <h2>4. Multilingual creative system</h2>
        <p>9 languages, one creative system. Same brand, same hotel, regionalised execution.</p>
      </>
    ),
    relatedCase: { slug: 'luxaflex', variant: 'is-yellow', title: 'See related work — multi-location performance marketing for the Luxaflex network' },
    promoTopic: 'hospitality-audit',
  },
]

export function getIndustryDetail(slug: string) {
  return industryDetails.find(i => i.slug === slug)
}
