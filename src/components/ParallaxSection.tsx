"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import styles from "../styles/ParallaxSection.module.css"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
  backgroundImage?: string
  overlay?: boolean
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  backgroundImage,
  overlay = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? ["0%", `-${speed * 50}%`] : ["0%", `${speed * 50}%`],
  )

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  return (
    <div ref={ref} className={`${styles.section} ${className}`}>
      {backgroundImage && (
        <motion.div
          className={styles.background}
          style={{
            y,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      )}

      {overlay && <div className={styles.overlay} />}

      <motion.div className={styles.content} style={{ opacity, scale }}>
        {children}
      </motion.div>
    </div>
  )
}
