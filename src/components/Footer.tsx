import { Link } from 'react-router-dom'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { profile } from '../lib/data'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-20 border-t border-white/[0.06] pt-14 pb-10 relative z-10 bg-[#08090C]">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-10">
        {/* Large Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-accent tracking-[0.25em] uppercase">
              NEXT STEPS // GET IN TOUCH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05]">
              LET'S BUILD <br />
              <span className="text-accent">SOMETHING INTELLIGENT.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-accent text-slate-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent-hover hover:shadow-[0_0_25px_rgba(0,229,199,0.4)] transition-all shadow-lg"
            >
              Start a Conversation →
            </Link>

            <a
              href={`mailto:${profile.email}`}
              className="px-6 py-3.5 rounded-full glass-card border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider hover:border-accent/40 transition-all"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* Links & Details Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-secondary">
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
            <Link to="/experience" className="hover:text-accent transition-colors">Experience</Link>
            <Link to="/skills" className="hover:text-accent transition-colors">Skills</Link>
            <Link to="/resume" className="hover:text-accent transition-colors">Resume</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full glass-card border border-white/10 hover:border-accent text-white hover:text-accent transition-all ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-muted text-center sm:text-left">
          <span>{profile.name} — {profile.role}</span>
          <span>© {new Date().getFullYear()} • Built with React & TypeScript • Voice AI & Systems</span>
        </div>
      </div>
    </footer>
  )
}
