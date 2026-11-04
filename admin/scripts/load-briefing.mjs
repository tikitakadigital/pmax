#!/usr/bin/env node
// Load a client briefing into Supabase: the HTML (scoped under .brf), its CSS
// and the reviewed PDF. The page at pmax.online/briefing/<code>/ renders it.
//
// The repo is public, so briefing sources never live in it. Point this script
// at files outside the repo; it keeps nothing.
//
//   cd admin
//   node --env-file=.env.local scripts/load-briefing.mjs BRF001 <briefing.html> <briefing.pdf> \
//     --client "Example GmbH" --contact "Jane Doe" --lang de --date 2026-11-05
//
// Options:
//   --client <name>       client_name (required the first time a code is loaded)
//   --contact <text>      client_contact
//   --title <text>        defaults to the text of the first <h1>
//   --lang de|en|es       defaults to de
//   --date YYYY-MM-DD     defaults to today
//   --status draft|sent   defaults to the current status, or draft for a new code
//   --filename <name.pdf> download name; defaults to the PDF's file name
//   --dry-run             write the scoped HTML and CSS to --out and stop
//   --out <dir>           where --dry-run writes (defaults to a temp dir)
//
// Re-running with the same code replaces content and PDF and keeps the token,
// so a link that has already gone out keeps working.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { basename, join } from 'node:path'
import { tmpdir } from 'node:os'
import { createHash } from 'node:crypto'
import postcss from 'postcss'
import { createClient } from '@supabase/supabase-js'

// ── Arguments ────────────────────────────────────────────────────────────────

const args = process.argv.slice(2)
const positional = []
const opts = {}
for (let i = 0; i < args.length; i++) {
  const a = args[i]
  if (a === '--dry-run') opts.dryRun = true
  else if (a.startsWith('--')) opts[a.slice(2)] = args[++i]
  else positional.push(a)
}
const [codeArg, htmlFile, pdfFile] = positional
if (!codeArg || !htmlFile || !pdfFile) {
  console.error('Usage: load-briefing.mjs <CODE> <html-file> <pdf-file> [--client …] [--dry-run]')
  process.exit(1)
}
const code = codeArg.toUpperCase()
if (!/^[A-Z0-9_-]+$/.test(code)) fail(`Code "${code}" may only contain A–Z, 0–9, _ and - (it becomes part of the URL).`)
if (opts.lang && !['de', 'en', 'es'].includes(opts.lang)) fail('--lang must be de, en or es')
if (opts.status && !['draft', 'sent'].includes(opts.status)) fail('--status must be draft or sent')
if (opts.date && !/^\d{4}-\d{2}-\d{2}$/.test(opts.date)) fail('--date must be YYYY-MM-DD')

function fail(msg) {
  console.error(`\n✗ ${msg}\n`)
  process.exit(1)
}

// ── Split the source into CSS and body HTML ──────────────────────────────────

const source = readFileSync(htmlFile, 'utf8')
const rawCss = [...source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]).join('\n')
const bodyMatch = source.match(/<body[^>]*>([\s\S]*)<\/body>/i)
let html = (bodyMatch ? bodyMatch[1] : source)
  .replace(/<!doctype[^>]*>/gi, '')
  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
  .replace(/<(meta|link)\b[^>]*>/gi, '')
  .replace(/<\/?(html|head|body)\b[^>]*>/gi, '')
  .trim()

