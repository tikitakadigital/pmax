#!/usr/bin/env node
// Fails the build if Markdown-for-agents is broken.
//
// WHY THIS EXISTS: every failure mode here is invisible in a browser. A twin
// that stopped being generated, a page that no longer declares its alternate,
// or — worst — a negotiation rule loosened into user-agent sniffing, which
// serves bots a different document than humans and is cloaking. The Accept rule
// is pinned below with the exact headers a real fetcher sends.
//
// Run against `out/` after `npm run build`.

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const ROOT = process.argv[2] ?? 'out'
const ORIGIN = 'https://pmax.online'
const SKIP = [/^\/proposal\//, /^\/404\//]

const errors = []
const notes = []

// ── 1. Every page has a twin and declares it ─────────────────────────────────

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['_next', 'assets', 'og'].includes(entry.name)) continue
      walk(full, found)
    } else if (entry.name === 'index.html') {
      found.push(full)
    }
  }
  return found
}

const pages = walk(ROOT)
if (pages.length === 0) errors.push(`no pages found in ${ROOT}/ — did the build run?`)

let checked = 0
for (const file of pages) {
  const relDir = path.relative(ROOT, path.dirname(file)).split(path.sep).join('/')
  const routePath = relDir === '' ? '/' : `/${relDir}/`
  if (SKIP.some(re => re.test(routePath))) continue

  const twinFile = relDir === '' ? path.join(ROOT, 'index.md') : path.join(ROOT, `${relDir}.md`)
  const twinUrl = relDir === '' ? `${ORIGIN}/index.md` : `${ORIGIN}/${relDir}.md`
  const html = fs.readFileSync(file, 'utf8')
  checked++

  if (!fs.existsSync(twinFile)) {
    errors.push(`${routePath} has no Markdown twin (expected ${path.relative(ROOT, twinFile)})`)
    continue
  }

  const link = html.match(/<link[^>]+rel="alternate"[^>]*type="text\/markdown"[^>]*>/)
  if (!link) {
    errors.push(`${routePath} does not declare its Markdown alternate in the head`)
  } else if (!link[0].includes(twinUrl)) {
    errors.push(`${routePath} declares the wrong twin: ${link[0]}`)
  }

  const md = fs.readFileSync(twinFile, 'utf8')
  const pageUrl = relDir === '' ? `${ORIGIN}/` : `${ORIGIN}/${relDir}/`
  for (const [label, needle] of [
    ['front matter', /^---\n/],
    ['title', /\ntitle: "/],
    ['url', new RegExp(`\\nurl: "${pageUrl.replace(/[/.]/g, '\\$&')}"`)],
    ['canonical_url', /\ncanonical_url: "/],
    ['markdown_url', new RegExp(`\\nmarkdown_url: "${twinUrl.replace(/[/.]/g, '\\$&')}"`)],
    ['language', /\nlanguage: "/],
    ['type', /\ntype: "/],
    ['H1', /\n# .+/],
    ['Source line', new RegExp(`\\nSource: ${pageUrl.replace(/[/.]/g, '\\$&')}`)],
  ]) {
    if (!needle.test(md)) errors.push(`${path.relative(ROOT, twinFile)} is missing its ${label}`)
  }

  // A twin with nothing but front matter means the extraction silently failed.
  const body = md.split(/\nSource: \S+\n/)[1] ?? ''
  if (body.trim().length < 200) {
    errors.push(`${path.relative(ROOT, twinFile)} has almost no content (${body.trim().length} chars)`)
  }

  // Relative links would resolve against the twin URL, not the page.
  const relativeLink = body.match(/\]\((?!https?:|mailto:|tel:|#)[^)]+\)/)
  if (relativeLink) {
    errors.push(`${path.relative(ROOT, twinFile)} has a relative link: ${relativeLink[0]}`)
  }
}

// ── 2. The routing lives in the URL, not in a header ─────────────────────────

const htaccess = fs.readFileSync(path.join(ROOT, '.htaccess'), 'utf8')
if (!/RewriteRule \^\(\.\+\)\\\.md\$ \/_md\.php/.test(htaccess)) {
  errors.push('.htaccess no longer routes .md twin URLs to _md.php')
}
// Negotiation on page URLs may be switched off while the CDN in front caches
// HTML without honouring Vary (see docs/markdown-for-agents.md), but the rule
// must stay in the file, ready to re-enable, and must stay Accept-based.
if (!/RewriteCond %\{HTTP_ACCEPT\} text\/markdown/.test(htaccess)) {
  errors.push('.htaccess no longer carries the Accept negotiation rule')
}
if (/^\s*#\s*RewriteCond %\{HTTP_ACCEPT\} text\/markdown/m.test(htaccess)) {
  notes.push('negotiation on page URLs is disabled — .md twins only (pending the Cloudflare bypass rule)')
}
if (/RewriteCond %\{HTTP_USER_AGENT\}[^\n]*(GPTBot|ClaudeBot|bot|crawler)/i.test(htaccess)) {
  errors.push('.htaccess decides by user agent — that is cloaking, not negotiation')
}
if (!fs.existsSync(path.join(ROOT, '_md.php'))) {
  errors.push('_md.php is missing from the export')
}

// PHP reads the path from REQUEST_URI, so the page is part of the URL the
// cache sees. A shared destination carrying the path in a header would serve
// one page's Markdown for every page.
const php = fs.readFileSync(path.join(ROOT, '_md.php'), 'utf8')
if (!php.includes("REQUEST_URI")) {
  errors.push('_md.php does not derive the page from the request URL')
}
if (/HTTP_USER_AGENT/.test(php)) {
  errors.push('_md.php looks at the user agent — that is cloaking, not negotiation')
}

// ── 3. The Accept rule itself, exercised in PHP ──────────────────────────────

const CASES = [
  ['text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', false, 'browser Accept → HTML'],
  ['text/markdown, text/html', true, 'markdown first at equal q → Markdown'],
  ['text/html, text/markdown', false, 'html first at equal q → HTML'],
  ['*/*', false, 'no preference → HTML'],
  ['', false, 'no Accept header → HTML'],
  ['text/markdown;q=0, text/html', false, 'markdown explicitly refused → HTML'],
  ['text/markdown', true, 'markdown only → Markdown'],
  ['text/html;q=0.8, text/markdown;q=0.9', true, 'higher q wins regardless of order'],
  ['text/markdown;q=0.5, text/html;q=0.9', false, 'lower q loses regardless of order'],
  ['TEXT/MARKDOWN, text/html;q=0.9', true, 'case-insensitive type match'],
]

let phpAvailable = true
try {
  execFileSync('php', ['-v'], { stdio: 'ignore' })
} catch {
  phpAvailable = false
}

if (phpAvailable) {
  const script = `
    require ${JSON.stringify(path.resolve(ROOT, '_md.php'))};
    $cases = json_decode(${JSON.stringify(JSON.stringify(CASES.map(c => c[0])))}, true);
    $out = [];
    foreach ($cases as $c) { $out[] = prefers_markdown($c) ? 1 : 0; }
    echo json_encode($out);
  `
  const result = JSON.parse(execFileSync('php', ['-r', script], { encoding: 'utf8' }))
  CASES.forEach(([header, expected, label], i) => {
    const got = result[i] === 1
    if (got !== expected) {
      errors.push(`Accept rule broken — ${label}: "${header}" served ${got ? 'Markdown' : 'HTML'}`)
    }
  })
} else {
  notes.push('php not installed: the Accept rule was not exercised (CI runs it)')
}

// ── Report ───────────────────────────────────────────────────────────────────

if (errors.length) {
  console.error(`\nMarkdown check failed (${errors.length} problem${errors.length === 1 ? '' : 's'}):\n`)
  for (const e of errors.slice(0, 40)) console.error(`  • ${e}`)
  if (errors.length > 40) console.error(`  … and ${errors.length - 40} more`)
  process.exit(1)
}

console.log(`markdown check: ${checked} pages have a twin and declare it${phpAvailable ? `, ${CASES.length} Accept cases pass` : ''}`)
for (const n of notes) console.log(`  note: ${n}`)
