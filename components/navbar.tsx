"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
// Importiere die scrollToElement Funktion
import { scrollToElement } from "@/utils/scroll-utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Funktion zum Navigieren zu Abschnitten, die auch von anderen Seiten funktioniert
  const navigateToSection = (sectionId: string) => {
    if (pathname === "/") {
      // Wenn wir bereits auf der Hauptseite sind, einfach scrollen
      scrollToElement(sectionId)
    } else {
      // Wenn wir auf einer anderen Seite sind, zur Hauptseite navigieren
      // und dann einen Hash anhängen, der vom Layout verarbeitet wird
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter">SCHILLING & BECKER</span>
        </Link>

        {/* Ersetze die Desktop-Navigation mit: */}
        <nav className="hidden md:flex gap-6">
          <a
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={(e) => {
              e.preventDefault()
              navigateToSection("about")
            }}
          >
            Über uns
          </a>
          <a
            href="#services"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={(e) => {
              e.preventDefault()
              navigateToSection("services")
            }}
          >
            Unsere Dienste
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={(e) => {
              e.preventDefault()
              navigateToSection("contact")
            }}
          >
            Kontakt
          </a>
          <Link href="/impressum" className="text-sm font-medium hover:underline underline-offset-4">
            Impressum & Datenschutzerklärung
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Ersetze auch die Mobile-Navigation mit: */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b shadow-lg md:hidden">
            <nav className="flex flex-col p-4">
              <a
                href="#about"
                className="py-2 text-sm font-medium hover:underline underline-offset-4"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToSection("about")
                  setIsMenuOpen(false)
                }}
              >
                Über uns
              </a>
              <a
                href="#services"
                className="py-2 text-sm font-medium hover:underline underline-offset-4"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToSection("services")
                  setIsMenuOpen(false)
                }}
              >
                Unsere Dienste
              </a>
              <a
                href="#contact"
                className="py-2 text-sm font-medium hover:underline underline-offset-4"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToSection("contact")
                  setIsMenuOpen(false)
                }}
              >
                Kontakt
              </a>
              <Link
                href="/impressum"
                className="py-2 text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Impressum & Datenschutzerklärung
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
