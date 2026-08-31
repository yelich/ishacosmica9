import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import corazonBEditedAsset from "@/assets/corazonB-edited.png.asset.json";
import judyAsset from "@/assets/judy.png.asset.json";
import markAsset from "@/assets/mark.png.asset.json";
import { SocialIcon } from "@/components/SocialIcon";
import { getAssetUrl } from "@/lib/asset-url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Judy Bentolila · Astrología para la Nueva Era" },
      {
        name: "description",
        content:
          "Judy Bentolila (@Ishacosmica): Astrología, Tarot y literatura para leer tu historia. Sesiones, clases y la comunidad Corazón Solar.",
      },
      { property: "og:title", content: "Judy Bentolila · Astrología para la Nueva Era" },
      {
        property: "og:description",
        content:
          "Astrología simbólica, Tarot y literatura. Sesiones individuales, clases y la comunidad Corazón Solar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre Mí" },
  { id: "servicios", label: "Servicios" },
  { id: "comunidad", label: "Comunidad" },
  { id: "manifiesto", label: "Manifiesto" },
];

const METODOLOGIA = [
  "No me interesa enseñarte conceptos para que los memorices, sino que descubras cómo una carta natal dialoga con un mito o cómo un tránsito abre una pregunta.",
  "La Astrología que propongo no busca decirte qué va a suceder. Busca ayudarte a comprender qué está sucediendo en vos mientras atravesás un determinado tiempo.",
  "El cielo no decide por nosotros. Nos muestra ciclos, movimientos, tensiones y oportunidades. Una lectura simbólica abre preguntas, no encierra destinos.",
];

const CAMINOS = [
  {
    kicker: "Conocerte",
    titulo: "Sesiones individuales",
    texto:
      "La carta natal no es una sentencia, es un mapa de tus recursos, desafíos y ciclos. Sesiones de Carta Natal, Revolución Solar, Tarot o un proceso integrado de Astrología + Tarot + Acompañamiento.",
    cta: "Conocé las sesiones",
    href: "#sesiones",
  },
  {
    kicker: "Aprender",
    titulo: "Clases, talleres y experiencias",
    texto:
      "Aprender Astrología es aprender a mirar. Integro literatura, arte, Tarot, geometría sagrada y pensamiento simbólico para ir más allá de los conceptos.",
    cta: "Conocé las propuestas",
    href: "#metodologia",
  },
  {
    kicker: "Ser parte",
    titulo: "Comunidad Corazón Solar",
    texto:
      "Un espacio de encuentro, aprendizaje y expansión. Compartimos clases, encuentros y materiales exclusivos para quienes sienten que aprender es una experiencia transformadora.",
    cta: "Quiero conocer Corazón Solar",
    href: "#comunidad",
  },
];

const SESIONES = [
  {
    titulo: "Carta Natal",
    texto:
      "Lectura profunda de tu mapa para comprender recursos, dinámicas y procesos personales.",
  },
  {
    titulo: "Revolución Solar",
    texto: "Una mirada sobre el ciclo anual que comienza en cada vuelta al Sol.",
  },
  {
    titulo: "Tarot",
    texto: "Lectura simbólica para iluminar preguntas y movimientos internos.",
  },
  {
    titulo: "Astrología + Tarot + Acompañamiento",
    texto: "Proceso de varios encuentros para diseñar un plan de acción consciente.",
  },
];

const REDES = [
  { label: "Instagram", url: "https://www.instagram.com/ishacosmica" },
  { label: "WhatsApp", url: "https://wa.me/5495411979623" },
  { label: "Telegram", url: "https://t.me/+laZUpJV0Skk2MDMx" },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@ishacosmica?_r=1&_d=f2jm03eia3f43d&sec_uid=MS4wLjABAAAAYVVRuBdUgRe4BU8C4Onu3WVCUbjEjuWEEhPIdHH57K5LQNpWdWjgiFxlAtyA2xN2&share_author_id=7075418946085684230&sharer_language=es&source=h5_m&utm_source=copy&utm_campaign=client_share&utm_medium=android",
  },
  {
    label: "YouTube",
    url: "https://youtube.com/@ishacosmicaencomunidad?si=T9EHBo7Dd6WPWaBC",
  },
  {
    label: "Spotify",
    url: "https://open.spotify.com/user/judyben-1320?si=Em22U7JMTzWyE44nlW3apQ",
  },
];

