import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const CUADERNILLO_PATH = "cuadernillo-sol-luna-zodiaco.pdf";
const CUADERNILLO_BUCKET = "downloads";
const SIGNED_URL_TTL_SECONDS = 60 * 60; // 1 hora

export const subscribeToLeadMagnet = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z
      .object({
        email: z.string().email("Dejá un email válido."),
        source: z.string().min(1).max(100).default("cuadernillo-sol-luna-zodiaco"),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Guardamos o actualizamos el email y marcamos la descarga.
    const { error: upsertError } = await supabaseAdmin
      .from("lead_magnet_subscriptions")
      .upsert(
        {
          email: data.email.toLowerCase().trim(),
          source: data.source,
          downloaded_at: new Date().toISOString(),
        },
        { onConflict: "email", ignoreDuplicates: false },
      );

    if (upsertError) {
      console.error("Error guardando suscripción:", upsertError);
      throw new Error("No pudimos procesar tu solicitud. Intentá de nuevo más tarde.");
    }

    // Generamos una URL firmada para descargar el cuadernillo.
    const { data: signedData, error: signedError } = await supabaseAdmin.storage
      .from(CUADERNILLO_BUCKET)
      .createSignedUrl(CUADERNILLO_PATH, SIGNED_URL_TTL_SECONDS);

    if (signedError || !signedData?.signedUrl) {
      console.error("Error generando signed URL:", signedError);
      throw new Error("No pudimos preparar el archivo. Intentá de nuevo más tarde.");
    }

    return { success: true as const, downloadUrl: signedData.signedUrl };
  });
