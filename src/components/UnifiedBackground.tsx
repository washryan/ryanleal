"use client"

import { useEffect, useRef, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import styles from "../styles/UnifiedBackground.module.css"

export default function UnifiedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll()

  // Transform scroll progress to different background states
  const backgroundHue = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [220, 240, 260, 280, 300, 320])
  const particleCount = useTransform(scrollYProgress, [0, 1], [50, 150])
  const waveAmplitude = useTransform(scrollYProgress, [0, 1], [20, 60])

  const geometricShapeData = useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      left: `${10 + i * 12}%`,
      top: `${20 + (i % 3) * 30}%`,
      hueStart: 220 + i * 20,
      hueEnd: 320 + i * 20,
      duration: 10 + i * 2,
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      hue: number
      life: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (hue: number) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 0.5,
      hue,
      life: Math.random() * 100 + 50,
    })

    const animate = () => {
      ctx.fillStyle = "rgba(15, 17, 23, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const currentHue = backgroundHue.get()
      const currentParticleCount = Math.floor(particleCount.get())
      const currentWaveAmplitude = waveAmplitude.get()

      // Maintain particle count
      while (particles.length < currentParticleCount) {
        particles.push(createParticle(currentHue + Math.random() * 60 - 30))
      }

      // Update and draw particles
      particles = particles.filter((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life--

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Draw particle
        const alpha = particle.life / 100
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${alpha * 0.6})`
        ctx.fill()

        // Draw connections
        particles.forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `hsla(${currentHue}, 50%, 50%, ${(1 - distance / 100) * 0.2})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })

        return particle.life > 0
      })

      // Draw animated waves
      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2)

      for (let x = 0; x <= canvas.width; x += 10) {
        const y =
          canvas.height / 2 +
          Math.sin(x * 0.01 + Date.now() * 0.001) * currentWaveAmplitude +
          Math.sin(x * 0.02 + Date.now() * 0.002) * (currentWaveAmplitude * 0.5)

        ctx.lineTo(x, y)
      }

      ctx.strokeStyle = `hsla(${currentHue}, 60%, 50%, 0.1)`
      ctx.lineWidth = 2
      ctx.stroke()

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [backgroundHue, particleCount, waveAmplitude])

  return (
    <div className={styles.unifiedBackground}>
      {/* Animated gradient overlay */}
      <motion.div
        className={styles.gradientOverlay}
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.25, 0.5, 0.75, 1],
            [
              "linear-gradient(135deg, #0f1117 0%, #1a1f2e 50%, #0f1117 100%)",
              "linear-gradient(135deg, #0f1117 0%, #2a1f3d 50%, #1a1f2e 100%)",
              "linear-gradient(135deg, #1a1f2e 0%, #3d2a4f 50%, #2a1f3d 100%)",
              "linear-gradient(135deg, #2a1f3d 0%, #4f3d2a 50%, #3d2a4f 100%)",
              "linear-gradient(135deg, #3d2a4f 0%, #2a4f3d 50%, #4f3d2a 100%)",
            ],
          ),
        }}
      />

      {/* Canvas for particles and waves */}
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Floating geometric shapes */}
      <div className={styles.geometricShapes}>
        {geometricShapeData.map((shape, i) => (
          <motion.div
            key={i}
            className={styles.shape}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: shape.left,
              top: shape.top,
              background: useTransform(
                scrollYProgress,
                [0, 1],
                [`hsl(${shape.hueStart}, 70%, 50%)`, `hsl(${shape.hueEnd}, 70%, 50%)`],
              ),
            }}
          />
        ))}
      </div>

      {/* Morphing blobs */}
      <div className={styles.morphingBlobs}>
        <motion.div
          className={styles.blob1}
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            background: useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [
                "radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(78, 205, 196, 0.1) 0%, transparent 70%)",
              ],
            ),
          }}
        />

        <motion.div
          className={styles.blob2}
          animate={{
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "70% 30% 30% 70% / 70% 70% 30% 30%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
            ],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            background: useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [
                "radial-gradient(circle, rgba(255, 107, 107, 0.08) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(78, 205, 196, 0.08) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(150, 206, 180, 0.08) 0%, transparent 70%)",
              ],
            ),
          }}
        />
      </div>
    </div>
  )
}
