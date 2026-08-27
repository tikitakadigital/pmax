import pkg from 'bcryptjs'
import * as readline from 'readline/promises'
const { hashSync } = pkg

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const password = await rl.question('Password: ')
rl.close()

if (password.length < 12) { console.error('Too short'); process.exit(1) }

const hash = hashSync(password, 12)
console.log('\nRun this in Supabase SQL Editor:\n')
console.log(`INSERT INTO admin_users (email, password_hash)`)
console.log(`VALUES ('philipp@pmax.online', '${hash}');`)
