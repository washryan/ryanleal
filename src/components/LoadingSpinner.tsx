"use client"

import { motion } from "framer-motion"
import styles from "../styles/LoadingSpinner.module.css"

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large"
  color?: string
}

export default function LoadingSpinner({ size = "medium", color = "#64ffda" }: LoadingSpinnerProps) {
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  }

  return (
    <div className={`${styles.spinner} ${sizeClasses[size]}`}>
      <motion.div
        className={styles.circle}
        style={{ borderTopColor: color }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
