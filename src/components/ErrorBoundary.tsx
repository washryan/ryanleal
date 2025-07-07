"use client"

import type React from "react"
import { Component, type ReactNode } from "react"
import { motion } from "framer-motion"
import { RefreshCw, Home, AlertTriangle } from "lucide-react"
import styles from "../styles/ErrorBoundary.module.css"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className={styles.errorContainer}>
          <motion.div
            className={styles.errorContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={styles.errorIcon}
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <AlertTriangle size={64} />
            </motion.div>

            <h2 className={styles.errorTitle}>Oops! Algo deu errado</h2>
            <p className={styles.errorMessage}>
              Encontramos um erro inesperado. Não se preocupe, nossa equipe foi notificada.
            </p>

            <div className={styles.errorActions}>
              <motion.button
                className={styles.primaryButton}
                onClick={() => window.location.reload()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw size={20} />
                Recarregar Página
              </motion.button>

              <motion.button
                className={styles.secondaryButton}
                onClick={() => (window.location.href = "/")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home size={20} />
                Voltar ao Início
              </motion.button>
            </div>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className={styles.errorDetails}>
                <summary>Detalhes do Erro (Desenvolvimento)</summary>
                <pre className={styles.errorStack}>{this.state.error.stack}</pre>
              </details>
            )}
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}
