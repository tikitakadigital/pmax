const BASE = 'https://pmax.online'

/**
 * Generates canonical + full hreflang set for any page.
 *
 * @param enPath  The English-relative path, with leading and trailing slash.
 *                e.g. '/services/google-ads/'
 * @param lang    Current page locale. Omit (or 'en') for EN root pages.
 *
 * Google requires every URL in a hreflang set to declare all other members,
 * including itself. This function always emits en, de, es, and x-default so
 * the set is self-consistent regardless of which locale page calls it.
 */
export function siteAlternates(enPath: string, lang?: string) {
  const locale = lang ?? 'en'
  const canonical =
    locale === 'en' ? `${BASE}${enPath}` : `${BASE}/${locale}${enPath}`

  return {
    canonical,
    languages: {
      en: `${BASE}${enPath}`,
      de: `${BASE}/de${enPath}`,
      es: `${BASE}/es${enPath}`,
      'x-default': `${BASE}${enPath}`,
    },
  }
}
