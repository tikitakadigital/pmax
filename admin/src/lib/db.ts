import { createClient } from '@supabase/supabase-js'

const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !key) throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')

// Service role client — never expose to browser.
export const db = createClient(url, key, {
  auth: { persistSession: false },
})

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'won' | 'lost' | 'archived'

export interface Lead {
  id: string
  ref: string
  name: string
  email: string
  company: string | null
  phone: string | null
  topic: string | null
  message: string | null
  locale: string
  source_page: string | null
  status: LeadStatus
  notes: string | null
  created_at: string
  updated_at: string
}

export type OfferStatus = 'draft' | 'sent' | 'accepted' | 'expired'

export interface OfferContent {
  intro: string
  situation_strengths: string
  situation_gaps: string[]
  positioning_core: string
  positioning_pillars: { pillar: string; what: string; message: string }[]
  positioning_strategy: string
  positioning_note?: string
  channels: { name: string; benefit: string; timeframe: string; optional?: boolean }[]
  channels_glossary?: { term: string; short: string }[]
  sprint_price: number
  sprint_days: number
  sprint_includes: string[]
  sprint_flex_note?: string
  retainer_fixed: string[]
  retainer_variable: string[]
  retainer_variants: { label: string; days: number; price: number; focus: string; fits_when: string }[]
  retainer_note: string
  decision_text: string
  timeline: { period: string; description: string }[]
  kpis: string[]
  expectations: string[]
  external_costs: { item: string; recommendation: string }[]
  external_costs_note: string
  conditions: string[]
  next_steps: string[]
  glossary?: { term: string; definition: string }[]
}

export interface Offer {
  id: string
  code: string
  status: OfferStatus
  date: string
  valid_until: string
  viewed_at: string | null
  accepted_at: string | null
  client_name: string
  client_website: string | null
  client_email: string
  client_phone: string | null
  contact_person: string
  title: string
  content: OfferContent
  created_at: string
  updated_at: string
}

export interface ConsentLog {
  id: string
  session_id: string
  page_url: string
  consent_type: 'accept_all' | 'reject_all' | 'custom'
  analytics: boolean
  marketing: boolean
  country_code: string | null
  created_at: string
}
