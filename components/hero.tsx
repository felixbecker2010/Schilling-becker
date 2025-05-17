"use client"

import { scrollToElement } from "@/utils/scroll-utils"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="w-full py-10 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Moderner Hintergrund mit Farbverlauf und Formen */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-800 opacity-5 mix-blend-multiply filter blur-xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-emerald-700 opacity-5 mix-blend-multiply filter blur-xl"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-40 right-1/4 w-40 h-40 rounded-full bg-teal-800 opacity-5 mix-blend-multiply filter blur-lg"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="inline-block p-1.5 px-4 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm animate-fade-in">
            <span className="text-sm font-medium bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
              Gemeinsam für Ihren Erfolg
            </span>
          </div>

          <div className="space-y-3 max-w-3xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-gradient">SCHILLING</span> <span className="text-gray-400">&</span>{" "}
              <span className="text-gradient">BECKER</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Wir gestalten die Zukunft Ihres Unternehmens mit innovativen Lösungen und fundierter Expertise.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 min-w-[200px] animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => scrollToElement("services")}
              className="inline-flex h-11 items-center justify-center rounded-full bg-green-800 px-6 text-sm font-medium text-white shadow transition-all hover:bg-green-700 hover:shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            >
              Unser Dienst <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToElement("contact")}
              className="inline-flex h-11 items-center justify-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-6 text-sm font-medium shadow-sm transition-all hover:bg-gray-100 hover:text-gray-900 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>

      {/* Moderne dekorative Elemente */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}
