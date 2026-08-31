import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (saved) {
      setTheme(saved)
      if (saved === 'light') {
        document.documentElement.classList.add('light')
      } else {
        document.documentElement.classList.remove('light')
      }
    } else {
      // Default is dark telemetry mode
      document.documentElement.classList.remove('light')
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    if (next === 'light') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`p-2 rounded-sm border border-hairline bg-panel text-muted hover:text-ink hover:border-faint transition-all flex items-center justify-center ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-3.5 h-3.5 text-signal transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-signal transition-transform hover:-rotate-12" />
      )}
    </button>
  )
}
