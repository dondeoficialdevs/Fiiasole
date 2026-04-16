import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { WhatsAppFloat } from '../components/WhatsAppFloat'
import '../App.css'
import './site-page.css'

const DOCS = [
  {
    titulo: 'Informe de gestión',
    texto:
      'Resumen anual de actividades, impacto y cuentas. Sustituye este texto y enlaza el PDF cuando esté publicado.',
    meta: 'PDF · próximamente',
  },
  {
    titulo: 'Políticas y buen gobierno',
    texto:
      'Marco ético, tratamiento de datos, prevención de acoso y rendición de cuentas. Añade aquí los enlaces reales.',
    meta: 'Documentos · por subir',
  },
  {
    titulo: 'Recursos descargables',
    texto:
      'Guías, fichas técnicas o materiales educativos para comunidad y aliados. Puedes listar tantos ítems como necesites.',
    meta: 'Varios formatos',
  },
] as const

export function DocumentosPage() {
  return (
    <>
      <a href="#main" className="sr-only">
        Saltar al contenido
      </a>
      <SiteNav variant="solid" />

      <main id="main" className="app-shell site-page">
        <p className="site-page__kicker">Transparencia</p>
        <h1 className="site-page__title">Documentos</h1>
        <p className="site-page__lead">
          Informes, políticas y recursos públicos de la fundación. Amplía cada
          bloque con enlaces a archivos reales cuando los tengas listos.
        </p>

        <ul className="site-docs-list">
          {DOCS.map((d) => (
            <li key={d.titulo} className="site-docs-item">
              <h3>{d.titulo}</h3>
              <p>{d.texto}</p>
              <p className="site-docs-item__meta">{d.meta}</p>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
