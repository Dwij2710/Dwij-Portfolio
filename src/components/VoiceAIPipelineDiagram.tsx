import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, Radio, Cpu, ShieldCheck, Database, Volume2, ArrowRight, Zap, CheckCircle2 } from 'lucide-react'

interface PipelineStep {
  id: string
  title: string
  subtitle: string
  protocol: string
  latency: string
  desc: string
  icon: typeof Mic
  activeColor: string
}

const pipelineSteps: PipelineStep[] = [
  {
    id: 'user',
    title: 'User Voice Input',
    subtitle: 'Opus Audio Stream',
    protocol: 'WebRTC / 48kHz',
    latency: '<20ms',
    desc: 'Bilingual acoustic stream capture with local client-side VAD (Voice Activity Detection) energy gating.',
    icon: Mic,
    activeColor: '#00E5C7',
  },
  {
    id: 'sfu',
    title: 'LiveKit SFU',
    subtitle: 'Media Routing Fabric',
    protocol: 'WebRTC Selective Forwarding',
    latency: '35ms',
    desc: 'High-throughput distribution layer with low jitter buffers and dynamic network bandwidth adaptation.',
    icon: Radio,
    activeColor: '#00E5C7',
  },
  {
    id: 'stt',
    title: 'STT Transcription',
    subtitle: 'Whisper & Sarvam AI',
    protocol: 'Async Streaming WebSockets',
    latency: '110ms',
    desc: 'Fast acoustic-to-token inference with specialized Hindi/English code-switching acoustic dictionaries.',
    icon: Zap,
    activeColor: '#00E5C7',
  },
  {
    id: 'gpt4o',
    title: 'GPT-4o Reasoning',
    subtitle: 'Dialog State Machine',
    protocol: 'Token Stream Server-Sent Events',
    latency: '180ms TTFT',
    desc: 'Adaptive multi-turn state machine with repeat-request interceptors to eradicate topic drift and task stalls.',
    icon: Cpu,
    activeColor: '#00E5C7',
  },
  {
    id: 'eval',
    title: 'Evaluation Layer',
    subtitle: 'gpt-4o-mini Validity Gate',
    protocol: 'Deterministic JSON Schema',
    latency: '45ms (Async)',
    desc: 'LLM-as-a-Judge answer validity gate with fail-open resiliency to intercept hallucinations before scoring.',
    icon: ShieldCheck,
    activeColor: '#00E5C7',
  },
  {
    id: 'redis',
    title: 'Redis Checkpointing',
    subtitle: '24h State Persistence',
    protocol: 'RESP3 in-memory hash',
    latency: '<2ms',
    desc: 'Session checkpointing with 24-hour buffer guaranteeing zero data loss during network dropouts.',
    icon: Database,
    activeColor: '#00E5C7',
  },
  {
    id: 'tts',
    title: 'TTS Audio Return',
    subtitle: 'ElevenLabs & Sarvam AI',
    protocol: 'PCM Chunk Streaming',
    latency: '85ms',
    desc: 'Pre-generated audio warmup gates streaming initial audio tokens before full generation terminates.',
    icon: Volume2,
    activeColor: '#00E5C7',
  },
]

export default function VoiceAIPipelineDiagram() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0)
  const [autoPlay, setAutoPlay] = useState<boolean>(true)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % pipelineSteps.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [autoPlay])

  const activeStep = pipelineSteps[activeStepIndex]

  return (
    <div className="w-full glass-panel rounded-2xl p-5 sm:p-6 space-y-5 border border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="ambient-glow-accent -top-20 -right-20 opacity-40 pointer-events-none" />

      {/* Header Info Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 relative z-10">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00E5C7]" />
            <span className="font-mono text-[10px] font-bold text-accent tracking-widest uppercase">
              LIVE ARCHITECTURE PIPELINE
            </span>
          </div>
          <h3 className="font-display text-sm sm:text-base font-bold text-white">
            Real-Time Voice AI Streaming Topology
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] text-secondary flex items-center gap-1.5">
            <span className="text-muted">E2E LATENCY:</span>
            <span className="text-accent font-bold">&lt; 1,000ms</span>
          </div>
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 font-mono text-[10px] text-muted hover:text-white transition-colors"
          >
            {autoPlay ? 'PAUSE' : 'AUTO'}
          </button>
        </div>
      </div>

      {/* Step Flow Nodes (Horizontal on lg, 2-col on mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 relative z-10">
        {pipelineSteps.map((step, idx) => {
          const Icon = step.icon
          const isActive = idx === activeStepIndex
          return (
            <button
              key={step.id}
              onClick={() => {
                setActiveStepIndex(idx)
                setAutoPlay(false)
              }}
              className={`p-2.5 rounded-xl text-left transition-all duration-300 flex flex-col justify-between relative group ${
                isActive
                  ? 'bg-accent/10 border border-accent/60 shadow-[0_0_15px_rgba(0,229,199,0.2)]'
                  : 'bg-white/[0.02] border border-white/[0.06] hover:border-white/20'
              }`}
            >
              {/* Active Indicator Top Pill */}
              <div className="flex items-center justify-between w-full mb-1.5">
                <span
                  className={`font-mono text-[9px] font-bold ${
                    isActive ? 'text-accent' : 'text-muted'
                  }`}
                >
                  0{idx + 1}
                </span>
                <div
                  className={`w-5 h-5 rounded-lg flex items-center justify-center transition-colors ${
                    isActive
                      ? 'bg-accent text-slate-950 shadow-sm'
                      : 'bg-white/[0.05] text-secondary group-hover:text-white'
                  }`}
                >
                  <Icon className="w-2.5 h-2.5" />
                </div>
              </div>

              <div>
                <p
                  className={`font-mono text-[10px] font-bold leading-tight ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {step.title}
                </p>
                <p className="font-mono text-[9px] text-muted truncate mt-0.5">
                  {step.latency}
                </p>
              </div>

              {/* Progress Line Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activePipelineIndicator"
                  className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Active Node Deep Dive Inspector Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2.5 relative z-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-mono text-xs font-bold text-white">
                STAGE 0{activeStepIndex + 1}: {activeStep.title.toUpperCase()}
              </span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-[11px] text-accent">
                {activeStep.subtitle}
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[10px]">
              <span className="text-muted">PROTOCOL:</span>
              <span className="text-slate-300">{activeStep.protocol}</span>
              <span className="text-muted">LATENCY:</span>
              <span className="text-accent font-bold">{activeStep.latency}</span>
            </div>
          </div>

          <p className="text-xs text-secondary leading-relaxed font-normal">
            {activeStep.desc}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Visual Audio Flow Waveform */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-muted relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          <span>Active WebRTC Session Stream</span>
        </div>
        <div className="flex items-center gap-1">
          {[40, 75, 30, 90, 60, 45, 80, 100, 50, 70, 35, 85, 60, 40].map((h, i) => (
            <span
              key={i}
              className="w-1 bg-accent/40 rounded-full transition-all duration-300"
              style={{
                height: `${Math.max(4, (h * ((activeStepIndex + 1) % 4 + 1)) / 4)}px`,
                backgroundColor: i % 2 === 0 ? '#00E5C7' : 'rgba(0, 229, 199, 0.35)',
              }}
            />
          ))}
        </div>
        <span>Zero-Loss Checkpointed</span>
      </div>
    </div>
  )
}
