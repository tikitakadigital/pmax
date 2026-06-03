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
      { userAgent: 'Claude-SearchBot', allow: '/' },   // Claude search
      { userAgent: 'PerplexityBot', allow: '/' },      // Perplexity real-time retrieval
      // AI training crawlers — block (does not affect retrieval or citations)
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'ClaudeBot', disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
    ],
    sitemap: 'https://pmax.online/sitemap.xml',
  }
}
