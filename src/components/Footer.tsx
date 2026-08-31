import { Link } from 'react-router-dom'
import { ArrowUp, FileText } from 'lucide-react'
import { profile } from '../lib/data'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-hairline py-10 mt-16 max-w-7xl mx-auto w-full px-2 sm:px-4">
      <div className="flex flex-col gap-6">
        {/* Navigation Map */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-muted font-semibold">
          <Link to="/" className="hover:text-signal transition-colors">/home</Link>
          <Link to="/about" className="hover:text-signal transition-colors">/about</Link>
          <Link to="/experience" className="hover:text-signal transition-colors">/experience</Link>
          <Link to="/projects" className="hover:text-signal transition-colors">/projects</Link>
          <Link to="/contact" className="hover:text-signal transition-colors">/contact</Link>
        </div>

        {/* Bottom Details */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-mono text-xs text-muted border-t border-hairline pt-6">
          <div className="flex flex-col gap-1">
            <span className="text-ink font-bold">
              {profile.name} — {profile.role}
            </span>
            <span className="text-faint">© {new Date().getFullYear()} • Built with React, Vite & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-5 text-ink font-semibold">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-signal transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-signal transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-signal transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 border border-hairline bg-panel rounded-sm hover:text-signal hover:border-signal transition-colors ml-2"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-signal" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
