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
      // AI retrieval bots — explicit allow so citations are not blocked
      { userAgent: 'OAI-SearchBot', allow: '/' },      // ChatGPT search results
      { userAgent: 'ChatGPT-User', allow: '/' },       // ChatGPT user-triggered fetch
      { userAgent: 'Claude-SearchBot', allow: '/' },   // Claude search
      { userAgent: 'Claude-User', allow: '/' },        // Claude user-triggered fetch
      { userAgent: 'PerplexityBot', allow: '/' },      // Perplexity real-time retrieval
      { userAgent: 'Perplexity-User', allow: '/' },    // Perplexity user-triggered fetch
      // AI training crawlers — allow so pmax content enters future model knowledge
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: 'https://pmax.online/sitemap.xml',
  }
}
