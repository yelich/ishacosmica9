import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import corazonBAsset from "@/assets/corazonB.png.asset.json";
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
    titulo: "Tarot y Astrología Evolutiva",
    texto:
      "La comprensión simbólica y astral puesta al servicio de tus decisiones conscientes.",
    transformacion:
      "Obtienes una hoja de ruta clara de tu alma. No hago predicciones para asustarte, sino lecturas estratégicas que te dan respuestas inmediatas para tomar las riendas de tu presente.",
  },
  {
    titulo: "Reiki y Alineación de Energía",
    texto:
      "Restauración del campo bioenergético para recuperar la armonía interior.",
    transformacion:
      "Una limpieza profunda de tu campo electromagnético. Pensada para desbloquear el cansancio físico y mental, y permitir que tu vitalidad y tu abundancia vuelvan a fluir sin resistencia.",
  },
  {
    titulo: "Astroesoterismo Cuántico y Alta Magia",
    texto:
      "Intervención cuántica avanzada para reprogramar tu frecuencia y disolver bloqueos.",
    transformacion:
      "El puente definitivo hacia tu nueva realidad. Intervenimos directamente en tu vibración para reprogramar patrones repetitivos y romper bloqueos invisibles en tiempo récord.",
  },
];

const FAQ = [
  {
    q: "¿Y si me dices algo que no quiero escuchar?",
    a: "No trabajo desde el miedo. Tu carta natal no es una sentencia, es un mapa: te muestra el terreno para que elijas el camino. Todo lo que veo te lo comparto con cuidado y siempre acompañado de un recurso concreto para trabajarlo. Sales de la sesión con más calma, no con más susto.",
  },
  {
    q: "¿Necesito saber de astrología o tarot para empezar?",
    a: "Para nada. Es como ir al mecánico: no hace falta que sepas de motores para entender qué le pasa a tu auto. Yo traduzco los símbolos a un lenguaje cotidiano, con ejemplos de tu vida real. Muchas personas llegan sin saber ni su ascendente y salen entendiéndose mejor que nunca.",
  },
  {
    q: "¿Esto sustituye a la terapia psicológica o médica?",
    a: "No, y te lo digo con total transparencia. Mi trabajo es un acompañamiento espiritual y energético que convive muy bien con tu terapia o tu tratamiento médico, nunca los reemplaza. Si en algún momento veo que necesitas otro tipo de ayuda, te lo voy a decir de frente.",
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
const WHATSAPP = "https://wa.me/5495411979623";
const CALENDLY = "https://calendly.com/judyben9/30min";

function Divider() {
  return (
    <div className="mx-auto my-14 flex max-w-xs items-center gap-4">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
      <span className="text-primary">✦</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
    </div>
  );
}


function Index() {
  const [open, setOpen] = useState<number | null>(0);

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

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="scroll-mt-24 px-5 py-10">
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
                ¡Hola! Soy <span className="text-gold-gradient">Judith Bentolila</span> —
                Ishacósmica
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
        {/* HERO */}
        <section id="bienvenida" className="scroll-mt-24 pt-10 sm:pt-16">
          <div className="mx-auto max-w-5xl px-5 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary/80">
              Astrología para la nueva era
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl">
              Con <span className="text-gold-gradient">Judy Bentolila</span> transformas la
              incertidumbre en claridad absoluta
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Bienvenida a Corazón Solar, el refugio cuántico donde transformamos tus crisis en
              claridad a la velocidad de la luz.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full bg-primary px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Quiero unirme a la comunidad
              </a>
            </div>
          </div>

          <div className="relative mt-8 sm:mt-10">
            <div className="mx-auto w-full max-w-[1920px] px-0 sm:px-5 lg:px-10">
              <div className="relative overflow-hidden rounded-none sm:rounded-2xl bg-transparent">
                <img
                  src={getAssetUrl(corazonBAsset.url)}
                  alt="Corazón Solar - Astrología para la nueva era"
                  className="w-full object-cover object-center"
                  style={{ aspectRatio: "1750/525" }}
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl px-5 pt-8 text-center sm:pt-12">
            <p className="text-base text-muted-foreground sm:text-lg">
              Este no es solo un espacio de estudio: es un contenedor sagrado de evolución,
              contención y sabiduría compartida. Aquí nos reunimos almas dispuestas a mirar más allá
              de lo visible, usando la astrología, el tarot y la energía cuántica como brújulas
              inmediatas de vida.
            </p>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              En Corazón Solar dejas de transitar tus cambios en soledad para integrarte en una red
              de apoyo que eleva tu vibración y te sostiene en cada paso de tu despertar
              espiritual. ¡Tu lugar junto al fuego sagrado está listo!
            </p>
          </div>
        </section>

        {/* PAS */}
        <section className="mx-auto max-w-4xl px-5 py-10">
          <Divider />
          <h2 className="text-center font-display text-3xl sm:text-4xl">
            Si sientes que tu vida se movió de lugar y todavía no encuentras el mapa…
          </h2>
          <div className="mt-10 space-y-6 text-lg text-muted-foreground">
            <p>
              Te levantas con esa sensación rara en el pecho: nada está tan mal, pero nada termina
              de encajar. Vas cumpliendo con todo, sostienes a los demás y, cuando la casa queda en
              silencio, aparece la pregunta incómoda: <em>¿esto es todo?</em>
            </p>
            <p>
              Y entonces empiezas a girar en círculos. Consultas mil videos, guardas frases de
              Instagram, preguntas a una amiga, a otra, a un tarot online que te dice algo y al día
              siguiente lo contrario. Es como buscar una dirección con tres mapas distintos abiertos
              a la vez: cuanta más información juntas, más perdida te sientes. Y mientras tanto el
              tiempo pasa, los mismos vínculos se repiten, el mismo cansancio vuelve, y esa decisión
              importante sigue esperándote en el cajón.
            </p>
            <p className="text-foreground">
              Aquí hacemos algo distinto. No te doy más información: te doy claridad. Con tu carta
              natal y el tarot como mapa, y con las terapias energéticas para mover lo que está
              trabado, ordenamos juntas tu historia hasta que puedas ver con tus propios ojos qué
              está pasando, por qué se repite y cuál es tu siguiente paso real. Sales sabiendo qué
              hacer el lunes por la mañana, no sólo con una linda metáfora.
            </p>
          </div>
        </section>

        {/* STORYTELLING */}
        <section className="mx-auto max-w-5xl px-5 py-6">
          <Divider />
          <div className="card-mystic rounded-3xl p-8 sm:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/80">
              ¿Por qué conmigo?
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Porque llevo más de 20 años acompañando a personas.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                Soy profesora de Literatura antes que astróloga, y creo que eso lo explica todo:
                me pasé la vida enseñando a leer historias. Una carta natal y una tirada de tarot
                son exactamente eso, la historia de tu alma escrita en símbolos. Mi trabajo es
                ayudarte a leerla, no leerla por ti.
              </p>
              <p>
                Durante más de dos décadas acompañé procesos de transformación con Maestría en
                Reiki, Memoria Celular y otros saberes del despertar de la conciencia. Hace más de
                cinco años sumé la astrología y el Tarot como pilares de mi camino, y desde el
                Astroesoterismo Cuántico uní lo ancestral con una mirada de hoy.
              </p>
              <p>
                No te voy a hablar desde un pedestal. Yo también tuve mis crisis, mis noches de no
                entender nada y mis vueltas al mismo punto. Por eso creé Corazón Solar: el espacio
                cálido que a mí me hubiera gustado encontrar. Creo profundamente que el
                conocimiento cobra sentido cuando se convierte en experiencia de transformación.
              </p>
            </div>
          </div>
        </section>

        {/* PROPUESTA DE VALOR */}
        <section className="mx-auto max-w-4xl px-5 py-6 text-center">
          <Divider />
          <p className="font-display text-2xl leading-relaxed sm:text-3xl">
            “Te ayudo a transformar la incertidumbre y las crisis en{" "}
            <span className="text-gold-gradient">claridad absoluta</span>, guiándote hacia un
            autoconocimiento profundo que devuelve el propósito espiritual a tu vida. A través de
            la comunidad Corazón Solar y mi guía experta, obtendrás las certezas y la fuerza
            interior necesarias para liderar tu propio destino ante cualquier desafío.”
          </p>
        </section>


        {/* SERVICIOS */}
        <section id="servicios" className="scroll-mt-24 px-5 py-10">
          <Divider />
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-display text-3xl sm:text-4xl">Servicios</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Tres caminos distintos, un mismo destino: que vuelvas a sentirte al mando de tu vida.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {SERVICIOS.map((s) => (
                <article key={s.titulo} className="card-mystic flex h-full flex-col rounded-3xl p-8">
                  <h3 className="font-display text-2xl text-gold-gradient">{s.titulo}</h3>
                  <p className="mt-4 text-muted-foreground">{s.texto}</p>
                  <p className="mt-6 text-xs uppercase tracking-[0.3em] text-primary/80">
                    Tu transformación
                  </p>
                  <p className="mt-3 text-muted-foreground">{s.transformacion}</p>
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
        <section id="comunidad" className="scroll-mt-24 px-5 py-10">
          <Divider />
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/80">
              Ecosistema de apoyo
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Comunidad <span className="text-gold-gradient">Corazón Solar</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Un contenedor sagrado donde el enfoque astrológico reflexivo y las almas en evolución
              se unen para transformar tus crisis en certezas. Conoce nuestros encuentros:
            </p>
            <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
              {[
                {
                  t: "Encuentros en vivo",
                  d: "Clases periódicas y espacios de interacción grupal para profundizar en el autoconocimiento.",
                },
                {
                  t: "Astrología para la Nueva Era",
                  d: "Acompañamiento durante ciclos astrológicos importantes —temporadas de eclipses, lunas llenas— para la observación interna y la expansión de la consciencia.",
                },
                {
                  t: "Enfoque reflexivo",
                  d: "Promovemos la pausa, el registro de las emociones y la introspección, en lugar de la búsqueda apresurada de respuestas externas.",
                },
              ].map((c) => (
                <article key={c.t} className="card-mystic rounded-3xl p-8">
                  <h3 className="font-display text-xl text-gold-gradient">{c.t}</h3>
                  <p className="mt-4 text-muted-foreground">{c.d}</p>
                </article>
              ))}
            </div>
            <h3 className="mt-14 font-display text-2xl sm:text-3xl">
              Tu lugar junto al fuego sagrado está listo
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              En Corazón Solar dejas de transitar tus cambios en soledad para integrarte en una red
              de apoyo que eleva tu vibración y te sostiene en cada paso de tu despertar espiritual.
            </p>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Quiero unirme a la comunidad
            </a>
          </div>
        </section>

        {/* TALLERES */}
        <section id="talleres" className="scroll-mt-24 px-5 py-10">
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
            <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
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

        {/* FAQ */}
        <section id="preguntas" className="scroll-mt-24 px-5 py-10">
          <Divider />
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl sm:text-4xl">
              Preguntas que me hacen siempre
            </h2>
            <div className="mt-10 space-y-4">
              {FAQ.map((f, i) => (
                <div key={f.q} className="card-mystic rounded-2xl">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-xl"
                    aria-expanded={open === i}
                  >
                    <span>{f.q}</span>
                    <span className="text-primary">{open === i ? "−" : "+"}</span>
                  </button>
                  {open === i && (
                    <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-24 px-5 py-10">
          <Divider />
          <div className="mx-auto max-w-3xl text-center">
            <img
              src={getAssetUrl(markAsset.url)}
              alt="Emblema Corazón Solar"
              className="mx-auto mb-6 w-20 float-slow"
            />
            <h2 className="font-display text-3xl sm:text-4xl">Charlamos</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              No hace falta que tengas claro qué necesitas ni que sepas por dónde empezar.
              Escríbeme y me cuentas qué te está pasando, como quien le cuenta algo a una amiga
              tomando un café. Yo te leo, te respondo y entre las dos vemos cuál es el primer paso.
              Sin compromiso y sin apuro: aquí se llega cuando se está lista.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Escribirme por WhatsApp
              </a>
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary/50 px-8 py-3 text-sm text-primary transition-colors hover:bg-primary/10"
              >
                Entrar a la comunidad
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-12 border-t border-border/60 px-5 py-10 text-center text-sm text-muted-foreground">
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
