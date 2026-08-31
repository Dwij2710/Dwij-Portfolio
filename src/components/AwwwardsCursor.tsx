import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AwwwardsCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (!target) return

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null
      if (cursorTarget) {
        setIsHovered(true)
        setCursorText(cursorTarget.getAttribute('data-cursor') || '')
        return
      }

      const interactive = target.closest('a, button, input, textarea, [role="button"]')
      if (interactive) {
        setIsHovered(true)
        setCursorText('')
      } else {
        setIsHovered(false)
        setCursorText('')
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[99] overflow-hidden">
      {/* Precision Center Dot */}
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_10px_rgba(6,182,212,0.9)]"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer Soft Ring */}
      <motion.div
        className="fixed rounded-full border flex items-center justify-center pointer-events-none backdrop-blur-[2px]"
        animate={{
          x: pos.x - (isHovered ? 28 : 14),
          y: pos.y - (isHovered ? 28 : 14),
          width: isHovered ? 56 : 28,
          height: isHovered ? 56 : 28,
          borderColor: isHovered ? 'rgba(139, 92, 246, 0.7)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.15 }}
      />

      {/* Contextual Action Badge */}
      <AnimatePresence>
        {cursorText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 5 }}
            className="fixed left-0 top-0 px-2.5 py-1 glass-pill border border-violet-glow/40 text-primary font-mono text-[10px] font-bold rounded-full shadow-2xl z-50 pointer-events-none tracking-widest uppercase flex items-center gap-1"
            style={{
              transform: `translate3d(${pos.x + 22}px, ${pos.y + 22}px, 0)`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse" />
            <span>{cursorText}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
