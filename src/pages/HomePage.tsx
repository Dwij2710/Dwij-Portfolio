import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, ArrowRight, MapPin, Briefcase, Cpu, Layers, MessageSquare, Terminal, Activity, ShieldCheck, Database, Zap } from 'lucide-react'
import { profile, metrics, projects, experience } from '../lib/data'
import NeuralCanvas from '../components/NeuralCanvas'

const bootLines = [
  'initializing profile...',
  'loading systems, models, pipelines...',
  'status: available for select opportunities',
]

export default function HomePage() {
  const [lineIndex, setLineIndex] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= bootLines.length) return
    const t = setTimeout(() => setLineIndex((i) => i + 1), 400)
    return () => clearTimeout(t)
  }, [lineIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto w-full px-2 sm:px-4">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex flex-col justify-center pb-10 overflow-hidden">
        <NeuralCanvas />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Identity & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Boot Sequence */}
            <div className="font-mono text-xs text-signal space-y-1 h-12">
              {bootLines.slice(0, lineIndex).map((line, i) => (
                <p key={i} className="flex items-center gap-1.5 font-medium">
                  <span className="text-data">{'>'}</span>
                  <span>{line}</span>
                </p>
              ))}
            </div>

            {/* Identity & Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-panel border border-hairline rounded-full font-mono text-xs text-muted shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-signal status-dot" />
              <span className="text-ink font-bold">Core Focus:</span>
              <span className="text-ink">GenAI Voice Agents & Backend Systems</span>
              <span className="text-faint">|</span>
              <span className="flex items-center gap-1 text-data font-medium">
                <MapPin className="w-3.5 h-3.5" />
                {profile.location}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.05]"
            >
              {profile.name}
            </motion.h1>

            {/* Rotating Role Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="font-mono text-lg sm:text-xl text-signal font-bold flex items-center gap-2"
            >
              <span className="text-faint">{'> '}</span>
              <span>{profile.roles[roleIndex]}</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="text-ink text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              {profile.bioIntro}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <Link
                to="/experience"
                className="px-6 py-3 bg-signal text-base font-bold text-sm rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2 shadow-md"
              >
                <span>Explore experience</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/projects"
                className="px-6 py-3 border border-hairline bg-panel text-ink text-sm font-bold rounded-sm hover:border-signal hover:text-signal transition-colors flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-data" />
                <span>View projects</span>
              </Link>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-hairline bg-panel text-muted hover:text-signal text-sm rounded-sm hover:border-signal/50 transition-colors flex items-center gap-2 font-semibold"
              >
                <FileText className="w-4 h-4 text-signal" />
                <span>Resume PDF</span>
              </a>
            </motion.div>

            {/* Telemetry Metrics Grid */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 border-t border-hairline pt-6"
            >
              {metrics.map((m) => (
                <div key={m.label} className="p-3.5 bg-panel border border-hairline rounded-sm shadow-sm hover:border-signal/40 transition-colors">
                  <dt className="font-mono text-[10px] text-faint uppercase font-bold leading-tight">{m.label}</dt>
                  <dd className="mt-1 text-2xl font-bold text-ink font-mono tracking-tight">{m.value}</dd>
                  <dd className="font-mono text-xs text-data mt-0.5 font-medium truncate">{m.unit}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right Column: Live Systems Telemetry Console HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="lg:col-span-5 bg-panel border border-hairline p-6 sm:p-7 rounded-sm shadow-2xl space-y-5"
          >
            {/* Top HUD bar */}
            <div className="flex items-center justify-between border-b border-hairline pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-signal" />
                <span className="font-mono text-xs text-ink font-bold">systems_telemetry.hud</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-data font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-data animate-pulse" />
                <span>LIVE FEED</span>
              </div>
            </div>

            {/* Telemetry Node 1: Voice AI Pipeline */}
            <div className="p-4 bg-panel2 border border-hairline rounded-sm space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-signal" />
                  <span className="font-mono text-xs font-bold text-ink">Voice AI Agent Pipeline</span>
                </div>
                <span className="font-mono text-[10px] text-signal font-bold bg-signal/15 border border-signal/30 px-2 py-0.5 rounded">
                  &lt;1s Latency
                </span>
              </div>
              <p className="text-xs text-ink/90 font-mono leading-relaxed">
                LiveKit SFU (WebRTC) • GPT-4o • ElevenLabs • Sarvam AI
              </p>
              {/* Audio visualizer simulation */}
              <div className="flex items-center gap-1 h-5 pt-1">
                {[4, 14, 8, 18, 10, 20, 14, 8, 16, 12, 6, 16, 10, 18, 8, 14].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-signal rounded-full"
                    style={{
                      height: `${h}px`,
                      animation: `pulse 1.${(i % 5) + 2}s infinite alternate`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Telemetry Node 2: ML Model Inference */}
            <div className="p-4 bg-panel2 border border-hairline rounded-sm space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-data" />
                  <span className="font-mono text-xs font-bold text-ink">ML Inference DAG</span>
                </div>
                <span className="font-mono text-[10px] text-data font-bold bg-data/15 border border-data/30 px-2 py-0.5 rounded">
                  R²: 0.93 (CatBoost)
                </span>
              </div>
              <p className="text-xs text-ink/90 font-mono leading-relaxed">
                FastAPI • Pydantic • SHAP TreeExplainer • &lt;40ms P99
              </p>
            </div>

            {/* Telemetry Node 3: State & Checkpointing */}
            <div className="p-4 bg-panel2 border border-hairline rounded-sm space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-signal" />
                  <span className="font-mono text-xs font-bold text-ink">Distributed State Buffer</span>
                </div>
                <span className="font-mono text-[10px] text-ink font-bold bg-panel border border-hairline px-2 py-0.5 rounded">
                  24h TTL
                </span>
              </div>
              <p className="text-xs text-ink/90 font-mono leading-relaxed">
                Redis Session Checkpoint • Zero-Data-Loss Reconnects
              </p>
            </div>

            {/* Telemetry Node 4: LLM-as-a-Judge Validity Gate */}
            <div className="p-4 bg-panel2 border border-hairline rounded-sm space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-data" />
                  <span className="font-mono text-xs font-bold text-ink">Evaluation Governance Gate</span>
                </div>
                <span className="font-mono text-[10px] text-data font-bold bg-data/15 border border-data/30 px-2 py-0.5 rounded">
                  Fail-Open Resilient
                </span>
              </div>
              <p className="text-xs text-ink/90 font-mono leading-relaxed">
                gpt-4o-mini Answer-Validity Filter • 20+ Multilingual Edge Cases
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Gateways Section */}
      <section className="mt-14 border-t border-hairline pt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-mono text-xs text-signal font-bold mb-1 uppercase">// portfolio sitemap</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">
              Explore Engineering Areas
            </h2>
          </div>
          <span className="font-mono text-xs text-data font-semibold">select a page to deep-dive</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Experience Gateway */}
          <Link
            to="/experience"
            className="group p-6 bg-panel border border-hairline rounded-sm hover:border-signal transition-all shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <Briefcase className="w-5 h-5 text-signal" />
                <ArrowRight className="w-4 h-4 text-faint group-hover:text-signal group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-ink group-hover:text-signal transition-colors">
                Production Experience
              </h3>
              <p className="font-mono text-xs text-data mt-1.5 font-semibold">
                Banao Tech · InterviewGod.ai
              </p>
              <p className="text-xs text-muted mt-3 leading-relaxed">
                7 production deliverables: LiveKit voice pipeline, dialog state machine, and Redis checkpointing.
              </p>
            </div>
            <span className="font-mono text-xs text-signal font-bold mt-4 inline-flex items-center gap-1">
              View work log →
            </span>
          </Link>

          {/* Projects Gateway */}
          <Link
            to="/projects"
            className="group p-6 bg-panel border border-hairline rounded-sm hover:border-data transition-all shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <Cpu className="w-5 h-5 text-data" />
                <ArrowRight className="w-4 h-4 text-faint group-hover:text-data group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-ink group-hover:text-data transition-colors">
                Case Studies
              </h3>
              <p className="font-mono text-xs text-data mt-1.5 font-semibold">
                FinSight AI & CompInsight AI
              </p>
              <p className="text-xs text-muted mt-3 leading-relaxed">
                RL trading agents, Markowitz Efficient Frontier, and FastAPI sub-40ms compensation modeling.
              </p>
            </div>
            <span className="font-mono text-xs text-data font-bold mt-4 inline-flex items-center gap-1">
              View case studies →
            </span>
          </Link>

          {/* About & Stack Gateway */}
          <Link
            to="/about"
            className="group p-6 bg-panel border border-hairline rounded-sm hover:border-signal transition-all shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <Layers className="w-5 h-5 text-signal" />
                <ArrowRight className="w-4 h-4 text-faint group-hover:text-signal group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-ink group-hover:text-signal transition-colors">
                About & Tech Stack
              </h3>
              <p className="font-mono text-xs text-muted mt-1.5 font-semibold">
                5 Technical Domains
              </p>
              <p className="text-xs text-muted mt-3 leading-relaxed">
                Python, LLMs, FastAPI, Redis, Docker Compose, AWS infrastructure, and academic credentials.
              </p>
            </div>
            <span className="font-mono text-xs text-muted font-bold mt-4 inline-flex items-center gap-1 group-hover:text-ink">
              View tech stack →
            </span>
          </Link>

          {/* Contact Gateway */}
          <Link
            to="/contact"
            className="group p-6 bg-panel border border-hairline rounded-sm hover:border-signal transition-all shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <MessageSquare className="w-5 h-5 text-data" />
                <ArrowRight className="w-4 h-4 text-faint group-hover:text-signal group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-ink group-hover:text-signal transition-colors">
                Contact & Resume
              </h3>
              <p className="font-mono text-xs text-signal mt-1.5 font-semibold">
                Direct Dispatch
              </p>
              <p className="text-xs text-muted mt-3 leading-relaxed">
                Interactive message composer, copy coordinates, and instant resume PDF download.
              </p>
            </div>
            <span className="font-mono text-xs text-signal font-bold mt-4 inline-flex items-center gap-1">
              Get in touch →
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
