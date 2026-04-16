import { Link } from 'react-router-dom'
import { AboutImage } from './AboutImage'
import {
  getTiltSlugs,
  PROGRAMAS,
  type ProgramSlug,
} from '../data/programas'

type ProgramasTiltGridProps = {
  /** En inicio: orden fijo con comunidad al centro; en ficha de programa: el actual al centro. */
  centerSlug: ProgramSlug | 'home'
}

export function ProgramasTiltGrid({ centerSlug }: ProgramasTiltGridProps) {
  const [left, center, right] = getTiltSlugs(centerSlug)

  return (
    <div
      className="programas-tilt"
      role="list"
      aria-label="Programas de la fundación"
    >
      <TiltCard slug={left} position="left" />
      <TiltCard slug={center} position="center" />
      <TiltCard slug={right} position="right" />
    </div>
  )
}

function TiltCard({
  slug,
  position,
}: {
  slug: ProgramSlug
  position: 'left' | 'center' | 'right'
}) {
  const p = PROGRAMAS[slug]
  const posClass =
    position === 'left'
      ? 'programas-tilt__card--left'
      : position === 'center'
        ? 'programas-tilt__card--center'
        : 'programas-tilt__card--right'

  return (
    <Link
      to={`/programas/${slug}`}
      className={`programas-tilt__card group ${posClass}`}
      role="listitem"
    >
      <div className="programas-tilt__frame">
        <AboutImage
          primary={p.hero.primary}
          fallback={p.hero.fallback}
          alt=""
          className="programas-tilt__img"
        />
      </div>
      <p className="programas-tilt__label">{p.title}</p>
    </Link>
  )
}
