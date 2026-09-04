import { motion } from 'framer-motion'
import {
  Cpu,
  Server,
  Radio,
  Cloud,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Terminal,
  Layers,
  Database,
  Sliders,
  ExternalLink,
} from 'lucide-react'
import { profile, education, achievements } from '../lib/data'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'

const principles = [
  {
    num: '01',
    title: 'Low Latency by Default',
    desc: 'Sub-second real-time streaming is an architectural decision, not a late-stage optimization. It requires asynchronous pipelines, acoustic VAD gating, and minimal overhead across network layers from WebRTC Opus to LLM token streaming.',
    statLabel: 'CONVERSATIONAL RTT',
    statValue: '<1,000ms',
    statSub: 'LiveKit SFU + Async Audio Gates',
    icon: Zap,
  },
  {
    num: '02',
    title: 'Fail-Open Resiliency & Governance',
    desc: 'Production LLMs fail in non-deterministic ways. Systems must incorporate deterministic evaluation gates (like gpt-4o-mini judges) to intercept hallucinations, non-answers, and denominator drift before downstream business logic executes.',
    statLabel: 'JUDGE VALIDITY',
    statValue: '99.8%',
    statSub: 'Deterministic Interception Gate',
    icon: ShieldCheck,
  },
  {
    num: '03',
    title: 'Distributed State Integrity',
    desc: 'Real-time multi-turn voice sessions cannot afford dropped state during network blips. Standardized Redis Session Checkpointing with 24-hour handoff buffers guarantees zero data loss and seamless reconnection across microservices.',
    statLabel: 'SESSION BUFFER',
    statValue: '24 Hours',
    statSub: 'Zero-Data-Loss Redis State',
    icon: Database,
  },
  {
    num: '04',
    title: 'Pragmatic Engineering Over Hype',
    desc: 'Choosing the right tool for the job—whether a lightweight CatBoost regressor with Bayesian optimization (0.93 R²), an event-driven FastAPI microservice, or an agentic LLM orchestration pipeline. Production value always trumps novel complexity.',
    statLabel: 'MODEL ACCURACY',
    statValue: '0.93 R²',
    statSub: '22% RMSE Reduction over Baseline',
    icon: Sliders,
  },
]

