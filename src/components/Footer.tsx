import { Link } from 'react-router-dom'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { profile } from '../lib/data'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-20 border-t border-white/[0.06] pt-12 pb-10 relative z-10 bg-[#04060A]">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-10">
        {/* Large Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
              NEXT STEPS // GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              LET'S BUILD <br />
              <span className="text-gradient-violet-cyan">SOMETHING INTELLIGENT.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all shadow-lg"
            >
              Start a Conversation →
            </Link>

            <a
              href={`mailto:${profile.email}`}
              className="px-6 py-3.5 rounded-full glass-card border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/[0.06] transition-all"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* Links & Details Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-secondary">
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/experience" className="hover:text-white transition-colors">Experience</Link>
            <Link to="/skills" className="hover:text-white transition-colors">Skills</Link>
            <Link to="/resume" className="hover:text-white transition-colors">Resume</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-glow transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-glow transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full glass-card border border-white/10 hover:border-violet-glow text-white hover:text-cyan-glow transition-all ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-muted text-center sm:text-left">
          <span>{profile.name} — {profile.role}</span>
          <span>© {new Date().getFullYear()} • Built with React, Three.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
