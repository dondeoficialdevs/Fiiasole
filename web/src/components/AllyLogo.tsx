import { useState } from 'react'

type AllyLogoProps = {
  primary: string
  alt: string
  className?: string
  /** Si se define, el logo va dentro de este contenedor; si la imagen falla, no se renderiza el bloque. */
  wrapperClassName?: string
}

/** Logo de aliado: intenta PNG/JPG/WebP y hace fallback a .svg con el mismo nombre base. */
export function AllyLogo({ primary, alt, className, wrapperClassName }: AllyLogoProps) {
  const [src, setSrc] = useState(primary)
  const [failed, setFailed] = useState(false)

  const handleError = () => {
    const base = primary.replace(/\.(png|jpe?g|webp)$/i, '')
    if (base !== primary) {
      const svg = `${base}.svg`
      if (src !== svg) {
        setSrc(svg)
        return
      }
    }
    setFailed(true)
  }

  if (failed) return null

  const img = (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={handleError}
    />
  )

  if (wrapperClassName) {
    return <div className={wrapperClassName}>{img}</div>
  }

  return img
}
