# Markdown for AI agents

Since spring 2026 the fetchers behind AI answers ask for Markdown on the
ordinary page URL by sending `Accept: text/markdown`. Applebot does not send the
header but follows `<link rel="alternate" type="text/markdown">`. This site
answers both, and nothing about the HTML pages changed.

## The rule — do not "improve" this

1. **Markdown is served only when the request explicitly prefers it.** Either
   the `Accept` header gives `text/markdown` a higher quality than `text/html`
   (at equal quality, the type listed first wins), or the request is for the
   `.md` twin URL. `Accept: */*`, a browser `Accept`, or no header at all gets
   HTML.
2. **Never decide by user agent.** Serving a bot a different document than a
   human is cloaking, and search engines treat it as such. If you ever find
   yourself writing `RewriteCond %{HTTP_USER_AGENT} GPTBot`, stop — the CI check
   fails on exactly that.
3. **The HTML page and its twin carry the same content.** No extra text for
   bots, nothing withheld from humans. Only navigation, header, footer, scripts
   and forms are dropped.
4. **Two ways in, one document:** negotiation on the canonical URL, and a
   durable twin at `{page}.md` (the homepage at `/index.md`).

## How it works here

The site is a static export, so there is no server to render Markdown on
demand. Every twin is written at build time:

| Page | Twin file | Twin URL |
|---|---|---|
| `/` | `out/index.md` | `https://pmax.online/index.md` |
| `/blog/post/` | `out/blog/post.md` | `https://pmax.online/blog/post.md` |
| `/de/cases/automobil/` | `out/de/cases/automobil.md` | `https://pmax.online/de/cases/automobil.md` |

- **`scripts/generate-markdown.mjs`** runs after `next build`. It converts each
  exported page from its own rendered HTML (`<main>`, minus nav/header/footer/
  scripts/forms/`aria-hidden`), writes the twin, and appends the
  `<link rel="alternate" type="text/markdown">` to the page head. Because the
  twin comes from the page that ships, the two cannot drift apart.
- **`public/_md.php`** decides what to serve. It parses the `Accept` header
  properly, including q values, and serves the twin file or the HTML page.
- **`public/.htaccess`** routes `.md` URLs and any request whose `Accept`
  mentions `text/markdown` to that script, and sets the `Link` alternate header
  on ordinary HTML responses.
- **`scripts/check-markdown.mjs`** runs in CI before deploy. It pins the Accept
  rule (ten header cases, exercised in PHP), checks every page has a twin and
  declares it, and fails if the routing starts sniffing user agents.

## Response contract

Markdown:

```
Content-Type: text/markdown; charset=utf-8
Vary: Accept
Link: <https://pmax.online/blog/post/>; rel="canonical"
Content-Location: https://pmax.online/blog/post.md
Cache-Control: public, max-age=3600, stale-while-revalidate=86400   (twin URL)
Cache-Control: private, no-store                                    (negotiated on the page URL)
```

Then YAML front matter (`title`, `url`, `canonical_url`, `markdown_url`,
`language`, `last_updated` when the sitemap knows it, `type`, `summary`), one
H1, a `Source:` line, then the document. Every internal link is absolute.

The two cache policies are deliberate. The twin has its own URL, so a shared
cache can hold it. A negotiated response shares the URL with the HTML page, and
**Cloudflare does not key its cache on `Vary`** — a cacheable Markdown response
there could later be handed to a browser. So those responses stay out of shared
caches.

## Cloudflare

The zone caches HTML per URL and honours neither `Vary: Accept` nor
`Cache-Control: private, no-store`. On 27 September 2026, with negotiation on
and no cache rule, the edge stored the Markdown response under
`https://pmax.online/` and served it to browsers until the next purge. That is
the failure this whole page exists to prevent.

What makes negotiation safe here is a Cache Rule, live since 27 September 2026:

> Cache Rules → *Bypass cache for Markdown requests*
> Expression: `any(http.request.headers["accept"][*] contains "text/markdown")`
> Setting: **Bypass cache**

Verify it with `cf-cache-status`: a request whose `Accept` mentions
`text/markdown` must come back `DYNAMIC` (straight to the origin), while a
browser request still comes back `HIT`. **If that rule is ever removed, comment
the negotiation block in `.htaccess` out again** — the `.md` twins keep working
either way, because they have their own URLs.

## Verifying

```bash
curl -sI -H "Accept: text/markdown, text/html" https://pmax.online/   # text/markdown
curl -sI https://pmax.online/index.md                                 # text/markdown, Content-Location
curl -sI -H "Accept: text/html,*/*;q=0.8" https://pmax.online/        # text/html + Link alternate
curl -sI -H "Accept: */*" https://pmax.online/                        # text/html
curl -sI https://pmax.online/does-not-exist.md                        # 404
```

The bug worth re-testing after any change to routing or caching: fetch three
different pages with the identical Markdown `Accept` header, twice each, and
confirm each returns its own `url` in the front matter on the second pass. If
two pages return the same document, something is caching on a key that does not
include the page.
