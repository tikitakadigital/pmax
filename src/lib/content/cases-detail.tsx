import type { ReactNode } from 'react'

export interface CaseDetail {
  slug: string
  metaTitle: string
  metaDesc: string
  breadcrumbLabel: string
  heroVariant: string
  heroKicker: string
  heroTitle: ReactNode
  heroDeck?: string
  stats: { num: string; label: string }[]
  prose: ReactNode
  relatedCases?: { slug: string; variant: string; title: string }[]
  promo?: {
    eyebrow: string
    headline: string
    deck: string
    topic: string
    ctaLabel: string
  }
}

export const caseDetails: CaseDetail[] = [
  {
    slug: 'automotive',
    metaTitle: 'Jaguar Land Rover — +9.4% ad recall lift via Meta | pmax',
    metaDesc: 'Facebook and Instagram brand-awareness campaign for Jaguar Land Rover. +9.4% estimated ad recall lift and −68% cost per landing page view over 8 months.',
    breadcrumbLabel: 'Jaguar Land Rover',
    heroVariant: 'is-slate',
    heroKicker: 'JAGUAR LAND ROVER · BRAND AWARENESS · 2020',
    heroTitle: 'How we lifted ad recall 9.4% for Jaguar Land Rover — and cut cost per landing page view by 68%.',
    stats: [
      { num: '+9.4%', label: 'Estimated ad recall lift' },
      { num: '−8.5%', label: 'Cost per estimated ad recall lift (per person)' },
      { num: '−68%', label: 'Cost per landing page view' },
      { num: '2.38B', label: 'Monthly active users reachable on Meta' },
    ],
    prose: (
      <>
        <div className="case-brief">
          <p>One of the original all-wheel-drive manufacturers — 65+ years building durable, high-performance SUVs — wanted to use Meta&rsquo;s scale to stay in the mind of in-market car buyers across multiple model lines. The brief was awareness, but the CMO wanted it measured properly: not impressions and reach, but whether the ads actually changed what people remembered.</p>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">01</span>
          <h2>The brief — make brand measurable</h2>
          <p>With 2.38 billion monthly active users, Facebook and Instagram were the obvious scale play for an SUV launch. The harder question was how to prove the spend worked. We picked ad recall as the primary KPI — a brand-lift metric that measures how memorable an ad is to its audience — because it is the cleanest leading indicator that creative is doing its job in feed. Cost per landing page view sat alongside it as a sanity check on efficiency.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">02</span>
          <h2>Ask the right questions, then test</h2>
          <p>The work started as a process, not a media plan. We wrote down the questions that actually mattered and then designed tests to answer them:</p>
          <ul>
            <li>What kind of content does this audience already engage with on Jaguar Land Rover&rsquo;s organic Facebook and Instagram pages — comments, likes, shares?</li>
            <li>Which ad formats outperform — video, single image, carousel, dynamic ads?</li>
            <li>Which bidding option delivers the cheapest reliable ad recall lift?</li>
            <li>How do interest-based audiences compare to broader behavioural ones at scale?</li>
          </ul>
          <p>A third-party data-driven testing platform ran the experiments. Every audience and format ran against a hold-out so the lift numbers were defensible, not directional.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">03</span>
          <h2>The creative system</h2>
          <p>Jaguar Land Rover&rsquo;s creative agency produced the video and photography. We translated it into a working ad library across Facebook feed, Instagram feed and Instagram Stories — built to perform in the placements where buyers actually scroll, not just look good in deck previews.</p>
          <p>The campaigns targeted potential adult car buyers aged 25 and over, then we narrowed inside that as audiences proved themselves. Interest targeting was used to layer on people with adjacent passions — outdoor sports, premium automotive content, off-road communities — so the spend leaned toward people whose lives match the product, not just demographic proxies.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">04</span>
          <h2>Automatic placements, deliberate split</h2>
          <p>We let Meta&rsquo;s automatic placements do their job for efficiency, but the spend ended up roughly 60/40 in favour of Facebook — which matched where ad recall was cheapest to buy, not where the platform&rsquo;s defaults wanted to push us. The Facebook and Instagram campaigns also slotted into Jaguar Land Rover&rsquo;s wider integrated launch alongside TV, print, out-of-home and other digital — so the brand-lift study captured cross-channel halo rather than penalising us for it.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">05</span>
          <h2>Results — April to November 2020</h2>
          <p>Eight months of always-on awareness and engagement campaigns on Facebook and Instagram, measured properly across the full window:</p>
          <ul>
            <li><strong>+9.4%</strong> estimated ad recall lift</li>
            <li><strong>−8.5%</strong> cost per estimated ad recall lift (per person)</li>
            <li><strong>−68%</strong> cost per landing page view</li>
          </ul>
          <p>The ad recall lift mattered most. It is the metric that proves a brand spend is doing brand work — not just buying reach that disappears the moment the campaign ends. For Jaguar Land Rover, ongoing awareness and engagement on Meta did exactly what it was supposed to: it kept the SUV line in the consideration set of buyers across multiple integrated launches, at a cost per impression that fell as the programme matured.</p>
        </section>
        <div className="prose-callout">
          <div className="prose-callout-kicker">The takeaway</div>
          <p>Brand on Meta only works when somebody is asking the right questions every week. The platform will happily spend a six-figure monthly budget on impressions that no one remembers. The work that lifts ad recall 9.4% is the work nobody sees: weekly format reads, audience cuts, bid-strategy tests, creative refreshes. None of it is glamorous. All of it compounds.</p>
        </div>
      </>
    ),
  },

  {
    slug: 'energy-utility',
    metaTitle: 'B2B energy utility — SEO & paid search case study | pmax',
    metaDesc: 'How patient B2B search strategy grew organic impressions 31% and paid conversions 52% for a German energy utility serving industrial customers.',
    breadcrumbLabel: 'Energy utility (B2B)',
    heroVariant: 'is-orange',
    heroKicker: 'ENERGY · B2B INDUSTRIAL · INTEGRATED SEARCH CASE STUDY',
    heroTitle: '+31% organic impressions, +52% paid conversions — what happens when a B2B SEO agency meets a publicly-listed energy giant.',
    stats: [
      { num: '+31%', label: 'Organic impressions YoY' },
      { num: '+24.4%', label: 'Average ranking position improvement' },
      { num: '−15%', label: 'Bounce rate vs prior year' },
      { num: '+52%', label: 'Paid search conversions' },
    ],
    prose: (
      <>
        <div className="case-brief">
          <p>A publicly-listed German energy utility supplying electricity and natural gas to industrial customers, plus a portfolio of B2B energy partners. The brief was both organic and paid search, but organic was the harder, slower, more interesting half of the job. Inside a highly-regulated category, with an enormous internal stakeholder map, and a website architecture inherited from years of mergers and rebrands.</p>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">01</span>
          <h2>The starting point: not a technical problem, a coordination problem</h2>
          <p>Energy utilities serving industrial customers have very specific demands of performance marketing. Long deliberation cycles, procurement-led decisions, regulated language, contract-heavy buying. We were brought in to lift organic traffic and qualified leads — but quickly learned the technical fixes were the easy part. The actual constraint was internal: getting changes approved and deployed inside a regulated, listed organisation moves at the pace of the slowest stakeholder, not the fastest SEO recommendation.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">02</span>
          <h2>The discovery: &ldquo;Rome wasn&rsquo;t built in a day&rdquo;</h2>
          <p>A familiar idea inside any large enterprise — less familiar to the agile, smaller agencies that partner with them. Lifting organic for this utility required more than metadata clean-up, mobile-friendliness fixes and Core Web Vitals remediation. It required patience and relationship-building as much as technical SEO skill.</p>
          <p>We weren&rsquo;t initially briefed to advise on content changes or on-page optimisation. But any good B2B SEO partner knows technical correctness alone doesn&rsquo;t move the chart — good content and a strong user experience do. So we expanded the scope of the conversation, slowly, through trust earned issue by issue.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">03</span>
          <h2>The reality: regulated, listed, careful</h2>
          <p>It sounds simple. A few changes to a website and the metrics improve. In a listed Goliath of this size, in a regulated industry where even the right kind of customer communication can sometimes be considered wrong, the stakeholders are cautious, the systems and processes are rigid, and change takes time.</p>
          <p>Through patient, consistent collaboration with many internal stakeholders — many of whom were themselves implementing or optimising systems and guiding the business through digital transformation — changes began to land. Slowly at first, then in a steadier rhythm as the relationship strengthened.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">04</span>
          <h2>The mechanic: organic and paid, running as one</h2>
          <p>Alongside the SEO programme we ran a B2B performance-marketing strategy that combined paid search on Google Ads and Bing Ads with paid LinkedIn and Xing campaigns — the channels procurement decision-makers in German industrial buying actually use. Our cross-channel analysis showed a measurable overlap of at least 5% between paid and organic search at the conversion layer. We still believe a successful search strategy combines both organic and paid effort, deliberately, not as competing budgets.</p>
          <ul>
            <li>Technical SEO (metadata, mobile-friendliness, Core Web Vitals, schema, internal linking)</li>
            <li>Content and on-page optimisation, brought in scope as the relationship developed</li>
            <li>Paid search on Google Ads &amp; Bing Ads, with B2B-specific bid and audience strategy</li>
            <li>Paid LinkedIn and Xing campaigns targeting industrial procurement and energy buyers</li>
            <li>Joined-up analytics so the overlap between paid and organic was visible and managed, not guessed at</li>
          </ul>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">05</span>
          <h2>The result: chart-moving, slowly, then steadily</h2>
          <ul>
            <li><strong>+31% organic impressions YoY</strong> — visibility built deliberately, in the queries that matter.</li>
            <li><strong>+24.4% average ranking position</strong> — a structural lift, not a spike.</li>
            <li><strong>−15% bounce rate</strong> — the on-page work was matching landing pages to intent.</li>
            <li><strong>+42% pages per session</strong> and <strong>+67% average session duration</strong> — visitors finding what they came for.</li>
            <li><strong>+52% paid search conversions</strong> — the paid programme compounding alongside organic, not cannibalising it.</li>
          </ul>
        </section>
        <div className="case-callout">
          <span className="case-callout-kicker">Client testimonial</span>
          <p>&ldquo;We can only speak positively about working with pmax. They took over Google Ads, Bing and LinkedIn ads, and ran combined cross-channel campaigns alongside that. We&rsquo;re a pure-B2B energy supplier, so not a simple environment. Philipp ran a very deliberate audience analysis and we were able to generate some very interesting leads. The collaboration was a pleasure. Even when things got hot, he was always reachable and delivered — including spontaneous ideas — in a way that more than satisfied us.&rdquo;</p>
          <span className="case-callout-attr">— Marketing lead, B2B energy supplier (Germany)</span>
        </div>
        <div className="case-takeaway">
          <span className="case-takeaway-kicker">What made it work</span>
          <p>Being a good partner means wearing many hats — many that don&rsquo;t fit, many you&rsquo;re not used to, many that frankly are somebody else&rsquo;s hat. It means taking the call at 5:30pm on a Friday, holding a one-hour discussion on something you weren&rsquo;t briefed for, and understanding that people inside large organisations often need to clear many hurdles to move anything forward. Patience, understanding, and the steady building of good relationships. That&rsquo;s what makes the chart move when the brief is &ldquo;rank this regulated, listed, complex business&rdquo;.</p>
        </div>
      </>
    ),
    relatedCases: [
      { slug: 'preo', variant: 'is-yellow', title: 'PREO — +72% clicks, niche B2B SEO' },
      { slug: 'primundus', variant: 'is-pink', title: 'PRIMUNDUS — +535% impressions, regional SEO' },
      { slug: 'vc-investor', variant: 'is-mint', title: 'VC investor — +50% VTR, −48% CPM on LinkedIn' },
    ],
    promo: {
      eyebrow: 'Free 30-minute B2B consultation',
      headline: 'Got a complex, regulated, slow-moving B2B brief?',
      deck: 'Tell us about your business, your stakeholder map, your current search performance. We&rsquo;ll send back a one-page diagnosis — including the parts the SEO audit usually doesn&rsquo;t cover.',
      topic: 'b2b-audit',
      ctaLabel: 'Request a consultation',
    },
  },

  {
    slug: 'gabionas',
    metaTitle: 'Gabiona — +27% Google Ads revenue at the same budget | pmax',
    metaDesc: 'Google Shopping and dynamic remarketing lifted Gabiona\'s revenue 27% and AOV 33% — across five European markets at the same budget as the year before.',
    breadcrumbLabel: 'Gabiona',
    heroVariant: 'is-mint',
    heroKicker: 'E-COMMERCE · GARDEN & LANDSCAPING · GOOGLE ADS CASE STUDY',
    heroTitle: '+27% revenue, +33% average order value — at the same Google Ads budget.',
    stats: [
      { num: '+33%', label: 'Average order value YoY' },
      { num: '+27%', label: 'Google Ads revenue YoY (same budget)' },
      { num: '+79%', label: 'Clicks YoY (same budget)' },
      { num: '5', label: 'European markets, one strategy' },
    ],
    prose: (
      <>
        <div className="case-brief">
          <p>Gabiona is a German manufacturer and online retailer of gabion products — baskets, fences, walls and accessories used in landscaping, garden design, erosion control and architecture. They sell across Europe, but Germany is the home market and absorbs most of the brand&rsquo;s internal resources. Our brief covered everything outside the home market: the markets with lower internal priority, the harder economics, and the same budget we&rsquo;d had the year before.</p>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">01</span>
          <h2>The starting point: harder economics outside Germany</h2>
          <p>Selling gabions across Europe sounds straightforward until you look at the operational reality. Multilingual website resources were limited — most product depth lived only in German. Shipping out of Germany into other European countries was slower and more expensive than what modern buyers expect. Trusted Shops, a meaningful trust signal in this category, was only implemented on the home market. Promotional offers also only ran in Germany.</p>
          <p>None of these were ours to fix. So the brief was different: with the same budget as the year before, lift revenue and average order value in the markets we did run — using Google Ads strategy alone.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">02</span>
          <h2>The two levers: Google Shopping and dynamic remarketing</h2>
          <p>We made an early call to concentrate on two channels rather than spread the budget thin across the whole Google estate. Shopping for new demand. Dynamic remarketing for the buyers Shopping had already introduced to the brand. Search picked up the gap in between.</p>
          <h3>Google Shopping — the primary revenue driver</h3>
          <p>Smart Shopping was the workhorse. We worked closely with the brand to identify the product lines and category-level opportunities that justified the heaviest budget allocation — not by gut feel, but by structured market research into where the cross-border demand actually was. Targeted bidding was layered onto profitable product segments so the algorithm wasn&rsquo;t spending equally across the catalogue.</p>
          <h3>Dynamic remarketing — closing the gap</h3>
          <p>Gabions are not an impulse purchase. The deliberation cycle is long, the basket is large, and most buyers come back to the site multiple times before they decide. Dynamic remarketing gave us the touch-points to bring those returning buyers back to the exact products they&rsquo;d already viewed — not generic brand creative, the actual SKU. That is where the AOV lift came from.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">03</span>
          <h2>Audience strategy: built on real user behaviour</h2>
          <p>To get display remarketing to actually pay back, we built customer lists inside Google Analytics that mapped to where each user was in the decision cycle, not just &ldquo;visited the site in the last 30 days&rdquo;. Then we used the market research to position remarketing creative at the moments along the user journey where intent was rising.</p>
          <p>The goal was straightforward: maximise touch-points without burning frequency. Keep prospects in the journey as long as possible. Hand them off to Shopping when they were ready to close.</p>
        </section>
        <div className="case-quote">
          <blockquote>&ldquo;We&rsquo;ve been working with the team for some time and are very happy with the results. Philipp is a thoughtful, knowledgeable partner across everything performance marketing — which is exactly why we&rsquo;re continuing the partnership.&rdquo;</blockquote>
          <cite>Nelson Vollertsen &middot; Ibendahl &amp; Thomsen GmbH</cite>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">04</span>
          <h2>The result: more buying, larger baskets, same spend</h2>
          <p>Across the year, with no increase in budget, the work delivered three things that compound:</p>
          <ul>
            <li><strong>+79% clicks YoY</strong> — the structural Shopping and bidding work made each euro reach noticeably more buyers.</li>
            <li><strong>+27% revenue YoY</strong> — the additional clicks weren&rsquo;t cheap traffic; they converted.</li>
            <li><strong>+33% average order value YoY</strong> — remarketing did its job. People came back, bought more per order, and the deliberation cycle stopped being a leak.</li>
          </ul>
          <p>For a category where the home market gets the website, the offers and the trust signals, that is what good Google Ads execution can do for the markets that don&rsquo;t.</p>
        </section>
        <div className="case-takeaway">
          <span className="case-takeaway-kicker">What made it work</span>
          <p>Discipline over breadth. Smart Shopping as the core revenue engine, fed with research into where the real cross-border opportunity sat. Dynamic remarketing tuned to the deliberation cycle of a high-consideration category. Audiences built from genuine user behaviour, not platform defaults. And a multilingual setup that worked across every market we ran — which is the boring part of European Google Ads that most agencies still underestimate.</p>
        </div>
      </>
    ),
    relatedCases: [
      { slug: 'ledxpress', variant: 'is-mint', title: 'LEDXpress — +365% revenue, 8 months' },
      { slug: 'luxaflex', variant: 'is-orange', title: 'Luxaflex — +3,191% contact requests' },
      { slug: 'preo', variant: 'is-yellow', title: 'PREO — 71% SAL rate via offline conversions' },
    ],
    promo: {
      eyebrow: 'Free 30-minute Google Ads consultation',
      headline: 'Want a second opinion on your Google Ads account?',
      deck: 'Share read access — we&rsquo;ll send back a one-page diagnosis with three concrete things to fix this quarter. No deck, no pitch.',
      topic: 'google-ads-audit',
      ctaLabel: 'Request a consultation',
    },
  },

  {
    slug: 'imero',
    metaTitle: 'IMERO — −60% CPC and +307% sign-ups via Google Ads | pmax',
    metaDesc: 'Google Ads rebuild — Smart Bidding, Display, YouTube and landing page CRO — cut CPC 60% and tripled sign-ups for a regulated SaaS across 11 languages.',
    breadcrumbLabel: 'IMERO Technologies',
    heroVariant: 'is-mint',
    heroKicker: 'SAAS · WINE & SPIRITS COMPLIANCE · GOOGLE ADS CASE STUDY',
    heroTitle: '−60% CPC, +307% sign-ups — a Google Ads rebuild for a regulated SaaS, across 11 languages.',
    stats: [
      { num: '−59.95%', label: 'Average cost-per-click' },
      { num: '+306.75%', label: 'Sign-ups to the e-label tool' },
      { num: '−62.19%', label: 'Cost per conversion (sign-up)' },
      { num: '11', label: 'Languages running in parallel' },
    ],
    prose: (
      <>
        <div className="case-brief">
          <p>IMERO Technologies builds e-label, a digital labelling tool generating QR-code labels for nutritional and ingredient data on wine and other alcoholic beverages — the regulatory layer the EU now requires producers to surface to consumers. A real product solving a real compliance problem, in a market that doesn&rsquo;t yet know it needs the answer. Our brief: turn Google Ads into a sign-up engine.</p>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">01</span>
          <h2>The starting point: an account optimising for the wrong thing</h2>
          <p>When we took over the account, the inefficiencies were familiar but expensive. An unstructured set-up. Unclear campaign objectives. Incomplete keyword research. A bid strategy chasing cost-per-click rather than conversion. The platform was doing what the platform was told to do — deliver cheap clicks — not what the business actually needed, which was qualified sign-ups for a niche SaaS tool. Our goal: restructure the account, lift ad relevance, and put a data-led bid strategy in place to maximise e-label sign-ups.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">02</span>
          <h2>The mechanic: a data-led Google Ads strategy</h2>
          <p>Five strands of work, run in parallel, audited weekly.</p>
          <ul>
            <li><strong>Google Search prioritised.</strong> We led with Search to capture businesses actively looking for digital labelling solutions. Campaigns segmented by core offer and audience, so budget flowed toward the segments where conversion economics actually worked.</li>
            <li><strong>Ad relevance and audience targeting rebuilt.</strong> Ad copy rewritten to speak to IMERO&rsquo;s actual buyer — producers facing the new EU requirement — with messaging matched to search intent. Keyword strategy refined, ads aligned with landing pages, Quality Scores up, costs down.</li>
            <li><strong>Smart Bidding (Target CPA).</strong> Moved off CPC bidding and onto Target CPA so the platform optimised for high-quality leads at the right cost. Search-term reviews weekly to make sure budget went to genuinely relevant queries, not the platform&rsquo;s usual creative interpretation of them.</li>
            <li><strong>Display and YouTube expansion.</strong> Added Display and YouTube to the mix — not for vanity reach, but to meet potential buyers at the awareness and consideration stages of a buying decision they&rsquo;d only just begun. The result was measurable lift in engagement and conversions further down funnel.</li>
            <li><strong>Continuous optimisation.</strong> Bids tuned weekly. Winning keyword sets expanded, losing ones killed. Landing pages iterated. The boring, compounding work that turns a quarterly campaign into an annual programme.</li>
          </ul>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">03</span>
          <h2>Retargeting and ad extensions for visibility</h2>
          <p>Most visitors don&rsquo;t convert on the first session — particularly when the product is solving a regulation they&rsquo;ve only just started reading about. We launched retargeting campaigns for visitors who&rsquo;d touched the site but not converted, and added sitelinks and callout extensions to give more context in the SERP and lift click-through rate.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">04</span>
          <h2>Landing pages built to convert</h2>
          <p>Landing pages were rebuilt for a seamless user experience: mobile-first layout, clear CTAs, compelling offers tied to the visitor&rsquo;s reason for being there. The lift in conversion rate from this layer alone meant every other optimisation downstream worked harder.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">05</span>
          <h2>The result: cheaper clicks, more sign-ups, a category footprint</h2>
          <ul>
            <li><strong>−59.95% average CPC</strong> — same bids, smarter platform signals.</li>
            <li><strong>+306.75% sign-ups</strong> to the e-label tool YoY.</li>
            <li><strong>−62.19% cost per conversion</strong> — the lever every CFO actually cares about.</li>
            <li><strong>~22% click-through rate</strong> on Search campaigns — well above category benchmarks.</li>
            <li><strong>11 languages</strong> running in parallel, mirroring IMERO&rsquo;s European market footprint.</li>
            <li><strong>79% Search impression share</strong> — near-dominant visibility in the queries that mattered.</li>
          </ul>
        </section>
        <div className="case-takeaway">
          <span className="case-takeaway-kicker">What made it work</span>
          <p>Treating Google Ads as an engineering problem, not a media-buying one. Rebuild the structure. Match bid strategy to the actual business objective. Layer Display and YouTube to meet a buyer who didn&rsquo;t yet know they had the problem. Retarget hard, optimise weekly, fix landing pages every time a CRO opportunity surfaces. For a regulated, niche, multi-language SaaS, that&rsquo;s how a Google Ads account becomes a sign-up engine.</p>
        </div>
      </>
    ),
    relatedCases: [
      { slug: 'gabionas', variant: 'is-mint', title: 'Gabiona — +27% revenue, same budget' },
      { slug: 'ledxpress', variant: 'is-mint', title: 'LEDXpress — +365% revenue, 8 months' },
      { slug: 'luxaflex', variant: 'is-orange', title: 'Luxaflex — +3,191% contact requests' },
    ],
    promo: {
      eyebrow: 'Free 30-minute Google Ads consultation',
      headline: 'Want a second opinion on your Google Ads account?',
      deck: 'Share read access. We&rsquo;ll send back a one-page diagnosis with the three biggest leaks and the rough size of each. No deck, no pitch.',
      topic: 'google-ads-audit',
      ctaLabel: 'Request a consultation',
    },
  },

  {
    slug: 'ledxpress',
    metaTitle: 'LEDXpress — +365% SEO revenue in 8 months | pmax',
    metaDesc: 'Structured SEO programme grew LEDXpress revenue 365% in 8 months — technical foundations, intent-first content and paid-data validation.',
    breadcrumbLabel: 'LEDXpress',
    heroVariant: 'is-mint',
    heroKicker: 'E-COMMERCE · LED & LIGHTING · SEO CASE STUDY',
    heroTitle: <>+365% revenue in 8 months — how structured SEO rebuilt LEDXpress&rsquo;s channel mix.</>,
    stats: [
      { num: '+365%', label: 'Monthly revenue growth in 8 months' },
      { num: '+230%', label: 'Organic clicks (1,030 → 3,430 / mo)' },
      { num: '+59%', label: 'Conversion rate (1.45% → 2.30%)' },
      { num: '+46%', label: 'Avg ranking position (41.6 → 22.3)' },
    ],
    prose: (
      <>
        <div className="case-brief">
          <p>LEDXpress is a European online shop for LED lighting, lamps and electrical components. When they came to us, the business was growing — but the growth was being bought, not earned. Most revenue was being generated through paid ads, and rising ad costs were starting to compress margin. The brief was simple: build a scalable SEO programme that delivers sustainable growth, independent of ever-increasing media spend.</p>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">01</span>
          <h2>The starting point: unused SEO potential</h2>
          <p>The picture at kickoff was familiar to anyone who has audited a mid-size e-commerce store. Important commercial keywords had no top rankings. Category and product pages were not aligned to actual search intent. Technical SEO basics — crawl, indexation, internal linking, structured data — were only partly in place. And because paid was carrying the channel mix, nobody had ever made the case for the slower compounding work.</p>
          <p>Our goal was to flip that. Not just more organic traffic, but the right traffic — visitors with buying intent who would convert and compound over time.</p>
        </section>
        <div className="case-quote">
          <blockquote>&ldquo;We&rsquo;re really happy with the partnership. What stands out is that the team doesn&rsquo;t just execute — they think along with us and challenge our assumptions. Together we&rsquo;ve made real progress on both our website and our advertising, always with a focus on sustainable, measurable growth. It feels more like a partnership of equals than working with a classic agency.&rdquo;</blockquote>
          <cite>Harrie Staps &middot; LEDXpress</cite>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">02</span>
          <h2>Technical SEO as the foundation</h2>
          <p>None of the content or ranking work would compound on a broken technical base. So we started there:</p>
          <ul>
            <li>Crawling and indexation — cleaned up parameter URLs, faceted nav leaks, canonical chains, and pages that were absorbing crawl budget without ever converting.</li>
            <li>Page speed — Core Web Vitals work across templates, image pipeline, and third-party tag bloat. Mobile load time fell measurably.</li>
            <li>Internal linking — restructured category-to-product flow so authority finally moved to the pages that needed it.</li>
            <li>Structured data — Product, Offer, BreadcrumbList, Organization and Review schema across the catalogue. Rich results followed within weeks.</li>
          </ul>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">03</span>
          <h2>Keyword research grounded in intent</h2>
          <p>The mistake most e-commerce SEO programmes make is optimising for traffic. We optimised for revenue. Every keyword was scored against three things: commercial intent, traffic potential, and the margin on the products it would surface.</p>
          <ul>
            <li>Identified the keywords with genuine buying intent — not informational queries that look big in a keyword tool but never close.</li>
            <li>Clustered queries by intent so one well-built page could capture a whole semantic cluster, instead of cannibalising itself across thin variants.</li>
            <li>Prioritised by combined revenue and ranking opportunity, so the roadmap was ordered by expected business impact, not difficulty score.</li>
          </ul>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">04</span>
          <h2>Content &amp; on-page — built to convert</h2>
          <p>Every category and key landing page was rewritten with the buyer in mind, not the algorithm. New category pages where the old structure was missing entire commercial clusters. Refreshed meta data, headings and on-page copy across the existing inventory. Every template re-thought around a single question: would a person looking to buy this product feel like they&rsquo;d landed in the right place?</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">05</span>
          <h2>Off-page — earned, not bought</h2>
          <p>A sustainable off-page programme: targeted, high-quality link earning through digital PR and partnerships, paced over months. Domain authority built slowly and deliberately — no PBNs, no link schemes, nothing that gets undone by the next core update.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">06</span>
          <h2>The lever most SEO agencies miss: paid data</h2>
          <p>The fastest way to learn which keywords actually drive revenue is to look at the ones already converting in Google Ads. We used the paid account as a permanent A/B test for SEO targeting:</p>
          <ul>
            <li>Validated keyword commercial value with live conversion data, not estimates.</li>
            <li>Identified profitable long-tail terms that organic strategy then doubled down on.</li>
            <li>Shortened the learning cycle from quarters to weeks — paid told us what worked, organic compounded the winners.</li>
          </ul>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">07</span>
          <h2>The results, 8 months in</h2>
          <p>The headline number is the revenue: <strong>+365% monthly revenue growth in 8 months</strong>. But the breakdown matters more, because it shows the growth is structural, not a spike:</p>
          <ul>
            <li><strong>+230% organic clicks</strong> — from 1,030 to 3,430 per month.</li>
            <li><strong>+59% conversion rate</strong> — from 1.45% to 2.30%, meaning each visitor was meaningfully more valuable.</li>
            <li><strong>+46% improvement in average ranking position</strong> — from 41.6 to 22.3 across tracked commercial keywords.</li>
          </ul>
          <p>Traffic up. Quality of traffic up. Conversion up. That is what compounding SEO actually looks like.</p>
        </section>
        <div className="case-takeaway">
          <span className="case-takeaway-kicker">What made it work</span>
          <p>A whole-stack SEO programme — technical, content and off-page run as one workstream, not three. Data-driven prioritisation that used paid conversion data to de-risk every organic bet. And a relentless focus on conversion-quality traffic rather than vanity volume.</p>
          <p>For LEDXpress, this case study is what scalable, sustainable e-commerce SEO actually looks like in 2026: less reliance on rising ad spend, more compounding margin, and a channel mix that finally tilts toward the side that grows on its own.</p>
        </div>
      </>
    ),
    relatedCases: [
      { slug: 'gabionas', variant: 'is-mint', title: 'Gabionas — 4.6× blended ROAS' },
      { slug: 'primundus', variant: 'is-pink', title: 'PRIMUNDUS — 11.2% form conversion' },
      { slug: 'preo', variant: 'is-yellow', title: 'PREO — 71% SAL rate via offline conversions' },
    ],
    promo: {
      eyebrow: 'Free 30-minute SEO consultation',
      headline: 'Want to see what SEO can do for your store?',
      deck: 'Share read access to your Google Search Console and Analytics. We&rsquo;ll send back a one-page diagnosis with three concrete things to fix this quarter. No deck, no pitch.',
      topic: 'seo-audit',
      ctaLabel: 'Request a consultation',
    },
  },

  {
    slug: 'luxaflex',
    metaTitle: 'Luxaflex — −93% lead cost, +3,191% contact requests | pmax',
    metaDesc: 'Local paid search turned a failing Luxaflex franchise into a 3,191% growth engine — cutting cost per lead 93% over three years of hyper-local targeting.',
    breadcrumbLabel: 'Luxaflex',
    heroVariant: 'is-orange',
    heroKicker: 'RETAIL · BLINDS, AWNINGS & SHUTTERS · FRANCHISE',
    heroTitle: <>A failing paid search programme, rebuilt into a 3,191% growth engine — by getting <em>genuinely</em> local.</>,
    heroDeck: 'Luxaflex® is the market leader for blinds, awnings and roller shutters, and one of the largest retailers of the best-known curtain brands. We were brought in to fix a franchise paid search programme where the cost was too high and the sales too low.',
    stats: [
      { num: '−93%', label: 'Cost per lead — contact-form submissions and calls combined' },
      { num: '+3,191%', label: 'Growth in monthly contact requests over three years' },
      { num: '+527%', label: 'Increase in conversion value across the franchise network' },
      { num: '+270%', label: 'Conversion rate improvement, despite a dramatic rise in traffic' },
    ],
    prose: (
      <>
        <div className="case-brief">
          <p>Luxaflex&reg; franchisees had run paid media before. It hadn&rsquo;t worked — the cost per acquisition was too high and the resulting sales too thin to justify the investment. We were asked to do the job properly: build a paid search programme that could fund itself and scale across a national franchise network where every dealer had different stock, different lead times and different local competition.</p>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">01</span>
          <h2>Get into the data before touching the ads</h2>
          <p>The first thing we did was nothing visible. We sat with each franchisee and learnt their commercial, operational and promotional ecosystems from the inside — manufacturing process, lead times, gross margin per product family, and what the typical Luxaflex customer actually wants when they pick up the phone.</p>
          <p>Only once we understood the unit economics of each dealer did we decide which channels to lean on. The answer wasn&rsquo;t more channels; it was paid search done properly, focused on high-volume, low-cost leads that the dealers could actually fulfil.</p>
        </section>
        <blockquote className="case-pullquote">
          <p>&ldquo;Understanding the importance of local search for this franchise operation was the single biggest unlock — and the thing previous agencies kept missing.&rdquo;</p>
          <cite>— LUXAFLEX FRANCHISE MARKETING TEAM</cite>
        </blockquote>
        <section className="case-chapter">
          <span className="case-chapter-num">02</span>
          <h2>46% of Google searches are local. Most of our keyword budget wasn&rsquo;t.</h2>
          <p>Brand terms were valuable but capped. The search volume — and the genuinely incremental demand — sat in long-tail, non-brand queries that were still geographically anchored. &ldquo;Rollos Hamburg&rdquo;, &ldquo;Markisen M&uuml;nchen&rdquo;, &ldquo;Jalousien in meiner N&auml;he&rdquo;.</p>
          <p>We rebuilt the account structure around four overlapping keyword layers:</p>
          <ul>
            <li><strong>Brand</strong> — defensive, capped budget, high intent</li>
            <li><strong>Generic product</strong> — category-level demand, qualified by landing-page targeting</li>
            <li><strong>Hyper-local</strong> — long-tail geo modifiers mapped to the nearest franchisee</li>
            <li><strong>Offer-based</strong> — seasonal promotions synced to franchisee stock and capacity</li>
          </ul>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">03</span>
          <h2>Seasonality and dealer coordination did the rest</h2>
          <p>Window coverings is a seasonal business — awnings sell in spring, shutters in autumn, blinds year-round but with regional spikes. We modelled seasonality per product family and per franchisee territory, then pre-built creative and budget pacing schedules around it.</p>
          <p>The other half of the work was unglamorous coordination: weekly check-ins with franchisees to keep promotions consistent across ads, landing pages and showroom stock. When an ad promised &ldquo;20% off external shutters this weekend&rdquo;, the landing page said the same thing, the dealer had the product available, and the team answering the phone knew about the offer. That single piece of operational hygiene closed more sales than any bidding tweak we made.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">04</span>
          <h2>What the numbers did</h2>
          <p>Three years in, the same network running through the same Google Ads account looked like a different business:</p>
          <ul>
            <li>Conversion rate up <strong>+270%</strong>, despite traffic rising sharply</li>
            <li>Conversion value up <strong>+527%</strong></li>
            <li>Monthly conversions up <strong>+3,191%</strong></li>
            <li>Cost per conversion down <strong>−93%</strong></li>
          </ul>
          <p>No new media channel. No miracle product. Just a properly structured account, honest local targeting, and the discipline to keep ads, landing pages and dealer reality in sync.</p>
        </section>
      </>
    ),
    promo: {
      eyebrow: 'Multi-location or franchise business?',
      headline: 'Want to know what local search could do for your network?',
      deck: 'Share read access to your accounts — we&rsquo;ll send back a one-page diagnosis with three concrete unlocks for this quarter. Free, no sales pressure.',
      topic: 'franchise-audit',
      ctaLabel: 'Request audit',
    },
  },

  {
    slug: 'preo',
    metaTitle: 'PREO Software — +72% organic clicks, +143% page-1 | pmax',
    metaDesc: 'Content-led SEO opened the used software licence category for PREO — growing organic clicks 72% and page-1 keyword rankings 143% year on year.',
    breadcrumbLabel: 'PREO Software AG',
    heroVariant: 'is-yellow',
    heroKicker: 'B2B SOFTWARE · NICHE CATEGORY · CONTENT-LED SEO CASE STUDY',
    heroTitle: '+72% organic clicks, +143% page-1 keywords — how content-led SEO opened up a niche B2B category.',
    stats: [
      { num: '+72.2%', label: 'Organic clicks YoY' },
      { num: '+17.7%', label: 'Average position improvement YoY' },
      { num: '+143%', label: 'Page-1 keyword rankings vs prior year' },
      { num: '132', label: 'Keywords on page 1, 41 in top 5, 25 in top 3' },
    ],
    prose: (
      <>
        <div className="case-brief">
          <p>PREO Software AG is a specialist trader in used software licences — a category most procurement teams don&rsquo;t know exists until somebody tells them. The founders built the business on the insight that companies of every size carry licences they no longer need, and other companies need licences they don&rsquo;t want to pay full price for. The market works. The problem was that almost nobody was searching for it — because almost nobody knew to.</p>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">01</span>
          <h2>The starting point: a working business with a brand awareness ceiling</h2>
          <p>PREO had won real enterprise accounts through outbound and direct sales. The product worked, the economics worked, the references were strong. What didn&rsquo;t work was inbound: the niche-product problem capped organic demand because procurement teams weren&rsquo;t Googling &ldquo;used software licences&rdquo; — they were Googling the problems used licences solve. Our brief: turn organic search into a second growth engine, sustainably, without short-cuts.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">02</span>
          <h2>The discovery: content has to do the educating</h2>
          <p>The intensive on-boarding made one thing obvious. In a category where the buyer doesn&rsquo;t yet know the category exists, SEO cannot be a keyword-volume game. It has to be an education game. The content has to teach procurement and IT decision-makers what a used licence is, when it&rsquo;s legal, how it works in practice, what the savings actually look like — and only then does the &ldquo;buy from PREO&rdquo; query become possible.</p>
          <p>So the strategy became: regular, genuinely high-quality content that respects the buyer&rsquo;s starting point, paired with a keyword strategy that ladders from broad educational queries to commercial intent.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">03</span>
          <h2>The mechanic: content + keyword structure, working as one</h2>
          <ul>
            <li>Deep keyword research mapped the buyer&rsquo;s real journey — from &ldquo;how do used software licences work&rdquo; to &ldquo;is buying used Microsoft 365 legal&rdquo; through to bottom-of-funnel commercial queries.</li>
            <li>A content programme built around that map — long-form pieces, comparison pages, legal explainers, savings calculators — each tied to a specific search intent rather than a generic &ldquo;blog cadence&rdquo;.</li>
            <li>Site copy rewritten to deploy target keywords deliberately, in service of clarity for the reader — never stuffed.</li>
            <li>Continuous testing through our tooling so we could see which content patterns were compounding and which weren&rsquo;t, and reallocate effort monthly.</li>
          </ul>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">04</span>
          <h2>The technical layer: the foundations that let content compound</h2>
          <p>None of the content work pays back without clean foundations. Ongoing technical SEO: fixing errors and warnings, internal-linking architecture so authority flowed to the commercially valuable pages, schema, crawlability, page speed. Layered with a quality backlink programme from sources that matter in the German B2B software landscape. Boring, deliberate, monthly. The kind of work that doesn&rsquo;t make a slide but moves the chart.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">05</span>
          <h2>The result: clicks, positions, and a category footprint</h2>
          <ul>
            <li><strong>+72.2% organic clicks YoY</strong> — not vanity impressions, actual visits from people researching the category.</li>
            <li><strong>+17.7% average position</strong> — structural ranking lift across the tracked keyword set.</li>
            <li><strong>+143% page-1 keywords vs prior year</strong> — the category footprint grew, not just the ranking on existing terms.</li>
            <li><strong>132 keywords on page 1, 41 in the top 5, 25 in the top 3</strong> — defensible positions on the commercial queries that actually drive enquiries.</li>
          </ul>
        </section>
        <div className="case-takeaway">
          <span className="case-takeaway-kicker">What made it work</span>
          <p>Accepting that a niche B2B category needs content that educates before it sells — and pairing that with a keyword strategy that ladders the buyer from awareness to intent. Then the unglamorous discipline of monthly technical SEO and deliberate off-page work, every month, without breaks. For categories where the buyer doesn&rsquo;t know your category exists yet, this is the only honest way SEO scales.</p>
        </div>
      </>
    ),
    relatedCases: [
      { slug: 'primundus', variant: 'is-pink', title: 'PRIMUNDUS — +535% impressions, regional SEO' },
      { slug: 'ledxpress', variant: 'is-mint', title: 'LEDXpress — +365% revenue, 8 months' },
      { slug: 'gabionas', variant: 'is-mint', title: 'Gabiona — +27% revenue, same budget' },
    ],
    promo: {
      eyebrow: 'Free 30-minute SEO consultation',
      headline: 'Want to see what content-led SEO can do for your category?',
      deck: 'Share read access to Search Console and Analytics. We&rsquo;ll send back a one-page diagnosis with three concrete things to fix this quarter. No deck, no pitch.',
      topic: 'seo-audit',
      ctaLabel: 'Request a consultation',
    },
  },

  {
    slug: 'primundus',
    metaTitle: 'PRIMUNDUS — regional SEO, +535% impressions | pmax',
    metaDesc: 'Regional SEO restructured around the actual buyer grew PRIMUNDUS\'s impressions 535% and clicks 182% — for a German 24-hour care provider over six months.',
    breadcrumbLabel: 'PRIMUNDUS',
    heroVariant: 'is-pink',
    heroKicker: 'HEALTHCARE · 24-HOUR HOME CARE · REGIONAL SEO CASE STUDY',
    heroTitle: '+535% impressions, +182% clicks — through a regional SEO strategy built around how people actually search for care.',
    stats: [
      { num: '+535%', label: 'Impressions, last 6 months vs prior period' },
      { num: '+182%', label: 'Clicks, last 6 months vs prior period' },
      { num: '−9.95', label: 'Avg. ranking position improvement' },
      { num: '193', label: 'Keywords ranking on page 1' },
    ],
    prose: (
      <>
        <div className="case-brief">
          <p>PRIMUNDUS is a German home-care provider in the 24-hour care segment, placing Polish carers with families across Germany. The carers are trained in-house, speak strong German, and handle care, companionship and household work. Founded by people with deep operational experience in the category, the brand has placed over 10,000 carers in more than a decade — but most of that growth came from referrals, not from being found online. Our brief was to make organic search the second growth engine.</p>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">01</span>
          <h2>The starting point: a strong business with a thin online footprint</h2>
          <p>PRIMUNDUS is one of the leading providers in their segment by volume, but the website&rsquo;s organic presence didn&rsquo;t reflect that. Anyone searching outside of branded queries would not have found them. The goal was sustainable: lift organic traffic and, more importantly, lift the share of qualified enquiries coming through organic. To do that properly, we needed a regional SEO strategy — one that aligned the site with how families in specific towns and regions actually search when a parent or partner suddenly needs round-the-clock care.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">02</span>
          <h2>The discovery: buyer is not the patient</h2>
          <p>An early piece of work that re-shaped the whole strategy. In this category, the person searching is almost never the person being cared for. It&rsquo;s the adult child, the spouse, the niece who handles family logistics. They search with different language, in different moments, with different objections than the patient would. The old website was written for the patient. The new one had to be written for the buyer.</p>
          <p>That insight drove a complete restructure of the site architecture and the audience-facing copy — not a redesign, a re-positioning.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">03</span>
          <h2>The mechanic: regional pages built around real demand</h2>
          <p>Once we&rsquo;d mapped the keyword landscape, a clear pattern emerged: best-practice in this category is not a single national page for &ldquo;24-Stunden-Pflege&rdquo;. It&rsquo;s a network of regional pages, each one targeting a specific town or catchment area, each one written for the buyer in that region.</p>
          <ul>
            <li>Deep keyword research at the town level — identifying which regions had genuine search demand worth a dedicated page, and which would simply cannibalise.</li>
            <li>A new information architecture — rebuilt around regions, care needs, and the buyer&rsquo;s decision moments rather than the company&rsquo;s internal service categories.</li>
            <li>On-page content rewritten with target keywords used deliberately, never stuffed — written to read naturally to the family member doing the searching.</li>
            <li>Continuous testing through our tooling so we could course-correct the regional rollout based on actual performance, not a one-shot plan.</li>
          </ul>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">04</span>
          <h2>The technical and off-page layer</h2>
          <p>None of the regional work compounds without the foundations underneath it. We layered the usual technical SEO — crawl, indexation, internal linking, structured data, page speed — on top of a deliberate, slow-burn off-page programme building quality backlinks from sources that matter in the German healthcare and senior-care landscape. Trust signals (real authors, real reviews, dated content) reinforced the EEAT signals Google needs to feel comfortable recommending a YMYL site in a sensitive category.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">05</span>
          <h2>The result: visibility that turned into enquiries</h2>
          <ul>
            <li><strong>+535% impressions</strong> in the last six months versus the prior six.</li>
            <li><strong>+182% clicks</strong> in the same window — visibility translating into qualified traffic, not vanity reach.</li>
            <li><strong>Average ranking position improved by 9.95</strong> — the kind of structural shift that&rsquo;s hard to lose.</li>
            <li><strong>193 keywords on page&nbsp;1</strong>, <strong>79 in the top three</strong>, <strong>22 in position one</strong> — across the regions and care-need queries that actually generate enquiries.</li>
          </ul>
        </section>
        <div className="case-takeaway">
          <span className="case-takeaway-kicker">What made it work</span>
          <p>A regional SEO strategy that respected how the category actually behaves — one buyer, many catchments, all of them deeply local. A site architecture rebuilt around the buyer, not the patient. And the discipline to pair the unglamorous technical foundations with a deliberate off-page programme. For a high-trust, high-stakes category like 24-hour care, that combination is what turns organic search from a vanity channel into an enquiries channel.</p>
        </div>
      </>
    ),
    relatedCases: [
      { slug: 'ledxpress', variant: 'is-mint', title: 'LEDXpress — +365% revenue, 8 months' },
      { slug: 'gabionas', variant: 'is-mint', title: 'Gabiona — +27% revenue, same budget' },
      { slug: 'luxaflex', variant: 'is-orange', title: 'Luxaflex — +3,191% contact requests' },
    ],
    promo: {
      eyebrow: 'Free 30-minute SEO consultation',
      headline: 'Want to see what regional SEO can do for your business?',
      deck: 'Share read access to Search Console and Analytics. We&rsquo;ll send back a one-page diagnosis with three concrete things to fix this quarter. No deck, no pitch.',
      topic: 'seo-audit',
      ctaLabel: 'Request a consultation',
    },
  },

  {
    slug: 'unisono',
    metaTitle: 'Unisono Luxury Homes — +183% phone leads, +138% CTR | pmax',
    metaDesc: 'SEO, Google Ads, Microsoft Ads and web rebuild for a Mallorca luxury villa brand. +183% phone-number clicks, +138% organic CTR year on year.',
    breadcrumbLabel: 'Unisono Luxury Homes',
    heroVariant: 'is-pink',
    heroKicker: 'LUXURY REAL ESTATE · VILLA RENTAL · MALLORCA · SEO + PAID + WEB',
    heroTitle: 'Unisono Luxury Homes — a multi-channel programme built around how a luxury client actually books.',
    stats: [
      { num: '+138%', label: 'Organic CTR YoY (0.8% → 1.9%)' },
      { num: '+14.7', label: 'Average ranking positions gained (34.9 → 20.2)' },
      { num: '+183%', label: 'Phone-number clicks YoY' },
      { num: '+8.8%', label: 'Rental contact submissions YoY' },
    ],
    prose: (
      <>
        <div className="case-brief">
          <p>Unisono Luxury Homes is a Mallorca-based luxury villa brand — sales and high-end seasonal rentals, with a clientele that researches in three languages and books over the phone. Our brief: own organic visibility in a category dominated by international portals, run Google and Microsoft Ads as a profit channel rather than a cost line, and rebuild the website so the work above paid back.</p>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">01</span>
          <h2>The starting point: a category dominated by portals</h2>
          <p>Luxury rental searches in Mallorca are owned by a handful of international platforms with eight-figure ad budgets. For an independent brand — a small team, a curated portfolio, a phone number people genuinely use — ranking organically against them looks impossible on paper.</p>
          <p>It isn&rsquo;t. It just needs different rules of engagement: tighter intent, faster pages, better content, real schema, and the patience to play a 12-month game when the portals are running a 12-week one.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">02</span>
          <h2>The mechanic: four channels, one calendar</h2>
          <p>Four disciplines, run as one programme, audited weekly.</p>
          <ul>
            <li><strong>SEO.</strong> Topic clusters built around buyer intent (&ldquo;rent a villa in Pollensa with a chef&rdquo;, not &ldquo;Mallorca villa&rdquo;). Property pages re-templated with proper schema, real photography, and copy that answers the question a HNW renter actually has. Hreflang done properly across English, German and Spanish.</li>
            <li><strong>Google Ads.</strong> Branded protection, plus tightly-segmented non-brand search around long-stay rental and sale intent. Negative-keyword discipline. Offline conversion imports from the CRM so the platform optimised for booked stays, not form fills.</li>
            <li><strong>Microsoft Ads.</strong> Often skipped in luxury, never should be. Bing&rsquo;s audience over-indexes on the exact demographic this brand sells to. Lower CPCs, higher AOV, conversion economics 30&ndash;40% better than Google for several of the rental segments.</li>
            <li><strong>Web development.</strong> A full site rebuild — same visual design, new tech stack — after we diagnosed that the legacy platform was the single biggest brake on conversion: slow Core Web Vitals, broken form handling under load, hreflang fighting language detection, and an image pipeline that murdered LCP on every property page. We migrated to a faster stack, kept the brand pixel-identical, and rebuilt the bits the user touches: phone number visible above the fold on every page, multi-step enquiry forms that actually post, language switching that doesn&rsquo;t fight the user.</li>
          </ul>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">03</span>
          <h2>The organic results: same site, dramatically more efficient</h2>
          <p>The clearest signal of the SEO work is in the click-through rate and average position numbers from Google Search Console — comparing the last 28 days against the same period last year.</p>
          <ul>
            <li><strong>Organic CTR: 0.8% &rarr; 1.9%.</strong> A 138% relative lift. The same surface area in Google now converts a much higher share of impressions into clicks — a function of better titles, better descriptions, and pages ranking high enough to actually be seen.</li>
            <li><strong>Average position: 34.9 &rarr; 20.2.</strong> Page four to page two on average — the part of the ladder where queries start producing real traffic rather than statistical noise.</li>
            <li><strong>Total clicks: 354 &rarr; 381.</strong> A modest absolute lift — but in a luxury category where every click is worth four figures, the more telling number is what each click is now doing on the site.</li>
            <li><strong>Impressions normalised down to 19.8k</strong> — deliberately, as we pruned thin and off-intent pages. Fewer impressions on queries that never convert; more on queries that do.</li>
          </ul>
          <p>The headline isn&rsquo;t the click count. It&rsquo;s that the same brand, on the same domain, now wins a meaningfully larger share of attention every time it appears — with rankings that compound month on month.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">04</span>
          <h2>The conversion results: where it actually shows up</h2>
          <p>Organic visibility and paid traffic are leading indicators. The lagging indicators — the ones the business cares about — sit in the conversion events.</p>
          <ul>
            <li><strong>Phone-number clicks: +183.33% YoY (34 actions in the period).</strong> The single most predictive event for this business. People who click the phone number book. People who book stay multiple weeks.</li>
            <li><strong>Rental enquiry submissions: +8.77% YoY (62 actions).</strong> The primary form fill, growing on a base that was already strong.</li>
            <li><strong>German contact-page submissions: +25% YoY (10 actions).</strong> A deliberate growth area — one of the highest-margin source markets for the brand.</li>
          </ul>
          <p>Three of the four primary conversion events are up YoY. The fourth (the English contact-page form) was deprecated mid-period as we consolidated enquiry flows into a single, better-converting unified form — the &ldquo;&minus;100%&rdquo; is a tracking artefact of that consolidation, not a loss of leads. Total enquiry volume across the new flow is up.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">05</span>
          <h2>Why it worked: the boring answers</h2>
          <ul>
            <li><strong>One calendar.</strong> SEO, Google, Microsoft and web ran off a shared weekly cadence — not four agencies, four roadmaps, four sets of priorities.</li>
            <li><strong>Rebuild before you optimise.</strong> No amount of SEO or paid spend was going to fix a site that crawled under load and lost form submissions silently. Keeping the design and replacing the stack — rather than redesigning — let us ship the technical fix without resetting the brand or the rankings.</li>
            <li><strong>Phone is a channel.</strong> In luxury rental, the call is the conversion. Optimising the path to it — visible, clickable, language-aware — produced the single biggest lift in the programme.</li>
            <li><strong>Microsoft is real.</strong> Bing isn&rsquo;t a footnote when your buyer is over 45, on a Surface, in a corporate environment. The economics on Microsoft Ads have been quietly excellent.</li>
          </ul>
        </section>
        <div className="case-takeaway">
          <span className="case-takeaway-kicker">What made it work</span>
          <p>Treating Unisono as one brand with four interlocking growth surfaces rather than four channels in a row. Organic visibility doubled the click-through rate of every appearance in Google. Paid carried the unbranded long-tail. Microsoft Ads picked up the high-value audience Google misprices. And the website rebuild made all three of those investments work harder on landing. The lagging indicator — phones ringing, in three languages — is doing what a luxury brand actually needs it to do.</p>
        </div>
      </>
    ),
    relatedCases: [
      { slug: 'primundus', variant: 'is-pink', title: 'PRIMUNDUS — regional SEO grew enquiries 4.2x' },
      { slug: 'luxaflex', variant: 'is-orange', title: 'Luxaflex — +3,191% contact requests' },
      { slug: 'imero', variant: 'is-yellow', title: 'IMERO e-label — +307% sign-ups' },
    ],
    promo: {
      eyebrow: 'Free 30-minute consultation',
      headline: 'Run a brand in a category dominated by portals?',
      deck: 'Tell us what you&rsquo;re trying to grow. We&rsquo;ll come back with a one-page diagnosis of the three biggest leaks in your current set-up — SEO, paid or web.',
      topic: 'unisono-style',
      ctaLabel: 'Request a consultation',
    },
  },

  {
    slug: 'vc-investor',
    metaTitle: 'VC investor LinkedIn campaign — +50% VTR, −48% CPM | pmax',
    metaDesc: 'Phased LinkedIn awareness-to-conversion campaign for a leading early-stage VC investor. +50% view-through rate above LinkedIn\'s global benchmark, −48% CPM.',
    breadcrumbLabel: 'VC investor',
    heroVariant: 'is-mint',
    heroKicker: 'VENTURE CAPITAL · LINKEDIN · 2020',
    heroTitle: 'How a phased LinkedIn campaign hit +50% VTR and −48% CPM for a leading early-stage VC investor.',
    stats: [
      { num: '+50%', label: "Video view-through-rate above LinkedIn's global benchmark" },
      { num: '−48%', label: "CPM below LinkedIn's global benchmark" },
      { num: '+45%', label: 'Conversion-phase video CTR above sponsored-content video standard' },
      { num: '+250%', label: 'Conversion CTR vs awareness phase' },
    ],
    prose: (
      <>
        <div className="case-brief">
          <p>One of the largest and most active early-stage VC investors in Germany — known for its work with tech companies — needed to move flagship in-person networking events online during the pandemic. The brief: cost-efficient digital sign-ups for an event built to connect startups, innovative thinkers, top operators, experts and visionaries. LinkedIn was the right surface; the question was how to use it properly.</p>
        </div>
        <section className="case-chapter">
          <span className="case-chapter-num">01</span>
          <h2>Phased strategy — awareness, consideration, conversion</h2>
          <p>LinkedIn&rsquo;s Campaign Manager is more sophisticated than most people give it credit for — not Facebook-level, but a long way past XING. We used its advanced targeting to run a six-week phased campaign: build visibility in phase one, narrow to engaged audiences in phase two, push to high-intent sign-ups in phase three.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">02</span>
          <h2>Awareness — find the relevant rooms</h2>
          <p>Phase one targeted CTOs, CEOs, founders, and senior people in business development, IT, operations and project management — plus custom audiences built from the client&rsquo;s own first-party lists. We showed them a polished 30-second video introducing the event with a direct &ldquo;sign up&rdquo; CTA. Two sponsored post variants ran in parallel: a short one focused on the networking opportunity, a longer one focused on the thought-leadership angle of the agenda.</p>
          <div className="prose-callout">
            <div className="prose-callout-kicker">A note on building audiences</div>
            <p>Not sure who to target? Ask your own team. Instead of speculating in a meeting room, talk to the people in your call centre or your sales floor — the ones who actually know your customers. They give you targeting insight nobody else in the building can.</p>
          </div>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">03</span>
          <h2>Consideration — where it got interesting</h2>
          <p>For phase two we cycled in a fresh cut of the video to avoid creative fatigue and stack on more &ldquo;reasons to believe&rdquo; — different angles of the event, different speakers, different proof points. New copy variants added a time-based push to lift sign-up intent. Creative versioning is not novel, but it works. The trick is keeping the core message consistent (the marketing &ldquo;rule of seven&rdquo;) while never letting the surface get boring.</p>
          <p>The audience cut was tighter. We re-targeted everyone who had engaged with the awareness-phase video or the client&rsquo;s company page, then split video viewers into two cohorts — those who watched 50% and those who watched 75% (our hottest leads). We also tested male- and female-specific creative cuts: the female-skewed cohort showed +10% CTR and +5% view-rate. Not enough to draw a finished conclusion from, but enough to keep testing.</p>
          <div className="prose-callout">
            <div className="prose-callout-kicker">CTR uplift</div>
            <p>Phase-two CTR ran 200% higher than phase-one. The whole point of phased targeting is that it stops you wasting the second half of your budget on people who already told you they were not interested. Fish where the fish are.</p>
          </div>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">04</span>
          <h2>Conversion — last push, tightest audience</h2>
          <p>Phase three launched a third video against the tightest cohort yet — viewers who had watched 75% and 97% of the previous asset. Interestingly the 75% cohort outperformed the 97% cohort. We still do not have a fully satisfying explanation for that and we report it because every honest case study should have at least one result you cannot tidily explain.</p>
          <p>Conversion-phase CTR ran +250% higher than the awareness phase and +17% higher than the consideration phase — clean evidence that progressive audience narrowing was doing the work it was meant to do.</p>
        </section>
        <section className="case-chapter">
          <span className="case-chapter-num">05</span>
          <h2>What we learned about video length</h2>
          <p>Video completion rates climbed sharply across the funnel: 7.92% in awareness, 16% in consideration, 25.2% in conversion. The first video ran 30 seconds; the second and third ran 16 seconds. Because the consideration and conversion videos were the same length, we cannot fully isolate the effect of length on completion. But the direction matched LinkedIn&rsquo;s own 2018 study showing videos under 30 seconds lift completion ~200% — the shorter cuts noticeably outperformed the longer one.</p>
          <p>Useful rule when you next argue about cut-down length with the creative team: assume nobody watches to the end. Front-load the message, front-load the CTA.</p>
        </section>
        <div className="prose-callout">
          <div className="prose-callout-kicker">The outcome</div>
          <p>Ticket-sales targets set by the client were exceeded. Cost per sign-up landed substantially below the client&rsquo;s internal benchmark, and the campaign became the template for every subsequent event the firm ran online over the following 18 months. The piece that mattered most was the phased structure: the same media budget, deployed with progressively tighter audiences, produced 250% higher final-stage CTR than a single-blast equivalent would have.</p>
        </div>
      </>
    ),
  },
]

export function getCaseDetail(slug: string) {
  return caseDetails.find(c => c.slug === slug)
}
