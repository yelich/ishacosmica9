export const TELEGRAM = "https://t.me/+laZUpJV0Skk2MDMx";
export const WHATSAPP = "https://wa.me/5491161979623";
export const MEMBRESIA_COMUNIDAD = `https://wa.me/qr/Y5PEMQ6JW4B3L1?text=${encodeURIComponent("¡Hola, Judy! Me gustaría saber más acerca de la Membresía Comunidad Corazón Solar")}`;

export const REDES = [
  { label: "Instagram", url: "https://www.instagram.com/ishacosmica/" },
  { label: "WhatsApp", url: WHATSAPP },
  { label: "Telegram", url: TELEGRAM },
  { label: "TikTok", url: "https://www.tiktok.com/@ishacosmica" },
  { label: "YouTube", url: "https://www.youtube.com/@ishacosmicaencomunidad" },
  { label: "Spotify", url: "https://open.spotify.com/user/judyben-1320" },
];

export const waLink = (mensaje: string) => `${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

export const entrevistaInicialLink = (sesion: string) => waLink(
  `¡Hola, Judy! Me gustaría solicitar una entrevista inicial de ${sesion}.`,
);