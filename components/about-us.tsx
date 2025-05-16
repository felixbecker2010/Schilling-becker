import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block p-1.5 px-3 bg-gray-100 rounded-full">
            <span className="text-sm font-medium text-gray-800">Das Team</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Über uns</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lernen Sie die Gründer von SCHILLING & BECKER kennen.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 py-12">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"></div>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-white shadow-md">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Oskar Schilling" />
                  <AvatarFallback>OS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Oskar Schilling</CardTitle>
                  <CardDescription>Mitgründer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Mit jahrelanger Erfahrung und innovativen Ideen treibt Oskar die Vision von SCHILLING & BECKER voran.
                Seine Expertise liegt in [Fachgebiet einfügen] und er ist bekannt für seine [Stärken einfügen].
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="h-3 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-200"></div>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-white shadow-md">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Felix Becker" />
                  <AvatarFallback>FB</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Felix Becker</CardTitle>
                  <CardDescription>Mitgründer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Felix bringt frische Perspektiven und tiefgreifendes Know-how in das Unternehmen ein. Seine Schwerpunkte
                liegen in [Fachgebiet einfügen] und er zeichnet sich durch [Stärken einfügen] aus.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
