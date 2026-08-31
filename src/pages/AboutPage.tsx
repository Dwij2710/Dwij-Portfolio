import { motion } from 'framer-motion'
import { Layers, Cpu, Server, Radio, Cloud, GraduationCap, Award, CheckCircle2, Terminal, ArrowRight } from 'lucide-react'
import { profile, education, achievements } from '../lib/data'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Low Latency by Default',
    desc: 'Sub-second real-time streaming requires asynchronous architectures, acoustic VAD gating, and minimal overhead across network layers.',
  },
  {
    title: 'Fail-Open Resiliency & Governance',
    desc: 'Production LLMs fail in unpredictable ways. Systems must incorporate deterministic evaluation gates to catch edge cases gracefully.',
  },
  {
    title: 'Distributed State Integrity',
    desc: 'Session checkpointing with Redis guarantees zero data loss during network blips and seamless multi-turn reconnection.',
  },
  {
    title: 'Pragmatic Engineering Over Hype',
    desc: 'Using the right tool for the job—whether it is a simple regression model, an asynchronous microservice, or an agentic LLM pipeline.',
  },
]

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 space-y-20">
      <PageHeader
        tag="01 // ABOUT DWIJ PRAJAPATI"
        title="ENGINEER. BUILDER."
        highlight="PROBLEM SOLVER."
        description="I bridge the gap between cutting-edge Generative AI models and the robust, high-throughput, low-latency infrastructure required to run them reliably in production."
      />

      {/* Philosophy Statement */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl space-y-6">
        <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
          ENGINEERING PHILOSOPHY
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
          "I don't just build models. <br />
          <span className="text-gradient-violet-cyan">I build the systems that make models useful."</span>
        </h2>
        <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-4xl font-normal">
          {profile.summary}
        </p>
      </section>

      {/* The 4-Way Technical Intersection */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-cyan-light tracking-[0.25em] uppercase">
            TECHNICAL DOMAINS
          </span>
          <h2 className="text-3xl font-extrabold text-white">THE 4-WAY INTERSECTION</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl space-y-3">
            <Cpu className="w-6 h-6 text-violet-glow" />
            <h3 className="font-mono text-sm font-bold text-white uppercase">01. AI & LLM Systems</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Multi-turn voice agents, prompt scaffolding, and LLM-as-a-Judge answer-validity pipelines.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <Server className="w-6 h-6 text-indigo-glow" />
            <h3 className="font-mono text-sm font-bold text-white uppercase">02. Backend Systems</h3>
            <p className="text-xs text-secondary leading-relaxed">
              High-concurrency asynchronous Python backends with FastAPI, Asyncio, Pydantic, and REST/WebSockets.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <Radio className="w-6 h-6 text-cyan-glow" />
            <h3 className="font-mono text-sm font-bold text-white uppercase">03. Real-Time Streaming</h3>
            <p className="text-xs text-secondary leading-relaxed">
              LiveKit SFU, WebRTC bidirectional audio streaming, acoustic VAD, and Redis session state buffers.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <Cloud className="w-6 h-6 text-blue-400" />
            <h3 className="font-mono text-sm font-bold text-white uppercase">04. Cloud & DevOps</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Docker Compose, AWS EC2 deployments, automated Caddy TLS reverse proxies, and CodeBuild CI/CD.
            </p>
          </div>
        </div>
      </section>

      {/* What I Care About */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
            CORE PRINCIPLES
          </span>
          <h2 className="text-3xl font-extrabold text-white">WHAT I CARE ABOUT</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div key={i} className="glass-panel p-7 rounded-3xl space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-glow shrink-0" />
                <span>{v.title}</span>
              </h3>
              <p className="text-sm text-secondary leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl space-y-4">
          <div className="flex items-center gap-2.5 text-cyan-glow">
            <GraduationCap className="w-5 h-5" />
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Academic Education</h3>
          </div>
          <div className="space-y-1 pt-2">
            <p className="text-lg font-bold text-white">{education.degree}</p>
            <p className="text-sm text-secondary">{education.school}</p>
            <p className="font-mono text-xs text-cyan-light font-bold pt-2">
              CGPA: {education.gpa} • {education.years}
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl space-y-4">
          <div className="flex items-center gap-2.5 text-violet-light">
            <Award className="w-5 h-5" />
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Honors & Certifications</h3>
          </div>
          <ul className="space-y-2.5 pt-2 text-sm text-secondary">
            {achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-glow shrink-0 mt-0.5" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next CTA */}
      <div className="pt-8 flex items-center justify-between border-t border-white/10">
        <Link to="/" className="font-mono text-xs text-secondary hover:text-white transition-colors">
          ← Back to Home
        </Link>
        <Link
          to="/projects"
          className="font-mono text-xs font-bold text-cyan-light hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>Explore Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
