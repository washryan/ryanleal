"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "./ToastProvider"
import styles from "../styles/KonamiCode.module.css"

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

export default function KonamiCode() {
  const [sequence, setSequence] = useState<string[]>([])
  const [isActivated, setIsActivated] = useState(false)
  const { addToast } = useToast()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setSequence((prev) => {
        const newSequence = [...prev, event.code].slice(-KONAMI_CODE.length)

        if (newSequence.join(",") === KONAMI_CODE.join(",")) {
          setIsActivated(true)
          addToast({
            type: "success",
            title: "🎮 Konami Code Ativado!",
            message: "Você desbloqueou o modo desenvolvedor secreto!",
            duration: 5000,
          })

          // Ativar efeitos especiais
          document.body.classList.add("konami-mode")

          setTimeout(() => {
            setIsActivated(false)
            document.body.classList.remove("konami-mode")
          }, 10000)

          return []
        }

        return newSequence
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [addToast])

  return (
    <AnimatePresence>
      {isActivated && (
        <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            className={styles.content}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2>🎮 MODO DESENVOLVEDOR ATIVADO!</h2>
            <p>Você encontrou o easter egg secreto!</p>
            <div className={styles.matrix}>
              {[...Array(50)].map((_, i) => (
                <motion.span
                  key={i}
                  className={styles.matrixChar}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                >
                  {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
