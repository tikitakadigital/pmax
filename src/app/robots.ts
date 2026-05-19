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
    ],
    sitemap: 'https://pmax.online/sitemap.xml',
    host: 'https://pmax.online',
  }
}
