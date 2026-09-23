-- Client postal address on offers — shown in the FOR/FÜR block of the proposal
-- and in the PDF export. Multiline: one line per address line.
ALTER TABLE offers
  ADD COLUMN IF NOT EXISTS client_address text;
