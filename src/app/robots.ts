import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/static/media/',
          '/contact/?topic=',
          '/de/contact/?topic=',
          '/es/contact/?topic=',
        ],
      },

      // ── OpenAI / ChatGPT ─────────────────────────────────────────────────
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },

      // ── Anthropic / Claude ───────────────────────────────────────────────
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Claude-SearchBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },

      // ── Perplexity ───────────────────────────────────────────────────────
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },

      // ── Google ───────────────────────────────────────────────────────────
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'GoogleOther', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Google-CloudVertexBot', allow: '/' },
      { userAgent: 'Gemini-Deep-Research', allow: '/' },

      // ── xAI / Grok ───────────────────────────────────────────────────────
      { userAgent: 'Grok', allow: '/' },
      { userAgent: 'GrokBot', allow: '/' },

      // ── Apple / Siri ─────────────────────────────────────────────────────
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },

      // ── Meta ─────────────────────────────────────────────────────────────
      { userAgent: 'FacebookBot', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'meta-externalfetcher', allow: '/' },

      // ── ByteDance / TikTok ───────────────────────────────────────────────
      { userAgent: 'Bytespider', allow: '/' },

      // ── DuckDuckGo ───────────────────────────────────────────────────────
      { userAgent: 'DuckAssistBot', allow: '/' },

      // ── Amazon ───────────────────────────────────────────────────────────
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'Amzn-SearchBot', allow: '/' },

      // ── You.com ──────────────────────────────────────────────────────────
      { userAgent: 'YouBot', allow: '/' },

      // ── Mistral ──────────────────────────────────────────────────────────
      { userAgent: 'MistralAI-User', allow: '/' },

      // ── Cohere ───────────────────────────────────────────────────────────
      { userAgent: 'cohere-ai', allow: '/' },

      // ── DeepSeek ─────────────────────────────────────────────────────────
      { userAgent: 'DeepSeekBot', allow: '/' },

      // ── Common Crawl (feeds many open-source model training sets) ────────
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: 'https://pmax.online/sitemap.xml',
  }
}
