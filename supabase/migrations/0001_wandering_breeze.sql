/*
  # Initial Schema Setup

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - created_at (timestamp)
    - vip_codes
      - id (uuid, primary key)
      - code (text, unique)
      - type (text) - weekly/monthly
      - user_id (uuid, references users)
      - expires_at (timestamp)
      - created_at (timestamp)
    - support_messages
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - message (text)
      - status (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- VIP codes table
CREATE TABLE IF NOT EXISTS vip_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  type text NOT NULL CHECK (type IN ('weekly', 'monthly')),
  user_id uuid REFERENCES users(id),
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE vip_codes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own VIP codes"
  ON vip_codes
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Support messages table
CREATE TABLE IF NOT EXISTS support_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  message text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'resolved')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE support_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own support messages"
  ON support_messages
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create support messages"
  ON support_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());