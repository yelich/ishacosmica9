// Validación de email compartida: formato estricto + dominio que acepta correo (MX).
// Se usa en el cliente (feedback inmediato) y en el servidor (barrera antes de la descarga).

const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

export function isEmailFormatValid(email: string): boolean {
  const value = email.trim();
  if (value.length > 255) return false;
  const [local, domain] = value.split("@");
  if (!local || !domain || local.length > 64) return false;
  return EMAIL_PATTERN.test(value);
}

export function emailDomain(email: string): string {
  return email.trim().split("@")[1]?.toLowerCase() ?? "";
}

// Consulta DNS-over-HTTPS: el dominio debe tener registro MX (o A como fallback) para recibir correo.
export async function domainAcceptsEmail(domain: string): Promise<boolean> {
  if (!domain) return false;
  try {
    const resolve = async (type: "MX" | "A") => {
      const res = await fetch(
        `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=${type}`,
        { headers: { accept: "application/dns-json" } },
      );
      if (!res.ok) return false;
      const json = (await res.json()) as { Status?: number; Answer?: unknown[] };
      return json.Status === 0 && Array.isArray(json.Answer) && json.Answer.length > 0;
    };
    return (await resolve("MX")) || (await resolve("A"));
  } catch {
    // Si la consulta DNS falla por red, no bloqueamos al usuario: dejamos pasar el formato válido.
    return true;
  }
}
