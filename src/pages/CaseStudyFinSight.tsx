import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, Cpu, ShieldCheck, Database, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import FinSightEquityChart from '../components/FinSightEquityChart'

export default function CaseStudyFinSight() {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-16 pt-28 sm:pt-36">
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
          <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent">
            CASE STUDY // QUANTITATIVE INTELLIGENCE & RL
          </span>
          <span className="font-mono text-xs text-muted">OPEN SOURCE REPOSITORY</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
          FinSight AI
        </h1>

        <p className="font-display text-xl sm:text-2xl text-slate-200 font-medium max-w-3xl">
          Quantitative Intelligence, Autonomous Reinforcement Learning & Modern Portfolio Theory Platform
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="https://github.com/Dwij2710"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-accent text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,199,0.4)] transition-all shadow-lg"
          >
            <GithubIcon className="w-4 h-4 text-slate-950" />
            <span>Explore Source Code</span>
          </a>
        </div>
      </div>

      {/* Embedded Interactive Chart: Equity Curve & Efficient Frontier */}
      <FinSightEquityChart />

      {/* 3-Stage Pipeline DAG Cards */}
      <section className="space-y-6">
        <div className="space-y-1 border-b border-white/10 pb-4">
          <span className="font-mono text-xs font-bold text-accent tracking-[0.25em] uppercase">
            EXECUTION PIPELINE
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            3-STAGE EXECUTION DAG
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass-panel p-7 rounded-3xl space-y-3 border border-white/10">
            <span className="font-mono text-[10px] text-accent uppercase font-bold">STAGE 01</span>
            <h3 className="font-display text-sm font-bold text-white">Multi-Factor Market Ingestion</h3>
            <p className="text-xs text-secondary leading-relaxed font-normal">
              S&P 500, VIX, and 10-Yr Treasury Yields combined with FinBERT NLP news sentiment embeddings for cross-asset momentum signals.
            </p>
          </div>

          <div className="glass-panel p-7 rounded-3xl space-y-3 border border-white/10">
            <span className="font-mono text-[10px] text-accent uppercase font-bold">STAGE 02</span>
            <h3 className="font-display text-sm font-bold text-white">Autonomous RL Trading Agents</h3>
            <p className="text-xs text-secondary leading-relaxed font-normal">
              Markov Decision Process (MDP) stock trading environment training PPO, A2C, and DQN agents on dynamic technical indicators (RSI, MACD, Bollinger).
            </p>
          </div>

          <div className="glass-panel p-7 rounded-3xl space-y-3 border border-white/10">
            <span className="font-mono text-[10px] text-accent uppercase font-bold">STAGE 03</span>
            <h3 className="font-display text-sm font-bold text-white">Markowitz Frontier & VaR</h3>
            <p className="text-xs text-secondary leading-relaxed font-normal">
              SLSQP numerical optimization and Monte Carlo simulations generating the Efficient Frontier and modeling downside risk with Historical/Parametric VaR and CVaR.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Approach */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl space-y-3 border border-white/10">
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
            // THE PROBLEM
          </span>
          <h3 className="font-display text-2xl font-bold text-white">Non-Stationary Market Dynamics</h3>
          <p className="text-secondary text-sm sm:text-base leading-relaxed font-normal">
            Financial markets move on more than isolated price history—macroeconomic regime shifts, news sentiment, and non-linear momentum dynamics interact in complex, non-stationary ways that standard technical indicators fail to capture.
          </p>
        </div>

        <div className="glass-panel p-8 sm:p-10 rounded-3xl space-y-3 border border-white/10">
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
            // THE APPROACH
          </span>
          <h3 className="font-display text-2xl font-bold text-white">Deep RL & Modern Portfolio Theory</h3>
          <p className="text-secondary text-sm sm:text-base leading-relaxed font-normal">
            Engineered time-series models combining SARIMAX and regularized LSTM/MLP neural networks with FinBERT sentiment analysis, wrapped in an autonomous Markov Decision Process (MDP) for policy learning and Markowitz MPT asset allocation.
          </p>
        </div>
      </div>

      {/* Next Navigation */}
      <div className="pt-8 flex items-center justify-between border-t border-white/10">
        <Link to="/projects/interviewgod" className="font-mono text-xs text-secondary hover:text-white transition-colors">
          ← Previous: InterviewGod.ai
        </Link>
        <Link
          to="/projects/compinsight"
          className="font-mono text-xs font-bold text-accent hover:underline transition-colors flex items-center gap-1.5"
        >
          <span>Next Project: CompInsight AI</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
