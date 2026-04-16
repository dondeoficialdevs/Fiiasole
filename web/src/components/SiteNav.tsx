import { useCallback, useEffect, useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { SiteLogo } from './SiteLogo'
import { SITE } from '../data/site'
import { isNavLinkActive } from '../utils/navActive'

const NAV_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/mision', label: 'Quiénes somos' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/#programas', label: 'Programas' },
  { to: '/aliados', label: 'Aliados' },
  { to: '/documentos', label: 'Documentos' },
  { to: '/contacto', label: 'Contáctanos' },
] as const

const SOCIAL = [
  { href: SITE.redes.facebook, label: 'Facebook', Icon: FaFacebookF },
  { href: SITE.redes.instagram, label: 'Instagram', Icon: FaInstagram },
  { href: SITE.redes.youtube, label: 'YouTube', Icon: FaYoutube },
] as const

type SiteNavProps = {
  variant?: 'solid' | 'overlay'
}

export function SiteNav({ variant = 'solid' }: SiteNavProps) {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const overlay = variant === 'overlay'

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  const wrapClass = overlay
    ? 'absolute inset-x-0 top-0 z-40 px-4 pt-2 sm:px-6 sm:pt-3 md:px-8'
    : 'w-full bg-[var(--bg)] px-3 pb-3 pt-3 sm:px-5 sm:pb-4 sm:pt-4'

  const barClass = overlay
    ? 'border-black/10 bg-white/70 shadow-[0_10px_34px_rgba(0,0,0,0.18)] backdrop-blur-md'
    : 'border-[var(--border)] bg-[var(--bg)] shadow-lg'

  const linkClass = overlay
    ? 'rounded-2xl px-2 py-1.5 text-[12px] font-medium text-slate-900/90 transition hover:bg-black/5 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/40 lg:text-[13px] xl:px-2.5 xl:text-[14px] 2xl:px-3 2xl:text-[15px] min-[1920px]:px-3.5 min-[1920px]:text-base'
    : 'rounded-2xl px-2 py-2 text-[12px] font-medium text-[var(--text)] transition hover:bg-[var(--social-bg)] hover:text-[var(--text-h)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] lg:text-[13px] xl:px-2.5 xl:text-[14px] 2xl:px-3 2xl:text-[15px] min-[1920px]:px-3.5 min-[1920px]:text-base'

  const logoWrapClass = overlay
    ? 'rounded-2xl py-1 pl-1 pr-2 transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/40'
    : 'rounded-2xl py-1 pl-1 pr-2 transition hover:bg-[var(--social-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]'

  const socialWrapClass = overlay
    ? 'border-black/10 bg-black/0'
    : 'border-[var(--border)] bg-[var(--social-bg)]'

  const socialBtnClass = overlay
    ? 'text-slate-900 transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/40'
    : 'text-[var(--text-h)] transition hover:bg-[var(--bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]'

  const menuBtnClass = overlay
    ? 'border-black/15 text-slate-900 transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/40'
    : 'border-[var(--border)] text-[var(--text-h)] transition hover:bg-[var(--social-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]'

  const panelClass = overlay
    ? 'border-black/10 bg-white/90 p-3 shadow-xl backdrop-blur-xl'
    : 'border-[var(--border)] bg-[var(--bg)] p-3 shadow-lg'

  const panelLinkClass = overlay
    ? 'text-slate-900 hover:bg-black/5'
    : 'text-[var(--text-h)] hover:bg-[var(--social-bg)]'

  const navActiveExtra = (to: string) =>
    isNavLinkActive(to, location)
      ? overlay
        ? ' !bg-black/10 !text-slate-900 font-semibold'
        : ' !bg-[var(--accent-bg)] !text-[var(--accent)] font-semibold'
      : ''

  return (
    <div className={wrapClass}>
      <nav
        className={`relative z-10 mx-auto w-full ${
          overlay ? 'max-w-[1080px]' : 'max-w-[var(--layout-max)]'
        } rounded-2xl border px-3 py-1.5 sm:rounded-3xl sm:px-4 sm:py-2 ${barClass}`}
        aria-label="Principal"
      >
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/"
            className={`flex min-h-[36px] shrink-0 items-center gap-2 ${logoWrapClass}`}
            onClick={close}
          >
            <SiteLogo className="h-auto w-[120px] max-w-[120px] shrink-0 object-contain sm:w-[132px] sm:max-w-[132px]" />
            <span className="sr-only">FIIASOLE — inicio</span>
          </Link>

          <div className="hidden min-h-[36px] flex-1 flex-wrap items-center justify-center gap-x-0.5 lg:flex xl:gap-x-1 2xl:gap-x-1.5 min-[1920px]:gap-x-2">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to + label}
                to={to}
                className={`${linkClass}${navActiveExtra(to)}`}
                onClick={close}
                aria-current={isNavLinkActive(to, location) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <div
              className={`flex items-center gap-0.5 rounded-2xl border px-1 py-1 sm:gap-1 sm:px-2 ${socialWrapClass}`}
            >
              {SOCIAL.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex size-10 items-center justify-center rounded-xl ${socialBtnClass}`}
                  aria-label={label}
                >
                  <Icon
                    className="size-[18px] 2xl:size-5 min-[1920px]:size-[22px]"
                    aria-hidden
                  />
                </a>
              ))}
            </div>

            <button
              type="button"
              className={`flex size-11 items-center justify-center rounded-2xl border ${menuBtnClass} lg:hidden`}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div
            id={panelId}
            className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 max-h-[min(70vh,calc(100dvh-6rem))] overflow-y-auto rounded-3xl border lg:hidden ${panelClass}`}
          >
            <ul className="flex flex-col gap-0.5 text-left">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to + label}>
                  <Link
                    to={to}
                    className={`block min-h-[44px] rounded-2xl px-4 py-3 text-sm font-medium transition ${panelLinkClass}${navActiveExtra(to)}`}
                    onClick={close}
                    aria-current={isNavLinkActive(to, location) ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  )
}
