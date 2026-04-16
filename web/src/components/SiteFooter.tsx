import { ChevronUp } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { SiteLogo } from './SiteLogo'
import { SITE, telefonoToHref } from '../data/site'

function useScrollToHomeTop() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return () => {
    if (pathname === '/') {
      document.getElementById('inicio')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      return
    }
    navigate('/')
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
  }
}

const FOOTER_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/#programas', label: 'Programas' },
  { to: '/aliados', label: 'Aliados' },
  { to: '/documentos', label: 'Documentos' },
  { to: '/contacto', label: 'Contáctanos' },
] as const

const FOOTER_SOCIAL = [
  { href: SITE.redes.facebook, label: 'Facebook', Icon: FaFacebookF },
  { href: SITE.redes.instagram, label: 'Instagram', Icon: FaInstagram },
  { href: SITE.redes.youtube, label: 'YouTube', Icon: FaYoutube },
] as const

export function SiteFooter() {
  const scrollToTop = useScrollToHomeTop()

  return (
    <footer
      className="app-shell border-t border-[var(--border)] bg-emerald-50/60 px-5 py-10 text-left text-[var(--text)] sm:px-8"
      role="contentinfo"
    >
      <div className="mx-auto grid max-w-[var(--layout-max)] gap-10 lg:grid-cols-[1.15fr_1fr_auto] lg:gap-12">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-xl py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            <SiteLogo
              width={150}
              className="h-auto w-[150px] max-w-[150px] object-contain"
            />
            <span className="sr-only">FIIASOLE — inicio</span>
          </Link>
          <p className="mt-4 text-sm font-semibold leading-snug text-[var(--text-h)]">
            {SITE.nombreLegal}
          </p>
          <p className="mt-2 text-sm italic leading-relaxed text-[var(--text)]">
            {SITE.slogan}
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            <span className="font-medium text-[var(--text-h)]">NIT:</span>{' '}
            {SITE.nit}
          </p>
          <p className="mt-1 text-sm leading-relaxed">{SITE.direccion}</p>
          <div className="mt-3 text-sm leading-relaxed">
            <span className="font-medium text-[var(--text-h)]">Teléfonos:</span>
            <ul className="mt-1 list-none pl-0">
              {SITE.telefonos.map((t) => (
                <li key={t}>
                  <a
                    href={telefonoToHref(t)}
                    className="text-[var(--accent)] underline-offset-2 hover:underline"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3 text-sm leading-relaxed">
            <span className="font-medium text-[var(--text-h)]">Correo:</span>
            <ul className="mt-1 list-none pl-0">
              {SITE.emails.map((e) => (
                <li key={e}>
                  <a
                    href={`mailto:${e}`}
                    className="text-[var(--accent)] underline-offset-2 hover:underline"
                  >
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav aria-label="Pie de página">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-h)]">
            Enlaces rápidos
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {FOOTER_LINKS.map(({ to, label }) => (
              <li key={to + label}>
                <Link
                  to={to}
                  className="text-[var(--text)] transition hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-h)] lg:text-right">
            Redes
          </p>
          <div className="flex flex-wrap gap-2">
            {FOOTER_SOCIAL.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--social-bg)] text-[var(--text-h)] transition hover:bg-[var(--bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                aria-label={label}
              >
                <Icon className="size-[18px]" aria-hidden />
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollToTop()}
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            aria-label="Volver arriba"
          >
            <ChevronUp className="size-6" strokeWidth={2.25} aria-hidden />
          </button>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[var(--layout-max)] border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--text)] sm:text-left">
        © {new Date().getFullYear()} {SITE.nombreCorto}. Todos los derechos
        reservados.
      </p>
    </footer>
  )
}
