-- Run this in the Supabase SQL editor

CREATE TABLE offers (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  code          text        UNIQUE NOT NULL,
  status        text        NOT NULL DEFAULT 'draft'
                            CHECK (status IN ('draft', 'sent', 'accepted', 'expired')),
  date          date        NOT NULL DEFAULT CURRENT_DATE,
  valid_until   date        NOT NULL,
  viewed_at     timestamptz,
  accepted_at   timestamptz,
  client_name   text        NOT NULL DEFAULT '',
  client_website text,
  client_email  text        NOT NULL DEFAULT '',
  client_phone  text,
  contact_person text       NOT NULL DEFAULT 'Philipp Enders',
  title         text        NOT NULL DEFAULT '',
  content       jsonb       NOT NULL DEFAULT '{}',
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

CREATE INDEX offers_code_idx   ON offers (code);
CREATE INDEX offers_status_idx ON offers (status);
