import { motion } from 'framer-motion'
import { Sparkles, Cpu, Server, Radio, Layers, ShieldCheck, Database, ArrowUpRight } from 'lucide-react'
import { profile } from '../lib/data'

const focusAreas = [
  {
    icon: Cpu,
    title: 'AI SYSTEMS & LLM SCALING',
    description: 'Multi-turn voice AI agents, LiveKit SFU WebRTC pipelines, and LLM-as-a-Judge deterministic validity gates.',
    tag: 'GENAI AGENTS',
  },
  {
    icon: Server,
    title: 'BACKEND INFRASTRUCTURE',
    description: 'High-concurrency asynchronous Python backends with FastAPI, Django, Asyncio, and Pydantic data validation.',
    tag: 'LOW-LATENCY APIs',
  },
  {
    icon: Database,
    title: 'DISTRIBUTED STATE & DATA',
    description: 'Redis in-memory session checkpointing for zero-data-loss recovery, PostgreSQL, MySQL, and vector search indices.',
    tag: 'FAULT TOLERANT',
  },
  {
    icon: Radio,
    title: 'REAL-TIME & DEVOPS',
    description: 'Sub-second audio streaming, WebSockets, event-driven webhooks, AWS EC2 Docker stacks, and Caddy reverse proxy TLS.',
    tag: 'CLOUD CI/CD',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-violet -top-20 right-0 opacity-40" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-violet-glow" />
          <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
            01 // PHILOSOPHY & CAPABILITY
          </span>
        </div>

        {/* Giant Editorial Headline */}
        <div className="max-w-4xl space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            ENGINEERING SYSTEMS THAT <br />
            <span className="text-gradient-violet-cyan">THINK, SCALE & RESPOND.</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary leading-relaxed font-normal pt-2">
            Most modern AI problems are not model problems—they are systems problems. I specialize in bridging the gap between raw machine intelligence and the high-throughput, low-latency infrastructure required to run it reliably in production.
          </p>
        </div>

        {/* Asymmetric 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Detailed Narrative */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl space-y-6">
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-glow" />
              <span>Full-Lifecycle Technical Profile</span>
            </h3>
            <p className="text-base sm:text-lg text-secondary leading-relaxed font-normal">
              {profile.summary}
            </p>
            <div className="pt-6 border-t border-white/10 grid sm:grid-cols-2 gap-4 font-mono text-xs text-secondary">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-muted block text-[10px] uppercase font-bold">CORE LOCATION</span>
                <span className="text-white font-semibold mt-0.5 block">{profile.location}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-muted block text-[10px] uppercase font-bold">CURRENT FOCUS</span>
                <span className="text-cyan-light font-semibold mt-0.5 block">InterviewGod.ai Engine</span>
              </div>
            </div>
          </div>

          {/* Right: 4 Focus Pillars Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {focusAreas.map((area) => {
              const Icon = area.icon
              return (
                <div
                  key={area.title}
                  data-cursor="INSPECT"
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-violet-glow/40 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-glow">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[9px] font-bold text-violet-light bg-violet-600/15 px-2 py-0.5 rounded-full border border-violet-500/30">
                        {area.tag}
                      </span>
                    </div>
                    <h4 className="font-mono text-xs font-bold text-white tracking-wider leading-snug">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed font-normal">
                    {area.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
