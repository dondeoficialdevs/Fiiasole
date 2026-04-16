import { useCallback, useEffect, useId, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Fotos del hero: colócalas en la carpeta del proyecto
 * `web/public/hero/` (no dentro de `src`).
 * Nombres por defecto: slide-1.jpg, slide-2.jpg, slide-3.jpg (o .webp).
 * Si no existen, se usa el .svg de respaldo.
 */
const SLIDES = [
  { src: '/hero/slide-1.jpg', fallback: '/hero/slide-1.svg' },
  { src: '/hero/slide-2.jpg', fallback: '/hero/slide-2.svg' },
  { src: '/hero/slide-3.jpg', fallback: '/hero/slide-3.svg' },
] as const

const INTERVAL_MS = 6500

type HeroCarouselProps = {
  /** Carrusel a pantalla completa, sin márgenes (estilo editorial) */
  fullBleed?: boolean
}

export function HeroCarousel({ fullBleed = false }: HeroCarouselProps) {
  const [index, setIndex] = useState(0)
  const labelId = useId()

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(t)
  }, [])

  const shell = fullBleed
    ? 'relative h-[100svh] min-h-[480px] w-full overflow-hidden bg-black'
    : 'relative w-full overflow-hidden rounded-2xl shadow-lg md:rounded-3xl'

  const stage = fullBleed
    ? 'absolute inset-0'
    : 'relative aspect-[16/10] min-h-[220px] w-full sm:aspect-[16/9] sm:min-h-[280px] md:min-h-[360px]'

  return (
    <div
      className={shell}
      role="region"
      aria-roledescription="carrusel"
      aria-labelledby={labelId}
    >
      <p id={labelId} className="sr-only">
        Carrusel de imágenes de la fundación
      </p>

      <div className={stage}>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[900ms] ease-out"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <img
              src={slide.src}
              alt=""
              className="h-full w-full object-cover object-center"
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={i === 0 ? 'high' : 'auto'}
              onError={(e) => {
                const el = e.currentTarget
                // Solo un intento de fallback (el navegador da URL absoluta en el error)
                if (el.dataset.fallbackApplied === '1') return
                el.dataset.fallbackApplied = '1'
                el.src = slide.fallback
              }}
            />
          </div>
        ))}

        {/* Legibilidad del menú + atmósfera cálida tipo editorial */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/45"
          aria-hidden
        />
        {fullBleed ? (
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(0,0,0,0.5),transparent_65%)]"
            aria-hidden
          />
        ) : null}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-2 p-4 sm:p-6 md:p-8">
        <div className="pointer-events-auto flex gap-2">
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full border border-white/35 bg-black/40 text-white shadow-lg backdrop-blur-sm transition hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200/90"
            onClick={() => go(index - 1)}
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="size-6" aria-hidden />
          </button>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full border border-white/35 bg-black/40 text-white shadow-lg backdrop-blur-sm transition hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200/90"
            onClick={() => go(index + 1)}
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="size-6" aria-hidden />
          </button>
        </div>

        <div
          className="pointer-events-auto flex gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-2.5 shadow-lg backdrop-blur-md"
          role="tablist"
          aria-label="Seleccionar imagen"
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Imagen ${i + 1} de ${SLIDES.length}`}
              className={`size-2.5 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                i === index ? 'bg-white' : 'bg-white/45 hover:bg-white/80'
              }`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
