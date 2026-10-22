#!/usr/bin/env node
// Checks every blog post in the static export (EN, DE, ES) for the search and
// sharing basics, so a post can't ship with a broken share image, schema that
// says something the page doesn't, or an image without alt text.
//
// Fails the build on errors. Prints warnings for things that are judgement
// calls (title and description length, a WebP share image, a future date).
//
//   node scripts/check-seo.mjs out

import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs'
import { join, basename } from 'node:path'

const OUT = process.argv[2] ?? 'out'
const SITE = 'https://pmax.online'
const MAX_IMAGE_BYTES = 400 * 1024
const TODAY = new Date().toISOString().slice(0, 10)

const errors = []
const warnings = []
const err = (page, msg) => errors.push(`${page}: ${msg}`)
const warn = (page, msg) => warnings.push(`${page}: ${msg}`)

// ── helpers ────────────────────────────────────────────────────────────────

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', mdash: '—', ndash: '–', hellip: '…', euro: '€', thinsp: ' ' }
function decode(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTITIES[n] ?? m)
}
// Compare text loosely: quotes, dashes and whitespace vary between JSON and HTML.
const norm = s => decode(s).replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim().toLowerCase()

function meta(html, attr, key) {
  const re = new RegExp(`<meta[^>]*${attr}="${key.replace(/[:.]/g, '\\$&')}"[^>]*>`, 'i')
  const tag = html.match(re)?.[0]
  return tag ? decode(tag.match(/content="([^"]*)"/)?.[1] ?? '') : undefined
}

/** Pixel size from a PNG, JPEG or WebP header — same logic as src/lib/image-size.ts. */
function imageSize(file) {
  const b = readFileSync(file)
  if (b.readUInt32BE(0) === 0x89504e47) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) }
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const c = b.toString('ascii', 12, 16)
    if (c === 'VP8 ') return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff }
    if (c === 'VP8L') { const v = b.readUInt32LE(21); return { width: (v & 0x3fff) + 1, height: ((v >> 14) & 0x3fff) + 1 } }
    if (c === 'VP8X') return { width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 }
  }
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) { i++; continue }
      const m = b[i + 1]
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) }
      i += 2 + b.readUInt16BE(i + 2)
    }
  }
  return null
}

const localFile = url => join(OUT, decodeURIComponent(url.replace(SITE, '').split('?')[0]))
const ISO_DATE = /^\d{4}-\d{2}-\d{2}(T[\d:.]+(Z|[+-]\d{2}:\d{2})?)?$/

// ── pages: out/blog/<slug>/index.html and out/<lang>/blog/<slug>/index.html ──

const pages = []
for (const dir of [join(OUT, 'blog'), join(OUT, 'de', 'blog'), join(OUT, 'es', 'blog')]) {
  if (!existsSync(dir)) continue
  for (const slug of readdirSync(dir)) {
    const file = join(dir, slug, 'index.html')
    if (existsSync(file)) pages.push(file)
  }
}

