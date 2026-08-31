import { motion } from 'framer-motion'

interface PageHeaderProps {
  tag: string
  title: string
  highlight?: string
  description: string
}

export default function PageHeader({ tag, title, highlight, description }: PageHeaderProps) {
  return (
    <div className="pt-20 pb-8 sm:pt-24 sm:pb-10 border-b border-white/[0.06] mb-8 sm:mb-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-glow" />
          <span className="font-mono text-[10px] font-bold text-violet-light tracking-[0.2em] uppercase">
            {tag}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
          {title} {highlight && <span className="text-gradient-violet-cyan">{highlight}</span>}
        </h1>

        <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-xl font-normal pt-0.5">
          {description}
        </p>
      </motion.div>
    </div>
  )
}
