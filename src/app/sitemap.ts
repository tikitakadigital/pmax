import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
import { services } from '@/lib/content/services'
import { cases } from '@/lib/content/cases'
import { posts } from '@/lib/content/blog'
import { industryDetails } from '@/lib/content/industries-detail'

const base = 'https://pmax.online'
const langs = ['de', 'es'] as const
const legalSlugs = ['imprint', 'privacy', 'cookies', 'terms'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: '2026-04-01', changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/`, lastModified: '2026-04-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/industries/`, lastModified: '2026-04-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/cases/`, lastModified: '2026-04-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/`, lastModified: '2026-04-04', changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about/`, lastModified: '2026-04-01', changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/contact/`, lastModified: '2026-04-01', changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/seo-company-mallorca/`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/de/seo-agentur-mallorca/`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/es/agencia-seo-mallorca/`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/google-ads-agency-spain/`, lastModified: '2026-06-08', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/de/google-ads-agentur-spanien/`, lastModified: '2026-06-08', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/es/agencia-google-ads-espana/`, lastModified: '2026-06-08', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/marketing-agency-mallorca/`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/de/marketing-agentur-mallorca/`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/es/agencia-de-marketing-mallorca/`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.9 },
    ...langs.map(lang => ({ url: `${base}/${lang}/`, lastModified: '2026-04-01', changeFrequency: 'monthly' as const, priority: 0.9 })),
    ...langs.map(lang => ({ url: `${base}/${lang}/services/`, lastModified: '2026-04-01', changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...langs.map(lang => ({ url: `${base}/${lang}/industries/`, lastModified: '2026-04-01', changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...langs.map(lang => ({ url: `${base}/${lang}/cases/`, lastModified: '2026-04-01', changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...langs.map(lang => ({ url: `${base}/${lang}/blog/`, lastModified: '2026-04-04', changeFrequency: 'weekly' as const, priority: 0.8 })),
    ...langs.map(lang => ({ url: `${base}/${lang}/about/`, lastModified: '2026-04-01', changeFrequency: 'yearly' as const, priority: 0.7 })),
    ...langs.map(lang => ({ url: `${base}/${lang}/contact/`, lastModified: '2026-04-01', changeFrequency: 'yearly' as const, priority: 0.7 })),
  ]

  const servicePages: MetadataRoute.Sitemap = [
    ...services.map(s => ({ url: `${base}/services/${s.slug}/`, lastModified: '2026-04-01', changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...langs.flatMap(lang => services.map(s => ({ url: `${base}/${lang}/services/${s.slug}/`, lastModified: '2026-04-01', changeFrequency: 'monthly' as const, priority: 0.7 }))),
  ]

  const industryPages: MetadataRoute.Sitemap = [
    ...industryDetails.map(i => ({ url: `${base}/industries/${i.slug}/`, lastModified: '2026-04-01', changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...langs.flatMap(lang => industryDetails.map(i => ({ url: `${base}/${lang}/industries/${i.slug}/`, lastModified: '2026-04-01', changeFrequency: 'monthly' as const, priority: 0.7 }))),
  ]

  const casePages: MetadataRoute.Sitemap = [
    ...cases.map(c => ({ url: `${base}/cases/${c.slug}/`, lastModified: '2026-04-01', changeFrequency: 'yearly' as const, priority: 0.7 })),
    ...langs.flatMap(lang => cases.map(c => ({ url: `${base}/${lang}/cases/${c.slug}/`, lastModified: '2026-04-01', changeFrequency: 'yearly' as const, priority: 0.6 }))),
  ]

  const blogPages: MetadataRoute.Sitemap = [
    ...posts.map(p => ({ url: `${base}/blog/${p.slug}/`, lastModified: new Date(p.date), changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...langs.flatMap(lang => posts.map(p => ({ url: `${base}/${lang}/blog/${p.slug}/`, lastModified: new Date(p.date), changeFrequency: 'monthly' as const, priority: 0.6 }))),
  ]

  const legalPages: MetadataRoute.Sitemap = [
    ...legalSlugs.map(s => ({ url: `${base}/legal/${s}/`, lastModified: '2026-01-01', changeFrequency: 'yearly' as const, priority: 0.3 })),
    ...langs.flatMap(lang => legalSlugs.map(s => ({ url: `${base}/${lang}/legal/${s}/`, lastModified: '2026-01-01', changeFrequency: 'yearly' as const, priority: 0.3 }))),
  ]

  return [...core, ...servicePages, ...industryPages, ...casePages, ...blogPages, ...legalPages]
}
