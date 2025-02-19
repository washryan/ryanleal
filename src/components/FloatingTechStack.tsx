import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import styles from '../styles/FloatingTechStack.module.css'

const technologies = [
  { name: 'HTML', icon: '🔶', color: '#E34F26' },
  { name: 'CSS', icon: '🎨', color: '#1572B6' },
  { name: 'JavaScript', icon: '🚀', color: '#F7DF1E' },
  { name: 'jQuery', icon: '📟', color: '#0769AD' },
  { name: 'jQuery Plugins', icon: '🛠️', color: '#0769AD' },
  { name: 'CSS Responsivo', icon: '📱', color: '#264de4' },
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

