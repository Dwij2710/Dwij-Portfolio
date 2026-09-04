import { Link } from 'react-router-dom'
import { FileText, Download, ExternalLink, GraduationCap, Award, ArrowRight, CheckCircle2, Terminal } from 'lucide-react'
import { profile, education, achievements } from '../lib/data'
import PageHeader from '../components/PageHeader'

export default function ResumePage() {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-16 pt-6">
      <PageHeader
        tag="05 // OFFICIAL CURRICULUM VITAE"
        title="VERIFIED CREDENTIALS &"
        highlight="RESUME DOCUMENT."
        description="Official document repository. Download the verified PDF or review the executive summary and academic credentials below."
      />

      {/* Prominent Action Bar Card */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest">
              OFFICIAL VERIFIED FILE
            </span>
          </div>
          <p className="font-display text-xl sm:text-2xl font-extrabold text-white">
            Dwij_Prajapati_Resume.pdf
          </p>
          <p className="text-xs text-secondary font-mono">
            Latest revision • Certified ATS-compliant PDF
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={profile.resumeUrl}
            download="Dwij_Prajapati_Resume.pdf"
            className="px-6 py-3.5 rounded-full bg-accent text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,199,0.4)] transition-all shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full border border-accent/40 hover:border-accent text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-accent/10 transition-all"
          >
            <ExternalLink className="w-4 h-4 text-accent" />
            <span>Open in New Tab</span>
          </a>
        </div>
      </div>

      {/* Condensed Executive Summary (Does not duplicate the 7 bullet list) */}
      <div className="space-y-8">
        <section className="glass-panel p-8 sm:p-10 rounded-3xl space-y-4 border border-white/10">
          <span className="font-mono text-xs font-bold text-accent tracking-wider uppercase">
            01 // EXECUTIVE SUMMARY
          </span>
          <h2 className="font-display text-2xl font-bold text-white">
            {profile.name} — {profile.role}
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-3xl">
            {profile.bioIntro}
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="text-accent font-bold">Current Production Role:</span>
              <span>AI Developer Intern @ Banao Technologies</span>
            </div>

            <Link
              to="/experience"
              className="font-mono text-xs font-bold text-accent hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Explore Interactive Timeline on Experience Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Education & Achievements Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="glass-panel p-8 rounded-3xl space-y-4 border border-white/10">
            <div className="flex items-center gap-2.5 text-accent">
              <GraduationCap className="w-5 h-5" />
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                02 // ACADEMIC EDUCATION
              </h3>
            </div>
            <div className="space-y-1.5 pt-1">
              <h4 className="font-display text-lg font-bold text-white">{education.degree}</h4>
              <p className="text-sm text-secondary">{education.school}</p>
              <div className="pt-2 font-mono text-xs text-accent font-bold">
                {education.gpa} • {education.years}
              </div>
            </div>
          </section>

          <section className="glass-panel p-8 rounded-3xl space-y-4 border border-white/10">
            <div className="flex items-center gap-2.5 text-accent">
              <Award className="w-5 h-5" />
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                03 // CERTIFICATIONS & HONORS
              </h3>
            </div>
            <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-secondary">
              {achievements.map((a, i) => (
                <li key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-white">
                  <span>{a}</span>
                  <span className="text-[10px] text-accent font-bold">VERIFIED</span>
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
          className="font-mono text-xs font-bold text-accent hover:underline transition-colors flex items-center gap-1.5"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
