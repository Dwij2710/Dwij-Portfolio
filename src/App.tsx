import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AwwwardsCursor from './components/AwwwardsCursor'
import AskDwijAI from './components/AskDwijAI'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import CaseStudyInterviewGod from './pages/CaseStudyInterviewGod'
import CaseStudyFinSight from './pages/CaseStudyFinSight'
import CaseStudyCompInsight from './pages/CaseStudyCompInsight'
import ExperiencePage from './pages/ExperiencePage'
import SkillsPage from './pages/SkillsPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#04060A] text-primary relative selection:bg-violet-600/40 selection:text-white flex flex-col overflow-x-hidden font-sans">
        <ScrollToTop />
        <AwwwardsCursor />
        <Navigation />

        <main className="flex-1 w-full relative z-10">
          <Routes>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
            <Route path="/projects/interviewgod" element={<PageWrapper><CaseStudyInterviewGod /></PageWrapper>} />
            <Route path="/projects/finsight" element={<PageWrapper><CaseStudyFinSight /></PageWrapper>} />
            <Route path="/projects/compinsight" element={<PageWrapper><CaseStudyCompInsight /></PageWrapper>} />
            <Route path="/experience" element={<PageWrapper><ExperiencePage /></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper><SkillsPage /></PageWrapper>} />
            <Route path="/resume" element={<PageWrapper><ResumePage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
          </Routes>
        </main>

        {/* Floating AI Assistant */}
        <AskDwijAI />

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}
