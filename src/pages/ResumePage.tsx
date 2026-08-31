import { Link } from 'react-router-dom'
import { FileText, Download, ExternalLink, GraduationCap, Award, CheckCircle2, ArrowRight } from 'lucide-react'
import { profile, experience, projects, skillGroups, education, achievements } from '../lib/data'
import PageHeader from '../components/PageHeader'

export default function ResumePage() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 space-y-16">
      <PageHeader
        tag="05 // OFFICIAL RESUME"
        title="VERIFIED CREDENTIALS &"
        highlight="CURRICULUM VITAE."
        description="Comprehensive summary of my professional experience, education, publications, honors, and verified engineering skills."
      />

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 glass-panel p-6 rounded-3xl">
        <div className="space-y-1">
          <span className="font-mono text-xs font-bold text-violet-light uppercase">OFFICIAL RESUME FILE</span>
          <p className="text-white font-bold text-base sm:text-lg">Dwij_Prajapati_Resume.pdf</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={profile.resumeUrl}
            download="Dwij_Prajapati_Resume.pdf"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full glass-card border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white/[0.06] transition-all"
          >
            <ExternalLink className="w-4 h-4 text-cyan-glow" />
            <span>Open in New Tab</span>
          </a>
        </div>
      </div>

      {/* Structured Resume Content */}
      <div className="space-y-12">
        {/* Executive Summary */}
        <section className="glass-panel p-8 sm:p-10 rounded-3xl space-y-4">
          <span className="font-mono text-xs font-bold text-cyan-light tracking-wider uppercase">
            01 // EXECUTIVE SUMMARY
          </span>
          <h2 className="text-2xl font-bold text-white">{profile.name} — {profile.role}</h2>
          <p className="text-secondary text-base leading-relaxed">{profile.bioIntro}</p>
        </section>

        {/* Experience */}
        <section className="glass-panel p-8 sm:p-10 rounded-3xl space-y-6">
          <span className="font-mono text-xs font-bold text-violet-light tracking-wider uppercase">
            02 // PROFESSIONAL EXPERIENCE
          </span>
          {experience.map((exp, i) => (
            <div key={i} className="space-y-4 border-b border-white/10 pb-6 last:border-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-cyan-light font-mono text-xs font-semibold">{exp.org}</p>
                </div>
                <span className="font-mono text-xs text-muted">{exp.date}</span>
              </div>
              <ul className="space-y-2 text-sm text-secondary">
                {exp.details.map((d, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-glow shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="glass-panel p-8 rounded-3xl space-y-4">
            <span className="font-mono text-xs font-bold text-cyan-light tracking-wider uppercase">
              03 // EDUCATION
            </span>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">{education.degree}</h3>
              <p className="text-sm text-secondary">{education.school}</p>
              <p className="font-mono text-xs text-cyan-light font-bold pt-2">
                CGPA: {education.gpa} • {education.years}
              </p>
            </div>
          </section>

          <section className="glass-panel p-8 rounded-3xl space-y-4">
            <span className="font-mono text-xs font-bold text-violet-light tracking-wider uppercase">
              04 // HONORS & AWARDS
            </span>
            <ul className="space-y-2 text-sm text-secondary">
              {achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-violet-light shrink-0 mt-0.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Next CTA */}
      <div className="pt-8 flex items-center justify-between border-t border-white/10">
        <Link to="/skills" className="font-mono text-xs text-secondary hover:text-white transition-colors">
          ← Skills Ecosystem
        </Link>
        <Link
          to="/contact"
          className="font-mono text-xs font-bold text-cyan-light hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
