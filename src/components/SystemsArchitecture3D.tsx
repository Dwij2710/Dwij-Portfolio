import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Server, Database, Radio, Cpu, Cloud, Shield, Activity, Sparkles, Terminal, ArrowRight, Layers, CheckCircle2 } from 'lucide-react'

interface SystemNode {
  id: string
  name: string
  category: string
  x: number // relative % (0-100)
  y: number // relative % (0-100)
  icon: any
  color: string
  latency: string
  protocol: string
  description: string
  techs: string[]
  metrics: { label: string; val: string }[]
}

interface StreamParticle {
  fromId: string
  toId: string
  progress: number
  speed: number
  color: string
}

const systemNodes: SystemNode[] = [
  {
    id: 'client',
    name: 'CLIENT & WEBRTC',
    category: 'Ingestion Layer',
    x: 12,
    y: 45,
    icon: Radio,
    color: '#06B6D4',
    latency: '15ms RTT',
    protocol: 'WebRTC / WSS',
    description: 'Browser & mobile client streaming bidirectional raw Opus audio packets with acoustic voice activity detection (VAD).',
    techs: ['LiveKit Client SDK', 'WebRTC DataChannels', 'Acoustic VAD'],
    metrics: [{ label: 'Audio Sample Rate', val: '48 kHz' }, { label: 'Jitter Buffer', val: '20ms' }],
  },
  {
    id: 'sfu',
    name: 'LIVEKIT SFU CLUSTER',
    category: 'Real-Time Media',
    x: 32,
    y: 28,
    icon: Activity,
    color: '#10B981',
    latency: '<25ms',
    protocol: 'WebRTC SFU',
    description: 'Selective Forwarding Unit managing low-latency audio stream distribution, packet loss concealment, and dynamic bitrate adaptation.',
    techs: ['LiveKit Server', 'Go SFU', 'TURN/STUN'],
    metrics: [{ label: 'Packet Loss Recovery', val: '99.9%' }, { label: 'Concurrency', val: '10k streams' }],
  },
  {
    id: 'gateway',
    name: 'CADDY TLS REVERSE PROXY',
    category: 'Edge & Ingress',
    x: 32,
    y: 65,
    icon: Shield,
    color: '#8B5CF6',
    latency: '<2ms',
    protocol: 'HTTP/2 • TLS 1.3',
    description: 'Reverse proxy terminating automated SSL/TLS certificates and routing REST API & WebSocket traffic to backend microservices.',
    techs: ['Caddy Server', 'Automatic HTTPS', 'Gzip/Zstd'],
    metrics: [{ label: 'TLS Handshake', val: '<1.2ms' }, { label: 'Ingress Rate', val: '100k req/s' }],
  },
  {
    id: 'fastapi',
    name: 'FASTAPI MICROSERVICES',
    category: 'Core Execution',
    x: 52,
    y: 45,
    icon: Server,
    color: '#6366F1',
    latency: '8ms P99',
    protocol: 'ASGI • Python 3.11',
    description: 'Asynchronous event-driven orchestrator managing multi-turn dialog state machines, repeat-request interceptors, and candidate screening pipelines.',
    techs: ['FastAPI', 'Asyncio', 'Pydantic v2', 'HTTPX'],
    metrics: [{ label: 'Throughput', val: '12k req/s' }, { label: 'P99 Execution', val: '<8ms' }],
  },
  {
    id: 'llm',
    name: 'AI MODEL INFERENCE',
    category: 'Intelligence Engine',
    x: 72,
    y: 25,
    icon: Cpu,
    color: '#F59E0B',
    latency: '<350ms TTFT',
    protocol: 'Streaming SSE',
    description: 'GPT-4o reasoning scaffold, ElevenLabs / Sarvam AI speech synthesis, and LLM-as-a-Judge answer-validity evaluation gating.',
    techs: ['OpenAI GPT-4o', 'ElevenLabs', 'Sarvam AI', 'gpt-4o-mini Judge'],
    metrics: [{ label: 'TTFT', val: '<350ms' }, { label: 'Judge Pass Rate', val: '99.8%' }],
  },
  {
    id: 'redis',
    name: 'REDIS STATE BUFFER',
    category: 'In-Memory Cache',
    x: 72,
    y: 68,
    icon: Database,
    color: '#EF4444',
    latency: '<1ms',
    protocol: 'RESP Protocol',
    description: 'Distributed 24-hour session handoff buffer providing zero-data-loss disconnect/reconnect recovery for active interviews and conversations.',
    techs: ['Redis 7 Cluster', 'Pub/Sub', 'Hash Sets'],
    metrics: [{ label: 'State Retention', val: '24h TTL' }, { label: 'Op Latency', val: '0.4ms' }],
  },
  {
    id: 'cloud',
    name: 'AWS EC2 & CI/CD',
    category: 'Cloud Infrastructure',
    x: 88,
    y: 45,
    icon: Cloud,
    color: '#3B82F6',
    latency: '99.99% Uptime',
    protocol: 'AWS IAM OIDC',
    description: 'Containerized multi-service stacks deployed across AWS EC2 with Docker Compose, automated CodeBuild pipelines, and S3 asset persistence.',
    techs: ['AWS EC2', 'Docker Compose', 'AWS S3', 'CodeBuild CI/CD'],
    metrics: [{ label: 'Availability', val: '99.99%' }, { label: 'CI/CD Pipeline', val: 'Automated' }],
  },
]

