import { motion } from 'framer-motion'

interface PageHeaderProps {
  tag: string
  title: string
  highlight?: string
  description: string
}

export default function PageHeader({ tag, title, highlight, description }: PageHeaderProps) {
  return (
    <div className="pt-28 pb-8 sm:pt-36 sm:pb-12 border-b border-white/[0.06] mb-8 sm:mb-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl space-y-3.5"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_6px_#00E5C7]" />
          <span className="font-mono text-[10px] font-bold text-accent tracking-[0.2em] uppercase">
            {tag}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
          {title} {highlight && <span className="text-accent">{highlight}</span>}
        </h1>

        <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-2xl font-normal pt-0.5">
          {description}
        </p>
      </motion.div>
    </div>
  )
}
