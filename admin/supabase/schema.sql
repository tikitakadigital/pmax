-- pmax admin schema
-- Run this in the Supabase SQL editor for your project.

-- ─────────────────────────────────────────────
-- Admin users (internal only)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_users (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email                 TEXT UNIQUE NOT NULL,
  password_hash         TEXT NOT NULL,
  reset_token_hash      TEXT,                     -- SHA-256 of the raw token
  reset_token_expires   TIMESTAMPTZ,
  last_login_at         TIMESTAMPTZ,
  created_at            TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Only one admin for now; extend with roles if needed.
CREATE INDEX ON admin_users (email);
CREATE INDEX ON admin_users (reset_token_hash) WHERE reset_token_hash IS NOT NULL;

-- ─────────────────────────────────────────────
-- Consent logs (GDPR audit trail)
-- No raw IPs stored — only country code from Cloudflare header.
-- Retention: auto-purge after 3 years (cron or pg_cron).
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS consent_logs (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id     TEXT NOT NULL,        -- random UUID from browser, not tied to identity
  page_url       TEXT NOT NULL,
  consent_type   TEXT NOT NULL CHECK (consent_type IN ('accept_all', 'reject_all', 'custom')),
  analytics      BOOLEAN NOT NULL DEFAULT FALSE,
  marketing      BOOLEAN NOT NULL DEFAULT FALSE,
  country_code   TEXT,                 -- ISO-3166 alpha-2, from CF-IPCountry header
  created_at     TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX ON consent_logs (created_at DESC);
CREATE INDEX ON consent_logs (session_id);
CREATE INDEX ON consent_logs (country_code);

-- Auto-purge after 3 years (requires pg_cron extension in Supabase)
-- Uncomment once pg_cron is enabled in your Supabase project:
-- SELECT cron.schedule('purge-old-consent-logs', '0 3 * * 0',
--   $$DELETE FROM consent_logs WHERE created_at < NOW() - INTERVAL '3 years'$$);

-- ─────────────────────────────────────────────
-- Leads / CRM
-- ─────────────────────────────────────────────
DO $$ BEGIN
  CREATE TYPE lead_status AS ENUM ('new', 'contacted', 'qualified', 'won', 'lost', 'archived');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS leads (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ref              TEXT UNIQUE NOT NULL,   -- e.g. A-XK7PQ from the contact form
  name             TEXT NOT NULL,
  email            TEXT NOT NULL,
  company          TEXT,
  phone            TEXT,
  topic            TEXT,
  message          TEXT,
  locale           TEXT DEFAULT 'en',
  source_page      TEXT,
  status           lead_status NOT NULL DEFAULT 'new',
  notes            TEXT,                  -- internal notes, appended not replaced
  created_at       TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at       TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX ON leads (created_at DESC);
CREATE INDEX ON leads (status);
CREATE INDEX ON leads (email);

-- Trigger to auto-update updated_at
CREATE OR REPLACE FUNCTION touch_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$;

CREATE TRIGGER leads_touch_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION touch_updated_at();

-- ─────────────────────────────────────────────
-- Login attempts (rate limiting)
-- Stores hash of IP — not raw IP — for GDPR compliance.
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS login_attempts (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_hash     TEXT NOT NULL,
  success     BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX ON login_attempts (ip_hash, created_at DESC);

-- Auto-purge attempt records older than 24 hours
-- SELECT cron.schedule('purge-login-attempts', '0 * * * *',
--   $$DELETE FROM login_attempts WHERE created_at < NOW() - INTERVAL '24 hours'$$);

-- ─────────────────────────────────────────────
-- Grants — required for PostgREST / service_role
-- ─────────────────────────────────────────────
GRANT ALL ON public.admin_users TO service_role;
GRANT ALL ON public.consent_logs TO service_role;
GRANT ALL ON public.leads TO service_role;
GRANT ALL ON public.login_attempts TO service_role;
