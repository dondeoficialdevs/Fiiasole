import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AboutImage } from '../components/AboutImage'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { WhatsAppFloat } from '../components/WhatsAppFloat'
import { PROYECTOS_LIST } from '../data/proyectos'
import '../App.css'
import './site-page.css'

const PAGE_SIZE = 6

export function ProyectosListPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const total = PROYECTOS_LIST.length
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))

  const currentPage = useMemo(() => {
    const raw = parseInt(searchParams.get('pagina') || '1', 10)
    if (Number.isNaN(raw) || raw < 1) return 1
    return Math.min(raw, totalPages)
  }, [searchParams, totalPages])

  const start = (currentPage - 1) * PAGE_SIZE
  const pageItems = PROYECTOS_LIST.slice(start, start + PAGE_SIZE)

  const goToPage = (n: number) => {
    const next = Math.max(1, Math.min(n, totalPages))
    setSearchParams(next === 1 ? {} : { pagina: String(next) })
  }

  return (
    <>
      <a href="#main" className="sr-only">
        Saltar al contenido
      </a>
      <SiteNav variant="solid" />

      <main id="main" className="app-shell site-page">
        <p className="site-page__kicker">Portafolio</p>
        <h1 className="site-page__title">Proyectos</h1>
        <p className="site-page__lead">
          Iniciativas en territorio con seguimiento y alianzas. Cada ficha puede
          ampliarse con todo el texto e imágenes que necesites; varias están en
          borrador para que completes los contenidos.
        </p>

        <p className="proyectos-index-meta" aria-live="polite">
          Mostrando {start + 1}–{Math.min(start + PAGE_SIZE, total)} de {total}{' '}
          proyectos (página {currentPage} de {totalPages})
        </p>

        <ul className="proyectos-index-grid">
          {pageItems.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/proyectos/${p.slug}`}
                className="proyectos-index-card group"
              >
                <div className="proyectos-index-card__media">
                  <AboutImage
                    primary={p.hero.primary}
                    fallback={p.hero.fallback}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="proyectos-index-card__body">
                  <p className="proyectos-index-card__kicker">{p.kicker}</p>
                  <h2 className="proyectos-index-card__title">{p.title}</h2>
                  <p className="proyectos-index-card__excerpt">{p.intro}</p>
                  <span className="proyectos-index-card__cta">Ver ficha →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {totalPages > 1 ? (
          <nav
            className="proyectos-index-pager"
            aria-label="Paginación de proyectos"
          >
            <button
              type="button"
              className="proyectos-index-pager__btn"
              disabled={currentPage <= 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              ← Anterior
            </button>
            <ol className="proyectos-index-pager__nums">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <li key={n}>
                  {n === currentPage ? (
                    <span
                      className="proyectos-index-pager__num proyectos-index-pager__num--current"
                      aria-current="page"
                    >
                      {n}
                    </span>
                  ) : (
                    <button
                      type="button"
                      className="proyectos-index-pager__num"
                      onClick={() => goToPage(n)}
                    >
                      {n}
                    </button>
                  )}
                </li>
              ))}
            </ol>
            <button
              type="button"
              className="proyectos-index-pager__btn"
              disabled={currentPage >= totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              Siguiente →
            </button>
          </nav>
        ) : null}
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
