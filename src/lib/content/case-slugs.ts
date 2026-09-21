/**
 * Localised URL slugs for case studies.
 *
 * The key is the canonical (English) slug used everywhere in content data.
 * Brand-named cases (imero, unisono, …) keep the brand as the slug in every
 * language and are not listed here. Descriptive slugs get a translation.
 *
 * Changing a value here changes a live URL: add a 301 for the old path in
 * public/.htaccess.
 */
const localSlugs: Record<string, { de: string; es: string }> = {
  automotive: { de: 'automobil', es: 'automocion' },
  'energy-utility': { de: 'energieversorger', es: 'empresa-energetica' },
  'vc-investor': { de: 'vc-investor', es: 'inversor-capital-riesgo' },
  'training-school-google-ads': { de: 'schulungsanbieter-google-ads', es: 'centro-formacion-google-ads' },
}

const BASE = 'https://pmax.online'

type Lang = 'en' | 'de' | 'es'

/** Localised slug for a canonical slug. */
export function caseSlug(slug: string, lang: string): string {
  if (lang === 'de' || lang === 'es') return localSlugs[slug]?.[lang] ?? slug
  return slug
}

/** Canonical slug for a localised slug, or undefined if it isn't one. */
export function canonicalCaseSlug(localSlug: string, lang: string): string | undefined {
  if (lang !== 'de' && lang !== 'es') return localSlug
  const hit = Object.entries(localSlugs).find(([, l]) => l[lang] === localSlug)
  if (hit) return hit[0]
  // An untranslated slug is only valid if the case has no translation for this language.
  return localSlugs[localSlug] && localSlugs[localSlug][lang] !== localSlug ? undefined : localSlug
}

/** Relative path with trailing slash, e.g. /de/cases/automobil/ */
export function casePath(slug: string, lang: string): string {
  const prefix = lang === 'de' || lang === 'es' ? `/${lang}` : ''
  return `${prefix}/cases/${caseSlug(slug, lang)}/`
}

/** Canonical + full hreflang set. Every member lists all others, including itself. */
export function caseAlternates(slug: string, lang: Lang = 'en') {
  return {
    canonical: `${BASE}${casePath(slug, lang)}`,
    languages: {
      en: `${BASE}${casePath(slug, 'en')}`,
      de: `${BASE}${casePath(slug, 'de')}`,
      es: `${BASE}${casePath(slug, 'es')}`,
      'x-default': `${BASE}${casePath(slug, 'en')}`,
    },
  }
}