const TELEGRAM = "https://t.me/+laZUpJV0Skk2MDMx";
const CALENDLY = "https://calendly.com/judyben9/30min";

function Divider() {
  return (
    <div className="mx-auto mb-12 flex max-w-xs items-center gap-4">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
      <span className="text-primary">✦</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
    </div>
  );
}

function ConstellationArt() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full text-primary/70"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
      <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <polygon
        points="200,60 322,290 78,290"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.45"
      />
      <polygon
        points="200,340 78,110 322,110"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <path d="M120 150 L200 110 L280 170 L250 260 L150 250 Z" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      {[
        [120, 150],
        [200, 110],
        [280, 170],
        [250, 260],
        [150, 250],
        [200, 200],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="currentColor" />
      ))}
      <circle cx="200" cy="200" r="26" fill="currentColor" opacity="0.12" />
    </svg>
  );
}

function BookingDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Reservar una sesión"
      onClick={onClose}
    >
      <div
        className="card-mystic max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl p-7 sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-2xl text-gold-gradient">Reservar una sesión</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Contame con qué llegás y te respondo con disponibilidad.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="shrink-0 rounded-full border border-primary/30 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            ✕
          </button>
        </div>

        {sent ? (
          <div className="mt-8 text-center">
            <p className="font-display text-xl text-gold-gradient">¡Gracias!</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Recibí tu mensaje. También podés agendar directo en el calendario.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Abrir calendario
            </a>
          </div>
        ) : (
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div>
              <label htmlFor="nombre" className="text-xs uppercase tracking-[0.25em] text-primary/80">
                Nombre
              </label>
              <input
                id="nombre"
                required
                className="mt-2 w-full rounded-xl border border-input bg-black/30 px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-[0.25em] text-primary/80">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-input bg-black/30 px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="tipo" className="text-xs uppercase tracking-[0.25em] text-primary/80">
                Sesión
              </label>
              <select
                id="tipo"
                className="mt-2 w-full rounded-xl border border-input bg-black/30 px-4 py-3 text-sm outline-none focus:border-primary"
              >
                {SESIONES.map((s) => (
                  <option key={s.titulo} value={s.titulo} className="bg-background">
                    {s.titulo}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="mensaje" className="text-xs uppercase tracking-[0.25em] text-primary/80">
                Tu pregunta
              </label>
              <textarea
                id="mensaje"
                rows={3}
                className="mt-2 w-full rounded-xl border border-input bg-black/30 px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Enviar solicitud
            </button>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="block text-center text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              O agendá directamente en el calendario
            </a>
          </form>
        )}
      </div>
    </div>
  );
}

function Index() {
  const [booking, setBooking] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative min-h-screen scroll-smooth overflow-x-hidden bg-background font-sans text-foreground">
      <div className="pointer-events-none fixed inset-0 starfield" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 nebula" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img
              src={getAssetUrl(markAsset.url)}
              alt="Emblema Corazón Solar"
              className="h-10 w-10 shrink-0"
            />
            <span className="min-w-0 truncate font-display text-base tracking-[0.14em] text-gold-gradient uppercase sm:text-lg">
              Judy Bentolila
              <span className="hidden text-muted-foreground/70 xl:inline">
                {" "}| Astrología para la Nueva Era
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-x-6 text-sm lg:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setBooking(true)}
            className="shrink-0 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Reservar Sesión
          </button>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-border/40 px-5 py-2 text-sm lg:hidden">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section id="inicio" className="scroll-mt-32 px-5 pb-16 pt-14 sm:pb-20 sm:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div className="text-center lg:text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-primary/80">
                Astrología para la Nueva Era
              </p>
              <h1 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
                Tu vida cuenta una historia.
                <br />
                <span className="text-gold-gradient">
                  Los símbolos pueden ayudarte a leerla.
                </span>
              </h1>
              <p className="mt-6 text-muted-foreground">
                Astrología para la Nueva Era. Acompaño procesos de transformación y
                autoconocimiento integrando Astrología, Tarot, literatura y herramientas de
                consciencia.
              </p>
              <div className="mt-7 rounded-2xl border border-border/40 bg-black/25 p-6 text-left backdrop-blur-sm">
                <p className="text-muted-foreground">
                  Soy Judy Bentolila, Maestra de Astrología, Taróloga y Profesora de Literatura.
                  No creo en una astrología que determine tu destino, sino en una que abre
                  preguntas.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#servicios"
                  className="rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Descubrí mi propuesta
                </a>
                <button
                  onClick={() => setBooking(true)}
                  className="rounded-full border border-primary/50 px-8 py-3 text-sm text-primary transition-colors hover:bg-primary/10"
                >
                  Reservar sesión
                </button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="float-slow">
                <ConstellationArt />
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="scroll-mt-32 px-5 py-14 sm:py-16">
          <Divider />
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <div className="relative">
              <img
                src={getAssetUrl(judyAsset.url)}
                alt="Retrato de Judy Bentolila, Ishacósmica"
                className="w-full rounded-3xl border border-border"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(70% 60% at 50% 40%, transparent 45%, oklch(0.13 0.03 300 / 70%) 100%)",
                }}
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">
                Una vida dedicada a <span className="text-gold-gradient">leer historias</span>
              </h2>
              <p className="mt-4 text-sm text-primary/85">
                Soy Judy Bentolila · @Ishacosmica | Maestra de Astrología, Taróloga, Profesora de
                Literatura y Creadora de Comunidad Corazón Solar.
              </p>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Antes de leer cartas natales, aprendí a leer historias. Como Profesora de
                  Literatura, descubrí muy temprano que detrás de cada relato existen símbolos,
                  arquetipos, conflictos y transformaciones.
                </p>
                <p>
                  Hoy mi trabajo reúne esos mundos: Astrología. Tarot. Literatura. Arte. Símbolos.
                  Consciencia. No como disciplinas separadas, sino como diferentes lenguajes para
                  acercarnos a una misma pregunta:
                </p>
                <p className="font-display text-xl text-gold-gradient">
                  ¿Quién soy y qué historia estoy construyendo?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* METODOLOGÍA */}
        <section id="metodologia" className="scroll-mt-32 px-5 py-16">
          <div className="mx-auto max-w-6xl rounded-3xl border border-primary/20 bg-black/45 px-6 py-14 backdrop-blur-sm sm:px-10">
            <h2 className="text-center font-display text-3xl sm:text-4xl">
              Conocimiento que se convierte en{" "}
              <span className="text-gold-gradient">experiencia</span>
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {METODOLOGIA.map((m, i) => (
                <article key={m} className="rounded-3xl border border-border/50 bg-black/30 p-7">
                  <span className="font-display text-3xl text-gold-gradient">0{i + 1}</span>
                  <p className="mt-4 text-muted-foreground">{m}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="scroll-mt-32 px-5 py-14 sm:py-16">
          <Divider />
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-display text-3xl sm:text-4xl">
              Tres formas de <span className="text-gold-gradient">recorrer este camino</span>
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {CAMINOS.map((c) => (
                <article
                  key={c.titulo}
                  className="card-mystic flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-primary/80">{c.kicker}</p>
                  <h3 className="mt-3 font-display text-2xl text-gold-gradient">{c.titulo}</h3>
                  <p className="mt-4 mb-7 text-muted-foreground">{c.texto}</p>
                  <a
                    href={c.href}
                    className="mt-auto inline-block rounded-full bg-primary px-7 py-3 text-center text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    {c.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMUNIDAD */}
        <section id="comunidad" className="scroll-mt-32 px-5 py-14 sm:py-16">
          <Divider />
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
              Comunidad <span className="text-gold-gradient">Corazón Solar</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-display text-xl text-gold-gradient sm:text-2xl">
              Aprender. Compartir. Expandir.
            </p>

            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-border/40 bg-black/30">
              <img
                src={getAssetUrl(corazonBEditedAsset.url)}
                alt="Corazón Solar - Astrología para la nueva era"
                className="w-full object-cover object-center"
                style={{ aspectRatio: "1750/525" }}
              />
            </div>

            <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border/40 bg-black/20 p-8 text-left backdrop-blur-sm sm:p-10">
              <p className="text-muted-foreground">
                Corazón Solar nació como un espacio para reunir personas interesadas en otra manera
                de acercarse a la astrología.
              </p>
              <p className="mt-5 text-muted-foreground">
                Una Astrología donde el conocimiento dialogue con el arte, la literatura, el tarot,
                los símbolos y la experiencia personal.
              </p>

              <ul className="mt-8 grid gap-3 text-foreground sm:grid-cols-2">
                {["Clases.", "Encuentros.", "Material de estudio.", "Investigación.", "Reflexión.", "Comunidad."].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-primary">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-foreground">
                Y, sobre todo, la posibilidad de seguir aprendiendo juntos.
              </p>
            </div>

            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Quiero unirme a la comunidad
            </a>
          </div>
        </section>

        {/* MANIFIESTO */}
        <section id="manifiesto" className="scroll-mt-32 px-5 py-14 sm:py-16">
          <Divider />
          <div className="mx-auto max-w-4xl rounded-3xl border border-primary/40 bg-black/30 p-9 text-center backdrop-blur-sm sm:p-14">
            <h2 className="font-display text-3xl sm:text-4xl">
              Nuestro <span className="text-gold-gradient">Manifiesto</span>
            </h2>
            <div className="mt-8 space-y-6 font-display text-xl leading-relaxed sm:text-2xl">
              <p className="text-muted-foreground">
                No vengo a decirte tu destino. No creo que un planeta determine tu vida. No creo
                que una carta natal pueda reducir todo lo que sos. No creo que el Tarot deba
                decidir por vos.
              </p>
              <p>
                Creo en los símbolos como puertas. Creo en las preguntas. Creo en el conocimiento.
                Creo en la posibilidad de mirar nuestra historia desde otra perspectiva.
              </p>
              <p className="text-gold-gradient">
                El cielo puede mostrarnos el tiempo. La manera de vivirlo también nos pertenece.
              </p>
            </div>
          </div>
        </section>

        {/* SESIONES */}
        <section id="sesiones" className="scroll-mt-32 px-5 py-14 sm:py-16">
          <Divider />
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl">
              Tu carta cuenta una <span className="text-gold-gradient">historia única</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Cada encuentro comienza con una pregunta diferente. Mi trabajo es acompañarte para
              que la respuesta no venga desde afuera, sino desde dentro tuyo.
            </p>
            <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
              {SESIONES.map((s) => (
                <article
                  key={s.titulo}
                  className="card-mystic rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1"
                >
                  <h3 className="font-display text-xl text-gold-gradient">{s.titulo}</h3>
                  <p className="mt-3 text-muted-foreground">{s.texto}</p>
                </article>
              ))}
            </div>
            <button
              onClick={() => setBooking(true)}
              className="mt-10 rounded-full bg-primary px-9 py-3 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reservar una sesión
            </button>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/60 px-5 py-14">
        <div className="mx-auto max-w-5xl text-center">
          <img
            src={getAssetUrl(markAsset.url)}
            alt="Emblema Corazón Solar"
            className="mx-auto mb-6 w-16"
          />
          <h2 className="font-display text-3xl">
            Seguí <span className="text-gold-gradient">explorando</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            @Ishacosmica (Astrología · Tarot · Clases · Reflexiones · Clima astrológico ·
            Comunidad)
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            {REDES.map((r) => (
              <a
                key={r.label}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                aria-label={r.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <SocialIcon network={r.label} />
              </a>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-border/40 bg-black/25 p-8 backdrop-blur-sm">
            <p className="font-display text-xl text-gold-gradient">
              Únete a la Comunidad Corazón Solar
            </p>
            {subscribed ? (
              <p className="mt-4 text-sm text-muted-foreground">
                ¡Gracias! Pronto vas a recibir novedades.
              </p>
            ) : (
              <form
                className="mt-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
              >
                <label htmlFor="newsletter" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full rounded-full border border-input bg-black/30 px-5 py-3 text-sm outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Unirse
                </button>
              </form>
            )}
          </div>

          <p className="mt-12 font-display tracking-[0.2em] text-gold-gradient uppercase">
            Judy Bentolila
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Maestra de Astrología · Taróloga · Profesora de Literatura | Creadora de Comunidad
            Corazón Solar.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">JudyBentolila.com</p>
        </div>
      </footer>

      <BookingDialog open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}
