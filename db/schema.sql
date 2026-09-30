-- MuleShield database reference schema
-- The deployed contact table is kept compatible with Hatchable.

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  consent boolean NOT NULL,
  consent_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Proposed fraud-engine tables for the next implementation stage.

CREATE TABLE IF NOT EXISTS accounts (
  account_id text PRIMARY KEY,
  institution_id text,
  account_age_days integer,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS transactions (
  transaction_id text PRIMARY KEY,
  sender_account_id text NOT NULL,
  receiver_account_id text NOT NULL,
  amount numeric(18,2) NOT NULL,
  currency text NOT NULL DEFAULT 'INR',
  channel text,
  event_time timestamptz NOT NULL,
  risk_score numeric(5,4),
  decision text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_transactions_sender_time
  ON transactions(sender_account_id, event_time);

CREATE INDEX IF NOT EXISTS idx_transactions_receiver_time
  ON transactions(receiver_account_id, event_time);
