import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { AboutImage } from '../components/AboutImage'
import { ProyectoCircuito } from '../components/ProyectoCircuito'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { WhatsAppFloat } from '../components/WhatsAppFloat'
import { getProyectoBySlug, isProyectoSlug } from '../data/proyectos'
import '../App.css'
import './proyecto-page.css'

export function ProyectoPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !isProyectoSlug(slug)) {
    return <Navigate to="/proyectos" replace />
  }

  const p = getProyectoBySlug(slug)
  if (!p) {
    return <Navigate to="/proyectos" replace />
  }

  return (
    <>
      <a href="#main" className="sr-only">
        Saltar al contenido
      </a>
      <SiteNav variant="solid" />

      <main id="main" className="app-shell proyecto-page">
        <Link
          to="/proyectos"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Todos los proyectos
        </Link>

        <p className="proyecto-kicker mt-10">{p.kicker}</p>
        <h1 className="proyecto-title">{p.title}</h1>
        <p className="proyecto-intro">{p.intro}</p>

        <div className="proyecto-hero">
          <img
            src={p.hero.primary}
            alt=""
            loading="eager"
            decoding="async"
            onError={(e) => {
              const el = e.currentTarget
              if (el.dataset.fallbackApplied === '1') return
              el.dataset.fallbackApplied = '1'
              el.src = p.hero.fallback
            }}
          />
        </div>

        {p.mostrarCircuito && p.circuito && p.circuito.length > 0 ? (
          <section aria-labelledby="circuito-heading">
            <h2 id="circuito-heading" className="proyecto-section-title">
              Circuito del proyecto
            </h2>
            <p className="mb-3 max-w-2xl text-sm leading-relaxed text-[var(--text)]">
              Así ordenamos el trabajo en terreno: cada etapa alimenta la
              siguiente, con decisiones explícitas y aprendizaje continuo.
            </p>
            <ProyectoCircuito steps={p.circuito} />
          </section>
        ) : null}

        {p.mostrarCircuito && p.desafio && p.respuesta ? (
          <section aria-labelledby="split-heading">
            <h2 id="split-heading" className="sr-only">
              Desafío y respuesta
            </h2>
            <div className="proyecto-split">
              <div className="proyecto-split__card proyecto-split__card--challenge">
                <p className="proyecto-split__eyebrow">Desafío</p>
                <p className="proyecto-split__text">{p.desafio}</p>
              </div>
              <div className="proyecto-split__card proyecto-split__card--response">
                <p className="proyecto-split__eyebrow">Nuestra respuesta</p>
                <p className="proyecto-split__text">{p.respuesta}</p>
              </div>
            </div>
          </section>
        ) : null}

        {p.bloques && p.bloques.length > 0
          ? p.bloques.map((bloque, i) => (
              <section
                key={i}
                className="proyecto-bloque"
                aria-labelledby={bloque.titulo ? `bloque-${i}` : undefined}
              >
                {bloque.titulo ? (
                  <h2 id={`bloque-${i}`} className="proyecto-bloque__title">
                    {bloque.titulo}
                  </h2>
                ) : null}
                {bloque.image ? (
                  <div className="proyecto-bloque__media">
                    <AboutImage
                      primary={bloque.image.primary}
                      fallback={bloque.image.fallback}
                      alt=""
                      className="proyecto-bloque__img"
                    />
                  </div>
                ) : null}
                <div className="proyecto-bloque__prose">
                  {bloque.paragraphs.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </section>
            ))
          : null}

        <p className="proyecto-cierre">
          {p.cierre}{' '}
          <Link to="/contacto" className="proyecto-cierre__link">
            Contáctanos
          </Link>
        </p>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
