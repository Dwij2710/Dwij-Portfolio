import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowRight, Terminal, Sparkles, MapPin, Activity } from 'lucide-react'
import { profile, metrics } from '../lib/data'
import NeuralCanvas from './NeuralCanvas'

const bootLines = [
  'initializing profile...',
  'loading systems, models, pipelines...',
  'status: available for select opportunities',
]

export default function Hero() {
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
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 md:pt-12 overflow-hidden">
      {/* Interactive Neural AI Canvas */}
      <NeuralCanvas />

      <div className="max-w-content relative z-10">
        {/* Terminal Boot Sequence */}
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

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]"
        >
          {profile.name}
        </motion.h1>

        {/* Rotating Monospace Role Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-3.5 font-mono text-base sm:text-lg text-signal flex items-center gap-2"
        >
          <span className="text-faint">{'> '}</span>
          <span>{profile.roles[roleIndex]}</span>
          <span className="animate-pulse font-bold">_</span>
        </motion.div>

        {/* Bio Narrative */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-6 max-w-[56ch] text-muted text-base sm:text-lg leading-relaxed"
        >
          {profile.bioIntro}
        </motion.p>

        {/* Call to Actions with Resume Download */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-3.5"
        >
          <a
            href="#projects"
            className="px-5 py-2.5 bg-signal text-base font-medium text-sm rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2 shadow-sm"
          >
            <span>View projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 border border-hairline bg-panel text-ink text-sm font-medium rounded-sm hover:border-signal/70 hover:text-signal transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-data" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="px-5 py-2.5 border border-hairline text-muted hover:text-ink text-sm rounded-sm hover:border-muted transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Telemetry Metrics Readout */}
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
  )
}
