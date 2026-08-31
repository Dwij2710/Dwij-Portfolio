import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsFinished(true)
            setTimeout(onComplete, 600)
          }, 200)
          return 100
        }
        const diff = Math.floor(Math.random() * 15) + 5
        return Math.min(prev + diff, 100)
      })
    }, 45)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#04060A] flex flex-col items-center justify-center select-none"
        >
          {/* Ambient Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center border border-white/10 shadow-2xl"
            >
              <span className="font-mono text-xl font-bold tracking-widest text-shimmer">
                DP
              </span>
            </motion.div>

            {/* Label */}
            <div className="text-center space-y-1">
              <p className="font-mono text-xs tracking-[0.25em] text-secondary/70 uppercase">
                Initializing Experience
              </p>
              <p className="font-mono text-[11px] text-muted tracking-wider">
                AI • Backend • Full-Stack Systems
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-56 h-1 bg-white/[0.06] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-glow via-indigo-glow to-cyan-glow rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Percentage */}
            <span className="font-mono text-xs font-semibold text-secondary tracking-widest">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
