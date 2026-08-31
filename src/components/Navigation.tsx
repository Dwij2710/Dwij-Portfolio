import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText, Sparkles, ArrowRight } from 'lucide-react'
import { profile } from '../lib/data'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
  { path: '/resume', label: 'Resume' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Desktop Floating Navigation Bar */}
      <header className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
        <nav
          className={`px-3.5 py-2 rounded-full border border-white/10 glass-panel flex items-center gap-1 shadow-2xl transition-all duration-300 ${
            isScrolled ? 'bg-[#060911]/85 backdrop-blur-xl border-white/15' : 'bg-[#090D16]/60 backdrop-blur-lg'
          }`}
        >
          {/* Brand Monogram */}
          <Link
            to="/"
            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-white transition-colors mr-2 shadow-sm"
          >
            DP
          </Link>

          {/* Links */}
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-secondary hover:text-white hover:bg-white/[0.04]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="navActivePill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 via-indigo-600/30 to-cyan-500/30 border border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.3)] z-0"
                          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="w-px h-4 bg-white/10 mx-2" />

          {/* Quick PDF CTA */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-violet-600/30 border border-white/15 hover:border-violet-500/40 font-mono text-xs font-semibold text-white transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-glow" />
            <span>PDF</span>
          </a>
        </nav>
      </header>

      {/* Mobile Top Navigation Header */}
      <header className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-4 py-2.5 rounded-full glass-panel border border-white/10 shadow-xl bg-[#090D16]/80 backdrop-blur-xl">
        <Link to="/" className="font-mono text-sm font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
          <span>DWIJ PRAJAPATI</span>
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-full bg-white/[0.06] border border-white/10 text-white"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </header>

      {/* Mobile Fullscreen Animated Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-[#04060A]/98 flex flex-col justify-between px-8 py-20"
          >
            <div className="space-y-6">
              <span className="font-mono text-xs font-bold text-muted uppercase tracking-widest block">
                NAVIGATION
              </span>

              <ul className="space-y-4">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `font-mono text-2xl font-extrabold transition-colors flex items-center justify-between ${
                          isActive ? 'text-cyan-glow' : 'text-white hover:text-cyan-light'
                        }`
                      }
                    >
                      <span>0{i + 1} // {item.label.toUpperCase()}</span>
                      <ArrowRight className="w-5 h-5 opacity-60" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
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
