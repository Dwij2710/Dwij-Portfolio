import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cpu, Server, Code, Layers, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { skillGroups } from '../lib/data'

const domainMeta = [
  { title: 'AI / Machine Learning', icon: Cpu, color: '#8B5CF6' },
  { title: 'Backend & System Design', icon: Server, color: '#6366F1' },
  { title: 'Programming Languages', icon: Code, color: '#06B6D4' },
  { title: 'Databases & State', icon: Layers, color: '#EF4444' },
  { title: 'Cloud, DevOps & Tools', icon: Cloud, color: '#3B82F6' },
]

export default function SkillsPage() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-12">
      <PageHeader
        tag="04 // TECHNICAL ECOSYSTEM"
        title="DWIJ'S PRODUCTION"
        highlight="ENGINEERING STACK."
        description="A structured overview of the Generative AI orchestration tools, high-concurrency backend frameworks, distributed databases, and cloud infrastructure I operate in production."
      />

      {/* Grid of Domain Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => {
          const meta = domainMeta.find((d) => d.title === group.title) || domainMeta[0]
          const Icon = meta.icon
          const isHovered = activeGroup === group.title

          return (
            <div
              key={group.title}
              onMouseEnter={() => setActiveGroup(group.title)}
              onMouseLeave={() => setActiveGroup(null)}
              className={`glass-panel p-8 rounded-3xl space-y-6 flex flex-col justify-between transition-all duration-300 ${
                isHovered ? 'border-violet-glow/50 shadow-[0_0_30px_rgba(139,92,246,0.2)]' : 'hover:border-white/20'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: `${meta.color}20`, color: meta.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border"
                    style={{
                      backgroundColor: `${meta.color}15`,
                      borderColor: `${meta.color}35`,
                      color: meta.color,
                    }}
                  >
                    {group.items.length} TECHNOLOGIES
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2 pt-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs font-medium text-white px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-violet-500/50 hover:bg-violet-600/10 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 font-mono text-xs text-muted flex items-center justify-between">
                <span>● Production Verified</span>
                <span className="font-semibold text-white">Active Stack</span>
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
          className="font-mono text-xs font-bold text-cyan-light hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>View Verified Resume</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
