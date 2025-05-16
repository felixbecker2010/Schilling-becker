import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Services />
      </main>
      <Footer />
    </div>
  )
}
