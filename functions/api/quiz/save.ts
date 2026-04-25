import { getSession } from '../../../src/lib/session';

type SaveBody = { chapterSlug: unknown; score: unknown; total: unknown };

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const session = await getSession(request, env.JWT_SECRET);
  if (!session) return new Response('Unauthorized', { status: 401 });

  let body: SaveBody;
  try {
    body = (await request.json()) as SaveBody;
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const { chapterSlug, score, total } = body;
  if (typeof chapterSlug !== 'string' || typeof score !== 'number' || typeof total !== 'number' || score < 0 || total <= 0 || score > total) {
    return new Response('Bad Request', { status: 400 });
  }

  await env.DB.prepare(
    'INSERT INTO quiz_history (user_id, chapter_slug, score, total, answered_at) VALUES (?, ?, ?, ?, ?)',
  ).bind(session.sub, chapterSlug, score, total, Math.floor(Date.now() / 1000)).run();

  return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
};
