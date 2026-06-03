import type { ReactNode } from 'react'

export interface ServiceDetail {
  slug: string
  num: string
  metaTitle: string
  metaDesc: string
  pageTitle: ReactNode
  deck: string
  stats: { num: string; label: string }[]
  sectionKicker: string
  prose: ReactNode
  faqs: { q: string; a: string }[]
  relatedCase?: { slug: string; variant: string; title: string }
  promoEyebrow: string
  promoHeadline: string
  promoDeck: string
  promoCtaLabel: string
  promoTopic: string
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'ai-visibility',
    num: '01',
    metaTitle: 'AI search visibility (GEO) — ChatGPT & Perplexity | pmax',
    metaDesc: 'Get cited by ChatGPT, Perplexity, Gemini and Google AI Overviews. We build the schema, content and trust signals that earn AI citations for your brand.',
    pageTitle: <>AI search<br />visibility <em>(GEO)</em>.</>,
    deck: 'When someone asks ChatGPT, Perplexity, Gemini or Google\'s AI Overviews for a recommendation in your category — we make sure your brand is in the answer. With evidence, not tricks.',
    stats: [
      { num: '61%', label: 'of buyer journeys now pass through an AI answer (Gartner, 2026)' },
      { num: '4/4', label: 'AI engines we measure clients in — ChatGPT, Perplexity, Gemini, Google AI Overviews' },
      { num: '12wk', label: 'typical time from kickoff to first reliable citations' },
      { num: '0', label: 'shortcuts. AI visibility is earned, not gamed.' },
    ],
    sectionKicker: 'The shift',
    prose: (
      <>
        <p>For twenty years, &ldquo;doing SEO&rdquo; meant getting links and ranking on Google. That still matters. But it&apos;s no longer the whole game.</p>
        <p>In 2026, a meaningful share of high-intent searches never reach a Google results page. People ask ChatGPT for a B2B software recommendation. They ask Perplexity to compare three solar installers. They get an answer from Gemini in their Gmail inbox without leaving Google at all. Each of those moments is a sale your old SEO setup probably isn&apos;t winning.</p>
        <p><strong>The new question isn&apos;t &ldquo;do we rank?&rdquo; It&apos;s &ldquo;do we get cited?&rdquo;</strong></p>
        <p>Generative Engine Optimisation — GEO, AI visibility, AI search optimisation, call it what you like — is the discipline of making sure large language models can find your brand, understand what you do, and recommend you with confidence when someone asks. It overlaps heavily with classical SEO (the technical fundamentals are the same), but it adds a layer of work around structured data, entity disambiguation, and the trust signals AI models actually weigh.</p>
        <h2>What we do, step by step</h2>
        <h3>1. Audit your current AI visibility</h3>
        <p>We run hundreds of prompts about your category through ChatGPT, Perplexity, Gemini and Google&apos;s AI Overviews — and record which competitors get mentioned, in what context, with what sentiment. That&apos;s your baseline. We then audit the technical surface of your site: schema, sitemaps, robots, llms.txt, entity coverage, and how easily an AI crawler can extract clean facts about your business.</p>
        <h3>2. Fix the foundations</h3>
        <p>Most sites fail AI visibility before they fail SEO. We fix the unglamorous things first:</p>
        <ul>
          <li>Schema.org markup (Organization, Service, Product, FAQ, HowTo, Person) — so AI knows what each page is</li>
          <li>A clean, machine-readable About page with verified facts AI can quote</li>
          <li><code>llms.txt</code> and an updated <code>robots.txt</code> with explicit AI bot rules</li>
          <li>Entity disambiguation — making sure your brand has a clear identity across the web (Wikidata, LinkedIn, Crunchbase, industry directories)</li>
          <li>A site structure AI crawlers can actually read (no JS-only content, no infinite redirects, sensible canonicals)</li>
        </ul>
        <h3>3. Build evidence AI trusts</h3>
        <p>Large language models cite sources that look credible to them — established review sites, trade publications, well-cited blog content, and structured data they can verify. We build a content and PR programme that gets your brand mentioned in those places, alongside the kind of evidence (case studies with verifiable numbers, expert author bylines, fact-checked claims) AI models reward.</p>
        <h3>4. Measure and iterate</h3>
        <p>Every month we re-run the same prompts and report on what changed. Which prompts now mention you. What sentiment. Which competitors lost share. Which new prompts you should be winning.</p>
        <div className="prose-callout">
          <span className="prose-callout-kicker">A note on honesty</span>
          <p>AI visibility is not a hack and there&apos;s no overnight win. The agencies promising you &ldquo;first-page ChatGPT results in 30 days&rdquo; are either lying or doing something that&apos;ll get you delisted later. Our shortest engagement is 12 weeks because that&apos;s how long the work honestly takes.</p>
        </div>
        <h2>What you get</h2>
        <ul>
          <li><strong>Monthly AI visibility report</strong> across all four major engines — your share of voice, your sentiment, your competitors&apos; share</li>
          <li><strong>A live citation tracker</strong> so you see new mentions the day they appear</li>
          <li><strong>A technical foundation</strong> that compounds — every fix we make also helps your traditional SEO</li>
          <li><strong>Content and PR support</strong> that earns evidence AI models cite</li>
          <li><strong>Quarterly strategy reviews</strong> with your team, so the work stays tied to revenue</li>
        </ul>
        <h2>Who this is for</h2>
        <p>AI visibility work pays off fastest for businesses where buyers do research before they purchase — B2B software, professional services, considered consumer purchases (real estate, solar, healthcare, hospitality, automotive). If you sell something people Google before they buy, they&apos;re now asking AI too.</p>
      </>
    ),
    faqs: [
      { q: 'What is Generative Engine Optimisation (GEO)?', a: 'Generative Engine Optimisation is the practice of making your brand, products and content discoverable inside AI search engines — ChatGPT, Perplexity, Claude, Gemini and Google\'s AI Overviews — when buyers ask questions related to your category. It overlaps with classical SEO but uses different ranking signals: structured factual content, citations from authoritative third-party sources, schema markup, and presence in the training datasets these models rely on.' },
      { q: 'How long does it take to get cited by ChatGPT or Perplexity?', a: 'For most categories, first citations appear within 6–10 weeks of starting a structured GEO programme — provided your domain already has a baseline of authority. Highly competitive categories (financial services, healthcare, enterprise software) typically take 12–16 weeks. We track mention rate across all four major AI engines monthly so you can see progress, not guess at it.' },
      { q: 'Is AI search visibility different from SEO?', a: 'Yes, but they share a foundation. Classical SEO optimises for Google\'s ten blue links — keyword targeting, internal linking, technical performance. GEO optimises for being the answer an AI engine generates — factual accuracy, source citations, schema, brand recognition. We run both together because the work compounds.' },
      { q: 'Which AI engines do you optimise for?', a: 'ChatGPT (OpenAI), Perplexity, Claude (Anthropic), Gemini (Google), and Google\'s AI Overviews. We track mention rate, citation accuracy and click-through across all five every month. Bing Copilot and Meta AI are emerging surfaces we are building monitoring for in 2026.' },
      { q: 'How do you measure success?', a: 'Three metrics: mention rate (how often your brand is cited on tracked queries, by engine), citation accuracy (whether the facts cited match your actual positioning), and downstream traffic (AI-referred sessions from your analytics, against modelled benchmarks). Quarterly business reviews tie these to pipeline or revenue where attribution allows.' },
    ],
    promoEyebrow: 'Get a free AI visibility audit',
    promoHeadline: 'See where your brand stands today.',
    promoDeck: 'We\'ll run 50 prompts about your category through ChatGPT, Perplexity and Gemini, and send you a one-page report on where you show up — and where you don\'t. Free, no strings.',
    promoCtaLabel: 'Request audit',
    promoTopic: 'ai-audit',
  },

  {
    slug: 'google-ads',
    num: '02',
    metaTitle: 'Google Ads agency — Search, Shopping & PMax | pmax',
    metaDesc: 'Google Ads management focused on profit, not ROAS. Performance Max, Search, Shopping — margin-aware bidding, CRM-fed offline conversions and clean structure.',
    pageTitle: <>Google Ads.</>,
    deck: 'Performance Max, Search, Shopping and Demand Gen — managed for profit, not the ROAS dashboard. We do the work most agencies skip: feed engineering, brand exclusions, offline conversion imports, and the boring weekly account hygiene that compounds.',
    stats: [
      { num: '€8.4M', label: 'annual Google Ads media managed across active accounts' },
      { num: '+184%', label: 'median revenue uplift in the first 12 months' },
      { num: '−31%', label: 'median wasted spend identified in initial audit' },
      { num: 'weekly', label: 'account reviews — never set-and-forget' },
    ],
    sectionKicker: 'the channel',
    prose: (
      <>
        <h2>Why most Google Ads accounts underperform</h2>
        <p>Almost every account we audit has the same three problems. PMax is eating brand search and getting credit for revenue it did not generate. Asset groups are too broad, with high-margin and low-margin products competing for the same budget. Tracking is set up to optimise for form fills, not closed business — so the algorithm keeps finding the cheapest possible humans, not the most valuable ones.</p>
        <p>None of these are hard problems. They just require somebody to actually look at the account weekly and do the unglamorous work.</p>
        <h2>What we do</h2>
        <h3>1. Account audit (week 1)</h3>
        <p>We get read access to your Google Ads, Merchant Center, GA4 and CRM. Within five working days we send back a one-page diagnosis with the three biggest leaks and the rough size of each. No deck, no pitch — just findings.</p>
        <h3>2. Structural rebuild (weeks 2–4)</h3>
        <p>Brand exclusions on PMax. Asset groups split by margin tier. Search themes set deliberately. Tracking moved server-side with Consent Mode v2 properly implemented. Offline conversions wired from your CRM if your sales cycle is longer than a week.</p>
        <h3>3. Weekly operation (ongoing)</h3>
        <p>Every Monday: budget pacing, bid adjustments, negative keyword review, asset performance. Every Friday: kill anything below threshold, brief next week&apos;s creative. Monthly: written report with what changed, what we learned, what we are testing next.</p>
        <h3>4. Profit-based bidding</h3>
        <p>tROAS targets calculated on gross margin, not revenue. Customer match lists fed back monthly. Long-cycle attribution wired in for B2B. The platform finally chasing the customers you actually want.</p>
        <h2>What you get</h2>
        <ul>
          <li><strong>A senior Google Ads lead</strong> on your account every week — not a junior with a checklist</li>
          <li><strong>Monthly written reporting</strong> tied to gross profit, not platform ROAS</li>
          <li><strong>Quarterly strategy reviews</strong> with your commercial team</li>
          <li><strong>Full transparency</strong> — you own the account, you see every change, you can leave any month</li>
          <li><strong>Flat monthly fee</strong> — we do not take a percentage of media spend, so our incentive is to make every euro work harder, not to recommend bigger budgets</li>
        </ul>
      </>
    ),
    faqs: [
      { q: 'How much do you charge?', a: 'Flat monthly retainer that scales with the complexity of the account, not with your ad spend. What matters more than your budget is whether the work can actually move your business — we will tell you honestly on the first call. We never charge a percentage of media.' },
      { q: 'Do we keep ownership of our Google Ads account?', a: 'Always. You own the account from day one, we are added as a manager. If you leave, you keep everything — the structure, the data, the learnings.' },
      { q: 'How quickly do you start showing results?', a: 'Most accounts see measurable improvement (lower wasted spend, better blended ROAS) inside 30 days, because the structural fixes are usually the biggest unlock. Compounded growth typically shows from month 3 onwards.' },
      { q: 'Will you work with our existing creative team?', a: 'Yes. We are happy to brief in to whoever you already work with, or supply our own creative team if you do not have one. Briefs go from media to creative, not the other way around — we tell them what hook to test, what proof point to lead with, what CTA to drive.' },
      { q: 'What does the minimum engagement look like?', a: 'Three months. Anything shorter and the structural work cannot pay back. After three months, monthly rolling — leave whenever you want.' },
    ],
    relatedCase: { slug: 'gabionas', variant: 'is-mint', title: 'Gabiona — 4.6x blended ROAS at peak season' },
    promoEyebrow: 'Free 30-min audit',
    promoHeadline: 'Want a second opinion on your account?',
    promoDeck: 'Share read access — we will send back a one-page diagnosis with three concrete things to fix this quarter. No sales pressure, no deck.',
    promoCtaLabel: 'Request audit',
    promoTopic: 'google-ads-audit',
  },

  {
    slug: 'paid-social',
    num: '03',
    metaTitle: 'Paid social agency — Meta, TikTok & LinkedIn | pmax',
    metaDesc: 'Meta, TikTok and LinkedIn ads built around weekly creative volume. We run the production cadence that keeps paid social fresh and converting.',
    pageTitle: <>Paid social.</>,
    deck: 'Meta, TikTok, LinkedIn and Pinterest run by people who treat creative volume as a media buying decision — because in 2026 it is. Templated brand systems, creator-led production, and the testing discipline that makes the next month\'s winners.',
    stats: [
      { num: '15+', label: 'fresh creative assets shipped per active client, per week' },
      { num: '3.8x', label: 'median blended ROAS on consumer accounts' },
      { num: '€42', label: 'median cost per qualified B2B lead' },
      { num: '6', label: 'languages we run paid social creative in' },
    ],
    sectionKicker: 'the channel',
    prose: (
      <>
        <h2>The creative volume problem</h2>
        <p>Meta&apos;s own research says creative is 56% of paid social performance. Meta&apos;s algorithm needs 10–20 fresh assets a week to keep performance stable. Most brands ship two or three. The gap shows up as rising frequency, falling CTR, and a CPM that drifts up every quarter.</p>
        <p>We solve this with two things that sound boring and aren&apos;t: templated brand systems and a creator-led production pipeline. Same brand, different humans on camera, dramatically more output.</p>
        <h2>What we do</h2>
        <h3>1. Account + creative audit</h3>
        <p>We pull six months of your Meta and TikTok account data, identify the three creative patterns that worked (and the seven that didn&apos;t), and propose a 90-day creative roadmap.</p>
        <h3>2. Brand template build</h3>
        <p>Fonts, colours, motion primitives, hook frameworks, end-card formats. Built once, used hundreds of times — so creators can ship fast without breaking the brand.</p>
        <h3>3. Weekly creative production</h3>
        <p>A small, ongoing creator programme (5–10 creators on retainer) producing UGC weekly. Cheaper than agency creative, faster than internal, and the platforms&apos; algorithms tend to prefer it.</p>
        <h3>4. Testing discipline</h3>
        <p>One variable per test. Hooks tested separately from visuals tested separately from offers. Statistical significance respected. Winners templated, losers killed weekly. The library of winning patterns is the real asset.</p>
        <h2>What you get</h2>
        <ul>
          <li><strong>15+ fresh creatives per week</strong>, briefed and shipped from our in-house creative team plus your creator pool</li>
          <li><strong>A senior media buyer</strong> on your account weekly</li>
          <li><strong>Weekly creative reviews</strong> with what worked, what didn&apos;t, what we&apos;re shipping next</li>
          <li><strong>Monthly written reporting</strong> tied to commercial outcomes, not platform vanity metrics</li>
          <li><strong>Quarterly business reviews</strong> with your commercial team</li>
        </ul>
      </>
    ),
    faqs: [
      { q: 'Do you produce the creative or just buy media?', a: 'Both. Creative volume is the bottleneck in paid social, so an agency that buys media without making creative is solving half the problem. We brief creators, edit and ship — typically 15+ fresh assets per active account per week.' },
      { q: 'Which platforms do you run?', a: 'Meta (Facebook + Instagram), TikTok, LinkedIn and Pinterest. For each we have a senior specialist who runs that platform every day — no juniors learning on your account.' },
      { q: 'How does B2B paid social differ from B2C?', a: 'B2B paid social is mostly LinkedIn, optimised for revenue not form fills. We wire CRM-fed offline conversions so LinkedIn\'s algorithm chases actual SQLs and closed-won opportunities, not the cheapest possible interns who filled in a form.' },
      { q: 'Will you work with our existing creator roster?', a: 'Yes, happily. We can also build one for you — we have an existing pool of European creators across categories we can deploy in days, not months.' },
      { q: 'What budget do we need to make this work?', a: 'It depends on the goal. Small local businesses on Mallorca often start at €1,500–€3,000/month on Meta. To scale Meta-led consumer accounts predictably we usually want €10,000+/month. B2B LinkedIn programmes work from around €6,000/month. Honest answer: we\'ll tell you when the maths doesn\'t add up.' },
    ],
    relatedCase: { slug: 'gabionas', variant: 'is-mint', title: 'Gabiona — 184% revenue growth on Meta + TikTok' },
    promoEyebrow: 'Free 30-min audit',
    promoHeadline: 'Want a second opinion on your account?',
    promoDeck: 'Share read access — we will send back a one-page diagnosis with three concrete things to fix this quarter. No sales pressure, no deck.',
    promoCtaLabel: 'Request audit',
    promoTopic: 'paid-social-audit',
  },

  {
    slug: 'seo',
    num: '04',
    metaTitle: 'SEO agency — technical, local & content SEO | pmax',
    metaDesc: 'Technical SEO, content built around buyer intent, local SEO and international scaling. Organic search as a compounding revenue channel, not a vanity metric.',
    pageTitle: <>SEO.</>,
    deck: 'Technical SEO, editorial content, and the international and local scaling most agencies treat as optional. Slow to compound, expensive to ignore — done properly, the best margin channel a brand can own.',
    stats: [
      { num: '+218%', label: 'median non-brand organic clicks in 12 months' },
      { num: '6–9mo', label: 'typical time to compound returns' },
      { num: '38', label: 'long-form pieces published for our largest client to date' },
      { num: '6', label: 'languages we ship SEO content in' },
    ],
    sectionKicker: 'the channel',
    prose: (
      <>
        <h2>What SEO actually looks like in 2026</h2>
        <p>SEO got harder. Google&apos;s helpful content updates, AI Overviews eating the top of the SERP, the slow death of low-effort content — all real. The brands winning are doing four things, all of them unglamorous: fixing technical foundations properly, publishing content with genuine subject-matter expertise behind it, building EEAT signals (real authors, real reviews, real dates), and connecting the work to revenue with proper attribution.</p>
        <p>None of it is fast. All of it compounds.</p>
        <h2>What we do</h2>
        <h3>1. Technical audit + remediation</h3>
        <p>Crawl your site properly. Identify indexation issues, canonical chains, faceted nav leaks, Core Web Vitals problems, internal linking gaps, schema gaps. Build a prioritised remediation backlog and work through it with your dev team.</p>
        <h3>2. Buyer-journey content programme</h3>
        <p>Map every research question your buyers ask across the full journey. Assign content artefacts. Brief them to subject-matter experts inside your business. Edit and ship. Every piece byline-attributed, fact-checked, dated.</p>
        <h3>3. EEAT and authority work</h3>
        <p>Author profiles. Schema. Real reviews. Genuine citations from third-party publications. The slow trust-building work that turns content into something Google and AI engines both trust.</p>
        <h3>4. Local and international</h3>
        <p>For multi-location businesses: GBP optimisation, NAP consistency, <a href="/seo-company-mallorca">local pack rankings</a>. For international: proper hreflang, locale-specific content, multilingual creative — never auto-translated.</p>
        <h2>What you get</h2>
        <ul>
          <li><strong>A senior SEO lead</strong> running your programme weekly</li>
          <li><strong>A monthly written report</strong> with what shipped, what moved, what&apos;s next</li>
          <li><strong>A live SEO backlog</strong> you and your team have full visibility on</li>
          <li><strong>Content production</strong> in-house or to your existing team — your choice</li>
          <li><strong>Quarterly business reviews</strong> tying organic growth to revenue, not just rankings</li>
        </ul>
      </>
    ),
    faqs: [
      { q: 'How long until we see results?', a: 'Technical fixes can move things in weeks. Content programmes typically compound from month 6 onwards. Stable, defensible organic growth — 9–18 months. Anyone promising faster is either fibbing or doing something risky.' },
      { q: 'Do you do link building?', a: 'We earn citations through PR and content, not paid links. Paid link schemes are the fastest way to lose six months of work to a Google update. Slower, but it stays.' },
      { q: 'Can we do SEO without paid?', a: 'Yes. We have several retainers that are organic-only — when margin and patience allow, it is often the highest-ROI channel a business can run.' },
      { q: 'Will you work with our internal content team?', a: 'Yes — and we prefer it. The best content has subject-matter expertise from inside the business. We do the SEO, briefing, editing and shipping; your team brings the actual knowledge.' },
      { q: 'How do you measure SEO success?', a: 'Three layers. Rankings (a leading indicator, useful but not the goal). Traffic and traffic quality (mid-funnel signal). Pipeline and revenue attributed to organic via proper analytics (the actual goal). We report all three every month.' },
    ],
    relatedCase: { slug: 'ledxpress', variant: 'is-mint', title: 'LEDXpress — +365% organic revenue in 14 months' },
    promoEyebrow: 'Free 30-min audit',
    promoHeadline: 'Want a second opinion on your account?',
    promoDeck: 'Share read access — we will send back a one-page diagnosis with three concrete things to fix this quarter. No sales pressure, no deck.',
    promoCtaLabel: 'Request audit',
    promoTopic: 'seo-audit',
  },

  {
    slug: 'conversion-design',
    num: '05',
    metaTitle: 'Conversion rate optimisation & landing page design | pmax',
    metaDesc: 'CRO and landing page design for booking flows, valuation forms and checkouts — where the revenue is hiding and where most marketing budgets aren\'t looking.',
    pageTitle: <>Conversion design.</>,
    deck: 'Landing pages, booking flows, forms, checkouts. The unglamorous work that fixes the leak before you spend more on the tap. Where most of the revenue is hiding.',
    stats: [
      { num: '+184%', label: 'median uplift in primary conversion rate on rebuilt forms' },
      { num: '3-step', label: 'max for any form we ship — multi-step beats single every time' },
      { num: '<2.5s', label: 'target LCP on every page we build' },
      { num: 'AA', label: 'WCAG compliance minimum on every shipped page' },
    ],
    sectionKicker: 'the channel',
    prose: (
      <>
        <h2>The conversion problem most brands have</h2>
        <p>If you&apos;re spending anything on ads — €2,000 a month or €200,000 — to send people to a page that converts at 1.4%, the highest-ROI thing you can do is rarely to add more budget. It&apos;s to get that page converting at 2.8%. Same media, double the revenue. Nothing else in marketing comes close, and the maths works just as well for a Mallorca restaurant taking online bookings as it does for an enterprise e-commerce brand.</p>
        <p>And yet conversion design is the part of the marketing stack most brands neglect. The form was built in 2019, by a freelancer, and nobody has touched it since. The checkout is five steps. The booking flow asks for the email before anything else. The mobile experience was never properly designed.</p>
        <h2>What we do</h2>
        <h3>1. Conversion audit</h3>
        <p>Heat-mapping, session replay, form analytics, funnel-step analysis. We figure out where you are losing motivated buyers, and why.</p>
        <h3>2. Quantitative + qualitative research</h3>
        <p>Five customer interviews. The actual words real buyers use to describe what they want. The objections they raise. The questions they ask. Without this, every conversion test is guessing.</p>
        <h3>3. Design + build</h3>
        <p>Multi-step forms, conversion-led landing pages, mobile-first checkouts. Built in your CMS (we work in Webflow, Shopify, Magento, WordPress) so your team can edit them after we leave.</p>
        <h3>4. Experimentation</h3>
        <p>A/B tests run with statistical rigour. Winners templated. Losers documented. The point is not to win every test — it is to build a library of what works for your business.</p>
        <h2>What you get</h2>
        <ul>
          <li><strong>A diagnosis of where your conversion is leaking</strong>, with prioritised fixes</li>
          <li><strong>Designed and built landing pages, forms or checkouts</strong> — production-ready, accessible, performance-tuned</li>
          <li><strong>A monthly experiment programme</strong> if your traffic justifies it</li>
          <li><strong>Documentation of every test</strong> so your team owns the learnings</li>
          <li><strong>Direct collaboration with your dev team</strong> — we hand things off cleanly</li>
        </ul>
      </>
    ),
    faqs: [
      { q: 'Can you rebuild our whole site, or just landing pages?', a: 'Either. Most engagements start as a single high-impact rebuild (the page costing you the most lost conversions), and grow into a longer programme once we have proof.' },
      { q: 'What tools do you use?', a: 'Heatmapping: Microsoft Clarity (free) or Hotjar. Session replay: same. A/B testing: VWO, AB Tasty, or Google Optimize Next where available. Builds: Webflow, Shopify, Magento, WordPress, or directly into your existing stack.' },
      { q: 'Do you handle accessibility?', a: 'Yes — WCAG AA minimum on everything we ship. It is good practice, good SEO, and increasingly mandatory under EU accessibility law.' },
      { q: 'How do you handle stats significance?', a: 'Properly. We require 95% statistical confidence and a minimum number of conversions per variant (calculated up-front for the specific test) before declaring a winner. No early-stopping.' },
      { q: 'Do we need a separate paid media agency too?', a: 'Not necessarily — we run conversion alongside Google Ads and paid social for many clients. The two disciplines reinforce each other when run together.' },
    ],
    relatedCase: { slug: 'primundus', variant: 'is-mint', title: 'PRIMUNDUS — multi-step valuation form converting at 11.2%' },
    promoEyebrow: 'Free 30-min audit',
    promoHeadline: 'Want a second opinion on your account?',
    promoDeck: 'Share read access — we will send back a one-page diagnosis with three concrete things to fix this quarter. No sales pressure, no deck.',
    promoCtaLabel: 'Request audit',
    promoTopic: 'conversion-design-audit',
  },

  {
    slug: 'analytics',
    num: '06',
    metaTitle: 'Marketing analytics & tracking — GA4, server-side GTM | pmax',
    metaDesc: 'Tracking that survives iOS and GDPR. Server-side GTM, Consent Mode v2, conversion APIs and CRM-fed offline imports — real data for every marketing decision.',
    pageTitle: <>Analytics &amp; tracking.</>,
    deck: 'Server-side tagging, Consent Mode v2, conversion APIs, CRM-fed offline conversions, GA4 done properly. The engineering work that makes every other marketing euro you spend perform 20–40% better.',
    stats: [
      { num: '+38%', label: 'median uplift in measured conversions after server-side migration' },
      { num: '<15%', label: 'data discrepancy we aim for vs your ledger' },
      { num: '4', label: 'platforms we wire offline conversions to: Google, Meta, LinkedIn, TikTok' },
      { num: 'GDPR', label: 'and ePrivacy compliant by default — every implementation' },
    ],
    sectionKicker: 'the foundation',
    prose: (
      <>
        <h2>Why tracking is the highest-leverage thing you can fix</h2>
        <p>If you cannot trust your marketing data, you cannot make decisions with it. The default tracking setup most websites have was designed for 2018. It does not work properly in 2026 — between iOS restrictions, cookie consent, and the gap between ad clicks and actual revenue.</p>
        <p>Fixing tracking does not just improve your reports. It improves the performance of every paid channel you run, because the ad platforms get better signal back. Properly implemented server-side tagging with Consent Mode v2 and Conversion APIs typically recovers 20–40% of conversion data that was previously invisible.</p>
        <h2>What we do</h2>
        <h3>1. Tracking audit</h3>
        <p>Map your current setup. Identify what is broken, what is leaking, what is double-counted, and what is silently missing. Prioritise fixes by revenue impact.</p>
        <h3>2. Server-side migration</h3>
        <p>Set up server-side GTM on a subdomain of your domain (typically <code>track.yourdomain.com</code>). Move every tag through it. Performance improves, privacy improves, data quality improves.</p>
        <h3>3. Consent Mode v2 + Conversion APIs</h3>
        <p>Implement Consent Mode v2 properly so Google can model consentless conversions. Wire Meta CAPI, LinkedIn Conversions API, TikTok Events API, Google Enhanced Conversions. Hash and send first-party data with consent.</p>
        <h3>4. CRM-fed offline conversions</h3>
        <p>Capture gclid / fbclid / li_fat_id at form submission. Push closed-won opportunities back to ad platforms with their actual contract values. The platforms start optimising for revenue, not form fills.</p>
        <h3>5. Reporting that makes sense</h3>
        <p>GA4 set up properly. Custom dimensions and events that match how you actually think about your business. Looker Studio dashboards or whatever fits your stack.</p>
        <h2>What you get</h2>
        <ul>
          <li><strong>A working tracking foundation</strong> — server-side, consent-aware, GDPR-compliant</li>
          <li><strong>Conversion APIs wired</strong> on every paid channel you run</li>
          <li><strong>Offline conversion imports</strong> if your sales cycle is longer than a week</li>
          <li><strong>GA4 set up properly</strong> — custom events, audiences, channel groupings, retention</li>
          <li><strong>Documentation</strong> — full data dictionary so your team owns the setup after we leave</li>
        </ul>
      </>
    ),
    faqs: [
      { q: 'Is this GDPR compliant?', a: 'Yes. Server-side tagging with proper Consent Mode v2 and a compliant CMP (we work with Cookiebot, OneTrust, Iubenda) is the gold standard for EU-compliant tracking. We document every data flow.' },
      { q: 'Will this break our existing reports?', a: 'No — we run the new setup in parallel with your existing tracking for 4–6 weeks, reconcile, and only switch once we\'re satisfied the data is better, not just different.' },
      { q: 'Do we need our own server-side GTM hosting?', a: 'We typically host it on Google Cloud or AWS for clients, but you own the project. Costs are usually €40–€150/month depending on traffic.' },
      { q: 'How long does a full implementation take?', a: '6–10 weeks for a typical mid-size business. Faster for simple sites, longer for complex ones with multiple data sources and a CRM integration.' },
      { q: 'What CRMs do you integrate with?', a: 'HubSpot, Salesforce, Pipedrive, Zoho, Microsoft Dynamics — and custom systems via webhooks or direct database access. If it has an API, we can probably wire it.' },
    ],
    relatedCase: { slug: 'preo', variant: 'is-mint', title: 'PREO — CRM-fed offline conversions = 71% SAL rate' },
    promoEyebrow: 'Free 30-min audit',
    promoHeadline: 'Want a second opinion on your account?',
    promoDeck: 'Share read access — we will send back a one-page diagnosis with three concrete things to fix this quarter. No sales pressure, no deck.',
    promoCtaLabel: 'Request audit',
    promoTopic: 'analytics-audit',
  },

  {
    slug: 'creative',
    num: '07',
    metaTitle: 'Ad creative production — video, UGC & static at scale | pmax',
    metaDesc: 'Ad creative at paid media pace — UGC, video and static at weekly volume. Briefed by people who buy media, so it converts, not just looks good.',
    pageTitle: <>Creative production.</>,
    deck: 'Video, static and UGC built specifically for paid media. Templated brand systems so creators ship fast. Briefed by the media team, not the creative team — so the work is honest about what it has to do.',
    stats: [
      { num: '15+', label: 'assets per week per active retainer' },
      { num: '3wk', label: 'typical concept-to-launch for a templated brand' },
      { num: '30+', label: 'creators on retainer across European markets' },
      { num: 'AAA', label: 'on every asset shipped — quality control before performance' },
    ],
    sectionKicker: 'the work',
    prose: (
      <>
        <h2>Why most creative production is wrong for paid media</h2>
        <p>Most agency creative is built for awards. Most internal creative is built for stakeholder approval. Almost none of it is built to perform in a 3-second TikTok or Meta feed.</p>
        <p>Performance creative is a different discipline. The hook matters more than the body. The first three seconds determine 80% of the result. UGC outperforms studio-shot in 7 of 10 categories we work in. None of this is the kind of creative process you can run through a 4-week brand-review cycle.</p>
        <h2>What we do</h2>
        <h3>1. Brand template build</h3>
        <p>Fonts, colours, motion primitives, hook frameworks, end-card formats. Built once, used hundreds of times. The brand is enforced by the template; the ideas are brought by creators.</p>
        <h3>2. Creator programme</h3>
        <p>5–10 creators on retainer for each active brand, briefed weekly. We handle sourcing, contracting, usage rights, briefing and editing.</p>
        <h3>3. Weekly production pipeline</h3>
        <p>Briefs go from your media team to our creative team every Monday. Concept-to-shipped: 4 working days typical. 15+ assets per active retainer per week.</p>
        <h3>4. Editing and post</h3>
        <p>In-house editing team. Subtitles, motion, brand templating, platform-spec resizing. Ready-to-ship files delivered into your asset library.</p>
        <h2>What you get</h2>
        <ul>
          <li><strong>15+ fresh assets per week</strong> — video, static, UGC, animated</li>
          <li><strong>A weekly creative brief cycle</strong> tied directly to your media team&apos;s testing roadmap</li>
          <li><strong>Full usage rights</strong> — we negotiate them on your behalf</li>
          <li><strong>Brand-template documentation</strong> so your internal team can extend the system later</li>
          <li><strong>Quarterly creative reviews</strong> with what worked, what didn&apos;t, what we are shipping next</li>
        </ul>
      </>
    ),
    faqs: [
      { q: 'Can we use the creative outside of paid media?', a: 'Yes. Standard usage rights cover paid social, owned channels, email, web. Broader licensing (TV, OOH) we negotiate per project.' },
      { q: 'Do you only produce creative, or can you run the media too?', a: 'Both. Many of our clients run creative production alongside our paid social or Google Ads retainers — the two work best together. We also produce creative for clients whose media is run elsewhere.' },
      { q: 'How do you handle multilingual production?', a: 'Templated approach. One creative concept, multiple market-specific localisations. Voice-over, on-screen text, talent — all localised properly, never auto-translated.' },
      { q: 'What about brand-safe industries (healthcare, finance)?', a: 'We work in both. Creative briefs include the regulatory constraints up-front, and every asset is reviewed against them before shipping. We have not had an asset disapproved in the past 14 months in regulated categories.' },
      { q: 'What is the minimum engagement?', a: 'Three months. Anything shorter and the templated brand system cannot pay back. After three months, monthly rolling.' },
    ],
    relatedCase: { slug: 'automotive', variant: 'is-mint', title: 'Automotive brand campaign — 12 markets, three weeks to launch' },
    promoEyebrow: 'Free 30-min audit',
    promoHeadline: 'Want a second opinion on your account?',
    promoDeck: 'Share read access — we will send back a one-page diagnosis with three concrete things to fix this quarter. No sales pressure, no deck.',
    promoCtaLabel: 'Request audit',
    promoTopic: 'creative-audit',
  },
]

export function getServiceDetail(slug: string) {
  return serviceDetails.find(s => s.slug === slug)
}
