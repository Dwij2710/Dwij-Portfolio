import { useState } from 'react'
import { ExternalLink, Cpu, ArrowUpRight } from 'lucide-react'
import { projects, ProjectData } from '../lib/data'
import { GithubIcon } from './Icons'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null)

  return (
    <section id="projects" className="py-20 border-t border-hairline">
      <div className="max-w-content">
        <div className="flex items-center justify-between mb-8">
          <p className="font-mono text-xs text-faint">// featured projects</p>
          <span className="font-mono text-[11px] text-muted">click for architecture breakdown</span>
        </div>

        <div className="space-y-16">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group border border-hairline bg-panel/40 p-6 sm:p-8 rounded-sm hover:border-faint/60 transition-all shadow-sm"
            >
              {/* Header with Title & Tagline */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-hairline pb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl text-ink font-medium tracking-tight">
                    {p.name}
                  </h3>
                  <button
                    onClick={() => setActiveProject(p)}
                    className="hidden sm:inline-flex items-center gap-1 font-mono text-xs text-signal hover:underline"
                  >
                    <span>deep dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="font-mono text-[12px] text-data">{p.tagline}</p>
              </div>

              {/* Problem vs Approach Grid */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-mono text-[11px] text-faint mb-1.5">// the problem</p>
                  <p className="text-muted text-sm leading-relaxed">{p.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] text-faint mb-1.5">// the approach</p>
                  <p className="text-muted text-sm leading-relaxed">{p.approach}</p>
                </div>
              </div>

              {/* Quantified Results */}
              <div className="mt-6">
                <p className="font-mono text-[11px] text-faint mb-2.5">// benchmark results</p>
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
                  className="px-3.5 py-1.5 bg-panel border border-hairline text-ink text-xs font-mono rounded-sm hover:border-signal hover:text-signal transition-colors flex items-center gap-1.5"
                >
                  <Cpu className="w-3.5 h-3.5 text-signal" />
                  <span>Architecture & Deep Dive</span>
                </button>

                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 border border-hairline text-muted hover:text-ink text-xs font-mono rounded-sm hover:border-faint transition-colors flex items-center gap-1.5"
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
                    className="px-3.5 py-1.5 border border-hairline text-muted hover:text-data text-xs font-mono rounded-sm hover:border-data/60 transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live / Case Study</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
