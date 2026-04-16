import { useState } from 'react'

type AboutImageProps = {
  primary: string
  fallback: string
  alt: string
  className?: string
}

/** Imagen con fallback (JPG/PNG en public/about → SVG si falta el archivo). */
export function AboutImage({
  primary,
  fallback,
  alt,
  className,
}: AboutImageProps) {
  const [src, setSrc] = useState(primary)

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (src !== fallback) setSrc(fallback)
      }}
    />
  )
}
