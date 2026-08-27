/**
 * Run once to create the initial admin user:
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/create-admin.mjs
 *
 * Or set env vars in .env.local first and run:
 *   node -r dotenv/config scripts/create-admin.mjs
 */

import { createClient } from '@supabase/supabase-js'
import pkg from 'bcryptjs'
const { hashSync } = pkg
import { randomBytes } from 'crypto'
import * as readline from 'readline/promises'

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !key) {
  console.error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const db = createClient(url, key, { auth: { persistSession: false } })

const email = await rl.question('Admin email: ')
const password = await rl.question('Admin password (min 12 chars): ')
rl.close()

if (password.length < 12) { console.error('Password too short'); process.exit(1) }

const hash = hashSync(password, 12)

const { error } = await db.from('admin_users').insert({ email: email.trim().toLowerCase(), password_hash: hash })
if (error) { console.error('Error:', error.message); process.exit(1) }

console.log(`✓ Admin user created for ${email}`)
