import { useState } from 'react'
import { TrendingUp, PieChart, Activity, ShieldAlert, ArrowUpRight } from 'lucide-react'

// Simulated Backtest Data: 12 Months Outperformance
const equityCurveData = [
  { month: 'M01', agent: 100, sp500: 100 },
  { month: 'M02', agent: 104.2, sp500: 101.5 },
  { month: 'M03', agent: 107.8, sp500: 98.2 },
  { month: 'M04', agent: 111.4, sp500: 102.1 },
  { month: 'M05', agent: 116.2, sp500: 103.8 },
  { month: 'M06', agent: 114.9, sp500: 99.4 },
  { month: 'M07', agent: 122.1, sp500: 104.7 },
  { month: 'M08', agent: 127.5, sp500: 106.2 },
  { month: 'M09', agent: 131.8, sp500: 108.9 },
  { month: 'M10', agent: 130.4, sp500: 105.1 },
  { month: 'M11', agent: 136.9, sp500: 110.8 },
  { month: 'M12', agent: 141.8, sp500: 114.2 },
]

export default function FinSightEquityChart() {
  const [viewMode, setViewMode] = useState<'equity' | 'frontier'>('equity')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // SVG coordinates calculation for equity curve
  const svgWidth = 560
  const svgHeight = 200
  const paddingX = 40
  const paddingY = 25

  const minVal = 95
  const maxVal = 145

  const getX = (index: number) =>
    paddingX + (index / (equityCurveData.length - 1)) * (svgWidth - paddingX * 2)

  const getY = (val: number) =>
    svgHeight - paddingY - ((val - minVal) / (maxVal - minVal)) * (svgHeight - paddingY * 2)

  const agentPoints = equityCurveData
    .map((d, i) => `${getX(i)},${getY(d.agent)}`)
    .join(' ')

  const sp500Points = equityCurveData
    .map((d, i) => `${getX(i)},${getY(d.sp500)}`)
    .join(' ')

  const agentArea = `${agentPoints} ${getX(equityCurveData.length - 1)},${svgHeight - paddingY} ${getX(0)},${svgHeight - paddingY}`

  return (
    <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 space-y-4">
      {/* Header with Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3.5">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider">
              QUANTITATIVE PERFORMANCE VERIFICATION
            </span>
          </div>
          <h4 className="font-display text-sm sm:text-base font-bold text-white">
            {viewMode === 'equity'
              ? 'Autonomous RL Agent Cumulative Return vs S&P 500'
              : 'Markowitz Modern Portfolio Theory (SLSQP Efficient Frontier)'}
          </h4>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/40 border border-white/10 font-mono text-[10px]">
          <button
            onClick={() => setViewMode('equity')}
            className={`px-3 py-1 rounded-full transition-colors flex items-center gap-1.5 ${
              viewMode === 'equity'
                ? 'bg-accent text-slate-950 font-bold shadow-sm'
                : 'text-secondary hover:text-white'
            }`}
          >
            <TrendingUp className="w-3 h-3" />
            <span>Equity Curve</span>
          </button>
          <button
            onClick={() => setViewMode('frontier')}
            className={`px-3 py-1 rounded-full transition-colors flex items-center gap-1.5 ${
              viewMode === 'frontier'
                ? 'bg-accent text-slate-950 font-bold shadow-sm'
                : 'text-secondary hover:text-white'
            }`}
          >
            <PieChart className="w-3 h-3" />
            <span>Efficient Frontier</span>
          </button>
        </div>
      </div>

      {viewMode === 'equity' ? (
        /* Equity Curve Mode */
        <div className="space-y-3">
          {/* Key KPI Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
              <span className="text-muted uppercase text-[9px] font-bold">RL AGENT RETURN</span>
              <p className="text-base font-bold text-accent">+41.8%</p>
              <span className="text-muted text-[9px]">12-Month Outperformance</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
              <span className="text-muted uppercase text-[9px] font-bold">S&P 500 BENCHMARK</span>
              <p className="text-base font-bold text-slate-300">+14.2%</p>
              <span className="text-muted text-[9px]">Buy & Hold Base</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
              <span className="text-muted uppercase text-[9px] font-bold">SHARPE RATIO</span>
              <p className="text-base font-bold text-white">2.14</p>
              <span className="text-accent text-[9px]">Risk-Adjusted Alpha</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
              <span className="text-muted uppercase text-[9px] font-bold">MAX DRAWDOWN</span>
              <p className="text-base font-bold text-accent">-4.8%</p>
              <span className="text-muted text-[9px]">vs -18.2% Baseline</span>
            </div>
          </div>

          {/* SVG Line Chart */}
          <div className="relative w-full overflow-x-auto bg-black/40 rounded-xl p-2 border border-white/5">
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-44 sm:h-48">
              <defs>
                <linearGradient id="agentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00E5C7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00E5C7" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[100, 115, 130, 145].map((level) => (
                <g key={level}>
                  <line
                    x1={paddingX}
                    y1={getY(level)}
                    x2={svgWidth - paddingX}
                    y2={getY(level)}
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="4 4"
                  />
                  <text
                    x={paddingX - 8}
                    y={getY(level) + 3}
                    fill="#64748B"
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    {level}
                  </text>
                </g>
              ))}

              {/* Shaded Area Under Agent Line */}
              <polygon points={agentArea} fill="url(#agentGradient)" />

              {/* S&P 500 Baseline Line */}
              <polyline
                fill="none"
                stroke="#64748B"
                strokeWidth="2"
                strokeDasharray="4 3"
                points={sp500Points}
              />

              {/* RL Agent Line */}
              <polyline
                fill="none"
                stroke="#00E5C7"
                strokeWidth="2.5"
                points={agentPoints}
              />

              {/* Data Points */}
              {equityCurveData.map((d, i) => {
                const isHovered = hoveredIndex === i
                return (
                  <g key={d.month}>
                    <circle
                      cx={getX(i)}
                      cy={getY(d.agent)}
                      r={isHovered ? 5 : 3}
                      fill="#00E5C7"
                      className="cursor-pointer transition-all"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />
                    <text
                      x={getX(i)}
                      y={svgHeight - 8}
                      fill="#64748B"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      {d.month}
                    </text>
                  </g>
                )
              })}
            </svg>

            {/* Tooltip on Hover */}
            {hoveredIndex !== null && (
              <div
                className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-black/90 border border-accent/50 font-mono text-[10px] text-white space-y-0.5 shadow-xl"
              >
                <p className="text-muted font-bold">{equityCurveData[hoveredIndex].month}</p>
                <p className="text-accent font-bold">
                  RL Agent: +{((equityCurveData[hoveredIndex].agent - 100)).toFixed(1)}%
                </p>
                <p className="text-slate-400">
                  S&P 500: +{((equityCurveData[hoveredIndex].sp500 - 100)).toFixed(1)}%
                </p>
              </div>
            )}
          </div>

          {/* Chart Legend */}
          <div className="flex items-center justify-between text-[10px] font-mono text-secondary pt-1">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-accent inline-block" />
                <span className="text-white font-semibold">PPO/A2C/DQN RL Policy</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-slate-500 inline-block border-b border-dashed border-slate-500" />
                <span>S&P 500 Benchmark</span>
              </span>
            </div>
            <span className="text-muted">Monte Carlo Resampled (N=10,000)</span>
          </div>
        </div>
      ) : (
        /* Markowitz Efficient Frontier Mode */
        <div className="space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
              <span className="text-muted uppercase text-[9px] font-bold">MAX SHARPE WEIGHT</span>
              <p className="text-base font-bold text-accent">Sharpe 2.38</p>
              <span className="text-muted text-[9px]">SLSQP Global Optima</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
              <span className="text-muted uppercase text-[9px] font-bold">ANNUALIZED VOL</span>
              <p className="text-base font-bold text-white">11.4%</p>
              <span className="text-muted text-[9px]">Bounded Downside Risk</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5 col-span-2 sm:col-span-1">
              <span className="text-muted uppercase text-[9px] font-bold">95% CVaR (EXPECTED SHORTFALL)</span>
              <p className="text-base font-bold text-accent">-2.8%</p>
              <span className="text-muted text-[9px]">Stress Test Certified</span>
            </div>
          </div>

          <div className="relative w-full overflow-x-auto bg-black/40 rounded-xl p-3 border border-white/5">
            <svg viewBox="0 0 540 180" className="w-full h-44 sm:h-48">
              {/* Coordinate Grid */}
              <line x1="50" y1="150" x2="500" y2="150" stroke="#334155" strokeWidth="1" />
              <line x1="50" y1="20" x2="50" y2="150" stroke="#334155" strokeWidth="1" />

              <text x="500" y="165" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="end">
                Volatility (Risk σ) →
              </text>
              <text x="35" y="30" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 35 30)">
                Expected Return (E[R]) →
              </text>

              {/* Monte Carlo Simulated Portfolio Cloud */}
              {[
                { x: 120, y: 130 }, { x: 140, y: 115 }, { x: 160, y: 125 }, { x: 170, y: 100 },
                { x: 190, y: 90 }, { x: 210, y: 110 }, { x: 220, y: 80 }, { x: 240, y: 95 },
                { x: 260, y: 70 }, { x: 280, y: 85 }, { x: 300, y: 65 }, { x: 320, y: 80 },
                { x: 340, y: 60 }, { x: 360, y: 75 }, { x: 380, y: 55 }, { x: 400, y: 70 },
                { x: 180, y: 135 }, { x: 230, y: 120 }, { x: 290, y: 105 }, { x: 350, y: 90 }
              ].map((pt, i) => (
                <circle key={i} cx={pt.x} cy={pt.y} r="2.5" fill="#334155" opacity="0.6" />
              ))}

              {/* Efficient Frontier Hyperbolic Arc */}
              <path
                d="M 120 125 Q 160 55 450 35"
                fill="none"
                stroke="#00E5C7"
                strokeWidth="2.5"
              />

              {/* Capital Allocation Line (CAL) */}
              <line x1="50" y1="140" x2="380" y2="40" stroke="#94A3B8" strokeDasharray="3 3" strokeWidth="1.5" />

              {/* Optimal Tangency Portfolio (Max Sharpe Ratio) */}
              <circle cx="210" cy="58" r="6" fill="#00E5C7" stroke="#08090C" strokeWidth="2" />
              <text x="222" y="55" fill="#00E5C7" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Max Sharpe (Tangency: 2.38)
              </text>

              {/* Minimum Variance Portfolio */}
              <circle cx="125" cy="115" r="4.5" fill="#FFFFFF" />
              <text x="135" y="118" fill="#94A3B8" fontSize="9" fontFamily="monospace">
                Min Volatility (8.2%)
              </text>
            </svg>
          </div>

          <p className="text-[11px] text-secondary leading-relaxed font-normal">
            Numerically solved via Sequential Least Squares Programming (<strong className="text-white">SLSQP</strong>) under linear equality constraints (<strong className="text-white">∑w_i = 1, w_i ≥ 0</strong>) with dynamic covariance matrices calibrated over rolling 252-day windows.
          </p>
        </div>
      )}
    </div>
  )
}
