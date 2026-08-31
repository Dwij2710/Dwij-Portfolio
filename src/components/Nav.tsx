import { NavLink } from 'react-router-dom'
import { FileText, Home, User, Briefcase, Cpu, MessageSquare } from 'lucide-react'
import { profile } from '../lib/data'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { path: '/', label: 'intro', icon: Home },
  { path: '/about', label: 'about', icon: User },
  { path: '/experience', label: 'work', icon: Briefcase },
  { path: '/projects', label: 'projects', icon: Cpu },
  { path: '/contact', label: 'contact', icon: MessageSquare },
]

export default function Nav() {
  return (
    <>
      {/* Desktop Vertical Left Rail */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-16 lg:w-20 flex-col items-center justify-between py-6 border-r border-hairline bg-base/85 backdrop-blur-md z-40">
        <div className="flex flex-col items-center gap-4">
          <NavLink
            to="/"
            className="font-mono text-[11px] font-semibold text-ink tracking-widest -rotate-90 whitespace-nowrap mt-8 hover:text-signal transition-colors"
          >
            DP // 2026
          </NavLink>
        </div>

        {/* Route Links */}
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  aria-label={item.label}
                  className={({ isActive }) =>
                    `group relative flex items-center justify-center w-9 h-9 rounded-sm border transition-all ${
                      isActive
                        ? 'border-signal/80 bg-signal/10 text-signal shadow-sm'
                        : 'border-hairline bg-panel text-muted hover:text-ink hover:border-faint'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-signal' : 'text-muted group-hover:text-ink'}`} />
                      <span className="pointer-events-none absolute left-12 whitespace-nowrap font-mono text-[11px] text-ink opacity-0 group-hover:opacity-100 transition-all duration-200 bg-panel border border-hairline px-2.5 py-1 rounded-sm shadow-md z-50">
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            )
          })}
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
      </aside>

      {/* Mobile Top Navigation Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-base/90 backdrop-blur-md border-b border-hairline px-4 py-3 flex items-center justify-between gap-3">
        <NavLink to="/" className="font-mono text-xs font-semibold text-ink">
          DP
        </NavLink>

        <nav className="flex overflow-x-auto gap-3 font-mono text-[11px] py-0.5 no-scrollbar">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `shrink-0 px-2 py-1 rounded-sm transition-colors ${
                  isActive
                    ? 'bg-signal text-base font-semibold'
                    : 'text-muted hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

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
      </header>
    </>
  )
}
