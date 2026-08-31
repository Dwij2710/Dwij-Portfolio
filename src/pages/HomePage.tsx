import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, ArrowRight, MapPin, Briefcase, Cpu, Layers, MessageSquare, Terminal, Activity, ShieldCheck, Database, Zap, Sparkles, ChevronRight } from 'lucide-react'
import { profile, metrics, projects, experience } from '../lib/data'
import NeuralCanvas from '../components/NeuralCanvas'
import Sparkline from '../components/Sparkline'

const bootLines = [
  'initializing_profile...',
  'loading_systems...',
  'loading_models...',
  'establishing_connections...',
  'status: ONLINE // LATENCY 18ms',
]

const sparklineData = {
  '<1s': [800, 650, 520, 480, 410, 390, 340, 290, 250, 220],
  '0.93': [0.72, 0.78, 0.81, 0.85, 0.88, 0.90, 0.91, 0.92, 0.93, 0.93],
  '20+': [2, 5, 8, 11, 14, 16, 18, 19, 21, 23],
  '24h': [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
}

export default function HomePage() {
  const [lineIndex, setLineIndex] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [expandedPipeline, setExpandedPipeline] = useState(false)

  useEffect(() => {
    if (lineIndex >= bootLines.length) return
    const t = setTimeout(() => setLineIndex((i) => i + 1), 320)
    return () => clearTimeout(t)
  }, [lineIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  // Character animation variants for name
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: 0.6 + i * 0.04, duration: 0.3 },
    }),
  }

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto w-full px-2 sm:px-4">
      {/* Hero Section */}
      <section className="relative min-h-[78vh] flex flex-col justify-center pb-10 overflow-hidden">
        <NeuralCanvas />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Identity & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* System Boot Sequence */}
            <div className="font-mono text-xs text-signal space-y-1 h-14 bg-panel/40 border border-hairline/60 p-2.5 rounded-sm max-w-md">
              {bootLines.slice(0, lineIndex).map((line, i) => (
                <p key={i} className="flex items-center gap-1.5 font-medium leading-tight">
                  <span className="text-data">{'>'}</span>
                  <span>{line}</span>
                </p>
              ))}
            </div>

            {/* System Online Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-panel border border-signal/40 rounded-full font-mono text-xs text-ink shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-signal status-dot" />
              <span className="text-signal font-bold">● SYSTEM ONLINE</span>
              <span className="text-faint">|</span>
              <span className="text-white font-medium">AI & BACKEND ENGINEERING OS</span>
              <span className="text-faint">|</span>
              <span className="flex items-center gap-1 text-data font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                {profile.location}
              </span>
            </motion.div>

            {/* Name with character reveal */}
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05] flex flex-wrap">
                {profile.name.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={nameVariants}
                    initial="hidden"
                    animate="visible"
                    className={char === ' ' ? 'mr-3' : ''}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Rotating Role Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="font-mono text-lg sm:text-xl text-signal font-bold flex items-center gap-2"
            >
              <span className="text-data">{'> '}</span>
              <span className="border-b border-signal/50 pb-0.5">{profile.roles[roleIndex]}</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="text-white text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              {profile.bioIntro}
            </motion.p>

            {/* Action Buttons with data-cursor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <Link
                to="/experience"
                data-cursor="INSPECT WORK"
                className="px-6 py-3.5 bg-signal text-base font-bold text-xs font-mono uppercase tracking-wider rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2 shadow-lg ring-2 ring-signal/20"
              >
                <span>Explore experience</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/projects"
                data-cursor="VIEW PROJECTS"
                className="px-6 py-3.5 border border-hairline bg-panel text-white text-xs font-mono font-bold uppercase tracking-wider rounded-sm hover:border-signal hover:text-signal transition-colors flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-data" />
                <span>View projects</span>
              </Link>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="DOWNLOAD PDF"
                className="px-6 py-3.5 border border-hairline bg-panel text-muted hover:text-signal text-xs font-mono font-bold uppercase tracking-wider rounded-sm hover:border-signal/50 transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-signal" />
                <span>Resume PDF</span>
              </a>
            </motion.div>

            {/* Telemetry Metrics Grid with Sparklines */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 border-t border-hairline pt-6"
            >
              {metrics.map((m) => {
                const sData = sparklineData[m.value as keyof typeof sparklineData] || [10, 20, 15, 30, 25, 40]
                const isSignal = m.value === '<1s' || m.value === '24h'

                return (
                  <div
                    key={m.label}
                    data-cursor="METRIC HUD"
                    className="p-3.5 bg-panel border border-hairline rounded-sm shadow-sm hover:border-signal/50 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <dt className="font-mono text-[10px] text-faint uppercase font-bold leading-tight">{m.label}</dt>
                      <dd className="mt-1 text-2xl font-bold text-white font-mono tracking-tight">{m.value}</dd>
                    </div>
                    <div className="mt-2 pt-2 border-t border-hairline/60 flex items-center justify-between">
                      <dd className="font-mono text-[10px] text-data font-semibold truncate max-w-[80px]">{m.unit}</dd>
                      <Sparkline data={sData} color={isSignal ? 'signal' : 'data'} width={54} height={16} />
                    </div>
                  </div>
                )
              })}
            </motion.dl>
          </div>

          {/* Right Column: Live Systems Telemetry Console HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="lg:col-span-5 bg-panel border border-hairline p-6 sm:p-7 rounded-sm shadow-2xl space-y-5 relative"
          >
            {/* Top HUD bar */}
            <div className="flex items-center justify-between border-b border-hairline pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-signal" />
                <span className="font-mono text-xs text-white font-bold">systems_telemetry.hud</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-data font-bold">
                <span className="text-faint">PING: 18ms</span>
                <span className="w-2.5 h-2.5 rounded-full bg-data animate-pulse" />
                <span>LIVE</span>
              </div>
            </div>

            {/* Telemetry Node 1: Voice AI Pipeline (Hover-expanding DAG) */}
            <div
              onMouseEnter={() => setExpandedPipeline(true)}
              onMouseLeave={() => setExpandedPipeline(false)}
              data-cursor="EXPAND DAG"
              className="p-4 bg-panel2 border border-hairline rounded-sm space-y-3 hover:border-signal/60 transition-all cursor-pointer shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-signal" />
                  <span className="font-mono text-xs font-bold text-white">Voice AI Agent Pipeline</span>
                </div>
                <span className="font-mono text-[10px] text-signal font-bold bg-signal/15 border border-signal/30 px-2 py-0.5 rounded">
                  &lt;1s Latency
                </span>
              </div>

              <p className="text-xs text-white font-mono leading-relaxed font-medium">
                LiveKit SFU (WebRTC) • GPT-4o • ElevenLabs • Sarvam AI
              </p>

              {/* Audio waveform */}
              <div className="flex items-center gap-1 h-5 pt-1">
                {[4, 14, 8, 18, 10, 20, 14, 8, 16, 12, 6, 16, 10, 18, 8, 14, 12, 18, 10, 15].map((h, i) => (
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

              {/* Hover-expanded Pipeline Flow DAG */}
              <AnimatePresence>
                {expandedPipeline && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-2 border-t border-hairline/80 overflow-hidden font-mono text-[10px]"
                  >
                    <p className="text-faint uppercase font-bold mb-1.5">Live Data Execution DAG:</p>
                    <div className="flex flex-wrap items-center gap-1.5 text-ink font-semibold">
                      <span className="bg-panel px-2 py-1 rounded border border-hairline text-data">[IN] Audio</span>
                      <span className="text-signal">→</span>
                      <span className="bg-panel px-2 py-1 rounded border border-hairline text-white">VAD Filter</span>
                      <span className="text-signal">→</span>
                      <span className="bg-panel px-2 py-1 rounded border border-hairline text-white">GPT-4o</span>
                      <span className="text-signal">→</span>
                      <span className="bg-panel px-2 py-1 rounded border border-hairline text-signal">[OUT] &lt;1s Stream</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Telemetry Node 2: ML Model Inference */}
            <div
              data-cursor="INSPECT DAG"
              className="p-4 bg-panel2 border border-hairline rounded-sm space-y-2 hover:border-data/60 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-data" />
                  <span className="font-mono text-xs font-bold text-white">ML Inference DAG</span>
                </div>
                <span className="font-mono text-[10px] text-data font-bold bg-data/15 border border-data/30 px-2 py-0.5 rounded">
                  R²: 0.93 (CatBoost)
                </span>
              </div>
              <p className="text-xs text-white font-mono leading-relaxed font-medium">
                FastAPI • Pydantic • SHAP TreeExplainer • &lt;40ms P99
              </p>
            </div>

            {/* Telemetry Node 3: State & Checkpointing */}
            <div
              data-cursor="INSPECT BUFFER"
              className="p-4 bg-panel2 border border-hairline rounded-sm space-y-2 hover:border-signal/50 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-signal" />
                  <span className="font-mono text-xs font-bold text-white">Distributed State Buffer</span>
                </div>
                <span className="font-mono text-[10px] text-white font-bold bg-panel border border-hairline px-2 py-0.5 rounded">
                  24h TTL
                </span>
              </div>
              <p className="text-xs text-white font-mono leading-relaxed font-medium">
                Redis Session Checkpoint • Zero-Data-Loss Reconnects
              </p>
            </div>

            {/* Telemetry Node 4: LLM-as-a-Judge Validity Gate */}
            <div
              data-cursor="INSPECT GATE"
              className="p-4 bg-panel2 border border-hairline rounded-sm space-y-2 hover:border-data/60 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-data" />
                  <span className="font-mono text-xs font-bold text-white">Evaluation Governance Gate</span>
                </div>
                <span className="font-mono text-[10px] text-data font-bold bg-data/15 border border-data/30 px-2 py-0.5 rounded">
                  99.8% Pass Rate
                </span>
              </div>
              <p className="text-xs text-white font-mono leading-relaxed font-medium">
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
            <p className="font-mono text-xs text-signal font-bold mb-1 uppercase tracking-wider">// SYS.PORTFOLIO // NAVIGATION MATRIX</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Explore Engineering Areas
            </h2>
          </div>
          <span className="font-mono text-xs text-data font-bold">SELECT ROUTE TO DEEP-DIVE</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Experience Gateway */}
          <Link
            to="/experience"
            data-cursor="OPEN WORK"
            className="group p-6 bg-panel border border-hairline rounded-sm hover:border-signal transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-faint font-bold">SYS.WORK // 01</span>
                <ArrowRight className="w-4 h-4 text-faint group-hover:text-signal group-hover:translate-x-1 transition-all" />
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <Briefcase className="w-4 h-4 text-signal" />
                <h3 className="text-lg font-bold text-white group-hover:text-signal transition-colors">
                  Production Experience
                </h3>
              </div>
              <p className="font-mono text-xs text-data font-bold mt-1">
                Banao Tech · InterviewGod.ai
              </p>
              <p className="text-xs sm:text-sm text-slate-200 mt-3 leading-relaxed">
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
            data-cursor="OPEN PROJECTS"
            className="group p-6 bg-panel border border-hairline rounded-sm hover:border-data transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-faint font-bold">SYS.PROJECTS // 02</span>
                <ArrowRight className="w-4 h-4 text-faint group-hover:text-data group-hover:translate-x-1 transition-all" />
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <Cpu className="w-4 h-4 text-data" />
                <h3 className="text-lg font-bold text-white group-hover:text-data transition-colors">
                  Case Studies
                </h3>
              </div>
              <p className="font-mono text-xs text-data font-bold mt-1">
                FinSight AI & CompInsight AI
              </p>
              <p className="text-xs sm:text-sm text-slate-200 mt-3 leading-relaxed">
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
            data-cursor="OPEN STACK"
            className="group p-6 bg-panel border border-hairline rounded-sm hover:border-signal transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-faint font-bold">SYS.STACK // 03</span>
                <ArrowRight className="w-4 h-4 text-faint group-hover:text-signal group-hover:translate-x-1 transition-all" />
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <Layers className="w-4 h-4 text-signal" />
                <h3 className="text-lg font-bold text-white group-hover:text-signal transition-colors">
                  About & Tech Stack
                </h3>
              </div>
              <p className="font-mono text-xs text-muted font-bold mt-1">
                5 Technical Domains
              </p>
              <p className="text-xs sm:text-sm text-slate-200 mt-3 leading-relaxed">
                Python, LLMs, FastAPI, Redis, Docker Compose, AWS infrastructure, and academic credentials.
              </p>
            </div>
            <span className="font-mono text-xs text-muted font-bold mt-4 inline-flex items-center gap-1 group-hover:text-white">
              View tech stack →
            </span>
          </Link>

          {/* Contact Gateway */}
          <Link
            to="/contact"
            data-cursor="OPEN DISPATCH"
            className="group p-6 bg-panel border border-hairline rounded-sm hover:border-signal transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-faint font-bold">SYS.CONTACT // 04</span>
                <ArrowRight className="w-4 h-4 text-faint group-hover:text-signal group-hover:translate-x-1 transition-all" />
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <MessageSquare className="w-4 h-4 text-data" />
                <h3 className="text-lg font-bold text-white group-hover:text-signal transition-colors">
                  Contact & Resume
                </h3>
              </div>
              <p className="font-mono text-xs text-signal font-bold mt-1">
                Direct Dispatch
              </p>
              <p className="text-xs sm:text-sm text-slate-200 mt-3 leading-relaxed">
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
