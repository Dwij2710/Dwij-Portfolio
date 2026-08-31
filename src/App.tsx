import { useState } from 'react'
import Preloader from './components/Preloader'
import FloatingNav from './components/FloatingNav'
import AwwwardsCursor from './components/AwwwardsCursor'
import Hero3D from './components/Hero3D'
import AboutSection from './components/AboutSection'
import EngineeringMetrics from './components/EngineeringMetrics'
import ProjectsShowcase from './components/ProjectsShowcase'
import SystemsArchitecture3D from './components/SystemsArchitecture3D'
import ExperienceTimeline from './components/ExperienceTimeline'
import TechStackUniverse from './components/TechStackUniverse'
import ResumeSection from './components/ResumeSection'
import ContactSection from './components/ContactSection'
import FooterCinematic from './components/FooterCinematic'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-[#04060A] text-primary relative selection:bg-violet-600/40 selection:text-white flex flex-col overflow-x-hidden font-sans">
      {/* Preloader Experience */}
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      {/* Awwwards Magnetic Custom Cursor */}
      <AwwwardsCursor />

      {/* Floating Glass Navigation Pill */}
      <FloatingNav />

      {/* Main Single-Page Cinematic Narrative */}
      <main className="flex-1 w-full relative z-10">
        <Hero3D />
        <AboutSection />
        <EngineeringMetrics />
        <ProjectsShowcase />
        <SystemsArchitecture3D />
        <ExperienceTimeline />
        <TechStackUniverse />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Minimal Cinematic Footer */}
      <FooterCinematic />
    </div>
  )
}
