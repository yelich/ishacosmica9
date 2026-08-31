import { createFileRoute } from "@tanstack/react-router";

import corazonBEditedAsset from "@/assets/corazonB-edited.png.asset.json";
import judyAsset from "@/assets/judy.png.asset.json";
import markAsset from "@/assets/mark.png.asset.json";
import { SocialIcon } from "@/components/SocialIcon";
import { getAssetUrl } from "@/lib/asset-url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ishacosmica · Corazón Solar | Judy Bentolila, astrología y tarot" },
      {
        name: "description",
        content:
          "Judith Bentolila (Ishacósmica): astrología evolutiva, tarot, Reiki y Astroesoterismo Cuántico para transformar tus crisis en claridad. Únete a Corazón Solar.",
      },
      { property: "og:title", content: "Ishacosmica · Corazón Solar | Judy Bentolila" },
      {
        property: "og:description",
        content:
          "Astrología, tarot y terapias energéticas para tu evolución consciente. Bienvenida a la comunidad Corazón Solar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "sobre-mi", label: "Sobre Mí" },
  { id: "servicios", label: "Servicios" },
  { id: "comunidad", label: "Comunidad" },
  { id: "talleres", label: "Talleres" },
  { id: "contacto", label: "Contacto" },
];

const SERVICIOS = [
  {
    titulo: "Tarot.",
    texto:
      "La comprensión simbólica y astral puesta al servicio de tus decisiones conscientes.",
    transformacion:
      "Obtienes una hoja de ruta clara de tu alma. No hago predicciones para asustarte, sino lecturas estratégicas que te dan respuestas inmediatas para tomar las riendas de tu presente.",
  },
  {
    titulo: "Astrología Evolutiva.",
    texto:
      "Tu carta natal no es una sentencia.",
    transformacion:
      "Una posibilidad de observar tus recursos, desafios, tus ciclos y las preguntas que estan buscando una respuesta en este moemnto de tu vida.",
  },
  {
    titulo: "Reiki y Alineación de Energía.",
    texto:
      "Restauración del campo bioenergético para recuperar la armonía interior.",
    transformacion:
      "Una limpieza profunda de tu campo electromagnético. Pensada para desbloquear el cansancio físico y mental, y permitir que tu vitalidad y tu abundancia vuelvan a fluir sin resistencia.",
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

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <div className="pointer-events-none fixed inset-0 starfield" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 nebula" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3">
          <a href="#bienvenida" className="flex items-center gap-3">
            <img
              src={getAssetUrl(markAsset.url)}
              alt="Emblema Corazón Solar"
              className="h-10 w-10"
            />
            <span className="font-display text-lg tracking-[0.18em] text-gold-gradient uppercase sm:text-xl">
              Ishacosmica
            </span>
          </a>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
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
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO / PROPUESTA DE VALOR */}
        <section id="bienvenida" className="scroll-mt-24 px-5 pb-16 pt-14 sm:pb-20 sm:pt-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary/80">
              Astrología para la Nueva Era
            </p>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Tu vida cuenta una historia.
              <br />
              Los símbolos pueden ayudarte a leerla.
            </h1>

            <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border/40 bg-black/20 p-8 backdrop-blur-sm sm:p-10">
              <p className="font-display text-xl text-gold-gradient sm:text-2xl">
                Soy Judy Bentolila, Maestra de Astrología, Taróloga y Profesora de Literatura.
              </p>
              <p className="mt-5 text-muted-foreground">
                Desde hace más de veinte años acompaño procesos de transformación y autoconocimiento, integrando Astrología, Tarot, literatura, símbolos y distintas herramientas de consciencia.
              </p>

              <a
                href="#servicios"
                className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Agendar una sesión
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="scroll-mt-24 px-5 py-14 sm:py-16">
          <Divider />
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <div className="relative">
              <img
                src={getAssetUrl(judyAsset.url)}
                alt="Retrato de Judith Bentolila, Ishacósmica"
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
                Te acompaño a leer tu historia
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Profesora de Literatura, astróloga, taróloga y terapeuta holística. Desde hace
                  más de 20 años acompaño a personas en procesos de transformación personal a
                  través de distintas disciplinas terapéuticas, integrando herramientas como la
                  Maestría en Reiki, la Memoria Celular y otros saberes orientados al despertar de
                  la conciencia. Hace más de cinco años incorporé la Astrología y el Tarot como
                  pilares fundamentales de mi camino profesional.
                </p>
                <p>
                  Desde la visión del Astroesoterismo Cuántico integro los conocimientos
                  ancestrales con una mirada contemporánea, comprendiendo que cada carta natal y
                  cada símbolo del Tarot son mapas de autoconocimiento que nos permiten reconocer
                  nuestro propósito, transformar desafíos en oportunidades y expandir nuestro
                  potencial. Mi misión es acompañarte a descubrir tus propios recursos, fortalecer
                  tu poder interior y recorrer un camino de evolución consciente.
                </p>
                <p>
                  Hoy brindo sesiones personalizadas, talleres vivenciales, cursos de formación y
                  clases, presenciales y online, creando espacios cálidos, profundos y respetuosos
                  donde cada persona puede aprender, sanar y crecer a su propio ritmo.
                </p>
              </div>
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-block rounded-full border border-primary/50 px-7 py-3 text-sm text-primary transition-colors hover:bg-primary/10"
              >
                ¿Quieres saber más? Únete a Corazón Solar
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="scroll-mt-24 px-5 py-14 sm:py-16">
          <Divider />
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-display text-3xl sm:text-4xl">Servicios</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Tres caminos distintos, un mismo destino: que vuelvas a sentirte al mando de tu vida.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {SERVICIOS.map((s) => (
                <article key={s.titulo} className="card-mystic flex h-full flex-col rounded-3xl p-8">
                  <h3 className="font-display text-2xl text-gold-gradient">{s.titulo}</h3>
                  <p className="mt-4 text-muted-foreground">{s.texto}</p>
                  <p className="mt-6 text-xs uppercase tracking-[0.3em] text-primary/80">
                    Tu transformación
                  </p>
                  <p className="mt-3 mb-7 text-muted-foreground">{s.transformacion}</p>
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-block rounded-full bg-primary px-7 py-3 text-center text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Agendar
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMUNIDAD */}
        <section id="comunidad" className="scroll-mt-24 px-5 py-14 sm:py-16">
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

        {/* PROPUESTA DE VALOR */}
        <section className="mx-auto max-w-4xl px-5 py-14 text-center sm:py-16">
          <Divider />
          <p className="font-display text-2xl leading-relaxed sm:text-3xl">
            “Te ayudo a transformar la incertidumbre y las crisis en{" "}
            <span className="text-gold-gradient">claridad absoluta</span>, guiándote hacia un
            autoconocimiento profundo que devuelve el propósito espiritual a tu vida. A través de
            la comunidad Corazón Solar y mi guía experta, obtendrás las certezas y la fuerza
            interior necesarias para liderar tu propio destino ante cualquier desafío.”
          </p>
        </section>

        {/* TALLERES */}
        <section id="talleres" className="scroll-mt-24 px-5 py-14 sm:py-16">
          <Divider />
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/80">
              Formación y experiencia
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Talleres <span className="text-gold-gradient">vivenciales</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Espacios de aprendizaje profundo donde la astrología, la alta magia y el trabajo
              energético se viven en cuerpo y alma, no solo se estudian.
            </p>
            <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
              {[
                {
                  t: "Talleres vivenciales",
                  d: "Experiencias grupales para integrar los ciclos astrológicos con prácticas de introspección, ritual y expansión de la consciencia.",
                },
                {
                  t: "Cursos de formación",
                  d: "Programas estructurados de tarot, astrología evolutiva y Astroesoterismo Cuántico, para quienes desean profundizar paso a paso.",
                },
                {
                  t: "Encuentros en vivo",
                  d: "Clases periódicas dentro de la comunidad Corazón Solar, con espacio para preguntas, práctica guiada y acompañamiento directo.",
                },
              ].map((c) => (
                <article key={c.t} className="card-mystic rounded-3xl p-8">
                  <h3 className="font-display text-xl text-gold-gradient">{c.t}</h3>
                  <p className="mt-4 text-muted-foreground">{c.d}</p>
                </article>
              ))}
            </div>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Quiero enterarme de los próximos talleres
            </a>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-24 px-5 py-14 sm:py-16">
          <Divider />
          <div className="mx-auto max-w-3xl text-center">
            <img
              src={getAssetUrl(markAsset.url)}
              alt="Emblema Corazón Solar"
              className="mx-auto mb-6 w-20 float-slow"
            />
            <h2 className="font-display text-3xl sm:text-4xl">
              <span className="text-gold-gradient">Contacto</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Elige el canal que prefieras para comenzar tu camino: agenda tu sesión o escríbeme
              directamente.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Agendar una sesión
              </a>
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full border border-primary/50 px-8 py-3 text-sm text-primary transition-colors hover:bg-primary/10"
              >
                Escribir por Telegram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/60 px-5 py-10 text-center text-sm text-muted-foreground">
        <p className="font-display tracking-[0.25em] text-gold-gradient uppercase">
          Ishacosmica · Corazón Solar
        </p>
        <p className="mt-3">Judith Bentolila · Astrología para la Nueva Era</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
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
      </footer>
    </div>
  );
}
