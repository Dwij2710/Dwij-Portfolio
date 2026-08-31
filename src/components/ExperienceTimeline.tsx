import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, Waves, ShieldCheck, Database, Cloud, Terminal, Layers } from 'lucide-react'
import { experience } from '../lib/data'

export default function ExperienceTimeline() {
  const job = experience[0]

  const milestones = [
    {
      num: '01',
      icon: Waves,
      color: '#06B6D4',
      title: 'Real-Time Voice AI Pipeline & Semantic Turn-Taking',
      tag: '<1s CONVERSATIONAL LATENCY',
      desc: 'Architected an asynchronous event-driven real-time voice AI pipeline leveraging LiveKit SFU (WebRTC), OpenAI GPT-4o, ElevenLabs, and Sarvam AI, implementing semantic turn-taking, acoustic VAD filtering, and pre-generated audio warmup gates to achieve sub-second conversational latency.',
      stack: ['LiveKit SFU', 'WebRTC', 'OpenAI GPT-4o', 'ElevenLabs', 'Sarvam AI', 'Acoustic VAD'],
    },
    {
      num: '02',
      icon: Terminal,
      color: '#8B5CF6',
      title: 'Adaptive Multi-Turn Dialog State Machine',
      tag: 'CONTEXTUAL SCAFFOLD',
      desc: 'Engineered an adaptive multi-turn dialog state machine with heuristic repeat-request and filler-word interceptors, enforcing bounded per-topic counter-probing and contextual conversational scaffolding to eliminate topic drift and prevent task stalls.',
      stack: ['State Machines', 'Context Scaffolding', 'Drift Prevention', 'Turn Arbitration'],
    },
    {
      num: '03',
      icon: ShieldCheck,
      color: '#10B981',
      title: 'LLM-as-a-Judge Validity Gate & Denominator Sanitization',
      tag: '99.8% FAIL-OPEN PASS RATE',
      desc: 'Developed an LLM-as-a-Judge answer-validity gate (gpt-4o-mini) with fail-open resiliency to intercept STT hallucinations and non-answers, resolving mathematical denominator inflation bugs in weighted skill aggregation algorithms by penalizing invalid responses and normalizing zero-score distributions.',
      stack: ['gpt-4o-mini', 'LLM-as-a-Judge', 'Evaluation Gates', 'Resiliency Patterns'],
    },
    {
      num: '04',
      icon: Database,
      color: '#EF4444',
      title: 'Distributed Session Checkpointing & Reconnect Recovery',
      tag: '24-HOUR HANDOFF BUFFER',
      desc: 'Engineered a distributed session state and checkpointing architecture using Redis with 24-hour handoff buffers, enabling zero-data-loss disconnect/reconnect recovery for active sessions alongside bidirectional webhook synchronization to core microservices.',
      stack: ['Redis Checkpointing', '24h State Buffer', 'Bidirectional Webhooks', 'Distributed State'],
    },
    {
      num: '05',
      icon: ShieldCheck,
      color: '#F59E0B',
      title: 'Four-Layer Candidate Evaluation & Call Screening Audit',
      tag: '20+ MULTILINGUAL EDGE CASES',
      desc: 'Audited a four-layer deterministic candidate evaluation and call-screening pipeline (Scenario Detection, Telemetry, Semantic Intelligence, Policy Engine, Governance), resolving 20+ edge cases across multilingual (Hindi/English) speech pipelines, brittle speaker-attribution logic, telemetry constant drifts, and silent fallbacks.',
      stack: ['Bilingual Hindi/English', 'Deterministic Scoring', 'Policy Governance', 'Drift Calibration'],
    },
    {
      num: '06',
      icon: Layers,
      color: '#6366F1',
      title: 'Multi-Modal Weighted Hiring Decision Engine',
      tag: 'PROCEED / HOLD / REJECT',
      desc: 'Constructed a multi-modal weighted aggregation engine consolidating Resume, Screening Call, Assessment, Technical Interview, and Integrity signals into automated PROCEED / HOLD / REJECT hiring recommendations with calibrated confidence scoring.',
      stack: ['Multi-Modal Aggregation', 'Confidence Calibration', 'Weighted Ranking', 'Decision Governance'],
    },
    {
      num: '07',
      icon: Cloud,
      color: '#3B82F6',
      title: 'AWS EC2 Production Stacks, Caddy TLS & CI/CD Pipelines',
      tag: 'AUTOMATED INFRASTRUCTURE',
      desc: 'Containerized and deployed multi-service production stacks across AWS EC2 utilizing Docker Compose and Caddy reverse proxies with automated SSL/TLS termination, supporting multi-stage Serverless framework migrations across AWS accounts with IAM OIDC role delegations and CodeBuild CI/CD pipelines.',
      stack: ['AWS EC2', 'Docker Compose', 'Caddy Reverse Proxy', 'TLS/SSL', 'IAM OIDC', 'AWS CodeBuild'],
    },
  ]

  return (
    <section id="experience" className="py-24 sm:py-32 relative border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-violet -top-20 -left-20 opacity-30" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-violet-glow" />
          <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
            05 // PRODUCTION TIMELINE & DELIVERABLES
          </span>
        </div>

        <div className="max-w-3xl space-y-4 mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            PRODUCTION SYSTEMS <br />
            <span className="text-gradient-violet-cyan">& ARCHITECTURE LOGS.</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed font-normal">
            Real-world engineering impact at Banao Technologies (InterviewGod.ai) designing scalable Generative AI pipelines and fault-tolerant backends.
          </p>
        </div>

        {/* Executive Role Header Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl mb-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-cyan-glow font-bold tracking-wider uppercase">
                {job.date} • FULL-STACK AI ROLE
              </span>
              <h3 className="text-3xl font-extrabold text-white">
                {job.role}
              </h3>
              <p className="font-mono text-base text-violet-light font-bold">
                {job.org}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white font-semibold">
                LiveKit WebRTC
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white font-semibold">
                FastAPI Async
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white font-semibold">
                Redis 24h Buffer
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white font-semibold">
                AWS EC2 / Caddy
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
            <Terminal className="w-5 h-5 text-cyan-glow shrink-0 mt-0.5" />
            <p className="font-mono text-xs sm:text-sm text-white leading-relaxed font-medium">
              <span className="text-cyan-glow font-bold">Projects Scope: </span>
              {job.projectsSubtitle}
            </p>
          </div>

          <p className="text-base sm:text-lg text-secondary leading-relaxed font-normal">
            {job.summary}
          </p>
        </div>

        {/* Luminous Vertical Timeline Stream */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
          {milestones.map((m, idx) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                data-cursor="DELIVERABLE"
                className="relative group"
              >
                {/* Luminous Node on Vertical Stream Line */}
                <div
                  className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full border-2 border-[#04060A]"
                  style={{ backgroundColor: m.color, boxShadow: `0 0 12px ${m.color}` }}
                />

                <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 hover:border-violet-glow/40 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: `${m.color}20`, color: m.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-muted font-bold tracking-widest">
                          DELIVERABLE // {m.num}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                          {m.title}
                        </h4>
                      </div>
                    </div>

                    <span
                      className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border self-start sm:self-auto"
                      style={{
                        backgroundColor: `${m.color}15`,
                        borderColor: `${m.color}35`,
                        color: m.color,
                      }}
                    >
                      {m.tag}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal">
                    {m.desc}
                  </p>

                  <div className="pt-3 flex flex-wrap gap-2">
                    {m.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs font-medium text-white px-3 py-1 rounded-full bg-white/[0.04] border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
