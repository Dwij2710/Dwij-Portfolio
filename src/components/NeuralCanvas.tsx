import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseRadius: number
  color: string
  highlight: boolean
  activity: number
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let isVisible = true
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450)

    const mouse = { x: -1000, y: -1000, active: false }

    const resize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
      initParticles()
    }

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    observer.observe(canvas)

    let particles: Particle[] = []

    const initParticles = () => {
      const count = Math.min(Math.floor((width * height) / 14000), 55)
      particles = []
      for (let i = 0; i < count; i++) {
        const isSignal = Math.random() > 0.8
        const isData = Math.random() > 0.7
        const color = isSignal
          ? 'rgba(255, 138, 61, '
          : isData
          ? 'rgba(79, 209, 197, '
          : 'rgba(139, 146, 160, '

        const r = Math.random() * 1.8 + 1.2
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: r,
          baseRadius: r,
          color,
          highlight: isSignal || isData,
          activity: Math.random() * 0.5,
        })
      }
    }

    initParticles()

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }

    const onMouseLeave = () => {
      mouse.active = false
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('resize', resize)
    const parent = canvas.parentElement
    if (parent) {
      parent.addEventListener('mousemove', onMouseMove)
      parent.addEventListener('mouseleave', onMouseLeave)
    }

    const maxDist = 110

    const render = () => {
      if (!isVisible) {
        animationId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, width, height)

      // Connect lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = p1.highlight
              ? `rgba(255, 138, 61, ${alpha * 1.5})`
              : `rgba(79, 209, 197, ${alpha})`
            ctx.lineWidth = p1.highlight ? 1 : 0.65
            ctx.stroke()
          }
        }
      }

      // Draw & update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Bounce on edges
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse interaction
        if (mouse.active) {
          const mdx = mouse.x - p.x
          const mdy = mouse.y - p.y
          const mdist = Math.hypot(mdx, mdy)
          if (mdist < 140) {
            const force = (1 - mdist / 140) * 0.8
            p.x += (mdx / mdist) * force
            p.y += (mdy / mdist) * force
            p.radius = p.baseRadius + force * 1.5

            // Draw line to mouse
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(255, 138, 61, ${(1 - mdist / 140) * 0.35})`
            ctx.lineWidth = 0.75
            ctx.stroke()
          } else {
            p.radius = p.baseRadius
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}0.75)`
        ctx.fill()

        if (p.highlight) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius + 3, 0, Math.PI * 2)
          ctx.fillStyle = `${p.color}0.12)`
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      if (parent) {
        parent.removeEventListener('mousemove', onMouseMove)
        parent.removeEventListener('mouseleave', onMouseLeave)
      }
      observer.disconnect()
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60 dark:opacity-75">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
