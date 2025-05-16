import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="w-full border-t bg-white py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Kontakt</h2>
            <p className="mx-auto max-w-[600px] text-gray-500">
              Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Kontaktieren Sie uns.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium">E-Mail</h3>
            <Link href="mailto:info@schilling-becker.de" className="text-gray-500 hover:text-gray-900">
              info@schilling-becker.de
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium">Telefon</h3>
            <Link href="tel:+49017642986978" className="text-gray-500 hover:text-gray-900">
              017642986978
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium">Adresse</h3>
            <p className="text-gray-500">
              Südstraße 28
              <br />
              31275 Lehrte
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center border-t pt-8">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold">SCHILLING & BECKER</span>
          </Link>
          <p className="text-sm text-gray-500 md:text-base mb-2">
            © {new Date().getFullYear()} SCHILLING & BECKER. Alle Rechte vorbehalten.
          </p>
          <Link href="/impressum" className="text-sm text-gray-500 hover:text-gray-900">
            Impressum & Datenschutzerklärung
          </Link>
        </div>
      </div>
    </footer>
  )
}
