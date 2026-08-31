import { motion } from 'framer-motion'

interface PageHeaderProps {
  tag: string
  title: string
  highlight?: string
  description: string
}

export default function PageHeader({ tag, title, highlight, description }: PageHeaderProps) {
  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-white/[0.06] mb-12 sm:mb-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl space-y-4"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-glow" />
          <span className="font-mono text-xs font-bold text-violet-light tracking-[0.25em] uppercase">
            {tag}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.06]">
          {title} {highlight && <span className="text-gradient-violet-cyan">{highlight}</span>}
        </h1>

        <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl font-normal pt-1">
          {description}
        </p>
      </motion.div>
    </div>
  )
}
