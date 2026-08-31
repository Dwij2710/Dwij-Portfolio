import { Link } from 'react-router-dom'
import { Briefcase, Calendar, MapPin, CheckCircle2, Waves, ShieldCheck, Database, Cloud, Terminal, ArrowRight } from 'lucide-react'
import { experience } from '../lib/data'
import PageHeader from '../components/PageHeader'

export default function ExperiencePage() {
  const job = experience[0]

  const deliverables = [
    {
      num: '01',
      title: 'Real-Time Voice AI Pipeline & Semantic Turn-Taking',
      tag: '<1s LATENCY',
      desc: 'Architected an asynchronous event-driven real-time voice AI pipeline leveraging LiveKit SFU (WebRTC), OpenAI GPT-4o, ElevenLabs, and Sarvam AI, implementing semantic turn-taking, acoustic VAD filtering, and pre-generated audio warmup gates to achieve sub-second conversational latency.',
      stack: ['LiveKit SFU', 'WebRTC', 'OpenAI GPT-4o', 'ElevenLabs', 'Sarvam AI', 'Acoustic VAD'],
    },
    {
      num: '02',
      title: 'Adaptive Multi-Turn Dialog State Machine',
      tag: 'CONTEXT SCAFFOLD',
      desc: 'Engineered an adaptive multi-turn dialog state machine with heuristic repeat-request and filler-word interceptors, enforcing bounded per-topic counter-probing and contextual conversational scaffolding to eliminate topic drift and prevent task stalls.',
      stack: ['State Machines', 'Context Scaffolding', 'Drift Prevention', 'Turn Arbitration'],
    },
    {
      num: '03',
      title: 'LLM-as-a-Judge Answer-Validity Gate',
      tag: '99.8% PASS RATE',
      desc: 'Developed an LLM-as-a-Judge answer-validity gate (gpt-4o-mini) with fail-open resiliency to intercept STT hallucinations and non-answers, resolving mathematical denominator inflation bugs in weighted skill aggregation algorithms by penalizing invalid responses and normalizing zero-score distributions.',
      stack: ['gpt-4o-mini', 'LLM-as-a-Judge', 'Evaluation Gates', 'Resiliency Patterns'],
    },
    {
      num: '04',
      title: 'Distributed Session Checkpointing & Recovery',
      tag: '24-HOUR BUFFER',
      desc: 'Engineered a distributed session state and checkpointing architecture using Redis with 24-hour handoff buffers, enabling zero-data-loss disconnect/reconnect recovery for active sessions alongside bidirectional webhook synchronization to core microservices.',
      stack: ['Redis Checkpointing', '24h State Buffer', 'Bidirectional Webhooks', 'Distributed State'],
    },
    {
      num: '05',
      title: 'Four-Layer Candidate Evaluation & Call Screening Audit',
      tag: '20+ EDGE CASES',
      desc: 'Audited a four-layer deterministic candidate evaluation and call-screening pipeline (Scenario Detection, Telemetry, Semantic Intelligence, Policy Engine, Governance), resolving 20+ edge cases across multilingual (Hindi/English) speech pipelines, brittle speaker-attribution logic, telemetry constant drifts, and silent fallbacks.',
      stack: ['Bilingual Hindi/English', 'Deterministic Scoring', 'Policy Governance', 'Drift Calibration'],
    },
    {
      num: '06',
      title: 'Multi-Modal Weighted Hiring Decision Engine',
      tag: 'PROCEED / HOLD / REJECT',
      desc: 'Constructed a multi-modal weighted aggregation engine consolidating Resume, Screening Call, Assessment, Technical Interview, and Integrity signals into automated PROCEED / HOLD / REJECT hiring recommendations with calibrated confidence scoring.',
      stack: ['Multi-Modal Aggregation', 'Confidence Calibration', 'Weighted Ranking', 'Decision Governance'],
    },
    {
      num: '07',
      title: 'AWS EC2 Production Stacks & CI/CD Pipelines',
      tag: 'AUTOMATED DEVOPS',
      desc: 'Containerized and deployed multi-service production stacks across AWS EC2 utilizing Docker Compose and Caddy reverse proxies with automated SSL/TLS termination, supporting multi-stage Serverless framework migrations across AWS accounts with IAM OIDC role delegations and CodeBuild CI/CD pipelines.',
      stack: ['AWS EC2', 'Docker Compose', 'Caddy Reverse Proxy', 'TLS/SSL', 'IAM OIDC', 'AWS CodeBuild'],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 space-y-16">
      <PageHeader
        tag="03 // PROFESSIONAL EXPERIENCE"
        title="CAREER TRAJECTORY &"
        highlight="PRODUCTION DELIVERABLES."
        description="A timeline of production engineering roles, low-latency streaming infrastructure, and Generative AI evaluation systems I have built and deployed."
      />

      {/* Role Executive Card */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-cyan-glow font-bold uppercase tracking-wider">
              {job.date} • FULL-STACK AI ROLE
            </span>
            <h2 className="text-3xl font-extrabold text-white">{job.role}</h2>
            <p className="font-mono text-base text-violet-light font-bold">{job.org}</p>
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white font-semibold">
              LiveKit SFU
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white font-semibold">
              FastAPI
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white font-semibold">
              Redis 24h Buffer
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white font-semibold">
              AWS EC2
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
          <Terminal className="w-5 h-5 text-cyan-glow shrink-0 mt-0.5" />
          <p className="font-mono text-xs sm:text-sm text-white leading-relaxed font-medium">
            <span className="text-cyan-glow font-bold">Core Projects Scope: </span>
            {job.projectsSubtitle}
          </p>
        </div>

        <p className="text-base sm:text-lg text-secondary leading-relaxed font-normal">
          {job.summary}
        </p>
      </div>

      {/* 7 Production Deliverables */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
            ARCHITECTURAL DELIVERABLES
          </span>
          <h3 className="text-3xl font-extrabold text-white">7 PRODUCTION DELIVERABLES</h3>
        </div>

        <div className="space-y-6">
          {deliverables.map((d) => (
            <div
              key={d.num}
              className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 hover:border-violet-glow/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center font-mono text-xs font-bold text-violet-light">
                    {d.num}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {d.title}
                  </h4>
                </div>

                <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-light self-start sm:self-auto">
                  {d.tag}
                </span>
              </div>

              <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal">
                {d.desc}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {d.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-medium text-white px-3 py-1 rounded-full bg-white/[0.04] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next CTA */}
      <div className="pt-8 flex items-center justify-between border-t border-white/10">
        <Link to="/projects" className="font-mono text-xs text-secondary hover:text-white transition-colors">
          ← Projects Discovery
        </Link>
        <Link
          to="/skills"
          className="font-mono text-xs font-bold text-cyan-light hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>Explore Skills Ecosystem</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
