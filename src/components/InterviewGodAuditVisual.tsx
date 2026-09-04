import { useState } from 'react'
import { ShieldCheck, CheckCircle2, AlertTriangle, Terminal, FileText, Check } from 'lucide-react'

const auditStages = [
  {
    step: '01',
    name: 'Scenario Detection',
    detail: 'Acoustic VAD & bilingual Hindi/English code-switching classifier',
    metric: '18ms latency',
  },
  {
    step: '02',
    name: 'Telemetry & Audio Gating',
    detail: 'Packet jitter buffer calibration & zero-score distribution normalizer',
    metric: '99.8% stability',
  },
  {
    step: '03',
    name: 'Policy Engine & Guardrails',
    detail: 'gpt-4o-mini LLM-as-a-Judge answer validity & hallucination interceptor',
    metric: 'Zero false pass',
  },
  {
    step: '04',
    name: 'Governance & Redis Checkpoint',
    detail: 'Multi-modal weighted scoring with 24h disconnect/reconnect buffer',
    metric: 'Zero state loss',
  },
]

export default function InterviewGodAuditVisual() {
  const [tab, setTab] = useState<'audit' | 'report'>('audit')

  return (
    <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3.5">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider">
              DETERMINISTIC EVALUATION PIPELINE
            </span>
          </div>
          <h4 className="font-display text-sm sm:text-base font-bold text-white">
            {tab === 'audit'
              ? '4-Layer Candidate Call Screening & Governance Audit'
              : 'Production Evaluation Telemetry & Candidate Audit Report'}
          </h4>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/40 border border-white/10 font-mono text-[10px]">
          <button
            onClick={() => setTab('audit')}
            className={`px-3 py-1 rounded-full transition-colors ${
              tab === 'audit'
                ? 'bg-accent text-slate-950 font-bold shadow-sm'
                : 'text-secondary hover:text-white'
            }`}
          >
            4-Layer DAG
          </button>
          <button
            onClick={() => setTab('report')}
            className={`px-3 py-1 rounded-full transition-colors ${
              tab === 'report'
                ? 'bg-accent text-slate-950 font-bold shadow-sm'
                : 'text-secondary hover:text-white'
            }`}
          >
            Telemetry Report
          </button>
        </div>
      </div>

      {tab === 'audit' ? (
        <div className="space-y-3">
          {/* 4 Connected Layer Boxes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 font-mono text-xs">
            {auditStages.map((stage) => (
              <div
                key={stage.step}
                className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-accent font-bold">STAGE {stage.step}</span>
                  <span className="text-[9px] text-muted">{stage.metric}</span>
                </div>
                <h5 className="font-bold text-white text-xs">{stage.name}</h5>
                <p className="text-[10px] text-secondary font-sans leading-relaxed">
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-between text-[11px] font-mono text-white">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>Resolved 20+ bilingual edge cases & denominator inflation bugs</span>
            </span>
            <span className="text-accent font-bold">99.8% Validity Gate</span>
          </div>
        </div>
      ) : (
        /* Telemetry Report Output Preview */
        <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs space-y-2.5">
          <div className="flex items-center justify-between text-[10px] text-muted border-b border-white/5 pb-2">
            <span>SESSION_ID: #IG-8842-WEBRTC</span>
            <span className="text-accent font-bold">OUTCOME: PROCEED (SCORE 94/100)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
            <div>
              <span className="text-muted text-[9px] block">SPEECH LATENCY</span>
              <span className="text-white font-bold">342ms RTT</span>
            </div>
            <div>
              <span className="text-muted text-[9px] block">VAD ACCURACY</span>
              <span className="text-accent font-bold">99.4% (Zero Overlap)</span>
            </div>
            <div>
              <span className="text-muted text-[9px] block">HALLUCINATION GATE</span>
              <span className="text-white font-bold">PASSED (gpt-4o-mini)</span>
            </div>
            <div>
              <span className="text-muted text-[9px] block">REDIS CHECKPOINT</span>
              <span className="text-accent font-bold">SYNCHRONIZED (24h)</span>
            </div>
          </div>

          <p className="text-[11px] text-secondary font-sans pt-1 border-t border-white/5">
            Audit evaluation passed all integrity constraints. Multi-modal signal vector combined Resume (0.25), Screening Call (0.35), and Assessment (0.40) into deterministic recommendation.
          </p>
        </div>
      )}
    </div>
  )
}
