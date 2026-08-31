import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface TechOrbital {
  name: string
  color: string
  radius: number
  speed: number
  initialAngle: number
  y: number
}

const orbitals: TechOrbital[] = [
  { name: 'GPT-4o', color: '#8B5CF6', radius: 2.7, speed: 0.3, initialAngle: 0.2, y: 0.5 },
  { name: 'LiveKit SFU', color: '#06B6D4', radius: 3.1, speed: -0.25, initialAngle: 1.5, y: -0.7 },
  { name: 'FastAPI', color: '#10B981', radius: 2.5, speed: 0.35, initialAngle: 2.8, y: 1.1 },
  { name: 'Redis State', color: '#EF4444', radius: 3.4, speed: -0.2, initialAngle: 3.9, y: 0.1 },
  { name: 'Docker / AWS', color: '#3B82F6', radius: 2.8, speed: 0.25, initialAngle: 4.8, y: -1.0 },
  { name: 'ElevenLabs', color: '#F59E0B', radius: 3.3, speed: -0.3, initialAngle: 5.8, y: 0.8 },
]

export default function AICore3D() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const scene = new THREE.Scene()
    let width = container.clientWidth
    let height = container.clientHeight

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 7.5

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // 1. Central Neural Wireframe Core
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2)
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      emissive: 0x6366f1,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.8,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    scene.add(coreMesh)

    // Inner Luminous Core
    const innerGeo = new THREE.SphereGeometry(1.0, 32, 32)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.22,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    scene.add(innerMesh)

    // 2. Surrounding Neural Point Cloud
    const particleCount = 420
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)

    const colorViolet = new THREE.Color(0x8b5cf6)
    const colorCyan = new THREE.Color(0x06b6d4)
    const colorWhite = new THREE.Color(0xffffff)

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 1.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      particlePositions[i * 3 + 2] = radius * Math.cos(phi)

      const mixed = Math.random() > 0.5 ? colorViolet : Math.random() > 0.3 ? colorCyan : colorWhite
      particleColors[i * 3] = mixed.r
      particleColors[i * 3 + 1] = mixed.g
      particleColors[i * 3 + 2] = mixed.b
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    })
    const particleSystem = new THREE.Points(particleGeo, particleMat)
    scene.add(particleSystem)

    // 3. Orbiting Data Energy Rings
    const ringGeo = new THREE.TorusGeometry(2.3, 0.015, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.4 })
    const ring1 = new THREE.Mesh(ringGeo, ringMat)
    ring1.rotation.x = Math.PI / 3
    ring1.rotation.y = Math.PI / 6
    scene.add(ring1)

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.012, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.35 })
    )
    ring2.rotation.x = -Math.PI / 4
    ring2.rotation.y = Math.PI / 4
    scene.add(ring2)

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
    scene.add(ambientLight)

    const pointLightViolet = new THREE.PointLight(0x8b5cf6, 4, 10)
    pointLightViolet.position.set(3, 3, 3)
    scene.add(pointLightViolet)

    const pointLightCyan = new THREE.PointLight(0x06b6d4, 3, 10)
    pointLightCyan.position.set(-3, -2, 2)
    scene.add(pointLightCyan)

    // Mouse Interaction
    let targetRotationX = 0
    let targetRotationY = 0
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / width) * 2 - 1
      mouseY = -(((e.clientY - rect.top) / height) * 2 - 1)
      targetRotationY = mouseX * 0.5
      targetRotationX = -mouseY * 0.3
    }

    container.addEventListener('mousemove', handleMouseMove)

    const handleResize = () => {
      if (!container) return
      width = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    let clock = new THREE.Clock()
    let animationId: number

    const animate = () => {
      const delta = clock.getDelta()
      const time = clock.getElapsedTime()

      coreMesh.rotation.y += delta * 0.25
      coreMesh.rotation.x += delta * 0.15
      particleSystem.rotation.y -= delta * 0.12
      ring1.rotation.z += delta * 0.2
      ring2.rotation.z -= delta * 0.25

      scene.rotation.y += (targetRotationY - scene.rotation.y) * 0.05
      scene.rotation.x += (targetRotationX - scene.rotation.x) * 0.05

      const pulse = 1 + Math.sin(time * 2) * 0.03
      coreMesh.scale.set(pulse, pulse, pulse)
      innerMesh.scale.set(pulse * 1.1, pulse * 1.1, pulse * 1.1)

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      renderer.dispose()
      coreGeo.dispose()
      coreMat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none">
      <div className="absolute w-72 h-72 rounded-full bg-violet-600/15 blur-[100px] pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none" />

      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing relative z-10" />

      {/* Floating 3D Technical Orbitals */}
      <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
        {orbitals.map((tech, idx) => (
          <div
            key={tech.name}
            className={`hidden sm:flex absolute font-mono text-[11px] font-bold px-3 py-1 rounded-full glass-panel border shadow-xl items-center gap-1.5 pointer-events-auto ${
              idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-reverse'
            }`}
            style={{
              transform: `translate(${Math.cos(tech.initialAngle) * 150}px, ${Math.sin(tech.initialAngle) * 120 + tech.y * 25}px)`,
              borderColor: `${tech.color}40`,
            }}
          >
            <span className="w-2 h-2 rounded-full shadow-[0_0_8px]" style={{ backgroundColor: tech.color }} />
            <span className="text-white tracking-wide">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
