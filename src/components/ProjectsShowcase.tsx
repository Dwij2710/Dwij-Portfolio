import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Cpu, ArrowUpRight, CheckCircle2, Terminal, Sparkles, Activity, ShieldCheck, Zap, Layers } from 'lucide-react'
import { projects, ProjectData } from '../lib/data'
import { GithubIcon } from './Icons'
import ProjectModal from './ProjectModal'

export default function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null)

  // Voice AI Project from Banao Technologies / InterviewGod.ai
  const voiceAIProject: ProjectData = {
    id: 'interviewgod-ai',
    name: 'InterviewGod.ai',
    tagline: 'Real-Time Voice AI Agent & LLM Evaluation Governance Pipeline',
    problem: 'Traditional automated interviewing suffers from high conversational latency (>3s), brittle turn-taking, and catastrophic hallucination rates during multilingual candidate evaluations.',
    approach: 'Architected an asynchronous WebRTC voice AI pipeline using LiveKit SFU, GPT-4o, and ElevenLabs/Sarvam AI, combined with a 4-layer deterministic evaluation audit (Scenario Detection, Policy Engine, Governance) and Redis 24-hour session state buffer.',
    architectureOverview:
      'Bidirectional raw Opus audio packet streaming over WebRTC via LiveKit SFU, acoustic VAD filtering, and semantic turn-taking state machine in Python Asyncio, OpenAI GPT-4o streaming completion piped directly to ElevenLabs / Sarvam AI TTS warmup gates, distributed Redis session checkpoint buffer guaranteeing zero-data-loss disconnect recovery, and four-layer deterministic LLM-as-a-Judge answer-validity evaluation pipeline.',
    keyMilestones: [
      'Sub-second (<1s) conversational latency across global connections.',
      '99.8% fail-open validity pass rate on automated interview scoring.',
      '20+ multilingual edge cases resolved with calibrated scoring distributions.',
      'Containerized AWS EC2 deployment with Caddy reverse proxy TLS.',
    ],
    results: [
      'Achieved sub-second (<1s) end-to-end conversational voice latency with semantic turn-taking and acoustic VAD filtering.',
      'Developed an LLM-as-a-Judge answer-validity gate (gpt-4o-mini) resolving denominator inflation bugs and achieving 99.8% fail-open validity resiliency.',
      'Resolved 20+ multilingual (Hindi/English) speech edge cases and brittle speaker-attribution drifts across high-volume screening calls.',
      'Deployed production stacks on AWS EC2 with Docker Compose and automated Caddy reverse proxy TLS termination.',
    ],
    stack: ['LiveKit SFU', 'WebRTC', 'OpenAI GPT-4o', 'ElevenLabs', 'Sarvam AI', 'Redis', 'FastAPI', 'AWS EC2', 'Docker Compose'],
    githubUrl: 'https://github.com/Dwij2710',
    demoUrl: 'https://interviewgod.ai',
  }

  const allShowcaseProjects = [voiceAIProject, ...projects]

  return (
    <section id="projects" className="py-24 sm:py-32 relative border-t border-white/[0.06] overflow-hidden">
      {/* Atmospheric Background Ambient Lighting */}
      <div className="ambient-glow-cyan top-1/3 -left-40 opacity-30" />
      <div className="ambient-glow-violet bottom-20 -right-40 opacity-30" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-violet-glow" />
          <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
            03 // FLAGSHIP CASE STUDIES
          </span>
        </div>

        <div className="max-w-3xl space-y-4 mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            INTELLIGENT SYSTEMS & <br />
            <span className="text-gradient-violet-cyan">PRODUCTION ENGINES.</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed font-normal">
            Deep-dive case studies showcasing quantitative machine learning architectures, real-time WebRTC voice agents, and high-concurrency microservices.
          </p>
        </div>

        {/* Immense Showcase Stages */}
        <div className="space-y-24">
          {allShowcaseProjects.map((p, idx) => {
            const isVoiceAI = p.id === 'interviewgod-ai'
            const isFinSight = p.id === 'finsight-ai'

            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-8 sm:p-12 lg:p-14 rounded-3xl space-y-10 hover:border-violet-glow/30 transition-all duration-500 relative group"
              >
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-8">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-violet-600/20 border border-violet-500/40 text-violet-light tracking-wider uppercase">
                        STAGE 0{idx + 1} // CASE STUDY
                      </span>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        {p.name}
                      </h3>
                    </div>
                    <p className="font-mono text-sm sm:text-base text-cyan-light font-semibold pt-1">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveProject(p)}
                      data-cursor="INSPECT"
                      className="px-5 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all flex items-center gap-2"
                    >
                      <Cpu className="w-4 h-4" />
                      <span>Architecture Breakdown</span>
                    </button>

                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="SOURCE"
                        className="px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="LIVE DEMO"
                        className="px-5 py-3 rounded-full bg-white/[0.06] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4 text-cyan-glow" />
                        <span>Live / Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* 3-Stage Visual Pipeline Flow HUD */}
                <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-glow" />
                      <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                        Execution Pipeline DAG & Architecture Flow
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-cyan-glow font-bold bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                      PRODUCTION READY
                    </span>
                  </div>

                  {isVoiceAI ? (
                    <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                        <p className="text-cyan-glow text-[10px] font-bold uppercase">01 • WebRTC INGESTION</p>
                        <p className="text-white font-bold text-sm">LiveKit SFU + Acoustic VAD</p>
                        <p className="text-secondary text-xs font-sans">
                          Semantic turn-taking and pre-generated audio warmup gates (&lt;1s latency).
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                        <p className="text-violet-light text-[10px] font-bold uppercase">02 • MULTI-TURN SCAFFOLD</p>
                        <p className="text-white font-bold text-sm">Dialog State Machine + GPT-4o</p>
                        <p className="text-secondary text-xs font-sans">
                          Repeat-request & filler-word interceptors with bounded counter-probing.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                        <p className="text-amber-400 text-[10px] font-bold uppercase">03 • EVALUATION AUDIT</p>
                        <p className="text-white font-bold text-sm">LLM-as-a-Judge + 4-Layer Gate</p>
                        <p className="text-secondary text-xs font-sans">
                          Resolves 20+ multilingual edge cases with PROCEED/HOLD/REJECT scoring.
                        </p>
                      </div>
                    </div>
                  ) : isFinSight ? (
                    <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                        <p className="text-cyan-glow text-[10px] font-bold uppercase">01 • MULTI-FACTOR SIGNALS</p>
                        <p className="text-white font-bold text-sm">Market Ingestion & FinBERT</p>
                        <p className="text-secondary text-xs font-sans">
                          S&P 500, VIX, 10-Yr Yields with FinBERT NLP news sentiment embeddings.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                        <p className="text-violet-light text-[10px] font-bold uppercase">02 • RL TRADING AGENTS</p>
                        <p className="text-white font-bold text-sm">SARIMAX + PPO/A2C/DQN</p>
                        <p className="text-secondary text-xs font-sans">
                          Markov Decision Process (MDP) discrete/continuous state optimization.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                        <p className="text-amber-400 text-[10px] font-bold uppercase">03 • RISK OPTIMIZATION</p>
                        <p className="text-white font-bold text-sm">Markowitz Frontier & VaR</p>
                        <p className="text-secondary text-xs font-sans">
                          SLSQP numerical optimization, Monte Carlo, and CVaR downside testing.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                        <p className="text-cyan-glow text-[10px] font-bold uppercase">01 • FEATURE ENGINEERING</p>
                        <p className="text-white font-bold text-sm">Log-Normal & Target Encoding</p>
                        <p className="text-secondary text-xs font-sans">
                          Mitigates heavy-tailed distributions and high-cardinality tech stacks.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                        <p className="text-violet-light text-[10px] font-bold uppercase">02 • TREE BENCHMARK</p>
                        <p className="text-white font-bold text-sm">CatBoost / XGBoost / LightGBM</p>
                        <p className="text-secondary text-xs font-sans">
                          5-Fold Bayesian CV, R² of 0.93 with 22% RMSE reduction over baselines.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                        <p className="text-amber-400 text-[10px] font-bold uppercase">03 • INFERENCE & XAI</p>
                        <p className="text-white font-bold text-sm">FastAPI & SHAP Explainer</p>
                        <p className="text-secondary text-xs font-sans">
                          Sub-40ms P99 latency + Partial Dependence Plots for salary transparency.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Problem vs Approach 2-Column Section */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
                    <p className="font-mono text-xs font-bold text-violet-light uppercase tracking-wider">
                      // The Engineering Challenge
                    </p>
                    <p className="text-base text-secondary leading-relaxed font-normal">
                      {p.problem}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
                    <p className="font-mono text-xs font-bold text-cyan-light uppercase tracking-wider">
                      // The Architectural Solution
                    </p>
                    <p className="text-base text-secondary leading-relaxed font-normal">
                      {p.approach}
                    </p>
                  </div>
                </div>

                {/* Results List */}
                <div className="space-y-3.5">
                  <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    // Quantified Benchmark Results & Deliverables
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {p.results.map((r, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3 hover:border-violet-500/30 transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-glow shrink-0 mt-0.5" />
                        <p className="text-sm text-secondary leading-relaxed font-normal">
                          {r}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <p className="font-mono text-xs text-muted font-bold uppercase tracking-wider">
                    Technologies & Frameworks
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs font-medium text-white px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-violet-500/50 hover:bg-violet-600/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  )
}
