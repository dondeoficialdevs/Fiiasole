/**
 * Logos en `public/aliados/`.
 * Por defecto: `ally-1.png` … `ally-6.png` (o .jpg). Si falta, se intenta el .svg del mismo nombre.
 * Cambia aquí los nombres si tus archivos se llaman distinto.
 * Los que no tengan archivo no se muestran (solo la caja del logo), la sección sigue igual.
 */
export const ALIADOS_LOGOS = [
  { src: '/aliados/ally-1.png', alt: 'Aliado 1' },
  { src: '/aliados/ally-2.png', alt: 'Aliado 2' },
  { src: '/aliados/ally-3.png', alt: 'Aliado 3' },
  { src: '/aliados/ally-4.png', alt: 'Aliado 4' },
  { src: '/aliados/ally-5.png', alt: 'Aliado 5' },
  { src: '/aliados/ally-6.png', alt: 'Aliado 6' },
] as const
