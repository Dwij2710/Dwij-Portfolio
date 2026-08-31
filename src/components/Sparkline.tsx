import React from 'react'

interface SparklineProps {
  data?: number[]
  color?: 'signal' | 'data'
  width?: number
  height?: number
  className?: string
}

export default function Sparkline({
  data = [12, 18, 14, 26, 22, 34, 30, 42, 38, 48],
  color = 'signal',
  width = 64,
  height = 20,
  className = '',
}: SparklineProps) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  const points = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * (width - 4) + 2
      const y = height - 3 - ((val - min) / range) * (height - 6)
      return `${x},${y}`
    })
    .join(' ')

  const strokeColor = color === 'signal' ? '#FF8A3D' : '#45D9C8'
  const fillColor = color === 'signal' ? 'rgba(255, 138, 61, 0.12)' : 'rgba(69, 217, 200, 0.12)'

  // Generate fill polygon
  const firstX = 2
  const lastX = width - 2
  const fillPoints = `${firstX},${height} ${points} ${lastX},${height}`

  return (
    <svg
      width={width}
      height={height}
      className={`overflow-visible ${className}`}
      aria-hidden="true"
    >
      {/* Fill Area */}
      <polygon points={fillPoints} fill={fillColor} />
      {/* Line */}
      <polyline
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      {/* Active Pulse Dot at end */}
      {data.length > 0 && (
        <circle
          cx={width - 2}
          cy={height - 3 - ((data[data.length - 1] - min) / range) * (height - 6)}
          r="2"
          fill={strokeColor}
          className="animate-ping"
        />
      )}
    </svg>
  )
}
