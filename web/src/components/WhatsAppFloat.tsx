import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa6'
import { SITE } from '../data/site'

function toWhatsAppDigits(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  if (!digits) return ''
  // Colombia: si viene como 10 dígitos (301...), lo normalizamos a 57 + número.
  if (digits.length === 10) return `57${digits}`
  // Si ya viene con indicativo (ej. 57301...), lo dejamos tal cual.
  return digits
}

function buildWhatsAppHref(): string {
  const phone = SITE.telefonos?.[0]
  if (!phone) return '/contacto'
  const digits = toWhatsAppDigits(phone)
  if (!digits) return '/contacto'
  return `https://wa.me/${digits}`
}

const floatClassName =
  'fixed bottom-5 right-5 z-[90] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/30 transition hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:bottom-6 sm:right-6 sm:size-[3.75rem]'

export function WhatsAppFloat() {
  const href = buildWhatsAppHref()
  const isPlaceholder = href === '/contacto'

  if (isPlaceholder) {
    return (
      <Link
        to="/contacto"
        className={floatClassName}
        aria-label="WhatsApp (configura VITE_WHATSAPP_E164) — ir a contacto"
      >
        <FaWhatsapp className="size-8 sm:size-9" aria-hidden />
      </Link>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={floatClassName}
      aria-label="Escríbenos por WhatsApp"
    >
      <FaWhatsapp className="size-8 sm:size-9" aria-hidden />
    </a>
  )
}