for (const file of pages) {
  const page = file.slice(OUT.length).replace(/index\.html$/, '')
  const html = readFileSync(file, 'utf8')
  const head = html.slice(0, html.indexOf('</head>') + 7)
  const noindex = /<meta[^>]*name="robots"[^>]*noindex/i.test(head)

  // Title and description
  const title = decode(head.match(/<title>([^<]*)<\/title>/)?.[1] ?? '')
  const description = meta(head, 'name', 'description')
  if (!title) err(page, 'no <title>')
  else if (title.length > 65) warn(page, `title is ${title.length} characters (aim for ≤ 60): "${title}"`)
  // Text written with HTML entities in a JS string ends up double-escaped: "f&uuml;r" on screen.
  for (const [label, text] of [['title', title], ['description', description], ['og:title', meta(head, 'property', 'og:title')], ['h1', decode(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, '') ?? '')]]) {
    if (text && /&[a-z]+;|&#\d+;/i.test(text)) err(page, `${label} shows an escaped HTML entity: "${text}"`)
  }
  if (!description) err(page, 'no meta description')
  else if (description.length > 160) warn(page, `description is ${description.length} characters (aim for ≤ 158)`)

  // Canonical
  const canonical = head.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]
  if (!canonical) err(page, 'no canonical')
  else if (!canonical.startsWith(`${SITE}/`) || !canonical.endsWith('/')) err(page, `canonical not absolute with trailing slash: ${canonical}`)
  if (noindex) continue // untranslated stub pages: canonical to English, nothing else to check

  // OpenGraph / Twitter
  for (const key of ['og:title', 'og:description', 'og:url', 'og:type', 'og:locale', 'og:image', 'og:image:width', 'og:image:height', 'og:image:alt', 'article:published_time']) {
    if (!meta(head, 'property', key)) err(page, `missing ${key}`)
  }
  if (meta(head, 'property', 'og:url') && meta(head, 'property', 'og:url') !== canonical) err(page, 'og:url differs from canonical')
  if (!meta(head, 'name', 'twitter:card')) err(page, 'missing twitter:card')
  const ogImage = meta(head, 'property', 'og:image')
  if (ogImage) {
    const f = localFile(ogImage)
    if (!existsSync(f)) err(page, `og:image file not found: ${ogImage}`)
    else {
      const size = imageSize(f)
      const w = Number(meta(head, 'property', 'og:image:width')), h = Number(meta(head, 'property', 'og:image:height'))
      if (size && (size.width !== w || size.height !== h)) err(page, `og:image declares ${w}x${h} but the file is ${size.width}x${size.height}`)
      if (size && size.width < 1200) warn(page, `og:image is ${size.width}px wide (1200+ recommended)`)
      if (!/\.(jpe?g|png)$/i.test(f)) warn(page, `og:image is not JPEG/PNG (${basename(f)}); some networks won't show WebP`)
    }
  }

  // JSON-LD
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1])
  const nodes = []
  for (const b of blocks) {
    try {
      const data = JSON.parse(b)
      nodes.push(...(Array.isArray(data) ? data : [data]))
    } catch (e) { err(page, `JSON-LD does not parse: ${e.message}`) }
  }
  const typeOf = n => [].concat(n['@type'] ?? [])
  const article = nodes.find(n => typeOf(n).some(t => t === 'BlogPosting' || t === 'Article'))
  if (!article) err(page, 'no BlogPosting/Article schema')
  else {
    for (const k of ['headline', 'description', 'datePublished', 'dateModified', 'author', 'publisher', 'image', 'inLanguage', 'mainEntityOfPage']) {
      if (!article[k]) err(page, `BlogPosting is missing ${k}`)
    }
    for (const k of ['datePublished', 'dateModified']) {
      if (article[k] && !ISO_DATE.test(article[k])) err(page, `BlogPosting ${k} is not ISO 8601: "${article[k]}"`)
    }
    if (article.datePublished > TODAY) warn(page, `datePublished ${article.datePublished} is in the future`)
    if (article.headline?.length > 110) warn(page, `headline is ${article.headline.length} characters (Google truncates past 110)`)
    if (article.url && article.url !== canonical) err(page, 'BlogPosting url differs from canonical')
    const img = article.image?.url ?? article.image
    if (typeof img === 'string' && !existsSync(localFile(img))) err(page, `BlogPosting image not found: ${img}`)
  }
  const crumbs = nodes.find(n => typeOf(n).includes('BreadcrumbList'))
  if (!crumbs) err(page, 'no BreadcrumbList')
  else if (crumbs.itemListElement?.at(-1)?.item !== canonical) err(page, 'last breadcrumb is not this page')

  // FAQPage must describe what the page visibly shows
  const visible = norm(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' '))
  for (const faq of nodes.filter(n => typeOf(n).includes('FAQPage'))) {
    for (const q of faq.mainEntity ?? []) {
      if (!visible.includes(norm(q.name))) err(page, `FAQ question in schema but not on the page: "${q.name}"`)
    }
  }

  // Images in the article
  const main = html.slice(html.indexOf('<main'), html.indexOf('</main>'))
  for (const tag of main.match(/<img\b[^>]*>/g) ?? []) {
    const src = tag.match(/\ssrc="([^"]+)"/)?.[1] ?? ''
    const alt = tag.match(/\salt="([^"]*)"/)?.[1]
    if (!alt?.trim()) err(page, `image without alt text: ${src}`)
    if (!/\swidth="\d+"/.test(tag) || !/\sheight="\d+"/.test(tag)) err(page, `image without width/height: ${src}`)
    if (!src.startsWith('/')) continue
    const f = localFile(src)
    if (!existsSync(f)) { err(page, `image not found: ${src}`); continue }
    if (!/^[a-z0-9]+(-[a-z0-9]+)*\.(webp|avif|jpe?g|png|svg)$/.test(basename(f))) err(page, `image name is not lower-case kebab-case: ${basename(f)}`)
    const bytes = statSync(f).size
    if (bytes > MAX_IMAGE_BYTES) err(page, `image is ${Math.round(bytes / 1024)} KB (budget ${MAX_IMAGE_BYTES / 1024} KB): ${src}`)
  }
}

for (const w of warnings) console.log(`  warn  ${w}`)
if (errors.length) {
  console.error(`\ncheck-seo: ${errors.length} error(s) across ${pages.length} post pages:\n`)
  for (const e of errors) console.error(`  ${e}`)
  process.exit(1)
}
console.log(`check-seo: OK — ${pages.length} post pages, ${warnings.length} warning(s).`)
