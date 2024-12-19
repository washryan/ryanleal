import { motion } from 'framer-motion'
import styles from '../styles/WorkExperienceSection.module.css'

const experiences = [
  {
    date: '',
    title: '',
    company: '',
    description: '',
    color: '#ff6496'
  }
  // Adicione mais experiências profissionais aqui quando tiver
]

export default function WorkExperienceSection() {
  return (
    <section id="work-experience" className={styles.workExperience}>
      <div className={styles.container}>
        <h2 className={styles.title}>Experiência Profissional</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.timelineContent} style={{ borderColor: exp.color }}>
                <span className={styles.date} style={{ color: exp.color }}>{exp.date}</span>
                <h3 className={styles.timelineTitle}>{exp.title}</h3>
                <span className={styles.company}>{exp.company}</span>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

