import { motion } from 'framer-motion'
import Sparkline from './Sparkline'

const metricsData = [
  {
    value: '<1s',
    label: 'CONVERSATIONAL LATENCY',
    detail: 'LiveKit SFU (WebRTC) + Acoustic VAD Pipeline',
    sparkline: [750, 600, 520, 480, 410, 380, 320, 280, 240, 210],
    color: 'data' as const,
  },
  {
    value: '0.93',
    label: 'MODEL FIT R² SCORE',
    detail: '22% RMSE reduction over baseline regressors',
    sparkline: [0.72, 0.78, 0.81, 0.85, 0.88, 0.90, 0.91, 0.92, 0.93, 0.93],
    color: 'signal' as const,
  },
  {
    value: '20+',
    label: 'EDGE CASES RESOLVED',
    detail: 'In multilingual (Hindi/English) speech eval audit',
    sparkline: [2, 4, 7, 10, 13, 16, 18, 19, 21, 23],
    color: 'data' as const,
  },
  {
    value: '24h',
    label: 'SESSION RECOVERY BUFFER',
    detail: 'Zero-data-loss Redis session checkpointing',
    sparkline: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
    color: 'signal' as const,
  },
  {
    value: '99.8%',
    label: 'EVALUATION PASS RATE',
    detail: 'LLM-as-a-Judge fail-open validity gating',
    sparkline: [95, 96.2, 97, 98.1, 98.8, 99.2, 99.5, 99.7, 99.8, 99.8],
    color: 'data' as const,
  },
]

export default function EngineeringMetrics() {
  return (
    <section className="py-20 relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-cyan-glow" />
          <span className="font-mono text-xs font-bold text-cyan-light tracking-[0.25em] uppercase">
            02 // QUANTIFIED ENGINEERING BENCHMARKS
          </span>
        </div>

        {/* Large Scale Metric Typography Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {metricsData.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              data-cursor="METRIC"
              className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-6 hover:border-violet-glow/50 transition-all duration-300"
            >
              <div>
                <span className="font-mono text-[10px] font-bold text-muted uppercase tracking-widest block mb-2">
                  METRIC 0{idx + 1}
                </span>
                <p className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight leading-none">
                  {m.value}
                </p>
                <p className="font-mono text-xs font-bold text-cyan-light tracking-wider mt-3 uppercase">
                  {m.label}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <p className="text-xs text-secondary leading-snug max-w-[130px] font-normal">
                  {m.detail}
                </p>
                <Sparkline data={m.sparkline} color={m.color} width={50} height={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
