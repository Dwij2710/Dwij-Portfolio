import { skillGroups } from '../lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-hairline">
      <div className="max-w-content">
        <p className="font-mono text-xs text-faint mb-6">// technology stack</p>
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
      </div>
    </section>
  )
}
