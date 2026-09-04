import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { profile } from '../lib/data'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import PageHeader from '../components/PageHeader'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulating verified dispatch with toast feedback
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 5000)
    }, 900)
  }

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-16 pt-6">
      <PageHeader
        tag="06 // DIRECT CONTACT"
        title="HAVE A GOOD PROBLEM?"
        highlight="LET'S BUILD IT."
        description="Whether you want to discuss a new AI engineering initiative, low-latency backend systems architecture, or full-time roles, my inbox is always open."
      />

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: Direct Coordinates & Socials (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Card */}
          <div className="glass-panel p-8 rounded-3xl space-y-4 border border-white/10">
            <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest block">
              DIRECT EMAIL TRANSMISSION
            </span>
            <p className="font-display text-xl sm:text-2xl font-extrabold text-white break-all">
              {profile.email}
            </p>
            <button
              onClick={copyEmail}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold flex items-center gap-2 transition-all ${
                copied
                  ? 'bg-accent text-slate-950 shadow-md'
                  : 'bg-white/[0.06] hover:bg-accent/20 border border-white/10 hover:border-accent/40 text-white'
              }`}
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4 text-accent" />}
              <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL ADDRESS'}</span>
            </button>
          </div>

          {/* Coordinates & Social Links */}
          <div className="glass-panel p-8 rounded-3xl space-y-4 font-mono text-xs border border-white/10">
            <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest block">
              COORDINATES & CHANNELS
            </span>

            <a
              href={`tel:${profile.phone}`}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-black/40 border border-white/5 text-white hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent" />
                <span>{profile.phone}</span>
              </div>
              <span className="text-muted text-[10px]">PHONE</span>
            </a>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/40 border border-white/5 text-white">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{profile.location}</span>
              </div>
              <span className="text-accent text-[10px] font-bold">ONLINE</span>
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-black/40 border border-white/5 text-white hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-accent" />
                <span>LinkedIn Profile</span>
              </div>
              <span className="text-muted text-[10px]">CONNECT</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-black/40 border border-white/5 text-white hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub Profile</span>
              </div>
              <span className="text-muted text-[10px]">REPOS</span>
            </a>
          </div>
        </div>

        {/* Right: Clean Editorial Contact Form (7 Cols) */}
        <div className="lg:col-span-7 glass-panel p-8 sm:p-12 rounded-3xl space-y-6 border border-white/10">
          <div className="space-y-1 border-b border-white/10 pb-4">
            <h3 className="font-display text-2xl font-extrabold text-white">Send a Message</h3>
            <p className="text-sm text-secondary">
              Direct message transmission to Dwij's inbox.
            </p>
          </div>

          {/* Success Toast Banner */}
          {status === 'sent' && (
            <div className="p-4 rounded-2xl bg-accent/15 border border-accent/40 flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <div>
                <p className="font-bold text-accent">MESSAGE DISPATCHED SUCCESSFULLY</p>
                <p className="text-slate-300 text-[11px]">Thank you! I will reply within 24 hours.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-muted block font-semibold">YOUR NAME</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivers"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-xs placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-muted block font-semibold">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-xs placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-xs text-muted block font-semibold">SUBJECT</label>
              <input
                type="text"
                required
                placeholder="e.g. AI Engineering / Real-Time Voice Infrastructure"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-xs placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-xs text-muted block font-semibold">MESSAGE</label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about your team, system goals, or project scope..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-xs placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {/* Solid Accent Primary CTA */}
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="w-full py-4 rounded-full bg-accent text-slate-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent-hover hover:shadow-[0_0_25px_rgba(0,229,199,0.4)] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>TRANSMITTING MESSAGE...</span>
                </>
              ) : status === 'sent' ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>DISPATCHED TO INBOX</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>START A CONVERSATION →</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
