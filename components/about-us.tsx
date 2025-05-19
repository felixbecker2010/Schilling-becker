import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Code } from "lucide-react"

export function AboutUs() {
  return (
    <section id="about" className="w-full py-8 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-6">
          <div className="inline-block p-1 px-3 bg-green-50 rounded-full border border-green-200">
            <span className="text-sm font-medium text-green-800">Das Team</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">Über uns</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
            Lernen Sie die Gründer von SCHILLING & BECKER kennen.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 py-6">
          <Card className="overflow-hidden border-0 shadow-lg hover-lift">
            <div className="h-2 bg-gradient-to-r from-green-700 to-green-900"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/48c5ffb8-d106-4c78-ad38-2ad690bbb578.JPG-DnWplWGUslJe5QesKPP9VnEMCW928B.jpeg"
                    alt="Oskar Schilling"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <CardTitle>Oskar Schilling</CardTitle>
                  <CardDescription>Gründer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start">
                <div className="mr-3 mt-1 bg-green-100 p-2 rounded-full">
                  <Code className="h-4 w-4 text-green-800" />
                </div>
                <p className="text-gray-600">
                  Oskar ist der strategische Kopf hinter SCHILLING & BECKER. Mit seinem Gespür für Kundenbedürfnisse und
                  seinem Organisationstalent sorgt er dafür, dass Projekte reibungslos ablaufen und unsere Kunden stets
                  zufrieden sind.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-0 shadow-lg hover-lift">
            <div className="h-2 bg-gradient-to-r from-emerald-700 to-emerald-900"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6983_2.jpg-gLyFH2Xbut5F1VPkbDcIagrgstPIWn.jpeg"
                    alt="Felix Becker"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <CardTitle>Felix Becker</CardTitle>
                  <CardDescription>Gründer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start">
                <div className="mr-3 mt-1 bg-emerald-100 p-2 rounded-full">
                  <Briefcase className="h-4 w-4 text-emerald-800" />
                </div>
                <p className="text-gray-600">
                  Als leidenschaftlicher Entwickler bringt Felix technisches Know-how und innovative Lösungsansätze in
                  unser Team. Er ist verantwortlich für die Umsetzung unserer Webprojekte und sorgt dafür, dass unsere
                  Kunden stets von den neuesten Technologien profitieren. Er ist Ihr erster Ansprechpartner für alle
                  Anfragen.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
