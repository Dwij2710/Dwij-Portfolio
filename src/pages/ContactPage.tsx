import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Copy, Check, Mail, Send, Phone, MessageSquare, ExternalLink, FileText, ArrowRight } from 'lucide-react'
import { profile } from '../lib/data'
import { GithubIcon, LinkedinIcon } from '../components/Icons'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Ignore if clipboard blocked
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.email || !formState.message) return

    setStatus('sending')

    setTimeout(() => {
      setStatus('success')
    }, 700)
  }

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    formState.subject || 'Portfolio Inquiry from ' + formState.name
  )}&body=${encodeURIComponent(
    `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
  )}`

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-content">
        {/* Header */}
        <div className="mb-10">
          <p className="font-mono text-xs text-faint mb-2">// 04. contact & coordinates</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
            Let's Talk Systems & Models
          </h1>
          <p className="font-mono text-sm text-data mt-2">
            Available for AI Engineering, Backend Architecture & Generative AI Roles
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <button
            onClick={copyEmail}
            className="px-5 py-3 bg-signal text-base text-sm font-medium rounded-sm hover:bg-signal/90 transition-all text-left flex items-center gap-2 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>copied to clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{profile.email}</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-3 border border-hairline bg-panel text-sm text-ink rounded-sm hover:border-muted transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-data" />
            <span>open mail client</span>
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 border border-hairline bg-panel text-muted hover:text-signal text-sm rounded-sm hover:border-signal/50 transition-colors flex items-center gap-2 ml-auto"
          >
            <FileText className="w-4 h-4 text-signal" />
            <span>Download Resume PDF</span>
          </a>
        </div>

        {/* Direct Message Form Card */}
        <div className="border border-hairline bg-panel p-6 sm:p-8 rounded-sm shadow-sm mb-12">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-4 h-4 text-signal" />
            <h2 className="font-mono text-sm text-ink font-medium uppercase tracking-wider">
              Send Direct Message
            </h2>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-panel2 border border-signal/40 rounded-sm text-center"
            >
              <div className="w-10 h-10 rounded-full bg-signal/10 text-signal flex items-center justify-center mx-auto mb-3">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-ink">Message Prepared & Transmitted</h3>
              <p className="font-mono text-xs text-muted mt-1 max-w-md mx-auto">
                Thank you, {formState.name || 'there'}! Your note has been received. You can also send directly via email client below.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={mailtoUrl}
                  className="px-4 py-2 bg-signal text-base text-xs font-mono font-medium rounded-sm hover:bg-signal/90 transition-colors inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>open pre-filled email client</span>
                </a>
                <button
                  onClick={() => {
                    setStatus('idle')
                    setFormState({ name: '', email: '', subject: '', message: '' })
                  }}
                  className="px-4 py-2 border border-hairline text-xs font-mono text-muted hover:text-ink rounded-sm transition-colors"
                >
                  reset form
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] text-faint mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ada Lovelace"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-panel2 border border-hairline rounded-sm text-sm text-ink placeholder:text-faint/60 focus:border-signal outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] text-faint mb-1">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ada@domain.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-panel2 border border-hairline rounded-sm text-sm text-ink placeholder:text-faint/60 focus:border-signal outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] text-faint mb-1">
                  PROJECT / TOPIC
                </label>
                <input
                  type="text"
                  placeholder="Voice AI Pipeline / GenAI Backend Inquiry"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-panel2 border border-hairline rounded-sm text-sm text-ink placeholder:text-faint/60 focus:border-signal outline-none font-mono"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-faint mb-1">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Let's build something fast and resilient..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-panel2 border border-hairline rounded-sm text-sm text-ink placeholder:text-faint/60 focus:border-signal outline-none font-mono resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-3 bg-signal text-base font-mono text-xs font-semibold rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <span className="animate-spin">◓</span>
                    <span>DISPATCHING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>TRANSMIT MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Social Coordinates */}
        <div className="border border-hairline bg-panel p-6 sm:p-8 rounded-sm">
          <h2 className="font-mono text-xs text-faint mb-4 uppercase tracking-wider">
            Direct Communication Coordinates
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 font-mono text-sm">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-panel2 border border-hairline rounded-sm hover:border-signal/50 hover:text-signal transition-colors flex items-center gap-2 text-ink"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub / Dwij2710</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-panel2 border border-hairline rounded-sm hover:border-signal/50 hover:text-signal transition-colors flex items-center gap-2 text-ink"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn / Dwij</span>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="p-4 bg-panel2 border border-hairline rounded-sm hover:border-data/50 hover:text-data transition-colors flex items-center gap-2 text-ink"
            >
              <Phone className="w-4 h-4" />
              <span>{profile.phone}</span>
            </a>
          </div>
        </div>

        {/* Next Route Navigation */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <Link
            to="/projects"
            className="px-5 py-2.5 border border-hairline text-muted hover:text-ink font-mono text-xs rounded-sm hover:border-faint transition-colors"
          >
            <span>← Projects & Case Studies</span>
          </Link>
          <Link
            to="/"
            className="px-5 py-2.5 bg-panel border border-hairline text-ink font-mono text-xs rounded-sm hover:border-signal/60 transition-all flex items-center gap-2"
          >
            <span>Return to Home</span>
            <ArrowRight className="w-4 h-4 text-signal" />
          </Link>
        </div>
      </div>
    </div>
  )
}
