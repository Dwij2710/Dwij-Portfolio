import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Sparkles, MapPin, ArrowUpRight, Cpu, Server, Radio, Cloud, CheckCircle2, Terminal } from 'lucide-react'
import { profile, metrics, projects } from '../lib/data'
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
    <div className="space-y-28 sm:space-y-36">
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 overflow-hidden">
        <div className="ambient-glow-violet -top-40 -left-40 opacity-40" />
        <div className="ambient-glow-cyan top-1/2 -right-40 opacity-30" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left: Editorial Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-violet-glow/30 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_8px_#06B6D4] animate-pulse" />
                <span className="font-mono text-[11px] font-bold text-cyan-light tracking-wider uppercase">
                  SYSTEM ONLINE
                </span>
                <span className="text-white/20">|</span>
                <span className="font-mono text-[11px] text-secondary flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-glow" />
                  {profile.location}
                </span>
              </div>

              {/* Giant Editorial Heading */}
              <div className="space-y-2">
                <p className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-violet-light uppercase">
                  AI • BACKEND • FULL-STACK ENGINEER
                </p>
                <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.02]">
                  DWIJ <br />
                  <span className="text-shimmer">PRAJAPATI</span>
                </h1>
              </div>

              {/* Rotating Specialization */}
              <div className="font-mono text-lg sm:text-xl font-bold text-cyan-light flex items-center gap-2.5">
                <span className="text-violet-glow">{'>'}</span>
                <span>{profile.roles[roleIndex]}</span>
              </div>

              {/* Narrative Subheading */}
              <p className="text-lg sm:text-xl text-secondary leading-relaxed max-w-xl font-normal">
                I build intelligent systems, real-time voice AI experiences, and production-grade backend infrastructure.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/projects"
                  className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all flex items-center gap-2 shadow-lg"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/resume"
                  className="px-6 py-3.5 rounded-full glass-card border border-white/15 hover:border-violet-glow text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/[0.08] transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-cyan-glow" />
                  <span>View Resume</span>
                </Link>

                <Link
                  to="/contact"
                  className="px-5 py-3.5 rounded-full text-secondary hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Let's Talk →
                </Link>
              </div>

              {/* Quick KPI Strip */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 font-mono text-xs">
                <div>
                  <p className="text-muted text-[10px] uppercase font-bold tracking-wider">VOICE AI LATENCY</p>
                  <p className="text-lg font-bold text-white mt-0.5">&lt;1s</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-muted text-[10px] uppercase font-bold tracking-wider">COMPENSATION R²</p>
                  <p className="text-lg font-bold text-cyan-light mt-0.5">0.93</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-muted text-[10px] uppercase font-bold tracking-wider">REDIS BUFFER</p>
                  <p className="text-lg font-bold text-violet-light mt-0.5">24h</p>
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
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
            01 // CAPABILITIES & SCOPE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            WHAT I <span className="text-gradient-violet-cyan">BUILD & SHIP.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <div
                key={cap.num}
                className="glass-panel p-7 rounded-3xl space-y-4 hover:border-violet-glow/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                      style={{ backgroundColor: `${cap.color}20`, color: cap.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-muted">{cap.num}</span>
                  </div>
                  <h3 className="font-mono text-sm font-bold text-white tracking-wider">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-xs text-secondary leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. Featured Selected Work Showcase */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-cyan-light tracking-[0.25em] uppercase">
              02 // SELECTED PRODUCTION CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              FEATURED <span className="text-gradient-violet-cyan">ENGINEERING WORK.</span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="font-mono text-xs text-cyan-light font-bold flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-12">
          {/* Project 1: InterviewGod.ai */}
          <article className="glass-panel p-8 sm:p-12 rounded-3xl space-y-8 hover:border-violet-glow/40 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-violet-light px-3 py-1 rounded-full bg-violet-600/20 border border-violet-500/30">
                  FLAGSHIP 01 // VOICE AI
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">InterviewGod.ai</h3>
                <p className="font-mono text-sm text-cyan-light font-semibold">
                  Real-Time Voice AI Agent & LLM Evaluation Platform
                </p>
              </div>

              <Link
                to="/projects/interviewgod"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all self-start lg:self-auto"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-base text-secondary leading-relaxed">
              Architected an asynchronous WebRTC voice AI pipeline using LiveKit SFU, GPT-4o, and ElevenLabs/Sarvam AI, combined with a 4-layer deterministic evaluation audit (Scenario Detection, Policy Engine, Governance) and Redis 24-hour session state buffer.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-muted uppercase text-[10px] font-bold">LATENCY</span>
                <p className="text-xl font-bold text-white">&lt;1s</p>
                <span className="text-cyan-light text-[10px]">WebRTC / SFU</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-muted uppercase text-[10px] font-bold">PASS RATE</span>
                <p className="text-xl font-bold text-cyan-light">99.8%</p>
                <span className="text-muted text-[10px]">Judge Gate</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-muted uppercase text-[10px] font-bold">STATE BUFFER</span>
                <p className="text-xl font-bold text-violet-light">24h</p>
                <span className="text-muted text-[10px]">Redis Session</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-muted uppercase text-[10px] font-bold">EDGE CASES</span>
                <p className="text-xl font-bold text-white">20+</p>
                <span className="text-cyan-light text-[10px]">Multilingual</span>
              </div>
            </div>
          </article>

          {/* Project 2: FinSight AI */}
          <article className="glass-panel p-8 sm:p-12 rounded-3xl space-y-8 hover:border-violet-glow/40 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-cyan-light px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                  FLAGSHIP 02 // QUANT ML
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">FinSight AI</h3>
                <p className="font-mono text-sm text-cyan-light font-semibold">
                  Quantitative Intelligence & Autonomous Trading Platform
                </p>
              </div>

              <Link
                to="/projects/finsight"
                className="px-6 py-3 rounded-full bg-white/[0.08] hover:bg-violet-600/30 border border-white/15 hover:border-violet-500/50 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all self-start lg:self-auto"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-base text-secondary leading-relaxed">
              Combines SARIMAX time-series models, LSTM neural networks, and FinBERT NLP sentiment analysis with an autonomous Markov Decision Process (MDP) stock trading environment using PPO/A2C/DQN agents and Markowitz Efficient Frontier optimization.
            </p>

            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {['PyTorch', 'SARIMAX', 'LSTM', 'FinBERT', 'PPO/A2C/DQN', 'Markowitz MPT', 'Monte Carlo', 'VaR / CVaR'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* 4. Quantified Engineering Metrics Strip */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl space-y-8">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
              03 // QUANTIFIED BENCHMARKS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ENGINEERED FOR PRODUCTION PERFORMANCE
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => {
              const sData = sparklineData[m.value as keyof typeof sparklineData] || [10, 20, 15, 30, 25, 40]
              const isSignal = m.value === '<1s' || m.value === '24h'

              return (
                <div key={m.label} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <span className="font-mono text-[10px] text-muted uppercase font-bold block">{m.label}</span>
                  <p className="text-4xl font-extrabold font-mono text-white tracking-tight">{m.value}</p>
                  <div className="pt-2 flex items-center justify-between border-t border-white/5">
                    <span className="font-mono text-xs text-cyan-light font-semibold truncate max-w-[120px]">{m.unit}</span>
                    <Sparkline data={sData} color={isSignal ? 'signal' : 'data'} width={50} height={16} />
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
