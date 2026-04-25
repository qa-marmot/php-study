import { signJWT } from '../../../src/lib/auth';
import { makeSessionCookie } from '../../../src/lib/session';

type GitHubTokenResponse = { access_token?: string; error?: string };
type GitHubUser = { id: number; login: string; name: string | null; avatar_url: string };

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  const cookie = request.headers.get('Cookie') ?? '';
  const stateMatch = cookie.match(/(?:^|;\s*)oauth_state=([^;]+)/);
  if (!stateMatch || stateMatch[1] !== state) {
    return new Response('不正なリクエストです（state不一致）', { status: 400 });
  }
  if (!code) return new Response('認証コードがありません', { status: 400 });

  const redirectMatch = cookie.match(/(?:^|;\s*)oauth_redirect=([^;]+)/);
  const redirectTo = redirectMatch ? decodeURIComponent(redirectMatch[1]) : '/';

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code }),
  });
  const tokenData = (await tokenRes.json()) as GitHubTokenResponse;
  if (!tokenData.access_token) return new Response('GitHubトークンの取得に失敗しました', { status: 401 });

  const userRes = await fetch('https://api.github.com/user', {
    headers: { Authorization: `Bearer ${tokenData.access_token}`, 'User-Agent': 'php-study-app' },
  });
  if (!userRes.ok) return new Response('GitHubユーザー情報の取得に失敗しました', { status: 401 });
  const user = (await userRes.json()) as GitHubUser;

  await env.DB.prepare(
    `INSERT INTO users (id, github_login, display_name, avatar_url, created_at)
     VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET
       github_login = excluded.github_login,
       display_name = excluded.display_name,
       avatar_url   = excluded.avatar_url`,
  ).bind(String(user.id), user.login, user.name ?? user.login, user.avatar_url, Math.floor(Date.now() / 1000)).run();

  const jwt = await signJWT(
    { sub: String(user.id), login: user.login, name: user.name ?? user.login, avatar: user.avatar_url, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30 },
    env.JWT_SECRET,
  );

  const headers = new Headers({ Location: redirectTo });
  headers.append('Set-Cookie', makeSessionCookie(jwt));
  headers.append('Set-Cookie', 'oauth_state=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0');
  headers.append('Set-Cookie', 'oauth_redirect=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0');

  return new Response(null, { status: 302, headers });
};
