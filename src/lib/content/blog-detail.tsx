import type { ReactNode } from 'react'

export interface BlogDetail {
  slug: string
  toc: string[]
  prose: ReactNode
}

const NeedHelp = ({ topic }: { topic: string }) => (
  <>
    <h2>Need help with this?</h2>
    <p>If any of the above feels like a problem you have, <a href={`/contact/?topic=${topic}`}>tell us a bit about your situation</a> and we will come back within a working day. First conversation is 30 minutes, on us.</p>
  </>
)

export const blogDetails: BlogDetail[] = [
  {
    slug: 'how-to-get-mentioned-by-chatgpt',
    toc: ['What is AI search visibility', 'Why it matters now', '5 things to do this month', 'How pmax can help', 'Further reading'],
    prose: (
      <>
        <p>Every week another client asks us the same question: &ldquo;We&rsquo;re seeing fewer clicks from Google. Is it because of ChatGPT?&rdquo; The honest answer is: probably yes, partly. And it&rsquo;s going to keep happening. So instead of fighting it, the smart move is to make sure your business is the one ChatGPT, Perplexity and Gemini actually recommend.</p>
        <p>This is a short, practical guide. No jargon, no scare tactics. By the end you&rsquo;ll know what AI search visibility is, why it matters, and the five things any business &mdash; yours included &mdash; can start doing this month.</p>
        <h2>What is AI search visibility, exactly?</h2>
        <p>When someone asks ChatGPT &ldquo;what&rsquo;s the best digital marketing agency in Mallorca?&rdquo; or asks Perplexity &ldquo;compare three solar installers in Spain&rdquo;, the AI generates an answer that mentions specific businesses by name. Sometimes it links to them. Sometimes it summarises their offering. Sometimes it just recommends them.</p>
        <p>AI search visibility (also called Generative Engine Optimisation, or GEO) is the practice of making sure your business is in that answer.</p>
        <p>It&rsquo;s a new layer on top of classical SEO &mdash; the technical fundamentals are the same &mdash; but it adds work around structured data, content quality, and the trust signals AI models actually weigh when deciding who to mention.</p>
        <h2>Why does it matter now?</h2>
        <p>Three things changed in the last 18 months:</p>
        <ol>
          <li><strong>People use AI to research before they buy.</strong> Gartner estimates 61% of buyer journeys in 2026 will pass through at least one AI answer surface.</li>
          <li><strong>AI tools are getting source-honest.</strong> ChatGPT, Perplexity and Gemini now show their sources. So citations have direct, measurable value: they drive clicks, and they shape opinion.</li>
          <li><strong>Google itself is becoming an AI surface.</strong> AI Overviews now appear above the traditional results for most informational queries, and Gemini answers questions inside Gmail and Workspace without anyone visiting a search engine at all.</li>
        </ol>
        <p>If you sell something people research before they buy &mdash; B2B software, professional services, considered consumer purchases &mdash; AI search is already shaping who they consider. The brands that show up in those answers will own the next decade of organic acquisition.</p>
        <h2>Five things to start doing this month</h2>
        <h3>1. Audit where you stand today</h3>
        <p>Spend an hour running 20 questions about your category through ChatGPT, Perplexity and Gemini. Use questions a real buyer would ask: &ldquo;best X in Y for Z budget&rdquo;, &ldquo;compare A and B&rdquo;, &ldquo;what should I look for when buying X&rdquo;. Write down which competitors get mentioned, in what order, with what sentiment. That&rsquo;s your baseline.</p>
        <p>If you&rsquo;re not getting mentioned at all, don&rsquo;t panic. Most businesses aren&rsquo;t. That&rsquo;s the gap we&rsquo;re going to close.</p>
        <h3>2. Make your About page boringly factual</h3>
        <p>AI models cite businesses whose identity they can verify. Your About page should clearly state: what you do, where you&rsquo;re located, who founded the company, when, who runs it now, and who your typical customers are. Plain English, verifiable facts, no marketing fluff. Add a clear FAQ section answering the obvious questions about your business.</p>
        <h3>3. Add the right structured data</h3>
        <p>Schema.org markup is how you tell AI crawlers what each page is. At minimum: an <code>Organization</code> schema sitewide, a <code>Service</code> or <code>Product</code> schema on those pages, and an <code>FAQPage</code> schema on your FAQ. If your business is location-dependent (a hotel, a clinic, a real estate agency), add <code>LocalBusiness</code> with full address and geo coordinates.</p>
        <p>None of this is new. SEO professionals have done it for a decade. But many sites still don&rsquo;t, and the ones that do show up disproportionately in AI answers.</p>
        <h3>4. Get cited in places AI trusts</h3>
        <p>Large language models trust sources their training data trusts. That usually means: Wikipedia (if you&rsquo;re large enough to merit a page), trade publications, established review sites in your category (G2, Capterra, Trustpilot, Tripadvisor depending on your industry), and high-authority news mentions. PR built around verifiable claims and expert commentary tends to win those mentions.</p>
        <p>Beware: AI models penalise sources that read as promotional. The phrase &ldquo;sponsored content&rdquo; in your bylines does more harm than good.</p>
        <h3>5. Measure monthly</h3>
        <p>Re-run those same 20 prompts every month. Track which mentions appear, in what context, with what sentiment. There are now several tools for this (AthenaHQ, Profound, Otterly) &mdash; or you can do it manually for a few hours a month. Either way: if you don&rsquo;t measure it, you can&rsquo;t improve it.</p>
        <div className="prose-callout">
          <div className="prose-callout-kicker">The honest version</div>
          <p>AI search visibility isn&rsquo;t a hack. It&rsquo;s earned. Most businesses will see their first reliable citations in 8&ndash;12 weeks of disciplined work. Anyone promising you faster than that is selling you a story &mdash; or doing something that&rsquo;ll get you delisted later.</p>
        </div>
        <h2>What pmax can do, if you want help</h2>
        <p>We run AI visibility programmes for businesses across Europe &mdash; the full audit, the technical foundations, the content and PR support, and the monthly measurement. If you&rsquo;d like a free one-page audit of where your business stands in ChatGPT, Perplexity and Gemini today, <a href="/contact/?topic=ai-audit">tell us a bit about you</a> and we&rsquo;ll send it back within a week.</p>
        <h2>Further reading</h2>
        <ul>
          <li><a href="/services/ai-visibility/">Our AI visibility service page</a> &mdash; what&rsquo;s actually inside a programme</li>
          <li><a href="/blog/gpt-shopping/">What &ldquo;ChatGPT shopping&rdquo; means for e-commerce in 2026</a></li>
          <li><a href="/blog/tracking-setup-guide/">A no-jargon guide to setting up tracking properly</a></li>
        </ul>
      </>
    ),
  },

  {
    slug: 'performance-max-2026',
    toc: ['Brand exclusions are now table stakes', 'Campaign-level value rules', 'Asset group structure', 'Search themes', 'Profit-based tROAS targets', 'Listing groups for catalogue control', 'First-party audience signals'],
    prose: (
      <>
        <p>Performance Max started as a black box. In 2026, it is a slightly-less-black box with a lot more steering wheels. Here is what we actually change first.</p>
        <h2>Brand exclusions are now table stakes</h2>
        <p>The single biggest change since launch: you can finally exclude brand search terms from PMax. Use it. Set up a brand exclusion list on day one of every PMax campaign and route brand traffic to a properly-managed Search campaign with manual control. We see clients save 15&ndash;25% of their PMax budget within the first month just from this.</p>
        <h2>Campaign-level value rules</h2>
        <p>Value rules let you tell PMax that a customer in Germany is worth 1.3x what a customer in Italy is worth &mdash; or that a returning customer is worth 0.6x what a new customer is. Combined with first-party data segments, this is the most under-used lever in the platform.</p>
        <h2>Asset group structure</h2>
        <p>Do not put your whole catalogue in one asset group. Split by margin tier or product category &mdash; each group gets its own creative, its own audience signal, its own tROAS target. This alone usually moves blended ROAS 20&ndash;30%.</p>
        <h2>Search themes</h2>
        <p>Use them, but sparingly. PMax tends to over-trust search themes and waste budget on adjacent queries. Set themes only for clearly under-served queries you can prove are not being served by your existing Search campaigns.</p>
        <h2>Profit-based tROAS targets</h2>
        <p>Setting tROAS based on revenue is a category error. Calculate it on gross profit margin, feed gross profit values as your conversion value, and watch the algorithm finally chase the customers you actually want.</p>
        <h2>Listing groups for catalogue control</h2>
        <p>Listing groups in PMax let you control which products get prioritised. We use them to push high-margin, low-stock, seasonal products at specific times &mdash; a small lever, big impact on profit when used well.</p>
        <h2>First-party audience signals</h2>
        <p>Upload your customer match list, your high-LTV cohort, your recent purchaser segment. PMax does not use these as targeting &mdash; but it uses them as a strong signal for the algorithm. The lift is real.</p>
        <p>Related: <a href="/services/google-ads/">our Google Ads &amp; Performance Max service</a> &mdash; and how PMax fits into the wider <a href="/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/">Google vs Meta vs TikTok channel mix</a>.</p>
        <NeedHelp topic="performance-max-2026" />
      </>
    ),
  },

  {
    slug: 'tracking-setup-guide',
    toc: ['Why dashboards lie', 'Server-side tagging', 'Consent Mode v2', 'Enhanced conversions', 'Offline conversion imports', 'Reconciliation'],
    prose: (
      <>
        <p>If you cannot trust your marketing data, you cannot make decisions with it. Here is a plain-English guide to building tracking that does not lie.</p>
        <h2>Why dashboards lie</h2>
        <p>Marketing tracking has three big enemies in 2026: iOS privacy restrictions, cookie consent, and the gap between when an ad is clicked and when revenue actually happens. The default tracking setup most websites have was designed for 2018. It does not work now.</p>
        <h2>Server-side tagging</h2>
        <p>Stop sending data directly from the user&rsquo;s browser to Google, Meta and the rest. Set up a server-side Google Tag Manager container &mdash; usually on a subdomain like <code>track.yourdomain.com</code> &mdash; and route everything through it. Performance improves, privacy improves, data quality improves.</p>
        <h2>Consent Mode v2</h2>
        <p>If you operate in the EU and you have not implemented Consent Mode v2, your Google Ads data is materially worse than it needs to be. Consent Mode lets Google fill in modelled conversions for users who do not consent &mdash; recovering 30&ndash;50% of the data you are losing.</p>
        <h2>Enhanced conversions</h2>
        <p>Pass hashed email addresses (with consent) to Google and Meta&rsquo;s <a href="/services/analytics/">conversion APIs</a>. This single change typically improves measured conversion volume by 15&ndash;25% in iOS-heavy categories.</p>
        <h2>Offline conversion imports</h2>
        <p>If you have a sales cycle longer than a week, you need offline conversion imports. Hook your CRM to Google Ads and Meta&rsquo;s offline events APIs and feed back actual closed-won revenue. The platforms will start optimising for the right humans.</p>
        <h2>Reconciliation</h2>
        <p>Once a month, compare your ad-platform reported revenue against your actual ledger. Aim for under 15% discrepancy. Anything more means something in the chain is broken.</p>
        <p>Related: <a href="/blog/cookieless-tracking/">cookieless tracking in 2026</a> &mdash; and <a href="/blog/crm-conversion-imports/">using CRM data to feed better offline conversions</a>.</p>
        <NeedHelp topic="tracking-setup-guide" />
      </>
    ),
  },

  {
    slug: 'meta-creative-volume',
    toc: ['The volume problem', 'Template the brand, not the asset', 'Hooks, hooks, hooks', 'UGC at scale', 'Performance creative briefing', 'Cull weekly, scale monthly'],
    prose: (
      <>
        <p>Meta&rsquo;s own research says creative is the single biggest driver of paid social performance. Most brands&rsquo; creative pipelines were built for a world where it was not. Here is how to build one that fits 2026.</p>
        <h2>The volume problem</h2>
        <p>Meta&rsquo;s creative library now needs 10&ndash;20 fresh assets a week to keep performance stable. Most brands ship 2&ndash;3. The gap shows up as rising frequency, falling CTR, and a CPM that drifts up every quarter.</p>
        <h2>Template the brand, not the asset</h2>
        <p>Build a tightly-templated brand system &mdash; fonts, colours, motion primitives, layouts &mdash; and then let creators work fast within it. The brand is enforced by the template; the creators bring the ideas. This is how you ship 15 assets a week without 15 brand reviews.</p>
        <h2>Hooks, hooks, hooks</h2>
        <p>The first three seconds of every video are the only ones that matter. We A/B test hooks more than anything else &mdash; same body, six different opening seconds. The winning hook is reused across the next week&rsquo;s creative.</p>
        <h2>UGC at scale</h2>
        <p>Run a small, ongoing <a href="/services/creative/">creator programme</a> &mdash; 5&ndash;10 creators on retainer, briefed weekly. Cheaper than agency creative, faster than internal creative, and Meta&rsquo;s algorithm tends to prefer it. Quality control is the only hard part.</p>
        <h2>Performance creative briefing</h2>
        <p>Briefs go from your media team to your creative team, not the other way around. The brief contains: which ad set this is for, what the hook should test, what the proof point is, what the CTA needs to drive. Brand input comes in after.</p>
        <h2>Cull weekly, scale monthly</h2>
        <p>Every Friday, kill anything below threshold performance. Once a month, identify the top three creative patterns and brief out next month&rsquo;s creative around them. Compound the learnings.</p>
        <p>Related: <a href="/blog/creative-testing-framework/">how to structure creative tests so the learnings actually compound</a> &mdash; and our <a href="/services/paid-social/">paid social service</a>.</p>
        <NeedHelp topic="meta-creative-volume" />
      </>
    ),
  },

  {
    slug: 'google-ads-mallorca',
    toc: ['The default geo settings are wrong', 'Language settings cut both ways', 'Local conversion tracking', 'Bidding for tourist seasonality', 'Local-pack and Maps'],
    prose: (
      <>
        <p>Running ads from Mallorca is different. Your customers Google in five languages, your competitors are based in Madrid, and Google&rsquo;s default geo-targeting is wrong for you. Here is what to fix.</p>
        <h2>The default geo settings are wrong</h2>
        <p>Google Ads ships with &ldquo;Presence or interest&rdquo; as the default location setting. For local Mallorca businesses, this means showing ads to anyone in Spain who has ever shown &ldquo;interest&rdquo; in Mallorca &mdash; which is millions of people who will never become customers. Switch to &ldquo;Presence only&rdquo; on day one.</p>
        <h2>Language settings cut both ways</h2>
        <p>Mallorca customers Google in Spanish, Catalan, German and English &mdash; sometimes all four in a single search session. Do not pick one language. Build separate campaigns per language, with translated keywords, translated ads, and translated landing pages. Auto-translate copies cost you 30&ndash;40% of performance.</p>
        <h2>Local conversion tracking</h2>
        <p>For physical-location businesses (restaurants, agencies, clinics), call tracking and in-person visit tracking matter more than form fills. Set them up. Google&rsquo;s &ldquo;Store visits&rdquo; conversion is free and underused.</p>
        <h2>Bidding for tourist seasonality</h2>
        <p>50% of Mallorca&rsquo;s commercial searches happen between April and September. Do not run flat bids year-round. Build day-parted, season-parted bidding strategies that match the actual demand curve.</p>
        <h2>Local-pack and Maps</h2>
        <p>If you are a service business, your Google Business Profile drives more revenue than your ads do. Optimise it properly: photos updated monthly, reviews requested every quarter, services properly categorised. The work compounds.</p>
        <p>See our <a href="/services/google-ads/">Google Ads &amp; Performance Max service</a> &mdash; built for Mallorca&rsquo;s multilingual, seasonal demand.</p>
        <NeedHelp topic="google-ads-mallorca" />
      </>
    ),
  },

  {
    slug: 'shopify-seo-2026',
    toc: ['Collection-page meta data', 'Faceted navigation', 'Product schema', 'Image alt text', 'Site speed', 'Blog content that actually ranks', 'Internal linking from collection pages', 'Hreflang for multilingual stores'],
    prose: (
      <>
        <p>Shopify is a great commerce platform with mediocre SEO defaults. Eight specific fixes that, in our experience, move organic traffic more than the rest combined.</p>
        <h2>Collection-page meta data</h2>
        <p>Shopify&rsquo;s default collection page meta titles are usually just the collection name. Bad. Rewrite every collection meta title to follow the pattern <code>{'{Collection name} | {USP} | {Brand}'}</code> &mdash; and write a real meta description, not a truncated description tag.</p>
        <h2>Faceted navigation</h2>
        <p>If your collections have filters (size, colour, price), the default Shopify setup generates infinite duplicate URLs that dilute crawl budget and confuse Google. Use canonical tags aggressively and noindex filter URLs that do not add SEO value.</p>
        <h2>Product schema</h2>
        <p>Most Shopify themes ship Product schema, but it is usually incomplete. Add aggregateRating, review count, brand, GTIN, condition, and availability fields to every product. AI shopping interfaces in particular weigh these heavily.</p>
        <h2>Image alt text</h2>
        <p>The single most-skipped thing on Shopify. Every product image should have descriptive alt text that includes the product name and a relevant attribute. Use Shopify&rsquo;s bulk editor &mdash; an hour&rsquo;s work, lasting SEO impact.</p>
        <h2>Site speed</h2>
        <p>Shopify themes have grown bloated. Run Lighthouse, identify the heaviest 3&ndash;5 apps and remove them. Use Shopify&rsquo;s native sections instead of app-based ones wherever possible. Aim for an LCP under 2.5 seconds on mobile.</p>
        <h2>Blog content that actually ranks</h2>
        <p>Do not use Shopify&rsquo;s blog for press releases. Build category-defining content &mdash; buyer guides, comparison content, expert how-tos &mdash; that links to relevant product collections. This is where Shopify SEO compounds.</p>
        <h2>Internal linking from collection pages</h2>
        <p>Add genuine editorial copy at the top of each collection page (300&ndash;500 words), and link from it to related collections. Most Shopify themes hide this &mdash; find the section, enable it, write real content.</p>
        <h2>Hreflang for multilingual stores</h2>
        <p>If you sell in multiple languages, get hreflang right. Shopify Markets handles this if configured correctly, but the defaults are usually wrong. Audit every market for proper hreflang tags.</p>
        <p>Related: our <a href="/services/seo/">SEO service</a>, our <a href="/industries/ecommerce/">e-commerce marketing playbook</a> &mdash; and <a href="/blog/how-to-get-mentioned-by-chatgpt/">how to get mentioned by ChatGPT and Perplexity</a> (the structured data work here compounds into AI citations).</p>
        <NeedHelp topic="shopify-seo-2026" />
      </>
    ),
  },

  {
    slug: 'hotel-direct-bookings',
    toc: ['The starting point', 'The four-week diagnosis', 'The booking flow rebuild', 'The paid media shift', 'The numbers'],
    prose: (
      <>
        <p>Most independent hotels lose 17&ndash;22% of revenue to OTA commissions. Here is a real story of one Mallorca hotel that took most of that back in under three months.</p>
        <h2>The starting point</h2>
        <p>Mar y Roca is a 34-room boutique hotel in Port d&rsquo;Andratx. In 2024, 78% of their bookings came through Booking.com and Expedia &mdash; at an average 18% commission. Direct bookings were stuck at around 22%, despite the website looking modern enough.</p>
        <h2>The four-week diagnosis</h2>
        <p>The website looked modern but converted badly: a five-step booking flow, no rate-parity, slow on mobile, and a hero gallery that did not match what the hotel actually felt like. The Meta and Google ads were generic and did not mention price advantages over OTAs.</p>
        <h2>The booking flow rebuild</h2>
        <p>Five steps became three. Mobile-first. A clear &ldquo;Best rate guaranteed &mdash; book direct and save &euro;X&rdquo; message, tied to live OTA rate scraping so the saving was always real. Conversion rate from booking-engine entry to confirmed booking went from 2.1% to 8.4%.</p>
        <h2>The paid media shift</h2>
        <p><a href="/services/paid-social/">Meta</a> and <a href="/services/google-ads/">Google Hotel Ads</a>. The Meta creative focused on the rooms and views the hotel was actually known for, not generic travel imagery. Google Hotel Ads were bid aggressively only on date ranges where the hotel had availability &mdash; saving budget the rest of the year.</p>
        <h2>The numbers</h2>
        <p>11 weeks in, direct bookings had grown 52% and total bookings had grown 11% (so the direct shift was new revenue, not stolen from OTAs). At ~&euro;350,000 in monthly direct revenue versus the previous run-rate, the annual OTA commission saved was about &euro;184,000.</p>
        <p>We used <a href="/services/conversion-design/">conversion design (CRO)</a>, <a href="/services/google-ads/">Google Ads</a> and <a href="/services/paid-social/">Meta Ads</a> to get there. More in our <a href="/industries/hospitality/">hospitality marketing playbook</a> and <a href="/cases/">client cases</a>.</p>
        <NeedHelp topic="hotel-direct-bookings" />
      </>
    ),
  },

  {
    slug: 'b2b-linkedin-playbook',
    toc: ['Audience design', 'Three campaign objectives, three audiences', 'Thought Leader Ads are underused', 'Document Ads for the consideration stage', 'Conversation Ads for high-intent', 'CRM-fed offline conversions', 'Lead scoring before the platform sees the lead'],
    prose: (
      <>
        <p>LinkedIn is the most expensive ad platform on a CPM basis &mdash; and the cheapest place to find a B2B buyer when run properly. Here is the playbook we deploy on day one of every B2B SaaS retainer.</p>
        <h2>Audience design &mdash; first principles</h2>
        <p>&ldquo;Senior decision-makers in [industry]&rdquo; is not an audience. It is a job description. Build audiences from actual customer LTV data: who closes, who stays, who upgrades. Then build LinkedIn audiences that match those patterns &mdash; job function + seniority + company size + tech stack + geography.</p>
        <h2>Three campaign objectives, three audiences</h2>
        <p>One awareness campaign, one consideration campaign, one conversion campaign. Each gets a different audience size, a different creative format, a different bidding strategy. Do not collapse them into one &mdash; LinkedIn&rsquo;s algorithm needs the separation.</p>
        <h2>Thought Leader Ads are underused</h2>
        <p>If you have a founder or senior leader willing to post on LinkedIn, Thought Leader Ads (where you promote their organic post as a paid ad) outperform brand-account ads by 2&ndash;3x on engagement. Use them.</p>
        <h2>Document Ads for the consideration stage</h2>
        <p>A genuine industry report or guide, delivered as a Document Ad, is the best mid-funnel asset LinkedIn has ever shipped. Brief once, run for six months, watch leads compound.</p>
        <h2>Conversation Ads for high-intent</h2>
        <p>For events, demos and ABM, Conversation Ads (in LinkedIn Messaging) routinely cost 40&ndash;60% less per qualified meeting than form fills. They work best when written like a real person reaching out &mdash; not like a marketing email.</p>
        <h2>CRM-fed offline conversions</h2>
        <p>The biggest unlock. Wire LinkedIn&rsquo;s offline conversion API to your CRM. Pass back MQL, SQL, opportunity created, and closed-won events with their values. LinkedIn&rsquo;s algorithm starts optimising for actual revenue.</p>
        <h2>Lead scoring before the platform sees the lead</h2>
        <p>Use a tool like Clearbit / 6sense / your own enrichment to score leads before they fire as conversions in LinkedIn. Only fire &ldquo;qualified lead&rdquo; conversions for leads worth pursuing. The platform&rsquo;s algorithm gets dramatically more accurate.</p>
        <p>Related: our <a href="/services/paid-social/">paid social service</a> (LinkedIn, Meta, TikTok), our <a href="/industries/hr/">HR &amp; recruiting marketing playbook</a> &mdash; and <a href="/blog/crm-conversion-imports/">using CRM offline conversions to make the algorithm smarter</a>.</p>
        <NeedHelp topic="b2b-linkedin-playbook" />
      </>
    ),
  },

  {
    slug: 'cookieless-tracking',
    toc: ['What actually changed', 'Server-side tagging', 'Consent Mode v2', 'Conversion APIs', 'First-party data strategy', 'Modelled conversions'],
    prose: (
      <>
        <p>Third-party cookies are functionally dead. Apple killed them on iOS five years ago, Chrome is finishing the job now. Here is how to track conversions in 2026 without breaking the law or losing all your data.</p>
        <h2>What actually changed</h2>
        <p>Apple ITP, Chrome&rsquo;s Privacy Sandbox, and the GDPR/ePrivacy enforcement push have collectively reduced the lifespan of a tracking cookie from ~2 years to ~7 days on most browsers. The implication: any conversion that happens more than a week after the click is invisible to default tracking.</p>
        <h2>Server-side tagging</h2>
        <p>Move your tag manager off the user&rsquo;s browser and onto your own server. This restores cookie lifetime to whatever your domain allows (usually 30&ndash;90+ days), improves site speed, and gives you a privacy-respecting way to pass first-party data to ad platforms.</p>
        <h2>Consent Mode v2</h2>
        <p>Google&rsquo;s Consent Mode v2 lets you tell Google whether the user consented to ad and analytics cookies. If they did not, Google still receives &ldquo;consentless pings&rdquo; &mdash; anonymised signals it uses to model the conversion. Properly implemented, you recover 30&ndash;50% of the data you would otherwise lose.</p>
        <h2>Conversion APIs</h2>
        <p>Meta CAPI, TikTok Events API, LinkedIn Conversions API, <a href="/services/analytics/">Google Enhanced Conversions</a>. All of them let you send hashed first-party data from your server to the platform. All of them improve data quality. All of them are underused.</p>
        <h2>First-party data strategy</h2>
        <p>If you do not have a first-party data strategy, build one. Email captures, account creation, loyalty programmes, gated content &mdash; whatever fits your business. First-party data is now the foundation everything else depends on.</p>
        <h2>Modelled conversions</h2>
        <p>Expect 20&ndash;40% of your conversion data in 2026 to be modelled (statistically estimated) rather than directly observed. This is normal, and not a problem if the model is well-fed. It is a problem if you are trying to do precise day-on-day attribution &mdash; accept that those days are gone.</p>
        <p>Related: <a href="/blog/tracking-setup-guide/">setting up tracking that doesn&rsquo;t lie</a> &mdash; and our <a href="/services/analytics/">analytics &amp; tracking service</a>.</p>
        <NeedHelp topic="cookieless-tracking" />
      </>
    ),
  },

  {
    slug: 'real-estate-lead-gen',
    toc: ['The motivated-buyer problem', 'Multi-step beats single-step', 'Ask the easy questions first', 'Show progress', 'Pre-qualification reduces noise', 'Mobile keyboard hygiene'],
    prose: (
      <>
        <p>Real estate is one of the highest-intent search categories on the internet. So why do most agency websites convert below 1%? Usually, the form.</p>
        <h2>The motivated-buyer problem</h2>
        <p>A user who lands on a real estate agency&rsquo;s &ldquo;Free valuation&rdquo; page is high-intent. They have already decided they might want to sell. The form is the only thing standing between you and a qualified lead &mdash; and most forms are designed in a way that loses those people.</p>
        <h2>Multi-step beats single-step</h2>
        <p>An 8-field form on a single page converts at around 1.5%. The same 8 fields spread across 3 logical steps converts at 6&ndash;10%. Every step is a small commitment; once a user has answered the first question, they are more likely to finish.</p>
        <h2>Ask the easy questions first</h2>
        <p>&ldquo;What is the property type?&rdquo; before &ldquo;What is your email address?&rdquo;. The user is filling in <em>their</em> information last, after they have already invested effort. Reverse this and you will see conversion rates collapse.</p>
        <h2>Show progress</h2>
        <p>A progress bar at the top of the form (&ldquo;Step 2 of 4&rdquo;) materially improves completion. People are more willing to finish what they have started.</p>
        <h2>Pre-qualification reduces noise</h2>
        <p>Use the form to pre-qualify: budget range, timeline to sell, current property type. The 30% drop in leads is worth it &mdash; the 70% that finish are dramatically more useful to your agents.</p>
        <h2>Mobile keyboard hygiene</h2>
        <p>Email fields should trigger email keyboards. Phone fields should trigger numeric keyboards. Do not make a mobile user switch keyboards three times to fill in your form.</p>
        <p>This is core to our <a href="/services/conversion-design/">conversion design (CRO) service</a>. More in our <a href="/industries/real-estate/">real estate marketing playbook</a>.</p>
        <NeedHelp topic="real-estate-lead-gen" />
      </>
    ),
  },

  {
    slug: 'tiktok-organic-paid',
    toc: ['The content patterns that earn impressions', 'Spark Ads, not boosted posts', 'Creator-led, not brand-led', 'The compounding loop'],
    prose: (
      <>
        <p>TikTok is no longer a &ldquo;should we be there&rdquo; channel for most brands. It is a &ldquo;how do we be there efficiently&rdquo; one. Here is what is working in 2026.</p>
        <h2>The content patterns that earn impressions</h2>
        <p>Three patterns dominate organic in 2026: <strong>behind-the-scenes process</strong> (people watching things get made), <strong>founder-on-camera</strong> (genuine, unscripted, low-production), and <strong>product-in-context</strong> (showing how the product fits a real life, not a perfect one). Almost everything else underperforms.</p>
        <h2>Spark Ads, not boosted posts</h2>
        <p>Use Spark Ads to promote organic content that has already earned engagement. Do not boost posts &mdash; Spark Ads carry the full social proof of the original organic engagement, which makes them work dramatically better.</p>
        <h2>Creator-led, not brand-led</h2>
        <p>Most brand-account creative on TikTok dies. Get creators making content for you, get them on usage rights, and run those creatives as Spark Ads. The lift over brand-account creative is usually 3&ndash;5x.</p>
        <h2>The compounding loop</h2>
        <p>Identify your top 3 organic videos every month. Spark Ad them. Use the learnings to brief next month&rsquo;s creator content. Repeat. The brands that crack TikTok compound this loop month after month.</p>
        <p>Related: our <a href="/services/paid-social/">paid social service</a> and <a href="/services/creative/">creative production</a>, our <a href="/industries/ecommerce/">e-commerce marketing playbook</a> &mdash; and <a href="/blog/meta-creative-volume/">how to build a creative pipeline for Meta</a> (the principles are identical on TikTok).</p>
        <NeedHelp topic="tiktok-organic-paid" />
      </>
    ),
  },

  {
    slug: 'crm-conversion-imports',
    toc: ['The form-fill trap', 'Offline conversions, explained', 'Implementation', 'What changes', 'Common pitfalls'],
    prose: (
      <>
        <p>B2B marketing teams optimise for what they can measure. What they can measure is usually form fills. This is why so many B2B ad accounts produce hundreds of MQLs and no revenue.</p>
        <h2>The form-fill trap</h2>
        <p>If you optimise an ad platform for &ldquo;form fill&rdquo; conversions, it will find you the cheapest possible form fills. That usually means: the lowest-intent users, the smallest companies, the wrong job titles. Form fill volume goes up, pipeline value goes down. The ad platform is doing its job correctly &mdash; you are telling it the wrong job.</p>
        <h2>Offline conversions, explained</h2>
        <p>Every major ad platform now lets you import offline events: MQLs, SQLs, opportunity created, closed-won. Each event can have a value attached. The platform stops optimising for form fills and starts optimising for events that actually correlate with revenue.</p>
        <h2>Implementation</h2>
        <p>Three pieces: a click ID captured on form submission (gclid for Google, fbclid for Meta, li_fat_id for LinkedIn), a CRM field that stores it, and a daily export from CRM to ad platform with the click ID, event name and value.</p>
        <h2>What changes</h2>
        <p>Within 2&ndash;3 weeks of implementing offline conversions properly, most B2B accounts see: 30&ndash;50% lower MQL volume, but 2&ndash;3x more SQLs and dramatically higher pipeline values. The same ad spend, dramatically better business outcome.</p>
        <h2>Common pitfalls</h2>
        <p>Make sure the values you are passing back are economically meaningful. A &ldquo;closed-won&rdquo; event should carry the actual contract value, not a fixed &euro;100 placeholder. The platform optimises against the values you give it &mdash; bad values means bad optimisation.</p>
        <p>Related: <a href="/blog/tracking-setup-guide/">the full tracking setup guide</a> and our <a href="/services/analytics/">analytics &amp; tracking service</a>.</p>
        <NeedHelp topic="crm-conversion-imports" />
      </>
    ),
  },

  {
    slug: 'solar-marketing-spain',
    toc: ['The Meta problem', 'Pre-qualify on the landing page', 'Region-specific incentives', 'Long-cycle attribution', 'Google Ads is usually the higher-intent channel'],
    prose: (
      <>
        <p>Spain is one of the best solar markets in Europe &mdash; and one of the most competitive. Here is why most solar installers struggle on paid media, and what the ones that thrive are doing.</p>
        <h2>The Meta problem</h2>
        <p>Solar leads from Meta come cheap. They also come unqualified. The default solar Meta funnel &mdash; &ldquo;Get a free solar quote&rdquo; &rarr; form fill &rarr; call from sales team &mdash; wastes 70&ndash;80% of the sales team&rsquo;s time on people who were never going to buy.</p>
        <h2>Pre-qualify on the landing page</h2>
        <p>Add a 3-question quiz before the form: roof type, monthly electricity bill, ownership status. The user who finishes this is 4&ndash;5x more likely to buy. The user who does not finish saves your sales team a call.</p>
        <h2>Region-specific incentives</h2>
        <p>Spanish solar incentives differ by region &mdash; Andaluc&iacute;a, Catalu&ntilde;a, Madrid all have different schemes. Generic national landing pages waste budget. Build regional landing pages that lead with the specific incentive that applies.</p>
        <h2>Long-cycle attribution</h2>
        <p>The average Spanish solar install takes 4&ndash;6 months from first ad click to signed contract. If you are optimising for first-touch attribution, you are optimising for the wrong customers. Wire CRM-fed offline conversions and let the algorithm learn from actual installs.</p>
        <h2>Google Ads is usually the higher-intent channel</h2>
        <p>For solar, <a href="/services/google-ads/">Google Ads</a> captures higher-intent than <a href="/services/paid-social/">Meta</a>. Budget weighting most installers run (60% Meta, 40% Google) is usually backwards. Test the inverse.</p>
        <p>More in our <a href="/industries/renewables/">renewables &amp; cleantech marketing playbook</a>.</p>
        <NeedHelp topic="solar-marketing-spain" />
      </>
    ),
  },

  {
    slug: 'creative-testing-framework',
    toc: ['Isolate one variable at a time', 'Hooks are the highest-leverage variable', 'Build a winner template', 'Statistical significance is a real thing', 'Cross-platform learnings'],
    prose: (
      <>
        <p>Most &ldquo;creative testing&rdquo; frameworks are just &ldquo;launch lots of stuff and see what works&rdquo;. That is not a framework &mdash; it is gambling. Here is how to test creative so the learnings compound.</p>
        <h2>Isolate one variable at a time</h2>
        <p>If you change the hook, the visual and the offer in the same test, you have learned nothing about which one moved the needle. Hold everything constant except the one variable you are testing. Slower, but the learnings are real.</p>
        <h2>Hooks are the highest-leverage variable</h2>
        <p>The first three seconds of a video, or the first headline of a static, determine 80% of performance. Test hooks more than anything else.</p>
        <h2>Build a winner template</h2>
        <p>When you find a winning hook + format combination, document it. Build the next month&rsquo;s creative around variations of that template. The library of winning patterns is the real asset.</p>
        <h2>Statistical significance is a real thing</h2>
        <p>Do not kill creative after a day. Do not scale winners after a day either. Wait for at least 200 conversions per variant before declaring a winner. Most creative tests are killed too early.</p>
        <h2>Cross-platform learnings</h2>
        <p>A hook that works on TikTok usually works on Meta. A visual that works on Meta usually works on Instagram. Test on the cheapest platform, deploy on the others.</p>
        <p>See our <a href="/services/creative/">creative production service</a> for the weekly cadence that makes this possible &mdash; and <a href="/blog/meta-creative-volume/">how to build a sustainable Meta creative pipeline</a>.</p>
        <NeedHelp topic="creative-testing-framework" />
      </>
    ),
  },

  {
    slug: 'gpt-shopping',
    toc: ['What ChatGPT shopping actually is', 'Product feed quality matters more than ever', 'Schema.org Product markup', 'Reviews as a ranking signal', 'Brand reputation matters'],
    prose: (
      <>
        <p>OpenAI rolled out shopping inside ChatGPT in late 2025. For e-commerce brands, it is a new acquisition channel &mdash; and one most have not prepared for.</p>
        <h2>What ChatGPT shopping actually is</h2>
        <p>When a user asks ChatGPT something like &ldquo;I am looking for a good wool sweater under &euro;200&rdquo;, ChatGPT now generates product recommendations with images, prices and direct merchant links. It is not advertising &mdash; it is organic. And it is growing fast.</p>
        <h2>Product feed quality matters more than ever</h2>
        <p>ChatGPT pulls product data from Google Shopping feeds, Bing Shopping feeds, and Schema.org Product markup on merchant pages. The brands with the cleanest product data show up. The brands with messy feeds do not.</p>
        <h2>Schema.org Product markup</h2>
        <p>Add comprehensive Product schema to every product page: name, brand, image, description, offers (price, currency, availability), aggregateRating, review count, GTIN. This is the data that AI shopping interfaces use to rank you.</p>
        <h2>Reviews as a ranking signal</h2>
        <p>AI shopping interfaces seem to heavily weight aggregate review scores and review counts. If your products do not have reviews, they do not rank in AI shopping. Get a review collection programme running.</p>
        <h2>Brand reputation matters</h2>
        <p>AI models cite brands their training data trusts. Building genuine brand recognition &mdash; through PR, content, social proof &mdash; pays back in AI shopping visibility, not just in classical brand metrics.</p>
        <p>Related: our <a href="/services/ai-visibility/">AI search visibility service</a>, our <a href="/industries/ecommerce/">e-commerce marketing playbook</a> &mdash; and <a href="/blog/how-to-get-mentioned-by-chatgpt/">how to get mentioned by ChatGPT and Perplexity</a>.</p>
        <NeedHelp topic="gpt-shopping" />
      </>
    ),
  },

  {
    slug: 'ga4-mistakes',
    toc: ['Cross-domain tracking', 'Internal traffic filters', 'Custom events for what actually matters', 'Conversion definitions', 'Channel grouping', 'Audience definitions', 'Data retention'],
    prose: (
      <>
        <p>Google Analytics 4 has been around for years now and most setups still get the same handful of things wrong. Here are the seven we fix on every new client.</p>
        <h2>Cross-domain tracking</h2>
        <p>If your site spans multiple domains (e.g. main site + booking subsystem), 70% of GA4 installations break cross-domain tracking. The fix is two settings in admin &mdash; but it is critical for accurate attribution.</p>
        <h2>Internal traffic filters</h2>
        <p>Your team browsing the site should not count as conversions. Set up internal traffic filters using IP-based or DEFINE-INTERNAL-TRAFFIC settings. Yes, it requires configuring your office IPs. Do it anyway.</p>
        <h2>Custom events for what actually matters</h2>
        <p>The default events GA4 fires (page_view, scroll, file_download) miss the events that actually matter for your business. Set up custom events for: form starts, form completions, video plays, search queries, add-to-cart, checkout steps. Use Google Tag Manager.</p>
        <h2>Conversion definitions</h2>
        <p>Mark only the events that genuinely indicate business value as conversions. &ldquo;Pageview of contact page&rdquo; is not a conversion. &ldquo;Submitted contact form&rdquo; is. Loose conversion definitions corrupt every downstream report.</p>
        <h2>Channel grouping</h2>
        <p>GA4 default channel grouping lumps things badly. Set up a Custom Channel Group that matches how you actually think about your channels.</p>
        <h2>Audience definitions</h2>
        <p>Build remarketing audiences in GA4 for the cohorts that matter &mdash; cart abandoners, blog readers, lead form starters. These can be shared to Google Ads automatically.</p>
        <h2>Data retention</h2>
        <p>GA4 defaults to 2 months of event-level data retention. Change it to 14 months in admin. You will thank yourself in a year.</p>
        <p>Related: our <a href="/services/analytics/">analytics &amp; tracking service</a> &mdash; and <a href="/blog/tracking-setup-guide/">the full tracking setup guide</a>.</p>
        <NeedHelp topic="ga4-mistakes" />
      </>
    ),
  },

  {
    slug: 'yachting-marketing',
    toc: ['The four-phase calendar', 'Eight languages, not one', 'Long-cycle remarketing', 'High-value lead handling', 'Brand vs performance'],
    prose: (
      <>
        <p>Yacht charter marketing is unlike any other category we work in. The booking window is long, the average ticket is huge, and the customer is genuinely global. Here is how the media plan actually works.</p>
        <h2>The four-phase calendar</h2>
        <p>A charter season has four distinct phases: <strong>early-bird</strong> (Sep&ndash;Dec, locking in next year), <strong>peak booking</strong> (Jan&ndash;Apr, when most people decide), <strong>late availability</strong> (May&ndash;Jul, last-minute), <strong>shoulder</strong> (Aug&ndash;Sep, off-peak weeks). Each phase needs different creative, different bidding, different audiences. Treating the year as one campaign costs 30&ndash;40% of efficiency.</p>
        <h2>Eight languages, not one</h2>
        <p>Charter customers Google in English, German, French, Italian, Spanish, Russian, Dutch and Polish. Running one English campaign and hoping for the best costs you the majority of European demand. Build separate, properly-localised accounts per language.</p>
        <h2>Long-cycle remarketing</h2>
        <p>The typical Med charter is researched 6&ndash;12 weeks before booking. The default 30-day Meta remarketing window misses the heart of the journey. Build 60&ndash;90 day remarketing windows with frequency caps to stay top-of-mind without burning out.</p>
        <h2>High-value lead handling</h2>
        <p>An inbound charter enquiry is worth &euro;38,000+ on average. The follow-up speed matters enormously. We typically wire booking systems (MMK, Booking Manager) directly into Slack so the sales team sees enquiries in seconds, not days.</p>
        <h2>Brand vs performance</h2>
        <p>Most charter businesses overspend on <a href="/services/google-ads/">Google search</a> and underspend on brand-building <a href="/services/paid-social/">Meta</a>. Charter is a high-consideration purchase &mdash; the customer needs to know your brand exists months before they search. Budget should reflect that.</p>
        <p>More in our <a href="/industries/boating/">boating &amp; yachting marketing playbook</a>.</p>
        <NeedHelp topic="yachting-marketing" />
      </>
    ),
  },

  {
    slug: 'agency-pricing-honest',
    toc: ['The incentive problem', 'When this matters', 'Flat fees fix the problem', 'What this costs us', 'What this gets us'],
    prose: (
      <>
        <p>Most digital marketing agencies charge a percentage of media spend. Most digital marketing agencies have an incentive to recommend more media spend. The connection is not complicated.</p>
        <h2>The incentive problem</h2>
        <p>If an agency is paid 10% of your media spend, every additional &euro;100k of media you spend is &euro;10k more in their pocket. That fee is paid <em>regardless of whether the additional media was a good idea</em>. The structural incentive is to recommend more media &mdash; even when more is not the right answer.</p>
        <h2>When this matters</h2>
        <p>Often, the right thing to do for a client is to <em>reduce</em> media spend. Cut wasted PMax. Pause low-margin campaigns. Reallocate from paid to SEO. Each of these recommendations costs a percentage-fee agency real money. We have seen agencies sit on accounts they know are over-spending for years rather than make the call.</p>
        <h2>Flat fees fix the problem</h2>
        <p>When we charge a flat monthly fee, our incentive is to keep the client. Our incentive to keep the client is to deliver results. The right amount of media to spend is whatever delivers the best business outcome &mdash; and we have no financial stake in that being a bigger or smaller number.</p>
        <h2>What this costs us</h2>
        <p>Flat fees mean a smaller agency cannot scale revenue as fast as a percentage-fee one. A percentage-fee agency that grows a client from &euro;100k to &euro;1m in monthly spend grows their own revenue 10x. We do not. We are fine with that.</p>
        <h2>What this gets us</h2>
        <p>A 93% twelve-month client retention rate, and an inbound pipeline made almost entirely of referrals. The slow way works. See our <a href="/cases/">client cases</a>.</p>
        <NeedHelp topic="agency-pricing-honest" />
      </>
    ),
  },
]

export function getBlogDetail(slug: string) {
  return blogDetails.find(b => b.slug === slug)
}
