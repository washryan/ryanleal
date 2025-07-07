"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import styles from "../styles/GlassmorphismCard.module.css"

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  intensity?: "light" | "medium" | "strong"
  gradient?: boolean
}

export default function GlassmorphismCard({
  children,
  className = "",
  intensity = "medium",
  gradient = false,
}: GlassmorphismCardProps) {
  return (
    <motion.div
      className={`${styles.card} ${styles[intensity]} ${gradient ? styles.gradient : ""} ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.backdrop} />
      <div className={styles.border} />
      <div className={styles.content}>{children}</div>
    </motion.div>
  )
}
