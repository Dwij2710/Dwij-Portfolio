import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Server, Activity, ShieldCheck, Database, Cloud, Zap, CheckCircle2, Waves, GitBranch, Terminal } from 'lucide-react'
import { experience, metrics } from '../lib/data'

export default function ExperiencePage() {
  const job = experience[0]

  const pillars = [
    {
      id: 'voice-agent',
      icon: Waves,
      accent: 'signal',
      tag: 'SUB-SECOND LATENCY',
      title: 'Real-Time Voice AI Agent & WebRTC Pipeline',
      subtitle: 'LiveKit SFU (WebRTC) • GPT-4o • ElevenLabs • Sarvam AI',
      points: [
        'Architected an asynchronous event-driven real-time voice AI pipeline leveraging LiveKit SFU (WebRTC), OpenAI GPT-4o, ElevenLabs, and Sarvam AI, implementing semantic turn-taking, acoustic VAD filtering, and pre-generated audio warmup gates to achieve sub-second conversational latency.',
        'Engineered an adaptive multi-turn dialog state machine with heuristic repeat-request and filler-word interceptors, enforcing bounded per-topic counter-probing and contextual conversational scaffolding to eliminate topic drift and prevent task stalls.',
      ],
      stack: ['LiveKit SFU', 'WebRTC', 'OpenAI GPT-4o', 'ElevenLabs', 'Sarvam AI', 'Acoustic VAD', 'Turn-Taking'],
    },
    {
      id: 'evaluation-governance',
      icon: ShieldCheck,
      accent: 'data',
      tag: 'FAIL-OPEN RESILIENCY',
      title: 'LLM-as-a-Judge Evaluation & 4-Layer Governance',
      subtitle: 'Deterministic Call Screening & Multilingual Quality Assurance',
      points: [
        'Developed an LLM-as-a-Judge answer-validity gate (gpt-4o-mini) with fail-open resiliency to intercept STT hallucinations and non-answers, resolving mathematical denominator inflation bugs in weighted skill aggregation algorithms by penalizing invalid responses and normalizing zero-score distributions.',
        'Audited a four-layer deterministic candidate evaluation and call-screening pipeline (Scenario Detection, Telemetry, Semantic Intelligence, Policy Engine, Governance), resolving 20+ edge cases across multilingual (Hindi/English) speech pipelines, brittle speaker-attribution logic, telemetry constant drifts, and silent fallbacks.',
      ],
      stack: ['gpt-4o-mini', 'LLM-as-a-Judge', 'Bilingual Hindi/English', 'Policy Governance', 'Deterministic Scoring'],
    },
    {
      id: 'state-decision',
      icon: Database,
      accent: 'signal',
      tag: 'ZERO DATA LOSS',
      title: 'Distributed Session Checkpointing & Hiring Decision Engine',
      subtitle: 'Redis 24h Buffer • Multi-Modal Signal Weighted Aggregation',
      points: [
        'Engineered a distributed session state and checkpointing architecture using Redis with 24-hour handoff buffers, enabling zero-data-loss disconnect/reconnect recovery for active sessions alongside bidirectional webhook synchronization to core microservices.',
        'Constructed a multi-modal weighted aggregation engine consolidating Resume, Screening Call, Assessment, Technical Interview, and Integrity signals into automated PROCEED / HOLD / REJECT hiring recommendations with calibrated confidence scoring.',
      ],
      stack: ['Redis Checkpointing', '24h State Buffer', 'Webhooks', 'Multi-Modal Aggregation', 'Confidence Calibration'],
    },
    {
      id: 'cloud-infrastructure',
      icon: Cloud,
      accent: 'data',
      tag: 'PRODUCTION CLOUD',
      title: 'AWS EC2 Infrastructure, Docker Stacks & CI/CD Pipelines',
      subtitle: 'Containerized Deployment • Caddy TLS • IAM OIDC Delegations',
      points: [
        'Containerized and deployed multi-service production stacks across AWS EC2 utilizing Docker Compose and Caddy reverse proxies with automated SSL/TLS termination, supporting multi-stage Serverless framework migrations across AWS accounts with IAM OIDC role delegations and CodeBuild CI/CD pipelines.',
      ],
      stack: ['AWS EC2', 'Docker Compose', 'Caddy Reverse Proxy', 'TLS/SSL', 'Serverless', 'IAM OIDC', 'AWS CodeBuild'],
    },
  ]

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto w-full px-4 sm:px-6">
      {/* Header */}
      <div className="mb-10 border-b border-hairline pb-6">
        <p className="font-mono text-xs text-signal font-bold mb-2 uppercase tracking-widest">// 02. production experience & telemetry</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Systems & Voice AI Infrastructure
        </h1>
        <p className="font-mono text-sm sm:text-base text-data mt-2 font-semibold">
          Production Architecture behind InterviewGod.ai • Real-Time Multimodal Evaluation
        </p>
      </div>

      {/* Live Telemetry Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {metrics.map((m) => (
          <div key={m.label} className="p-4 bg-panel border border-hairline rounded-sm shadow-sm hover:border-signal/50 transition-colors">
            <p className="font-mono text-xs text-slate-400 uppercase font-bold">{m.label}</p>
            <p className="mt-1 text-2xl sm:text-3xl font-bold font-mono text-white">{m.value}</p>
            <p className="font-mono text-xs text-data mt-1 font-semibold">{m.unit}</p>
          </div>
        ))}
      </div>

      {/* Role Overview Executive Card */}
      <section className="bg-panel border border-hairline p-6 sm:p-8 rounded-sm shadow-2xl mb-12 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-hairline pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-signal status-dot" />
              <span className="font-mono text-xs text-data font-bold">{job.date}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl text-white font-bold mt-1">
              {job.role}
            </h2>
            <p className="font-mono text-base text-signal font-bold">
              {job.org}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-xs">
            <span className="px-3.5 py-1.5 bg-panel2 border border-hairline rounded-sm text-white font-semibold">
              LiveKit SFU
            </span>
            <span className="px-3.5 py-1.5 bg-panel2 border border-hairline rounded-sm text-white font-semibold">
              FastAPI
            </span>
            <span className="px-3.5 py-1.5 bg-panel2 border border-hairline rounded-sm text-white font-semibold">
              Redis State
            </span>
            <span className="px-3.5 py-1.5 bg-panel2 border border-hairline rounded-sm text-white font-semibold">
              AWS EC2
            </span>
          </div>
        </div>

        {/* Project Scope Banner */}
        <div className="p-4 bg-panel2 border border-hairline rounded-sm flex items-start gap-3">
          <Terminal className="w-5 h-5 text-signal shrink-0 mt-0.5" />
          <p className="font-mono text-xs sm:text-sm text-white leading-relaxed font-medium">
            <span className="text-signal font-bold">Core Scope: </span>
            {job.projectsSubtitle}
          </p>
        </div>

        <p className="text-white text-base sm:text-lg leading-relaxed max-w-5xl font-normal">
          {job.summary}
        </p>
      </section>

      {/* 4 Thematic Architecture Pillars */}
      <section className="mb-14 space-y-6">
        <div className="flex items-center justify-between border-b border-hairline pb-4">
          <div>
            <p className="font-mono text-xs text-signal mb-1 font-bold uppercase tracking-wider">// architecture deep-dive</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Core Engineering Deliverables & Pillars
            </h3>
          </div>
          <span className="font-mono text-xs text-data font-bold">4 Dedicated Architectural Areas</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            const isSignal = pillar.accent === 'signal'

            return (
              <div
                key={pillar.id}
                className="bg-panel border border-hairline p-6 sm:p-8 rounded-sm hover:border-signal/50 transition-all shadow-xl flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 border-b border-hairline pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-panel2 border border-hairline rounded-sm ${isSignal ? 'text-signal' : 'text-data'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-slate-400 font-bold">PILLAR 0{idx + 1}</span>
                        <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                          {pillar.title}
                        </h4>
                      </div>
                    </div>
                    <span className={`font-mono text-xs font-bold px-3 py-1 rounded shrink-0 border ${
                      isSignal ? 'text-signal bg-signal/15 border-signal/40' : 'text-data bg-data/15 border-data/40'
                    }`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-data font-bold">
                    {pillar.subtitle}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-3.5 pt-1">
                    {pillar.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isSignal ? 'text-signal' : 'text-data'}`} />
                        <p className="text-white text-sm sm:text-base leading-relaxed font-normal">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-hairline space-y-2">
                  <p className="font-mono text-xs text-data font-bold uppercase">Technologies Involved</p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-white font-semibold bg-panel2 border border-hairline rounded-sm px-3 py-1 hover:text-signal hover:border-signal/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Navigation Footer CTAs */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
        <Link
          to="/about"
          className="px-5 py-2.5 border border-hairline text-white hover:text-signal font-mono text-xs rounded-sm hover:border-signal transition-colors font-semibold"
        >
          <span>← About & Stack</span>
        </Link>
        <Link
          to="/projects"
          className="px-5 py-2.5 bg-signal text-base font-mono text-xs font-bold rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2 shadow-md"
        >
          <span>Next: Engineering Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
