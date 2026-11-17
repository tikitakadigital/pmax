import { testimonials, SORTLIST_PROFILE } from '@/lib/content/testimonials'

type Lang = 'en' | 'de' | 'es'

const OPEN = { en: '“', de: '„', es: '«' } as const
const CLOSE = { en: '”', de: '“', es: '»' } as const

const L = {
  en: {
    heading: 'What clients say',
    summary: '5 reviews on Sortlist, 5.0 out of 5',
    link: 'Read the full reviews on Sortlist',
    translated: 'Reviews written in German; English translations are ours.',
  },
  de: {
    heading: 'Was Kunden sagen',
    summary: '5 Bewertungen auf Sortlist, 5,0 von 5',
    link: 'Alle Bewertungen auf Sortlist lesen',
    translated: '',
  },
  es: {
    heading: 'Lo que dicen los clientes',
    summary: '5 reseñas en Sortlist, 5,0 de 5',
    link: 'Leer las reseñas completas en Sortlist',
    translated: 'Reseñas escritas en alemán; la traducción al español es nuestra.',
  },
} as const

/**
 * Sortlist reviews as plain, visible quotes. Deliberately no Review schema;
 * see the note in src/lib/content/testimonials.ts.
 */
export default function Testimonials({ lang = 'en', inSection = false, max = 3 }: { lang?: Lang; inSection?: boolean; max?: number }) {
  const t = L[lang]
  const items = testimonials.slice(0, max)
  const body = (
    <div className="quotes">
      <div className="quotes-head">
        {inSection ? <h3 className="quotes-title">{t.heading}</h3> : <h2 className="quotes-title">{t.heading}</h2>}
        <a className="quotes-summary" href={SORTLIST_PROFILE} target="_blank" rel="noopener">{t.summary}</a>
      </div>
      <div className="quotes-grid reveal-stagger">
        {items.map(q => (
          <figure key={q.name} className="quote-card">
            <blockquote className="quote-text">{OPEN[lang]}{q.quote[lang]}{CLOSE[lang]}</blockquote>
            <figcaption className="quote-by">
              <span className="quote-name">{q.name}</span>
              <span className="quote-role">{q.role[lang]}, {q.company}</span>
              <span className="quote-meta">{q.service[lang]} · Sortlist</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="quotes-foot">
        <a href={SORTLIST_PROFILE} target="_blank" rel="noopener" className="btn-tertiary">{t.link} <span className="arrow" aria-hidden="true">→</span></a>
        {t.translated && <span className="quotes-note">{t.translated}</span>}
      </p>
    </div>
  )
  return inSection ? body : <section className="container" style={{ paddingBottom: 48 }}>{body}</section>
}
