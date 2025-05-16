import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
