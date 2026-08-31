import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, MapPin, Cpu, Server, Radio, Cloud } from 'lucide-react'
import { profile, metrics } from '../lib/data'
import AICore3D from '../components/AICore3D'
import Sparkline from '../components/Sparkline'

const capabilities = [
  {
    num: '01',
    title: 'REAL-TIME VOICE AI',
    desc: 'Low-latency conversational agents with LiveKit SFU (WebRTC), acoustic VAD filtering, and semantic turn-taking.',
    icon: Radio,
    color: '#06B6D4',
  },
  {
    num: '02',
    title: 'BACKEND INFRASTRUCTURE',
    desc: 'High-concurrency asynchronous Python microservices with FastAPI, Asyncio, Pydantic, and distributed Redis session buffers.',
    icon: Server,
    color: '#6366F1',
  },
  {
    num: '03',
    title: 'QUANTITATIVE & ML SYSTEMS',
    desc: 'Autonomous RL trading agents (PPO/A2C/DQN), Markowitz Efficient Frontier optimization, and CatBoost predictive modeling.',
    icon: Cpu,
    color: '#8B5CF6',
  },
  {
    num: '04',
    title: 'PRODUCTION CLOUD & DEVOPS',
    desc: 'Containerized multi-service deployments across AWS EC2 with Docker Compose, automated Caddy TLS reverse proxies, and CI/CD.',
    icon: Cloud,
    color: '#3B82F6',
  },
]

