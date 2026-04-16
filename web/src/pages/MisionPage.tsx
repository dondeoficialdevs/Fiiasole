import { Link } from 'react-router-dom'
import { ArrowLeft, Eye, Lightbulb, Sparkles, Users } from 'lucide-react'
import { AboutImage } from '../components/AboutImage'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { WhatsAppFloat } from '../components/WhatsAppFloat'
import '../App.css'
import './mision-page.css'

const VALORES = [
  {
    titulo: 'Transparencia',
    texto: 'Rendición de cuentas y trazabilidad en cada recurso.',
    Icon: Eye,
  },
  {
    titulo: 'Impacto',
    texto: 'Resultados medibles y mejora real en el territorio.',
    Icon: Sparkles,
  },
  {
    titulo: 'Comunidad',
    texto: 'Participación, escucha y coproducción de soluciones.',
    Icon: Users,
  },
  {
    titulo: 'Innovación',
    texto: 'Prácticas nuevas con rigor ético y aprendizaje continuo.',
    Icon: Lightbulb,
  },
] as const

export function MisionPage() {
  return (
    <>
      <a href="#main" className="sr-only">
        Saltar al contenido
      </a>
      <SiteNav variant="solid" />

      <main id="main" className="app-shell mision-page">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Volver al inicio
        </Link>

        <p className="mission-teaser-kicker mt-10">Fundación FIIASOLE</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-h)] sm:text-4xl md:text-[2.35rem] md:leading-tight">
          Quiénes somos
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--text)]">
          Conoce nuestra misión, visión, valores y el impacto que construimos
          junto a comunidades y aliados.
        </p>

        <div className="mision-intro-grid">
          <div>
            <p className="text-base leading-relaxed text-[var(--text)]">
              Somos una organización que articula proyectos sociales con enfoque
              territorial, ética y resultados sostenibles. Combinamos
              experiencia en campo con gestión clara y alianzas que amplían el
              alcance de cada iniciativa.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--text)]">
              Esta página concentra el relato institucional de FIIASOLE: lo que
              nos mueve, cómo decidimos y hacia dónde orientamos el esfuerzo
              colectivo.
            </p>
          </div>
          <div className="mision-organic-frame">
            <AboutImage
              primary="/mission/impact.jpg"
              fallback="/mission/impact.svg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <section
          className="mision-institucional"
          aria-labelledby="relato-institucional-heading"
        >
          <h2 id="relato-institucional-heading" className="mision-institucional__title">
            Relato institucional
          </h2>
          <div className="mision-institucional__prose">
            <p>
              La{' '}
              <strong>
                Fundación de Iniciativas Innovadoras Ambientales y Socioculturales
                (FIIASOLE)
              </strong>{' '}
              es una organización sin ánimo de lucro que impulsa la transformación
              social, ambiental y cultural de los territorios, priorizando a
              personas y comunidades en situación de vulnerabilidad o pobreza.
            </p>
            <p>
              Integramos desarrollo humano, medio ambiente, tejido social y
              bienestar animal, con acciones innovadoras y participativas.
              Prestamos servicios sociales, ambientales y culturales para fortalecer
              capacidades, la participación ciudadana y la paz desde los
              territorios, convencidos de que el desarrollo sostenible exige que las
              comunidades decidan y ejecuten soluciones acordes a sus realidades.
            </p>
            <p>
              De forma transversal promovemos la protección animal, la tenencia
              responsable y el respeto por la vida, en equilibrio entre las
              personas y el entorno.
            </p>
            <p>
              Actuamos con ética, transparencia e inclusión, articulados con
              comunidades, organizaciones e instituciones; nuestra gestión apunta a
              impactos duraderos y al cumplimiento de los Objetivos de Desarrollo
              Sostenible (ODS).
            </p>

            <h3 id="vision" className="mision-institucional__subtitle">
              Visión
            </h3>
            <p>
              Ser una fundación referente en impacto social y ambiental
              sostenible, reconocida por la confianza de las comunidades, la
              calidad de sus alianzas y la innovación al servicio del bien común.
            </p>

            <h3 id="pilares" className="mision-institucional__subtitle">
              Pilares
            </h3>
            <p>
              <strong>Personas y territorios:</strong> priorizamos a quienes
              enfrentan vulnerabilidad y fortalecemos capacidades donde viven y
              trabajan. <strong>Ambiente y vida:</strong> cuidamos el entorno y el
              bienestar animal. <strong>Participación y paz:</strong> impulsamos la
              ciudadanía activa y el diálogo. <strong>Alianzas y resultados:</strong>{' '}
              coordinamos con instituciones y comunidades, con foco en impacto
              medible.
            </p>

            <h3 id="comunidad" className="mision-institucional__subtitle">
              Nuestra comunidad
            </h3>
            <p>
              Son las personas en los territorios donde intervenimos —niñas, niños,
              jóvenes, familias y adultos mayores— y las redes comunitarias y
              organizaciones que acompañan participación, educación y cuidado del
              ambiente. Trabajamos con voluntarios y aliados que creen que el cambio
              se construye en colectivo.
            </p>
            <p>
              Si compartes esta visión como beneficiario, voluntario, aliado o
              donante, eres parte del ecosistema FIIASOLE: proyectos con sentido,
              transparencia y respeto por la diversidad.
            </p>
          </div>
        </section>

        <section aria-labelledby="mision-vision-heading" className="mt-10">
          <h2 id="mision-vision-heading" className="sr-only">
            Misión y visión
          </h2>
          <div className="mision-glass-grid">
            <article className="mision-glass-card">
              <div className="mision-glass-card__media">
                <AboutImage
                  primary="/about/mision.jpg"
                  fallback="/about/mision.svg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mision-glass-card__inner">
                <h2>Misión</h2>
                <p>
                  Mejorar la calidad de vida de las personas y comunidades en
                  situación de vulnerabilidad, mediante programas inclusivos,
                  educación, emprendimiento y acompañamiento integral, con
                  equidad y respeto por la dignidad humana.
                </p>
              </div>
            </article>
            <article className="mision-glass-card">
              <div className="mision-glass-card__media">
                <AboutImage
                  primary="/about/vision.jpg"
                  fallback="/about/vision.svg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mision-glass-card__inner">
                <h2>Visión</h2>
                <p>
                  Ser una fundación referente en impacto social y ambiental
                  sostenible, reconocida por la confianza de las comunidades, la
                  calidad de sus alianzas y la innovación al servicio del bien
                  común.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="mision-values" aria-labelledby="valores-heading">
          <h2 id="valores-heading">Nuestros valores</h2>
          <div className="mision-values-grid">
            {VALORES.map(({ titulo, texto, Icon }) => (
              <div key={titulo} className="mision-value-cell">
                <div className="mision-value-icon" aria-hidden>
                  <Icon className="size-7 stroke-[1.5]" />
                </div>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mision-explore" aria-labelledby="explore-heading">
          <h2 id="explore-heading" className="text-lg font-semibold text-[var(--text-h)]">
            Explorar más
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">
            Documentos, informes y vías de contacto en el sitio principal.
            Revisa{' '}
            <Link
              to="/documentos"
              className="font-semibold text-[var(--accent)] underline-offset-2 hover:underline"
            >
              Documentos
            </Link>{' '}
            o escríbenos desde{' '}
            <Link
              to="/contacto"
              className="font-semibold text-[var(--accent)] underline-offset-2 hover:underline"
            >
              Contáctanos
            </Link>
            .
          </p>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
