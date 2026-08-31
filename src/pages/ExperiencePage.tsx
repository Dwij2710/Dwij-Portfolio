import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Server, Activity, ShieldCheck, Database, Cloud, Zap, CheckCircle2 } from 'lucide-react'
import { experience, metrics } from '../lib/data'

export default function ExperiencePage() {
  const job = experience[0]

  return (
    <div className="py-8 md:py-12 max-w-container mx-auto">
      {/* Header */}
      <div className="mb-10 border-b border-hairline pb-6">
        <p className="font-mono text-xs text-faint mb-2">// 02. production experience & telemetry</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
          Systems & Voice AI Infrastructure
        </h1>
        <p className="font-mono text-sm text-data mt-2">
          Production Architecture behind InterviewGod.ai • Real-time Multimodal Evaluation
        </p>
      </div>

      {/* Highlight Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {metrics.map((m) => (
          <div key={m.label} className="p-4 bg-panel border border-hairline rounded-sm shadow-sm">
            <p className="font-mono text-[10px] text-faint uppercase">{m.label}</p>
            <p className="mt-1 text-2xl font-medium font-mono text-ink">{m.value}</p>
            <p className="font-mono text-[11px] text-data mt-0.5">{m.unit}</p>
          </div>
        ))}
      </div>

      {/* Main Role Header Card */}
      <section className="bg-panel border border-hairline p-6 sm:p-8 rounded-sm shadow-sm mb-10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-signal status-dot" />
              <span className="font-mono text-xs text-data font-semibold">{job.date}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl text-ink font-medium mt-1">
              {job.role}
            </h2>
            <p className="font-mono text-base text-signal font-medium">
              {job.org}
            </p>
          </div>

          <div className="bg-panel2 border border-hairline px-3.5 py-2 rounded-sm font-mono text-xs text-muted">
            AWS EC2 • LiveKit SFU • Docker Compose • Caddy TLS
          </div>
        </div>

        {job.projectsSubtitle && (
          <div className="p-3.5 bg-panel2 border border-hairline rounded-sm">
            <p className="font-mono text-xs text-muted leading-relaxed">
              <span className="text-signal font-semibold">Core Scope: </span>
              {job.projectsSubtitle}
            </p>
          </div>
        )}

        <p className="text-muted text-base leading-relaxed max-w-3xl">
          {job.summary}
        </p>
      </section>

      {/* 7 Engineering Deliverables Cards */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-mono text-xs text-faint mb-1">// engineering deliverables</p>
            <h3 className="text-2xl font-medium text-ink">
              Architectural Breakdown & Execution Logs
            </h3>
          </div>
          <span className="font-mono text-xs text-muted">7 production milestones</span>
        </div>

        <div className="space-y-4">
          {job.details.map((deliverable, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-panel border border-hairline rounded-sm hover:border-signal/50 transition-all shadow-sm flex items-start gap-4"
            >
              <div className="p-2 bg-panel2 border border-hairline rounded font-mono text-xs font-bold text-signal shrink-0 mt-0.5">
                #{String(idx + 1).padStart(2, '0')}
              </div>
              <div className="space-y-1">
                <p className="text-sm sm:text-base text-ink leading-relaxed font-sans">
                  {deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer CTAs */}
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
  )
}
