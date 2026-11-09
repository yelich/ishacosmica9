DROP POLICY IF EXISTS "Allow anon insert on lead magnet subscriptions" ON public.lead_magnet_subscriptions;
REVOKE INSERT ON public.lead_magnet_subscriptions FROM anon;
GRANT ALL ON public.lead_magnet_subscriptions TO service_role;