import type { APIRoute } from 'astro';
import { clearSessionCookie } from '../../../lib/session';

export const POST: APIRoute = () => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/',
      'Set-Cookie': clearSessionCookie(),
    },
  });
};
