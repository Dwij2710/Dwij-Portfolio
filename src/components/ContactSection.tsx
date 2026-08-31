import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, ArrowUpRight, Terminal } from 'lucide-react'
import { profile } from '../lib/data'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 4000)
    }, 900)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-white/[0.06] overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="ambient-glow-cyan top-1/2 -left-40 opacity-30" />
      <div className="ambient-glow-violet bottom-10 right-10 opacity-35" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-glow" />
          <span className="font-mono text-xs font-bold text-cyan-light tracking-[0.25em] uppercase">
            08 // DIRECT TRANSMISSION & CONTACT
          </span>
        </div>

        <div className="max-w-3xl space-y-4 mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            HAVE AN IDEA? <br />
            <span className="text-gradient-violet-cyan">LET'S BUILD IT.</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed font-normal">
            Whether you want to discuss a new AI engineering initiative, low-latency backend systems architecture, or high-scale team roles, my inbox is always open.
          </p>
        </div>

        {/* 2-Column: Direct Coordinates + Message Transmitter */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Direct Coordinates & Socials (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy Action */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4">
              <span className="font-mono text-[10px] font-bold text-muted uppercase tracking-widest block">
                PRIMARY EMAIL
              </span>
              <p className="text-xl sm:text-2xl font-extrabold text-white break-all">
                {profile.email}
              </p>

              <button
                onClick={copyEmail}
                data-cursor="COPY"
                className="px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-violet-600/30 border border-white/10 hover:border-violet-500/40 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-cyan-glow" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}</span>
              </button>
            </div>

            {/* Coordinates list */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-5">
              <span className="font-mono text-[10px] font-bold text-muted uppercase tracking-widest block">
                DIRECT COORDINATES
              </span>

              <div className="space-y-4 font-mono text-xs">
                <a
                  href={`tel:${profile.phone}`}
                  data-cursor="CALL"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-white hover:border-violet-glow/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-cyan-glow" />
                    <span>{profile.phone}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted" />
                </a>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-white">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-violet-light" />
                    <span>{profile.location}</span>
                  </div>
                  <span className="text-cyan-glow text-[10px] font-bold">ACTIVE</span>
                </div>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="LINKEDIN"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-white hover:border-violet-glow/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted" />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="GITHUB"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-white hover:border-violet-glow/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-white" />
                    <span>GitHub Repositories</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Transmission Console Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-violet-glow" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Transmission Console
                </span>
              </div>
              <span className="font-mono text-[10px] text-cyan-glow font-bold">
                ENCRYPTED DISPATCH
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-muted block font-semibold">NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Engineering Lead"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-violet-glow transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-muted block font-semibold">EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="lead@company.ai"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-violet-glow transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-muted block font-semibold">SUBJECT / SCOPE</label>
                <input
                  type="text"
                  required
                  placeholder="AI Systems & Low-Latency Architecture Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-violet-glow transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-muted block font-semibold">TRANSMISSION PAYLOAD</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your system requirements, architecture goals, or open engineering roles..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-violet-glow transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                data-cursor="TRANSMIT"
                className="w-full py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>ENCRYPTING & TRANSMITTING...</span>
                  </>
                ) : status === 'sent' ? (
                  <>
                    <Check className="w-4 h-4 text-cyan-glow" />
                    <span>TRANSMISSION DISPATCHED SUCCESSFULLY</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>DISPATCH MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
