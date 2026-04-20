import type { APIRoute } from 'astro';
import { getSession } from '../../../lib/session';

export const GET: APIRoute = async ({ request, locals }) => {
  const { env } = locals.runtime;
  const session = await getSession(request, env.JWT_SECRET);
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { results } = await env.DB.prepare(
    `SELECT id, chapter_slug, score, total, answered_at
     FROM quiz_history
     WHERE user_id = ?
     ORDER BY answered_at DESC
     LIMIT 100`,
  )
    .bind(session.sub)
    .all();

  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json' },
  });
};
