import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6 pt-24">
      <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
        ERROR // 404
      </span>
      <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight">
        PAGE NOT <span className="text-gradient-violet-cyan">FOUND.</span>
      </h1>
      <p className="text-secondary text-base max-w-md">
        The requested routing node does not exist or has been relocated within the architecture.
      </p>
      <Link
        to="/"
        className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all shadow-lg"
      >
        <Home className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  )
}
