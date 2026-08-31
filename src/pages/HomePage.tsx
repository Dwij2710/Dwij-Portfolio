import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, ArrowRight, MapPin, Briefcase, Cpu, Layers, MessageSquare, Terminal } from 'lucide-react'
import { profile, metrics, projects, experience } from '../lib/data'
import NeuralCanvas from '../components/NeuralCanvas'

const bootLines = [
  'initializing profile...',
  'loading systems, models, pipelines...',
  'status: available for select opportunities',
]

export default function HomePage() {
  const [lineIndex, setLineIndex] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= bootLines.length) return
    const t = setTimeout(() => setLineIndex((i) => i + 1), 400)
    return () => clearTimeout(t)
  }, [lineIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-12 md:py-16">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex flex-col justify-center pb-12 overflow-hidden">
        <NeuralCanvas />

        <div className="max-w-content relative z-10">
          {/* Boot Sequence */}
          <div className="font-mono text-xs text-faint mb-6 space-y-1 h-14">
            {bootLines.slice(0, lineIndex).map((line, i) => (
              <p key={i} className="flex items-center gap-1.5">
                <span className="text-data">{'>'}</span>
                <span>{line}</span>
              </p>
            ))}
          </div>

          {/* Identity & Status Tag */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-panel border border-hairline rounded-full font-mono text-[11px] text-muted mb-4 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-signal status-dot" />
            <span className="text-ink font-medium">Core Focus:</span>
            <span>GenAI Agents & Backend Infrastructure</span>
            <span className="text-faint">|</span>
            <span className="flex items-center gap-1 text-faint">
              <MapPin className="w-3 h-3 text-data" />
              {profile.location}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          {/* Rotating Role Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-3.5 font-mono text-base sm:text-lg text-signal flex items-center gap-2"
          >
            <span className="text-faint">{'> '}</span>
            <span>{profile.roles[roleIndex]}</span>
          </motion.div>

          {/* Bio Narrative */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mt-6 max-w-[58ch] text-muted text-base sm:text-lg leading-relaxed"
          >
            {profile.bioIntro}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Link
              to="/experience"
              className="px-5 py-2.5 bg-signal text-base font-medium text-sm rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Explore experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/projects"
              className="px-5 py-2.5 border border-hairline bg-panel text-ink text-sm font-medium rounded-sm hover:border-muted transition-colors flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-data" />
              <span>View projects</span>
            </Link>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 border border-hairline bg-panel text-muted hover:text-signal text-sm rounded-sm hover:border-signal/50 transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-data" />
              <span>Resume PDF</span>
            </a>
          </motion.div>

          {/* Live Telemetry Metrics */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-hairline pt-6 bg-panel/30 p-4 rounded-sm"
          >
            {metrics.map((m) => (
              <div key={m.label} className="group">
                <dt className="font-mono text-[11px] text-faint group-hover:text-muted transition-colors">
                  {m.label}
                </dt>
                <dd className="mt-1 text-2xl font-medium text-ink tracking-tight font-mono">
                  {m.value}
                </dd>
                <dd className="font-mono text-[11px] text-data mt-0.5">
                  {m.unit}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* Exploration Gateway Cards */}
      <section className="mt-16 border-t border-hairline pt-14 max-w-content">
        <div className="flex items-center justify-between mb-8">
          <p className="font-mono text-xs text-faint">// navigation gateways</p>
          <span className="font-mono text-[11px] text-muted">select a section to deep-dive</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Experience Gateway */}
          <Link
            to="/experience"
            className="group block p-6 bg-panel border border-hairline rounded-sm hover:border-signal/60 transition-all shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-signal" />
                <h3 className="text-lg font-medium text-ink group-hover:text-signal transition-colors">
                  Production Experience
                </h3>
              </div>
              <ArrowRight className="w-4 h-4 text-faint group-hover:text-signal group-hover:translate-x-1 transition-all" />
            </div>
            <p className="font-mono text-xs text-data mt-2">
              {experience[0].org} • {experience[0].role}
            </p>
            <p className="text-sm text-muted mt-2.5 line-clamp-2 leading-relaxed">
              {experience[0].summary}
            </p>
          </Link>

          {/* Projects Gateway */}
          <Link
            to="/projects"
            className="group block p-6 bg-panel border border-hairline rounded-sm hover:border-data/60 transition-all shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-data" />
                <h3 className="text-lg font-medium text-ink group-hover:text-data transition-colors">
                  Engineering Projects
                </h3>
              </div>
              <ArrowRight className="w-4 h-4 text-faint group-hover:text-data group-hover:translate-x-1 transition-all" />
            </div>
            <p className="font-mono text-xs text-data mt-2">
              {projects.length} System Case Studies (FinSight AI & CompInsight AI)
            </p>
            <p className="text-sm text-muted mt-2.5 line-clamp-2 leading-relaxed">
              Reinforcement learning trading agents, FinBERT NLP sentiment, and FastAPI ML microservices.
            </p>
          </Link>

          {/* About & Stack Gateway */}
          <Link
            to="/about"
            className="group block p-6 bg-panel border border-hairline rounded-sm hover:border-faint/80 transition-all shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-signal" />
                <h3 className="text-lg font-medium text-ink group-hover:text-ink transition-colors">
                  About & Tech Stack
                </h3>
              </div>
              <ArrowRight className="w-4 h-4 text-faint group-hover:text-ink group-hover:translate-x-1 transition-all" />
            </div>
            <p className="font-mono text-xs text-muted mt-2">
              5 Technical Domains • Python, LLMs, Redis, Docker, AWS
            </p>
            <p className="text-sm text-muted mt-2.5 line-clamp-2 leading-relaxed">
              {profile.summary}
            </p>
          </Link>

          {/* Contact Gateway */}
          <Link
            to="/contact"
            className="group block p-6 bg-panel border border-hairline rounded-sm hover:border-signal/60 transition-all shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-data" />
                <h3 className="text-lg font-medium text-ink group-hover:text-signal transition-colors">
                  Contact & Coordinates
                </h3>
              </div>
              <ArrowRight className="w-4 h-4 text-faint group-hover:text-signal group-hover:translate-x-1 transition-all" />
            </div>
            <p className="font-mono text-xs text-signal mt-2">
              {profile.email}
            </p>
            <p className="text-sm text-muted mt-2.5 leading-relaxed">
              Send a direct message, copy contact coordinates, or download official resume.
            </p>
          </Link>
        </div>
      </section>
    </div>
  )
}
