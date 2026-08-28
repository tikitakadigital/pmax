import type { ReactNode } from 'react'
import Image from 'next/image'

export interface BlogDetail {
  slug: string
  toc: string[]
  prose: ReactNode
  faqs?: { q: string; a: string }[]
  image?: string
  imageAlt?: string
}

const NeedHelp = ({ topic }: { topic: string }) => (
  <>
    <h2>Need help with this?</h2>
    <p>If any of the above feels like a problem you have, <a href={`/contact/?topic=${topic}`}>tell us a bit about your situation</a> and we will come back within a working day. First conversation is 30 minutes, on us.</p>
  </>
)

export const blogDetails: BlogDetail[] = [
  {
    slug: 'ai-visibility-tracking-tools-2026',
    image: '/blog/crunchjunkie-dashboard-visibility-sample-size.jpg',
    imageAlt: 'CrunchJunkie AI Visibility dashboard showing Visibility 34.5% ± 3.3% based on 2,591 runs, Average Position 1.7, Sentiment 69/100, and Share of Voice 47.7% — every metric shown with its sample size and margin of error',
    toc: [
      'The metering problem nobody puts in the brochure',
      'What BYOK actually changes',
      'Why visibility percentages lie without sample sizes',
      'A metric nobody else tracks: Follow-up Survival',
      'GEO audits: why the evidence basis matters',
      'Owned off-site citations',
      'Where CrunchJunkie isn\'t the right call',
      'The honest summary',
    ],
    faqs: [
      {
        q: 'What is BYOK in AI visibility tracking?',
        a: 'BYOK stands for Bring Your Own Key. Instead of a tool wrapping API calls inside a prompt quota and charging a marked-up flat fee, a BYOK model lets you connect your own API keys directly to the model providers (OpenAI, Google, Anthropic, etc.). You pay the providers at cost; the platform charges a subscription based on something else — in CrunchJunkie\'s case, how many brands you track. The practical consequence is no prompt cap and transparent costs.',
      },
      {
        q: 'What is Follow-up Survival in AI search?',
        a: 'Follow-up Survival is a multi-turn AI visibility metric that measures whether a brand recommendation holds up when a buyer narrows their query in the same conversation. Standard AI visibility tracking records whether a brand appeared in response to a broad discovery prompt (turn 1). Follow-up Survival sends a configured narrower follow-up question in the same conversation (turn 2) and measures which brands survive the refinement. A brand can be visible in the broad query and disappear the moment a real constraint is applied. CrunchJunkie is the only AI visibility tool that productizes this metric.',
      },
      {
        q: 'How many AI engines does CrunchJunkie track?',
        a: 'CrunchJunkie tracks ten AI engines: ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI, and DeepSeek. All ten are included on every plan — there are no per-engine add-ons or tiered engine access.',
      },
      {
        q: 'What does a GEO audit check?',
        a: 'A GEO audit evaluates how ready a website is to be crawled and cited by AI search engines. CrunchJunkie\'s audit covers five categories: crawler access (whether AI bots can reach your pages), content accessibility (whether content is server-rendered and structured for extraction), structured data (JSON-LD quality and breadth), technical SEO hygiene (canonical, sitemap, title/description lengths), and llms.txt (the emerging file format for AI crawler guidance). Each check is assigned an evidence basis — research, documented, convention, or heuristic — that determines how much it weighs in the composite 0–100 score.',
      },
      {
        q: 'What AI visibility tools are cheapest for tracking multiple brands?',
        a: 'At a configuration of 50 prompts per brand, 5 engines, and weekly scanning, CrunchJunkie is the cheapest option that scales across multiple brands. At 5 brands the annual cost is approximately $2,873 (platform fee plus BYOK API costs) versus $3,229 for LLM Pulse, $4,884 for OtterlyAI, and $9,636 for Peec AI. LLM Pulse is cheaper at a single brand (~$529/year vs CrunchJunkie\'s ~$601), but imposes prompt caps and treats several engines as paid add-ons. Pricing verified August 2026.',
      },
    ],
    prose: (
      <>
        <p>The AI visibility tool market has a specific kind of problem: it&rsquo;s moving fast enough that most buyers don&rsquo;t yet know what questions to ask. Vendors know this, and some of them are exploiting it.</p>
        <p>I&rsquo;ve spent the last several months testing these platforms &mdash; not watching demos, but actually running them on client accounts, checking whether the numbers add up, and asking the questions that don&rsquo;t come up in sales calls. This is what I found.</p>

        <h2>The metering problem nobody puts in the brochure</h2>
        <p>Before you compare features, understand how each tool charges you. The pricing model determines what you can actually afford to track &mdash; and that shapes what you actually know about your AI search presence.</p>
        <p>Three models dominate the market right now.</p>
        <p><strong>Prompt-based metering.</strong> You buy a pool of prompts. 50 at entry level, maybe 150 on the next tier, 350 if you&rsquo;re willing to pay for it. Every query you want to monitor uses a prompt. Want to track more purchase-journey questions? More prompts. Want to refresh your list as AI search behaviour shifts? You&rsquo;re spending from the same pool.</p>
        <p>The practical consequence is that you start rationing your own tracking. You pick 50 prompts and hope those are the right ones. You skip the long-tail queries. You don&rsquo;t update the list when something changes in the market. You end up with a tidy dashboard that reflects what you could afford to track, not what&rsquo;s actually happening.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/peec-ai-pricing-plans.jpg" alt="Peec AI pricing page showing Starter at €70/month with 50 prompts and 3 models, Pro at €180/month with 150 prompts and 3 models, Advanced at €360/month with 350 prompts and 3 models" width={1520} height={1108} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #e8e8e8' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>Peec AI: 50 prompts at &euro;70/month, 150 at &euro;180, 350 at &euro;360. The prompt pool is baked into the plan tier. Running out means upgrading &mdash; or tracking less.</figcaption>
        </figure>
        <p><strong>Engine-based metering.</strong> Many tools include 3&ndash;4 AI engines at base and charge for the rest. Claude often costs extra. Gemini might be gated. Copilot is sometimes not available at all on standard plans.</p>
        <p>OtterlyAI charges an additional $29&ndash;$439 per month for Claude tracking, depending on your plan. Peec AI gives you any three of their six supported engines per plan, with each additional engine running $30&ndash;$140 extra per month on top. So when you see a headline price, you need to do the engine math before accepting it.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/otterly-ai-engine-addons-pricing.jpg" alt="OtterlyAI Add-Ons pricing table showing Claude tracking costs €29/month on Lite, €109/month on Standard, and €439/month on Premium — paid on top of the base plan price" width={1520} height={976} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #e8e8e8' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>OtterlyAI engine add-ons. Claude: &euro;29/month (Lite), &euro;109 (Standard), &euro;439 (Premium) &mdash; on top of the base subscription. Google Gemini and AI Mode follow the same structure.</figcaption>
        </figure>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/peec-ai-engine-coverage.jpg" alt="Peec AI feature comparison table showing Starter, Pro and Advanced plans each include only 3 AI models from the list, while Enterprise gets unlimited. Available engines listed include ChatGPT, AI Mode, AI Overviews, Microsoft Copilot, Perplexity, Gemini, Claude Sonnet 4, GPT-5 Search, DeepSeek, Qwen and Mistral." width={1520} height={1688} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #e8e8e8' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>Peec AI engine coverage grid. Non-Enterprise plans include exactly 3 models. Claude Sonnet 4, GPT-5 Search, and the newer engines are Enterprise-only.</figcaption>
        </figure>
        <p><strong>Per-domain or per-brand metering.</strong> Semrush&rsquo;s AI Visibility Toolkit charges $99 per domain per month. Transparent and predictable at one brand; brutal when you multiply it across an agency client list.</p>

        <h2>What BYOK actually changes</h2>
        <p>CrunchJunkie takes a different approach to the whole pricing question. Instead of wrapping API calls inside a prompt quota and charging a marked-up flat fee, it lets you connect your own API keys. Your queries go directly to OpenAI, Google, Anthropic, and the other providers &mdash; you pay them at cost. The platform charges a subscription based on how many brands you track, not how many prompts you run.</p>
        <p>The result: no prompt cap. All ten engines &mdash; ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Google AI Mode, Microsoft Copilot, Grok, Meta AI, and DeepSeek &mdash; are included on every plan from the lowest tier upward. No per-engine add-ons.</p>
        <p>That changes the incentive structure in a concrete way. With a prompt cap, you have a reason to track fewer queries than you should. With BYOK and no cap, you track what&rsquo;s actually useful.</p>
        <p>Here&rsquo;s what the annual cost looks like at a consistent configuration &mdash; 50 prompts per brand, 5 engines, weekly scanning, annual billing &mdash; across the tools where pricing is publicly available:</p>

        <div style={{ overflowX: 'auto', margin: '24px 0 8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.5 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #2d2d2d' }}>
                <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>Tool</th>
                <th style={{ textAlign: 'left', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>Metered by</th>
                <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>1 brand / yr</th>
                <th style={{ textAlign: 'right', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>5 brands / yr</th>
                <th style={{ textAlign: 'right', padding: '8px 0 8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b6b', whiteSpace: 'nowrap' }}>10 brands / yr</th>
              </tr>
            </thead>
            <tbody>
              {[
                { tool: 'CrunchJunkie', meter: 'brands only', one: '$601', five: '$2,873', ten: '$6,105', highlight: true },
                { tool: 'LLM Pulse', meter: 'prompts + project', one: '$529', five: '$3,229', ten: '$7,763', highlight: false },
                { tool: 'Peec AI', meter: 'prompts + engine', one: '$1,932', five: '$9,636', ten: '—', highlight: false },
                { tool: 'Semrush', meter: 'domain', one: '$1,908 +sub', five: '$9,540 +sub', ten: '$19,080 +sub', highlight: false },
                { tool: 'OtterlyAI', meter: 'prompts + engine', one: '$2,508', five: '$4,884', ten: '$7,260', highlight: false },
                { tool: 'Scrunch *', meter: 'brand workspace', one: '~$3,000', five: '—', ten: '—', highlight: false },
                { tool: 'Evertune', meter: 'flat (prompt vol.)', one: '$9,600', five: '$9,600', ten: '$9,600', highlight: false },
                { tool: 'Ahrefs †', meter: 'base + add-on', one: '$9,936 +sub', five: '$9,936 +sub', ten: '$9,936 +sub', highlight: false },
                { tool: 'GEOly ‡', meter: 'tier + engine gate', one: '$11,988', five: '$11,988', ten: '—', highlight: false },
              ].map(({ tool, meter, one, five, ten, highlight }) => (
                <tr key={tool} style={{ borderBottom: '1px solid #1e1e1e' }}>
                  <td style={{ padding: '10px 16px 10px 0', fontWeight: highlight ? 600 : 400, color: highlight ? '#f6f4ef' : '#b4b4b4', whiteSpace: 'nowrap' }}>{tool}</td>
                  <td style={{ padding: '10px 16px', fontSize: 12, color: '#6a6a6a', whiteSpace: 'nowrap' }}>{meter}</td>
                  <td style={{ textAlign: 'right', padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{one}</td>
                  <td style={{ textAlign: 'right', padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{five}</td>
                  <td style={{ textAlign: 'right', padding: '10px 0 10px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: highlight ? '#3cffd0' : '#b4b4b4', whiteSpace: 'nowrap' }}>{ten}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', lineHeight: 1.8, marginBottom: 24 }}>
          Config: 50 prompts per brand &middot; 5 engines &middot; weekly &middot; annual billing. CrunchJunkie = platform fee + BYOK API cost (conservative estimate; real cost is typically lower). &mdash; = no self-serve pricing available at this configuration.<br />
          * Scrunch pricing changes frequently; the figure above is from August 2026 &mdash; verify at scrunch.com before citing.<br />
          &dagger; Ahrefs: base plan ($129/mo) plus the all-engines Brand Radar add-on ($699/mo). The &ldquo;included&rdquo; Brand Radar prompt allowance is 5&ndash;20 prompts only &mdash; the add-on is required to track 50+.<br />
          &Dagger; GEOly: 5-engine coverage requires the $999/mo tier. The same annual cost applies across 1&ndash;5 brands (plan maximum); 10 brands is not available on self-serve plans.<br />
          Competitor prices verified from public pricing pages where accessible; secondary sources otherwise.
        </p>

        <p>One honest caveat that this table shouldn&rsquo;t hide: <strong>LLM Pulse is cheaper at one brand</strong> (&sim;$529/year vs CrunchJunkie&rsquo;s &sim;$601). If you&rsquo;re tracking a single brand on a tight budget, it&rsquo;s worth evaluating. LLM Pulse does enforce prompt caps and treats Copilot and Claude as paid add-ons &mdash; but at one brand with limited prompts and a few engines, those constraints may not bite you.</p>
        <p>The calculus flips at five brands. At ten brands, Peec AI can&rsquo;t even quote the configuration without a custom enterprise call. Semrush is running at $19,000+ per year before you add the required base subscription.</p>
        <p>CrunchJunkie plans (EUR, annual billing): <strong>Solo &euro;9/month</strong> (1 brand) &middot; <strong>Starter &euro;39/month</strong> (5 brands) &middot; <strong>Pro &euro;99/month</strong> (20 brands) &middot; <strong>Agency &euro;149/month</strong> (40 brands), plus your BYOK API costs.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/crunchjunkie-pricing-plans.jpg" alt="CrunchJunkie pricing page showing Solo at €12/month for 1 brand, Starter at €49/month for 5 brands, Pro at €124/month for 20 brands, and Agency at €186/month for 40 brands — all plans include all 10 AI engines with no per-engine fees and no prompt limits" width={1520} height={1213} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #2d2d2d' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>CrunchJunkie plans are metered by brand, not by prompt or engine. All 10 AI engines are included on every plan. The variable cost is your BYOK API usage, paid directly to the providers at cost &mdash; no markup.</figcaption>
        </figure>

        <h2>Why visibility percentages lie without sample sizes</h2>
        <p>Here&rsquo;s the thing about AI answer engines that most visibility dashboards quietly paper over: they&rsquo;re non-deterministic.</p>
        <p>Run the same prompt twice on ChatGPT, with the same account, five minutes apart. You can get different brands in the answer, different framing, different citation lists. A SparkToro study found less than 1% overlap between ChatGPT and Google AI giving the same list of brands in two separate answers to the same query.</p>
        <p>This isn&rsquo;t an edge case. It&rsquo;s how these systems work &mdash; they sample from probability distributions, they update continuously, they personalise based on context. Every AI visibility number you see is based on a sample of responses, not an exhaustive census.</p>
        <p>So when a tool shows you &ldquo;34% visibility,&rdquo; what does that actually mean? Did they run the prompt once? Three times? Twenty times? Is 34% a stable reading with a narrow margin of error, or a single data point that could have come out anywhere from 10% to 60%?</p>
        <p>Most tools don&rsquo;t tell you. They show the number.</p>
        <p>CrunchJunkie runs each prompt multiple times and reports the sample size and margin of error alongside every visibility figure. The product&rsquo;s position on this is explicit: a single AI answer is a sample, not a trend. Every metric change gets evaluated against its margin of error before it registers as a movement worth acting on.</p>
        <figure style={{ margin: '24px 0' }}>
          <Image src="/blog/crunchjunkie-dashboard-visibility-sample-size.jpg" alt="CrunchJunkie dashboard showing Visibility 34.5% ± 3.3% with the note 'Based on n = 2,591 runs over the last 30 days'" width={1520} height={957} style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid #2d2d2d' }} />
          <figcaption style={{ fontSize: 11, color: '#6a6a6a', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px', marginTop: 8 }}>Every metric ships with its sample size and margin of error. &ldquo;34.5% &plusmn;&thinsp;3.3% based on 2,591 runs&rdquo; is a measurement. &ldquo;34.5%&rdquo; alone is a number.</figcaption>
        </figure>
        <p>This matters most for agencies. When you report AI visibility to a client and the number drops by four points, you need to know whether that&rsquo;s a real signal or noise. Without sample size and error bounds, you&rsquo;re showing a client a chart that might mean nothing. With them, you can say with confidence whether something actually moved.</p>

        <h2>A metric nobody else tracks: Follow-up Survival</h2>
        <p>Consider how people actually use AI for commercial decisions.</p>
        <p>Someone asks ChatGPT: <em>&ldquo;What are the best project management tools for distributed teams?&rdquo;</em> Your brand appears. Visibility: recorded. Win.</p>
        <p>But the conversation continues. They follow up: <em>&ldquo;Which of those is best for a team under fifteen people that doesn&rsquo;t want to pay per seat?&rdquo;</em></p>
        <p>Your brand disappears.</p>
        <p>You won the broad discovery query and lost the moment a real constraint was applied. The standard visibility dashboard never caught this &mdash; it measured turn one and stopped.</p>
        <p>CrunchJunkie calls this <strong>Follow-up Survival</strong>: a multi-turn metric that measures whether a recommendation holds up when a buyer narrows their question within the same conversation. The platform runs the discovery prompt, records which brands appear (turn&nbsp;1), sends a configured follow-up question in the same conversation (turn&nbsp;2), and measures which brands survive the refinement.</p>
        <p>No other tool in the category productizes this. It&rsquo;s available as an opt-in pilot feature on paid plans and costs approximately twice as much per prompt to run &mdash; because it requires two conversation turns instead of one.</p>
        <p>One design detail that matters: the follow-up question is configured per prompt, not applied generically. A narrower that makes sense after &ldquo;best project management tools for distributed teams?&rdquo; is nonsense after &ldquo;best espresso machines under &euro;200.&rdquo; CrunchJunkie requires a per-prompt follow-up question, offers an AI-drafted suggestion you can review and edit, and records the exact text used on every run as evidence &mdash; so you know exactly what was asked, and you can compare results across time because the question stays consistent.</p>
        <p>If your buyers research using multi-turn AI conversations &mdash; and B2B buyers increasingly do &mdash; survival in turn&nbsp;2 is more commercially predictive than visibility in turn&nbsp;1.</p>

        <h2>GEO audits: why the evidence basis matters</h2>
        <p>Every AI visibility tool includes something called a GEO audit &mdash; a diagnostic of how ready your site is to be crawled and cited by AI engines. The quality of these audits varies enormously, for a reason that isn&rsquo;t obvious until you dig in.</p>
        <p>The honest truth about AI search optimisation is that we don&rsquo;t yet have decades of controlled evidence. We have some peer-reviewed research, published documentation from crawler vendors, and a lot of &ldquo;this seems like it might help&rdquo; logic that nobody has actually measured. The good audit tools are explicit about which category each of their checks falls into. The bad ones aren&rsquo;t.</p>
        <p>CrunchJunkie structures its audit around a formal evidence ladder:</p>
        <ul>
          <li><strong>Research</strong> &mdash; backed by peer-reviewed measurement of citation-rate effects</li>
          <li><strong>Documented</strong> &mdash; published platform behaviour from the crawler vendors themselves</li>
          <li><strong>Convention</strong> &mdash; emerging practice, not yet proven to be consumed by AI engines</li>
          <li><strong>Heuristic</strong> &mdash; sensible proxy, no direct evidence</li>
        </ul>
        <p>Each check&rsquo;s weight in the composite score scales with its evidence level. Heuristics can&rsquo;t dominate a category. Convention-basis checks carry lower weight by design.</p>
        <p>One concrete example: llms.txt. It&rsquo;s been heavily hyped. CrunchJunkie gives it a weight of 5 out of 100 in the composite audit score &mdash; deliberately low. Their quarterly research review found that approximately 97% of published llms.txt files receive zero crawler requests, and Claude Code is the only confirmed real reader of the standard at scale. Google&rsquo;s own guidance, updated in August 2026, explicitly states that Google Search ignores llms.txt.</p>
        <p>An audit tool that scores llms.txt at 15 or 20 points is telling you it matters more than the evidence supports. That inflates your score for doing something that probably doesn&rsquo;t help you yet, and it buries the checks that actually do.</p>
        <p>On the content side, the checks that carry real weight are backed by the KDD&nbsp;2024 &ldquo;GEO: Generative Engine Optimization&rdquo; study (Aggarwal et al., Princeton/IIT Delhi), which measured actual citation-rate effects. Quotations in content improved citation rates by 27.8%. Cited statistics: +25.9%. Authoritative external citations: +24.9%.</p>
        <p>The audit covers five categories &mdash; crawler access (weight 30), content accessibility (30), structured data (20), technical SEO hygiene (15), and llms.txt (5) &mdash; and produces a 0&ndash;100 composite. Diagnostic, not a guarantee, and honest about what it doesn&rsquo;t know.</p>

        <h2>Owned off-site citations</h2>
        <p>When an AI engine cites your brand, it often pulls from content that lives off your main domain: a YouTube channel, a LinkedIn company page, a Substack post, a Reddit thread you participate in.</p>
        <p>&ldquo;Brand radar&rdquo; tools from traditional SEO handle this via web index matching &mdash; they crawl the open web and look for your brand name. That&rsquo;s broad coverage but noisy: it credits you for mentions you don&rsquo;t control, content other people wrote about you, and brand-name mismatches.</p>
        <p>CrunchJunkie&rsquo;s off-site citation tracking works the opposite way. You declare your owned channels &mdash; <code>youtube.com/@yourbrand</code>, <code>linkedin.com/company/yourbrand</code>, your Substack, your Medium handle. The platform only attributes a citation to your brand if it&rsquo;s on a URL that matches a channel you declared, with handle-precise matching. A YouTube video from a different creator with your brand name in the title doesn&rsquo;t count.</p>
        <p>The consequence is a much more actionable view. You see exactly which of your owned channels AI engines are pulling from, for which topics, and where you have gaps. That maps directly to content investment decisions: not &ldquo;build a LinkedIn presence&rdquo; (you might already have one and it&rsquo;s working) but &ldquo;reinforce your YouTube coverage on this specific topic cluster.&rdquo;</p>

        <h2>Where CrunchJunkie isn&rsquo;t the right call</h2>
        <p>A tool guide that doesn&rsquo;t say this is a sales pitch.</p>
        <p><strong>At one brand on a tight budget:</strong> LLM Pulse undercuts CrunchJunkie at the single-brand level. If you&rsquo;re running a small program, don&rsquo;t need multi-engine coverage, and are comfortable with a prompt cap, it&rsquo;s worth a look alongside CrunchJunkie.</p>
        <p><strong>If you need SEO and AI visibility in one platform:</strong> Semrush&rsquo;s AI Visibility Toolkit sits inside a full SEO suite &mdash; keyword research, backlink analysis, rank tracking, site audits. If your team already lives in Semrush and you want AI visibility without managing a separate tool, that integration has real value even at the higher per-domain price. CrunchJunkie doesn&rsquo;t do traditional rank tracking. It&rsquo;s purpose-built for AI visibility.</p>
        <p><strong>If you want everything fully managed:</strong> The BYOK model requires setting up API keys with individual providers. For teams that want a completely managed option, CrunchJunkie offers that too, but the pricing advantage is sharpest on BYOK.</p>

        <h2>The honest summary</h2>
        <p>Most AI visibility tools in 2026 were built for the single-brand case and are awkwardly retrofitting their pricing and architecture for multi-brand use. Engine gating and prompt caps are how they manage the cost they can&rsquo;t transparently pass through to you.</p>
        <p>CrunchJunkie was built with multi-brand tracking as a first-class case. BYOK means your costs scale linearly and transparently with actual usage. No prompt rationing, no engine add-ons, no contact-sales wall at five clients.</p>
        <p>The things that differentiate it in practice are less about feature lists and more about intellectual honesty: Follow-up Survival because recommendation stickiness under refinement matters more than headline visibility; sample sizes and error bounds because AI answers are volatile; an evidence-based audit because not everything vendors call a &ldquo;GEO signal&rdquo; has actually been measured.</p>
        <p>Those are the things that determine whether you can build a reporting practice on it &mdash; and whether what you show clients means something.</p>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Pricing verified August 2026 from public pricing pages and, for CrunchJunkie, directly from the production codebase. Competitor prices verified against public pricing pages where accessible; secondary sources otherwise. Prices in this category change frequently &mdash; verify before committing.</p>

        <NeedHelp topic="geo-audit" />
      </>
    ),
  },
  {
    slug: 'google-ads-ai-disclosure-label',
    image: '/og/google-ads-ai-disclosure-serp.jpg',
    imageAlt: 'Google search results for "rezept online einlösen" showing the AI disclosure label on two pharmacy ads — DoktorABC and Shop Apotheke — reading "AI disclosure: Ad created or edited with AI"',
    toc: [
      'The label in the wild',
      'How Performance Max triggered it',
      'Three routes to the label',
      'The CTR question',
      'What to do in your account now',
      'Common questions',
    ],
    faqs: [
      {
        q: 'What is the Google Ads "AI disclosure: Ad created or edited with AI" label?',
        a: "A disclosure Google adds to ads where AI was involved in creating or editing the content. Rolled out from 9 July 2026, it appears under the ad description in Google Search, YouTube and Discover — visible without clicking anything. The rollout follows EU AI Act Article 50 transparency obligations which came into force on 2 August 2026.",
      },
      {
        q: 'Does Performance Max automatically trigger the AI disclosure label?',
        a: "Yes, in most standard configurations. If 'Automatically created assets' is enabled, or if you use AI Max for Search, Google's own AI generates ad variations that trigger the label automatically. You cannot disable the label itself — only the asset generation that causes it.",
      },
      {
        q: 'Can I opt out of the Google Ads AI disclosure label?',
        a: "Not directly. Turning off automatically created assets and avoiding AI tools for ad content removes the mechanism that triggers the label — but there is no setting that suppresses the label while keeping AI-generated content in place. Removing the AI content is the only functional opt-out.",
      },
      {
        q: 'Does the AI disclosure label affect click-through rate?',
        a: "There is no statistically meaningful data yet. The prominent placement appears to be in test phase and the label is too new to draw conclusions from. The concern most worth monitoring is in high-trust categories — healthcare, finance, legal services — where 'AI-created' may function as a friction signal. The practical step is segmenting CTR by campaign type and time period from the date the label appeared on your SERPs.",
      },
      {
        q: "What's the difference between automatic and self-declared AI disclosure in Google Ads?",
        a: "Automatic disclosure is applied by Google when its own AI tools — auto-created assets, Performance Max asset generation, AI Max for Search — touched your content. Self-declared disclosure is a new account-level setting for advertisers who use external AI tools (ChatGPT, Claude, image generators) and upload the results to Google Ads. Google has stated it will not independently verify self-declarations.",
      },
    ],
    prose: (
      <>
        <p>A search for <em>rezept online einl&ouml;sen</em> &mdash; &ldquo;redeem prescription online&rdquo; in German &mdash; last week. Two sponsored results. Both online pharmacies. Both carrying a line that didn&rsquo;t exist a month ago: <strong>&ldquo;AI disclosure: Ad created or edited with AI.&rdquo;</strong> Not behind the three-dot menu. Sitting between the ad description and the star rating, visible to everyone searching for somewhere to fill their prescription.</p>
        <p>DoktorABC. Shop Apotheke. Between them: over 1.2 million reviews, both rated above 4.7 stars. And both now publicly labeled as AI-created &mdash; in a category where every trust signal an advertiser has built over years sits next to a four-word line about how the copy was written.</p>
        <p>This is interesting not because those pharmacies are doing something unusual. It&rsquo;s interesting because they almost certainly aren&rsquo;t. They&rsquo;re doing what Google has recommended for the past two years: run Performance Max, enable asset generation, let the algorithm find what works. They didn&rsquo;t decide to label their ads as AI-created. Performance Max did it for them.</p>

        <h2>The label in the wild</h2>
        <p>Google officially launched the AI disclosure label on 9 July 2026, rolling it out across Search, YouTube and Discover. The initial framing was fairly modest: a new entry in the ad details panel, visible when someone taps the three-dot menu, showing whether AI was involved in creating the ad.</p>
        <p>What the pharmacy screenshot above shows is something more visible: the label appearing directly in the ad listing without any user interaction. That&rsquo;s a step beyond what Google announced in July. It&rsquo;s also consistent with how Google runs placement experiments &mdash; test a more prominent version, measure the response, decide how far to take it. Consider this a likely preview of where the label ends up by default.</p>
        <p>The regulatory timing is direct. Article 50 of the EU AI Act &mdash; requiring transparency for AI-generated content &mdash; came into force on 2 August 2026. Three weeks later, visible AI labels appear on European SERPs. Google tends to make compliance-adjacent moves ahead of formal enforcement rather than after it.</p>

        <h2>How Performance Max triggered it</h2>
        <p>Most coverage of this frames the AI disclosure as something advertisers opted into by choosing AI tools. For the majority of large Google Ads accounts, the more accurate framing is: they opted into Performance Max, and Performance Max opted into AI.</p>
        <p>The asset generation chain works like this. You provide headlines, descriptions, images and a URL. Google uses them to build ad combinations. What many advertisers haven&rsquo;t fully noticed is that Google also generates <em>additional</em> assets &mdash; new headline variants, different description phrasing &mdash; based on your landing page content, tests them, and serves them without showing them to you for approval first. This feature is called &ldquo;Automatically created assets.&rdquo; It&rsquo;s a separate toggle, on by default in many configurations, that Google describes as generating assets to complement your existing ones.</p>
        <p>If those auto-generated assets ran on your campaigns, the label applies. You provided the inputs. Google wrote the copy. Google is now being transparent about that.</p>
        <p>AI Max for Search goes further: it rewrites the final URL to match search intent, generates keyword combinations beyond your submitted list, and creates ad variations you didn&rsquo;t author. It produces real performance gains in the right accounts. It is also, structurally, AI-created advertising.</p>

        <h2>Three routes to the label</h2>
        <p>Not all disclosed ads got there the same way, and the distinction matters for how you respond.</p>
        <p><strong>Route 1 &mdash; Google&rsquo;s own AI tools.</strong> Auto-created assets, Performance Max asset generation, AI Max for Search. The label is applied automatically. No action required from the advertiser. This is the primary mechanism for most accounts carrying the disclosure &mdash; and the one most advertisers didn&rsquo;t consciously choose.</p>
        <p><strong>Route 2 &mdash; External AI, self-declared.</strong> If you used ChatGPT, Claude, Midjourney or another external AI tool to draft or edit ad copy and then uploaded it to Google Ads, you&rsquo;re supposed to declare this via a new account-level setting. Google has stated explicitly it will not independently verify declarations. This is compliance by trust.</p>
        <p><strong>Route 3 &mdash; Entirely human-written.</strong> Every headline and description written without AI assistance, auto-created assets disabled. No label applies. On large accounts running Performance Max at scale, this position is increasingly uncommon.</p>
        <p>There&rsquo;s an undeclared fourth category &mdash; advertisers who used AI informally, ran copy through a grammar tool, asked an AI for rough ideas they then rewrote, or used AI image tools for a resize &mdash; and have no clear guidance on whether that counts. Google hasn&rsquo;t drawn that line yet.</p>

        <h2>The CTR question</h2>
        <p>Honest answer: there is no meaningful data yet. The visible placement appears to be in test phase, the label is too new, and normal CTR variance makes early signals uninterpretable. Any claim about what the AI disclosure label does to click-through rates right now is inference, not measurement.</p>
        <p>Two outcomes are genuinely plausible &mdash; and both probably true in different contexts. The first: the label blends into visual noise, the way &ldquo;Sponsored&rdquo; has. Once a disclosure becomes universal, it stops being informative. Highly relevant AI-labeled ads will still out-click irrelevant unlabeled ones. When the label is everywhere, no one carries a relative disadvantage from it.</p>
        <p>The second: in categories where trust drives the purchase decision &mdash; healthcare, legal advice, financial services &mdash; &ldquo;AI-created&rdquo; introduces friction at exactly the wrong moment. The pharmacy case is the clearest illustration. Someone deciding where to fill a prescription is making a health decision. &ldquo;AI disclosure: Ad created or edited with AI&rdquo; does something different in that context than it would under an ad for running shoes. Not wrong, necessarily &mdash; but doing work.</p>
        <p>The competitive scenario worth watching is asymmetry. If every competitor on your SERP carries the label, you&rsquo;re all even. If you&rsquo;re the only one who does &mdash; or the only one who doesn&rsquo;t &mdash; that becomes a visible differentiator on a page where users are actively comparing. Monitor your own key queries. General industry data won&rsquo;t tell you what&rsquo;s happening in your specific account.</p>

        <h2>What to do in your account now</h2>
        <p><strong>Find out what you&rsquo;re actually serving.</strong> In Google Ads, go to Assets, then All assets, and filter the Source column. Assets marked &ldquo;Auto-created&rdquo; are the ones Google generated. If those have been running for months without review, this is a reasonable moment to look at them &mdash; not only because of the label, but because running ad copy you&rsquo;ve never approved is its own governance question.</p>
        <p><strong>Check the toggle.</strong> At campaign level, under Settings, you can turn off Automatically created assets. That stops new AI asset generation for that campaign. Existing auto-created assets may continue serving until you review and manage them individually. There is no bulk-remove option.</p>
        <p><strong>Set a CTR baseline now.</strong> Pull the two weeks before the label appeared on your SERPs into your reporting tool. Segment by campaign type, and within Search by query theme &mdash; brand terms, competitor terms, generic intent. When you have four weeks of post-label data, compare. That segmentation is the earliest real signal you&rsquo;ll have on whether your specific account, in your specific category, is seeing any movement worth responding to.</p>
        <p><strong>Don&rsquo;t dismantle proven structure based on unproven risk.</strong> The performance case for AI asset generation is established: more combinations tested, more query intent matched, typically higher reach at the same budget. The performance case against the label has not been made yet. Rebuilding campaign structure under announcement pressure &mdash; without your own data to guide it &mdash; tends to produce worse outcomes than waiting for a signal. If you&rsquo;re in a category with genuine trust concerns, that calculus may shift. Let your CTR data make that call, not the announcement.</p>

        <div className="prose-callout">
          <div className="prose-callout-kicker">The bottom line</div>
          <p>The label is real and it&rsquo;s here. Its commercial effect on your specific accounts isn&rsquo;t established yet. The right response is clean measurement: know exactly which assets are AI-generated and which aren&rsquo;t, build a CTR baseline this week, and make structural changes only when your own data gives you something to act on.</p>
        </div>

        <p>Related: <a href="/blog/performance-max-2026/">Performance Max in 2026 &mdash; the settings we change first</a> &middot; <a href="/blog/performance-max-bidding-change-august-2026/">The August 2026 bidding change &mdash; what to do before it lands</a> &middot; <a href="/services/google-ads/">Our Google Ads management service</a></p>
        <NeedHelp topic="google-ads-ai-label" />
      </>
    ),
  },
  {
    slug: 'what-is-a-geo-audit',
    image: '/og/geo-audit.webp',
    imageAlt: 'crunchjunkie GEO Audit report for pmax.online — AI readiness score 93, showing AI crawler access 100/100, content accessibility 92/100, structured data 76/100 and technical SEO 100/100',
    toc: ['Not an SEO audit', 'What a GEO audit covers', 'The GEO audit checklist', 'Tools', 'How often to run one', 'Frequently asked questions'],
    faqs: [
      { q: 'What is a GEO audit?', a: 'A GEO audit is a structured review of how AI platforms represent your brand — what they say when asked about you, how accurately they describe you, which sources they draw on, and where your brand appears or fails to appear in AI-generated responses.' },
      { q: "What's the difference between a GEO audit and an SEO audit?", a: 'An SEO audit checks whether search engines can find, understand and rank your pages. A GEO audit checks what AI platforms believe about your brand and how accurately they represent it. SEO audits are primarily technical; GEO audits are primarily about authority and representation.' },
      { q: 'How do I conduct a GEO audit?', a: "Run it across five layers: crawlability (can AI bots access your site), content structure (are your key facts quotable), entity coverage (are you a consistent entity across the web), AI representation (what do ChatGPT, Perplexity and Gemini actually say about you), and competitive positioning (where do competitors appear where you don't)." },
      { q: 'What does a GEO audit checklist include?', a: 'A GEO audit checklist covers technical access (robots.txt, structured data, JS-rendering), content citability (definitional paragraphs, specific claims, FAQ content), authority signals (third-party mentions, consistent NAP, schema markup), and AI representation checked across ChatGPT, Perplexity, Claude and Gemini.' },
      { q: 'How often should I run a GEO audit?', a: 'A thorough audit quarterly, a lighter AI representation spot-check monthly. Run one immediately after a rebrand, market expansion or significant content change.' },
      { q: 'What tools do I need for a GEO audit?', a: 'The technical layer can be audited with standard SEO tools (Screaming Frog, Search Console) plus manual checks. The AI representation layer requires running prompts across ChatGPT, Perplexity, Claude and Gemini. For ongoing monitoring, crunchjunkie (crunchjunkie.io) tracks AI citation frequency and brand sentiment automatically.' },
      { q: 'Can I run a GEO audit myself?', a: "Yes. The audit itself can be done without an agency. The challenge is knowing what to look for in the AI representation layer, having a baseline to compare against, and having a programme to act on what you find. The audit is the easy part; the remediation is the work." },
    ],
    prose: (
      <>
        <p>Most brands we talk to have no idea what ChatGPT says about them. Some have never asked. Some have asked once, got a vague answer and moved on. Very few have asked systematically &mdash; across multiple platforms, on multiple days, with different query types &mdash; and documented what they found.</p>
        <p>That systematic process is a GEO audit. It&rsquo;s not a technical checklist. It&rsquo;s a structured investigation into how AI platforms represent your brand and what you can actually do about it.</p>
        <p>We run them at pmax, across sectors including hospitality, real estate, professional services and B2B software. What we find is almost always a surprise &mdash; and rarely reassuring.</p>

        <h2>Not an SEO audit &mdash; a different question</h2>
        <p>SEO audits answer: <em>can search engines find and rank your pages?</em> They cover crawlability, page speed, canonical tags, internal linking. That foundation still matters for GEO &mdash; a page that can&rsquo;t be crawled won&rsquo;t be cited &mdash; but it&rsquo;s a floor, not a ceiling.</p>
        <p>A GEO audit answers a different question: <em>what do AI platforms believe about your brand, and is any of it accurate?</em> You can have a perfectly optimised website and still be invisible in AI search, because AI models don&rsquo;t rank pages. They synthesise responses from sources they judge to be credible and corroborated. If those sources don&rsquo;t include enough that mentions you, you&rsquo;re not in the conversation.</p>
        <p>The gap between SEO and GEO performance can be significant. Brands with strong domain authority sometimes have weak AI citation rates. Brands with smaller websites but genuine third-party coverage sometimes punch well above their SEO weight in AI responses. It&rsquo;s an authority problem, not an optimisation problem.</p>

        <h2>What a GEO audit covers</h2>
        <p>A thorough GEO audit runs across five layers. Most brands have issues in at least two.</p>

        <h3>1. Crawlability and AI access</h3>
        <p>Before anything else: can AI crawlers reach your site? Check <code>robots.txt</code> for blocks on the agents that matter &mdash; <code>GPTBot</code>, <code>ClaudeBot</code>, <code>OAI-SearchBot</code>, <code>Claude-SearchBot</code>, <code>PerplexityBot</code>, <code>Google-Extended</code>.</p>
        <p>The distinction to get right: <em>training crawlers</em> (GPTBot, ClaudeBot, Google-Extended) feed model training datasets. <em>Retrieval bots</em> (OAI-SearchBot, PerplexityBot, Claude-SearchBot) power live citations in real-time answers. Blocking retrieval bots suppresses active citations. For most brands, blocking either type is a mistake &mdash; your content in the training data is how models develop an opinion about you.</p>

        <h3>2. Content structure and citability</h3>
        <p>AI models quote things that are quotable. Vague brand language doesn&rsquo;t get cited, specific factual statements do. &ldquo;We&rsquo;re a leading digital agency&rdquo; is not a sentence any model will repeat. &ldquo;pmax is a performance marketing agency in Calvi&agrave;, Mallorca, founded in 2023&rdquo; is.</p>
        <p>Audit your content for: clear definitional paragraphs describing exactly what you do and for whom; specific claims backed by evidence; FAQ content addressing questions people actually ask; and consistent language that disambiguates your brand. Also check: is critical content JS-rendered? AI crawlers largely don&rsquo;t execute JavaScript. If your key service descriptions live in a React component that needs the browser to render, they may be invisible to every AI crawler.</p>

        <h3>3. Entity coverage</h3>
        <p>An entity is a distinct, identifiable thing that AI models can reason about. Your goal is to become a well-defined entity &mdash; not just a website &mdash; through consistent, corroborated presence across the web.</p>
        <p>Check: structured data (schema.org) on your site &mdash; Organisation, LocalBusiness, Service, Person for founders; consistent NAP (name, address, phone) across directories; mentions in publications your sector trusts. Contradictory information across channels &mdash; different founding years, different service descriptions on different platforms &mdash; confuses entity resolution and introduces hallucination risk.</p>

        <h3>4. AI representation audit</h3>
        <p>The most revealing layer, and the one most brands skip. Open ChatGPT, Perplexity, Claude and Gemini and run a range of prompts:</p>
        <ul>
          <li>Your brand name directly: <em>&ldquo;What is [Brand]?&rdquo;</em></li>
          <li>Category queries: <em>&ldquo;Best [service] in [location]&rdquo;</em></li>
          <li>Competitive comparisons: <em>&ldquo;Compare [Brand] and [Competitor]&rdquo;</em></li>
          <li>Problem-first questions your customers actually ask</li>
        </ul>
        <p>Document everything: whether you appear, how you&rsquo;re described, what facts are cited, where the information comes from, whether competitors appear where you don&rsquo;t. This is your baseline. You&rsquo;ll run it again in three months to measure movement.</p>
        <p>Common findings: wrong founding date; a confused description that mixes your brand with a different company; a competitor appearing in every response where you should appear; or simply no mention at all, on any platform, in any context.</p>
        <p>We&rsquo;ve seen a hotel described as under different ownership. A B2B software company attributed capabilities it doesn&rsquo;t have, sourced from a competitor&rsquo;s press release. A well-known local brand with zero AI presence &mdash; not a single mention across four platforms &mdash; despite ten years in business. The consistency of these findings across categories is what makes a structured audit worthwhile rather than a one-off prompt.</p>

        <h3>5. Competitive positioning</h3>
        <p>Where do competitors appear in responses where you don&rsquo;t? Which sources does the AI draw on when describing your category? Which brands does it compare to you, and how does it characterise the difference?</p>
        <p>This tells you what the AI believes the competitive landscape looks like &mdash; which is sometimes quite different from your own view. It also tells you which content types and third-party sources carry the most weight, and where to direct authority-building effort first.</p>

        <h2>The GEO audit checklist</h2>
        <p>Work through these in order. The technical layer is fastest to fix; the authority layer takes longest; the AI representation layer is where you see results.</p>

        <h3>Technical</h3>
        <ul>
          <li>robots.txt allows key AI retrieval bots: OAI-SearchBot, PerplexityBot, Claude-SearchBot, ChatGPT-User, Claude-User</li>
          <li>No JavaScript dependency for critical content (service descriptions, about page, key facts)</li>
          <li>Structured data present and valid: Organisation or LocalBusiness, Service, FAQPage, Person for founders</li>
          <li>Canonical tags implemented correctly; sitemap submitted and current</li>
        </ul>

        <h3>Content</h3>
        <ul>
          <li>Each core service has at least one clear, quotable definitional paragraph</li>
          <li>Brand description is consistent in name, location, founding year and services across all owned pages</li>
          <li>FAQ content addresses questions people actually ask &mdash; not questions you wish they asked</li>
          <li>Claims are specific and verifiable, not generic (&ldquo;the best&rdquo;, &ldquo;leading&rdquo;, &ldquo;innovative&rdquo;)</li>
        </ul>

        <h3>Authority</h3>
        <ul>
          <li>Brand mentioned in at least three to five reputable third-party sources in the past 12 months</li>
          <li>Consistent business information across Google Business Profile, LinkedIn, industry directories</li>
          <li>Schema markup accurately identifies brand, founder, founding date, location, services</li>
          <li>No contradictory information across owned and third-party channels</li>
        </ul>

        <h3>AI representation</h3>
        <ul>
          <li>Brand appears in AI responses for direct brand name queries</li>
          <li>Brand described accurately: correct founding date, services, location, team</li>
          <li>Brand appears in category queries relevant to the business</li>
          <li>No significant hallucinations or competitor misattributions</li>
          <li>All results documented with date for future comparison</li>
        </ul>

        <h2>Tools</h2>
        <p>Most of the technical layer can be audited with standard SEO tools &mdash; Screaming Frog for crawlability, Search Console for indexing, Google&rsquo;s Rich Results Test for structured data. No specialist tool required for the foundation.</p>
        <p>The AI representation layer has no shortcut. You need to run the prompts yourself, across multiple platforms, on multiple days. AI responses vary by session, location and query phrasing. A single snapshot can mislead.</p>
        <p>For ongoing tracking, we use <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">crunchjunkie</a> &mdash; an AI visibility platform that monitors citation frequency, share of voice across platforms, and brand sentiment in AI-generated responses. It&rsquo;s the closest equivalent to Search Console for AI search. We include it in every <a href="/services/visibility-engineering/">Visibility Engineering</a> retainer we run.</p>

        <h2>How often to run one</h2>
        <p>AI search is not a stable environment. Models update, citation behaviour shifts, new platforms emerge. For most businesses: a thorough GEO audit quarterly, a lighter AI representation spot-check monthly.</p>
        <p>Run one immediately if you&rsquo;ve recently rebranded, expanded into a new market, launched a significant new service, or a competitor has recently made noise. The AI landscape is a snapshot of the web at a point in time. If the web has changed, the snapshot needs updating.</p>

        <div className="prose-callout">
          <span className="prose-callout-kicker">The one thing an audit doesn&rsquo;t do</span>
          <p>An audit tells you what&rsquo;s wrong. It doesn&rsquo;t fix anything by itself. For most brands the bottleneck isn&rsquo;t technical &mdash; it&rsquo;s authority. There isn&rsquo;t enough credible external corroboration of what the brand does and who it serves. Fixing that takes time: digital PR, structured content, consistent entity signals, earned mentions. They compound slowly.</p>
          <p>Which is why a well-run GEO audit should feel slightly uncomfortable. If everything looks fine, you probably haven&rsquo;t looked hard enough.</p>
        </div>

        <NeedHelp topic="geo-audit" />
      </>
    ),
  },

  {
    slug: 'performance-max-bidding-change-august-2026',
    image: '/og/performance-max-bidding-change-august-2026.webp',
    imageAlt: 'Google Ads Bidding Target Optimization timeline — 6 July tool, 17 August change',
    toc: ['The change: Bidding Target Optimization', 'Your six-week window', 'The two betas', 'What we\'re doing before August', 'Common questions'],
    faqs: [
      {
        q: 'When does the Performance Max bidding change take effect?',
        a: '17 August 2026. The Bid Target Adjustment Tool arrives on 6 July, giving a roughly six-week window to set targets deliberately before the change applies automatically.',
      },
      {
        q: 'What is Bidding Target Optimization?',
        a: 'A backend bidding change from Google. Budget-limited campaigns that have been beating their Target CPA or Target ROAS get steered back toward the target you set.',
      },
      {
        q: 'Which campaigns does it affect?',
        a: 'Budget-limited Search, Shopping, Performance Max, Demand Gen, Travel and Display. App, Video reach and Video view are out of scope; Hotel and Display already run this way.',
      },
      {
        q: 'Is it opt-out, or do I have to do anything?',
        a: "No opt-out — it applies automatically on 17 August, and Google will not change your targets or budgets for you. Doing nothing usually means a higher cost per conversion.",
      },
      {
        q: 'Will this increase my cost per conversion?',
        a: 'For campaigns beating target, very likely — unless you lower the target before 17 August. The 6 July tool lets you keep, match, or set a custom target.',
      },
    ],
    prose: (
      <>
        <p>On 15 June <a href="https://support.google.com/google-ads/answer/17061251" target="_blank" rel="noopener noreferrer">Google announced three bidding and budgeting changes</a> in a single post. Two are opt-in betas. The third isn&rsquo;t optional, lands automatically on <strong>17 August</strong>, and for a lot of accounts it means a higher cost per conversion. If you run Performance Max, this is the one to read.</p>
        <p>The short version: campaigns that have been <em>beating</em> their Target CPA or Target ROAS are about to be steered back toward the target you actually set. There&rsquo;s a six-week window to act on your own terms first &mdash; and a tool arriving on <strong>6 July</strong> to help you do it.</p>

        <h2>The change: Bidding Target Optimization</h2>
        <p>Right now, a budget-limited campaign can comfortably over-deliver. Google&rsquo;s own teaching example is a campaign set to a $10 Target CPA that&rsquo;s been bringing conversions in at around $5 &mdash; half the target. After 17 August, that campaign aims to deliver <em>closer to the $10 it was set to</em>, instead of carrying on at $5.</p>
        <p>Same logic on the value side: a campaign set to 300% Target ROAS that&rsquo;s been running closer to 400% gets pulled back toward 300%.</p>
        <p>Three things to be clear about, because this is where accounts get caught out:</p>
        <ul>
          <li><strong>It only touches budget-limited campaigns</strong> &mdash; the ones held back by their daily or total budget, not by their target. If a campaign is constrained by the target itself, it isn&rsquo;t the focus.</li>
          <li><strong>It is automatic. It is not opt-out.</strong> Google has said it won&rsquo;t change your targets or budgets for you. Do nothing and the change still lands &mdash; your over-performing campaigns drift toward stale targets, and for most accounts that means a higher cost per conversion.</li>
          <li><strong>It covers most campaign types</strong> &mdash; Performance Max, Search, Shopping, Demand Gen, Travel and Display. App, Video reach and Video view campaigns are out of scope. Hotel and Display already run this way.</li>
        </ul>
        <p>This is the boring-fundamentals stuff: the change rewards accounts whose targets reflect reality and punishes accounts running on numbers nobody has revisited in months. See our <a href="/blog/performance-max-2026/">Performance Max 2026 setup guide</a> for the structural changes that make targeting easier to maintain.</p>

        <h2>Your six-week window &mdash; and the 6 July tool</h2>
        <p>Between <strong>6 July</strong> and <strong>17 August</strong> is the only stretch where you, not the algorithm, decide what happens.</p>
        <p>On 6 July, Google rolls out a <strong>Bid Target Adjustment Tool</strong>, surfaced through account notifications for anyone who has had budget-limited, target-based campaigns in the past 12 months. It shows your historical performance and gives three choices per campaign:</p>
        <ol>
          <li><strong>Keep your current target</strong> &mdash; and accept the pullback toward it on 17 August.</li>
          <li><strong>Match the target to recent performance</strong> &mdash; formalise the lower cost-per-conversion you&rsquo;ve actually been hitting.</li>
          <li><strong>Set a custom target</strong> of your own.</li>
        </ol>
        <p>The real decision underneath all of it is what we call the <em>intention gap</em>: were your conservative targets deliberate, or just out of date?</p>
        <ul>
          <li>If you set a high Target CPA (or a low Target ROAS) <em>on purpose</em> to keep a campaign scaling hard, that lever is about to weaken. Lower the target before 17 August to keep the volume.</li>
          <li>If the targets simply drifted as performance quietly improved, you can accept the change and watch &mdash; the account self-corrects toward numbers you&rsquo;d probably have set anyway.</li>
        </ul>
        <p>Neither answer is wrong. Not having an answer per campaign is.</p>

        <h2>The two betas worth knowing about</h2>
        <p><strong>Smart Bidding Exploration is now live for Performance Max</strong> &mdash; globally, for PMax campaigns without a product feed. For Shopping and PMax with a feed, it&rsquo;s in beta. The feature lets the algorithm bid on queries with no proven conversion history, inside a ROAS-tolerance range, to surface genuinely new demand. Google reports internal lifts in the high teens; treat that as a vendor number until you&rsquo;ve proved it against a clean baseline in your own account.</p>
        <p><strong>Promotion Mode</strong> is a new beta for Search and Performance Max only (not Shopping or Display at launch). It schedules a temporary loosening of your ROAS tolerance plus extra daily budget across a defined window &mdash; a flash sale, a seasonal spike, a launch. It is not the same thing as seasonality adjustments. Don&rsquo;t treat them as interchangeable.</p>
        <p>One bit of housekeeping: Google also renamed two strategies in June with no change in behaviour. &ldquo;Maximize conversions with a Target CPA&rdquo; is now just <strong>Target CPA</strong>; &ldquo;Maximize conversion value with a Target ROAS&rdquo; is now <strong>Target ROAS</strong>. Cosmetic only &mdash; nothing to action.</p>

        <h2>What we&rsquo;re doing before 17 August</h2>
        <p>This is the sequence we&rsquo;re running on the accounts we manage.</p>
        <ol>
          <li><strong>Before 6 July &mdash; set a baseline.</strong> Pull 90 days of CPA/ROAS for every budget-limited campaign and flag the ones consistently beating target. Those are the campaigns the August change touches.</li>
          <li><strong>Separate intention from drift.</strong> For each flagged campaign, write one line: deliberate scaling lever, or stale target? That single call drives everything else.</li>
          <li><strong>From 6 July &mdash; open the Bid Target Adjustment Tool.</strong> Cross-check Google&rsquo;s view against your own. Don&rsquo;t accept the default &mdash; choose keep / match / custom on purpose.</li>
          <li><strong>Lower targets where scale matters.</strong> For the deliberate-lever campaigns, reset the target before 17 August so the algorithm keeps pushing volume.</li>
          <li><strong>Pilot Smart Bidding Exploration</strong> on one or two PMax campaigns and measure incremental conversions &mdash; don&rsquo;t roll it out account-wide on a reported lift alone.</li>
          <li><strong>Pre-build Promotion Mode windows</strong> for known peaks (summer sale, Q4) so you&rsquo;re not configuring under pressure later.</li>
          <li><strong>Diarise 17 August.</strong> Watch CPA/ROAS and spend for the following one to two weeks and correct anything that moved the wrong way.</li>
        </ol>

        <div className="prose-callout">
          <div className="prose-callout-kicker">The bottom line</div>
          <p>This isn&rsquo;t a feature you switch on. It&rsquo;s a behavioural change that arrives on its own on 17 August, and it quietly favours whoever has kept their targets honest. Walk in with a per-campaign plan and you keep both your efficiency and your scale. Walk in with targets nobody has looked at since spring and you&rsquo;ll likely watch your cost per conversion drift upward.</p>
        </div>

        <p>Related: <a href="/blog/performance-max-2026/">Performance Max in 2026 &mdash; the settings we change first</a> &middot; <a href="/blog/cookieless-tracking/">Cookieless tracking: what changed and what to do</a></p>
        <NeedHelp topic="performance-max-bidding-change-august-2026" />
      </>
    ),
  },

  {
    slug: 'perplexity-visibility',
    toc: ['What is Perplexity visibility?', 'Why Perplexity is its own problem', 'Five moves for this month', 'How pmax can help', 'Frequently asked questions'],
    faqs: [
      {
        q: 'How do I get my business cited by Perplexity?',
        a: 'Make sure PerplexityBot can crawl your site, publish answer-first content that\'s easy to quote, and earn mentions on the third-party sources Perplexity trusts — Wikipedia, established review sites, reputable publications and relevant Reddit threads. Then measure monthly and keep going.',
      },
      {
        q: 'Why doesn\'t my company appear in Perplexity even though it ranks on Google?',
        a: 'Because they\'re different systems. Perplexity favours pages it can fetch live and quote cleanly, and it leans on a narrow set of trusted domains for validation. A page can rank on Google yet still be hard to crawl, hard to quote, or unsupported by the third-party signals Perplexity looks for.',
      },
      {
        q: 'Is Perplexity visibility the same as ChatGPT visibility?',
        a: 'No. The domains each engine cites overlap surprisingly little, so the two need separate baselines and, often, separate tactics. Showing up in one doesn\'t carry over to the other.',
      },
      {
        q: 'How long does Perplexity visibility take?',
        a: 'Technical and structural fixes can show up within weeks because Perplexity re-crawls and re-answers continuously. Building the third-party trust that makes citations reliable typically takes around two to three months of steady work.',
      },
    ],
    prose: (
      <>
        <p>A client said something to us recently that stuck: &ldquo;We finally show up in ChatGPT &mdash; but my co-founder uses Perplexity all day and we&rsquo;re nowhere.&rdquo; That gap is real, and it surprises people. Being recommended by one AI answer engine does almost nothing to guarantee you&rsquo;ll be recommended by the next one.</p>
        <p>This is a short, practical guide &mdash; no jargon, no scaremongering. By the end you&rsquo;ll know what Perplexity visibility is, why it&rsquo;s a separate problem from ChatGPT, and the five things any business can start doing this month to get cited.</p>

        <h2>What is Perplexity visibility?</h2>
        <p>When someone asks Perplexity &ldquo;what&rsquo;s the best digital marketing agency in Mallorca?&rdquo; or &ldquo;compare three solar installers in Spain,&rdquo; it writes an answer and footnotes it with numbered citations &mdash; the specific web pages it pulled from. Perplexity visibility is the practice of making sure your business is one of those cited sources, and ideally one of the names in the answer itself.</p>
        <p>It sits under the same umbrella as generative engine optimisation (GEO), but the mechanics are Perplexity&rsquo;s own. The classic SEO foundations still apply &mdash; they&rsquo;re the floor, not the ceiling.</p>

        <h2>Why Perplexity is its own problem</h2>
        <p>The temptation is to treat &ldquo;AI visibility&rdquo; as one job. It isn&rsquo;t. Perplexity differs from ChatGPT in three ways that change what you actually do:</p>
        <ol>
          <li><strong>It&rsquo;s retrieval-first.</strong> Perplexity runs a live web search for almost every question and builds its answer from what it finds right now, with visible citations. It leans less on what a model &ldquo;remembers&rdquo; and more on what&rsquo;s crawlable, current, and quotable today. Fresh, well-structured pages matter more here than almost anywhere else.</li>
          <li><strong>The overlap with ChatGPT is small.</strong> In our own baselining, and in independent analyses comparing tens of thousands of prompts, the set of domains Perplexity cites barely overlaps with the set ChatGPT cites &mdash; often only around one in ten. You can dominate one and be invisible in the other. That&rsquo;s why &ldquo;we&rsquo;re in ChatGPT&rdquo; tells you nothing about Perplexity.</li>
          <li><strong>Citations carry direct value.</strong> Because Perplexity shows its sources prominently and people click them, a citation isn&rsquo;t a vanity metric &mdash; it&rsquo;s a referral with measurable traffic attached.</li>
        </ol>

        <h2>Five moves for this month</h2>
        <h3>1. Baseline in Perplexity specifically</h3>
        <p>Spend an hour running 20 real buying questions through Perplexity itself &mdash; not ChatGPT, not Gemini. Use the questions a real customer would type: &ldquo;best X in Y for budget Z,&rdquo; &ldquo;compare A and B.&rdquo; Write down which competitors get named and which pages get cited. That list is your starting line, and it will look different from your ChatGPT baseline.</p>
        <h3>2. Let PerplexityBot crawl you</h3>
        <p>Because Perplexity is retrieval-first, a page it can&rsquo;t fetch is a page it can&rsquo;t cite. Check that your <code>robots.txt</code> doesn&rsquo;t block <code>PerplexityBot</code> or <code>Perplexity-User</code>, that key pages return clean 200s, and that your important content isn&rsquo;t locked behind scripts a crawler won&rsquo;t run. This is unglamorous and it&rsquo;s the single most common reason a good page never gets surfaced.</p>
        <h3>3. Write answer-first, in chunks</h3>
        <p>Perplexity lifts content in pieces, so structure for that. Put the direct answer in the first one or two sentences under each heading, before the context. Use short paragraphs, clear lists, and a comparison table where one fits. A page that opens with &ldquo;The three best options are&hellip;&rdquo; is far easier to quote than one that warms up for four paragraphs first.</p>
        <h3>4. Get cited where Perplexity already trusts</h3>
        <p>Perplexity weights a relatively small circle of sources heavily &mdash; Wikipedia and Wikidata for entity facts, established review platforms (G2, Capterra, Trustpilot), reputable industry publications, and notably Reddit, which is one of its most-cited domains. Earning honest mentions in that circle does more for your Perplexity visibility than another page on your own site. PR built on verifiable claims is what wins these.</p>
        <h3>5. Measure monthly</h3>
        <p>Re-run the same 20 prompts every month. Track which answers now name you and which still don&rsquo;t. <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">CrunchJunkie</a> can automate this across engines &mdash; or do it by hand in a spreadsheet. What you don&rsquo;t measure, you can&rsquo;t move.</p>

        <div className="prose-callout">
          <div className="prose-callout-kicker">The honest version</div>
          <p>Perplexity visibility is earned, not hacked. Because the engine is retrieval-first, you sometimes see movement faster than with other platforms once the crawl and structure are fixed &mdash; but a durable presence still takes a couple of months of consistent work on content, structure and third-party trust. Anyone promising you instant citations is selling something.</p>
        </div>

        <h2>How pmax can help</h2>
        <p>We run AI visibility programmes for businesses across Europe, and we treat Perplexity, ChatGPT and Google&rsquo;s AI Overviews as separate surfaces with separate scorecards &mdash; because they are. That means a per-engine audit, the technical groundwork, content and PR, and monthly measurement you can actually read. If you&rsquo;d like a free one-page Perplexity visibility snapshot for your brand, <a href="/contact/?topic=perplexity-audit">tell us a bit about your situation</a> and we&rsquo;ll send it back within a week.</p>

        <h2>Frequently asked questions</h2>
        <h3>How do I get my business cited by Perplexity?</h3>
        <p>Make sure PerplexityBot can crawl your site, publish answer-first content that&rsquo;s easy to quote, and earn mentions on the third-party sources Perplexity trusts &mdash; Wikipedia, established review sites, reputable publications and relevant Reddit threads. Then measure monthly and keep going.</p>
        <h3>Why doesn&rsquo;t my company appear in Perplexity even though it ranks on Google?</h3>
        <p>Because they&rsquo;re different systems. Perplexity favours pages it can fetch live and quote cleanly, and it leans on a narrow set of trusted domains for validation. A page can rank on Google yet still be hard to crawl, hard to quote, or unsupported by the third-party signals Perplexity looks for.</p>
        <h3>Is Perplexity visibility the same as ChatGPT visibility?</h3>
        <p>No. The domains each engine cites overlap surprisingly little, so the two need separate baselines and, often, separate tactics. Showing up in one doesn&rsquo;t carry over to the other.</p>
        <h3>How long does Perplexity visibility take?</h3>
        <p>Technical and structural fixes can show up within weeks because Perplexity re-crawls and re-answers continuously. Building the third-party trust that makes citations reliable typically takes around two to three months of steady work.</p>

        <h2>Further reading</h2>
        <ul>
          <li><a href="/services/ai-visibility/">Our AI visibility service</a> &mdash; what a full programme includes</li>
          <li><a href="/blog/how-to-get-mentioned-by-chatgpt/">How to get your business recommended by ChatGPT</a> &mdash; the companion guide for the other big engine</li>
          <li><a href="/blog/gpt-shopping/">What &ldquo;ChatGPT shopping&rdquo; means for e-commerce in 2026</a></li>
        </ul>
      </>
    ),
  },

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
          <li><strong>People use AI to research before they buy.</strong> Research suggests the majority of buyer journeys now pass through at least one AI answer surface before a purchase decision is made.</li>
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
        <p>Re-run those same 20 prompts every month. Track which mentions appear, in what context, with what sentiment. <a href="https://crunchjunkie.io/" target="_blank" rel="noopener noreferrer">CrunchJunkie</a> can automate this &mdash; or you can do it manually for a few hours a month. Either way: if you don&rsquo;t measure it, you can&rsquo;t improve it.</p>
        <div className="prose-callout">
          <div className="prose-callout-kicker">The honest version</div>
          <p>AI search visibility isn&rsquo;t a hack. It&rsquo;s earned. Most businesses will see their first reliable citations in 8&ndash;12 weeks of disciplined work. Anyone promising you faster than that is selling you a story &mdash; or doing something that&rsquo;ll get you delisted later.</p>
        </div>
        <h2>What pmax can do, if you want help</h2>
        <p>We run AI visibility programmes for businesses across Europe &mdash; the full audit, the technical foundations, the content and PR support, and the monthly measurement. If you&rsquo;d like a free one-page audit of where your business stands in ChatGPT, Perplexity and Gemini today, <a href="/contact/?topic=ai-audit">tell us a bit about you</a> and we&rsquo;ll send it back within a week.</p>
        <h2>Further reading</h2>
        <ul>
          <li><a href="/services/ai-visibility/">Our AI visibility service page</a> &mdash; what&rsquo;s actually inside a programme</li>
          <li><a href="/blog/perplexity-visibility/">How to improve your Perplexity visibility</a> &mdash; Perplexity is retrieval-first and needs its own tactics</li>
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
        <p>Related: <a href="/services/google-ads/">our Google Ads &amp; Performance Max service</a> &mdash; and how PMax fits into the wider <a href="/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/">Google vs Meta vs TikTok channel mix</a>. Also see the <a href="/blog/performance-max-bidding-change-august-2026/">August 2026 bidding change</a> &mdash; what to do before 17 August.</p>
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
        <p><a href="https://www.facebook.com/business/news/insights/high-quality-creative-increases-ad-roi" target="_blank" rel="noopener noreferrer">Meta&rsquo;s own research</a> says creative is the single biggest driver of paid social performance. Most brands&rsquo; creative pipelines were built for a world where it was not. Here is how to build one that fits 2026.</p>
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
        <p>Related: <a href="/blog/creative-testing-framework/">how to structure creative tests so the learnings actually compound</a>, our <a href="/services/paid-social/">paid social service</a> &mdash; and <a href="/blog/pinterest-ads-home-interiors-local-2026/">when Pinterest Ads are worth adding to the mix</a>.</p>
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
        <p>See our <a href="/services/google-ads/">Google Ads &amp; Performance Max service</a> &mdash; built for Mallorca&rsquo;s multilingual, seasonal demand. Running campaigns across Spain more broadly? See our <a href="/google-ads-agency-spain/">Google Ads agency in Spain</a> page. Want paid search, SEO and paid social under one retainer? See our <a href="/marketing-agency-mallorca/">marketing agency in Mallorca</a> overview.</p>
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
        <p>We used <a href="/services/conversion-design/">conversion design (CRO)</a>, <a href="/services/google-ads/">Google Ads</a> and <a href="/services/paid-social/">Meta Ads</a> to get there. More in our <a href="/industries/hospitality/">hospitality marketing playbook</a> and <a href="/cases/">client cases</a>. Based in Mallorca and want the full package? See our <a href="/marketing-agency-mallorca/">marketing agency in Mallorca</a> page.</p>
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
        <p>Related: our <a href="/services/paid-social/">paid social service</a> and <a href="/services/creative/">creative production</a>, our <a href="/industries/ecommerce/">e-commerce marketing playbook</a>, <a href="/blog/meta-creative-volume/">how to build a creative pipeline for Meta</a> (the principles are identical on TikTok) &mdash; and <a href="/blog/pinterest-ads-home-interiors-local-2026/">who Pinterest Ads work for</a> if visual planning is in your mix.</p>
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
        <p>More in our <a href="/industries/renewables/">renewables &amp; cleantech marketing playbook</a>. For Spain-specific paid search strategy, see our <a href="/google-ads-agency-spain/">Google Ads agency in Spain</a> page.</p>
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
        <p>More in our <a href="/industries/boating/">boating &amp; yachting marketing playbook</a>. For charter businesses operating from Mallorca, see our <a href="/marketing-agency-mallorca/">marketing agency in Mallorca</a> page — multilingual campaigns across paid search, paid social and SEO from Calvià.</p>
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
        <p>A 93% twelve-month client retention rate, and an inbound pipeline made almost entirely of referrals. The slow way works. See our <a href="/cases/">client cases</a>, or our <a href="/marketing-agency-mallorca/">marketing agency in Mallorca</a> page if you want to understand how we scope and price a full-service retainer.</p>
        <NeedHelp topic="agency-pricing-honest" />
      </>
    ),
  },
  {
    slug: 'pinterest-ads-home-interiors-local-2026',
    toc: ["Can anyone run them?", "Who it's for", "Window coverings fit", "Retargeting", "Cross-platform play", "Creative rules", "What it costs", "The verdict", "FAQs"],
    faqs: [
      { q: 'Can anyone run Pinterest Ads?', a: 'Almost. You need a free Pinterest business account and a verifiable website, and Ads Manager is self-serve — so a solo owner can launch without an agency. The one real gate is geography: Pinterest Ads aren\'t available in every country, though they are across most of Europe including Spain, Germany, the UK and the wider EU.' },
      { q: 'Who do Pinterest Ads actually work for?', a: 'Visually-planned, considered purchases: home decor and interiors, window coverings and furniture, weddings, fashion and beauty, food and DIY, travel. The common thread is people planning a future purchase weeks in advance. Impulse, commodity and price-led categories tend to underperform.' },
      { q: 'How does Pinterest retargeting work?', a: 'Install the Pinterest tag (or Conversions API) and you can retarget site visitors, upload a hashed customer list (minimum ~100 matches), retarget people who engaged with your organic Pins, build actalike audiences, and run dynamic retargeting that shows people the exact products they viewed from a catalog feed.' },
      { q: 'Can a local business with one showroom use Pinterest Ads?', a: 'Yes. Geo-target delivery to the showroom\'s city, postal codes or a radius around the store, and use location-specific creative — ideally with the store address on it. Pinterest works best as one layer of a cross-platform retargeting strategy alongside YouTube video and static display.' },
      { q: 'How much do Pinterest Ads cost in 2026?', a: 'Cheap on a media basis: CPC typically €0.10–€1.50, CPM around €2–€5. The low cost is a double-edged sword — it\'s easy to spend on reach that never converts, so cost per acquisition (or per qualified showroom visit) is the only number that matters.' },
    ],
    prose: (
      <>
        <p><strong>&ldquo;Can anybody run Pinterest Ads?&rdquo;</strong> is the question we get. The short answer is yes &mdash; and that&rsquo;s exactly why most people who run them shouldn&rsquo;t. The platform is self-serve, the media is cheap, and the barrier to entry is almost nothing. None of which tells you whether it&rsquo;ll work for <em>your</em> business. This post answers the question people should actually be asking: who is Pinterest genuinely good for, and how do you run it so it pays back?</p>

        <h2 id="can-anyone">Can anybody run Pinterest Ads? Technically, almost.</h2>
        <p>Three things stand between you and a live Pinterest campaign, and only one of them is a real gate.</p>
        <ul>
          <li><strong>A free Pinterest business account.</strong> Five minutes. Anyone can create one.</li>
          <li><strong>A verified website.</strong> A small DNS or meta-tag step. Not a barrier.</li>
          <li><strong>Availability in your country.</strong> This is the only real gate. Pinterest Ads aren&rsquo;t live in every region &mdash; but they <em>are</em> available across most of Europe, including Spain, Germany, Austria, the UK and the wider EU. If you open Ads Manager and see a &ldquo;not available in your region&rdquo; message, that&rsquo;s your blocker. Otherwise, you&rsquo;re clear.</li>
        </ul>
        <p>Notice what&rsquo;s <em>not</em> on that list: budget minimums, business size, an agency. A solo founder with &euro;300 a month and a verified site can launch a Pinterest campaign this afternoon. The platform&rsquo;s algorithm rewards good creative and tight targeting over raw spend, which is genuinely refreshing.</p>

        <div className="cmp-takeaway">
          <span className="k">The take</span>
          <p><strong>&ldquo;Can I run Pinterest Ads&rdquo; is the wrong question.</strong> Anyone can. The right question is whether the people who buy what you sell use Pinterest to plan that purchase. For some categories the answer is an emphatic yes. For others, you&rsquo;ll spend cheap money on attention that never converts.</p>
        </div>

        <h2 id="who-its-for">Who Pinterest actually works for</h2>
        <p>Pinterest is a visual planning engine. People come to it to plan a future project &mdash; a renovation, a wedding, a wardrobe, a dinner, a holiday &mdash; usually weeks before they buy. That single behavioural fact decides who wins on the platform and who wastes money.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Category</th><th>Pinterest fit</th><th>Why</th></tr></thead>
            <tbody>
              <tr><th>Home decor &amp; interiors</th><td><span className="pill pill-good">Excellent</span></td><td>The native Pinterest category. Window coverings, furniture, lighting, paint &mdash; all planned visually, weeks ahead.</td></tr>
              <tr><th>Weddings &amp; events</th><td><span className="pill pill-good">Excellent</span></td><td>The longest planning window of any consumer purchase. Pinterest is the default mood-board.</td></tr>
              <tr><th>Fashion, beauty &amp; jewellery</th><td><span className="pill pill-good">Strong</span></td><td>Highly visual, aspirational, save-and-return behaviour.</td></tr>
              <tr><th>Food, recipes &amp; DIY</th><td><span className="pill pill-good">Strong</span></td><td>Save-for-later intent; great for content-led brands.</td></tr>
              <tr><th>Travel &amp; hospitality</th><td><span className="pill pill-mid">Good</span></td><td>Strong for inspiration, weaker on direct booking attribution.</td></tr>
              <tr><th>B2B &amp; SaaS</th><td><span className="pill pill-mid">Niche</span></td><td>Lower volume, but the B2B users who are there show real intent. Rarely a primary channel.</td></tr>
              <tr><th>Impulse / commodity / price-led</th><td><span className="pill pill-bad">Weak</span></td><td>Wrong mindset. Pinterest users are planning, not impulse-buying.</td></tr>
            </tbody>
          </table>
        </div>

        <p>If you sell anything in the top two rows, Pinterest deserves a test budget before almost any other &ldquo;secondary&rdquo; channel. If you&rsquo;re in the bottom row, put the money into Google and Meta and come back to Pinterest later &mdash; or never.</p>

        <h2 id="window-coverings">Why a window-coverings showroom is closer to the sweet spot than most ecommerce</h2>
        <p>Here&rsquo;s the part most guides miss. Pinterest&rsquo;s single strongest category &mdash; interiors and home decor &mdash; is dominated by exactly the kind of considered, high-consideration, visually-planned purchase that a blinds, awnings or shutters business sells. Someone planning new window coverings will spend weeks saving rooms they like before they ever call a showroom. That&rsquo;s not an edge case for Pinterest; it&rsquo;s the core use of the platform.</p>
        <p>Which makes the local showroom an unusually good fit. The buyer is already on Pinterest, already in planning mode, already saving the aesthetic you sell. The job isn&rsquo;t to create demand &mdash; it&rsquo;s to be present, locally, while they plan, and to bring them back once they&rsquo;ve visited your site or showroom.</p>

        <div className="cmp-quote">&ldquo;For interiors and window coverings, Pinterest isn&rsquo;t a demand-generation channel. It&rsquo;s a demand-capture channel that happens to look like inspiration.&rdquo;</div>

        <h2 id="retargeting">How Pinterest retargeting actually works</h2>
        <p>Retargeting is where Pinterest earns its keep for considered purchases, because the planning window is so long that a single touch is almost never enough. There are five mechanisms, and most brands use one and ignore the rest.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Audience type</th><th>What it does</th><th>Setup requirement</th></tr></thead>
            <tbody>
              <tr><th>Site-visitor retargeting</th><td>Re-reach people who visited your website or specific product/landing pages.</td><td>Pinterest tag (or Conversions API) installed across the site.</td></tr>
              <tr><th>Customer-list targeting</th><td>Upload hashed emails or mobile ad IDs to target &mdash; or exclude &mdash; existing customers.</td><td>CSV of hashed contacts; minimum ~100 matches to activate.</td></tr>
              <tr><th>Engagement audiences</th><td>Reach people who saved, clicked or watched your organic Pins or ads.</td><td>A confirmed domain and organic Pin activity.</td></tr>
              <tr><th>Actalike audiences</th><td>Pinterest&rsquo;s lookalike &mdash; find new users similar to your best existing customers.</td><td>A source audience (customers, site visitors or engagers).</td></tr>
              <tr><th>Dynamic retargeting</th><td>Show people the exact products they viewed, pulled live from a catalog feed.</td><td>Catalog feed + Pinterest tag tracking Checkout, AddToCart and PageVisit events. Catalog Sales objective. Not available on Search placement.</td></tr>
            </tbody>
          </table>
        </div>

        <p>For a product-feed business, dynamic retargeting is the highest-ROI of the five &mdash; it shows people the precise blind, sofa or lamp they already looked at, with live pricing. For a local showroom without an ecommerce catalog, site-visitor retargeting plus engagement audiences do the heavy lifting, with actalike audiences layered on once you have enough source data.</p>

        <div className="cmp-takeaway">
          <span className="k">The take</span>
          <p><strong>Install the Pinterest tag before you spend a euro.</strong> Without it you have no site-visitor audiences, no dynamic retargeting, no conversion data, and no way to know whether any of this worked. The brands that fail on Pinterest almost always skipped this step and judged the platform on prospecting alone.</p>
        </div>

        <h2 id="cross-platform">The cross-platform retargeting play &mdash; Pinterest, YouTube and static, together</h2>
        <p>This is where it gets genuinely useful for a local business. Take a local Luxaflex dealer with a showroom. They already run static display retargeting to people who visited the website. The instinct &mdash; a good one &mdash; is to add <em>video</em> retargeting on YouTube using new showroom footage and brand imagery that carries the store&rsquo;s actual address. Pinterest is the third layer of that same idea.</p>
        <p>The logic is simple: one platform&rsquo;s retargeting is a poke. Three platforms, coordinated, is a presence. A person who visited the showroom site once will see, over the following weeks:</p>
        <ul>
          <li><strong>On YouTube</strong> &mdash; short showroom video footage, the products in a real room, the store&rsquo;s address on-screen. Video does what static can&rsquo;t: it shows the showroom as a place you&rsquo;d actually walk into.</li>
          <li><strong>On Pinterest</strong> &mdash; the same rooms as saveable, planning-friendly pins, geo-targeted to the showroom&rsquo;s catchment, while the buyer is actively planning.</li>
          <li><strong>On static display</strong> &mdash; the always-on reminder that keeps the brand present between the bigger touchpoints.</li>
        </ul>
        <p>The address on the creative is the quiet detail that makes this local. Putting the store address &mdash; and ideally a &ldquo;visit the showroom&rdquo; call to action &mdash; on the video and the pin turns a brand asset into a local one.</p>

        <div className="cmp-takeaway">
          <span className="k">The local detail that matters</span>
          <p><strong>Geo-target everything to the showroom&rsquo;s catchment.</strong> Pinterest lets you narrow delivery to cities, postal codes or a radius around the store. There&rsquo;s no point retargeting someone 400&nbsp;km away with footage of a showroom they&rsquo;ll never visit. Tight geo-targeting plus address-on-creative is what turns a brand campaign into a footfall campaign.</p>
        </div>

        <h2 id="creative">Creative &mdash; what Pinterest rewards, and what gets rejected</h2>
        <p>Pinterest is the least tolerant of the major platforms when it comes to &ldquo;ad-looking&rdquo; ads. It&rsquo;s a discovery environment; people are there to plan, not to be sold to. Creative that respects that gets approved fast and performs.</p>
        <ul>
          <li><strong>Vertical, 1000&times;1500px (2:3).</strong> The platform is built for it.</li>
          <li><strong>Minimal text overlay.</strong> Pinterest prefers clean images. Short phrases only; a crowded, sales-heavy image hurts both approval and performance.</li>
          <li><strong>Warm, natural lighting; real rooms.</strong> Lifestyle context beats product-on-white every time in interiors.</li>
          <li><strong>Logo present but quiet.</strong> Branded, not branded-shouty.</li>
          <li><strong>Idea-focused, not aggressive.</strong> &ldquo;Here&rsquo;s a room you could have&rdquo; outperforms &ldquo;50% off this weekend only&rdquo;.</li>
          <li><strong>A landing page that matches the pin.</strong> Pinterest reviews the whole journey. A mismatch between ad and page is the most common rejection reason.</li>
        </ul>

        <h2 id="what-it-costs">What it costs, and the trap that comes with it</h2>
        <p>Pinterest is cheap on a media basis &mdash; cost per click typically around &euro;0.10&ndash;&euro;1.50, CPM around &euro;2&ndash;&euro;5, depending on format, targeting and competition. That&rsquo;s a fraction of Google Search and often below Meta.</p>
        <p>The cheap media is exactly the trap. Low cost makes it dangerously easy to spend on reach that feels productive and converts nothing. <strong>Cost per acquisition &mdash; or for a showroom, cost per qualified visit or enquiry &mdash; is the only number that decides whether Pinterest stays in the mix.</strong> Track it from day one, which means the tag goes on before the budget goes live.</p>

        <h2 id="verdict">The honest verdict</h2>
        <p>Pinterest Ads in 2026 are genuinely good for a specific, identifiable set of businesses: home and interiors, weddings, fashion, food, DIY &mdash; anything bought through visual planning over a long window. For those, it&rsquo;s one of the most underpriced channels in paid media, and the retargeting tools are better than its &ldquo;inspiration platform&rdquo; reputation suggests. For a local interiors or window-coverings showroom, it&rsquo;s not a long shot at all &mdash; it&rsquo;s close to the platform&rsquo;s core use, and it slots neatly into a cross-platform retargeting strategy alongside YouTube video and static display.</p>
        <p>For everyone else &mdash; commodity ecommerce, impulse products, most B2B, anything price-led &mdash; it&rsquo;s a &ldquo;maybe later&rdquo; channel. Run Google and Meta properly first.</p>

        <h2 id="faqs">Frequently asked questions</h2>
        <details className="cmp-faq" open>
          <summary>Can anyone run Pinterest Ads?</summary>
          <p>Almost. You need a free Pinterest business account and a verifiable website, and Ads Manager is self-serve &mdash; so a solo owner can launch without an agency. The one real gate is geography: Pinterest Ads aren&rsquo;t available in every country, though they are across most of Europe including Spain, Germany, the UK and the wider EU.</p>
        </details>
        <details className="cmp-faq">
          <summary>Who do Pinterest Ads actually work for?</summary>
          <p>Visually-planned, considered purchases: home decor and interiors, window coverings and furniture, weddings, fashion and beauty, food and DIY, travel. The common thread is people planning a future purchase weeks in advance. Impulse, commodity and price-led categories tend to underperform.</p>
        </details>
        <details className="cmp-faq">
          <summary>How does Pinterest retargeting work?</summary>
          <p>Install the Pinterest tag (or Conversions API) and you can retarget site visitors, upload a hashed customer list (minimum ~100 matches), retarget people who engaged with your organic Pins, build actalike audiences, and run dynamic retargeting that shows people the exact products they viewed from a catalog feed.</p>
        </details>
        <details className="cmp-faq">
          <summary>Can a local business with one showroom use Pinterest Ads?</summary>
          <p>Yes. Geo-target delivery to the showroom&rsquo;s city, postal codes or a radius around the store, and use location-specific creative &mdash; ideally with the store address on it. For a local showroom, Pinterest works best as one layer of a cross-platform retargeting strategy alongside YouTube video and static display.</p>
        </details>
        <details className="cmp-faq">
          <summary>How much do Pinterest Ads cost in 2026?</summary>
          <p>Cheap on a media basis: CPC typically &euro;0.10&ndash;&euro;1.50, CPM around &euro;2&ndash;&euro;5. The low cost is a double-edged sword &mdash; it&rsquo;s easy to spend on reach that never converts, so cost per acquisition (or per qualified showroom visit) is the only number that matters.</p>
        </details>

        <h2 id="closing">Want help deciding if Pinterest fits your business?</h2>
        <p>We run paid media &mdash; Google, Meta, Microsoft, TikTok and Pinterest &mdash; for brands across Europe, and we&rsquo;ll tell you honestly whether Pinterest belongs in your mix or whether the budget is better spent elsewhere. <a href="/contact/?topic=pinterest-ads">Book a free 30-minute call</a>. No deck, no sales pitch.</p>
        <p>Related: our <a href="/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/">Google Ads vs Meta vs TikTok comparison for ecommerce</a> and our <a href="/services/paid-social/">paid social service</a>.</p>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Last updated 1 June 2026 &middot; Reviewed monthly &middot; pmax &middot; Calvi&agrave;, Mallorca</p>
      </>
    ),
  },
  {
    slug: 'google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026',
    toc: ['TL;DR', 'CPC & CPM', 'High vs low AOV', 'Attribution', 'Creative load', 'Scaling difficulty', 'Remarketing', 'When PMax wins / loses', 'The honest mix', 'FAQs'],
    prose: (
      <>
        <p><strong>If you sell something online in 2026, you are running at least one of these three: Google Ads, Meta Ads, TikTok Ads.</strong> Most ecommerce brands run all three at once, with no honest framework for deciding which one deserves the next euro. This post is that framework &mdash; built from roughly &euro;2.1M of pmax-managed ecommerce spend in Q1 2026, across 14 active retainers in the EU and UK.</p>
        <p>It is opinionated. It will not flatter every platform. Skip to the comparison table if you want the answer in 30 seconds.</p>

        <h2 id="tldr">TL;DR &mdash; the one-line answer per platform</h2>
        <ul>
          <li><strong>Google Ads</strong> is the cheapest place to find someone who already wants what you sell.</li>
          <li><strong>Meta Ads</strong> is the cheapest place to create demand at scale, if you can ship the creative volume.</li>
          <li><strong>TikTok Ads</strong> is the cheapest CPM in the room &mdash; and the easiest place to lose money if your creative iteration speed is slow.</li>
        </ul>
        <p>Everything below is the longer version of those three sentences.</p>

        <h2 id="cpc-cpm">CPC and CPM in the wild &mdash; what we actually pay in 2026</h2>
        <p>Reported benchmarks are useless because the variance is enormous. What follows is the median range across our active EU ecommerce accounts in Q1 2026 &mdash; not theoretical, not platform-published, just what came out of the spend reports.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Metric (EU median, Q1 2026)</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>CPM (&euro;)</th><td>&euro;15&ndash;&euro;55 Shopping &middot; &euro;30&ndash;&euro;120 brand search</td><td>&euro;8&ndash;&euro;18 prospecting &middot; &euro;18&ndash;&euro;35 retargeting</td><td>&euro;3&ndash;&euro;8 prospecting</td></tr>
              <tr><th>CPC (&euro;)</th><td>&euro;0.40&ndash;&euro;2.20 Shopping &middot; &euro;1.20&ndash;&euro;6.50 brand search</td><td>&euro;0.35&ndash;&euro;1.10</td><td>&euro;0.18&ndash;&euro;0.55</td></tr>
              <tr><th>CTR</th><td>3.5%&ndash;9% Shopping</td><td>0.9%&ndash;2.2%</td><td>0.6%&ndash;1.5%</td></tr>
              <tr><th>Median conversion rate from click</th><td>2.4%&ndash;5.8%</td><td>0.9%&ndash;2.2%</td><td>0.4%&ndash;1.4%</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>What this actually means:</strong> a Google Shopping click is 4&ndash;8&times; more expensive than a TikTok click, but it is also 4&ndash;10&times; more likely to convert. CPM is the wrong unit for ecommerce. CPA (or, better, CAC payback) is the only honest one.</p>

        <div className="cmp-takeaway">
          <span className="k">The take</span>
          <p><strong>If you only judge channels on CPM, you will end up overspending on TikTok and underspending on Google.</strong> Reach is not the goal. Bought attention from people who can afford and want the product is the goal.</p>
        </div>

        <h2 id="aov">High AOV vs low AOV &mdash; the under-discussed lever</h2>
        <p>The platform that wins depends on your average order value almost as much as your category.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Average order value</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>&euro;20&ndash;&euro;60 (impulse)</th><td><span className="pill pill-mid">Mid</span> Margins eaten by CPC</td><td><span className="pill pill-good">Good</span> Sweet spot for Advantage+</td><td><span className="pill pill-good">Good</span> Native viral path</td></tr>
              <tr><th>&euro;60&ndash;&euro;200 (considered)</th><td><span className="pill pill-good">Good</span> Best fit overall</td><td><span className="pill pill-good">Good</span> Strong with creative</td><td><span className="pill pill-mid">Mid</span> Needs heavy iteration</td></tr>
              <tr><th>&euro;200&ndash;&euro;800 (deliberate)</th><td><span className="pill pill-good">Excellent</span> Brand search dominates</td><td><span className="pill pill-mid">Mid</span> Long consideration windows</td><td><span className="pill pill-bad">Weak</span> Wrong intent</td></tr>
              <tr><th>&euro;800+ (luxury / B2B-leaning)</th><td><span className="pill pill-good">Excellent</span> Microsoft Ads also relevant</td><td><span className="pill pill-mid">Mid</span> Long sales cycles</td><td><span className="pill pill-bad">Weak</span> Audience mismatch</td></tr>
            </tbody>
          </table>
        </div>

        <p>The pattern: the higher the AOV, the more the channel that captures intent (Google) beats the channel that creates demand (Meta, TikTok). Past about &euro;200 AOV, TikTok is almost never profitable unless the brand is a viral phenomenon already.</p>

        <h2 id="attribution">Attribution differences &mdash; what each platform over-claims</h2>
        <p>All three platforms over-attribute conversions to themselves. They differ in how much, and how easily you can correct.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Attribution attribute</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>Default click window</th><td>30-day click, 1-day view</td><td>7-day click, 1-day view</td><td>7-day click, 1-day view</td></tr>
              <tr><th>Server-side fix</th><td>Enhanced Conversions + offline import</td><td>CAPI + offline events</td><td>Events API (still maturing)</td></tr>
              <tr><th>Over-claim severity (our QoQ measurement)</th><td>~15&ndash;25%</td><td>~25&ndash;40%</td><td>~35&ndash;55%</td></tr>
              <tr><th>CRM-fed offline conversions</th><td><span className="pill pill-good">Mature</span> robust API, daily import</td><td><span className="pill pill-good">Mature</span> CAPI Gateway available</td><td><span className="pill pill-mid">Partial</span> Events API + offline beta</td></tr>
              <tr><th>Honesty score (subjective)</th><td>6/10</td><td>4/10</td><td>3/10</td></tr>
            </tbody>
          </table>
        </div>

        <p>If you only have time to fix one thing on each platform in 2026: enable <strong>Enhanced Conversions on Google</strong>, set up <strong>CAPI for Meta</strong>, and wire the <strong>Events API for TikTok</strong>. Without those three, every report you read is lying by a measurable percentage.</p>

        <p className="cmp-quote">&ldquo;In 2026, attribution is no longer a reporting problem. It is the entire performance gap.&rdquo;</p>

        <h2 id="creative">Creative requirements &mdash; what each platform actually consumes</h2>
        <p>This is the single biggest reason brands fail on Meta and TikTok. The platforms are creative-hungry; the brands are not.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Creative requirement</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>Production cadence to stay efficient</th><td>1&ndash;3 new assets per quarter</td><td>10&ndash;20 fresh assets per <em>week</em></td><td>15&ndash;30 fresh native assets per <em>week</em></td></tr>
              <tr><th>Format complexity</th><td>Mostly automated (PMax)</td><td>Mid &mdash; feed-native</td><td>High &mdash; full-screen vertical only</td></tr>
              <tr><th>Best-performing creative type</th><td>Product feed + responsive text</td><td>UGC-style video, founder-led</td><td>Native-language UGC, hook-led</td></tr>
              <tr><th>Cost per asset (production)</th><td>&euro;50&ndash;&euro;300</td><td>&euro;80&ndash;&euro;400</td><td>&euro;150&ndash;&euro;800 (or in-house)</td></tr>
              <tr><th>Creative fatigue window</th><td>3&ndash;6 months</td><td>2&ndash;4 weeks</td><td>5&ndash;14 days</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cmp-takeaway">
          <span className="k">The take</span>
          <p><strong>If your brand cannot ship 10 fresh Meta-format assets per week, do not start Meta Ads.</strong> If you cannot ship 15 native TikTok-format assets per week, do not start TikTok. We say this politely to clients and they almost never listen the first time. Then we have the conversation again at month three.</p>
        </div>

        <h2 id="scaling">Scaling difficulty &mdash; what breaks when you 10&times; the budget</h2>
        <p>Every platform looks great at &euro;5,000/month. The honest test is what happens when you push past &euro;50,000.</p>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead><tr><th>Behaviour at 10&times; budget</th><th>Google Ads</th><th>Meta Ads</th><th>TikTok Ads</th></tr></thead>
            <tbody>
              <tr><th>Performance decay at scale</th><td><span className="pill pill-good">Low</span> intent supply caps it</td><td><span className="pill pill-mid">Moderate</span> creative becomes the ceiling</td><td><span className="pill pill-bad">High</span> hits creative wall fast</td></tr>
              <tr><th>What breaks first</th><td>Brand-search saturation</td><td>Creative fatigue + frequency</td><td>Creative fatigue, then audience</td></tr>
              <tr><th>Realistic monthly ceiling for most EU SMBs</th><td>&euro;80k&ndash;&euro;250k</td><td>&euro;40k&ndash;&euro;120k</td><td>&euro;15k&ndash;&euro;60k</td></tr>
              <tr><th>Speed of scale-up</th><td>Slow but linear</td><td>Fast then plateaus</td><td>Volatile spikes</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>Google scales more predictably than the other two combined.</strong> Meta scales fast until creative fatigue, then plateaus hard. TikTok scales in unpredictable bursts driven entirely by which video the algorithm picks up that week.</p>

        <h2 id="remarketing">Remarketing strength &mdash; quietly the biggest delta</h2>
        <ul>
          <li><strong>Meta is still the strongest remarketing channel ecommerce has.</strong> Dynamic Product Ads with CAPI-fed first-party data, properly tuned, remains the highest-ROAS placement most brands can buy.</li>
          <li><strong>Google&rsquo;s remarketing has quietly improved.</strong> Customer Match + Demand Gen + branded search retargeting through PMax is now a credible alternative to Meta DPAs for high-AOV categories.</li>
          <li><strong>TikTok remarketing is functionally a placeholder.</strong> Audiences are small, the platform is built for prospecting at scale, and most brands waste budget trying to run TikTok like Meta.</li>
        </ul>

        <h2 id="pmax">When Performance Max wins &mdash; and when it loses</h2>
        <h3>PMax wins when&hellip;</h3>
        <ul>
          <li>The brand already has <strong>strong organic and branded search demand</strong>.</li>
          <li>The product catalogue has <strong>consistent margin across SKUs</strong> and a clean feed.</li>
          <li>You have <strong>deep conversion data</strong> &mdash; first-party signals, offline events, value-based bidding inputs.</li>
          <li>You are willing to <strong>exclude brand search</strong> from PMax and run brand separately on manual Search.</li>
        </ul>
        <h3>PMax loses when&hellip;</h3>
        <ul>
          <li>The catalogue contains products with <strong>wildly different margins</strong>.</li>
          <li>You need <strong>surgical control of specific keywords</strong>.</li>
          <li>Brand search is being <strong>absorbed and double-counted</strong> in the PMax ROAS number.</li>
          <li>Conversion data is shallow &mdash; <strong>form fills only, no offline events</strong>.</li>
        </ul>

        <figure className="cmp-screenshot">
          <Image
            src="/blog/google-ads-vs-meta-ads-vs-tiktok-ads-ecommerce-2026/pmax-branded-search-absorbed-attribution-2026.webp"
            alt="Google Ads search terms report showing branded queries absorbed by a Performance Max campaign — brand keywords credited as PMax conversions, a common cause of inflated ROAS attribution in ecommerce accounts"
            title="Performance Max absorbing brand search — Google Ads search terms report, Q1 2026"
            width={1600}
            height={900}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="lazy"
          />
          <figcaption>Fig. 1 — Real account: brand search terms absorbed by Performance Max and credited as PMax conversions. The campaign reports strong ROAS on paper — the majority is captured brand demand, not new customers acquired through paid media.</figcaption>
        </figure>

        <p className="cmp-quote">&ldquo;PMax usually outperforms Meta when branded search demand already exists. Where it does not, Meta usually wins &mdash; provided the creative volume is there.&rdquo;</p>

        <h2 id="the-honest-mix">The honest mix &mdash; what we typically recommend</h2>
        <p>If a new ecommerce client asked us today, with no other context, how to split a &euro;30,000 monthly media budget:</p>
        <ul>
          <li><strong>~55% Google Ads</strong> &mdash; Performance Max + properly-structured Search, Brand split out cleanly.</li>
          <li><strong>~35% Meta Ads</strong> &mdash; Advantage+ Shopping for prospecting, Dynamic Product Ads for retargeting, ten-plus new creatives per week.</li>
          <li><strong>~10% TikTok Ads</strong> &mdash; Spark Ads on creator-led content, only if the brand has a working creative pipeline.</li>
        </ul>
        <p>That mix shifts heavily by AOV and category. &euro;20 AOV impulse brands typically flip the ratio toward Meta + TikTok. &euro;500+ AOV considered-purchase brands push closer to 70% Google, 25% Meta, 5% TikTok.</p>

        <h2 id="faqs">Frequently asked questions</h2>
        <details className="cmp-faq" open>
          <summary>Which ad platform is cheapest for ecommerce in 2026?</summary>
          <p>On a raw CPM basis, TikTok. On a cost-per-acquisition basis, almost always Google &mdash; because Google captures buyers who are already searching for what you sell, not buyers you have to convince from scratch.</p>
        </details>
        <details className="cmp-faq">
          <summary>Is Performance Max better than Meta Advantage+ Shopping for ecommerce?</summary>
          <p>For brands with existing branded search demand and a clean product feed, PMax usually wins on blended ROAS. For brands building a category from scratch with strong creative output but thin search demand, Meta Advantage+ tends to win. The two buy fundamentally different attention.</p>
        </details>
        <details className="cmp-faq">
          <summary>Can TikTok Ads be profitable for a small ecommerce brand?</summary>
          <p>Yes, but only if the brand can produce three or more native-format creatives per week. TikTok ranks creative iteration speed above almost everything else. Small brands without an in-house creator or a creator-on-retainer model rarely make TikTok pay back.</p>
        </details>
        <details className="cmp-faq">
          <summary>Which ad platform has the most accurate attribution in 2026?</summary>
          <p>None of them in isolation. Google Ads has the most useful attribution model when paired with offline conversion imports from your CRM. Meta CAPI improves Meta significantly but still over-attributes within its own ecosystem. TikTok&rsquo;s Events API is the youngest of the three and over-claims most aggressively. A blended view via MMM or incrementality testing is the only honest answer.</p>
        </details>
        <details className="cmp-faq">
          <summary>When does Performance Max lose to a manually structured Search campaign?</summary>
          <p>When brand search is being absorbed into PMax and credited to it; when the product catalogue contains very different margins; when conversion data is shallow (form fills only, no offline events); or when you need surgical control over a small set of high-value keywords. Manual Search wins in those four scenarios.</p>
        </details>

        <h2 id="closing">Closing &mdash; pick what fits the business, not what&rsquo;s loudest</h2>
        <p>Most ecommerce brands do not have a &ldquo;Meta problem&rdquo; or a &ldquo;TikTok problem&rdquo;. They have a <strong>creative-throughput problem</strong>, an <strong>attribution problem</strong>, or a <strong>catalogue problem</strong>, and they blame the platform. Fix the underlying constraint and the channel mix usually sorts itself out within a quarter.</p>
        <p>If you want a one-page diagnosis of where your media is leaking across Google, Meta and TikTok, we run a free 30-minute version of that call every week. <a href="/contact/?topic=channel-mix-audit">Book it here</a> &mdash; no deck, no sales pitch.</p>
        <p>Related: our <a href="/services/google-ads/">Google Ads &amp; Performance Max service</a>, our <a href="/services/paid-social/">paid social service</a> (Meta &amp; TikTok), our <a href="/services/analytics/">analytics &amp; attribution setup</a>, our <a href="/industries/ecommerce/">e-commerce marketing playbook</a> &mdash; and <a href="/blog/pinterest-ads-home-interiors-local-2026/">who Pinterest Ads actually work for</a>.</p>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6a6a6a' }}>Last updated 26 May 2026 &middot; Reviewed monthly &middot; Based on &euro;2.1M of ecommerce spend Q1 2026</p>
      </>
    ),
  },
]

export function getBlogDetail(slug: string) {
  return blogDetails.find(b => b.slug === slug)
}
