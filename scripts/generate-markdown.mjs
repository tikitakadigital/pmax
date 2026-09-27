#!/usr/bin/env node
// Builds a Markdown twin for every exported page and declares it in the HTML.
//
// WHY THIS EXISTS: the fetchers behind AI answers ask for Markdown on the
// ordinary page URL (Accept: text/markdown). This site is a static export, so
// there is no server to render Markdown on demand — every twin is written at
// build time, next to the page it mirrors:
//
//   out/index.html            → out/index.md          (https://pmax.online/)
//   out/blog/post/index.html  → out/blog/post.md      (https://pmax.online/blog/post/)
//
// Apache serves those files directly (.md twin) or after content negotiation on
// the page URL (see public/_md.php). The twin is generated from the page's own
// rendered HTML, so the two can never drift apart: same content, minus
// navigation, header, footer, scripts and forms.
//
// Run against `out/` after `next build`.

import fs from 'node:fs'
import path from 'node:path'
import * as cheerio from 'cheerio'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const ROOT = process.argv[2] ?? 'out'
const ORIGIN = 'https://pmax.online'

// Client-rendered pages have no content in the export: a Markdown twin would be
// an empty document. /proposal is also token-gated client data.
const SKIP = [/^\/proposal\//, /^\/404\//]

const turndown = new TurndownService({
  headingStyle: 'atx',
  hr: '---',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  emDelimiter: '_',
})
turndown.use(gfm)

// Anchors that only carry an icon or decoration add nothing to a text document.
turndown.addRule('emptyLinks', {
  filter: node => node.nodeName === 'A' && !node.textContent.trim(),
  replacement: () => '',
})

function pageUrlFor(relDir) {
  return relDir === '' ? `${ORIGIN}/` : `${ORIGIN}/${relDir}/`
}

function twinUrlFor(relDir) {
  return relDir === '' ? `${ORIGIN}/index.md` : `${ORIGIN}/${relDir}.md`
}

function twinFileFor(relDir) {
  return relDir === '' ? path.join(ROOT, 'index.md') : path.join(ROOT, `${relDir}.md`)
}

function typeFor(relDir) {
  if (relDir === '') return 'homepage'
  const p = `/${relDir}/`
  if (/\/blog\/.+/.test(p)) return 'article'
  if (/\/cases\/.+/.test(p)) return 'case-study'
  if (/\/services\/.+/.test(p)) return 'service'
  if (/\/industries\/.+/.test(p)) return 'industry'
  if (/\/legal\//.test(p)) return 'legal'
  return 'page'
}

// lastmod from the sitemap is the only date we actually know for every page.
function readSitemapDates() {
  const file = path.join(ROOT, 'sitemap.xml')
  if (!fs.existsSync(file)) return new Map()
  const xml = fs.readFileSync(file, 'utf8')
  const dates = new Map()
  for (const m of xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>(?:[\s\S]*?<lastmod>([^<]+)<\/lastmod>)?/g)) {
    if (m[2]) dates.set(m[1], m[2].slice(0, 10))
  }
  return dates
}

function absolutise($, el, attr, pageUrl) {
  const value = $(el).attr(attr)
  if (!value) return
  if (/^(https?:|mailto:|tel:|data:)/i.test(value)) return
  if (value.startsWith('#')) {
    $(el).attr(attr, new URL(value, pageUrl).href)
    return
  }
  $(el).attr(attr, new URL(value, ORIGIN).href)
}

function yamlString(value) {
  return `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
}

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === '_next' || entry.name === 'assets' || entry.name === 'og') continue
      walk(full, found)
    } else if (entry.name === 'index.html') {
      found.push(full)
    }
  }
  return found
}

const sitemapDates = readSitemapDates()
let written = 0
let declared = 0
const skipped = []

for (const file of walk(ROOT)) {
  const relDir = path.relative(ROOT, path.dirname(file)).split(path.sep).join('/')
  const pageUrl = pageUrlFor(relDir)
  const twinUrl = twinUrlFor(relDir)
  const routePath = relDir === '' ? '/' : `/${relDir}/`

  if (SKIP.some(re => re.test(routePath))) {
    skipped.push(routePath)
    continue
  }

  const html = fs.readFileSync(file, 'utf8')
  const $ = cheerio.load(html)

  // ── Declare the twin in the HTML head (Applebot and Googlebot take this route) ──
  if ($('link[rel="alternate"][type="text/markdown"]').length === 0) {
    $('head').append(`<link rel="alternate" type="text/markdown" href="${twinUrl}"/>`)
    fs.writeFileSync(file, $.html())
    declared++
  }

  // ── Build the Markdown twin from the page's own content ──
  const $content = $('main').first().length ? $('main').first() : $('body').first()
  const scope = cheerio.load($.html($content))

  scope('nav, header, footer, script, style, noscript, iframe, svg, form, button, [aria-hidden="true"], .noPrint').remove()
  // Flex and grid rows put inline elements next to each other with no
  // whitespace in the markup. Without this, "MallorcaCalvià" happens.
  scope('span, a, strong, em, time, cite').after(' ')
  scope('a[href]').each((_, el) => absolutise(scope, el, 'href', pageUrl))
  scope('img[src]').each((_, el) => absolutise(scope, el, 'src', pageUrl))

  const title = ($('h1').first().text() || $('title').text() || '').replace(/\s+\|\s+pmax\s*$/i, '').trim()
  const summary = ($('meta[name="description"]').attr('content') ?? '').trim()
  const language = $('html').attr('lang') ?? 'en'
  const lastUpdated = sitemapDates.get(pageUrl)

  // The H1 is re-emitted from the front matter title, so drop it from the body.
  scope('h1').first().remove()
  const body = turndown.turndown(scope.html() ?? '').replace(/\n{3,}/g, '\n\n').trim()

  const frontMatter = [
    '---',
    `title: ${yamlString(title)}`,
    `url: ${yamlString(pageUrl)}`,
    `canonical_url: ${yamlString(pageUrl)}`,
    `markdown_url: ${yamlString(twinUrl)}`,
    `language: ${yamlString(language)}`,
    ...(lastUpdated ? [`last_updated: ${yamlString(lastUpdated)}`] : []),
    `type: ${yamlString(typeFor(relDir))}`,
    ...(summary ? [`summary: ${yamlString(summary)}`] : []),
    '---',
  ].join('\n')

  const doc = `${frontMatter}\n\n# ${title}\n\nSource: ${pageUrl}\n\n${body}\n`

  const target = twinFileFor(relDir)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, doc)
  written++
}

console.log(`markdown twins: ${written} written, ${declared} pages got the alternate link, ${skipped.length} skipped (${skipped.join(', ') || 'none'})`)
