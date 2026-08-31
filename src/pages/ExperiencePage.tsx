import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, ChevronUp, Cpu, Server, Activity, ShieldCheck, Database, Cloud } from 'lucide-react'
import { experience, metrics } from '../lib/data'

export default function ExperiencePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const job = experience[0]

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-content">
        {/* Header */}
        <div className="mb-10">
          <p className="font-mono text-xs text-faint mb-2">// 02. production experience</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
            Systems & Infrastructure
          </h1>
          <p className="font-mono text-sm text-data mt-2">
            Real-time Voice AI Agents & Multimodal Evaluation Pipelines
          </p>
        </div>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {metrics.map((m) => (
            <div key={m.label} className="p-4 bg-panel border border-hairline rounded-sm">
              <p className="font-mono text-[10px] text-faint uppercase">{m.label}</p>
              <p className="mt-1 text-2xl font-medium font-mono text-ink">{m.value}</p>
              <p className="font-mono text-[11px] text-data mt-0.5">{m.unit}</p>
            </div>
          ))}
        </div>

        {/* Main Experience Log */}
        <div className="border-l border-hairline relative ml-2 sm:ml-4 space-y-10">
          <div className="pl-6 sm:pl-8 relative">
            {/* Status node */}
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-signal ring-4 ring-base" />

            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-faint">
              <span className="text-data font-semibold">{job.date}</span>
              <span>•</span>
              <span className="text-muted">Full-Stack AI Role</span>
            </div>

            <h2 className="text-2xl sm:text-3xl text-ink font-medium mt-1.5">
              {job.role}
            </h2>
            <p className="font-mono text-base text-signal mt-0.5 font-medium">
              {job.org}
            </p>

            {job.projectsSubtitle && (
              <div className="mt-3 p-3 bg-panel2 border border-hairline rounded-sm">
                <p className="font-mono text-xs text-muted leading-relaxed">
                  <span className="text-signal font-semibold">Focus: </span>
                  {job.projectsSubtitle}
                </p>
              </div>
            )}

            <p className="text-muted mt-4 max-w-[64ch] leading-relaxed text-base">
              {job.summary}
            </p>

            {/* Detailed 7 Deliverables */}
            <div className="mt-8">
              <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
                <h3 className="font-mono text-xs text-muted uppercase tracking-wider">
                  Engineering Deliverables ({job.details.length} Architectural Milestones)
                </h3>
              </div>

              <ul className="space-y-4 max-w-[64ch]">
                {job.details.map((d, idx) => (
                  <li
                    key={idx}
                    className="p-4 bg-panel border border-hairline rounded-sm hover:border-faint/60 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs text-signal font-bold shrink-0 mt-0.5">
                        [{String(idx + 1).padStart(2, '0')}]
                      </span>
                      <p className="text-sm text-ink leading-relaxed font-sans">
                        {d}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Next Route Navigation */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <Link
            to="/about"
            className="px-5 py-2.5 border border-hairline text-muted hover:text-ink font-mono text-xs rounded-sm hover:border-faint transition-colors"
          >
            <span>← About & Stack</span>
          </Link>
          <Link
            to="/projects"
            className="px-5 py-2.5 bg-signal text-base font-mono text-xs font-semibold rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2"
          >
            <span>Next: Engineering Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
