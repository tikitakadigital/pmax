import { de } from './de'
import { es } from './es'

export type Lang = 'de' | 'es'
export type Translations = typeof de

export function getT(lang: string): Translations {
  if (lang === 'de') return de
  if (lang === 'es') return es as unknown as Translations
  return de
}

/** The non-English locales the site publishes. */
export const CONTENT_LANGS = ['de', 'es'] as const
export type ContentLang = (typeof CONTENT_LANGS)[number]

const BASE = 'https://pmax.online'

// ── Which blog posts exist in which language ─────────────────────────────────
//
// SINGLE SOURCE OF TRUTH, and it has to be, because three separate places need
// the answer and they must agree exactly:
//
//   1. /blog/[slug]        — which hreflang alternates the English page lists
//   2. /[lang]/blog/[slug] — whether the page is indexable, and its cluster
//   3. sitemap.ts          — whether the /de and /es URLs get submitted
//
// hreflang is only honoured when the annotation is RECIPROCAL: if the English
// page names a German alternate, the German page must name English back, or
// Google discards the whole cluster. Three functions each deciding "is this
// translated?" from their own local check is how the two sides drift apart —
// which is exactly what happened here before, when the English page gated its
// alternates on a hand-maintained `hasTranslations` boolean that had been set
// on two posts out of twenty-two while every one of them was fully translated.
//
// A translation counts as REAL only when it has `prose`. Titles and decks fall
// back to English per entry, so a locale can carry a translated title while the
// body is still English — that page is not a translation and must not be
// advertised as one.

/** True when `lang` has a real (prose-bearing) translation of this post. */
export function isPostTranslated(slug: string, lang: string): boolean {
  return (CONTENT_LANGS as readonly string[]).includes(lang)
    && !!getT(lang).blogPostDetail[slug]?.prose
}

/** The non-English locales this post is genuinely translated into. */
export function translatedLocales(slug: string): ContentLang[] {
  return CONTENT_LANGS.filter(l => isPostTranslated(slug, l))
}

/**
 * The post's hreflang cluster, or undefined when no translation exists.
 *
 * Built in ONE place so every page in the cluster emits a byte-identical map.
 * That is not tidiness: reciprocity is checked on exact URLs, so the English
 * and German pages disagreeing about a trailing slash would break it as surely
 * as a missing tag. Includes the self-referencing `en` entry and x-default,
 * both of which Google requires.
 */
export function blogAlternates(slug: string): Record<string, string> | undefined {
  const locales = translatedLocales(slug)
  if (locales.length === 0) return undefined
  const en = `${BASE}/blog/${slug}/`
  return {
    en,
    ...Object.fromEntries(locales.map(l => [l, `${BASE}/${l}/blog/${slug}/`])),
    'x-default': en,
  }
}

export { de, es }
