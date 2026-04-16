/**
 * Carrusel de logos de aliados (banda horizontal con movimiento suave).
 * Archivos en `public/aliados/` — rutas en `src/data/aliados.ts`.
 */
import { ALIADOS_LOGOS } from '../data/aliados'
import { AllyLogo } from './AllyLogo'

export function AlliesCarousel() {
  const row = [...ALIADOS_LOGOS, ...ALIADOS_LOGOS]

  return (
    <div
      id="aliados"
      className="allies-marquee-wrap mb-12 border-b border-[var(--border)] pb-10 sm:mb-14 sm:pb-12"
      aria-labelledby="allies-marquee-title"
    >
      <h2
        id="allies-marquee-title"
        className="mb-6 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--text)] opacity-80"
      >
        Aliados y redes
      </h2>
      <div className="allies-marquee-mask overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-6 shadow-sm">
        <div className="allies-marquee-track flex w-max gap-12 sm:gap-16 md:gap-20">
          {row.map((ally, i) => (
            <AllyLogo
              key={`${ally.src}-${i}`}
              primary={ally.src}
              alt={ally.alt}
              wrapperClassName="flex h-14 w-28 shrink-0 items-center justify-center sm:h-16 sm:w-36"
              className="max-h-12 max-w-[7rem] object-contain sm:max-h-14 sm:max-w-[8rem]"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
