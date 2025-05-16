import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Briefcase, Code, LineChart } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block p-1.5 px-3 bg-white rounded-full border border-gray-200">
            <span className="text-sm font-medium text-gray-800">Unser Angebot</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unsere Dienste</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Entdecken Sie unser vielfältiges Angebot an professionellen Dienstleistungen.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 py-12">
          {/* Hier können Sie weitere Dienste hinzufügen */}
          <Card className="group relative overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 opacity-50"></div>
            <CardHeader className="relative">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                <Briefcase className="h-5 w-5" />
              </div>
              <CardTitle>Dienst 1</CardTitle>
              <CardDescription>Beschreibung des ersten Dienstes</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-gray-500">
                Detaillierte Informationen über den ersten Dienst, den SCHILLING & BECKER anbietet.
              </p>
            </CardContent>
            <CardFooter className="relative">
              <Button
                asChild
                variant="outline"
                className="w-full group-hover:bg-gray-900 group-hover:text-white transition-colors"
              >
                <Link href="#" className="flex items-center justify-center gap-2">
                  Mehr erfahren <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="group relative overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 opacity-50"></div>
            <CardHeader className="relative">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                <Code className="h-5 w-5" />
              </div>
              <CardTitle>Dienst 2</CardTitle>
              <CardDescription>Beschreibung des zweiten Dienstes</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-gray-500">
                Detaillierte Informationen über den zweiten Dienst, den SCHILLING & BECKER anbietet.
              </p>
            </CardContent>
            <CardFooter className="relative">
              <Button
                asChild
                variant="outline"
                className="w-full group-hover:bg-gray-900 group-hover:text-white transition-colors"
              >
                <Link href="#" className="flex items-center justify-center gap-2">
                  Mehr erfahren <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="group relative overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 opacity-50"></div>
            <CardHeader className="relative">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                <LineChart className="h-5 w-5" />
              </div>
              <CardTitle>Dienst 3</CardTitle>
              <CardDescription>Beschreibung des dritten Dienstes</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-gray-500">
                Detaillierte Informationen über den dritten Dienst, den SCHILLING & BECKER anbietet.
              </p>
            </CardContent>
            <CardFooter className="relative">
              <Button
                asChild
                variant="outline"
                className="w-full group-hover:bg-gray-900 group-hover:text-white transition-colors"
              >
                <Link href="#" className="flex items-center justify-center gap-2">
                  Mehr erfahren <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
