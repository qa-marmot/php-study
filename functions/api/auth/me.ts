import { getSession } from '../../../src/lib/session';

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const session = await getSession(request, env.JWT_SECRET);
  const body = session
    ? JSON.stringify({ sub: session.sub, login: session.login, name: session.name, avatar: session.avatar })
    : 'null';
  return new Response(body, { headers: { 'Content-Type': 'application/json' } });
};
