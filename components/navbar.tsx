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
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Bestimme den aktuellen sichtbaren Abschnitt
      const sections = ["hero", "about", "services", "contact"]

      // Finde den aktuell sichtbaren Abschnitt
      // Wir prüfen von unten nach oben, damit der unterste sichtbare Abschnitt als aktiv gilt
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          // Wenn der Abschnitt im Viewport ist (mit etwas Toleranz)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial auslösen, um den aktiven Abschnitt zu setzen
    handleScroll()

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

  // Hilfsfunktion, um zu bestimmen, ob ein Navigationspunkt aktiv ist
  const isActive = (sectionId: string) => {
    if (sectionId === "hero" && activeSection === "") return true
    return activeSection === sectionId
  }

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => navigateToSection("hero")}>
          <span className="text-xl font-bold tracking-tighter">
            <span className="text-gradient">SCHILLING</span> <span className="text-gray-400">&</span>{" "}
            <span className="text-gradient">BECKER</span>
          </span>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden md:flex gap-6">
          <a
            href="#about"
            className={`text-sm font-medium transition-colors ${
              isActive("about") ? "text-green-800 font-semibold" : "hover:text-green-800"
            }`}
            onClick={(e) => {
              e.preventDefault()
              navigateToSection("about")
            }}
          >
            Über uns
          </a>
          <a
            href="#services"
            className={`text-sm font-medium transition-colors ${
              isActive("services") ? "text-green-800 font-semibold" : "hover:text-green-800"
            }`}
            onClick={(e) => {
              e.preventDefault()
              navigateToSection("services")
            }}
          >
            Unser Dienst
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors ${
              isActive("contact") ? "text-green-800 font-semibold" : "hover:text-green-800"
            }`}
            onClick={(e) => {
              e.preventDefault()
              navigateToSection("contact")
            }}
          >
            Kontakt
          </a>
          <Link
            href="/impressum"
            className={`text-sm font-medium transition-colors ${
              pathname === "/impressum" ? "text-green-800 font-semibold" : "hover:text-green-800"
            }`}
          >
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

        {/* Mobile-Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md border-b shadow-lg md:hidden">
            <nav className="flex flex-col p-4">
              <a
                href="#about"
                className={`py-3 text-sm font-medium border-b border-gray-100 transition-colors ${
                  isActive("about") ? "text-green-800 font-semibold" : "hover:text-green-800"
                }`}
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
                className={`py-3 text-sm font-medium border-b border-gray-100 transition-colors ${
                  isActive("services") ? "text-green-800 font-semibold" : "hover:text-green-800"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  navigateToSection("services")
                  setIsMenuOpen(false)
                }}
              >
                Unser Dienst
              </a>
              <a
                href="#contact"
                className={`py-3 text-sm font-medium border-b border-gray-100 transition-colors ${
                  isActive("contact") ? "text-green-800 font-semibold" : "hover:text-green-800"
                }`}
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
                className={`py-3 text-sm font-medium transition-colors ${
                  pathname === "/impressum" ? "text-green-800 font-semibold" : "hover:text-green-800"
                }`}
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
