import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, Cpu, ShieldCheck, Database, Radio, Server, CheckCircle2, Terminal, Layers } from 'lucide-react'
import { GithubIcon } from '../components/Icons'

const archNodes = [
  { id: 'user', label: 'User Client', sub: 'WebRTC Opus Audio', color: '#06B6D4' },
  { id: 'sfu', label: 'LiveKit SFU', sub: 'Low-Latency Distribution', color: '#10B981' },
  { id: 'vad', label: 'Acoustic VAD', sub: 'Semantic Turn-Taking', color: '#8B5CF6' },
  { id: 'llm', label: 'GPT-4o + TTS', sub: 'ElevenLabs & Sarvam AI', color: '#F59E0B' },
  { id: 'judge', label: 'LLM-as-a-Judge', sub: 'gpt-4o-mini Gate', color: '#EC4899' },
  { id: 'redis', label: 'Redis Buffer', sub: '24h State Recovery', color: '#EF4444' },
  { id: 'aws', label: 'AWS EC2 / Caddy', sub: 'Production Stacks', color: '#3B82F6' },
]

const decisions = [
  {
    num: '01',
    title: 'Semantic Turn-Taking & Acoustic VAD Filtering',
    desc: 'Eliminated awkward pauses by pairing acoustic energy detection with heuristic repeat-request interceptors, reducing conversational latency to under 1 second.',
  },
  {
    num: '02',
    title: 'Pre-Generated Audio Warmup Gates',
    desc: 'Streamed initial conversational tokens to ElevenLabs / Sarvam AI TTS endpoints before full completion was finished, hiding TTFT lag.',
  },
  {
    num: '03',
    title: 'LLM-as-a-Judge Answer Validity Gate',
    desc: 'Integrated gpt-4o-mini fail-open gating to sanitize non-answers and hallucinations before score calculation, eliminating denominator inflation in skill scoring.',
  },
  {
    num: '04',
    title: 'Distributed Redis 24-Hour Session Checkpointing',
    desc: 'Structured persistent session state buffers allowing seamless reconnect recovery with zero data loss during network dropouts.',
  },
  {
    num: '05',
    title: 'Four-Layer Candidate Evaluation Audit',
    desc: 'Audited Scenario Detection, Telemetry, Semantic Intelligence, and Policy Governance, resolving 20+ multilingual (Hindi/English) speech pipeline edge cases.',
  },
]

