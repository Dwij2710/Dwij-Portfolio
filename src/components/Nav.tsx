import { NavLink } from 'react-router-dom'
import { FileText, Home, User, Briefcase, Cpu, MessageSquare } from 'lucide-react'
import { profile } from '../lib/data'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { path: '/', label: 'Home / Intro', shortLabel: 'Intro', icon: Home },
  { path: '/about', label: 'About & Stack', shortLabel: 'About', icon: User },
  { path: '/experience', label: 'Work Experience', shortLabel: 'Work', icon: Briefcase },
  { path: '/projects', label: 'Case Studies', shortLabel: 'Projects', icon: Cpu },
  { path: '/contact', label: 'Contact & Resume', shortLabel: 'Contact', icon: MessageSquare },
]

export default function Nav() {
  return (
    <>
      {/* Desktop Vertical Rail */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-16 lg:w-20 flex-col items-center justify-between py-6 border-r border-hairline bg-base/90 backdrop-blur-md z-40">
        {/* Top Logo */}
        <div className="flex flex-col items-center">
          <NavLink
            to="/"
            className="w-10 h-10 rounded-sm border border-hairline bg-panel flex items-center justify-center font-mono text-xs font-bold text-ink hover:border-signal hover:text-signal transition-colors shadow-sm"
            title="Dwij Prajapati Portfolio"
          >
            DP
          </NavLink>
        </div>

        {/* Center Route Links */}
        <ul className="flex flex-col gap-3.5 my-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  aria-label={item.label}
                  className={({ isActive }) =>
                    `group relative flex items-center justify-center w-10 h-10 rounded-sm border transition-all ${
                      isActive
                        ? 'border-signal bg-signal/15 text-signal shadow-sm ring-2 ring-signal/20'
                        : 'border-hairline bg-panel text-muted hover:text-ink hover:border-faint'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-signal' : 'text-muted group-hover:text-ink'}`} />
                      {/* Tooltip */}
                      <span className="pointer-events-none absolute left-14 whitespace-nowrap font-mono text-[11px] text-ink opacity-0 group-hover:opacity-100 transition-all duration-200 bg-panel border border-hairline px-3 py-1 rounded-sm shadow-xl z-50">
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            )
          })}
        </ul>

        {/* Bottom Controls */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            title="Download Resume PDF"
            className="w-9 h-9 flex items-center justify-center rounded-sm border border-hairline bg-panel text-muted hover:text-signal hover:border-signal/50 transition-colors"
          >
            <FileText className="w-4 h-4" />
          </a>

          <ThemeToggle />

          {/* Status Indicator */}
          <div
            className="group relative flex items-center justify-center w-9 h-9"
            title="Status: Available for opportunities"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-signal status-dot" />
            <span className="pointer-events-none absolute left-14 whitespace-nowrap font-mono text-[10px] text-muted opacity-0 group-hover:opacity-100 transition-all duration-200 bg-panel border border-hairline px-2.5 py-1 rounded-sm shadow-xl z-50">
              ● status: open to work
            </span>
          </div>
        </div>
      </aside>

      {/* Mobile Top Navigation Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-base/95 backdrop-blur-md border-b border-hairline px-4 py-3 flex items-center justify-between gap-2 shadow-sm">
        <NavLink to="/" className="font-mono text-xs font-bold text-ink flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-signal" />
          <span>DP</span>
        </NavLink>

        <nav className="flex overflow-x-auto gap-2 font-mono text-[11px] py-0.5 no-scrollbar mx-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `shrink-0 px-2.5 py-1 rounded-sm border transition-all ${
                  isActive
                    ? 'bg-signal text-base font-semibold border-signal shadow-sm'
                    : 'border-hairline bg-panel text-muted hover:text-ink'
                }`
              }
            >
              {item.shortLabel}
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
            aria-label="Download Resume"
          >
            <FileText className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>
    </>
  )
}
