import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Experience from "@/components/sections/Experience"
import Hero from "@/components/sections/Hero"
import Highlights from "@/components/sections/Highlights"
import Process from "@/components/sections/Process"
import Projects from "@/components/sections/Projects"
import TechStack from "@/components/sections/TechStack"
import WhatIBuild from "@/components/sections/WhatIBuild"

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <TechStack />
      <WhatIBuild />
      <Process />
      <Highlights />
      <Contact />
    </main>
  )
}
