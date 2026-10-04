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
let checked = 0

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8')
  const page = '/' + path.relative(ROOT, file).replace(/index\.html$/, '').replace(/\\/g, '/')
  for (const href of new Set([...html.matchAll(/href="(\/[^"]*)"/g)].map(m => m[1]))) {
    if (href.startsWith('/_next')) continue
    checked++
    if (!resolves(href)) {
      if (!broken.has(href)) broken.set(href, new Set())
      broken.get(href).add(page)
    }
  }
}

if (broken.size) {
  console.error(`\ncheck-links: ${broken.size} internal target(s) 404 across ${files.length} pages\n`)
  for (const [target, pages] of [...broken.entries()].sort()) {
    console.error(`  ${target}`)
    for (const p of [...pages].sort().slice(0, 5)) console.error(`      linked from ${p}`)
    if (pages.size > 5) console.error(`      … and ${pages.size - 5} more pages`)
  }
  console.error('')
  process.exit(1)
}

console.log(`check-links: OK — ${checked} internal links across ${files.length} pages, all resolve.`)
