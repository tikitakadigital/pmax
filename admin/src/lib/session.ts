import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const COOKIE = 'pmax_admin_session'
const EXPIRY = 60 * 60 * 8 // 8 hours

function secret() {
  const s = process.env.ADMIN_JWT_SECRET
  if (!s) throw new Error('Missing ADMIN_JWT_SECRET')
  return new TextEncoder().encode(s)
}

export interface SessionPayload {
  userId: string
  email: string
}

export async function createSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${EXPIRY}s`)
    .sign(secret())
}

export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret())
    return payload as unknown as SessionPayload
  } catch {
    return null
  }
}

export async function getSession(): Promise<SessionPayload | null> {
  const jar = await cookies()
  const token = jar.get(COOKIE)?.value
  if (!token) return null
  return verifySession(token)
}

/** Use in server components/actions to guard a page. Redirects to /login if no valid session. */
export async function requireSession(): Promise<SessionPayload> {
  const session = await getSession()
  if (!session) redirect('/login')
  return session
}

export function sessionCookieOptions(token: string) {
  return {
    name: COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    path: '/',
    maxAge: EXPIRY,
  }
}

export function clearCookieOptions() {
  return {
    name: COOKIE,
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    path: '/',
    maxAge: 0,
  }
}
