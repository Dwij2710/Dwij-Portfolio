import { motion } from 'framer-motion'

export default function ScanlineTransition() {
  return (
    <motion.div
      initial={{ top: '-10%', opacity: 0 }}
      animate={{ top: '110%', opacity: [0, 1, 1, 0] }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="pointer-events-none fixed left-0 right-0 h-2 bg-gradient-to-r from-transparent via-signal to-transparent shadow-[0_0_20px_rgba(255,138,61,0.9)] z-50"
    />
  )
}
