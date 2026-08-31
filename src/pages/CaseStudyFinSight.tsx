import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, Cpu, ShieldCheck, Database, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from '../components/Icons'

export default function CaseStudyFinSight() {
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
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-light">
            CASE STUDY // QUANTITATIVE INTELLIGENCE & RL
          </span>
          <span className="font-mono text-xs text-muted">OPEN SOURCE REPOSITORY</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
          FinSight AI
        </h1>

        <p className="text-xl sm:text-2xl text-cyan-light font-medium max-w-3xl">
          Quantitative Intelligence, Autonomous Reinforcement Learning & Modern Portfolio Theory Platform
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="https://github.com/Dwij2710"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all shadow-lg"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore Source Code</span>
          </a>
        </div>
      </div>

      {/* 3-Stage Pipeline DAG Cards */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
            EXECUTION PIPELINE
          </span>
          <h2 className="text-3xl font-extrabold text-white">3-STAGE EXECUTION DAG</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass-panel p-7 rounded-3xl space-y-3">
            <span className="font-mono text-[10px] text-cyan-light uppercase font-bold">STAGE 01</span>
            <h3 className="font-mono text-sm font-bold text-white">Multi-Factor Market Ingestion</h3>
            <p className="text-xs text-secondary leading-relaxed">
              S&P 500, VIX, and 10-Yr Treasury Yields combined with FinBERT NLP news sentiment embeddings for cross-asset momentum signals.
            </p>
          </div>

          <div className="glass-panel p-7 rounded-3xl space-y-3">
            <span className="font-mono text-[10px] text-violet-light uppercase font-bold">STAGE 02</span>
            <h3 className="font-mono text-sm font-bold text-white">Autonomous RL Trading Agents</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Markov Decision Process (MDP) stock trading environment training PPO, A2C, and DQN agents on dynamic technical indicators (RSI, MACD, Bollinger).
            </p>
          </div>

          <div className="glass-panel p-7 rounded-3xl space-y-3">
            <span className="font-mono text-[10px] text-amber-400 uppercase font-bold">STAGE 03</span>
            <h3 className="font-mono text-sm font-bold text-white">Markowitz Frontier & VaR</h3>
            <p className="text-xs text-secondary leading-relaxed">
              SLSQP numerical optimization and Monte Carlo simulations generating the Efficient Frontier and modeling downside risk with Historical/Parametric VaR and CVaR.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Approach */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl space-y-4">
          <span className="font-mono text-xs font-bold text-violet-light uppercase tracking-wider block">
            // THE PROBLEM
          </span>
          <h3 className="text-2xl font-bold text-white">Non-Stationary Market Dynamics</h3>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Financial markets move on more than isolated price history—macroeconomic regime shifts, news sentiment, and non-linear momentum dynamics interact in complex, non-stationary ways that standard technical indicators fail to capture.
          </p>
        </div>

        <div className="glass-panel p-8 sm:p-10 rounded-3xl space-y-4">
          <span className="font-mono text-xs font-bold text-cyan-light uppercase tracking-wider block">
            // THE APPROACH
          </span>
          <h3 className="text-2xl font-bold text-white">Deep RL & Modern Portfolio Theory</h3>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Engineered time-series models combining SARIMAX and regularized LSTM/MLP neural networks with FinBERT sentiment analysis, wrapped in an autonomous Markov Decision Process (MDP) for policy learning and Markowitz MPT asset allocation.
          </p>
        </div>
      </div>

      {/* Benchmark Deliverables */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl space-y-6">
        <span className="font-mono text-xs font-bold text-cyan-light tracking-[0.25em] uppercase">
          QUANTIFIED BENCHMARK RESULTS
        </span>
        <div className="grid gap-4">
          {[
            'Built an autonomous Markov Decision Process (MDP) stock trading environment supporting discrete and continuous action spaces; trained PPO, A2C, and DQN agents on dynamic multi-factor state spaces.',
            'Implemented Markowitz Modern Portfolio Theory (MPT) using SLSQP numerical optimization and Monte Carlo simulations to generate the Efficient Frontier (maximizing Sharpe Ratio).',
            'Modeled downside risk exposure with Historical/Parametric VaR, CVaR (Expected Shortfall), and macroeconomic stress testing scenarios.',
          ].map((r, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-glow shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-secondary leading-relaxed">{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Navigation */}
      <div className="pt-8 flex items-center justify-between border-t border-white/10">
        <Link to="/projects/interviewgod" className="font-mono text-xs text-secondary hover:text-white transition-colors">
          ← Previous: InterviewGod.ai
        </Link>
        <Link
          to="/projects/compinsight"
          className="font-mono text-xs font-bold text-cyan-light hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>Next Project: CompInsight AI</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
