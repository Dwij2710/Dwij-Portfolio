import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, MapPin, Cpu, Server, Radio, Cloud, Terminal } from 'lucide-react'
import { profile } from '../lib/data'
import VoiceAIPipelineDiagram from '../components/VoiceAIPipelineDiagram'
import TestimonialsSection from '../components/TestimonialsSection'
import GithubActivitySection from '../components/GithubActivitySection'

const capabilities = [
  {
    num: '01',
    title: 'REAL-TIME VOICE AI',
    desc: 'Sub-second conversational agents with LiveKit SFU (WebRTC), acoustic VAD filtering, and semantic turn-taking.',
    icon: Radio,
  },
  {
    num: '02',
    title: 'BACKEND INFRASTRUCTURE',
    desc: 'High-concurrency asynchronous Python microservices with FastAPI, Asyncio, Pydantic, and Redis Session Checkpointing.',
    icon: Server,
  },
  {
    num: '03',
    title: 'QUANTITATIVE & ML SYSTEMS',
    desc: 'Autonomous RL trading agents (PPO/A2C/DQN), Markowitz Efficient Frontier optimization, and CatBoost predictive modeling.',
    icon: Cpu,
  },
  {
    num: '04',
    title: 'PRODUCTION CLOUD & DEVOPS',
    desc: 'Containerized multi-service deployments across AWS EC2 with Docker Compose, automated Caddy TLS reverse proxies, and CI/CD.',
    icon: Cloud,
  },
]

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Technical Hero Section */}
      <section className="relative min-h-[82vh] flex flex-col justify-center pt-28 sm:pt-36 pb-8 overflow-hidden">
        <div className="ambient-glow-accent -top-40 -left-40 opacity-30 pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Editorial Hero Narrative */}
            <div className="lg:col-span-6 space-y-5">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-accent/30 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#00E5C7] animate-pulse" />
                <span className="font-mono text-[10px] font-bold text-accent tracking-wider uppercase">
                  SYSTEM ONLINE
                </span>
                <span className="text-white/20">|</span>
                <span className="font-mono text-[10px] text-secondary flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-accent" />
                  {profile.location}
                </span>
              </div>

              {/* Main Headline (Max 1 gradient moment) */}
              <div className="space-y-1">
                <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
                  AI • BACKEND • SYSTEMS ENGINEER
                </p>
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.02]">
                  DWIJ <br />
                  <span className="text-hero-gradient">PRAJAPATI</span>
                </h1>
              </div>

              {/* Rotating Specialization */}
              <div className="font-mono text-sm sm:text-base font-bold text-slate-200 flex items-center gap-2">
                <span className="text-accent font-black">{'>'}</span>
                <span>{profile.roles[roleIndex]}</span>
              </div>

              {/* Narrative Subheading */}
              <p className="text-sm text-secondary leading-relaxed max-w-lg font-normal">
                I design and deploy low-latency real-time voice AI agents, deterministic LLM evaluation pipelines, and high-throughput Python backends.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Primary CTA: Solid Accent Fill */}
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-full bg-accent text-slate-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,199,0.4)] transition-all flex items-center gap-2 shadow-lg"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Secondary CTA: 1px Accent Outline */}
                <Link
                  to="/resume"
                  className="px-5 py-3 rounded-full border border-accent/40 hover:border-accent text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent/10 transition-all flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-accent" />
                  <span>View Resume</span>
                </Link>

                <Link
                  to="/contact"
                  className="px-4 py-3 rounded-full text-secondary hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Contact →
                </Link>
              </div>

              {/* Quick KPI Strip with Explicit Project Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs">
                <div>
                  <p className="text-muted text-[9px] uppercase font-bold tracking-wider">VOICE AI LATENCY</p>
                  <p className="text-lg font-bold text-white mt-0.5">&lt;1s</p>
                  <span className="text-[9px] text-accent block">— InterviewGod.ai</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-muted text-[9px] uppercase font-bold tracking-wider">COMPENSATION R²</p>
                  <p className="text-lg font-bold text-accent mt-0.5">0.93</p>
                  <span className="text-[9px] text-muted block">— CompInsight AI</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-muted text-[9px] uppercase font-bold tracking-wider">REDIS CHECKPOINT</p>
                  <p className="text-lg font-bold text-white mt-0.5">24h</p>
                  <span className="text-[9px] text-accent block">— InterviewGod.ai</span>
                </div>
              </div>
            </div>

            {/* Right: Real Voice AI Pipeline Architecture Flowchart */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <VoiceAIPipelineDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Capabilities Grid */}
      <section id="capabilities" className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-8 scroll-mt-28">
        <div className="space-y-1.5">
          <span className="font-mono text-[10px] font-bold text-accent tracking-[0.2em] uppercase">
            01 // CAPABILITIES & ARCHITECTURE
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            WHAT I BUILD & SHIP.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <div
                key={cap.num}
                className="glass-panel p-5 sm:p-6 rounded-2xl space-y-4 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-accent/15 text-accent shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-muted">{cap.num}</span>
                  </div>
                  <h3 className="font-mono text-xs font-bold text-white tracking-wider">
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

      {/* 3. Featured Production Case Studies (Clean & Fast — Redundant Stat Rows Cut) */}
      <section id="featured-work" className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-8 scroll-mt-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] font-bold text-accent tracking-[0.2em] uppercase">
              02 // SELECTED PRODUCTION SYSTEMS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              FEATURED ENGINEERING WORK.
            </h2>
          </div>

          <Link
            to="/projects"
            className="font-mono text-xs text-accent font-bold flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-6">
          {/* Project 1: InterviewGod.ai */}
          <article className="glass-panel p-6 sm:p-8 lg:p-10 rounded-2xl space-y-5 hover:border-accent/40 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-accent px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30">
                  FLAGSHIP 01 // REAL-TIME VOICE AI
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  InterviewGod.ai
                </h3>
                <p className="font-mono text-xs sm:text-sm text-accent font-semibold">
                  Real-Time Voice AI Agent & LLM Evaluation Platform
                </p>
              </div>

              <Link
                to="/projects/interviewgod"
                className="px-5 py-2.5 rounded-full bg-accent text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-accent-hover transition-all self-start lg:self-auto shadow-md"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Architected an asynchronous WebRTC voice AI pipeline using LiveKit SFU, GPT-4o, and ElevenLabs/Sarvam AI, combined with a 4-layer deterministic evaluation audit (Scenario Detection, Policy Engine, Governance) and Redis Session Checkpointing (24h buffer).
            </p>

            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {['LiveKit SFU', 'WebRTC', 'OpenAI GPT-4o', 'ElevenLabs', 'Sarvam AI', 'Redis Session Checkpointing', 'FastAPI', 'AWS EC2'].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </article>

          {/* Project 2: FinSight AI */}
          <article className="glass-panel p-6 sm:p-8 lg:p-10 rounded-2xl space-y-5 hover:border-accent/40 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-accent px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30">
                  FLAGSHIP 02 // QUANT ML & REINFORCEMENT LEARNING
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  FinSight AI
                </h3>
                <p className="font-mono text-xs sm:text-sm text-accent font-semibold">
                  Quantitative Intelligence & Autonomous Trading Platform
                </p>
              </div>

              <Link
                to="/projects/finsight"
                className="px-5 py-2.5 rounded-full border border-accent/40 hover:border-accent text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-accent/10 transition-all self-start lg:self-auto"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Combines SARIMAX econometric models, LSTM neural networks, and FinBERT NLP sentiment analysis with an autonomous Markov Decision Process (MDP) stock trading environment using PPO/A2C/DQN agents and SLSQP Markowitz Efficient Frontier optimization.
            </p>

            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {['PyTorch', 'SARIMAX', 'LSTM', 'FinBERT', 'PPO/A2C/DQN', 'Markowitz MPT', 'Monte Carlo', 'SLSQP Optimization'].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* 4. Collaborator & Colleague Testimonials */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <TestimonialsSection />
      </section>

      {/* 5. GitHub Contribution Matrix & Pinned Repos */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <GithubActivitySection />
      </section>
    </div>
  )
}
