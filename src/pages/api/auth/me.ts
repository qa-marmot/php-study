import type { APIRoute } from 'astro';
import { getSession } from '../../../lib/session';

export const GET: APIRoute = async ({ request, locals }) => {
  const { env } = locals.runtime;
  const session = await getSession(request, env.JWT_SECRET);

  const body = session
    ? JSON.stringify({ sub: session.sub, login: session.login, name: session.name, avatar: session.avatar })
    : 'null';

  return new Response(body, {
    headers: { 'Content-Type': 'application/json' },
  });
};
