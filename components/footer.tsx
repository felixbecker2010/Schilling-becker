"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="w-full border-t bg-gradient-to-b from-white to-gray-50 py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-6">
          <div className="inline-block p-1 px-3 bg-green-50 rounded-full border border-green-200 mb-1">
            <span className="text-sm font-medium text-green-800">Sprechen Sie mit uns</span>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tighter text-gradient">Kontakt</h2>
            <p className="mx-auto max-w-[600px] text-gray-500">
              Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Kontaktieren Sie uns.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-8">
          <div className="flex flex-col items-center space-y-2 text-center p-4 bg-white rounded-xl shadow-sm hover-lift">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <Mail className="h-5 w-5 text-green-800" />
            </div>
            <h3 className="text-base font-medium">E-Mail</h3>
            <Link
              href="mailto:info@felixbecker.group"
              className="text-green-800 hover:text-green-700 hover:underline flex items-center"
            >
              info@felixbecker.group
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center p-4 bg-white rounded-xl shadow-sm hover-lift">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <Phone className="h-5 w-5 text-green-800" />
            </div>
            <h3 className="text-base font-medium">Telefon</h3>
            <Link
              href="tel:+49017642986978"
              className="text-green-800 hover:text-green-700 hover:underline flex items-center"
            >
              017642986978
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center p-4 bg-white rounded-xl shadow-sm hover-lift">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <MapPin className="h-5 w-5 text-green-800" />
            </div>
            <h3 className="text-base font-medium">Adresse</h3>
            <p className="text-gray-600">
              Bernsteinstraße 7
              <br />
              31275 Lehrte
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center border-t pt-6">
          <Link href="/" className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold text-gradient">SCHILLING & BECKER</span>
          </Link>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <Link href="/" className="text-sm text-gray-500 hover:text-green-800 transition-colors">
              Startseite
            </Link>
            <Link
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm text-gray-500 hover:text-green-800 transition-colors"
            >
              Unser Dienst
            </Link>
            <Link href="/impressum" className="text-sm text-gray-500 hover:text-green-800 transition-colors">
              Impressum & Datenschutzerklärung
            </Link>
          </div>
          <p className="text-sm text-gray-500 md:text-base mb-1">
            © {new Date().getFullYear()} SCHILLING & BECKER. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
