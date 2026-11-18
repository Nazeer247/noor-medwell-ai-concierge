CREATE TABLE IF NOT EXISTS partner_interests (
  id TEXT PRIMARY KEY,
  partner_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'interested',
  preferred_language TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_partner_interests_created_at
ON partner_interests(created_at);

CREATE INDEX IF NOT EXISTS idx_partner_interests_partner_name
ON partner_interests(partner_name);
