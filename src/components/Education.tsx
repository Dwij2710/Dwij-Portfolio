import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react'
import { education, achievements } from '../lib/data'

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-hairline">
      <div className="max-w-content grid sm:grid-cols-2 gap-8">
        {/* Education Block */}
        <div className="bg-panel border border-hairline p-6 sm:p-7 rounded-sm">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-4 h-4 text-signal" />
            <p className="font-mono text-xs text-faint uppercase tracking-wider">// education</p>
          </div>

          <h3 className="text-xl text-ink font-medium">{education.degree}</h3>
          <p className="text-muted text-sm mt-1.5 leading-relaxed">{education.school}</p>

          <div className="mt-4 flex flex-wrap items-center gap-3 pt-3 border-t border-hairline font-mono text-xs text-faint">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-data" />
              {education.years}
            </span>
            <span>•</span>
            <span className="text-signal font-semibold">{education.gpa}</span>
          </div>
        </div>

        {/* Achievements Block */}
        <div className="bg-panel border border-hairline p-6 sm:p-7 rounded-sm">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-data" />
            <p className="font-mono text-xs text-faint uppercase tracking-wider">// honors & certifications</p>
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
      </div>
    </section>
  )
}
