import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Filter, CheckCircle2, Terminal } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import InterviewGodAuditVisual from '../components/InterviewGodAuditVisual'
import FinSightEquityChart from '../components/FinSightEquityChart'
import CompInsightShapPlot from '../components/CompInsightShapPlot'

const categories = ['ALL', 'AI / ML', 'BACKEND', 'SYSTEMS']

export default function ProjectsPage() {
  const [filter, setFilter] = useState('ALL')

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-16 pt-6">
      <PageHeader
        tag="02 // PORTFOLIO DISCOVERY"
        title="ENGINEERING THAT SOLVES"
        highlight="REAL PROBLEMS."
        description="Deep-dive into production voice AI streaming pipelines, quantitative reinforcement learning algorithms, and high-throughput microservices."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-6">
        <span className="font-mono text-xs text-muted flex items-center gap-1.5 mr-2">
          <Filter className="w-3.5 h-3.5 text-accent" />
          <span>FILTER:</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all ${
              filter === cat
                ? 'bg-accent text-slate-950 shadow-md'
                : 'glass-card text-secondary hover:text-white border border-white/10 hover:border-accent/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies: Structured as Problem → Approach → Result (with chart/diagram) → Stack */}
      <div className="space-y-16">
        {/* CASE STUDY 01: InterviewGod.ai */}
        {(filter === 'ALL' || filter === 'AI / ML' || filter === 'SYSTEMS') && (
          <article className="glass-panel p-8 sm:p-12 rounded-3xl space-y-8 border border-white/10 hover:border-accent/30 transition-all">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[10px] font-bold text-accent px-3 py-1 rounded-full bg-accent/15 border border-accent/30">
                    CASE STUDY 01 // REAL-TIME VOICE AI
                  </span>
                  <span className="font-mono text-xs text-muted">2026 • BANAO TECHNOLOGIES</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                  InterviewGod.ai
                </h2>
                <p className="font-mono text-xs sm:text-sm text-accent font-semibold">
                  Real-Time Voice AI Agent & LLM Evaluation Platform
                </p>
              </div>

              <Link
                to="/projects/interviewgod"
                className="px-6 py-3 rounded-full bg-accent text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-accent-hover transition-all self-start lg:self-auto shadow-md"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Story Structure: Problem & Approach */}
            <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider block">
                  // THE PROBLEM
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  Conversational Latency Collisions & Hallucinations
                </h3>
                <p className="text-secondary leading-relaxed font-normal">
                  Standard conversational AI request chains suffer 3–4 second delays, jarring speaker collisions, and STT hallucinations during multilingual screening calls, causing mathematical denominator inflation in skill scoring algorithms.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider block">
                  // THE APPROACH
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  Asynchronous WebRTC & Gated Resiliency
                </h3>
                <p className="text-secondary leading-relaxed font-normal">
                  Constructed an asynchronous streaming pipeline on LiveKit SFU (WebRTC), OpenAI GPT-4o, and ElevenLabs, coupled with pre-generated audio warmup gates, fail-open LLM-as-a-Judge answer evaluation, and Redis Session Checkpointing.
                </p>
              </div>
            </div>

            {/* Visual: 4-Layer Audit Flowchart & Telemetry */}
            <InterviewGodAuditVisual />

            {/* Tech Badges */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {[
                  'LiveKit SFU',
                  'WebRTC',
                  'OpenAI GPT-4o',
                  'ElevenLabs',
                  'Sarvam AI',
                  'Redis Session Checkpointing',
                  'FastAPI',
                  'AWS EC2',
                  'Docker Compose',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-medium text-slate-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[10px] text-muted">&lt;1s Latency Certified</span>
            </div>
          </article>
        )}

        {/* CASE STUDY 02: FinSight AI */}
        {(filter === 'ALL' || filter === 'AI / ML' || filter === 'SYSTEMS') && (
          <article className="glass-panel p-8 sm:p-12 rounded-3xl space-y-8 border border-white/10 hover:border-accent/30 transition-all">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[10px] font-bold text-accent px-3 py-1 rounded-full bg-accent/15 border border-accent/30">
                    CASE STUDY 02 // QUANT ML & REINFORCEMENT LEARNING
                  </span>
                  <span className="font-mono text-xs text-muted">OPEN SOURCE REPOSITORY</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                  FinSight AI
                </h2>
                <p className="font-mono text-xs sm:text-sm text-accent font-semibold">
                  Quantitative Intelligence & Autonomous Trading Platform
                </p>
              </div>

              <Link
                to="/projects/finsight"
                className="px-6 py-3 rounded-full border border-accent/40 hover:border-accent text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-accent/10 transition-all self-start lg:self-auto"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Story Structure: Problem & Approach */}
            <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider block">
                  // THE PROBLEM
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  Non-Stationary Regime Shifts & Market Noise
                </h3>
                <p className="text-secondary leading-relaxed font-normal">
                  Isolated price histories fail to model non-stationary market regimes, macroeconomic shocks, and cross-asset momentum shifts, leading naive algorithmic trading strategies into catastrophic drawdown scenarios.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider block">
                  // THE APPROACH
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  Deep RL Agents + SLSQP Efficient Frontier
                </h3>
                <p className="text-secondary leading-relaxed font-normal">
                  Engineered an autonomous Markov Decision Process (MDP) stock trading environment training PPO, A2C, and DQN agents on multi-factor states, coupled with SARIMAX time-series, FinBERT sentiment, and Markowitz portfolio optimization.
                </p>
              </div>
            </div>

            {/* Embedded Visual: Equity Curve & Efficient Frontier Chart */}
            <FinSightEquityChart />

            {/* Tech Badges */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'PyTorch',
                  'SARIMAX',
                  'LSTM / MLP',
                  'FinBERT',
                  'PPO / A2C / DQN',
                  'Monte Carlo',
                  'SLSQP Optimization',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-medium text-slate-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[10px] text-muted">Sharpe 2.14 • Max Drawdown -4.8%</span>
            </div>
          </article>
        )}

        {/* CASE STUDY 03: CompInsight AI */}
        {(filter === 'ALL' || filter === 'BACKEND' || filter === 'SYSTEMS') && (
          <article className="glass-panel p-8 sm:p-12 rounded-3xl space-y-8 border border-white/10 hover:border-accent/30 transition-all">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[10px] font-bold text-accent px-3 py-1 rounded-full bg-accent/15 border border-accent/30">
                    CASE STUDY 03 // ENTERPRISE ML & FASTAPI
                  </span>
                  <span className="font-mono text-xs text-muted">OPEN SOURCE REPOSITORY</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                  CompInsight AI
                </h2>
                <p className="font-mono text-xs sm:text-sm text-accent font-semibold">
                  Enterprise ML Compensation Modeling & Valuation Engine
                </p>
              </div>

              <Link
                to="/projects/compinsight"
                className="px-6 py-3 rounded-full border border-accent/40 hover:border-accent text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-accent/10 transition-all self-start lg:self-auto"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Story Structure: Problem & Approach */}
            <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider block">
                  // THE PROBLEM
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  Heavy-Tailed Skew & High-Cardinality Variables
                </h3>
                <p className="text-secondary leading-relaxed font-normal">
                  Compensation distributions feature long-tailed non-normal distributions and high-cardinality niche tech stacks that cause standard regression baselines to overfit and produce inaccurate valuations on senior engineering talent.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider block">
                  // THE APPROACH
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  Bayesian Gradient Boosted Trees + SHAP Explainability
                </h3>
                <p className="text-secondary leading-relaxed font-normal">
                  Benchmarked CatBoost, LightGBM, and XGBoost with log-normal target transforms, 5-Fold Bayesian Cross-Validation, and exact SHAP TreeExplainer feature attributions served via a sub-40ms P99 FastAPI REST microservice.
                </p>
              </div>
            </div>

            {/* Embedded Visual: SHAP Feature Importance & Scatter Fit Plot */}
            <CompInsightShapPlot />

            {/* Tech Badges */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'CatBoost',
                  'XGBoost',
                  'LightGBM',
                  'FastAPI',
                  'Pydantic',
                  'SHAP TreeExplainer',
                  'Docker',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-medium text-slate-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[10px] text-muted">0.93 R² • Sub-40ms P99</span>
            </div>
          </article>
        )}
      </div>
    </div>
  )
}
