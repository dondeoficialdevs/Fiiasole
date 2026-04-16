export type ProyectoCircuitStep = {
  label: string
  detail: string
}

export type ProyectoBloque = {
  titulo?: string
  paragraphs: string[]
  image?: { primary: string; fallback: string }
}

export type ProyectoDef = {
  slug: string
  title: string
  kicker: string
  intro: string
  hero: { primary: string; fallback: string }
  /** Proyectos destacados (invernaderos / innovación) usan línea de tiempo + desafío-respuesta */
  mostrarCircuito: boolean
  circuito?: ProyectoCircuitStep[]
  desafio?: string
  respuesta?: string
  cierre: string
  /** Narrativa amplia: imágenes y textos (completar más adelante) */
  bloques?: ProyectoBloque[]
}

const IMG_A = { primary: '/proyectos/territorial.jpg', fallback: '/proyectos/territorial.svg' }
const IMG_B = { primary: '/proyectos/innovacion.jpg', fallback: '/proyectos/innovacion.svg' }

function imgForIndex(i: number) {
  return i % 2 === 0 ? IMG_A : IMG_B
}

function bloquesPlaceholder(index: number): ProyectoBloque[] {
  const img = imgForIndex(index)
  return [
    {
      titulo: 'Sobre este proyecto',
      paragraphs: [
        'Este bloque está reservado para la historia del proyecto, el territorio, la población beneficiaria y los acuerdos con aliados.',
        'Sustituye estos párrafos cuando tengas el texto definitivo; puedes extenderte con todo el detalle que necesites.',
      ],
      image: img,
    },
    {
      titulo: 'Alcance, resultados y seguimiento',
      paragraphs: [
        'Aquí podrás describir indicadores, cronograma, presupuesto social o lecciones aprendidas. Incluye otra imagen de apoyo si lo deseas en el archivo de datos.',
      ],
    },
  ]
}

function buildPlaceholder(index: number): ProyectoDef {
  const slug = `proyecto-${String(index).padStart(2, '0')}`
  const img = imgForIndex(index)
  return {
    slug,
    kicker: 'Proyecto',
    title: `Proyecto ${index} (título por definir)`,
    intro:
      'Resumen breve por completar. Este proyecto forma parte del portafolio de FIIASOLE; aquí irá una síntesis atractiva para la lista y el encabezado de la ficha.',
    hero: img,
    mostrarCircuito: false,
    bloques: bloquesPlaceholder(index),
    cierre:
      'Para alianzas o más información sobre este proyecto, revisa los canales en la página de contacto.',
  }
}

const DESTACADOS: ProyectoDef[] = [
  {
    slug: 'territorial',
    kicker: 'Proyecto principal',
    title: 'Invernaderos comunitarios',
    intro:
      'Línea central de FIIASOLE en el territorio: co-diseñamos invernaderos con las comunidades, acompañamos el montaje, la capacitación y el primer ciclo de cosecha con indicadores claros y transparencia en cada etapa.',
    hero: IMG_A,
    mostrarCircuito: true,
    circuito: [
      {
        label: 'Diagnóstico',
        detail:
          'Suelo, agua, clima y organización: acordamos si el invernadero es viable y qué tipo de estructura encaja con la finca y el grupo de familias.',
      },
      {
        label: 'Co-diseño',
        detail:
          'Definimos cultivos, calendario, riego y reglas de uso: decisiones colectivas antes de mover un solo poste.',
      },
      {
        label: 'Montaje y arranque',
        detail:
          'Obra acompañada, bioinsumos iniciales y puesta en marcha con protocolos sencillos que todos puedan seguir.',
      },
      {
        label: 'Cosecha y seguimiento',
        detail:
          'Primera cosecha estable, registro de rendimiento, comercialización y plan de mantenimiento para el siguiente ciclo.',
      },
    ],
    desafio:
      'Sin organización y sin agua bien pensada, los invernaderos se vuelven estructuras vacías o dependen de unas pocas personas hasta agotarse.',
    respuesta:
      'Instalamos el proyecto con gobernanza comunitaria desde el día uno: turnos, roles, reinversión en mantenimiento y formación técnica alineada al programa de emprendimiento e invernaderos.',
    cierre:
      'Si te interesa cualquier proyecto con FIIASOLE en tu territorio, revisamos contexto, capacidad de la organización y próximos pasos.',
    bloques: [
      {
        titulo: 'Ampliación (opcional)',
        paragraphs: [
          'Puedes sumar aquí más texto e imágenes desde el archivo de datos: impacto cualitativo, testimonios o alianzas específicas del proyecto de invernaderos.',
        ],
      },
    ],
  },
  {
    slug: 'innovacion',
    kicker: 'Proyecto',
    title: 'Innovación en el modelo de invernadero',
    intro:
      'Pilotos ligeros que mejoran el modelo principal: riego más eficiente, registro de datos útil para la toma de decisiones y documentación abierta para que otros territorios adapten sin partir de cero.',
    hero: IMG_B,
    mostrarCircuito: true,
    circuito: [
      {
        label: 'Hipótesis',
        detail:
          'Qué variable queremos mejorar en el invernadero (agua, plaga, rendimiento, comercialización) y cómo la mediremos.',
      },
      {
        label: 'Prueba en campo',
        detail:
          'Cambio pequeño y controlado en una unidad piloto, con la comunidad al tanto.',
      },
      {
        label: 'Evidencia',
        detail:
          'Números y relatos comparables: sirve para escalar, ajustar o dejar constancia de lo que no funcionó.',
      },
      {
        label: 'Replicación',
        detail:
          'Fichas y guías en lenguaje claro para que el aprendizaje alimente el proyecto de invernaderos en otros sitios.',
      },
    ],
    desafio:
      'La innovación agrícola a veces llega como paquetes cerrados que no encajan con la escala ni el presupuesto de las organizaciones campesinas.',
    respuesta:
      'Partimos del proyecto real de invernaderos: prototipos baratos, mediciones honestas y resultados publicados para que la comunidad técnica y las familias decidan juntas.',
    cierre:
      'Si tienes una idea piloto alineada con la misión de la fundación, evaluamos encaje, viabilidad y posible copilotaje.',
  },
]

/** 13 fichas adicionales (proyecto-03 … proyecto-15) — textos e imágenes por completar */
const PLACEHOLDERS: ProyectoDef[] = Array.from({ length: 13 }, (_, k) =>
  buildPlaceholder(k + 3),
)

export const PROYECTOS_LIST: ProyectoDef[] = [...DESTACADOS, ...PLACEHOLDERS]

const BY_SLUG = new Map(PROYECTOS_LIST.map((p) => [p.slug, p]))

export function getProyectoBySlug(slug: string): ProyectoDef | undefined {
  return BY_SLUG.get(slug)
}

export function isProyectoSlug(s: string): boolean {
  return BY_SLUG.has(s)
}

export const PROYECTO_SLUGS = PROYECTOS_LIST.map((p) => p.slug)
