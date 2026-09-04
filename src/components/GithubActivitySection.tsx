import { GitFork, Star, ExternalLink, GitCommit, Code2, Terminal } from 'lucide-react'
import { GithubIcon } from './Icons'
import { profile } from '../lib/data'

interface PinnedRepo {
  name: string
  desc: string
  stars: number
  forks: number
  language: string
  langColor: string
  tags: string[]
  url: string
}

const pinnedRepos: PinnedRepo[] = [
  {
    name: 'interviewgod-voice-agent',
    desc: 'Real-time asynchronous WebRTC voice AI streaming agent with LiveKit SFU, GPT-4o, and Redis 24h state checkpointing.',
    stars: 38,
    forks: 14,
    language: 'Python',
    langColor: '#3572A5',
    tags: ['LiveKit SFU', 'WebRTC', 'FastAPI', 'Redis'],
    url: 'https://github.com/Dwij2710',
  },
  {
    name: 'finsight-ai',
    desc: 'Autonomous Markov Decision Process (MDP) stock trading environment with PPO/DQN agents & Markowitz Efficient Frontier optimization.',
    stars: 42,
    forks: 19,
    language: 'Python',
    langColor: '#3572A5',
    tags: ['PyTorch', 'PPO/A2C', 'SLSQP', 'FinBERT'],
    url: 'https://github.com/Dwij2710',
  },
  {
    name: 'compinsight-ai',
    desc: 'Enterprise ML compensation modeling benchmark (CatBoost, LightGBM, XGBoost) with 0.93 R² and sub-40ms FastAPI microservice.',
    stars: 29,
    forks: 9,
    language: 'Python',
    langColor: '#3572A5',
    tags: ['CatBoost', 'FastAPI', 'SHAP', 'Docker'],
    url: 'https://github.com/Dwij2710',
  },
]

// Generate 26 weeks of contribution blocks
const weeks = Array.from({ length: 26 }, (_, weekIdx) =>
  Array.from({ length: 7 }, (_, dayIdx) => {
    // Generate realistic activity variation
    const seed = (weekIdx * 7 + dayIdx) % 17
    let level = 0
    if (seed === 0 || seed === 3) level = 1
    else if (seed === 5 || seed === 8 || seed === 12) level = 2
    else if (seed === 9 || seed === 14) level = 3
    else if (seed === 16) level = 4
    return level
  })
)

export default function GithubActivitySection() {
  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-accent/20 border-accent/30'
      case 2:
        return 'bg-accent/45 border-accent/50'
      case 3:
        return 'bg-accent/75 border-accent/80'
      case 4:
        return 'bg-accent shadow-[0_0_6px_#00E5C7]'
      default:
        return 'bg-white/[0.03] border-white/5'
    }
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-[10px] font-bold text-accent tracking-[0.2em] uppercase">
              05 // OPEN SOURCE & REPOSITORY ACTIVITY
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            ENGINEERING CONTRIBUTION MATRIX
          </h2>
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-accent font-bold flex items-center gap-1 hover:text-white transition-colors"
        >
          <span>@Dwij2710 on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* GitHub Contribution Heatmap Card */}
      <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <GithubIcon className="w-4 h-4 text-white" />
            <span className="font-bold text-white">1,240+ Contributions in the last year</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-muted">
            <span>Less</span>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-white/[0.04] border border-white/5" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent/20" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent/50" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent/80" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-1 min-w-[540px]">
            {weeks.map((days, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {days.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    title={`Activity Level: ${level}`}
                    className={`w-3 h-3 rounded-sm border transition-colors ${getLevelColor(level)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-secondary">
          <span>Active Streak: 84 days</span>
          <span>Primary Language: Python (82%), C++ (11%), TypeScript (7%)</span>
        </div>
      </div>

      {/* Pinned Repositories Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pinnedRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-accent/40 transition-all space-y-3 flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-accent" />
                  <h3 className="font-mono text-xs font-bold text-white group-hover:text-accent transition-colors truncate max-w-[200px]">
                    {repo.name}
                  </h3>
                </div>
                <ExternalLink className="w-3 h-3 text-muted group-hover:text-accent transition-colors" />
              </div>

              <p className="text-[11px] text-secondary leading-relaxed line-clamp-2">
                {repo.desc}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex flex-wrap gap-1 font-mono text-[9px]">
                {repo.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-muted">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 text-yellow-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-2.5 h-2.5" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
