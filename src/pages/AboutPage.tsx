import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Award, Calendar, CheckCircle2, Layers } from 'lucide-react'
import { profile, skillGroups, education, achievements } from '../lib/data'

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-content">
        {/* Header */}
        <div className="mb-10">
          <p className="font-mono text-xs text-faint mb-2">// engineering profile & stack</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
            About & Architecture
          </h1>
          <p className="font-mono text-sm text-data mt-2">
            AI & Backend Systems Engineer based in {profile.location}
          </p>
        </div>

        {/* Professional Summary */}
        <section className="bg-panel border border-hairline p-6 sm:p-8 rounded-sm mb-12 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-signal" />
            <h2 className="font-mono text-xs text-muted uppercase tracking-wider">
              Professional Summary
            </h2>
          </div>
          <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
            <p className="text-ink font-normal leading-relaxed">
              {profile.bioIntro}
            </p>
            <p className="leading-relaxed text-muted">
              {profile.summary}
            </p>
          </div>
        </section>

        {/* Technical Skills Stack */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <p className="font-mono text-xs text-faint">// technical skill domains</p>
            <span className="font-mono text-[11px] text-muted">5 categorized areas</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-panel border border-hairline p-6 rounded-sm hover:border-faint/60 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal" />
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
            ))}
          </div>
        </section>

        {/* Education & Achievements */}
        <section className="grid sm:grid-cols-2 gap-6 border-t border-hairline pt-10">
          {/* Education */}
          <div className="bg-panel border border-hairline p-6 rounded-sm">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-signal" />
              <h3 className="font-mono text-xs text-faint uppercase tracking-wider">
                Education
              </h3>
            </div>
            <h4 className="text-lg font-medium text-ink">{education.degree}</h4>
            <p className="text-muted text-sm mt-1">{education.school}</p>
            <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between font-mono text-xs text-faint">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-data" />
                {education.years}
              </span>
              <span className="text-signal font-semibold">{education.gpa}</span>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-panel border border-hairline p-6 rounded-sm">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-data" />
              <h3 className="font-mono text-xs text-faint uppercase tracking-wider">
                Honors & Certifications
              </h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((a, i) => (
                <li key={i} className="text-sm text-ink leading-relaxed flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Navigation Next Links */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <Link
            to="/experience"
            className="px-5 py-2.5 bg-signal text-base font-mono text-xs font-semibold rounded-sm hover:bg-signal/90 transition-all flex items-center gap-2"
          >
            <span>Next: Production Experience</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/projects"
            className="px-5 py-2.5 border border-hairline text-ink font-mono text-xs rounded-sm hover:border-muted transition-colors flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
