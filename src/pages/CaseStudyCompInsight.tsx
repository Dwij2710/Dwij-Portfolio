import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, Cpu, CheckCircle2, Zap, Terminal } from 'lucide-react'
import { GithubIcon } from '../components/Icons'

export default function CaseStudyCompInsight() {
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
            CASE STUDY // MACHINE LEARNING & FASTAPI
          </span>
          <span className="font-mono text-xs text-muted">OPEN SOURCE REPOSITORY</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
          CompInsight AI
        </h1>

        <p className="text-xl sm:text-2xl text-cyan-light font-medium max-w-3xl">
          Enterprise Machine Learning Compensation Modeling & Valuation Engine
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
          <span className="font-mono text-xs font-bold text-cyan-light tracking-[0.25em] uppercase">
            EXECUTION PIPELINE
          </span>
          <h2 className="text-3xl font-extrabold text-white">3-STAGE ML INFERENCE DAG</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass-panel p-7 rounded-3xl space-y-3">
            <span className="font-mono text-[10px] text-cyan-light uppercase font-bold">STAGE 01</span>
            <h3 className="font-mono text-sm font-bold text-white">Log-Normal & Target Encoding</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Engineered robust preprocessing pipelines for skewed compensation distributions and high-cardinality categorical variables.
            </p>
          </div>

          <div className="glass-panel p-7 rounded-3xl space-y-3">
            <span className="font-mono text-[10px] text-violet-light uppercase font-bold">STAGE 02</span>
            <h3 className="font-mono text-sm font-bold text-white">Gradient Boosted Tree Benchmark</h3>
            <p className="text-xs text-secondary leading-relaxed">
              5-Fold Bayesian Cross-Validation across CatBoost, XGBoost, and LightGBM regressors achieving R² of 0.93 and 22% RMSE reduction.
            </p>
          </div>

          <div className="glass-panel p-7 rounded-3xl space-y-3">
            <span className="font-mono text-[10px] text-amber-400 uppercase font-bold">STAGE 03</span>
            <h3 className="font-mono text-sm font-bold text-white">FastAPI REST & SHAP Explainer</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Sub-40ms P99 inference microservice coupled with SHAP TreeExplainer Partial Dependence Plots for feature contribution transparency.
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
          <h3 className="text-2xl font-bold text-white">High Cardinality & Non-Linear Skew</h3>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Tech compensation data exhibits heavy-tailed non-normal distributions, extreme high-cardinality tech stacks, and non-linear interactions across geographical tiers that skew standard linear estimation models.
          </p>
        </div>

        <div className="glass-panel p-8 sm:p-10 rounded-3xl space-y-4">
          <span className="font-mono text-xs font-bold text-cyan-light uppercase tracking-wider block">
            // THE APPROACH
          </span>
          <h3 className="text-2xl font-bold text-white">CatBoost + SHAP Explainability</h3>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Trained gradient-boosted decision trees with Bayesian hyperparameter tuning, wrapped in a high-throughput FastAPI REST backend with Pydantic validation and SHAP TreeExplainer for feature importance visualization.
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
            'Achieved an R² score of 0.93 and a 22% reduction in RMSE over baseline models.',
            'Integrated SHAP (SHapley Additive exPlanations) TreeExplainer and Partial Dependence Plots to explain non-linear feature interactions with interactive dashboards.',
            'Built a sub-40ms P99 latency FastAPI microservice for real-time compensation inference and deployed to Docker containers.',
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
        <Link to="/projects/finsight" className="font-mono text-xs text-secondary hover:text-white transition-colors">
          ← Previous: FinSight AI
        </Link>
        <Link
          to="/projects/interviewgod"
          className="font-mono text-xs font-bold text-cyan-light hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>Next Project: InterviewGod.ai</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
