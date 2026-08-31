import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react'
import { profile } from '../lib/data'

const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#systems', label: 'SYSTEMS' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#contact', label: 'CONTACT' },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Section spy
      const sections = navLinks.map((link) => link.href.substring(1))
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 240) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Floating Glass Bar */}
      <header className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500">
        <nav
          className={`glass-pill px-4 py-2 rounded-full flex items-center gap-1.5 transition-all duration-300 ${
            isScrolled ? 'shadow-2xl shadow-violet-950/20 py-1.5 px-3' : 'py-2 px-4'
          }`}
        >
          {/* Brand Monogram */}
          <a
            href="#home"
            data-cursor="DWIJ"
            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-white transition-colors mr-2"
          >
            DP
          </a>

          {/* Nav Items */}
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.substring(1)
              const isActive = activeSection === id

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor={link.label}
                    className={`relative px-3.5 py-1.5 rounded-full font-mono text-xs font-medium tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-secondary hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 via-indigo-600/30 to-cyan-500/30 border border-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.3)] z-0"
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Divider */}
          <div className="w-px h-4 bg-white/10 mx-2" />

          {/* Resume CTA */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor="RESUME PDF"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-violet-600/30 border border-white/15 hover:border-violet-500/50 font-mono text-xs font-semibold text-white transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-glow" />
            <span>RESUME</span>
          </a>
        </nav>
      </header>

      {/* Mobile Floating Bar & Fullscreen Menu */}
      <header className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between glass-pill px-4 py-2.5 rounded-full">
        <a href="#home" className="font-mono text-sm font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
          <span>DWIJ PRAJAPATI</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-full bg-white/[0.08] border border-white/10 text-white"
            aria-label="Resume"
          >
            <FileText className="w-4 h-4 text-cyan-glow" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-full bg-white/[0.08] border border-white/10 text-white"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="md:hidden fixed inset-0 z-40 bg-[#04060A]/95 flex flex-col justify-center px-8"
          >
            <ul className="space-y-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-2xl font-bold text-white hover:text-cyan-glow transition-colors block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-violet-600 text-white font-mono text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME PDF</span>
              </a>
              <p className="font-mono text-xs text-muted text-center">
                {profile.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
