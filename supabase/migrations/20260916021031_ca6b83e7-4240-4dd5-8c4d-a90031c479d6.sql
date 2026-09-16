CREATE TABLE public.lead_magnet_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  source text NOT NULL DEFAULT 'cuadernillo-sol-luna-zodiaco',
  created_at timestamptz NOT NULL DEFAULT now(),
  downloaded_at timestamptz
);

GRANT SELECT, INSERT ON public.lead_magnet_subscriptions TO authenticated;
GRANT SELECT, INSERT ON public.lead_magnet_subscriptions TO anon;
GRANT ALL ON public.lead_magnet_subscriptions TO service_role;

ALTER TABLE public.lead_magnet_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon insert on lead magnet subscriptions"
  ON public.lead_magnet_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow users to read own subscriptions"
  ON public.lead_magnet_subscriptions
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');