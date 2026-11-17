/**
 * Client reviews from our Sortlist profile, quoted with the reviewers' consent
 * (confirmed 17 Nov 2026). The German text is the reviewer's own words, cut
 * only where marked with "…"; English and Spanish are our translations and the
 * page says so.
 *
 * Shown as visible quotes only. No Review or AggregateRating schema: Google
 * treats reviews of a business on its own site as self-serving, and reviews
 * collected on another site don't belong in our markup.
 */

export const SORTLIST_PROFILE = 'https://www.sortlist.com/agency/pmax-online-sl'

export interface Testimonial {
  name: string
  role: { en: string; de: string; es: string }
  company: string
  service: { en: string; de: string; es: string }
  date: string // YYYY-MM-DD, as shown on Sortlist
  quote: { de: string; en: string; es: string }
}

const ADS = { en: 'Online advertising', de: 'Online-Werbung', es: 'Publicidad online' }
const SEO = { en: 'SEO', de: 'SEO', es: 'SEO' }
const MD = { en: 'Managing Director', de: 'Geschäftsführer', es: 'Director general' }

export const testimonials: Testimonial[] = [
  {
    name: 'Klaus G. Roelcke',
    role: MD,
    company: 'ABR German Real Estate',
    service: ADS,
    date: '2026-11-16',
    quote: {
      de: 'Dadurch hatte man eher das Gefühl, mit einem Partner zusammenzuarbeiten, anstatt einfach nur eine externe Agentur zu beauftragen.',
      en: 'It felt more like working with a partner than simply hiring an outside agency.',
      es: 'Daba más la sensación de trabajar con un socio que de contratar sin más a una agencia externa.',
    },
  },
  {
    name: 'Maximilian Madl',
    role: MD,
    company: 'Diagonal.Software GmbH',
    service: SEO,
    date: '2026-11-16',
    quote: {
      de: 'Sie haben sich die Zeit genommen, unser Produkt und unsere Zielgruppe besser kennenzulernen.',
      en: 'They took the time to get to know our product and our audience properly.',
      es: 'Se tomaron el tiempo de conocer bien nuestro producto y nuestro público.',
    },
  },
  {
    name: 'Christian Dreise',
    role: { en: 'Senior Consultant Business', de: 'Senior Consultant Business', es: 'Senior Consultant Business' },
    company: 'supstance GmbH & Co. KG',
    service: SEO,
    date: '2026-11-17',
    quote: {
      de: '… dass sich das Team mit unserem Softwaregeschäft auseinandergesetzt hat, anstatt einfach eine allgemeine Marketingstrategie anzuwenden.',
      en: '… that the team got to grips with our software business instead of applying a generic marketing strategy.',
      es: '… que el equipo se metiera de lleno en nuestro negocio de software en lugar de aplicar una estrategia de marketing genérica.',
    },
  },
  {
    name: 'Adrian Valea',
    role: MD,
    company: 'ADVA Software Engineering GmbH',
    service: ADS,
    date: '2026-11-17',
    quote: {
      de: 'Das Team hat sich unsere Vorstellungen angehört und verschiedene Ideen eingebracht, ohne uns mit unnötigen Fachbegriffen zu überfordern.',
      en: 'The team listened to what we had in mind and brought in different ideas, without burying us in jargon.',
      es: 'El equipo escuchó lo que teníamos en mente y aportó distintas ideas, sin abrumarnos con tecnicismos.',
    },
  },
  {
    name: 'Arslan Avakov',
    role: { en: 'Senior Business Analyst', de: 'Senior Business Analyst', es: 'Senior Business Analyst' },
    company: 'IC Immobilien Gruppe',
    service: ADS,
    date: '2026-11-16',
    quote: {
      de: 'Das Team war professionell, ohne dass die Zusammenarbeit zu förmlich wirkte.',
      en: 'The team was professional without the work ever feeling too formal.',
      es: 'El equipo fue profesional sin que la colaboración resultara demasiado formal.',
    },
  },
]
