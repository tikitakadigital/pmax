/**
 * Localised URL slugs for blog posts.
 *
 * The key is the canonical (English) slug used everywhere in content data —
 * `posts`, `blogDetails` and the `blogPostDetail` maps in the i18n files all
 * stay keyed on it. Only the URL changes.
 *
 * Posts published before 1 October 2026 are not listed here: their German and
 * Spanish URLs already rank, and moving them would trade real positions for a
 * marginal gain. New posts get localised slugs from the start, which costs
 * nothing because nothing points at them yet.
 *
 * Adding an entry for a post that is already live changes a URL that may be
 * indexed: add a 301 in public/.htaccess in the same commit.
 */
const localSlugs: Record<string, { de: string; es: string }> = {
  'how-to-test-ai-max': { de: 'ai-max-richtig-testen', es: 'como-probar-ai-max' },
}

const BASE = 'https://pmax.online'

/** Localised slug for a canonical slug. English keeps the canonical one. */
export function blogSlug(slug: string, lang: string): string {
  if (lang === 'de' || lang === 'es') return localSlugs[slug]?.[lang] ?? slug
  return slug
}

/**
 * Canonical slug for a localised one, or undefined if it isn't valid here.
 *
 * Returning undefined matters: without it, a post with a localised slug would
 * also answer on its English slug under /de/ and /es/, which is a duplicate of
 * the same page on two URLs.
 */
export function canonicalBlogSlug(localSlug: string, lang: string): string | undefined {
  if (lang !== 'de' && lang !== 'es') return localSlug
  const hit = Object.entries(localSlugs).find(([, l]) => l[lang] === localSlug)
  if (hit) return hit[0]
  return localSlugs[localSlug] && localSlugs[localSlug][lang] !== localSlug ? undefined : localSlug
}

/** Relative path with trailing slash, e.g. /de/blog/ai-max-richtig-testen/ */
export function blogPath(slug: string, lang: string): string {
  const prefix = lang === 'de' || lang === 'es' ? `/${lang}` : ''
  return `${prefix}/blog/${blogSlug(slug, lang)}/`
}

/** Absolute URL for a post in one language. */
export function blogUrl(slug: string, lang: string): string {
  return `${BASE}${blogPath(slug, lang)}`
}
