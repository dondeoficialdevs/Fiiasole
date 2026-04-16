import { useState } from 'react'

/** Rutas en `public/`: SVG primero (Canva/Illustrator suelen exportar así), luego PNG y respaldos. */
const LOGO_SRC = [
  '/images/logo-fiiasole.svg',
  '/images/logo-fiiasole.png',
  '/logo.png',
  '/favicon.svg',
] as const

type SiteLogoProps = {
  className?: string
  width?: number
  height?: number
}

export function SiteLogo({
  className = '',
  width = 150,
  height,
}: SiteLogoProps) {
  const [i, setI] = useState(0)
  const src = LOGO_SRC[i] ?? LOGO_SRC[LOGO_SRC.length - 1]

  return (
    <img
      src={src}
      alt=""
      width={width}
      height={height ?? undefined}
      className={className}
      onError={() => {
        setI((prev) => (prev + 1 < LOGO_SRC.length ? prev + 1 : prev))
      }}
    />
  )
}
