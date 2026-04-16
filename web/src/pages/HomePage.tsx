import { Link } from 'react-router-dom'
import { AboutImage } from '../components/AboutImage'
import { ProgramasTiltGrid } from '../components/ProgramasTiltGrid'
import { PROYECTOS_LIST } from '../data/proyectos'
import { SITE, telefonoToHref } from '../data/site'
import { AlliesCarousel } from '../components/AlliesCarousel'
import { HeroCarousel } from '../components/HeroCarousel'
import { MissionTeaser } from '../components/MissionTeaser'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { WhatsAppFloat } from '../components/WhatsAppFloat'
import '../App.css'
import './programa-page.css'

export function HomePage() {
  return (
    <>
      <header
        id="inicio"
        className="relative min-h-[100svh] w-full overflow-hidden bg-black"
      >
        <h1 className="sr-only">Fundación FIIASOLE</h1>
        <div className="absolute inset-0 z-0">
          <HeroCarousel fullBleed />
        </div>
        <SiteNav variant="overlay" />
      </header>

      <div className="post-hero-band">
        <div className="post-hero-inner">
          <AlliesCarousel />
          <MissionTeaser />
        </div>
      </div>

      <main className="app-shell foundation-page pb-24 sm:pb-20">
        <div className="ticks" />

        <section
          id="about"
          className="foundation-section foundation-section--about"
          aria-labelledby="about-title"
        >
          <p className="foundation-kicker">Fundación FIIASOLE</p>
          <h2 id="about-title" className="foundation-section-title">
            Quiénes somos
          </h2>
          <div className="foundation-about-copy foundation-about-copy--teaser">
            <p>
              La{' '}
              <strong>
                Fundación de Iniciativas Innovadoras Ambientales y Socioculturales
                (FIIASOLE)
              </strong>{' '}
              es una organización sin ánimo de lucro que impulsa la
              transformación social, ambiental y cultural de los territorios,
              priorizando a personas y comunidades en situación de
              vulnerabilidad.
            </p>
            <p>
              Integramos desarrollo humano, ambiente, tejido social y bienestar
              animal, con acciones participativas y sostenibles.
            </p>
            <p className="foundation-about-cta-wrap">
              <Link
                to="/mision"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--text-h)] transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                Ver más →
              </Link>
            </p>
          </div>
        </section>

        <section
          id="programas"
          className="foundation-section"
          aria-labelledby="programs-title"
        >
          <h2 id="programs-title" className="foundation-section-title">
            Programas
          </h2>
          <p className="foundation-lead foundation-lead--programs">
            Líneas de acción donde concentramos recursos y voluntades para
            maximizar el impacto. Elige un programa para ver el detalle.
          </p>
          <ProgramasTiltGrid centerSlug="home" />
        </section>

        <section
          id="proyectos"
          className="foundation-section"
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title" className="foundation-section-title">
            Proyectos
          </h2>
          <p className="foundation-lead foundation-lead--programs">
            El eje principal sigue siendo invernaderos e innovación en campo; en
            la página de proyectos encontrarás el listado completo (cerca de 15
            líneas) para ampliar textos e imágenes cuando quieras.
          </p>
          <div className="foundation-grid foundation-grid--programs">
            {PROYECTOS_LIST.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                to={`/proyectos/${p.slug}`}
                className="foundation-card foundation-card--stack foundation-card--link"
              >
                <div className="foundation-card__media-top">
                  <AboutImage
                    primary={p.hero.primary}
                    fallback={p.hero.fallback}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="foundation-card__body">
                  <h3>{p.title}</h3>
                  <p>{p.intro}</p>
                  <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
                    Ver proyecto →
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] px-6 py-3 text-sm font-semibold text-[var(--text-h)] transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Ver todos los proyectos →
            </Link>
          </p>
        </section>

        <section
          id="contacto"
          className="foundation-section"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title" className="foundation-section-title">
            Contáctanos
          </h2>
          <p className="foundation-lead foundation-lead--programs">
            Voluntariado, alianzas o donaciones: en la página de contacto
            encuentras mapa, formulario y datos completos de la fundación.
          </p>
          <div className="foundation-contact-strip">
            <div className="foundation-contact-strip__channels">
              <p className="foundation-contact-strip__line">
                <span className="font-semibold text-[var(--text-h)]">
                  Teléfonos:
                </span>{' '}
                {SITE.telefonos.map((t, i) => (
                  <span key={t}>
                    {i > 0 ? ' · ' : null}
                    <a
                      href={telefonoToHref(t)}
                      className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
                    >
                      {t}
                    </a>
                  </span>
                ))}
              </p>
              <p className="foundation-contact-strip__line">
                <span className="font-semibold text-[var(--text-h)]">
                  Correo:
                </span>{' '}
                <a
                  href={`mailto:${SITE.emails[0]}`}
                  className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
                >
                  {SITE.emails[0]}
                </a>
              </p>
            </div>
            <Link
              to="/contacto"
              className="foundation-contact-strip__cta inline-flex items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--bg)] px-6 py-3 text-sm font-semibold text-[var(--text-h)] shadow-sm transition hover:brightness-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Mapa, formulario y más datos →
            </Link>
          </div>
        </section>

        <section
          id="documentos"
          className="foundation-section"
          aria-labelledby="docs-title"
        >
          <h2 id="docs-title" className="foundation-section-title">
            Documentos
          </h2>
          <p className="foundation-lead">
            Informes, políticas y recursos públicos de la fundación.{' '}
            <Link
              to="/documentos"
              className="font-semibold text-[var(--accent)] underline-offset-2 hover:underline"
            >
              Ver página de documentos
            </Link>
            .
          </p>
          <div className="foundation-grid foundation-grid--programs">
            <article className="foundation-card foundation-card--stack">
              <div className="foundation-card__media-top">
                <AboutImage
                  primary="/documentos/informe.jpg"
                  fallback="/documentos/informe.svg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="foundation-card__body">
                <h3>Informe de gestión</h3>
                <p>Resumen anual de actividades, impacto y cuentas.</p>
              </div>
            </article>
            <article className="foundation-card foundation-card--stack">
              <div className="foundation-card__media-top">
                <AboutImage
                  primary="/documentos/politicas.jpg"
                  fallback="/documentos/politicas.svg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="foundation-card__body">
                <h3>Políticas</h3>
                <p>Marco ético, privacidad y buen gobierno.</p>
              </div>
            </article>
            <article className="foundation-card foundation-card--stack">
              <div className="foundation-card__media-top">
                <AboutImage
                  primary="/documentos/recursos.jpg"
                  fallback="/documentos/recursos.svg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="foundation-card__body">
                <h3>Recursos descargables</h3>
                <p>Guías y materiales para comunidad educativa y aliados.</p>
              </div>
            </article>
          </div>
        </section>

      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
