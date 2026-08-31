import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface TechBadge {
  name: string
  color: string
  orbitRadius: number
  speed: number
  initialAngle: number
  yOffset: number
}

const orbitalTechs: TechBadge[] = [
  { name: 'GPT-4o', color: '#8B5CF6', orbitRadius: 2.8, speed: 0.4, initialAngle: 0, yOffset: 0.6 },
  { name: 'FastAPI', color: '#06B6D4', orbitRadius: 3.2, speed: -0.3, initialAngle: 1.2, yOffset: -0.8 },
  { name: 'WebRTC', color: '#6366F1', orbitRadius: 2.5, speed: 0.5, initialAngle: 2.4, yOffset: 1.2 },
  { name: 'Redis State', color: '#EF4444', orbitRadius: 3.6, speed: -0.25, initialAngle: 3.6, yOffset: 0.2 },
  { name: 'LiveKit SFU', color: '#10B981', orbitRadius: 2.9, speed: 0.35, initialAngle: 4.5, yOffset: -1.2 },
  { name: 'Docker / AWS', color: '#3B82F6', orbitRadius: 3.4, speed: 0.2, initialAngle: 5.5, yOffset: 1.0 },
  { name: 'ElevenLabs', color: '#F59E0B', orbitRadius: 2.7, speed: -0.45, initialAngle: 2.0, yOffset: -0.4 },
]

export default function ThreeNeuralCore() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    // Scene setup
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

    // 1. Central Neural Computational Sphere (Icosahedron Wireframe)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2)
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      emissive: 0x6366f1,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    scene.add(coreMesh)

    // Inner Glowing Core Orb
    const innerGeo = new THREE.SphereGeometry(1.0, 32, 32)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.2,
      wireframe: false,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    scene.add(innerMesh)

    // 2. Surrounding Neural Point Cloud
    const particleCount = 450
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)

    const colorViolet = new THREE.Color(0x8b5cf6)
    const colorCyan = new THREE.Color(0x06b6d4)
    const colorWhite = new THREE.Color(0xffffff)

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      particlePositions[i * 3 + 2] = radius * Math.cos(phi)

      const mixedColor = Math.random() > 0.5 ? colorViolet : Math.random() > 0.3 ? colorCyan : colorWhite
      particleColors[i * 3] = mixedColor.r
      particleColors[i * 3 + 1] = mixedColor.g
      particleColors[i * 3 + 2] = mixedColor.b
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

    // 3. Orbiting Data Rings
    const ringGeo = new THREE.TorusGeometry(2.3, 0.015, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.4,
    })
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat)
    ringMesh1.rotation.x = Math.PI / 3
    ringMesh1.rotation.y = Math.PI / 6
    scene.add(ringMesh1)

    const ringMesh2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.012, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.35 })
    )
    ringMesh2.rotation.x = -Math.PI / 4
    ringMesh2.rotation.y = Math.PI / 4
    scene.add(ringMesh2)

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
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

      targetRotationY = mouseX * 0.6
      targetRotationX = -mouseY * 0.4
    }

    container.addEventListener('mousemove', handleMouseMove)

    // Resize
    const handleResize = () => {
      if (!container) return
      width = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    let clock = new THREE.Clock()
    let animationFrameId: number

    const animate = () => {
      const delta = clock.getDelta()
      const time = clock.getElapsedTime()

      // Core rotation
      coreMesh.rotation.y += delta * 0.25
      coreMesh.rotation.x += delta * 0.15

      // Particle rotation
      particleSystem.rotation.y -= delta * 0.15
      particleSystem.rotation.z += delta * 0.05

      // Rings
      ringMesh1.rotation.z += delta * 0.2
      ringMesh2.rotation.z -= delta * 0.25

      // Mouse Parallax interpolation
      scene.rotation.y += (targetRotationY - scene.rotation.y) * 0.05
      scene.rotation.x += (targetRotationX - scene.rotation.x) * 0.05

      // Core Pulse
      const scale = 1 + Math.sin(time * 2) * 0.03
      coreMesh.scale.set(scale, scale, scale)
      innerMesh.scale.set(scale * 1.1, scale * 1.1, scale * 1.1)

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      renderer.dispose()
      coreGeo.dispose()
      coreMat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px] flex items-center justify-center select-none">
      {/* Background radial glow behind 3D core */}
      <div className="absolute w-72 h-72 rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-cyan-500/15 blur-[90px] pointer-events-none" />

      {/* WebGL Canvas */}
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing relative z-10" />

      {/* Floating 3D Technical Orbitals overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
        {orbitalTechs.map((tech, idx) => (
          <div
            key={tech.name}
            className={`hidden sm:flex absolute font-mono text-[11px] font-bold px-3 py-1 rounded-full glass-pill border shadow-xl items-center gap-1.5 transition-transform duration-700 pointer-events-auto ${
              idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-reverse'
            }`}
            style={{
              transform: `translate(${Math.cos(tech.initialAngle) * 160}px, ${Math.sin(tech.initialAngle) * 130 + tech.yOffset * 30}px)`,
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
