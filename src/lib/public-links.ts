export const TELEGRAM = "https://t.me/+laZUpJV0Skk2MDMx";
export const WHATSAPP = "https://wa.me/5491161979623";

export const REDES = [
  { label: "Instagram", url: "https://www.instagram.com/ishacosmica/" },
  { label: "WhatsApp", url: WHATSAPP },
  { label: "Telegram", url: TELEGRAM },
  { label: "TikTok", url: "https://www.tiktok.com/@ishacosmica" },
  { label: "YouTube", url: "https://www.youtube.com/@ishacosmicaencomunidad" },
  { label: "Spotify", url: "https://open.spotify.com/user/judyben-1320" },
];

export const waLink = (mensaje: string) => `${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

export const ENTREVISTA_INICIAL = waLink(
  "¡Hola Judy! Me gustaría solicitar una entrevista inicial.",
);