const sparklineData = {
  '<1s': [750, 600, 520, 480, 410, 380, 320, 280, 240, 210],
  '0.93': [0.72, 0.78, 0.81, 0.85, 0.88, 0.90, 0.91, 0.92, 0.93, 0.93],
  '20+': [2, 4, 7, 10, 13, 16, 18, 19, 21, 23],
  '24h': [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
}

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[78vh] flex flex-col justify-center pt-16 sm:pt-20 pb-4 overflow-hidden">
        <div className="ambient-glow-violet -top-40 -left-40 opacity-30" />
        <div className="ambient-glow-cyan top-1/2 -right-40 opacity-25" />

        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            {/* Left: Editorial Hero Content */}
            <div className="lg:col-span-7 space-y-4">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-violet-glow/30 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow shadow-[0_0_6px_#06B6D4] animate-pulse" />
                <span className="font-mono text-[10px] font-bold text-cyan-light tracking-wider uppercase">
                  SYSTEM ONLINE
                </span>
                <span className="text-white/20">|</span>
                <span className="font-mono text-[10px] text-secondary flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-cyan-glow" />
                  {profile.location}
                </span>
              </div>

              {/* Refined Proportional Heading */}
              <div className="space-y-0.5">
                <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-violet-light uppercase">
                  AI • BACKEND • FULL-STACK ENGINEER
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
                  DWIJ <br />
                  <span className="text-shimmer">PRAJAPATI</span>
                </h1>
              </div>

              {/* Rotating Specialization */}
              <div className="font-mono text-sm sm:text-base font-bold text-cyan-light flex items-center gap-2">
                <span className="text-violet-glow">{'>'}</span>
                <span>{profile.roles[roleIndex]}</span>
              </div>

              {/* Narrative Subheading */}
              <p className="text-xs sm:text-sm text-secondary leading-relaxed max-w-lg font-normal">
                I build intelligent systems, real-time voice AI experiences, and production-grade backend infrastructure.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/projects"
                  className="group px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all flex items-center gap-1.5 shadow-md"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/resume"
                  className="px-4 py-2.5 rounded-full glass-card border border-white/15 hover:border-violet-glow text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/[0.08] transition-all flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-glow" />
                  <span>View Resume</span>
                </Link>

                <Link
                  to="/contact"
                  className="px-3.5 py-2.5 rounded-full text-secondary hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Let's Talk →
                </Link>
              </div>

              {/* Quick KPI Strip */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-5 sm:gap-8 font-mono text-xs">
                <div>
                  <p className="text-muted text-[9px] uppercase font-bold tracking-wider">VOICE AI LATENCY</p>
                  <p className="text-base font-bold text-white mt-0.5">&lt;1s</p>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div>
                  <p className="text-muted text-[9px] uppercase font-bold tracking-wider">COMPENSATION R²</p>
                  <p className="text-base font-bold text-cyan-light mt-0.5">0.93</p>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div>
                  <p className="text-muted text-[9px] uppercase font-bold tracking-wider">REDIS BUFFER</p>
                  <p className="text-base font-bold text-violet-light mt-0.5">24h</p>
                </div>
              </div>
            </div>

            {/* Right: Interactive 3D AI System Core */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <AICore3D />
            </div>
          </div>
        </div>
      </section>

      {/* 2. What I Build Capabilities Grid */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-8">
        <div className="space-y-1.5">
          <span className="font-mono text-[10px] font-bold text-violet-light tracking-[0.2em] uppercase">
            01 // CAPABILITIES & SCOPE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            WHAT I <span className="text-gradient-violet-cyan">BUILD & SHIP.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <div
                key={cap.num}
                className="glass-panel p-5 sm:p-6 rounded-2xl space-y-3 hover:border-violet-glow/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shadow-md"
                      style={{ backgroundColor: `${cap.color}20`, color: cap.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-muted">{cap.num}</span>
                  </div>
                  <h3 className="font-mono text-xs font-bold text-white tracking-wider">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-[11px] text-secondary leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. Featured Selected Work Showcase */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] font-bold text-cyan-light tracking-[0.2em] uppercase">
              02 // SELECTED PRODUCTION CASE STUDIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              FEATURED <span className="text-gradient-violet-cyan">ENGINEERING WORK.</span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="font-mono text-xs text-cyan-light font-bold flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-8">
          {/* Project 1: InterviewGod.ai */}
          <article className="glass-panel p-6 sm:p-8 lg:p-10 rounded-2xl space-y-5 hover:border-violet-glow/40 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-violet-light px-2.5 py-0.5 rounded-full bg-violet-600/20 border border-violet-500/30">
                  FLAGSHIP 01 // VOICE AI
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">InterviewGod.ai</h3>
                <p className="font-mono text-xs sm:text-sm text-cyan-light font-semibold">
                  Real-Time Voice AI Agent & LLM Evaluation Platform
                </p>
              </div>

              <Link
                to="/projects/interviewgod"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all self-start lg:self-auto shadow-md"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Architected an asynchronous WebRTC voice AI pipeline using LiveKit SFU, GPT-4o, and ElevenLabs/Sarvam AI, combined with a 4-layer deterministic evaluation audit (Scenario Detection, Policy Engine, Governance) and Redis 24-hour session state buffer.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                <span className="text-muted uppercase text-[9px] font-bold">LATENCY</span>
                <p className="text-lg font-bold text-white">&lt;1s</p>
                <span className="text-cyan-light text-[9px]">WebRTC / SFU</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                <span className="text-muted uppercase text-[9px] font-bold">PASS RATE</span>
                <p className="text-lg font-bold text-cyan-light">99.8%</p>
                <span className="text-muted text-[9px]">Judge Gate</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                <span className="text-muted uppercase text-[9px] font-bold">STATE BUFFER</span>
                <p className="text-lg font-bold text-violet-light">24h</p>
                <span className="text-muted text-[9px]">Redis Session</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                <span className="text-muted uppercase text-[9px] font-bold">EDGE CASES</span>
                <p className="text-lg font-bold text-white">20+</p>
                <span className="text-cyan-light text-[9px]">Multilingual</span>
              </div>
            </div>
          </article>

          {/* Project 2: FinSight AI */}
          <article className="glass-panel p-6 sm:p-8 lg:p-10 rounded-2xl space-y-5 hover:border-violet-glow/40 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-cyan-light px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                  FLAGSHIP 02 // QUANT ML
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">FinSight AI</h3>
                <p className="font-mono text-xs sm:text-sm text-cyan-light font-semibold">
                  Quantitative Intelligence & Autonomous Trading Platform
                </p>
              </div>

              <Link
                to="/projects/finsight"
                className="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-violet-600/30 border border-white/15 hover:border-violet-500/50 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all self-start lg:self-auto"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Combines SARIMAX time-series models, LSTM neural networks, and FinBERT NLP sentiment analysis with an autonomous Markov Decision Process (MDP) stock trading environment using PPO/A2C/DQN agents and Markowitz Efficient Frontier optimization.
            </p>

            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {['PyTorch', 'SARIMAX', 'LSTM', 'FinBERT', 'PPO/A2C/DQN', 'Markowitz MPT', 'Monte Carlo', 'VaR / CVaR'].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-white">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* 4. Quantified Engineering Metrics Strip */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
          <div className="space-y-1 border-b border-white/10 pb-4">
            <span className="font-mono text-[10px] font-bold text-violet-light tracking-[0.2em] uppercase">
              03 // QUANTIFIED BENCHMARKS
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              ENGINEERED FOR PRODUCTION PERFORMANCE
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m) => {
              const sData = sparklineData[m.value as keyof typeof sparklineData] || [10, 20, 15, 30, 25, 40]
              const isSignal = m.value === '<1s' || m.value === '24h'

              return (
                <div key={m.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="font-mono text-[9px] text-muted uppercase font-bold block">{m.label}</span>
                  <p className="text-3xl font-extrabold font-mono text-white tracking-tight">{m.value}</p>
                  <div className="pt-2 flex items-center justify-between border-t border-white/5">
                    <span className="font-mono text-[11px] text-cyan-light font-semibold truncate max-w-[100px]">{m.unit}</span>
                    <Sparkline data={sData} color={isSignal ? 'signal' : 'data'} width={45} height={14} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
