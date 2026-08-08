export interface Service {
  slug: string
  num: string
  badge?: string
  title: string
  deck: string
  longDeck?: string
  tags: string[]
  variant: string
  featured?: boolean
  metaTitle?: string
  metaDesc?: string
}

export const services: Service[] = [
  {
    slug: 'ai-visibility',
    num: '01',
    badge: 'New for 2026',
    title: 'AI search visibility (GEO)',
    deck: 'More and more people ask ChatGPT, Perplexity or Gemini before they ever open Google. We make sure your brand is the one they recommend — through clean technical foundations, structured data, and content AI models can actually read.',
    longDeck: 'Generative Engine Optimisation (GEO) is the practice of making your brand appear in AI-generated answers. We audit your entity graph, build out your schema, create citation-worthy content, and track how often AI tools recommend you.',
    tags: ['Entities', 'Schema', 'llms.txt', 'Citation tracking'],
    variant: 'is-mint',
    featured: true,
    metaTitle: 'AI Search Visibility & GEO | pmax Mallorca',
    metaDesc: 'Get your brand cited by ChatGPT, Perplexity and Google AI Overviews. pmax builds the technical and content foundations that make AI tools recommend you.',
  },
  {
    slug: 'google-ads',
    num: '02',
    title: 'Google Ads & Performance Max',
    deck: 'Search, Shopping, Performance Max and YouTube — built around a clean conversion setup and a product feed that actually sells. No black boxes.',
    longDeck: 'We rebuild your Google Ads account from the signal up — feed optimisation, Smart Bidding architecture, Performance Max asset groups and audience lists fed by real CRM data. No guesswork.',
    tags: ['Search', 'PMax', 'Shopping', 'YouTube'],
    variant: 'is-slate',
    metaTitle: 'Google Ads & Performance Max Agency | pmax Mallorca',
    metaDesc: 'Google Ads management focused on profitable growth. Search, Shopping, Performance Max and YouTube — engineered, not boosted.',
  },
  {
    slug: 'paid-social',
    num: '03',
    title: 'Paid social',
    deck: 'Meta, TikTok and LinkedIn — connected to your CRM, fed by a steady creative pipeline, measured against the metric that pays the bills.',
    longDeck: 'We run Meta and TikTok for e-commerce and LinkedIn for B2B. Creative is built to test, audiences are built from data, and every euro is measured against actual revenue — not impressions.',
    tags: ['Meta', 'TikTok', 'LinkedIn', 'Microsoft'],
    variant: 'is-outlined',
    metaTitle: 'Paid Social Agency — Meta, TikTok & LinkedIn | pmax',
    metaDesc: 'Performance-led paid social management. Meta, TikTok and LinkedIn campaigns built around your CRM data and creative that tests fast.',
  },
  {
    slug: 'seo',
    num: '04',
    title: 'SEO',
    deck: 'Technical SEO, content and digital PR. We earn rankings the slow, honest way — and the same work compounds across AI search.',
    longDeck: 'Technical audits, content strategy informed by paid-search conversion data, link building that earns real coverage. SEO that works in Google today and compounds into AI citations tomorrow.',
    tags: ['Technical', 'Content', 'Local SEO', 'Digital PR'],
    variant: 'is-violet',
    metaTitle: 'SEO Agency Mallorca & Europe | pmax',
    metaDesc: 'Technical SEO, content engineering and digital PR for brands that want lasting organic growth across search and AI.',
  },
  {
    slug: 'conversion-design',
    num: '05',
    title: 'Conversion design (CRO)',
    deck: 'More revenue from the same traffic. We design, test and ship the changes that move conversion rate — not the ones that win design awards.',
    longDeck: 'We run A/B tests with proper statistical rigour, redesign landing pages around actual user behaviour, and build experimentation programmes that answer real business questions.',
    tags: ['A/B testing', 'UX research', 'Funnel design'],
    variant: 'is-yellow',
    metaTitle: 'CRO & Conversion Design Agency | pmax',
    metaDesc: 'More revenue from existing traffic. A/B testing, UX research and funnel design that moves the metric that matters.',
  },
  {
    slug: 'analytics',
    num: '06',
    title: 'Analytics & tracking',
    deck: 'Server-side GTM, consent-mode v2, CRM conversion imports, dashboards that don\'t lie. The foundation everything else stands on.',
    longDeck: 'We build the measurement infrastructure that makes every other channel work better — server-side tagging, Consent Mode v2, offline conversion imports, attribution modelling, and dashboards that show the truth.',
    tags: ['GA4', 'Server-side', 'Consent Mode', 'BI dashboards'],
    variant: 'is-outlined',
    metaTitle: 'Analytics & Tracking Engineering | pmax',
    metaDesc: 'Server-side GTM, GA4, Consent Mode v2 and CRM integration. The measurement infrastructure that makes your marketing data trustworthy.',
  },
  {
    slug: 'creative',
    num: '07',
    title: 'Creative production',
    deck: 'A steady flow of ads, landing pages and video — built for testing, not for awards. Because the creative is the campaign.',
    longDeck: 'Static ads, motion graphics, UGC-style video and landing pages — all briefed by media data and produced on a weekly cadence. Winning creatives get scaled, losing ones get retired fast.',
    tags: ['Static', 'Motion', 'UGC', 'Landers'],
    variant: 'is-pink',
    metaTitle: 'Performance Creative Production | pmax',
    metaDesc: 'Static, motion and UGC video production built for paid media testing. Weekly creative cycles wired to your media performance data.',
  },
  {
    slug: 'visibility-engineering',
    num: '08',
    badge: 'Flagship',
    title: 'Visibility Engineering',
    deck: 'GEO, SEO, digital PR and reputation management — coordinated into one strategy. Because search engines and AI platforms judge brands holistically, not by isolated signals.',
    longDeck: 'Visibility Engineering is our integrated approach to modern brand discoverability — combining Generative Engine Optimisation (GEO), SEO, digital PR and online reputation management so your brand is found, trusted and chosen across Google and AI search.',
    tags: ['GEO', 'SEO', 'Digital PR', 'Reputation'],
    variant: 'is-mint',
    featured: true,
    metaTitle: 'Generative Engine Optimisation Agency | Visibility Engineering',
    metaDesc: 'Visibility Engineering by pmax: GEO, SEO, digital PR and reputation management. Get discovered, trusted and chosen across Google and AI search.',
  },
  {
    slug: 'geo-audit',
    num: '09',
    badge: 'Free audit',
    title: 'GEO Audit',
    deck: 'A structured review of what ChatGPT, Perplexity and Gemini say about your brand — and a prioritised list of what to fix first.',
    longDeck: 'A GEO audit reveals how AI platforms represent your brand: what they say about you, which sources they draw on, where competitors beat you, and what to fix in order of impact. The initial audit is free.',
    tags: ['GEO', 'AI search', 'Audit'],
    variant: 'is-mint',
    metaTitle: 'GEO Audit Services | AI Search Visibility Audit | pmax',
    metaDesc: 'pmax runs GEO audits to show you exactly how AI platforms represent your brand — and what to fix first. Free initial audit available. Based in Mallorca, working worldwide.',
  },
]

export function getService(slug: string) {
  return services.find(s => s.slug === slug)
}
