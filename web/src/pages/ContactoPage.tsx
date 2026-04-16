import { type FormEvent, useState } from 'react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { WhatsAppFloat } from '../components/WhatsAppFloat'
import { SITE, telefonoToHref } from '../data/site'
import '../App.css'
import './site-page.css'

const CORREO_DESTINO = SITE.emails[0]

export function ContactoPage() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState<string | null>(null)

  const enviarPorCorreo = (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    const n = nombre.trim()
    const c = correo.trim()
    const m = mensaje.trim()

    if (!n || !c || !m) {
      setError('Completa nombre, correo y mensaje.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)) {
      setError('Revisa que el correo tenga un formato válido.')
      return
    }

    const subject = encodeURIComponent(`Contacto web — ${n}`)
    const body = encodeURIComponent(
      [
        `Nombre: ${n}`,
        `Correo: ${c}`,
        telefono.trim() ? `Teléfono: ${telefono.trim()}` : null,
        '',
        'Mensaje:',
        m,
      ]
        .filter(Boolean)
        .join('\n'),
    )

    window.location.href = `mailto:${CORREO_DESTINO}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <a href="#main" className="sr-only">
        Saltar al contenido
      </a>
      <SiteNav variant="solid" />

      <main id="main" className="app-shell site-page">
        <p className="site-page__kicker">Escríbenos</p>
        <h1 className="site-page__title">Contáctanos</h1>
        <p className="site-page__lead">
          {SITE.slogan} Voluntariado, alianzas, donaciones o consultas sobre
          proyectos: escribe en el formulario (se abrirá tu correo para enviar) y
          revisa la ubicación más abajo.
        </p>

        <div className="site-contact-layout site-contact-layout--primary">
          <section aria-labelledby="form-heading">
            <h2 id="form-heading" className="site-page__section-title">
              Envíanos un mensaje
            </h2>
            <p className="site-page__prose mb-4 max-w-xl text-sm">
              Al enviar se abrirá tu aplicación de correo con el mensaje listo.
              Solo tienes que pulsar “Enviar” en Gmail, Outlook u otro cliente.
            </p>
            <form className="site-contact-form" onSubmit={enviarPorCorreo} noValidate>
              <div className="site-contact-form__field">
                <label htmlFor="contact-nombre">Nombre completo</label>
                <input
                  id="contact-nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  placeholder="Ej.: María López o nombre de la organización"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="site-contact-form__input"
                />
              </div>
              <div className="site-contact-form__field">
                <label htmlFor="contact-correo">Correo electrónico</label>
                <input
                  id="contact-correo"
                  name="correo"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="Ej.: tu.correo@gmail.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                  className="site-contact-form__input"
                />
              </div>
              <div className="site-contact-form__field">
                <label htmlFor="contact-tel">
                  Teléfono <span className="text-[var(--text)] opacity-70">(opcional)</span>
                </label>
                <input
                  id="contact-tel"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Ej.: 301 420 7031"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="site-contact-form__input"
                />
              </div>
              <div className="site-contact-form__field">
                <label htmlFor="contact-mensaje">Mensaje</label>
                <textarea
                  id="contact-mensaje"
                  name="mensaje"
                  rows={5}
                  placeholder="Ej.: Quiero información sobre voluntariado… / Propuesta de alianza con mi institución… / Consulta sobre un proyecto en mi territorio…"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                  className="site-contact-form__textarea"
                />
              </div>
              {error ? (
                <p className="site-contact-form__error" role="alert">
                  {error}
                </p>
              ) : null}
              <button type="submit" className="site-contact-form__submit">
                Abrir correo y enviar
              </button>
            </form>
          </section>

          <section aria-labelledby="datos-heading">
            <h2 id="datos-heading" className="site-page__section-title">
              Datos de contacto
            </h2>
            <dl className="site-contact-sidebar">
              <div className="site-contact-sidebar__block">
                <dt>Razón social</dt>
                <dd>{SITE.nombreLegal}</dd>
              </div>
              <div className="site-contact-sidebar__block">
                <dt>NIT</dt>
                <dd>{SITE.nit}</dd>
              </div>
              <div className="site-contact-sidebar__block">
                <dt>Teléfonos</dt>
                <dd>
                  {SITE.telefonos.map((t) => (
                    <a key={t} href={telefonoToHref(t)}>
                      {t}
                    </a>
                  ))}
                </dd>
              </div>
              <div className="site-contact-sidebar__block">
                <dt>Correo</dt>
                <dd>
                  <a href={`mailto:${CORREO_DESTINO}`}>{CORREO_DESTINO}</a>
                </dd>
              </div>
              <div className="site-contact-sidebar__block">
                <dt>Horario</dt>
                <dd>{SITE.horario}</dd>
              </div>
            </dl>
          </section>
        </div>

        <section
          className="site-contact-map-section"
          aria-labelledby="mapa-heading"
        >
          <h2 id="mapa-heading" className="site-contact-map-section__title">
            Cómo llegar
          </h2>
          <p className="site-contact-map-section__address">{SITE.direccion}</p>
          <div className="site-contact-map">
            <iframe
              title="Mapa de ubicación FIIASOLE — Oicatá, Boyacá"
              src={SITE.mapaEmbedUrl}
              className="site-contact-map__iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="site-contact-map-section__link">
            <a
              href={SITE.mapaEnlaceExterno}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en Google Maps
            </a>
          </p>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
