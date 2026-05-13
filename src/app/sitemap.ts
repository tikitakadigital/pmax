import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
import { services } from '@/lib/content/services'
import { cases } from '@/lib/content/cases'
import { posts } from '@/lib/content/blog'
import { industryDetails } from '@/lib/content/industries-detail'

const base = 'https://pmax.online'

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: '2026-04-01', changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/`, lastModified: '2026-04-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/industries/`, lastModified: '2026-04-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/cases/`, lastModified: '2026-04-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/`, lastModified: '2026-04-04', changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about/`, lastModified: '2026-04-01', changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/contact/`, lastModified: '2026-04-01', changeFrequency: 'yearly', priority: 0.8 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: '2026-04-01',
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const industryPages: MetadataRoute.Sitemap = industryDetails.map(i => ({
    url: `${base}/industries/${i.slug}/`,
    lastModified: '2026-04-01',
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const casePages: MetadataRoute.Sitemap = cases.map(c => ({
    url: `${base}/cases/${c.slug}/`,
    lastModified: '2026-04-01',
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map(p => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...core, ...servicePages, ...industryPages, ...casePages, ...blogPages]
}
