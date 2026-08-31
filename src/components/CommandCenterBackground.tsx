import { useEffect, useRef } from 'react'

export default function CommandCenterBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Data packets travelling along grid lines
    interface PulsePacket {
      x: number
      y: number
      dir: 'horizontal' | 'vertical'
      length: number
      speed: number
      opacity: number
      color: string
    }

    const gridSize = 48
    const pulses: PulsePacket[] = []

    const spawnPulse = () => {
      if (pulses.length > 8) return
      const isHorizontal = Math.random() > 0.5
      const color = Math.random() > 0.4 ? 'rgba(69, 217, 200, ' : 'rgba(255, 138, 61, '

      pulses.push({
        x: Math.floor((Math.random() * width) / gridSize) * gridSize,
        y: Math.floor((Math.random() * height) / gridSize) * gridSize,
        dir: isHorizontal ? 'horizontal' : 'vertical',
        length: 30 + Math.random() * 40,
        speed: 1.5 + Math.random() * 2.5,
        opacity: 0.7,
        color,
      })
    }

    // Micro floating nodes
    interface Node {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      alpha: number
    }
    const nodeCount = 30
    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: 1 + Math.random() * 1.5,
      alpha: 0.2 + Math.random() * 0.4,
    }))

    let mouseX = width / 2
    let mouseY = height / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    let frameCount = 0

    const render = () => {
      frameCount++
      ctx.clearRect(0, 0, width, height)

      // 1. Draw subtle technical grid
      ctx.strokeStyle = 'rgba(38, 48, 66, 0.25)'
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // 2. Draw subtle crosshair intersections near mouse
      const crossSize = 3
      for (let x = 0; x <= width; x += gridSize * 2) {
        for (let y = 0; y <= height; y += gridSize * 2) {
          const dist = Math.hypot(x - mouseX, y - mouseY)
          if (dist < 280) {
            const alpha = (1 - dist / 280) * 0.4
            ctx.strokeStyle = `rgba(69, 217, 200, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(x - crossSize, y)
            ctx.lineTo(x + crossSize, y)
            ctx.moveTo(x, y - crossSize)
            ctx.lineTo(x, y + crossSize)
            ctx.stroke()
          }
        }
      }

      // 3. Update & render data pulses
      if (frameCount % 60 === 0) spawnPulse()

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        ctx.strokeStyle = `${p.color}${p.opacity})`
        ctx.lineWidth = 1.5

        ctx.beginPath()
        if (p.dir === 'horizontal') {
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.x + p.length, p.y)
          p.x += p.speed
          if (p.x > width) pulses.splice(i, 1)
        } else {
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.x, p.y + p.length)
          p.y += p.speed
          if (p.y > height) pulses.splice(i, 1)
        }
        ctx.stroke()
      }

      // 4. Update & render micro nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx
        n.y += n.vy

        if (n.x < 0) n.x = width
        if (n.x > width) n.x = 0
        if (n.y < 0) n.y = height
        if (n.y > height) n.y = 0

        ctx.fillStyle = `rgba(115, 128, 150, ${n.alpha})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  )
}
