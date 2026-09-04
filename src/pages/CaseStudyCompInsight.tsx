import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, Cpu, CheckCircle2, Zap, Terminal } from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import CompInsightShapPlot from '../components/CompInsightShapPlot'

export default function CaseStudyCompInsight() {
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
            CASE STUDY // MACHINE LEARNING & FASTAPI
          </span>
          <span className="font-mono text-xs text-muted">OPEN SOURCE REPOSITORY</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
          CompInsight AI
        </h1>

        <p className="font-display text-xl sm:text-2xl text-slate-200 font-medium max-w-3xl">
          Enterprise Machine Learning Compensation Modeling & Valuation Engine
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

      {/* Embedded Interactive Visual: SHAP Feature Importance & Scatter Fit Plot */}
      <CompInsightShapPlot />

      {/* 3-Stage Pipeline DAG Cards */}
      <section className="space-y-6">
        <div className="space-y-1 border-b border-white/10 pb-4">
          <span className="font-mono text-xs font-bold text-accent tracking-[0.25em] uppercase">
            EXECUTION PIPELINE
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            3-STAGE ML INFERENCE DAG
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass-panel p-7 rounded-3xl space-y-3 border border-white/10">
            <span className="font-mono text-[10px] text-accent uppercase font-bold">STAGE 01</span>
            <h3 className="font-display text-sm font-bold text-white">Log-Normal & Target Encoding</h3>
            <p className="text-xs text-secondary leading-relaxed font-normal">
              Engineered robust preprocessing pipelines for skewed compensation distributions and high-cardinality categorical variables.
            </p>
          </div>

          <div className="glass-panel p-7 rounded-3xl space-y-3 border border-white/10">
            <span className="font-mono text-[10px] text-accent uppercase font-bold">STAGE 02</span>
            <h3 className="font-display text-sm font-bold text-white">Gradient Boosted Tree Benchmark</h3>
            <p className="text-xs text-secondary leading-relaxed font-normal">
              5-Fold Bayesian Cross-Validation across CatBoost, XGBoost, and LightGBM regressors achieving R² of 0.93 and 22% RMSE reduction.
            </p>
          </div>

          <div className="glass-panel p-7 rounded-3xl space-y-3 border border-white/10">
            <span className="font-mono text-[10px] text-accent uppercase font-bold">STAGE 03</span>
            <h3 className="font-display text-sm font-bold text-white">FastAPI REST & SHAP Explainer</h3>
            <p className="text-xs text-secondary leading-relaxed font-normal">
              Sub-40ms P99 inference microservice coupled with SHAP TreeExplainer Partial Dependence Plots for feature contribution transparency.
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
          <h3 className="font-display text-2xl font-bold text-white">High Cardinality & Non-Linear Skew</h3>
          <p className="text-secondary text-sm sm:text-base leading-relaxed font-normal">
            Tech compensation data exhibits heavy-tailed non-normal distributions, extreme high-cardinality tech stacks, and non-linear interactions across geographical tiers that skew standard linear estimation models.
          </p>
        </div>

        <div className="glass-panel p-8 sm:p-10 rounded-3xl space-y-3 border border-white/10">
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
            // THE APPROACH
          </span>
          <h3 className="font-display text-2xl font-bold text-white">CatBoost + SHAP Explainability</h3>
          <p className="text-secondary text-sm sm:text-base leading-relaxed font-normal">
            Trained gradient-boosted decision trees with Bayesian hyperparameter tuning, wrapped in a high-throughput FastAPI REST backend with Pydantic validation and SHAP TreeExplainer for feature importance visualization.
          </p>
        </div>
      </div>

      {/* Next Navigation */}
      <div className="pt-8 flex items-center justify-between border-t border-white/10">
        <Link to="/projects/finsight" className="font-mono text-xs text-secondary hover:text-white transition-colors">
          ← Previous: FinSight AI
        </Link>
        <Link
          to="/projects/interviewgod"
          className="font-mono text-xs font-bold text-accent hover:underline transition-colors flex items-center gap-1.5"
        >
          <span>Next Project: InterviewGod.ai</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
