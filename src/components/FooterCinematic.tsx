import { ArrowUp } from 'lucide-react'
import { profile } from '../lib/data'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function FooterCinematic() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-white/[0.06] relative z-10">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-secondary">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="text-white font-bold">
            {profile.name} — {profile.role}
          </span>
          <span className="text-muted text-[11px]">
            © {new Date().getFullYear()} • Engineered with React, Three.js, Vite & Tailwind CSS
          </span>
        </div>

        <div className="flex items-center gap-6">
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
            data-cursor="TOP"
            className="p-2.5 rounded-full glass-card border border-white/10 hover:border-violet-glow text-white hover:text-cyan-glow transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
