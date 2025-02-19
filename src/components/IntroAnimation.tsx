import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/IntroAnimation.module.css'

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4500)

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 3)
    }, 1500)

    return () => {
      clearTimeout(timer)
      clearInterval(stepTimer)
    }
  }, [])

  const steps = [
    { text: '> Inicializando...', color: '#64ffda' },
    { text: '> Carregando habilidades...', color: '#ff6496' },
    { text: '> Pronto!', color: '#64ffda' }
  ]

  return (
    <AnimatePresence mode="wait">
      {showIntro && (
        <motion.div
          className={styles.container}
          initial={{ backgroundColor: '#0f1117' }}
          animate={{ 
            backgroundColor: ['#0f1117', '#0a192f', '#0f1117'],
            transition: { duration: 4, times: [0, 0.5, 1] }
          }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.content}>
            <motion.div
              className={styles.logo}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={styles.glitchText}
                animate={{
                  textShadow: [
                    '0 0 0 #64ffda',
                    '2px 2px 0 #ff6496',
                    '-2px -2px 0 #64ffda',
                    '0 0 0 #64ffda'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {'<RyanLeal />'}
              </motion.div>
            </motion.div>

            <motion.div className={styles.terminal}>
              {steps.map((step, index) => (
                index <= currentStep && (
                  <motion.div
                    key={step.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: step.color }}
                    className={styles.terminalLine}
                  >
                    {step.text}
                  </motion.div>
                )
              ))}
              <motion.div
                className={styles.cursor}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

