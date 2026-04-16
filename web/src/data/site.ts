/**
 * Datos institucionales oficiales — FIIASOLE.
 * Redes: sin LinkedIn (Facebook, Instagram, YouTube).
 */
export const SITE = {
  nombreCorto: 'FIIASOLE',
  nombreLegal:
    'Fundación de Iniciativas Innovadoras Ambientales y Socioculturales — FIIASOLE',
  slogan:
    'Comprometidos para generar desarrollo humano integral.',
  nit: '901.693.110-3',
  direccion:
    'Kilómetro 2,8 de la vía doble calzada Tunja–Paipa, sector FABA, vereda Poravita, municipio de Oicatá, Boyacá.',
  telefonos: ['301 420 7031', '313 314 8223'] as const,
  emails: ['fundacionfiasole@gmail.com'] as const,
  horario: 'Atención: consulta horarios por teléfono o correo electrónico.',
  /** Mapa embebido (OpenStreetMap). Puedes sustituir por el iframe “Insertar mapa” de Google Maps. */
  mapaEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-73.34%2C5.57%2C-73.28%2C5.62&layer=mapnik&marker=5.595%2C-73.31',
  /** Enlace para abrir la ubicación en Google Maps en una pestaña nueva. */
  mapaEnlaceExterno:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Kilómetro 2,8 vía Tunja Paipa, sector FABA, vereda Poravita, Oicatá, Boyacá, Colombia',
    ),
  redes: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
  },
} as const

/** Construye enlace tel: para números colombianos a 10 dígitos (ej. 301 420 7031). */
export function telefonoToHref(numero: string): string {
  const digits = numero.replace(/\D/g, '')
  if (digits.length !== 10) return `tel:${numero}`
  return `tel:+57${digits}`
}
