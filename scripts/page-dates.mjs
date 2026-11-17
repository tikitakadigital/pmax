#!/usr/bin/env node
// Sets <lastmod> in out/sitemap.xml from what actually changed.
//
// Hand-maintained dates drifted: /contact/ claimed 2026-04-01, before the repo
// existed, and the homepage stayed on August after it changed. Google only
// uses lastmod when it is reliably accurate, so it comes from data now:
//
//   · Posts and case pages carry dateModified in their own schema (blog.ts,
//     caseDates). That date wins, so a new related-posts block doesn't make
//     every post look edited.
//   · Every other page: a hash of its visible content (title, description,
//     <main> text) is kept in scripts/page-dates.json. When the hash changes,
//     the date becomes the build day.
//
// Run after `next build`, before generate-markdown (which copies the dates
// into the Markdown twins). Build locally before committing so the updated
// page-dates.json goes in with the change; otherwise CI dates the change on
// every deploy until it is committed.
//
//   node scripts/page-dates.mjs out

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const OUT = process.argv[2] ?? 'out'
const SITE = 'https://pmax.online'
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const MANIFEST = join(ROOT, 'scripts', 'page-dates.json')
const TODAY = new Date().toISOString().slice(0, 10)
const FIRST_COMMIT = '2026-05-13'

const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : {}

const decode = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ')

function visibleContent(html) {
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? ''
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? ''
  const main = html.slice(html.indexOf('<main'), html.indexOf('</main>'))
    .replace(/<(script|style|svg)\b[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
  return decode(`${title}\n${desc}\n${main}`).replace(/\s+/g, ' ').trim()
}

/** dateModified from the page's own Article/BlogPosting schema, if it has one. */
function schemaDate(html) {
  for (const [, b] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      for (const n of [].concat(JSON.parse(b))) {
        const t = [].concat(n['@type'] ?? [])
        if (t.some(x => /^(Article|BlogPosting)$/.test(x)) && (n.dateModified || n.datePublished)) return (n.dateModified ?? n.datePublished).slice(0, 10)
      }
    } catch {}
  }
}

/** Route file that renders a URL path, for the first date of a page git has never seen here. */
function routeFile(path) {
  let dir = join(ROOT, 'src', 'app')
  for (const seg of path.split('/').filter(Boolean)) {
    if (existsSync(join(dir, seg))) { dir = join(dir, seg); continue }
    const dyn = ['[lang]', '[slug]'].find(d => existsSync(join(dir, d)))
    if (!dyn) return null
    dir = join(dir, dyn)
  }
  const f = join(dir, 'page.tsx')
  return existsSync(f) ? f : null
}

function seedDate(path, fallback) {
  // An index page changes whenever an entry under it does.
  const children = [...childDates].filter(([p]) => p !== path && p.startsWith(path)).map(([, d]) => d)
  if (children.length && /\/(blog|cases)\/$/.test(path)) return children.sort().at(-1)
  const f = routeFile(path)
  let d = ''
  if (f) {
    // Schema-only commits change markup, not what a reader sees.
    try { d = execFileSync('git', ['log', '-1', '--format=%as', '--invert-grep', '--grep=^Schema:', '--', f], { cwd: ROOT, encoding: 'utf8' }).trim() } catch {}
  }
  const best = [d, fallback].filter(Boolean).sort().at(-1) ?? TODAY
  return best < FIRST_COMMIT ? FIRST_COMMIT : best
}

const sitemapFile = join(OUT, 'sitemap.xml')
let xml = readFileSync(sitemapFile, 'utf8')

// First pass: schema dates of posts and cases, so index pages can follow them.
const childDates = new Map()
for (const [, loc] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const path = loc.replace(SITE, '')
  const file = join(OUT, decodeURIComponent(path), 'index.html')
  if (!existsSync(file)) continue
  const d = schemaDate(readFileSync(file, 'utf8'))
  if (d) childDates.set(path, d)
}
let fromSchema = 0, changed = 0, seeded = 0
const seen = new Set()

xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block, inner) => {
  const loc = inner.match(/<loc>([^<]+)<\/loc>/)?.[1]
  if (!loc) return block
  const path = loc.replace(SITE, '')
  const file = join(OUT, decodeURIComponent(path), 'index.html')
  if (!existsSync(file)) return block
  const html = readFileSync(file, 'utf8')
  const current = inner.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.slice(0, 10)

  let date = schemaDate(html)
  if (date) fromSchema++
  else {
    seen.add(path)
    const hash = createHash('sha256').update(visibleContent(html)).digest('hex').slice(0, 16)
    const entry = manifest[path]
    if (!entry) { manifest[path] = { date: seedDate(path, current), hash }; seeded++ }
    else if (entry.hash !== hash) { manifest[path] = { date: TODAY, hash }; changed++ }
    date = manifest[path].date
  }
  const withDate = /<lastmod>/.test(inner)
    ? inner.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${date}</lastmod>`)
    : inner.replace(/(<\/loc>)/, `$1\n<lastmod>${date}</lastmod>`)
  return `<url>${withDate}</url>`
})

for (const k of Object.keys(manifest)) if (!seen.has(k)) delete manifest[k]
const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)))
writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + '\n')
writeFileSync(sitemapFile, xml)

console.log(`page-dates: ${fromSchema} from page schema, ${Object.keys(sorted).length} by content hash (${changed} changed today, ${seeded} new).`)
if (process.env.CI && (changed || seeded)) console.log('page-dates: content changed without an updated scripts/page-dates.json; run `npm run build` locally and commit it, or these pages are re-dated on every deploy.')
