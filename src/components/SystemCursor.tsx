import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SystemCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (!target) return

      // Check for custom cursor text
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null
      if (cursorTarget) {
        setIsHovered(true)
        setCursorText(cursorTarget.getAttribute('data-cursor') || '')
        return
      }

      // Check for interactive elements
      const interactive = target.closest('a, button, input, textarea, [role="button"], .interactive-node')
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
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision Center Dot */}
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-signal shadow-[0_0_8px_rgba(255,138,61,0.8)]"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer HUD Reticle */}
      <motion.div
        className="fixed rounded-full border border-signal/60 flex items-center justify-center pointer-events-none"
        animate={{
          x: pos.x - (isHovered ? 24 : 12),
          y: pos.y - (isHovered ? 24 : 12),
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          borderColor: isHovered ? 'rgba(255, 138, 61, 0.9)' : 'rgba(69, 217, 200, 0.4)',
          backgroundColor: isHovered ? 'rgba(255, 138, 61, 0.06)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }}
      >
        {isHovered && (
          <span className="absolute w-1.5 h-1.5 border-t border-l border-signal -top-0.5 -left-0.5" />
        )}
      </motion.div>

      {/* Contextual Monospace Tooltip Label */}
      <AnimatePresence>
        {cursorText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 5 }}
            className="fixed left-0 top-0 px-2 py-0.5 bg-panel border border-signal/60 text-signal font-mono text-[10px] font-bold rounded shadow-xl whitespace-nowrap z-50 pointer-events-none tracking-wider"
            style={{
              transform: `translate3d(${pos.x + 18}px, ${pos.y + 18}px, 0)`,
            }}
          >
            [{cursorText}]
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
