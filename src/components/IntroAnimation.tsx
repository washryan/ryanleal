"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styles from "../styles/IntroAnimation.module.css"

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const steps = [
      { delay: 500, action: () => setCurrentStep(1) },
      { delay: 1500, action: () => setCurrentStep(2) },
      { delay: 2500, action: () => setGlitchActive(true) },
      { delay: 3000, action: () => setCurrentStep(3) },
      { delay: 4000, action: () => setShowIntro(false) },
    ]

    steps.forEach(({ delay, action }) => {
      setTimeout(action, delay)
    })
  }, [])

  const codeLines = [
    "class Developer {",
    "  constructor() {",
    "    this.name = 'Ryan Leal';",
    "    this.role = 'Full-Stack Developer';",
    "    this.passion = 'Technology';",
    "  }",
    "}",
  ]

  return (
    <AnimatePresence mode="wait">
      {showIntro && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated Background */}
          <div className={styles.backgroundAnimation}>
            <motion.div
              className={styles.gridPattern}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.particle}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className={styles.content}>
            {/* Logo with enhanced animation */}
            <motion.div
              className={styles.logoSection}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
            >
              <motion.div
                className={`${styles.logo} ${glitchActive ? styles.glitch : ""}`}
                animate={
                  glitchActive
                    ? {
                        textShadow: ["0 0 0 #64ffda", "2px 2px 0 #ff6496, -2px -2px 0 #64ffda", "0 0 0 #64ffda"],
                      }
                    : {}
                }
                transition={{ duration: 0.5 }}
              >
                {"<RyanLeal />"}
              </motion.div>

              <motion.div
                className={styles.tagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Full-Stack Developer
              </motion.div>
            </motion.div>

            {/* Code Terminal */}
            <motion.div
              className={styles.terminal}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className={styles.terminalHeader}>
                <div className={styles.terminalButtons}>
                  <span className={styles.terminalButton} style={{ background: "#ff5f56" }} />
                  <span className={styles.terminalButton} style={{ background: "#ffbd2e" }} />
                  <span className={styles.terminalButton} style={{ background: "#27ca3f" }} />
                </div>
                <span className={styles.terminalTitle}>developer.js</span>
              </div>

              <div className={styles.terminalBody}>
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    className={styles.codeLine}
                    initial={{ opacity: 0, x: -20 }}
                    animate={currentStep >= 2 ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className={styles.lineNumber}>{index + 1}</span>
                    <span className={styles.codeText}>{line}</span>
                  </motion.div>
                ))}

                <motion.div
                  className={styles.cursor}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>

            {/* Loading Progress */}
            <motion.div
              className={styles.loadingSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <div className={styles.loadingText}>Inicializando experiência...</div>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2.8, duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Scan lines effect */}
          <div className={styles.scanLines} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
