-- Add access_token column with auto-generated default
ALTER TABLE offers
  ADD COLUMN IF NOT EXISTS access_token text DEFAULT encode(gen_random_bytes(16), 'hex');

-- Back-fill any existing rows that have NULL
UPDATE offers SET access_token = encode(gen_random_bytes(16), 'hex')
WHERE access_token IS NULL;

-- Confirm KVA164 token
SELECT code, access_token FROM offers WHERE code = 'KVA164';
