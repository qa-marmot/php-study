-- D1 データベーススキーマ
-- 適用: wrangler d1 execute php-study-db --file=schema.sql

CREATE TABLE IF NOT EXISTS users (
  id           TEXT    PRIMARY KEY,   -- GitHub user ID (文字列)
  github_login TEXT    NOT NULL,
  display_name TEXT,
  avatar_url   TEXT,
  created_at   INTEGER NOT NULL       -- Unix timestamp
);

CREATE TABLE IF NOT EXISTS quiz_history (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id      TEXT    NOT NULL REFERENCES users(id),
  chapter_slug TEXT    NOT NULL,      -- 'chapter-01' 〜 'chapter-11' or 'all'
  score        INTEGER NOT NULL,
  total        INTEGER NOT NULL,
  answered_at  INTEGER NOT NULL       -- Unix timestamp
);

CREATE INDEX IF NOT EXISTS idx_quiz_history_user ON quiz_history(user_id, answered_at DESC);
