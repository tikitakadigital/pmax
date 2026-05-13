# project_specs.md — pmax

## What the app does / who uses it
Public marketing website for **pmax Online S.L.** — a digital performance marketing agency in Mallorca, Spain. Visitors discover services, read case studies and journal articles, and contact the agency. No auth. No admin. No database for v1.

---

## Tech stack
| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router, static export for Vercel) |
| Styling | Tailwind CSS |
| Animations | GSAP + @gsap/react + ScrollTrigger |
| Fonts | Space Grotesk (body/display) · Playfair Display italic (accent) · Space Mono (eyebrows) |
| Deployment | Vercel |
| Content | Hardcoded TypeScript data files — no database for v1 |
| Languages | EN only for v1 — DE/ES switcher present in UI, non-functional |

---

## Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage — hero rotator, marquee, 7 service cards, 5 case studies, process steps, journal teaser, CTA |
| `/services` | Services overview — hero + 7 service cards grid |
| `/services/[slug]` | 7 service detail pages (ai-visibility, google-ads, paid-social, seo, cro, analytics, creative) |
| `/industries` | Industries overview |
| `/cases` | Work — full case studies list |
| `/cases/[slug]` | Case study detail (5 cases) |
| `/blog` | Journal — articles list |
| `/about` | About — agency, team, values |
| `/contact` | Contact — form via Next.js API route, email via Resend |
| `/legal/[slug]` | imprint, privacy, cookies, terms |

---

## Design tokens
| Token | Value |
|-------|-------|
| Background | `#131313` |
| Mint / Jelly | `#3cffd0` |
| Violet / Ultraviolet | `#5200ff` |
| Yellow | `#f5e642` (estimated — confirm) |
| Pink | `#ff6ba0` (estimated — confirm) |
| Slate | `#2e3a4e` (estimated — confirm) |
| Mid-gray | `#949494` |
| Dark-gray | `#2d2d2d` |
| White | `#ffffff` |

---

## Key components
| Component | What it does |
|-----------|-------------|
| `Nav` | Logo, nav links, language switcher, mobile drawer |
| `Footer` | Wordmark, 4-col links, socials, legal |
| `ServiceCard` | Card with 6 colour variants (mint, violet, yellow, pink, slate, outlined) |
| `StreamItem` | Case study row — text left, result number right |
| `Marquee` | Auto-scrolling text band (normal + reverse direction) |
| `StatCounter` | Animated number count-up on scroll |
| `FeatureBlock` | Split layout — text left, terminal/visual right |
| `PromoBlock` | Full-width CTA band |
| `SectionHead` | Eyebrow kicker + title + aside text |

---

## GSAP animations
- Hero text stagger on page load
- Stat counters animate to final value on scroll into view (€42M+, 120+, 3 languages)
- Marquee — infinite horizontal scroll loop (one normal, one reversed)
- Section reveal — fade up + slight Y on scroll (`.reveal`, `.reveal-stagger`)
- Service card grid — staggered entrance
- Nav — subtle entrance on load

---

## Contact form
- Next.js API route `/api/contact`
- Sends notification to `hello@pmax.online` via Resend (free tier, no server needed)
- Confirmation email to enquirer
- Honeypot + timestamp spam protection

---

## Content (from design — confirmed)
- Company: pmax Online S.L. · VAT ES B57948123
- Address: Calle Cordova, 5 · 07184 Calvia · Mallorca · Spain
- Phone: +34 871 242 160 · Email: hello@pmax.online
- Founder: Philipp Enders
- 7 services · 5 case studies · 3 journal articles (v1)

---

## What "done" looks like
- All pages render with no TypeScript errors
- GSAP animations run correctly on scroll and load
- Mobile responsive — hamburger drawer works, cards stack
- `npm run build` passes clean
- Deployed to Vercel and accessible at a preview URL
