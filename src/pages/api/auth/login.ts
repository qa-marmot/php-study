import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request, locals }) => {
  const { env } = locals.runtime;
  const clientId = env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response('GITHUB_CLIENT_ID が設定されていません', { status: 500 });
  }

  const state = crypto.randomUUID();
  const redirectTo = new URL(request.url).searchParams.get('redirect') ?? '/';

  const githubUrl = new URL('https://github.com/login/oauth/authorize');
  githubUrl.searchParams.set('client_id', clientId);
  githubUrl.searchParams.set('scope', 'read:user');
  githubUrl.searchParams.set('state', state);

  const headers = new Headers({
    Location: githubUrl.toString(),
  });
  // state と リダイレクト先を一時クッキーに保存（10分）
  headers.append(
    'Set-Cookie',
    `oauth_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`,
  );
  headers.append(
    'Set-Cookie',
    `oauth_redirect=${encodeURIComponent(redirectTo)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`,
  );

  return new Response(null, { status: 302, headers });
};
