import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
    title: "Assistente de TI",
    company: "Assaí Atacadista,",
    period: "2025 - Presente",
    description: [
      "Desenvolvimento e manutenção de programas de computador conforme diretrizes técnicas.",
      "Suporte à equipe da Frente de Caixa, solucionando problemas sistêmicos para evitar interrupções.",
      "Acompanhamento de chamados e assistência na manutenção de equipamentos e sistemas."
    ],
    type: "work"
  },
  {
    title: 'Analise e Desenvolvimento de Sistemas (1º Período)',
    company: 'Faculdade Maurício de Nassau',
    period: '2025 - Presente',
    description: [
      'Graduação em Análise e Desenvolvimento de Sistemas',
      'Foco em aprofundar conhecimentos em programação e sistemas de informação',
      'Preparação para carreira profissional na área de tecnologia'
    ],
    type: 'education'
  },
  {
    title: 'Estudante de Desenvolvimento Full-Stack Java',
    company: 'EBAC - Escola Britânica de Artes Criativas e Tecnologia',
    period: '2022 - Presente',
    description: [
      'Aprendendo Java, Spring Boot, e desenvolvimento web moderno',
      'Trabalhando em projetos práticos e colaborativos',
      'Desenvolvendo habilidades em front-end e back-end'
    ],
    type: 'education'
  },
  {
    title:'"Jovem Aprendiz - Setor de TI',
    company: 'Construtora Venâncio',
    period: '2021 - 2022',
    description: [
      'Realizava o envio de notas fiscais no sistema interno.',
      'Executava montagem e manutenção de computadores.',
      'Prestava suporte técnico e auxiliava na manutenção de sistemas.'
    ],
    type: "work"
  }
]

interface ExperienceTimelineProps {
  id: string;
}

export default function ExperienceTimeline({ id }: ExperienceTimelineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id={id} ref={ref} className={styles.timeline}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Experiência e Educação
      </motion.h2>
      <div className={styles.container}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`${styles.item} ${styles[exp.type]}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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

