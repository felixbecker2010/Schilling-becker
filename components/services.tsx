import { ArrowRight, Film, Laptop, PenTool } from "lucide-react"
import Link from "next/link"

export function Services() {
  return (
    <section id="services" className="w-full py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-6">
          <div className="inline-block p-1 px-3 bg-teal-50 rounded-full border border-teal-200">
            <span className="text-sm font-medium text-teal-600">Entdecken Sie</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
            Unser Dienst
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
            Von der Webentwicklung bis zur Drohnenfilmproduktion - wir bieten alles, was Ihr Unternehmen digital
            voranbringt.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-soft overflow-hidden hover-lift">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bildschirmfoto%202025-05-17%20um%2022.48.54-zFzSUdSV7j7BjyOI8CwxEh5qopWnAW.png"
                alt="goSite Website Preview"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-gray-600 mb-4">
                Mit goSite bieten wir Ihnen einen umfassenden digitalen Rundumservice. Wir kombinieren professionelle
                Webentwicklung mit kreativer Mediengestaltung und beeindruckenden Imagefilmen inklusive
                Drohnenaufnahmen, um Ihr Unternehmen optimal zu präsentieren.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="bg-teal-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <Laptop className="h-4 w-4 text-teal-600 mr-2" />
                    <h3 className="font-medium">Webentwicklung</h3>
                  </div>
                  <p className="text-xs text-gray-600">Moderne, responsive Websites mit optimaler Performance</p>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <PenTool className="h-4 w-4 text-teal-600 mr-2" />
                    <h3 className="font-medium">Mediengestaltung</h3>
                  </div>
                  <p className="text-xs text-gray-600">Professionelles Design und kreative Inhalte für Ihre Marke</p>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <Film className="h-4 w-4 text-teal-600 mr-2" />
                    <h3 className="font-medium">Imagefilme</h3>
                  </div>
                  <p className="text-xs text-gray-600">Beeindruckende Videos mit spektakulären Drohnenaufnahmen</p>
                </div>
              </div>

              <Link
                href="https://www.gosite.world/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full h-10 px-5 rounded-full bg-teal-500 text-white font-medium shadow transition-all hover:bg-teal-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Jetzt entdecken <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
