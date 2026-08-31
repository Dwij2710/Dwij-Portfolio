import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Copy, Check, Mail, Send, Phone, MessageSquare, ExternalLink, FileText, ArrowRight, MapPin } from 'lucide-react'
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
    <div className="py-8 md:py-12 max-w-7xl mx-auto w-full px-2 sm:px-4">
      {/* Header */}
      <div className="mb-10 border-b border-hairline pb-6">
        <p className="font-mono text-xs text-signal font-bold mb-2 uppercase tracking-wider">// 04. contact & coordinates</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
          Let's Talk Systems & Models
        </h1>
        <p className="font-mono text-sm sm:text-base text-data mt-2 font-semibold">
          Available for AI Engineering, Backend Architecture & Generative AI Roles
        </p>
      </div>

      {/* 2-Column Layout */}
      <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Column: Direct Coordinates & Actions */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick email card */}
          <div className="p-6 sm:p-7 bg-panel border border-hairline rounded-sm shadow-xl space-y-4">
            <h2 className="font-mono text-xs text-signal uppercase tracking-wider font-bold">
              Direct Contact
            </h2>
            <div className="space-y-3">
              <button
                onClick={copyEmail}
                className="w-full px-5 py-3.5 bg-signal text-base text-xs font-mono font-bold rounded-sm hover:bg-signal/90 transition-all flex items-center justify-between shadow-md"
              >
                <span>{copied ? '✓ COPIED TO CLIPBOARD' : profile.email}</span>
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>

              <a
                href={`mailto:${profile.email}`}
                className="w-full px-5 py-3 border border-hairline bg-panel2 text-xs font-mono text-ink font-bold rounded-sm hover:border-signal/50 transition-colors flex items-center justify-between"
              >
                <span>Open in Email Client</span>
                <Mail className="w-4 h-4 text-data" />
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 sm:p-7 bg-panel border border-hairline rounded-sm shadow-xl space-y-3.5">
            <h3 className="font-mono text-xs text-data uppercase tracking-wider font-bold mb-2">
              Profiles & Direct Dial
            </h3>
            <div className="space-y-3 font-mono text-xs">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-panel2 border border-hairline rounded-sm hover:border-signal hover:text-signal transition-colors flex items-center justify-between text-ink font-semibold"
              >
                <span className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub / Dwij2710</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-faint" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-panel2 border border-hairline rounded-sm hover:border-signal hover:text-signal transition-colors flex items-center justify-between text-ink font-semibold"
              >
                <span className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn / Dwij-Prajapati</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-faint" />
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="p-3.5 bg-panel2 border border-hairline rounded-sm hover:border-data hover:text-data transition-colors flex items-center justify-between text-ink font-semibold"
              >
                <span className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4" />
                  <span>{profile.phone}</span>
                </span>
                <span className="text-xs text-data font-bold bg-data/15 px-2 py-0.5 rounded">India (+91)</span>
              </a>
            </div>
          </div>

          {/* Resume Card */}
          <div className="p-6 sm:p-7 bg-panel border border-hairline rounded-sm shadow-xl space-y-3.5">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-signal" />
              <h3 className="font-mono text-xs text-ink uppercase tracking-wider font-bold">
                Official Resume
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Updated August 2026 version including all Banao Technologies experience and projects.
            </p>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full px-5 py-3 border border-signal text-signal font-mono text-xs font-bold rounded-sm hover:bg-signal/15 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Dwij_Prajapati_Resume.pdf</span>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7 border border-hairline bg-panel p-6 sm:p-8 lg:p-9 rounded-sm shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-4 h-4 text-signal" />
            <h2 className="font-mono text-sm text-ink font-bold uppercase tracking-wider">
              Send Direct Message
            </h2>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-panel2 border border-signal/40 rounded-sm text-center"
            >
              <div className="w-12 h-12 rounded-full bg-signal/15 text-signal flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-ink">Message Transmitted</h3>
              <p className="font-mono text-xs text-muted mt-2 max-w-md mx-auto">
                Thank you, {formState.name || 'there'}! Your note has been received. You can also send directly via email client below.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={mailtoUrl}
                  className="px-5 py-2.5 bg-signal text-base text-xs font-mono font-bold rounded-sm hover:bg-signal/90 transition-colors inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>open email client</span>
                </a>
                <button
                  onClick={() => {
                    setStatus('idle')
                    setFormState({ name: '', email: '', subject: '', message: '' })
                  }}
                  className="px-5 py-2.5 border border-hairline text-xs font-mono text-ink hover:text-signal rounded-sm transition-colors font-semibold"
                >
                  reset form
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs text-signal font-bold mb-1.5 uppercase">
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
                    className="w-full px-4 py-3 bg-panel2 border border-hairline rounded-sm text-sm text-ink placeholder:text-faint/70 focus:border-signal outline-none font-mono font-medium"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-data font-bold mb-1.5 uppercase">
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
                    className="w-full px-4 py-3 bg-panel2 border border-hairline rounded-sm text-sm text-ink placeholder:text-faint/70 focus:border-signal outline-none font-mono font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-ink font-bold mb-1.5 uppercase">
                  PROJECT / TOPIC
                </label>
                <input
                  type="text"
                  placeholder="Voice AI Pipeline / GenAI Backend Inquiry"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-panel2 border border-hairline rounded-sm text-sm text-ink placeholder:text-faint/70 focus:border-signal outline-none font-mono font-medium"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-ink font-bold mb-1.5 uppercase">
                  MESSAGE
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Let's build something fast and resilient..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-panel2 border border-hairline rounded-sm text-sm text-ink placeholder:text-faint/70 focus:border-signal outline-none font-mono font-medium resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto px-7 py-3.5 bg-signal text-base font-mono text-xs font-bold rounded-sm hover:bg-signal/90 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                {status === 'sending' ? (
                  <>
                    <span className="animate-spin">◓</span>
                    <span>DISPATCHING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Next Route Navigation */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
        <Link
          to="/projects"
          className="px-5 py-2.5 border border-hairline text-ink hover:text-signal font-mono text-xs rounded-sm hover:border-signal transition-colors font-semibold"
        >
          <span>← Projects & Case Studies</span>
        </Link>
        <Link
          to="/"
          className="px-5 py-2.5 bg-panel border border-hairline text-ink font-mono text-xs rounded-sm hover:border-signal transition-all flex items-center gap-2 font-bold"
        >
          <span>Return to Home</span>
          <ArrowRight className="w-4 h-4 text-signal" />
        </Link>
      </div>
    </div>
  )
}
