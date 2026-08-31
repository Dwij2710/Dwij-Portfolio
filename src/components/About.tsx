import { profile } from '../lib/data'

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-hairline">
      <div className="max-w-content">
        <p className="font-mono text-xs text-faint mb-6">// professional summary</p>
        <div className="space-y-5 text-lg text-muted leading-relaxed max-w-[64ch]">
          <p className="text-ink font-normal leading-relaxed">
            {profile.bioIntro}
          </p>
          <p className="leading-relaxed">
            {profile.summary}
          </p>
        </div>
      </div>
    </section>
  )
}
