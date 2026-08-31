export default function About() {
  return (
    <section id="about" className="py-20 border-t border-hairline">
      <div className="max-w-content">
        <p className="font-mono text-xs text-faint mb-6">// engineering profile</p>
        <div className="space-y-5 text-lg text-muted leading-relaxed max-w-[62ch]">
          <p>
            I'm a final-year computer engineering student in Gujarat, currently
            building the voice AI and evaluation infrastructure behind{' '}
            <span className="text-ink font-medium underline decoration-signal/40 underline-offset-4">InterviewGod.ai</span>. Most of my work sits
            at the join between two things: models that need to reason well, and
            the backend plumbing that has to keep them fast, stateful and honest
            under real users.
          </p>
          <p>
            That usually means writing async Python at the systems level —
            session checkpointing in Redis, webhook-driven state machines,
            evaluation gates that catch a model's own hallucinations before they
            reach a decision. Outside of work, I build quantitative ML projects:
            trading agents, portfolio optimizers, compensation valuation models —
            anything where the interesting challenge is making a model's output
            trustworthy, explainable, and production-ready.
          </p>
        </div>
      </div>
    </section>
  )
}
