import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ProgramasTiltGrid } from '../components/ProgramasTiltGrid'
import { ProgramStoryCarousel } from '../components/ProgramStoryCarousel'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { WhatsAppFloat } from '../components/WhatsAppFloat'
import { isProgramSlug, PROGRAMAS } from '../data/programas'
import '../App.css'
import './programa-page.css'

export function ProgramaPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !isProgramSlug(slug)) {
    return <Navigate to="/" replace />
  }

  const program = PROGRAMAS[slug]

  return (
    <>
      <a href="#main" className="sr-only">
        Saltar al contenido
      </a>
      <SiteNav variant="solid" />

      <main id="main" className="app-shell programa-detail-page">
        <Link
          to="/#programas"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Volver a programas
        </Link>

        <p className="programa-detail-kicker mt-10">Programa</p>
        <h1 className="programa-detail-title">{program.title}</h1>
        <p className="programa-detail-intro">{program.intro}</p>

        <section
          className="programa-detail-hero"
          aria-labelledby="programa-trio-heading"
        >
          <h2 id="programa-trio-heading" className="sr-only">
            Líneas de programa
          </h2>
          <ProgramasTiltGrid centerSlug={slug} />
        </section>

        <section
          className="programa-detail-stories"
          aria-labelledby="programa-stories-heading"
        >
          <h2
            id="programa-stories-heading"
            className="programa-detail-stories__title"
          >
            Qué hacemos en este programa
          </h2>
          <ProgramStoryCarousel
            slides={program.carousel}
            ariaLabel={`Historias del programa ${program.title}`}
          />

          <div
            className="programa-detail-proyectos"
            aria-labelledby="programa-proyectos-heading"
          >
            <h3
              id="programa-proyectos-heading"
              className="programa-detail-proyectos__title"
            >
              {program.proyectosBloque.title}
            </h3>
            <div className="programa-detail-proyectos__body">
              {program.proyectosBloque.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
