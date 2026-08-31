import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Sparkles, MapPin, Terminal, Activity, ArrowDown } from 'lucide-react'
import { profile } from '../lib/data'
import ThreeNeuralCore from './ThreeNeuralCore'

export default function Hero3D() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-[100vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="ambient-glow-violet -top-40 -left-40" />
      <div className="ambient-glow-cyan top-1/2 -right-40" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Editorial Typography & Magnetic CTAs */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-violet-glow/30 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_8px_#06B6D4] animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-cyan-light tracking-wider uppercase">
                SYSTEM ONLINE
              </span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-[11px] text-secondary flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-glow" />
                {profile.location}
              </span>
            </motion.div>

            {/* Giant Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-[0.3em] text-violet-light uppercase">
                AI • BACKEND • FULL-STACK ENGINEER
              </p>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.02]">
                DWIJ <br />
                <span className="text-shimmer">PRAJAPATI</span>
              </h1>
            </motion.div>

            {/* Rotating Specialization Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-mono text-lg sm:text-xl font-bold text-cyan-light flex items-center gap-2.5"
            >
              <span className="text-violet-glow">{'>'}</span>
              <span>{profile.roles[roleIndex]}</span>
            </motion.div>

            {/* Narrative Philosophy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-secondary leading-relaxed max-w-xl font-normal"
            >
              I build intelligent systems, real-time voice AI agents, and resilient distributed backend infrastructure.
            </motion.p>

            {/* Magnetic Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <a
                href="#projects"
                data-cursor="EXPLORE"
                className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center gap-2"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="RESUME PDF"
                className="px-6 py-3.5 rounded-full glass-card border border-white/10 hover:border-violet-glow/50 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/[0.06] transition-all flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-glow" />
                <span>RESUME PDF</span>
              </a>

              <a
                href="#contact"
                data-cursor="LET'S TALK"
                className="px-5 py-3.5 rounded-full text-secondary hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                LET'S TALK →
              </a>
            </motion.div>

            {/* Live Telemetry KPI strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 font-mono text-xs"
            >
              <div>
                <p className="text-muted text-[10px] uppercase font-bold tracking-wider">VOICE AI LATENCY</p>
                <p className="text-lg font-bold text-white mt-0.5">&lt;1s</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-muted text-[10px] uppercase font-bold tracking-wider">COMPENSATION R²</p>
                <p className="text-lg font-bold text-cyan-light mt-0.5">0.93</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-muted text-[10px] uppercase font-bold tracking-wider">REDIS BUFFER</p>
                <p className="text-lg font-bold text-violet-light mt-0.5">24h</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Three.js 3D Neural Computational Core */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <ThreeNeuralCore />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="font-mono text-[10px] text-muted tracking-widest uppercase">SCROLL</span>
        <ArrowDown className="w-3.5 h-3.5 text-cyan-glow animate-bounce" />
      </div>
    </section>
  )
}
