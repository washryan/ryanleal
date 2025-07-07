"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle, AlertCircle, Info, X } from "lucide-react"
import styles from "../styles/ToastNotification.module.css"

interface ToastProps {
  id: string
  type: "success" | "error" | "info"
  title: string
  message: string
  duration?: number
  onClose: (id: string) => void
}

export default function ToastNotification({ id, type, title, message, duration = 5000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id)
    }, duration)

    return () => clearTimeout(timer)
  }, [id, duration, onClose])

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
  }

  const Icon = icons[type]

  return (
    <motion.div
      className={`${styles.toast} ${styles[type]}`}
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      layout
    >
      <div className={styles.iconContainer}>
        <Icon size={20} />
      </div>

      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.message}>{message}</p>
      </div>

      <motion.button
        className={styles.closeButton}
        onClick={() => onClose(id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X size={16} />
      </motion.button>

      <motion.div
        className={styles.progressBar}
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: duration / 1000, ease: "linear" }}
      />
    </motion.div>
  )
}