const connections = [
  { from: 'client', to: 'sfu' },
  { from: 'client', to: 'gateway' },
  { from: 'sfu', to: 'fastapi' },
  { from: 'gateway', to: 'fastapi' },
  { from: 'fastapi', to: 'llm' },
  { from: 'fastapi', to: 'redis' },
  { from: 'llm', to: 'fastapi' },
  { from: 'fastapi', to: 'cloud' },
]

export default function SystemsArchitecture3D() {
  const [selectedNode, setSelectedNode] = useState<SystemNode>(systemNodes[3]) // Default to FastAPI
  const [activeHoverNode, setActiveHoverNode] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Animated data streams on 2D canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const particles: StreamParticle[] = [
      { fromId: 'client', toId: 'sfu', progress: 0.1, speed: 0.008, color: '#06B6D4' },
      { fromId: 'client', toId: 'gateway', progress: 0.5, speed: 0.01, color: '#06B6D4' },
      { fromId: 'sfu', toId: 'fastapi', progress: 0.3, speed: 0.012, color: '#10B981' },
      { fromId: 'gateway', toId: 'fastapi', progress: 0.7, speed: 0.01, color: '#8B5CF6' },
      { fromId: 'fastapi', toId: 'llm', progress: 0.2, speed: 0.009, color: '#F59E0B' },
      { fromId: 'llm', toId: 'fastapi', progress: 0.8, speed: 0.011, color: '#F59E0B' },
      { fromId: 'fastapi', toId: 'redis', progress: 0.4, speed: 0.014, color: '#EF4444' },
      { fromId: 'fastapi', toId: 'cloud', progress: 0.6, speed: 0.008, color: '#3B82F6' },
    ]

    const render = () => {
      const w = (canvas.width = canvas.parentElement?.clientWidth || 800)
      const h = (canvas.height = canvas.parentElement?.clientHeight || 450)
      ctx.clearRect(0, 0, w, h)

      // Draw connection lines
      connections.forEach((conn) => {
        const fromNode = systemNodes.find((n) => n.id === conn.from)
        const toNode = systemNodes.find((n) => n.id === conn.to)
        if (!fromNode || !toNode) return

        const x1 = (fromNode.x / 100) * w
        const y1 = (fromNode.y / 100) * h
        const x2 = (toNode.x / 100) * w
        const y2 = (toNode.y / 100) * h

        const isHighlighted =
          activeHoverNode === fromNode.id || activeHoverNode === toNode.id ||
          selectedNode.id === fromNode.id || selectedNode.id === toNode.id

        // Line
        ctx.strokeStyle = isHighlighted ? 'rgba(139, 92, 246, 0.6)' : 'rgba(255, 255, 255, 0.08)'
        ctx.lineWidth = isHighlighted ? 2 : 1
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      })

      // Update and draw glowing data stream pulses
      particles.forEach((p) => {
        const fromNode = systemNodes.find((n) => n.id === p.fromId)
        const toNode = systemNodes.find((n) => n.id === p.toId)
        if (!fromNode || !toNode) return

        p.progress += p.speed
        if (p.progress >= 1) p.progress = 0

        const x1 = (fromNode.x / 100) * w
        const y1 = (fromNode.y / 100) * h
        const x2 = (toNode.x / 100) * w
        const y2 = (toNode.y / 100) * h

        const px = x1 + (x2 - x1) * p.progress
        const py = y1 + (y2 - y1) * p.progress

        // Glowing packet
        ctx.fillStyle = p.color
        ctx.shadowColor = p.color
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(px, py, 3, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationId = requestAnimationFrame(render)
    }

    render()

    return () => cancelAnimationFrame(animationId)
  }, [activeHoverNode, selectedNode])

  return (
    <section id="systems" className="py-24 sm:py-32 relative border-t border-white/[0.06] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="ambient-glow-violet top-10 left-1/4 opacity-30" />
      <div className="ambient-glow-cyan bottom-10 right-1/4 opacity-25" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-glow" />
          <span className="font-mono text-xs font-bold text-cyan-light tracking-[0.25em] uppercase">
            04 // INTERACTIVE SYSTEM ARCHITECTURE
          </span>
        </div>

        <div className="max-w-3xl space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            END-TO-END <br />
            <span className="text-gradient-violet-cyan">INFRASTRUCTURE DAG.</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed font-normal">
            An interactive representation of the real-time AI streaming topologies and distributed state engines I architect. Click on any node to inspect latency metrics, protocols, and data contracts.
          </p>
        </div>

        {/* 2-Column: Interactive Node Canvas + Real-Time Telemetry Inspector */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Infrastructure Visualizer Canvas (8 Cols) */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl min-h-[460px] sm:min-h-[540px] relative overflow-hidden flex flex-col justify-between select-none">
            {/* HUD Status bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-20">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-glow" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Topology Mesh // Interactive Node Inspector
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-glow font-bold">
                <span className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
                <span>DATA STREAMS ACTIVE</span>
              </div>
            </div>

            {/* Canvas for animated data stream lines */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

            {/* Interactive Nodes Placed in Spatial DAG */}
            <div className="relative w-full h-[360px] sm:h-[420px] z-20">
              {systemNodes.map((node) => {
                const Icon = node.icon
                const isSelected = selectedNode.id === node.id

                return (
                  <motion.button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setActiveHoverNode(node.id)}
                    onMouseLeave={() => setActiveHoverNode(null)}
                    data-cursor={node.name}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-2xl glass-pill border transition-all duration-300 flex flex-col items-center gap-2 group ${
                      isSelected
                        ? 'border-violet-glow bg-violet-600/25 shadow-[0_0_25px_rgba(139,92,246,0.5)] ring-2 ring-violet-500/40 scale-110'
                        : 'border-white/10 hover:border-white/30 hover:scale-105 bg-black/60'
                    }`}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6"
                      style={{ backgroundColor: `${node.color}25`, color: node.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-white tracking-wider whitespace-nowrap text-center">
                      {node.name.split(' ')[0]}
                    </span>
                    <span className="font-mono text-[9px] text-secondary font-semibold">
                      {node.latency}
                    </span>
                  </motion.button>
                )
              })}
            </div>

            {/* Bottom Help Tip */}
            <div className="relative z-20 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-muted">
              <span>● Click any node to inspect technical contracts</span>
              <span>7 Interconnected Topology Nodes</span>
            </div>
          </div>

          {/* Right: Technical Node Inspector Telemetry HUD (4 Cols) */}
          <div className="lg:col-span-4 glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="space-y-2 border-b border-white/10 pb-5">
              <span className="font-mono text-[10px] font-bold text-violet-light tracking-widest uppercase bg-violet-600/20 px-2.5 py-0.5 rounded-full border border-violet-500/30">
                {selectedNode.category}
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight pt-1">
                {selectedNode.name}
              </h3>
              <p className="font-mono text-xs text-cyan-light font-semibold">
                Protocol: {selectedNode.protocol} • Latency: {selectedNode.latency}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-secondary leading-relaxed font-normal">
              {selectedNode.description}
            </p>

            {/* Quantified Node Metrics */}
            <div className="space-y-2.5 pt-2">
              <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Telemetry Specifications
              </p>
              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                {selectedNode.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-muted text-[10px] uppercase font-bold block">{m.label}</span>
                    <span className="text-white font-bold block text-sm">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack items */}
            <div className="space-y-2.5 pt-2">
              <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Integrated Frameworks & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedNode.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-medium text-white px-3 py-1 rounded-full bg-white/[0.05] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