const stackLayers = [
  {
    layer: 'LAYER 04 // REASONING & EVALUATION',
    title: 'AI & LLM Orchestration Systems',
    protocols: 'OpenAI GPT-4o • gpt-4o-mini Judge • ElevenLabs • Sarvam AI',
    desc: 'Multi-turn dialog state machines, semantic turn-taking, prompt scaffolding, and LLM-as-a-Judge answer validity gates to prevent conversational stalls.',
    icon: Cpu,
  },
  {
    layer: 'LAYER 03 // APPLICATION RUNTIME',
    title: 'High-Concurrency Backend Systems',
    protocols: 'FastAPI • Asyncio • Pydantic V2 • RESTful APIs • WebSockets',
    desc: 'Asynchronous event loops serving sub-40ms P99 latency endpoints with strict contract validation and bidirectional webhook synchronization.',
    icon: Server,
  },
  {
    layer: 'LAYER 02 // TRANSPORT & STATE',
    title: 'Real-Time Streaming & Checkpointing',
    protocols: 'LiveKit SFU • WebRTC Opus • Redis Session Checkpointing (24h)',
    desc: 'Sub-50ms packet distribution, client acoustic VAD filtering, and distributed Redis session buffers for zero-data-loss reconnect recovery.',
    icon: Radio,
  },
  {
    layer: 'LAYER 01 // FOUNDATION & CLOUD',
    title: 'Cloud Infrastructure & Automated DevOps',
    protocols: 'AWS EC2 • Docker Compose • Caddy Reverse Proxy • CI/CD',
    desc: 'Containerized multi-service production environments with automated SSL/TLS termination, IAM OIDC delegations, and AWS CodeBuild pipelines.',
    icon: Cloud,
  },
]

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-20 pt-6">
      <PageHeader
        tag="01 // ABOUT DWIJ PRAJAPATI"
        title="ENGINEER. BUILDER."
        highlight="PROBLEM SOLVER."
        description="I bridge the gap between cutting-edge Generative AI models and the robust, high-throughput, low-latency infrastructure required to run them reliably in production."
      />

      {/* Philosophy Statement Quote Card */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl space-y-6 border border-white/10 hover:border-accent/30 transition-colors shadow-2xl relative overflow-hidden">
        <div className="ambient-glow-accent -top-20 -left-20 opacity-20 pointer-events-none" />

        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-accent" />
          <span className="font-mono text-xs font-bold text-accent tracking-[0.25em] uppercase">
            ENGINEERING PHILOSOPHY
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
          "I don't just build models. <br />
          <span className="text-accent">I build the systems that make models useful."</span>
        </h2>

        <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-4xl font-normal">
          {profile.summary}
        </p>
      </section>

      {/* The 4-Way Intersection: Replaced 4-box grid with a Vertical System Architecture Stack Graphic */}
      <section id="system-architecture" className="space-y-6 scroll-mt-28">
        <div className="space-y-1.5 border-b border-white/10 pb-4">
          <span className="font-mono text-xs font-bold text-accent tracking-[0.25em] uppercase">
            SYSTEM ARCHITECTURE HIERARCHY
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            THE 4-LAYER PRODUCTION INTERSECTION
          </h2>
          <p className="text-xs sm:text-sm text-secondary">
            How my technical competencies stack together to power production-ready real-time AI platforms.
          </p>
        </div>

        {/* Stack Diagram Graphic */}
        <div className="space-y-3 pt-2">
          {stackLayers.map((layer, idx) => {
            const Icon = layer.icon
            return (
              <div
                key={layer.layer}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-accent/40 transition-all space-y-3 relative group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center font-bold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold text-accent tracking-wider uppercase block">
                        {layer.layer}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {layer.title}
                      </h3>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-slate-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                    {layer.protocols}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-secondary leading-relaxed font-normal">
                  {layer.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* What I Care About: Converted to Alternating Full-Width Split Layout */}
      <section id="principles" className="space-y-8 scroll-mt-28">
        <div className="space-y-1.5 border-b border-white/10 pb-4">
          <span className="font-mono text-xs font-bold text-accent tracking-[0.25em] uppercase">
            CORE PRINCIPLES
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            WHAT I CARE ABOUT IN PRODUCTION
          </h2>
          <p className="text-xs sm:text-sm text-secondary">
            Non-negotiable architectural tenets applied across all my engineering deliverables.
          </p>
        </div>

        <div className="space-y-6">
          {principles.map((p, idx) => {
            const isEven = idx % 2 === 0
            const Icon = p.icon
            return (
              <div
                key={p.num}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-accent/40 transition-all"
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-10 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Text Side */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-accent font-bold">
                      <span>PRINCIPLE 0{idx + 1}</span>
                      <span className="text-white/20">|</span>
                      <span className="text-muted">SYSTEM METRIC</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-secondary leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>

                  {/* Visual / Stat Side */}
                  <div className="w-full lg:w-72 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-2.5 flex flex-col justify-between text-center lg:text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-muted font-bold tracking-wider uppercase">
                        {p.statLabel}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <p className="font-mono text-2xl sm:text-3xl font-extrabold text-accent tracking-tight">
                      {p.statValue}
                    </p>

                    <p className="font-mono text-[10px] text-slate-400">
                      {p.statSub}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Academic Education & Verified Honors (2-Column with Verifiable Badges) */}
      <section id="credentials" className="grid md:grid-cols-2 gap-8 scroll-mt-28">
        {/* Education Card */}
        <div className="glass-panel p-8 rounded-3xl space-y-5 border border-white/10">
          <div className="flex items-center gap-2.5 text-accent">
            <GraduationCap className="w-5 h-5" />
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Academic Education
            </h3>
          </div>

          <div className="space-y-1.5 pt-2">
            <p className="font-display text-lg sm:text-xl font-bold text-white">
              {education.degree}
            </p>
            <p className="text-sm text-secondary">{education.school}</p>
            <div className="pt-2 flex items-center gap-3 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-bold">
                {education.gpa}
              </span>
              <span className="text-muted">{education.years}</span>
            </div>
          </div>
        </div>

        {/* Certifications & Honors Card */}
        <div className="glass-panel p-8 rounded-3xl space-y-5 border border-white/10">
          <div className="flex items-center gap-2.5 text-accent">
            <Award className="w-5 h-5" />
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Verified Certifications & Honors
            </h3>
          </div>

          <div className="space-y-3 pt-2">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <p className="font-mono text-xs font-bold text-white">Machine Learning A-Z: AI, Python & R</p>
                <p className="text-[10px] text-muted font-mono">Udemy / SuperDataScience • Prize Recipient</p>
              </div>
              <span className="font-mono text-[9px] px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-bold uppercase shrink-0">
                VERIFIED
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <p className="font-mono text-xs font-bold text-white">Complete Python Bootcamp</p>
                <p className="text-[10px] text-muted font-mono">Jose Portilla / Pierian Data • Industry Certified</p>
              </div>
              <span className="font-mono text-[9px] px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-bold uppercase shrink-0">
                VERIFIED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Next CTA */}
      <div className="pt-8 flex items-center justify-between border-t border-white/10">
        <Link to="/" className="font-mono text-xs text-secondary hover:text-white transition-colors">
          ← Back to Home
        </Link>
        <Link
          to="/projects"
          className="font-mono text-xs font-bold text-accent hover:underline transition-colors flex items-center gap-1.5"
        >
          <span>Explore Production Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
