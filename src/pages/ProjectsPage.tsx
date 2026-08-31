import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Cpu, ArrowUpRight, ArrowRight, Layers, CheckCircle2 } from 'lucide-react'
import { projects, ProjectData } from '../lib/data'
import { GithubIcon } from '../components/Icons'
import ProjectModal from '../components/ProjectModal'

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null)

  return (
    <div className="py-8 md:py-12 max-w-container mx-auto">
      {/* Header */}
      <div className="mb-10 border-b border-hairline pb-6">
        <p className="font-mono text-xs text-faint mb-2">// 03. engineering case studies</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
          Machine Learning & Systems
        </h1>
        <p className="font-mono text-sm text-data mt-2">
          Autonomous Trading Environments, Reinforcement Learning, and Enterprise Inference Engines
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group border border-hairline bg-panel p-6 sm:p-8 rounded-sm hover:border-faint/70 transition-all shadow-sm"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 border-b border-hairline pb-4">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl sm:text-3xl text-ink font-medium tracking-tight">
                  {p.name}
                </h2>
                <button
                  onClick={() => setActiveProject(p)}
                  className="inline-flex items-center gap-1 font-mono text-xs text-signal hover:underline"
                >
                  <span>architecture breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="font-mono text-xs text-data font-medium">{p.tagline}</p>
            </div>

            {/* Problem vs Approach 2-Column Grid */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-panel2 border border-hairline rounded-sm">
                <p className="font-mono text-[11px] text-faint mb-1.5 uppercase tracking-wider">// the problem & challenge</p>
                <p className="text-muted text-sm leading-relaxed">{p.problem}</p>
              </div>
              <div className="p-4 bg-panel2 border border-hairline rounded-sm">
                <p className="font-mono text-[11px] text-faint mb-1.5 uppercase tracking-wider">// the analytical approach</p>
                <p className="text-muted text-sm leading-relaxed">{p.approach}</p>
              </div>
            </div>

            {/* Quantified Results */}
            <div className="mt-6">
              <p className="font-mono text-[11px] text-faint mb-2.5 uppercase tracking-wider">// benchmark metrics & results</p>
              <ul className="space-y-2">
                {p.results.map((r, i) => (
                  <li key={i} className="text-sm text-ink leading-relaxed pl-5 relative">
                    <span className="absolute left-0 text-signal font-mono">→</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack badges */}
            <div className="mt-6 flex flex-wrap gap-2 border-t border-hairline pt-5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] text-muted border border-hairline bg-panel2 rounded-sm px-2.5 py-1"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-hairline pt-4">
              <button
                onClick={() => setActiveProject(p)}
                className="px-4 py-2 bg-panel2 border border-hairline text-ink text-xs font-mono rounded-sm hover:border-signal hover:text-signal transition-colors flex items-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5 text-signal" />
                <span>Architecture & Deep Dive</span>
              </button>

              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-hairline text-muted hover:text-ink text-xs font-mono rounded-sm hover:border-faint transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}

              {p.demoUrl && (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-hairline text-muted hover:text-data text-xs font-mono rounded-sm hover:border-data/60 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live / Docs</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {/* Next Route Navigation */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
        <Link
          to="/experience"
          className="px-5 py-2.5 border border-hairline text-muted hover:text-ink font-mono text-xs rounded-sm hover:border-faint transition-colors"
        >
          <span>← Experience & Logs</span>
        </Link>
        <Link
          to="/contact"
          className="px-5 py-2.5 bg-signal text-base font-mono text-xs font-semibold rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2"
        >
          <span>Next: Contact & Coordinates</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
