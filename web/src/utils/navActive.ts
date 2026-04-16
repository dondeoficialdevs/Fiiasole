import type { Location } from 'react-router-dom'

/** Indica si el ítem del menú corresponde a la ubicación actual (ruta o ancla en inicio). */
export function isNavLinkActive(
  to: string,
  loc: Pick<Location, 'pathname' | 'hash'>,
): boolean {
  if (to === '/#programas') {
    return (
      (loc.pathname === '/' && loc.hash === '#programas') ||
      loc.pathname.startsWith('/programas/')
    )
  }
  if (to.startsWith('/#')) {
    const targetHash = to.slice(1)
    return loc.pathname === '/' && loc.hash === targetHash
  }
  if (to === '/') {
    return loc.pathname === '/' && (!loc.hash || loc.hash === '' || loc.hash === '#inicio')
  }
  if (to === '/proyectos') {
    return loc.pathname === '/proyectos' || loc.pathname.startsWith('/proyectos/')
  }
  return loc.pathname === to
}
