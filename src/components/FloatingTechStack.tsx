import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import styles from '../styles/FloatingTechStack.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faGitAlt,
  faBootstrap,
  faSass
} from '@fortawesome/free-brands-svg-icons'

const technologies = [
  { name: 'HTML', icon: faHtml5, color: '#E34F26' },
  { name: 'CSS', icon: faCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
  { name: 'jQuery', icon: faCode, color: '#0769AD' },
  { name: 'CSS Responsivo', icon: faMobileAlt, color: '#264de4' },
  { name: 'Git', icon: faGitAlt, color: '#f05032' },
  { name: 'Bootstrap', icon: faBootstrap, color: '#7952B3' },
  { name: 'SASS', icon: faSass, color: '#ff7b94'}
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
          <span className={styles.icon}>
            <FontAwesomeIcon icon={tech.icon} style={{ color: tech.color }} />
          </span>
          <span className={styles.name}>{tech.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
