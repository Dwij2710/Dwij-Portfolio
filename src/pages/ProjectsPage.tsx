import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Cpu, ArrowRight, CheckCircle2, Terminal } from 'lucide-react'
import { projects, ProjectData } from '../lib/data'
import { GithubIcon } from '../components/Icons'
import ProjectModal from '../components/ProjectModal'

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null)

  return (
    <div className="py-8 md:py-12 max-w-container mx-auto">
      {/* Page Header */}
      <div className="mb-10 border-b border-hairline pb-6">
        <p className="font-mono text-xs text-faint mb-2">// 03. engineering case studies & models</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
          Machine Learning & Systems
        </h1>
        <p className="font-mono text-sm text-data mt-2">
          Autonomous Trading Environments, Reinforcement Learning, and Enterprise Inference Engines
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-14">
        {projects.map((p, pIdx) => {
          const isFinSight = p.id === 'finsight-ai'

          return (
            <article
              key={p.id}
              className="group border border-hairline bg-panel p-6 sm:p-8 lg:p-9 rounded-sm hover:border-signal/40 transition-all shadow-lg space-y-8"
            >
              {/* Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-hairline pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-signal font-bold px-2.5 py-0.5 bg-signal/10 rounded">
                      CASE STUDY 0{pIdx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-ink font-medium tracking-tight">
                      {p.name}
                    </h2>
                  </div>
                  <p className="font-mono text-xs text-data mt-2">
                    {p.tagline}
                  </p>
                </div>

                {/* Quick Action Group */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => setActiveProject(p)}
                    className="px-4 py-2.5 bg-signal text-base text-xs font-mono font-semibold rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2 shadow-sm"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Architecture Deep-Dive</span>
                  </button>

                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 border border-hairline bg-panel2 text-muted hover:text-ink text-xs font-mono rounded-sm hover:border-muted transition-colors flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}

                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 border border-hairline bg-panel2 text-muted hover:text-data text-xs font-mono rounded-sm hover:border-data/60 transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live / Docs</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Interactive Architecture Flow Diagram HUD */}
              <div className="p-5 sm:p-6 bg-panel2 border border-hairline rounded-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-signal" />
                    <span className="font-mono text-xs text-ink font-medium uppercase tracking-wider">
                      Execution Pipeline DAG & Architecture Matrix
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-data bg-data/10 px-2 py-0.5 rounded">
                    PRODUCTION PIPELINE
                  </span>
                </div>

                {isFinSight ? (
                  <div className="grid sm:grid-cols-3 gap-3 font-mono text-xs">
                    <div className="p-3.5 bg-panel border border-hairline rounded-sm space-y-1.5">
                      <p className="text-faint text-[10px]">STAGE 01 • INGESTION & NLP</p>
                      <p className="text-ink font-medium text-sm">Market & News Signals</p>
                      <p className="text-muted text-[11px] font-sans">
                        S&P 500, VIX, 10-Yr Yields + FinBERT NLP news sentiment embeddings.
                      </p>
                    </div>

                    <div className="p-3.5 bg-panel border border-hairline rounded-sm space-y-1.5">
                      <p className="text-faint text-[10px]">STAGE 02 • ML & RL AGENTS</p>
                      <p className="text-signal font-medium text-sm">SARIMAX + PPO/A2C/DQN</p>
                      <p className="text-muted text-[11px] font-sans">
                        Markov Decision Process (MDP) discrete/continuous trading policies.
                      </p>
                    </div>

                    <div className="p-3.5 bg-panel border border-hairline rounded-sm space-y-1.5">
                      <p className="text-faint text-[10px]">STAGE 03 • RISK OPTIMIZATION</p>
                      <p className="text-data font-medium text-sm">Markowitz Frontier & VaR</p>
                      <p className="text-muted text-[11px] font-sans">
                        SLSQP numerical optimization, Monte Carlo, and CVaR downside testing.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-3 gap-3 font-mono text-xs">
                    <div className="p-3.5 bg-panel border border-hairline rounded-sm space-y-1.5">
                      <p className="text-faint text-[10px]">STAGE 01 • PREPROCESSING</p>
                      <p className="text-ink font-medium text-sm">Log-Normal & Target Encoding</p>
                      <p className="text-muted text-[11px] font-sans">
                        Handles heavy-tailed salary distributions & high-cardinality tech stacks.
                      </p>
                    </div>

                    <div className="p-3.5 bg-panel border border-hairline rounded-sm space-y-1.5">
                      <p className="text-faint text-[10px]">STAGE 02 • MODEL BENCHMARK</p>
                      <p className="text-data font-medium text-sm">CatBoost / XGBoost / LightGBM</p>
                      <p className="text-muted text-[11px] font-sans">
                        5-Fold Bayesian CV, R²: 0.93 with 22% RMSE reduction over baselines.
                      </p>
                    </div>

                    <div className="p-3.5 bg-panel border border-hairline rounded-sm space-y-1.5">
                      <p className="text-faint text-[10px]">STAGE 03 • INFERENCE & XAI</p>
                      <p className="text-signal font-medium text-sm">FastAPI & SHAP Explainer</p>
                      <p className="text-muted text-[11px] font-sans">
                        Sub-40ms P99 REST microservice + Partial Dependence feature contributions.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Problem vs Approach 2-Column Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 sm:p-6 bg-panel2 border border-hairline rounded-sm space-y-2">
                  <p className="font-mono text-xs text-signal font-semibold uppercase tracking-wider">
                    // The Engineering Problem
                  </p>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {p.problem}
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-panel2 border border-hairline rounded-sm space-y-2">
                  <p className="font-mono text-xs text-data font-semibold uppercase tracking-wider">
                    // The Analytical Approach
                  </p>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {p.approach}
                  </p>
                </div>
              </div>

              {/* Quantified Benchmark Deliverables */}
              <div className="space-y-3">
                <p className="font-mono text-xs text-faint uppercase tracking-wider">
                  // Quantified Benchmark Results & Milestones
                </p>
                <div className="grid gap-3">
                  {p.results.map((r, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-4 bg-panel2 border border-hairline rounded-sm flex items-start gap-3 hover:border-muted transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-ink leading-relaxed font-sans">
                        {r}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-hairline space-y-2">
                <p className="font-mono text-[10px] text-faint uppercase">Technologies & Libraries Utilized</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted border border-hairline bg-panel2 rounded-sm px-3 py-1 hover:text-ink hover:border-signal/50 transition-colors"
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
          className="px-5 py-2.5 border border-hairline text-muted hover:text-ink font-mono text-xs rounded-sm hover:border-faint transition-colors"
        >
          <span>← Experience & Logs</span>
        </Link>
        <Link
          to="/contact"
          className="px-5 py-2.5 bg-signal text-base font-mono text-xs font-semibold rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2"
        >
          <span>Next: Contact & Coordinates</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
