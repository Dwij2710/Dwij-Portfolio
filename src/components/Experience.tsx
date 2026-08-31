import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Layers } from 'lucide-react'
import { experience } from '../lib/data'

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="experience" className="py-20 border-t border-hairline">
      <div className="max-w-content">
        <div className="flex items-center justify-between mb-8">
          <p className="font-mono text-xs text-faint">// professional experience</p>
          <span className="font-mono text-[11px] text-muted">production logs & architecture</span>
        </div>

        <div className="border-l border-hairline relative ml-2 sm:ml-4">
          {experience.map((job, i) => {
            const open = openIndex === i
            return (
              <div key={job.org} className="pl-6 sm:pl-8 pb-10 relative">
                {/* Status node */}
                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-signal ring-4 ring-base" />

                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-faint">
                  <span className="text-data">{job.date}</span>
                  <span>•</span>
                  <span>AI & Backend Systems</span>
                </div>

                <h3 className="text-xl sm:text-2xl text-ink font-medium mt-1.5">
                  {job.role}
                </h3>
                <p className="font-mono text-sm text-signal mt-0.5 font-medium">
                  {job.org}
                </p>

                {job.projectsSubtitle && (
                  <p className="font-mono text-xs text-muted/90 bg-panel2 border border-hairline px-3 py-1.5 rounded-sm mt-2.5 inline-block">
                    {job.projectsSubtitle}
                  </p>
                )}

                <p className="text-muted mt-3 max-w-[62ch] leading-relaxed text-sm sm:text-base">
                  {job.summary}
                </p>

                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="mt-4 font-mono text-xs text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5 px-3 py-1.5 bg-panel border border-hairline rounded-sm"
                  aria-expanded={open}
                >
                  {open ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5 text-signal" />
                      <span>collapse telemetry log</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3.5 h-3.5 text-data" />
                      <span>expand all {job.details.length} engineering deliverables</span>
                    </>
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden mt-4 space-y-3.5 border-t border-hairline pt-4 max-w-[64ch] bg-panel/40 p-4 sm:p-5 rounded-sm"
                    >
                      {job.details.map((d, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted leading-relaxed pl-6 relative"
                        >
                          <span className="absolute left-0 text-signal font-mono text-xs">[{idx + 1}]</span>
                          <span className="text-ink text-sm leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
