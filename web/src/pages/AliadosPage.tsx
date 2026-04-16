import { AlliesCarousel } from '../components/AlliesCarousel'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { WhatsAppFloat } from '../components/WhatsAppFloat'
import '../App.css'
import './site-page.css'

export function AliadosPage() {
  return (
    <>
      <a href="#main" className="sr-only">
        Saltar al contenido
      </a>
      <SiteNav variant="solid" />

      <main id="main" className="app-shell site-page">
        <p className="site-page__kicker">Redes</p>
        <h1 className="site-page__title">Aliados</h1>
        <p className="site-page__lead">
          Instituciones, empresas y organizaciones que amplían el impacto de
          FIIASOLE. Sustituye este texto por tu relato sobre tipos de alianza,
          criterios de trabajo conjunto y formas de sumarse.
        </p>

        <section className="site-page__section" aria-labelledby="logos-heading">
          <h2 id="logos-heading" className="sr-only">
            Logos de aliados
          </h2>
          <div className="mt-6">
            <AlliesCarousel />
          </div>
        </section>

        <section className="site-page__section" aria-labelledby="alianzas-heading">
          <h2 id="alianzas-heading" className="site-page__section-title">
            Cómo colaboramos
          </h2>
          <div className="site-page__prose max-w-2xl">
            <p>
              Espacio reservado para describir modalidades de apoyo (en especie,
              técnico, financiero), duración de los convenios y ejemplos de
              coimplementación en territorio. Puedes extender esta sección con
              todas las secciones que necesites.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
