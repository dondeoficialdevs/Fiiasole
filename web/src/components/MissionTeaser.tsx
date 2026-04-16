import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AboutImage } from './AboutImage'

export function MissionTeaser() {
  return (
    <section
      className="mission-teaser grid gap-8 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16"
      aria-labelledby="mission-teaser-heading"
    >
      <div className="order-2 flex flex-col justify-center md:order-1">
        <p className="mission-teaser-kicker">Fundación FIIASOLE</p>
        <h2
          id="mission-teaser-heading"
          className="mission-teaser-title mt-2 font-semibold uppercase tracking-tight text-[var(--text-h)]"
        >
          Qué hacemos
        </h2>
        <p className="mission-teaser-lead mt-4 text-[var(--text)]">
          Diseñamos e implementamos proyectos sociales con enfoque territorial,
          medición de impacto y trabajo conjunto con comunidades y aliados
          institucionales.
        </p>
        <p className="mission-teaser-lead mt-3 text-[var(--text)]">
          Nuestra misión es clara: mejorar condiciones de vida con equidad,
          transparencia y sostenibilidad en el tiempo.
        </p>
        <Link
          to="/mision"
          className="mission-teaser-cta group mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          Explorar más
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>

      <div className="order-1 min-h-[220px] overflow-hidden rounded-2xl border border-[var(--border)] shadow-lg md:order-2 md:min-h-[320px] lg:min-h-[360px]">
        <AboutImage
          primary="/mission/teaser.jpg"
          fallback="/mission/teaser.svg"
          alt=""
          className="h-full min-h-[220px] w-full object-cover md:min-h-[320px]"
        />
      </div>
    </section>
  )
}
