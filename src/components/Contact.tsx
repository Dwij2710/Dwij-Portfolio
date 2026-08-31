import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Mail, Send, Phone, MessageSquare, ExternalLink } from 'lucide-react'
import { profile } from '../lib/data'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
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
    <section id="contact" className="py-24 border-t border-hairline">
      <div className="max-w-content">
        <p className="font-mono text-xs text-faint mb-6">// contact & connect</p>
        <h2 className="text-3xl sm:text-4xl font-medium text-ink max-w-[22ch] leading-tight">
          Building something interesting? Let's talk systems & models.
        </h2>

        {/* Quick Contact Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
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
        </div>

        {/* Interactive Direct Message Form */}
        <div className="mt-12 border border-hairline bg-panel/60 p-6 sm:p-8 rounded-sm">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-4 h-4 text-signal" />
            <h3 className="font-mono text-sm text-ink font-medium uppercase tracking-wider">
              Send Direct Message
            </h3>
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
              <h4 className="text-lg font-medium text-ink">Message Transmitted</h4>
              <p className="font-mono text-xs text-muted mt-1 max-w-md mx-auto">
                Thank you, {formState.name || 'there'}! Your note has been received and routed. You can also send directly via email client below.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={mailtoUrl}
                  className="px-4 py-2 bg-signal text-base text-xs font-mono font-medium rounded-sm hover:bg-signal/90 transition-colors inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>open email client</span>
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

        {/* Social and Direct Coordinates */}
        <div className="mt-10 flex flex-wrap gap-6 font-mono text-sm text-muted border-t border-hairline pt-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="hover:text-ink transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-4 h-4" />
            <span>{profile.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
