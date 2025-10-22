import type React from "react"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <ClientLayout>{children}</ClientLayout>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
