"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { scrollToElement } from "@/utils/scroll-utils"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    // Überprüfen, ob wir auf der Hauptseite sind und ein Hash in der URL haben
    if (pathname === "/") {
      const hash = window.location.hash
      if (hash) {
        // Hash ohne # extrahieren
        const sectionId = hash.substring(1)
        // Kurze Verzögerung, um sicherzustellen, dass die Seite vollständig geladen ist
        setTimeout(() => {
          scrollToElement(sectionId)
        }, 100)
      }
    }
  }, [pathname])

  return <body>{children}</body>
}
