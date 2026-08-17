import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/presentation/components/layout/navbar'
import { Home } from '@/presentation/pages/home'
import { About } from '@/presentation/pages/about'
import { Skills } from '@/presentation/pages/skills'
import { Projects } from '@/presentation/pages/projects'
import { Experiences } from '@/presentation/pages/experiences'
import { Contact } from '@/presentation/pages/contact'

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
