import { Link } from 'react-router-dom'
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, ArrowRight, ShieldCheck, Database, Radio, Cpu, Cloud, Check } from 'lucide-react'
import { experience } from '../lib/data'
import PageHeader from '../components/PageHeader'

export default function ExperiencePage() {
  const job = experience[0]

  const deliverables = [
    {
      num: '01',
      title: 'Real-Time Voice AI Pipeline & Semantic Turn-Taking',
      tag: '<1s LATENCY',
      outcome: 'Achieved sub-second conversational latency across live WebRTC audio streams.',
      bullets: [
        'Implemented LiveKit SFU (WebRTC) routing with acoustic VAD filtering and pre-generated audio warmup gates.',
        'Integrated OpenAI GPT-4o with ElevenLabs and Sarvam AI for low-latency bilingual speech synthesis.',
      ],
      stack: ['LiveKit SFU', 'WebRTC', 'OpenAI GPT-4o', 'ElevenLabs', 'Sarvam AI'],
    },
    {
      num: '02',
      title: 'Adaptive Multi-Turn Dialog State Machine',
      tag: 'CONTEXT SCAFFOLD',
      outcome: 'Eliminated topic drift and conversational stalls in long voice interviews.',
      bullets: [
        'Built heuristic filler-word and repeat-request interceptors to handle human speech hesitations.',
        'Added bounded per-topic counter-probing and contextual conversational scaffolding to keep the agent on-task.',
      ],
      stack: ['Dialog State Machines', 'Turn Arbitration', 'Drift Prevention'],
    },
    {
      num: '03',
      title: 'LLM-as-a-Judge Answer-Validity Gate',
      tag: '99.8% PASS RATE',
      outcome: 'Intercepted STT hallucinations and resolved denominator inflation in scoring algorithms.',
      bullets: [
        'Developed a fail-open answer-validity gate using gpt-4o-mini to sanitize non-answers before score calculation.',
        'Penalized evasive replies and re-normalized zero-score distributions, achieving 99.8% validity accuracy.',
      ],
      stack: ['gpt-4o-mini', 'LLM-as-a-Judge', 'Evaluation Gates'],
    },
    {
      num: '04',
      title: 'Redis Session Checkpointing',
      tag: '24H BUFFER',
      outcome: 'Guaranteed zero data loss during network disconnects with 24-hour persistent buffers.',
      bullets: [
        'Engineered distributed session state checkpointing using Redis with 24-hour handoff buffers.',
        'Added bidirectional webhook synchronization between streaming nodes and core microservices.',
      ],
      stack: ['Redis Session Checkpointing', 'Webhooks', 'Distributed State'],
    },
    {
      num: '05',
      title: 'Four-Layer Candidate Evaluation & Call Screening Audit',
      tag: '20+ EDGE CASES',
      outcome: 'Resolved 20+ edge cases across multilingual speech and evaluation governance.',
      bullets: [
        'Audited Scenario Detection, Telemetry, Semantic Intelligence, Policy Engine, and Governance layers.',
        'Eliminated brittle speaker-attribution bugs, telemetry constant drifts, and silent fallbacks in Hindi/English pipelines.',
      ],
      stack: ['Bilingual Hindi/English', 'Deterministic Scoring', 'Policy Governance'],
    },
    {
      num: '06',
      title: 'Multi-Modal Weighted Decision Engine',
      tag: 'DECISION GOVERNANCE',
      outcome: 'Automated deterministic PROCEED / HOLD / REJECT hiring recommendations with calibrated confidence.',
      bullets: [
        'Consolidated Resume, Screening Call, Assessment, Technical Interview, and Integrity signals into a single score.',
        'Calibrated confidence thresholds to prevent false positives and eliminate human interviewer bias.',
      ],
      stack: ['Multi-Modal Aggregation', 'Confidence Calibration', 'Weighted Scoring'],
    },
    {
      num: '07',
      title: 'AWS EC2 Production Stacks & CI/CD Pipelines',
      tag: 'AUTOMATED DEVOPS',
      outcome: 'Automated zero-downtime deployment pipelines with reverse proxy TLS termination.',
      bullets: [
        'Containerized multi-service production stacks with Docker Compose and automated Caddy reverse proxy SSL.',
        'Supported multi-stage Serverless migrations across AWS accounts with IAM OIDC roles and CodeBuild CI/CD.',
      ],
      stack: ['AWS EC2', 'Docker Compose', 'Caddy Reverse Proxy', 'AWS CodeBuild'],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-16 pt-6">
      <PageHeader
        tag="03 // PROFESSIONAL EXPERIENCE"
        title="CAREER TRAJECTORY &"
        highlight="PRODUCTION DELIVERABLES."
        description="A timeline of production engineering roles, low-latency streaming infrastructure, and Generative AI evaluation systems I have built and deployed."
      />

      {/* Role Executive Card */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl space-y-6 border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
              {job.date} • FULL-STACK AI ROLE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {job.role}
            </h2>
            <p className="font-mono text-base text-slate-300 font-bold">{job.org}</p>
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold">
              LiveKit SFU
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white font-semibold">
              FastAPI
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold">
              Redis Session Checkpointing
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white font-semibold">
              AWS EC2
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-start gap-3">
          <Terminal className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p className="font-mono text-xs sm:text-sm text-white leading-relaxed font-medium">
            <span className="text-accent font-bold">Core Projects Scope: </span>
            {job.projectsSubtitle}
          </p>
        </div>

        <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal">
          {job.summary}
        </p>
      </div>

      {/* 7 Production Deliverables: Restructured into a Scannable Vertical Timeline */}
      <section id="deliverables" className="space-y-8 scroll-mt-28">
        <div className="space-y-1.5 border-b border-white/10 pb-4">
          <span className="font-mono text-xs font-bold text-accent tracking-[0.25em] uppercase">
            CAREER PROGRESSION & SHIPMENTS
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            7 PRODUCTION DELIVERABLES
          </h3>
          <p className="text-xs sm:text-sm text-secondary">
            Scannable outcome-first breakdown of voice streaming protocols, evaluation gates, and cloud pipelines.
          </p>
        </div>

        {/* Vertical Timeline Container with connecting line down left */}
        <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-accent before:via-accent/40 before:to-white/10">
          {deliverables.map((d) => (
            <div key={d.num} className="relative group">
              {/* Timeline Node Icon Circle */}
              <div className="absolute -left-6 sm:-left-10 top-5 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#08090C] border-2 border-accent flex items-center justify-center font-mono text-[10px] font-bold text-accent shadow-[0_0_10px_rgba(0,229,199,0.3)] z-10">
                {d.num}
              </div>

              {/* Deliverable Content Card */}
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-accent/40 transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <h4 className="font-display text-base sm:text-lg font-bold text-white leading-snug group-hover:text-accent transition-colors">
                    {d.title}
                  </h4>

                  <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent self-start sm:self-auto shrink-0">
                    {d.tag}
                  </span>
                </div>

                {/* Outcome-First Statement */}
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {d.outcome}
                </p>

                {/* 2 Scannable Supporting Bullets */}
                <ul className="space-y-1.5 text-xs text-secondary">
                  {d.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {d.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-slate-300 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination Navigation */}
      <div className="pt-8 flex items-center justify-between border-t border-white/10">
        <Link to="/projects" className="font-mono text-xs text-secondary hover:text-white transition-colors">
          ← Projects Discovery
        </Link>
        <Link
          to="/skills"
          className="font-mono text-xs font-bold text-accent hover:underline transition-colors flex items-center gap-1.5"
        >
          <span>Explore Skills Ecosystem</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