export default function CaseStudyInterviewGod() {
  const [activeNode, setActiveNode] = useState(archNodes[0])

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 space-y-16 pt-28 sm:pt-36">
      {/* Back Link */}
      <Link
        to="/projects"
        className="font-mono text-xs text-secondary hover:text-white transition-colors inline-flex items-center gap-1.5"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Projects Discovery</span>
      </Link>

      {/* Hero */}
      <div className="space-y-6 border-b border-white/10 pb-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-light">
            CASE STUDY // VOICE AI & EVALUATION
          </span>
          <span className="font-mono text-xs text-muted">2026 • BANAO TECHNOLOGIES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
          InterviewGod.ai
        </h1>

        <p className="text-xl sm:text-2xl text-cyan-light font-medium max-w-3xl">
          Real-Time Voice AI Agent & LLM Evaluation Governance Pipeline
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="https://interviewgod.ai"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all shadow-lg"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Visit Live Platform</span>
          </a>

          <a
            href="https://github.com/Dwij2710"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full glass-card border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white/[0.06] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Source Repositories</span>
          </a>
        </div>
      </div>

      {/* Project Overview Table */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
        <div className="p-6 rounded-2xl glass-panel space-y-1">
          <span className="text-muted uppercase font-bold text-[10px]">ROLE</span>
          <p className="text-white font-bold text-sm">AI Developer Intern</p>
        </div>
        <div className="p-6 rounded-2xl glass-panel space-y-1">
          <span className="text-muted uppercase font-bold text-[10px]">TIMELINE</span>
          <p className="text-white font-bold text-sm">Feb 2026 – Present</p>
        </div>
        <div className="p-6 rounded-2xl glass-panel space-y-1">
          <span className="text-muted uppercase font-bold text-[10px]">CORE PROTOCOLS</span>
          <p className="text-cyan-light font-bold text-sm">WebRTC / LiveKit SFU</p>
        </div>
        <div className="p-6 rounded-2xl glass-panel space-y-1">
          <span className="text-muted uppercase font-bold text-[10px]">INFRASTRUCTURE</span>
          <p className="text-violet-light font-bold text-sm">AWS EC2 / Docker Compose</p>
        </div>
      </div>

      {/* Problem & Approach */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl space-y-4">
          <span className="font-mono text-xs font-bold text-violet-light uppercase tracking-wider block">
            // THE ENGINEERING PROBLEM
          </span>
          <h3 className="text-2xl font-bold text-white">Latency & Evaluation Drift</h3>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Automated technical interviewing faces high conversational latency (&gt;3s) with standard HTTP request chains, unnatural turn-taking collisions, and STT hallucinations during multilingual screening calls that corrupt weighted candidate rankings.
          </p>
        </div>

        <div className="glass-panel p-8 sm:p-10 rounded-3xl space-y-4">
          <span className="font-mono text-xs font-bold text-cyan-light uppercase tracking-wider block">
            // THE ARCHITECTURAL SOLUTION
          </span>
          <h3 className="text-2xl font-bold text-white">Asynchronous WebRTC & Gating</h3>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Constructed an event-driven WebRTC streaming pipeline using LiveKit SFU, GPT-4o, and ElevenLabs, coupled with an asynchronous dialog state machine, an LLM-as-a-Judge answer-validity gate, and Redis 24-hour state buffer.
          </p>
        </div>
      </div>

      {/* Interactive System Architecture Diagram */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-cyan-light tracking-[0.25em] uppercase">
            SYSTEM TOPOLOGY
          </span>
          <h2 className="text-3xl font-extrabold text-white">INTERACTIVE PIPELINE DAG</h2>
          <p className="text-secondary text-sm">
            Click on any node in the voice streaming pipeline to view component responsibility:
          </p>
        </div>

        {/* Node Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {archNodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setActiveNode(node)}
              className={`p-4 rounded-2xl border transition-all text-left space-y-1.5 ${
                activeNode.id === node.id
                  ? 'border-violet-glow bg-violet-600/20 shadow-lg scale-105'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <span className="w-2 h-2 rounded-full block" style={{ backgroundColor: node.color }} />
              <p className="font-mono text-xs font-bold text-white leading-tight">{node.label}</p>
              <p className="font-mono text-[10px] text-secondary">{node.sub}</p>
            </button>
          ))}
        </div>

        {/* Active Node Detail Card */}
        <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-2 font-mono text-xs">
          <span className="text-cyan-glow font-bold uppercase">SELECTED NODE: {activeNode.label}</span>
          <p className="text-secondary text-sm font-sans">{activeNode.sub} — Core component in sub-second conversational execution chain.</p>
        </div>
      </section>

      {/* 5 Engineering Decisions */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
            TECHNICAL ARCHITECTURE
          </span>
          <h2 className="text-3xl font-extrabold text-white">5 MAJOR ENGINEERING DECISIONS</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {decisions.map((d) => (
            <div key={d.num} className="glass-card p-7 rounded-2xl space-y-3">
              <span className="font-mono text-xs font-bold text-muted">{d.num}</span>
              <h3 className="font-mono text-sm font-bold text-white">{d.title}</h3>
              <p className="text-xs text-secondary leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-cyan-light tracking-[0.25em] uppercase">
            QUANTIFIED BENCHMARKS
          </span>
          <h2 className="text-3xl font-extrabold text-white">PRODUCTION DELIVERABLES & IMPACT</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-muted text-[10px] uppercase font-bold">LATENCY</span>
            <p className="text-3xl font-extrabold text-white">&lt;1s</p>
            <span className="text-cyan-light text-[10px]">Conversational RTT</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-muted text-[10px] uppercase font-bold">PASS RATE</span>
            <p className="text-3xl font-extrabold text-cyan-light">99.8%</p>
            <span className="text-muted text-[10px]">Judge Validity Gate</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-muted text-[10px] uppercase font-bold">STATE BUFFER</span>
            <p className="text-3xl font-extrabold text-violet-light">24h</p>
            <span className="text-muted text-[10px]">Redis Session Handoff</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-muted text-[10px] uppercase font-bold">EDGE CASES</span>
            <p className="text-3xl font-extrabold text-white">20+</p>
            <span className="text-cyan-light text-[10px]">Bilingual Resolved</span>
          </div>
        </div>
      </section>

      {/* Next Case Study Navigation */}
      <div className="pt-8 flex items-center justify-between border-t border-white/10">
        <Link to="/projects" className="font-mono text-xs text-secondary hover:text-white transition-colors">
          ← All Projects
        </Link>
        <Link
          to="/projects/finsight"
          className="font-mono text-xs font-bold text-cyan-light hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>Next Project: FinSight AI</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
