import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Award, Calendar, CheckCircle2, Layers, Cpu, Server, Database, Cloud, Code, Sparkles, MapPin, Terminal } from 'lucide-react'
import { profile, skillGroups, education, achievements } from '../lib/data'

export default function AboutPage() {
  // Separate into Flagship Domains and Foundation Domains for balanced layout
  const flagshipSkills = skillGroups.filter(
    (g) => g.title.includes('AI') || g.title.includes('Backend')
  )
  const foundationalSkills = skillGroups.filter(
    (g) => !g.title.includes('AI') && !g.title.includes('Backend')
  )

  return (
    <div className="py-8 md:py-12 max-w-container mx-auto">
      {/* Page Header */}
      <div className="mb-10 border-b border-hairline pb-6">
        <p className="font-mono text-xs text-faint mb-2">// 01. engineering profile & stack</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
          About & Architecture
        </h1>
        <p className="font-mono text-sm text-data mt-2">
          AI & Backend Systems Engineer • Bharuch, Gujarat, India
        </p>
      </div>

      {/* 2-Column Overview Section */}
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-12 items-stretch">
        {/* Left: Professional Summary */}
        <section className="lg:col-span-8 bg-panel border border-hairline p-6 sm:p-8 rounded-sm shadow-sm flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-signal" />
              <h2 className="font-mono text-xs text-muted uppercase tracking-wider">
                Professional Engineering Summary
              </h2>
            </div>
            <p className="text-lg text-ink font-normal leading-relaxed">
              {profile.bioIntro}
            </p>
            <p className="text-base text-muted leading-relaxed">
              {profile.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-hairline flex flex-wrap items-center gap-4 text-xs font-mono text-faint">
            <span className="text-data">● Production Focus</span>
            <span>•</span>
            <span>Real-Time Voice AI (LiveKit / WebRTC)</span>
            <span>•</span>
            <span>Low-Latency Python APIs</span>
          </div>
        </section>

        {/* Right: Engineering Coordinates */}
        <aside className="lg:col-span-4 bg-panel2 border border-hairline p-6 sm:p-7 rounded-sm shadow-sm flex flex-col justify-between space-y-4 font-mono text-xs">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-4 h-4 text-data" />
              <h3 className="text-faint uppercase tracking-wider text-[11px]">
                Coordinates & Metadata
              </h3>
            </div>

            <div className="space-y-3.5">
              <div className="p-2.5 bg-panel border border-hairline rounded-sm">
                <p className="text-faint text-[10px]">GEOGRAPHY</p>
                <p className="text-ink font-medium mt-0.5">{profile.location}</p>
              </div>

              <div className="p-2.5 bg-panel border border-hairline rounded-sm">
                <p className="text-faint text-[10px]">ACADEMIC CREDENTIAL</p>
                <p className="text-ink font-medium mt-0.5">{education.degree}</p>
                <p className="text-muted text-[11px] mt-0.5">{education.school}</p>
              </div>

              <div className="p-2.5 bg-panel border border-hairline rounded-sm flex items-center justify-between">
                <div>
                  <p className="text-faint text-[10px]">CGPA SCORE</p>
                  <p className="text-signal font-semibold mt-0.5">{education.gpa}</p>
                </div>
                <span className="text-[10px] text-data bg-data/10 px-2 py-0.5 rounded">
                  2022–2026
                </span>
              </div>

              <div className="p-2.5 bg-panel border border-hairline rounded-sm">
                <p className="text-faint text-[10px]">CURRENT DEPLOYMENT</p>
                <p className="text-data font-medium mt-0.5">AI Developer Intern @ InterviewGod.ai</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Technical Skills Section */}
      <section className="mb-14 space-y-6">
        <div className="flex items-center justify-between border-b border-hairline pb-4">
          <div>
            <p className="font-mono text-xs text-faint mb-1">// technical stack</p>
            <h2 className="text-2xl sm:text-3xl font-medium text-ink">
              Core Technical Competencies
            </h2>
          </div>
          <span className="font-mono text-xs text-muted">5 Specialized Domains</span>
        </div>

        {/* Flagship Domains (2 large cards) */}
        <div className="grid md:grid-cols-2 gap-6">
          {flagshipSkills.map((group) => {
            const isAI = group.title.includes('AI')
            return (
              <div
                key={group.title}
                className="bg-panel border border-hairline p-6 sm:p-7 rounded-sm hover:border-signal/50 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-panel2 border border-hairline rounded-sm text-signal">
                        {isAI ? <Cpu className="w-4 h-4" /> : <Server className="w-4 h-4" />}
                      </div>
                      <h3 className="text-ink font-medium font-mono text-sm tracking-wide">
                        {group.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-signal font-semibold bg-signal/10 px-2 py-0.5 rounded">
                      CORE SPECIALIZATION
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs text-ink border border-hairline bg-panel2 rounded-sm px-3 py-1.5 hover:border-signal hover:text-signal transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-mono text-[11px] text-muted mt-5 pt-3 border-t border-hairline">
                  {group.items.length} production frameworks & architectures
                </p>
              </div>
            )
          })}
        </div>

        {/* Foundational Domains (3 balanced cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundationalSkills.map((group) => {
            const isLang = group.title.includes('Language')
            const isData = group.title.includes('Data')
            return (
              <div
                key={group.title}
                className="bg-panel border border-hairline p-6 rounded-sm hover:border-data/50 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="p-2 bg-panel2 border border-hairline rounded-sm text-data">
                      {isLang ? <Code className="w-4 h-4" /> : isData ? <Database className="w-4 h-4" /> : <Cloud className="w-4 h-4" />}
                    </div>
                    <h3 className="text-ink font-medium font-mono text-sm tracking-wide">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[12px] text-muted border border-hairline bg-panel2 rounded-sm px-2.5 py-1 hover:text-ink hover:border-muted transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-mono text-[10px] text-faint mt-4 pt-3 border-t border-hairline">
                  {group.items.length} technologies
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Education & Achievements in Balanced 2-Column Grid */}
      <section className="grid sm:grid-cols-2 gap-6 border-t border-hairline pt-10">
        {/* Education Card */}
        <div className="bg-panel border border-hairline p-6 sm:p-8 rounded-sm shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <GraduationCap className="w-5 h-5 text-signal" />
              <h3 className="font-mono text-xs text-faint uppercase tracking-wider">
                Academic Background
              </h3>
            </div>
            <h4 className="text-xl font-medium text-ink">{education.degree}</h4>
            <p className="text-muted text-sm mt-1.5 leading-relaxed">{education.school}</p>
          </div>

          <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between font-mono text-xs text-faint">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-data" />
              {education.years}
            </span>
            <span className="text-signal font-semibold bg-signal/10 px-2.5 py-1 rounded">
              {education.gpa}
            </span>
          </div>
        </div>

        {/* Achievements Card */}
        <div className="bg-panel border border-hairline p-6 sm:p-8 rounded-sm shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Award className="w-5 h-5 text-data" />
              <h3 className="font-mono text-xs text-faint uppercase tracking-wider">
                Certifications & Honors
              </h3>
            </div>
            <ul className="space-y-3.5">
              {achievements.map((a, i) => (
                <li key={i} className="text-sm text-ink leading-relaxed flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-hairline font-mono text-[11px] text-faint">
            Verified technical certifications & achievements
          </div>
        </div>
      </section>

      {/* Navigation Footer CTAs */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
        <Link
          to="/"
          className="px-5 py-2.5 border border-hairline text-muted hover:text-ink font-mono text-xs rounded-sm hover:border-faint transition-colors"
        >
          <span>← Back to Home</span>
        </Link>
        <Link
          to="/experience"
          className="px-5 py-2.5 bg-signal text-base font-mono text-xs font-semibold rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2"
        >
          <span>Next: Production Experience</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
