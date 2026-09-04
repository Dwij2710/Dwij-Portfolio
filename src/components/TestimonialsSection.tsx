import { Quote, CheckCircle, Terminal } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  org: string
  quote: string
  focus: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Ashwini K.',
    role: 'Engineering Lead',
    org: 'Banao Technologies',
    quote:
      'Dwij took our real-time voice AI pipeline from high-latency experiments to production-grade sub-second streaming. His work on LiveKit SFU routing, VAD gating, and the Redis state buffer gave our platform the stability it needed at scale.',
    focus: 'Voice AI & SFU Infrastructure',
  },
  {
    name: 'Devroop R.',
    role: 'Senior Backend Engineer',
    org: 'Collaborator',
    quote:
      'Few engineers connect asynchronous Python microservices with complex LLM evaluation pipelines as seamlessly as Dwij. His attention to detail in resolving multi-turn drift and bilingual STT edge cases was exceptional.',
    focus: 'Distributed Systems & Eval Gates',
  },
  {
    name: 'Krish P.',
    role: 'AI / ML Engineer',
    org: 'Research Peer',
    quote:
      'From implementing Markowitz portfolio optimization to training PPO agents and tuning gradient boosted trees to 0.93 R², Dwij combines mathematical rigor with production software craftsmanship.',
    focus: 'Quantitative ML & Optimization',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-1.5 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-mono text-[10px] font-bold text-accent tracking-[0.2em] uppercase">
            04 // PEER ENDORSEMENTS
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          COLLABORATOR & ENGINEERING RECOMMENDATIONS
        </h2>
        <p className="text-xs sm:text-sm text-secondary">
          Perspectives from engineering leads, peers, and collaborators on production delivery.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="glass-card p-6 rounded-2xl space-y-4 flex flex-col justify-between border border-white/10 hover:border-accent/40 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-accent">
                <Quote className="w-5 h-5 opacity-80" />
                <span className="font-mono text-[9px] px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold">
                  {item.focus}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center font-mono text-xs font-bold text-accent">
                {item.name.charAt(0)}
              </div>
              <div className="space-y-0.5 font-mono text-xs">
                <p className="font-bold text-white leading-tight">{item.name}</p>
                <p className="text-[10px] text-secondary">
                  {item.role} • <span className="text-slate-400">{item.org}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
