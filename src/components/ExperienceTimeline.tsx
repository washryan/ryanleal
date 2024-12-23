import { motion } from 'framer-motion'
import styles from '../styles/ExperienceTimeline.module.css'

interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  type: 'education' | 'work'
}

const experiences: Experience[] = [
  {
    title: 'Estudante de Desenvolvimento Full-Stack Java',
    company: 'EBAC - Escola Britânica de Artes Criativas e Tecnologia',
    period: '2023 - Presente',
    description: [
      'Aprendendo Java, Spring Boot, e desenvolvimento web moderno',
      'Trabalhando em projetos práticos e colaborativos',
      'Desenvolvendo habilidades em front-end e back-end'
    ],
    type: 'education'
  },
  {
    title: 'Projeto Pessoal - EcoCode',
    company: 'Desenvolvimento Independente',
    period: '2023',
    description: [
      'Criação de uma plataforma de e-commerce sustentável',
      'Utilização de Java, Spring Boot, React, e MySQL',
      'Implementação de práticas de desenvolvimento sustentável'
    ],
    type: 'work'
  },
  {
    title: 'Futuro Estudante de ADS',
    company: 'Instituição a ser definida',
    period: '2025 - Futuro',
    description: [
      'Planejando iniciar graduação em Análise e Desenvolvimento de Sistemas',
      'Foco em aprofundar conhecimentos em programação e sistemas de informação',
      'Preparação para carreira profissional na área de tecnologia'
    ],
    type: 'education'
  }
]

export default function ExperienceTimeline() {
  return (
    <section className={styles.timeline}>
      <h2 className={styles.title}>Experiência e Educação</h2>
      <div className={styles.container}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`${styles.item} ${styles[exp.type]}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.content}>
              <h3 className={styles.itemTitle}>{exp.title}</h3>
              <p className={styles.company}>{exp.company}</p>
              <p className={styles.period}>{exp.period}</p>
              <ul className={styles.description}>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

