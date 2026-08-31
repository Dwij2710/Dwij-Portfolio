import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable for desktop mice
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/5 blur-[90px] dark:bg-signal/[0.04]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          willChange: 'left, top',
        }}
      />
    </div>
  )
}
