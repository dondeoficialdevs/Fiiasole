export type ProgramSlug = 'formacion' | 'comunidad' | 'emprendimiento'

const SLUGS: ProgramSlug[] = ['formacion', 'comunidad', 'emprendimiento']

/** Orden [izq, centro, der] con el programa actual en el centro. */
export function getTiltSlugs(
  center: ProgramSlug | 'home',
): [ProgramSlug, ProgramSlug, ProgramSlug] {
  if (center === 'home') {
    /* Eje principal: emprendimiento con invernaderos al centro */
    return ['formacion', 'emprendimiento', 'comunidad']
  }
  const i = SLUGS.indexOf(center)
  if (i < 0) return ['formacion', 'comunidad', 'emprendimiento']
  const left = SLUGS[(i + 2) % 3]
  const right = SLUGS[(i + 1) % 3]
  return [left, center, right]
}

export type ProgramCarouselSlide = {
  primary: string
  fallback: string
  caption: string
}

export type ProgramProyectosBloque = {
  title: string
  paragraphs: string[]
}

export type ProgramDef = {
  slug: ProgramSlug
  title: string
  shortLabel: string
  intro: string
  hero: { primary: string; fallback: string }
  carousel: ProgramCarouselSlide[]
  /** Texto bajo el carrusel: proyectos, alcance o detalle institucional */
  proyectosBloque: ProgramProyectosBloque
}

export const PROGRAMAS: Record<ProgramSlug, ProgramDef> = {
  formacion: {
    slug: 'formacion',
    title: 'Formación y educación',
    shortLabel: 'Formación',
    intro:
      'Rutas de aprendizaje alineadas al territorio: buenas prácticas agrícolas, manejo de invernadero, riego y seguridad alimentaria, según lo que cada comunidad prioriza junto al proyecto de invernaderos.',
    hero: {
      primary: '/programas/formacion.jpg',
      fallback: '/programas/formacion.svg',
    },
    carousel: [
      {
        primary: '/programas/formacion.jpg',
        fallback: '/programas/formacion.svg',
        caption: 'Talleres sobre cultivo bajo cubierta, clima interno del invernadero y manejo de plagas con enfoque preventivo.',
      },
      {
        primary: '/programas/comunidad.jpg',
        fallback: '/programas/comunidad.svg',
        caption: 'Saberes campesinos y fichas técnicas sencillas: que el aprendizaje sea útil el mismo día.',
      },
      {
        primary: '/programas/emprendimiento.jpg',
        fallback: '/programas/emprendimiento.svg',
        caption: 'Mentorías para planificar cosechas, rotación de cultivos y registros básicos de producción.',
      },
      {
        primary: '/programas/formacion.jpg',
        fallback: '/programas/formacion.svg',
        caption: 'Seguimiento con indicadores que las familias entienden: producción, calidad y uso del agua.',
      },
    ],
    proyectosBloque: {
      title: 'Proyectos y alcance',
      paragraphs: [
        'La formación apoya de forma directa el proyecto principal de invernaderos: capacitamos a quienes operan los cultivos, organizan turnos de riego y cuidan la infraestructura comunitaria.',
        'Co-diseñamos módulos con líderes locales y priorizamos materiales en campo frente a teoría abstracta; los resultados se revisan en mesas abiertas para ajustar temas y ritmos.',
        'Si tu organización quiere articular una ruta formativa con FIIASOLE, escríbenos desde contacto y coordinamos una primera conversación.',
      ],
    },
  },
  comunidad: {
    slug: 'comunidad',
    title: 'Comunidad y bienestar',
    shortLabel: 'Comunidad',
    intro:
      'Organización comunitaria alrededor de la producción en invernadero: acuerdos de uso, equidad en el reparto de cosechas y redes que sostienen el bienestar de las familias en el territorio.',
    hero: {
      primary: '/programas/comunidad.jpg',
      fallback: '/programas/comunidad.svg',
    },
    carousel: [
      {
        primary: '/programas/comunidad.jpg',
        fallback: '/programas/comunidad.svg',
        caption: 'Asambleas sobre reglas de uso del invernadero, turnos y decisiones de comercialización.',
      },
      {
        primary: '/programas/formacion.jpg',
        fallback: '/programas/formacion.svg',
        caption: 'Apoyo cuando hay tensiones o necesidades familiares; referimos con criterio comunitario.',
      },
      {
        primary: '/programas/emprendimiento.jpg',
        fallback: '/programas/emprendimiento.svg',
        caption: 'Encuentros que conectan la cosecha con ferias, canastas y redes de confianza.',
      },
      {
        primary: '/programas/comunidad.jpg',
        fallback: '/programas/comunidad.svg',
        caption: 'Seguimiento flexible: el territorio marca prioridades; acompañamos sin imponer ritmos.',
      },
    ],
    proyectosBloque: {
      title: 'Proyectos y alcance',
      paragraphs: [
        'El trabajo comunitario se articula con el eje de los invernaderos: acuerdos claros sobre quién participa, cómo se distribuye la producción y cómo se reinvierte en mantenimiento o nuevos lotes.',
        'Fortalecemos líderes locales y alianzas con organizaciones que ya están en la vereda o el municipio; la participación es condición para que el proyecto sea sostenible.',
        'Para sumar voluntariado o proponer una alianza, escríbenos; evaluamos encaje y transparencia en el uso de los recursos.',
      ],
    },
  },
  emprendimiento: {
    slug: 'emprendimiento',
    title: 'Emprendimiento e invernaderos',
    shortLabel: 'Emprendimiento',
    intro:
      'Programa principal de la fundación en el territorio: producción bajo invernadero, soberanía alimentaria y economía campesina con asesoría técnica, acceso a insumos y comercialización justa.',
    hero: {
      primary: '/programas/emprendimiento.jpg',
      fallback: '/programas/emprendimiento.svg',
    },
    carousel: [
      {
        primary: '/programas/emprendimiento.jpg',
        fallback: '/programas/emprendimiento.svg',
        caption: 'Invernaderos adaptados al clima local: estructura, cubierta y plan de cultivos por temporada.',
      },
      {
        primary: '/programas/formacion.jpg',
        fallback: '/programas/formacion.svg',
        caption: 'Gestión del negocio agrícola: costos, precios justos y registro de lo que entra y sale del cultivo.',
      },
      {
        primary: '/programas/comunidad.jpg',
        fallback: '/programas/comunidad.svg',
        caption: 'Eslabón con compradores, ferias y redes que valoran lo hecho en el territorio.',
      },
      {
        primary: '/programas/emprendimiento.jpg',
        fallback: '/programas/emprendimiento.svg',
        caption: 'Seguimiento de rendimiento y calidad para decidir ampliar metros o replicar el modelo.',
      },
    ],
    proyectosBloque: {
      title: 'Proyectos y alcance',
      paragraphs: [
        'Este es el programa bandera de FIIASOLE: instalación y operación de invernaderos comunitarios o familiares, con metas de producción realistas y acompañamiento hasta la primera cosecha estable y la siguiente.',
        'Trabajamos insumos de calidad, riego eficiente y buenas prácticas que reducen pérdidas; documentamos lecciones para que otros territorios puedan adaptar el modelo con rigor.',
        'Si cultivas en tu finca o representas una organización y quieres explorar un invernadero con la fundación, escríbenos: revisamos suelo, agua, organización y posibles ventanas de apoyo.',
      ],
    },
  },
}

export function isProgramSlug(s: string): s is ProgramSlug {
  return s === 'formacion' || s === 'comunidad' || s === 'emprendimiento'
}
