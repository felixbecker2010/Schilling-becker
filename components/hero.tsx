"use client"

import { scrollToElement } from "@/utils/scroll-utils"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Hintergrund mit subtilen geometrischen Formen */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gray-300 mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gray-400 mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-40 right-1/4 w-40 h-40 rounded-full bg-gray-300 mix-blend-multiply filter blur-lg"></div>
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="inline-block p-1.5 px-3 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
            <span className="text-sm font-medium text-gray-800">Gemeinsam für Ihren Erfolg</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              SCHILLING <span className="text-gray-400">&</span> BECKER
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
              Wir gestalten die Zukunft Ihres Unternehmens mit innovativen Lösungen und fundierter Expertise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
            <button
              className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              onClick={() => scrollToElement("services")}
            >
              Unsere Dienste
            </button>
            <button
              className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              onClick={() => scrollToElement("contact")}
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>

      {/* Dekorative Elemente */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}