// The page renders this HTML as-is, so it has to be inert.
if (/<script\b/i.test(html)) fail('The HTML contains a <script>. Briefings are static documents; remove it.')
if (/\son[a-z]+\s*=/i.test(html)) fail('The HTML contains an inline event handler (onclick=…). Remove it.')
if (/(href|src)\s*=\s*["']?\s*javascript:/i.test(html)) fail('The HTML contains a javascript: link. Remove it.')
if (/<iframe\b/i.test(html)) fail('The HTML contains an <iframe>. Remove it.')

// ── Scope the CSS under .brf ─────────────────────────────────────────────────

// The source loads its fonts from Google; on pmax.online the same families are
// self-hosted by next/font and exposed as CSS variables. Condensed before plain.
const FONT_VARS = [
  ['Fira Sans Condensed', 'var(--font-fira-condensed)'],
  ['Fira Sans', 'var(--font-fira)'],
  ['Space Grotesk', 'var(--font-sans)'],
  ['Space Mono', 'var(--font-mono)'],
  ['Anton', 'var(--font-display)'],
]
const ROOT = '.brf'
const KEEP_GLOBAL = new Set(['keyframes', '-webkit-keyframes', 'font-face', 'page'])

function scopeSelector(sel) {
  const s = sel.trim()
  if (s === ':root' || s === 'html' || s === 'body') return [ROOT]
  if (s === '*') return [ROOT, `${ROOT} *`]
  const m = s.match(/^(:root|html|body)\b\s*(.*)$/)
  if (m) return [m[2] ? `${ROOT} ${m[2]}` : ROOT]
  return [`${ROOT} ${s}`]
}

const scoped = postcss([
  {
    postcssPlugin: 'scope-briefing',
    Declaration(decl) {
      for (const [family, cssVar] of FONT_VARS) {
        decl.value = decl.value.replace(new RegExp(`(["'])${family}\\1`, 'g'), cssVar)
      }
    },
    Rule(rule) {
      if (rule.__scoped) return
      let p = rule.parent
      while (p) {
        if (p.type === 'atrule' && KEEP_GLOBAL.has(p.name)) return
        p = p.parent
      }
      rule.selectors = rule.selectors.flatMap(scopeSelector)
      rule.__scoped = true
    },
  },
]).process(rawCss, { from: undefined }).css

const leftovers = scoped.match(/(^|[}\s,])(:root|html|body)\s*[{,]/m)
if (leftovers) fail(`A global selector survived scoping: ${leftovers[0].trim()}`)
if (/fonts\.googleapis|@import/i.test(scoped)) fail('The CSS still imports external fonts or stylesheets.')

// ── Metadata ─────────────────────────────────────────────────────────────────

const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
const title = opts.title ?? (h1 ? h1[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '')
const pdfFilename = opts.filename ?? basename(pdfFile)
if (!/\.pdf$/i.test(pdfFilename)) fail('--filename must end in .pdf')
const pdf = readFileSync(pdfFile)
if (pdf.subarray(0, 5).toString() !== '%PDF-') fail(`${pdfFile} is not a PDF.`)
const sha = buf => createHash('sha256').update(buf).digest('hex')

console.log(`\nBriefing ${code}`)
console.log(`  title     ${title || '(none)'}`)
console.log(`  html      ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB, css ${(Buffer.byteLength(scoped) / 1024).toFixed(0)} KB (scoped under ${ROOT})`)
console.log(`  pdf       ${pdfFilename}, ${(pdf.length / 1024).toFixed(0)} KB, sha256 ${sha(pdf).slice(0, 16)}…`)

if (opts.dryRun) {
  const out = opts.out ?? join(tmpdir(), `briefing-${code}`)
  mkdirSync(out, { recursive: true })
  writeFileSync(join(out, 'body.html'), html)
  writeFileSync(join(out, 'scoped.css'), scoped)
  writeFileSync(join(out, 'preview.html'), `<!doctype html><meta charset="utf-8"><style>${scoped}</style><div class="brf">${html}</div>`)
  console.log(`\nDry run: wrote body.html, scoped.css and preview.html to ${out}. Nothing was uploaded.\n`)
  process.exit(0)
}

// ── Upload ───────────────────────────────────────────────────────────────────

const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) fail('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are not set. Run with: node --env-file=.env.local …')
const db = createClient(url, key, { auth: { persistSession: false } })

const { data: existing, error: readError } = await db
  .from('briefings').select('code, status, client_name').eq('code', code).maybeSingle()
if (readError) fail(`Could not read the briefings table: ${readError.message}. Has admin/supabase/004_briefings.sql been run?`)
if (!existing && !opts.client) fail('--client is required when a code is loaded for the first time.')

const pdfPath = `${code}/${pdfFilename}`
const { error: uploadError } = await db.storage
  .from('briefings')
  .upload(pdfPath, pdf, { contentType: 'application/pdf', upsert: true })
if (uploadError) fail(`PDF upload failed: ${uploadError.message}`)

// The download button promises the reviewed file, byte for byte.
const { data: stored, error: downloadError } = await db.storage.from('briefings').download(pdfPath)
if (downloadError) fail(`Could not read the PDF back: ${downloadError.message}`)
if (sha(Buffer.from(await stored.arrayBuffer())) !== sha(pdf)) fail('The stored PDF differs from the local file.')

const row = {
  code,
  title,
  html,
  css: scoped,
  pdf_path: pdfPath,
  pdf_filename: pdfFilename,
  updated_at: new Date().toISOString(),
  ...(opts.client && { client_name: opts.client }),
  ...(opts.contact && { client_contact: opts.contact }),
  ...(opts.lang && { lang: opts.lang }),
  ...(opts.date && { date: opts.date }),
  ...(opts.status ? { status: opts.status } : existing ? {} : { status: 'draft' }),
}
const { data: saved, error: saveError } = await db
  .from('briefings').upsert(row, { onConflict: 'code' }).select('code, status, access_token').single()
if (saveError) fail(`Saving the briefing failed: ${saveError.message}`)

console.log(`\n✓ ${existing ? 'Updated' : 'Created'} ${saved.code} (status: ${saved.status}). The stored PDF matches the local file.`)
console.log(`\n  https://pmax.online/briefing/${saved.code}/#t=${saved.access_token}\n`)
if (saved.status === 'draft') console.log('  Still a draft: views are not logged. Set --status sent when it goes to the client.\n')
