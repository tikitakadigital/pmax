const mallorca = { '@type': 'Place', name: 'Mallorca', containedInPlace: { '@type': 'Country', name: 'Spain' } }

export const org = {
  '@type': ['Organization', 'AdvertisingAgency', 'LocalBusiness'],
  '@id': 'https://pmax.online/#org',
  name: 'pmax',
  legalName: 'PMax Online S.L.',
  alternateName: ['pmax Online', 'pmax Mallorca', 'PMax Online S.L.'],
  url: 'https://pmax.online/',
  foundingDate: '2023',
  description: 'Digital marketing agency in Mallorca. Google Ads, Meta, LinkedIn, SEO and AI search visibility for businesses in Mallorca and brands across Europe.',
  logo: {
    '@type': 'ImageObject',
    url: 'https://pmax.online/assets/pmax-mark.svg',
    contentUrl: 'https://pmax.online/assets/pmax-mark.svg',
  },
  image: 'https://pmax.online/assets/pmax-mark.svg',
  telephone: '+34871242160',
  email: 'hello@pmax.online',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Cordova, 5',
    addressLocality: 'Calvià',
    postalCode: '07184',
    addressRegion: 'Illes Balears',
    addressCountry: 'ES',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 39.5639, longitude: 2.5070 },
  hasMap: 'https://maps.google.com/?q=PMax+Online+Calvia+Mallorca',
  areaServed: [
    { '@type': 'City', name: 'Calvià', containedInPlace: mallorca },
    { '@type': 'City', name: 'Palma', containedInPlace: mallorca },
    mallorca,
    { '@type': 'Country', name: 'Spain' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'Austria' },
    { '@type': 'Country', name: 'Switzerland' },
    { '@type': 'AdministrativeArea', name: 'European Union' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  knowsAbout: [
    'Google Ads', 'Performance Max', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads',
    'SEO', 'AI Search Visibility', 'Generative Engine Optimisation', 'GEO',
    'Conversion Rate Optimisation', 'Analytics', 'Server-side Tracking', 'Creative Production',
  ],
  knowsLanguage: ['en', 'de', 'es'],
  founder: {
    '@type': 'Person',
    name: 'Philipp Enders',
    jobTitle: 'Founder & Director',
    sameAs: 'https://www.linkedin.com/in/philipp-enders/',
  },
  sameAs: [
    'https://www.linkedin.com/company/pmax-online-s-l/',
    'https://www.facebook.com/profile.php?viewas=100000686899395&id=61590296614624',
  ],
  priceRange: '€€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Bank transfer, invoice',
  openingHours: 'Mo-Fr 09:00-18:00',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+34871242160',
    email: 'hello@pmax.online',
    contactType: 'sales',
    availableLanguage: ['English', 'German', 'Spanish'],
  },
}

export const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://pmax.online/#site',
  url: 'https://pmax.online/',
  name: 'pmax',
  publisher: { '@id': 'https://pmax.online/#org' },
  inLanguage: ['en', 'de', 'es'],
}

export function article({ headline, description, url, datePublished, keywords, image }: {
  headline: string
  description: string
  url: string
  datePublished: string
  keywords?: string[]
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: 'Philipp Enders',
      jobTitle: 'Founder & CEO, pmax',
      sameAs: 'https://www.linkedin.com/in/philipp-enders/',
    },
    publisher: { '@id': 'https://pmax.online/#org' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'en-GB',
    ...(keywords?.length && { keywords: keywords.join(', ') }),
    ...(image && { image: `https://pmax.online${image}` }),
  }
}

export function serviceSchema({ name, description, url, serviceType }: {
  name: string
  description: string
  url: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    serviceType,
    provider: { '@id': 'https://pmax.online/#org' },
    areaServed: [
      { '@type': 'Place', name: 'Mallorca' },
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'AdministrativeArea', name: 'European Union' },
    ],
    inLanguage: ['en', 'de', 'es'],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://pmax.online/contact/',
      servicePhone: '+34871242160',
    },
  }
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
