import { Navbar } from '@/presentation/components/layout/navbar'
import { Home } from '@/presentation/pages/home'
import { About } from '@/presentation/pages/about'
import { Skills } from '@/presentation/pages/skills'
import { Projects } from '@/presentation/pages/projects'
import { Experiences } from '@/presentation/pages/experiences'
import { Contact } from '@/presentation/pages/contact'

export const Router = () => {
  return (
    <>
      <Navbar />
      <main className="pt-28 paper-texture">
        <div className="mx-auto w-[95vw] lg:w-[85vw] border-x-2 border-foreground">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experiences />
          <Contact />
          <div className="m-2 mb-4" />
        </div>
      </main>
    </>
  )
}
