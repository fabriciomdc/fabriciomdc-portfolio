import { Navbar } from '@/presentation/components/layout/navbar'
import { SectionAnimation } from '@/presentation/components/ui/section-animation'
import { Home } from '@/presentation/pages/home'
import { About } from '@/presentation/pages/about'
import { Skills } from '@/presentation/pages/skills'
import { Projects } from '@/presentation/pages/projects'
import { Experiences } from '@/presentation/pages/experiences'
import { Contact } from '@/presentation/pages/contact'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-28 paper-texture">
        <div className="mx-auto w-[95vw] lg:w-[85vw] border-x-2 border-foreground">
          <SectionAnimation variant="fadeIn">
            <Home />
          </SectionAnimation>
          <SectionAnimation variant="fadeInUp">
            <About />
          </SectionAnimation>
          <SectionAnimation variant="fadeInUp">
            <Skills />
          </SectionAnimation>
          <SectionAnimation variant="fadeInUp">
            <Projects />
          </SectionAnimation>
          <SectionAnimation variant="fadeInUp">
            <Experiences />
          </SectionAnimation>
          <SectionAnimation variant="fadeInUp">
            <Contact />
          </SectionAnimation>
          <div className="m-2 mb-4" />
        </div>
      </main>
    </>
  )
}
