import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/IntroAnimation.module.css'

export default function IntroAnimation() {
  const [mostrarIntro, setMostrarIntro] = useState(true)
  const letras = 'RYAN LEAL'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarIntro(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {mostrarIntro && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.content}>
            {letras.map((letra, index) => (
              <motion.span
                key={index}
                className={styles.letter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {letra === ' ' ? '\u00A0' : letra}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

