import { NavLink } from 'react-router-dom'
import { FileText, Home, User, Briefcase, Cpu, MessageSquare } from 'lucide-react'
import { profile } from '../lib/data'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { path: '/', label: 'SYS.HOME // 00', shortLabel: 'Intro', icon: Home, cursor: 'SYS.HOME' },
  { path: '/about', label: 'SYS.ABOUT // 01', shortLabel: 'About', icon: User, cursor: 'SYS.ABOUT' },
  { path: '/experience', label: 'SYS.WORK // 02', shortLabel: 'Work', icon: Briefcase, cursor: 'SYS.WORK' },
  { path: '/projects', label: 'SYS.PROJECTS // 03', shortLabel: 'Projects', icon: Cpu, cursor: 'SYS.PROJECTS' },
  { path: '/contact', label: 'SYS.DISPATCH // 04', shortLabel: 'Contact', icon: MessageSquare, cursor: 'SYS.DISPATCH' },
]

export default function Nav() {
  return (
    <>
      {/* Desktop Vertical Left Rail */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-16 lg:w-20 flex-col items-center justify-between py-6 border-r border-hairline bg-base/90 backdrop-blur-md z-40">
        {/* Top Logo */}
        <div className="flex flex-col items-center gap-1">
          <NavLink
            to="/"
            data-cursor="CORE ROOT"
            className="w-10 h-10 rounded-sm border border-hairline bg-panel flex items-center justify-center font-mono text-xs font-bold text-white hover:border-signal hover:text-signal transition-colors shadow-sm"
            title="Dwij Prajapati Portfolio OS"
          >
            DP
          </NavLink>
          <span className="font-mono text-[8px] text-faint tracking-wider">SYS.OS</span>
        </div>

        {/* Center Route Links */}
        <ul className="flex flex-col gap-3 my-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  aria-label={item.label}
                  data-cursor={item.cursor}
                  className={({ isActive }) =>
                    `group relative flex items-center justify-center w-10 h-10 rounded-sm border transition-all ${
                      isActive
                        ? 'border-signal bg-signal/15 text-signal shadow-[0_0_12px_rgba(255,138,61,0.3)] ring-2 ring-signal/30'
                        : 'border-hairline bg-panel text-muted hover:text-white hover:border-signal/50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-signal' : 'text-muted group-hover:text-white'}`} />
                      {/* Active Laser Line indicator */}
                      {isActive && (
                        <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-signal rounded-r shadow-[0_0_8px_rgba(255,138,61,0.9)]" />
                      )}
                      {/* Tooltip */}
                      <span className="pointer-events-none absolute left-14 whitespace-nowrap font-mono text-xs text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-200 bg-panel border border-signal/50 px-3 py-1 rounded-sm shadow-2xl z-50">
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
            data-cursor="RESUME PDF"
            title="Download Resume PDF"
            className="w-9 h-9 flex items-center justify-center rounded-sm border border-hairline bg-panel text-white hover:text-signal hover:border-signal/50 transition-colors shadow-sm"
          >
            <FileText className="w-4 h-4" />
          </a>

          <ThemeToggle />

          {/* Status Indicator with telemetry ping */}
          <div
            className="group relative flex items-center justify-center w-9 h-9"
            title="Status: Available for AI/Backend roles"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-signal status-dot" />
            <span className="pointer-events-none absolute left-14 whitespace-nowrap font-mono text-[10px] text-data font-bold opacity-0 group-hover:opacity-100 transition-all duration-200 bg-panel border border-hairline px-2.5 py-1 rounded-sm shadow-xl z-50">
              ● ONLINE // PING 18ms
            </span>
          </div>
        </div>
      </aside>

      {/* Mobile Top Navigation Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-base/95 backdrop-blur-md border-b border-hairline px-4 py-3 flex items-center justify-between gap-2 shadow-md">
        <NavLink to="/" className="font-mono text-xs font-bold text-white flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-signal" />
          <span>DP // SYS</span>
        </NavLink>

        <nav className="flex overflow-x-auto gap-2 font-mono text-xs py-0.5 no-scrollbar mx-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `shrink-0 px-3 py-1 rounded-sm border font-bold transition-all ${
                  isActive
                    ? 'bg-signal text-base border-signal shadow-md'
                    : 'border-hairline bg-panel text-white hover:text-signal'
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
            className="p-1.5 border border-hairline bg-panel text-white hover:text-signal rounded-sm"
            aria-label="Download Resume"
          >
            <FileText className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>
    </>
  )
}
