import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Cpu, Terminal, CheckCircle2, Filter } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { projects } from '../lib/data'

interface ExtendedProject {
  id: string
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  stack: string[]
  metrics: { label: string; value: string }[]
  demoUrl?: string
  githubUrl?: string
}

const allProjects: ExtendedProject[] = [
  {
    id: 'interviewgod-ai',
    slug: '/projects/interviewgod',
    name: 'InterviewGod.ai',
    category: 'AI / ML',
    tagline: 'Real-Time Voice AI Agent & LLM Evaluation Platform',
    description: 'Production asynchronous WebRTC voice AI pipeline using LiveKit SFU, GPT-4o, and ElevenLabs/Sarvam AI, combined with a 4-layer deterministic evaluation audit (Scenario Detection, Policy Engine, Governance) and Redis 24-hour session state buffer.',
    stack: ['LiveKit SFU', 'WebRTC', 'OpenAI GPT-4o', 'ElevenLabs', 'Sarvam AI', 'Redis', 'FastAPI', 'AWS EC2', 'Docker Compose'],
    metrics: [
      { label: 'Conversational Latency', value: '<1s' },
      { label: 'Judge Pass Rate', value: '99.8%' },
      { label: 'State Buffer', value: '24h' },
      { label: 'Multilingual Edge Cases', value: '20+' },
    ],
    demoUrl: 'https://interviewgod.ai',
    githubUrl: 'https://github.com/Dwij2710',
  },
  {
    id: 'finsight-ai',
    slug: '/projects/finsight',
    name: 'FinSight AI',
    category: 'AI / ML',
    tagline: 'Quantitative Intelligence & Autonomous Trading Platform',
    description: 'Autonomous Markov Decision Process (MDP) stock trading environment using PPO/A2C/DQN reinforcement learning agents, SARIMAX & LSTM time-series forecasting, FinBERT NLP sentiment, and Markowitz Efficient Frontier numerical optimization.',
    stack: ['Python', 'PyTorch', 'SARIMAX', 'LSTM / MLP', 'FinBERT', 'PPO / A2C / DQN', 'Monte Carlo', 'SLSQP Optimization'],
    metrics: [
      { label: 'Agent Policies', value: 'PPO/DQN' },
      { label: 'Risk Modeling', value: 'VaR / CVaR' },
      { label: 'Optimization', value: 'SLSQP' },
    ],
    demoUrl: 'https://github.com/Dwij2710',
    githubUrl: 'https://github.com/Dwij2710',
  },
  {
    id: 'compinsight-ai',
    slug: '/projects/compinsight',
    name: 'CompInsight AI',
    category: 'BACKEND',
    tagline: 'Enterprise ML Compensation Modeling & Valuation Engine',
    description: 'Enterprise machine learning system benchmarking CatBoost, XGBoost, and LightGBM regressors with 5-Fold Bayesian Cross-Validation, achieving R² of 0.93 and 22% RMSE reduction, served via a sub-40ms P99 FastAPI REST microservice with SHAP TreeExplainer.',
    stack: ['Python', 'CatBoost', 'XGBoost', 'LightGBM', 'FastAPI', 'Scikit-learn', 'SHAP Explainer', 'Docker'],
    metrics: [
      { label: 'Model Fit R²', value: '0.93' },
      { label: 'RMSE Reduction', value: '22%' },
      { label: 'P99 Latency', value: '<40ms' },
    ],
    demoUrl: 'https://github.com/Dwij2710',
    githubUrl: 'https://github.com/Dwij2710',
  },
]

const categories = ['ALL', 'AI / ML', 'BACKEND', 'SYSTEMS', 'FULL-STACK']

export default function ProjectsPage() {
  const [filter, setFilter] = useState('ALL')

  const filteredProjects = filter === 'ALL'
    ? allProjects
    : allProjects.filter((p) => p.category === filter || filter === 'SYSTEMS' || filter === 'FULL-STACK')

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 space-y-16">
      <PageHeader
        tag="02 // PORTFOLIO DISCOVERY"
        title="ENGINEERING THAT SOLVES"
        highlight="REAL PROBLEMS."
        description="Deep-dive into production voice AI streaming pipelines, quantitative reinforcement learning algorithms, and high-throughput microservices."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-6">
        <span className="font-mono text-xs text-muted flex items-center gap-1.5 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>FILTER:</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold transition-all ${
              filter === cat
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                : 'glass-card text-secondary hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="space-y-12">
        {filteredProjects.map((p, idx) => (
          <article
            key={p.id}
            className="glass-panel p-8 sm:p-12 rounded-3xl space-y-8 hover:border-violet-glow/40 transition-all group"
          >
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-violet-light px-3 py-1 rounded-full bg-violet-600/20 border border-violet-500/30">
                    CASE STUDY 0{idx + 1} // {p.category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                    {p.name}
                  </h2>
                </div>
                <p className="font-mono text-sm text-cyan-light font-semibold">
                  {p.tagline}
                </p>
              </div>

              {/* Action */}
              <Link
                to={p.slug}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all self-start lg:self-auto"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Description */}
            <p className="text-base text-secondary leading-relaxed font-normal">
              {p.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
              {p.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-muted text-[10px] uppercase font-bold block">{m.label}</span>
                  <span className="text-white font-bold text-lg block">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Tech chips */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-medium text-white px-3 py-1 rounded-full bg-white/[0.04] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
