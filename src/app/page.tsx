import { Hero } from "@/components/sections/Hero"
import { Benefits } from "@/components/sections/Benefits"
import { Videos } from "@/components/sections/Videos"
import { Resources } from "@/components/sections/Resources"
import { Footer } from "@/components/sections/Footer"
import { Navigation } from "@/components/Navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Benefits />
      <Videos />
      <Resources />
      <Footer />
    </>
  )
}
