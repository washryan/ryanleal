import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from '../styles/SkillsSection.module.css'

interface Skill {
  name: string
  level: number
  color: string
  icon: string
}

const skills: Skill[] = [
  { name: 'HTML', level: 100, color: '#E34F26', icon: '🔶' },
  { name: 'CSS', level: 75, color: '#1572B6', icon: '🎨' },
  { name: 'JavaScript', level: 75, color: '#F7DF1E', icon: '🚀' },
  { name: 'jQuery', level: 65, color: '#0769AD', icon: '📟' }
]

interface SkillsSectionProps {
  id: string;
}

export default function SkillsSection({ id }: SkillsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id={id} ref={ref} className={styles.skills}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Habilidades Técnicas
      </motion.h2>
      <div className={styles.container}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={styles.skill}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
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

