import { useEffect, useState } from 'react'
import { FileText } from 'lucide-react'
import { profile } from '../lib/data'
import ThemeToggle from './ThemeToggle'

const sections = [
  { id: 'hero', label: 'intro' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'stack' },
  { id: 'experience', label: 'work' },
  { id: 'projects', label: 'projects' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
]

export default function Nav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -40% 0px', threshold: 0.1 }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Desktop Vertical Left Rail */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-16 lg:w-20 flex-col items-center justify-between py-6 border-r border-hairline bg-base/80 backdrop-blur-md z-40">
        <div className="flex flex-col items-center gap-4">
          <a
            href="#hero"
            className="font-mono text-[11px] font-semibold text-ink tracking-widest -rotate-90 whitespace-nowrap mt-8 hover:text-signal transition-colors"
          >
            DP // 2026
          </a>
        </div>

        {/* Section Dots */}
        <ul className="flex flex-col gap-5">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-label={s.label}
                className="group relative flex items-center justify-center w-8 h-8"
              >
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    active === s.id
                      ? 'bg-signal scale-125 shadow-sm ring-4 ring-signal/20'
                      : 'bg-hairline group-hover:bg-muted group-hover:scale-110'
                  }`}
                />
                <span className="pointer-events-none absolute left-11 whitespace-nowrap font-mono text-[11px] text-ink opacity-0 group-hover:opacity-100 transition-all duration-200 bg-panel border border-hairline px-2.5 py-1 rounded-sm shadow-md">
                  {s.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom controls: Theme toggle + Resume + Status */}
        <div className="flex flex-col items-center gap-4 mb-2">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            title="Download Resume PDF"
            className="p-2 rounded-sm border border-hairline bg-panel text-muted hover:text-signal hover:border-signal/50 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
          </a>

          <ThemeToggle />

          <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted -rotate-90 whitespace-nowrap mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-signal status-dot" />
            <span>open to work</span>
          </span>
        </div>
      </nav>

      {/* Mobile Top Header */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-40 bg-base/90 backdrop-blur-md border-b border-hairline px-4 py-3 flex items-center justify-between gap-3">
        <a href="#hero" className="font-mono text-xs font-semibold text-ink">
          DP<span className="text-signal">_</span>
        </a>

        <ul className="flex overflow-x-auto gap-4 font-mono text-[11px] text-muted py-0.5 no-scrollbar">
          {sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className={`transition-colors ${
                  active === s.id ? 'text-signal font-semibold' : 'hover:text-ink'
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 border border-hairline bg-panel text-muted hover:text-signal rounded-sm"
            aria-label="Resume"
          >
            <FileText className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>
    </>
  )
}
