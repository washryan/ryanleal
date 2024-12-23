import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import styles from '../styles/FloatingTechStack.module.css'

const technologies = [
  { name: 'Java', icon: '☕', color: '#f89820' },
  { name: 'Spring', icon: '🍃', color: '#6db33f' },
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'TypeScript', icon: '📘', color: '#3178c6' },
  { name: 'Next.js', icon: '▲', color: '#ffffff' },
  { name: 'Node.js', icon: '💚', color: '#339933' },
  { name: 'MySQL', icon: '🐬', color: '#4479a1' },
  { name: 'Git', icon: '📦', color: '#f05032' }
]

export default function FloatingTechStack() {
  const controls = useAnimation()

  useEffect(() => {
    const animateItems = async () => {
      await controls.start(i => ({
        y: [0, -15, 0],
        transition: {
          delay: i * 0.2,
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }))
    }
    animateItems()
  }, [controls])

  return (
    <div className={styles.container}>
      {technologies.map((tech, i) => (
        <motion.div
          key={tech.name}
          className={styles.item}
          style={{ backgroundColor: `${tech.color}22` }}
          custom={i}
          animate={controls}
          whileHover={{ 
            scale: 1.2,
            backgroundColor: `${tech.color}44`,
            transition: { duration: 0.2 }
          }}
        >
          <span className={styles.icon}>{tech.icon}</span>
          <span className={styles.name}>{tech.name}</span>
        </motion.div>
      ))}
    </div>
  )
}

