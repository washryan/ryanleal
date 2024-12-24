import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import ScrollIndicator from './ScrollIndicator'
import FloatingTechStack from './FloatingTechStack'
import ParticleField from './ParticleField'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null)

  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage="/images/hero-background.jpg"
      bgImageAlt="Hero Background"
      strength={-200}
    >
      <section className={styles.hero}>
        <ParticleField />
        <div className={styles.container}>
          <div className={styles.content}>
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className={styles.greeting}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Olá, eu sou
              </motion.span>
              <motion.h1 
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Ryan Leal
              </motion.h1>
              <motion.p 
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Desenvolvedor Full-Stack Java & Front-End em Formação
              </motion.p>
              <motion.div
                className={styles.cta}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.a
                  href="#projects"
                  className={styles.ctaButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Projetos
                </motion.a>
              </motion.div>
              <FloatingTechStack />
            </motion.div>

            <motion.div
              className={styles.imageContainer}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/ryan-leal.jpg"
                  alt="Ryan Leal"
                  width={300}
                  height={400}
                  className={styles.profileImage}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div ref={sceneRef} className={styles.scene} />
        <ScrollIndicator />
      </section>
    </Parallax>
  )
}

