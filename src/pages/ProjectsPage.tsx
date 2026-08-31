import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Cpu, ArrowRight, CheckCircle2, Terminal } from 'lucide-react'
import { projects, ProjectData } from '../lib/data'
import { GithubIcon } from '../components/Icons'
import ProjectModal from '../components/ProjectModal'

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null)

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto w-full px-4 sm:px-6">
      {/* Page Header */}
      <div className="mb-10 border-b border-hairline pb-6">
        <p className="font-mono text-xs text-signal font-bold mb-2 uppercase tracking-widest">// 03. engineering case studies & models</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Machine Learning & Systems
        </h1>
        <p className="font-mono text-sm sm:text-base text-data mt-2 font-semibold">
          Autonomous Trading Environments, Reinforcement Learning, and Enterprise Inference Engines
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-16">
        {projects.map((p, pIdx) => {
          const isFinSight = p.id === 'finsight-ai'

          return (
            <article
              key={p.id}
              className="border border-hairline bg-panel p-6 sm:p-8 lg:p-10 rounded-sm shadow-2xl space-y-8"
            >
              {/* Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-hairline pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-signal font-bold px-3 py-1 bg-signal/15 border border-signal/40 rounded">
                      CASE STUDY 0{pIdx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold tracking-tight">
                      {p.name}
                    </h2>
                  </div>
                  <p className="font-mono text-sm text-data mt-2 font-bold">
                    {p.tagline}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveProject(p)}
                    className="px-5 py-2.5 bg-signal text-base text-xs font-mono font-bold rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2 shadow-md"
                  >
                    <Cpu className="w-4 h-4" />
                    <span>Architecture Deep-Dive</span>
                  </button>

                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 border border-hairline bg-panel2 text-white hover:text-signal text-xs font-mono rounded-sm hover:border-signal/50 transition-colors flex items-center gap-2 font-bold"
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
                      className="px-5 py-2.5 border border-hairline bg-panel2 text-white hover:text-data text-xs font-mono rounded-sm hover:border-data/60 transition-colors flex items-center gap-2 font-bold"
                    >
                      <ExternalLink className="w-4 h-4 text-data" />
                      <span>Live / Docs</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Execution Pipeline DAG HUD */}
              <div className="p-6 bg-panel2 border border-hairline rounded-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-signal" />
                    <span className="font-mono text-xs sm:text-sm text-white font-bold uppercase tracking-wider">
                      Execution Pipeline DAG & Architecture Matrix
                    </span>
                  </div>
                  <span className="font-mono text-xs text-data font-bold bg-data/15 border border-data/30 px-2.5 py-0.5 rounded">
                    PRODUCTION PIPELINE
                  </span>
                </div>

                {isFinSight ? (
                  <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
                    <div className="p-4 bg-panel border border-hairline rounded-sm space-y-2">
                      <p className="text-signal text-xs font-bold uppercase">STAGE 01 • INGESTION & NLP</p>
                      <p className="text-white font-bold text-sm sm:text-base">Market & News Signals</p>
                      <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                        S&P 500, VIX, 10-Yr Yields + FinBERT NLP news sentiment embeddings.
                      </p>
                    </div>

                    <div className="p-4 bg-panel border border-hairline rounded-sm space-y-2">
                      <p className="text-data text-xs font-bold uppercase">STAGE 02 • ML & RL AGENTS</p>
                      <p className="text-white font-bold text-sm sm:text-base">SARIMAX + PPO/A2C/DQN</p>
                      <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                        Markov Decision Process (MDP) discrete/continuous trading policies.
                      </p>
                    </div>

                    <div className="p-4 bg-panel border border-hairline rounded-sm space-y-2">
                      <p className="text-signal text-xs font-bold uppercase">STAGE 03 • RISK OPTIMIZATION</p>
                      <p className="text-white font-bold text-sm sm:text-base">Markowitz Frontier & VaR</p>
                      <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                        SLSQP numerical optimization, Monte Carlo, and CVaR downside testing.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
                    <div className="p-4 bg-panel border border-hairline rounded-sm space-y-2">
                      <p className="text-signal text-xs font-bold uppercase">STAGE 01 • PREPROCESSING</p>
                      <p className="text-white font-bold text-sm sm:text-base">Log-Normal & Target Encoding</p>
                      <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                        Handles heavy-tailed salary distributions & high-cardinality tech stacks.
                      </p>
                    </div>

                    <div className="p-4 bg-panel border border-hairline rounded-sm space-y-2">
                      <p className="text-data text-xs font-bold uppercase">STAGE 02 • MODEL BENCHMARK</p>
                      <p className="text-white font-bold text-sm sm:text-base">CatBoost / XGBoost / LightGBM</p>
                      <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                        5-Fold Bayesian CV, R²: 0.93 with 22% RMSE reduction over baselines.
                      </p>
                    </div>

                    <div className="p-4 bg-panel border border-hairline rounded-sm space-y-2">
                      <p className="text-signal text-xs font-bold uppercase">STAGE 03 • INFERENCE & XAI</p>
                      <p className="text-white font-bold text-sm sm:text-base">FastAPI & SHAP Explainer</p>
                      <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                        Sub-40ms P99 REST microservice + Partial Dependence feature contributions.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Problem vs Approach 2-Column Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-panel2 border border-hairline rounded-sm space-y-3">
                  <p className="font-mono text-xs text-signal font-bold uppercase tracking-wider">
                    // The Engineering Problem
                  </p>
                  <p className="text-white text-base sm:text-lg leading-relaxed font-normal">
                    {p.problem}
                  </p>
                </div>

                <div className="p-6 bg-panel2 border border-hairline rounded-sm space-y-3">
                  <p className="font-mono text-xs text-data font-bold uppercase tracking-wider">
                    // The Analytical Approach
                  </p>
                  <p className="text-white text-base sm:text-lg leading-relaxed font-normal">
                    {p.approach}
                  </p>
                </div>
              </div>

              {/* Quantified Benchmark Deliverables */}
              <div className="space-y-3.5">
                <p className="font-mono text-xs text-signal font-bold uppercase tracking-wider">
                  // Quantified Benchmark Results & Milestones
                </p>
                <div className="grid gap-3.5">
                  {p.results.map((r, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-5 bg-panel2 border border-hairline rounded-sm flex items-start gap-4 hover:border-signal/40 transition-colors shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-signal shrink-0 mt-0.5" />
                      <p className="text-base sm:text-lg text-white leading-relaxed font-normal">
                        {r}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-hairline space-y-2.5">
                <p className="font-mono text-xs text-data font-bold uppercase tracking-wider">Technologies & Libraries Utilized</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-white font-semibold border border-hairline bg-panel2 rounded-sm px-3.5 py-1.5 hover:text-signal hover:border-signal/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {/* Navigation Footer CTAs */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
        <Link
          to="/experience"
          className="px-5 py-2.5 border border-hairline text-white hover:text-signal font-mono text-xs rounded-sm hover:border-signal transition-colors font-semibold"
        >
          <span>← Experience & Logs</span>
        </Link>
        <Link
          to="/contact"
          className="px-5 py-2.5 bg-signal text-base font-mono text-xs font-bold rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2 shadow-md"
        >
          <span>Next: Contact & Coordinates</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
