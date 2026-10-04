#!/usr/bin/env node
// Fails the build if the exported site links to a page that does not exist.
//
// WHY THIS EXISTS: on 14 September two localised pages started linking to
// /de/marketing-agency-mallorca and /es/marketing-agency-mallorca — the English
// slug under a localised prefix. Both 404ed. Nothing broke visibly, no test
// failed, and it took a third-party crawl three weeks later to surface them.
// Internal 404s are invisible exactly because the page they sit on renders
// fine; the only reliable moment to catch them is against the finished export,
// where every route that exists is a directory on disk.
//
// Run against `out/` after `npm run build`.

import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.argv[2] ?? 'out'

// Served by a rewrite rather than a file, so there is nothing on disk to find.
const DYNAMIC = [/^\/proposal\/[^/]+\/?$/]

const ASSET = /\.(xml|txt|ico|svg|jpe?g|png|webp|gif|avif|webmanifest|md|php|pdf|json|css|js|woff2?)$/i

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === '_next') continue
      walk(full, found)
    } else if (entry.name.endsWith('.html')) {
      found.push(full)
    }
  }
  return found
}

function resolves(href) {
  const clean = href.split('#')[0].split('?')[0]
  if (clean === '' || clean === '/') return fs.existsSync(path.join(ROOT, 'index.html'))
  if (ASSET.test(clean)) return fs.existsSync(path.join(ROOT, clean))
  if (DYNAMIC.some(re => re.test(clean))) return true
  const asDir = path.join(ROOT, clean, 'index.html')
  const asDirNoSlash = path.join(ROOT, clean.replace(/\/$/, ''), 'index.html')
  return fs.existsSync(asDir) || fs.existsSync(asDirNoSlash) || fs.existsSync(path.join(ROOT, clean))
}

const files = walk(ROOT)
const broken = new Map()
const redirecting = new Map()
const crossLanguage = new Map()
let checked = 0

const isPage = p => fs.existsSync(path.join(ROOT, p.replace(/\/$/, ''), 'index.html'))

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8')
  const page = '/' + path.relative(ROOT, file).replace(/index\.html$/, '').replace(/\\/g, '/')
  const lang = /^\/(de|es)\//.test(page) ? page.split('/')[1] : 'en'

  // An untranslated localised page canonicalises to English, so its one link
  // back to the English version is deliberate, not a mistake.
  const consolidatesToEnglish = /<link rel="canonical" href="https:\/\/pmax\.online\/(?!de\/|es\/)/.test(html)
  const body = html.split('<main')[1]?.split('</main>')[0] ?? ''

  for (const href of new Set([...html.matchAll(/href="(\/[^"]*)"/g)].map(m => m[1]))) {
    if (href.startsWith('/_next')) continue
    checked++

    if (!resolves(href)) {
      if (!broken.has(href)) broken.set(href, new Set())
      broken.get(href).add(page)
      continue
    }

    // A link without the trailing slash costs a 301 on every visit and pushes
    // the target one level deeper in every crawler's view of the site.
    const clean = href.split('#')[0].split('?')[0]
    if (clean !== '/' && !clean.endsWith('/') && !ASSET.test(clean) && isPage(clean)) {
      if (!redirecting.has(href)) redirecting.set(href, new Set())
      redirecting.get(href).add(page)
    }

    // A German or Spanish page linking to the English version of a page that
    // exists in its own language sends the reader out of their language.
    if (lang !== 'en' && !consolidatesToEnglish && body.includes(`href="${href}"`)
        && !href.startsWith(`/${lang}/`) && !ASSET.test(clean) && clean !== '/'
        && isPage(`/${lang}${clean}`)) {
      const key = `${href}  →  /${lang}${clean}`
      if (!crossLanguage.has(key)) crossLanguage.set(key, new Set())
      crossLanguage.get(key).add(page)
    }
  }
}

function report(title, map) {
  if (!map.size) return 0
  console.error(`\n${title}\n`)
  for (const [target, pages] of [...map.entries()].sort()) {
    console.error(`  ${target}`)
    for (const p of [...pages].sort().slice(0, 5)) console.error(`      on ${p}`)
    if (pages.size > 5) console.error(`      … and ${pages.size - 5} more pages`)
  }
  return map.size
}

if (broken.size || redirecting.size || crossLanguage.size) {
  report(`${broken.size} internal target(s) 404:`, broken)
  report(`${redirecting.size} link(s) missing the trailing slash (each costs a 301):`, redirecting)
  report(`${crossLanguage.size} link(s) leaving their own language though a translation exists:`, crossLanguage)
  console.error('')
  process.exit(1)
}

console.log(`check-links: OK — ${checked} internal links across ${files.length} pages. No 404s, no redirect hops, no cross-language links.`)
