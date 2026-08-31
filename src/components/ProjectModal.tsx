import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Cpu, Layers, CheckCircle2, ArrowRight } from 'lucide-react'
import { ProjectData } from '../lib/data'
import { GithubIcon } from './Icons'

interface ProjectModalProps {
  project: ProjectData | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-base/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-panel border border-hairline p-6 sm:p-8 rounded-sm shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-hairline pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal" />
                <span className="font-mono text-xs text-faint">system case study</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium text-ink mt-1">
                {project.name}
              </h2>
              <p className="font-mono text-xs sm:text-sm text-data mt-1">
                {project.tagline}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-muted hover:text-ink border border-hairline hover:border-faint rounded-sm transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Architecture Overview */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-signal" />
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider">
                Architecture & Data Flow
              </h3>
            </div>
            <div className="p-4 bg-panel2 border border-hairline rounded-sm text-sm text-muted leading-relaxed font-mono">
              <span className="text-signal">$ </span>
              {project.architectureOverview}
            </div>
          </div>

          {/* Core Problem & Approach */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="border border-hairline p-4 rounded-sm">
              <p className="font-mono text-xs text-faint mb-1.5">// the problem</p>
              <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
            </div>
            <div className="border border-hairline p-4 rounded-sm">
              <p className="font-mono text-xs text-faint mb-1.5">// the approach</p>
              <p className="text-sm text-muted leading-relaxed">{project.approach}</p>
            </div>
          </div>

          {/* Key Milestones & Engineering Details */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-data" />
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider">
                Key Engineering Highlights
              </h3>
            </div>
            <ul className="space-y-2">
              {project.keyMilestones.map((milestone, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-ink leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-data shrink-0 mt-0.5" />
                  <span>{milestone}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantified Results */}
          <div className="mt-6 border-t border-hairline pt-4">
            <p className="font-mono text-xs text-faint mb-2.5">// quantified results</p>
            <ul className="space-y-1.5">
              {project.results.map((r, i) => (
                <li key={i} className="text-sm text-ink leading-relaxed flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mt-6 border-t border-hairline pt-4">
            <p className="font-mono text-xs text-faint mb-2">// full stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] text-muted border border-hairline rounded-sm px-2.5 py-1 bg-panel2"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-hairline pt-5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-ink text-base text-xs font-mono font-medium rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>source repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-signal text-signal text-xs font-mono font-medium rounded-sm hover:bg-signal/10 transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>view demo / docs</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto px-4 py-2 border border-hairline text-muted text-xs font-mono hover:text-ink hover:border-faint transition-colors rounded-sm"
            >
              close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
