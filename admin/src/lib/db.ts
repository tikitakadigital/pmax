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
