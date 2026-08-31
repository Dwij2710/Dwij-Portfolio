import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <div className="min-h-screen bg-base text-ink relative selection:bg-signal selection:text-base">
      <CursorGlow />
      <Nav />
      <main className="md:pl-20 lg:pl-24 px-6 sm:px-10 lg:px-16 pt-16 md:pt-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
