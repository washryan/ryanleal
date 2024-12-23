import { motion } from 'framer-motion'
import styles from '../styles/SkillsSection.module.css'

interface Skill {
  name: string
  level: number
  color: string
  icon: string
}

const skills: Skill[] = [
  { name: 'Java', level: 85, color: '#f89820', icon: '☕' },
  { name: 'Spring Boot', level: 80, color: '#6db33f', icon: '🍃' },
  { name: 'React', level: 75, color: '#61dafb', icon: '⚛️' },
  { name: 'TypeScript', level: 70, color: '#3178c6', icon: '📘' },
  { name: 'Next.js', level: 65, color: '#ffffff', icon: '▲' },
  { name: 'Node.js', level: 70, color: '#339933', icon: '💚' },
  { name: 'MySQL', level: 75, color: '#4479a1', icon: '🐬' },
  { name: 'MongoDB', level: 65, color: '#47a248', icon: '🍃' }
]

export default function SkillsSection() {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Habilidades Técnicas</h2>
      <div className={styles.container}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={styles.skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.iconWrapper} style={{ backgroundColor: `${skill.color}22` }}>
              <span className={styles.icon}>{skill.icon}</span>
            </div>
            <div className={styles.info}>
              <span className={styles.name}>{skill.name}</span>
              <div className={styles.levelWrapper}>
                <motion.div
                  className={styles.level}
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

