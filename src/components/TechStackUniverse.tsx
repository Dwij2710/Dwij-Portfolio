import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Server, Radio, Cloud, Code, Sparkles, Layers, ShieldCheck } from 'lucide-react'
import { skillGroups } from '../lib/data'

export default function TechStackUniverse() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const domainIcons = [
    { title: 'AI / Machine Learning', icon: Cpu, color: '#8B5CF6' },
    { title: 'Backend & System Design', icon: Server, color: '#6366F1' },
    { title: 'Programming Languages', icon: Code, color: '#06B6D4' },
    { title: 'Databases & State', icon: Layers, color: '#EF4444' },
    { title: 'Cloud, DevOps & Tools', icon: Cloud, color: '#3B82F6' },
  ]

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-t border-white/[0.06] overflow-hidden">
      {/* Background Lighting */}
      <div className="ambient-glow-cyan top-1/2 -right-40 opacity-25" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-glow" />
          <span className="font-mono text-xs font-bold text-cyan-light tracking-[0.25em] uppercase">
            06 // TECH STACK UNIVERSE
          </span>
        </div>

        <div className="max-w-3xl space-y-4 mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            ENGINEERING STACK <br />
            <span className="text-gradient-violet-cyan">& ORBITING DOMAINS.</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed font-normal">
            A comprehensive overview of the modern AI, backend systems, database topologies, and cloud DevOps tooling I deploy to production.
          </p>
        </div>

        {/* Interactive Domain Universe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const iconObj = domainIcons.find((d) => d.title === group.title) || domainIcons[0]
            const Icon = iconObj.icon
            const isHovered = activeCategory === group.title

            return (
              <motion.div
                key={group.title}
                onMouseEnter={() => setActiveCategory(group.title)}
                onMouseLeave={() => setActiveCategory(null)}
                data-cursor="INSPECT"
                className={`glass-panel p-7 sm:p-8 rounded-3xl space-y-6 transition-all duration-300 flex flex-col justify-between ${
                  isHovered ? 'border-violet-glow/60 shadow-[0_0_30px_rgba(139,92,246,0.2)]' : 'hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: `${iconObj.color}20`, color: iconObj.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: `${iconObj.color}15`,
                        borderColor: `${iconObj.color}35`,
                        color: iconObj.color,
                      }}
                    >
                      {group.items.length} TECHNOLOGIES
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {group.title}
                  </h3>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs font-medium text-white px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-violet-500/50 hover:bg-violet-600/15 hover:text-cyan-light transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-muted flex items-center justify-between">
                  <span>● Production Tested</span>
                  <span style={{ color: iconObj.color }}>{iconObj.color}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
