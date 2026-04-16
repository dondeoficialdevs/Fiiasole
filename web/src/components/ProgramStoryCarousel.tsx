import { useCallback, useId, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ProgramCarouselSlide } from '../data/programas'

type ProgramStoryCarouselProps = {
  slides: ProgramCarouselSlide[]
  ariaLabel: string
}

export function ProgramStoryCarousel({
  slides,
  ariaLabel,
}: ProgramStoryCarouselProps) {
  const [index, setIndex] = useState(0)
  const labelId = useId()

  const go = useCallback(
    (next: number) => {
      setIndex((next + slides.length) % slides.length)
    },
    [slides.length],
  )

  if (slides.length === 0) return null

  return (
    <div
      className="program-story"
      role="region"
      aria-roledescription="carrusel"
      aria-labelledby={labelId}
    >
      <p id={labelId} className="sr-only">
        {ariaLabel}
      </p>

      <div className="program-story__stage">
        {slides.map((slide, i) => (
          <div
            key={`${slide.primary}-${i}`}
            className="program-story__slide absolute inset-0"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <img
              src={slide.primary}
              alt=""
              className="program-story__img"
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              onError={(e) => {
                const el = e.currentTarget
                if (el.dataset.fallbackApplied === '1') return
                el.dataset.fallbackApplied = '1'
                el.src = slide.fallback
              }}
            />
            <div className="program-story__caption-wrap">
              <p className="program-story__caption">{slide.caption}</p>
            </div>
          </div>
        ))}

        <div className="program-story__controls">
          <button
            type="button"
            className="program-story__btn"
            onClick={() => go(index - 1)}
            aria-label="Anterior"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            className="program-story__btn"
            onClick={() => go(index + 1)}
            aria-label="Siguiente"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      <div
        className="program-story__dots"
        role="tablist"
        aria-label="Seleccionar diapositiva"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={`program-story__dot ${i === index ? 'program-story__dot--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Diapositiva ${i + 1} de ${slides.length}`}
          />
        ))}
      </div>
    </div>
  )
}
