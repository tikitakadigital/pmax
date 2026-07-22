#!/usr/bin/env node
// Fails the build if the exported site has broken hreflang.
//
// WHY THIS EXISTS: hreflang errors are silent. Nothing 404s, nothing looks
// wrong in a browser, and the page you are testing usually behaves fine — it is
// the OTHER side of the pair that is broken. This site shipped 20 fully
// translated posts whose English pages never joined their own cluster, and the
// only visible symptom was in Google's index weeks later.
//
// Reciprocity in particular cannot be checked by looking at one page. It needs
// the whole site at once, which is exactly what the static export gives us.
//
// Run against `out/` after `npm run build`.

import fs from "node:fs";
import path from "node:path";

const ROOT = process.argv[2] ?? "out";
const ORIGIN = "https://pmax.online";

if (!fs.existsSync(ROOT)) {
  console.error(`check-hreflang: "${ROOT}" not found — run npm run build first.`);
  process.exit(1);
}

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) walk(f);
    else if (e.name === "index.html") files.push(f);
  }
})(ROOT);

/** Trailing slashes are cosmetic to us but NOT to Google's matcher; compare on a normalised form. */
const norm = u => (u || "").replace(/\/+$/, "") || "/";

const pages = new Map();
for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  const alts = {};
  const re = /<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) alts[m[1]] = m[2];
  const rel = path.relative(ROOT, path.dirname(f)).replace(/\\/g, "/");
  pages.set(rel === "" ? "/" : `/${rel}`, {
    canonical: /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1] ?? null,
    robots: /<meta name="robots" content="([^"]+)"/.exec(html)?.[1] ?? null,
    alts,
  });
}

const byCanonical = new Map();
for (const [route, p] of pages) if (p.canonical) byCanonical.set(norm(p.canonical), route);

const errors = [];
const err = (route, msg) => errors.push(`${route}\n      ${msg}`);

for (const [route, p] of pages) {
  const entries = Object.entries(p.alts);
  // A monolingual page legitimately has no cluster; only validate pages that
  // declare one. Missing translations are a content decision, not a defect.
  if (entries.length === 0) continue;

  if (!p.canonical) { err(route, "declares hreflang but has no canonical"); continue; }

  // Google discards every hreflang on a page that canonicals somewhere else.
  const selfUrl = `${ORIGIN}${route === "/" ? "/" : route + "/"}`;
  if (norm(p.canonical) !== norm(selfUrl)) {
    err(route, `hreflang on a page whose canonical points elsewhere (${p.canonical}) — the annotations are ignored`);
  }

  // Self-reference: the page must name its own language, not just x-default.
  if (!entries.some(([l, u]) => l !== "x-default" && norm(u) === norm(p.canonical))) {
    err(route, `no self-referencing hreflang (canonical ${p.canonical} is not among [${entries.map(([l]) => l).join(", ")}])`);
  }

  if (!p.alts["x-default"]) err(route, "no x-default");

  for (const [lang, url] of entries) {
    if (!/^https?:\/\//.test(url)) err(route, `hreflang="${lang}" is relative (${url}) — must be absolute`);
    if (lang === "x-default") continue;

    const target = byCanonical.get(norm(url));
    if (target === undefined) { err(route, `hreflang="${lang}" points at ${url}, which no page claims as its canonical`); continue; }
    if (target === route) continue;

    const t = pages.get(target);
    if ((t.robots || "").includes("noindex")) {
      err(route, `hreflang="${lang}" points at ${url}, which is noindex`);
    }
    // THE ONE THAT BIT US: A names B, but B never names A back.
    if (!Object.entries(t.alts).some(([l, u]) => l !== "x-default" && norm(u) === norm(p.canonical))) {
      err(route, `hreflang="${lang}" -> ${target} is NOT reciprocal: ${target} does not list ${p.canonical} back, so Google discards the whole cluster`);
    }
  }
}

const clustered = [...pages.values()].filter(p => Object.keys(p.alts).length).length;
if (errors.length) {
  console.error(`\ncheck-hreflang: ${errors.length} problem(s) across ${clustered} clustered pages\n`);
  errors.forEach(e => console.error("  ✗ " + e));
  console.error("");
  process.exit(1);
}
console.log(`check-hreflang: OK — ${clustered} clustered pages, all self-referencing and reciprocal.`);
