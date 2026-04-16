import type { ProyectoCircuitStep } from '../data/proyectos'

type ProyectoCircuitoProps = {
  steps: ProyectoCircuitStep[]
}

/** Circuito del proyecto: pasos numerados y conectados (línea vertical en móvil, horizontal en escritorio). */
export function ProyectoCircuito({ steps }: ProyectoCircuitoProps) {
  if (steps.length === 0) return null

  return (
    <div className="proyecto-circuito" aria-label="Etapas del proyecto">
      <ol className="proyecto-circuito__list">
        {steps.map((step, i) => (
          <li key={step.label} className="proyecto-circuito__item">
            <span className="proyecto-circuito__index" aria-hidden>
              {i + 1}
            </span>
            <div className="proyecto-circuito__content">
              <h3 className="proyecto-circuito__label">{step.label}</h3>
              <p className="proyecto-circuito__detail">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
