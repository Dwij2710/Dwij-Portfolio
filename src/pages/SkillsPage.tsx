import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cpu, Server, Code, Layers, Cloud, ArrowRight, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { skillGroups } from '../lib/data'

const domainIcons: Record<string, typeof Cpu> = {
  'AI / Machine Learning': Cpu,
  'Backend & System Design': Server,
  'Programming Languages': Code,
  'Databases & State': Layers,
  'Cloud, DevOps & Tools': Cloud,
}

export default function SkillsPage() {
  const [selectedTier, setSelectedTier] = useState<'ALL' | 'Core' | 'Advanced'>('ALL')

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-16 pt-6">
      <PageHeader
        tag="04 // TECHNICAL ECOSYSTEM"
        title="DWIJ'S PRODUCTION"
        highlight="ENGINEERING STACK."
        description="A structured overview of Generative AI orchestration tools, high-concurrency backend frameworks, distributed state managers, and cloud infrastructure I operate in production."
      />

      {/* Filter and Legend Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-muted">PROFICIENCY FILTER:</span>
          {(['ALL', 'Core', 'Advanced'] as const).map((tier) => (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                selectedTier === tier
                  ? 'bg-accent text-slate-950 shadow-sm'
                  : 'bg-white/[0.04] text-secondary hover:text-white border border-white/10'
              }`}
            >
              {tier === 'ALL' ? 'All Skills' : `${tier} Technologies`}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 font-mono text-[11px] text-secondary">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-white">Core (Daily Production)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            <span>Advanced / Supporting</span>
          </span>
        </div>
      </div>

      {/* Grid of Domain Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => {
          const Icon = domainIcons[group.title] || Code
          const filteredItems =
            selectedTier === 'ALL'
              ? group.items
              : group.items.filter((item) => item.tier === selectedTier)

          return (
            <div
              key={group.title}
              className="glass-panel p-7 rounded-3xl space-y-5 border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent/15 text-accent shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-muted">
                    {group.items.length} TECHNOLOGIES
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                  {group.title}
                </h3>

                {/* Badges in JetBrains Mono with Subtle Proficiency Indicators */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  {filteredItems.map((item) => {
                    const isCore = item.tier === 'Core'
                    return (
                      <span
                        key={item.name}
                        className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${
                          isCore
                            ? 'bg-accent/10 border-accent/40 text-white font-medium shadow-sm hover:border-accent'
                            : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {isCore && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                        <span>{item.name}</span>
                      </span>
                    )
                  })}
                </div>
              </div>

              {/* Clean category count note - removed repetitive footer text */}
              <div className="pt-3 border-t border-white/5 font-mono text-[10px] text-muted flex items-center justify-between">
                <span>Domain Focus</span>
                <span className="text-slate-400 font-semibold">{group.items.filter(i => i.tier === 'Core').length} Core Services</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Next CTA */}
      <div className="pt-8 flex items-center justify-between border-t border-white/10">
        <Link to="/experience" className="font-mono text-xs text-secondary hover:text-white transition-colors">
          ← Experience Timeline
        </Link>
        <Link
          to="/resume"
          className="font-mono text-xs font-bold text-accent hover:underline transition-colors flex items-center gap-1.5"
        >
          <span>View Verified Resume</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
