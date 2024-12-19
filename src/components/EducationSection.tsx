import { motion } from 'framer-motion'
import styles from '../styles/EducationSection.module.css'

const educations = [
  {
    date: '2023 - Presente',
    title: 'Desenvolvimento Full-Stack Java',
    institution: 'Escola Britânica de Artes Criativas (EBAC)',
    description: 'Curso completo de desenvolvimento Full-Stack com foco em Java e tecnologias web modernas.',
    color: '#64ffda'
  }
]

export default function EducationSection() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>Educação</h2>
        <div className={styles.timeline}>
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.timelineContent} style={{ borderColor: edu.color }}>
                <span className={styles.date} style={{ color: edu.color }}>{edu.date}</span>
                <h3 className={styles.timelineTitle}>{edu.title}</h3>
                <span className={styles.institution}>{edu.institution}</span>
                <p className={styles.description}>{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

