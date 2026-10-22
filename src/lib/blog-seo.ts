import type { Metadata } from 'next'
import { posts, type Post } from '@/lib/content/blog'
import { imageSize } from '@/lib/image-size'
import { isPostTranslated } from '@/lib/i18n'
import { blogPath } from '@/lib/content/blog-slugs'

/**
 * Everything a blog post needs for search and sharing, built in one place so
 * the English and the localised templates can't drift apart. scripts/check-seo.mjs
 * verifies the result on every build.
 */

const BASE = 'https://pmax.online'
const MONTHS: Record<string, string> = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' }

/** 'Oct 22, 2026' -> '2026-10-22'. Parsed by hand: new Date() would use the build machine's time zone. */
export function isoDate(date: string): string {
  const m = date.match(/^([A-Z][a-z]{2})[a-z]* (\d{1,2}), (\d{4})$/)
  if (!m || !MONTHS[m[1]]) throw new Error(`Unrecognised post date "${date}" — use the form "Oct 22, 2026"`)
  return `${m[3]}-${MONTHS[m[1]]}-${m[2].padStart(2, '0')}`
}

/** The share image with its real pixel size, or the site default. */
export function postImage(post: Post): { url: string; width: number; height: number; path: string } {
  const path = post.ogImage ?? '/og-image.jpg'
  const size = imageSize(path) ?? { width: 1200, height: 630 }
  return { url: `${BASE}${path}`, path, ...size }
}

const OG_LOCALE: Record<string, string> = { en: 'en_GB', de: 'de_DE', es: 'es_ES' }

/** OpenGraph + Twitter for a post in one language. */
export function postSocial(post: Post, lang: string, url: string, title: string, description: string): Pick<Metadata, 'openGraph' | 'twitter'> {
  const image = postImage(post)
  const published = isoDate(post.date)
  return {
    openGraph: {
      siteName: 'pmax',
      type: 'article',
      url,
      locale: OG_LOCALE[lang] ?? 'en_GB',
      title,
      description,
      publishedTime: published,
      modifiedTime: post.dateModified ? isoDate(post.dateModified) : published,
      authors: [post.author ?? 'Philipp Enders'],
      section: post.category,
      images: [{ url: image.url, width: image.width, height: image.height, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image.url, alt: title }],
    },
  }
}

/**
 * Other posts on the same topic, newest first, for the "more on this topic"
 * block. In German and Spanish only translated posts count, so the block never
 * sends a reader to an English page under a localised heading.
 */
export function relatedPosts(post: Post, lang: string, limit = 3): Post[] {
  return posts
    .filter(p => p.slug !== post.slug && !p.external && p.category === post.category)
    .filter(p => lang === 'en' || isPostTranslated(p.slug, lang))
    .sort((a, b) => isoDate(b.date).localeCompare(isoDate(a.date)))
    .slice(0, limit)
}

export function postUrl(slug: string, lang: string): string {
  return `${BASE}${lang === 'en' ? `/blog/${slug}/` : blogPath(slug, lang)}`
}
