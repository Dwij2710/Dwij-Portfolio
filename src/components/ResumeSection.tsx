import { motion } from 'framer-motion'
import { FileText, Download, GraduationCap, Award, CheckCircle2, Calendar, ArrowUpRight } from 'lucide-react'
import { profile, education, achievements } from '../lib/data'

export default function ResumeSection() {
  return (
    <section className="py-24 sm:py-32 relative border-t border-white/[0.06] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="ambient-glow-violet top-10 left-1/3 opacity-25" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-violet-glow" />
          <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
            07 // CREDENTIALS & RESUME
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Statement & Direct Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              LET'S BUILD <br />
              <span className="text-gradient-violet-cyan">SOMETHING INTELLIGENT.</span>
            </h2>

            <p className="text-lg text-secondary leading-relaxed font-normal max-w-xl">
              I am actively available for select AI Engineering, Low-Latency Backend Systems, and Full-Stack Engineering opportunities. Download my full verified resume below.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={profile.resumeUrl}
                download="Dwij_Prajapati_Resume.pdf"
                data-cursor="DOWNLOAD"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all flex items-center gap-2.5 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME PDF</span>
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="VIEW PDF"
                className="px-7 py-4 rounded-full glass-card border border-white/15 hover:border-violet-glow text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/[0.08] transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-glow" />
                <span>VIEW IN BROWSER</span>
              </a>
            </div>

            {/* Academic & Achievements Quick Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-cyan-glow">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-mono text-xs font-bold text-white uppercase">Education</span>
                </div>
                <p className="text-sm font-bold text-white">{education.degree}</p>
                <p className="text-xs text-secondary">{education.school}</p>
                <span className="inline-block mt-2 font-mono text-xs text-cyan-light font-bold">
                  CGPA: {education.gpa} • {education.years}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-violet-light">
                  <Award className="w-4 h-4" />
                  <span className="font-mono text-xs font-bold text-white uppercase">Achievements</span>
                </div>
                <ul className="space-y-1 text-xs text-secondary">
                  {achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: 3D Perspective Document Preview Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ rotateY: -8, rotateX: 6, scale: 1.02 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="w-full max-w-sm glass-panel p-6 rounded-3xl border border-white/15 shadow-2xl space-y-6 relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Document Header preview */}
              <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-[10px] text-secondary uppercase font-bold tracking-wider">
                  Dwij_Prajapati_Resume.pdf
                </span>
              </div>

              {/* Document simulation */}
              <div className="space-y-4 font-mono text-[11px] text-secondary">
                <div className="space-y-1">
                  <p className="text-base font-extrabold text-white">{profile.name}</p>
                  <p className="text-cyan-light font-semibold">{profile.role}</p>
                  <p className="text-[10px] text-muted">{profile.location} • {profile.phone}</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-white/5">
                  <p className="text-violet-light font-bold text-[10px] uppercase">Core Experience</p>
                  <p className="text-white font-medium">Banao Technologies (InterviewGod.ai)</p>
                  <p className="text-muted text-[10px]">Real-Time Voice AI Agent & LLM Evaluation Governance</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-white/5">
                  <p className="text-cyan-glow font-bold text-[10px] uppercase">Engineering Projects</p>
                  <p className="text-white font-medium">FinSight AI & CompInsight AI</p>
                  <p className="text-muted text-[10px]">RL Trading Agents & FastAPI Microservices</p>
                </div>
              </div>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-colors block text-center"
              >
                <span>OPEN OFFICIAL PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-glow" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
