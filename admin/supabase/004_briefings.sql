-- Run this in the Supabase SQL editor.
--
-- Client briefings: a finished HTML document plus its reviewed PDF, served on
-- pmax.online/briefing/<code>/#t=<token>. Schema only: briefing content is
-- loaded with admin/scripts/load-briefing.mjs and never committed (the repo is
-- public).

CREATE TABLE IF NOT EXISTS briefings (
  id             uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  code           text        UNIQUE NOT NULL,
  access_token   text        NOT NULL DEFAULT encode(gen_random_bytes(16), 'hex'),
  status         text        NOT NULL DEFAULT 'draft'
                             CHECK (status IN ('draft', 'sent', 'archived')),
  lang           text        NOT NULL DEFAULT 'de'
                             CHECK (lang IN ('de', 'en', 'es')),
  date           date        NOT NULL DEFAULT CURRENT_DATE,
  client_name    text        NOT NULL DEFAULT '',
  client_contact text,
  title          text        NOT NULL DEFAULT '',
  html           text        NOT NULL DEFAULT '',  -- body fragment, no <html>/<head>/<body>
  css            text        NOT NULL DEFAULT '',  -- scoped under .brf by the loader
  pdf_path       text,                             -- object path in the 'briefings' bucket
  pdf_filename   text,
  viewed_at      timestamptz,
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now()
);

-- Only the admin app's service role reads this table. RLS on with no policies
-- means the anon and authenticated keys get nothing, whatever leaks.
ALTER TABLE briefings ENABLE ROW LEVEL SECURITY;

-- Private bucket for the PDFs. Served only through short-lived signed URLs.
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('briefings', 'briefings', false, 20971520, ARRAY['application/pdf'])
ON CONFLICT (id) DO NOTHING;
