import { clearSessionCookie } from '../../../src/lib/session';

export const onRequestPost: PagesFunction<Env> = () => {
  return new Response(null, {
    status: 302,
    headers: { Location: '/', 'Set-Cookie': clearSessionCookie() },
  });
};
