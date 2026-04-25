import { verifyJWT, type JWTPayload } from './auth';

const COOKIE_NAME = 'php_study_session';
const MAX_AGE = 60 * 60 * 24 * 30; // 30日

export async function getSession(request: Request, jwtSecret: string): Promise<JWTPayload | null> {
  const cookie = request.headers.get('Cookie') ?? '';
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  if (!match) return null;
  return verifyJWT(match[1], jwtSecret);
}

export function makeSessionCookie(token: string): string {
  return `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${MAX_AGE}`;
}

export function clearSessionCookie(): string {
  return `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`;
}
