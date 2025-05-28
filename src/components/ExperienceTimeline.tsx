"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Award, GraduationCap, Briefcase } from "lucide-react"
import styles from "../styles/ExperienceTimeline.module.css"

interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
  type: "education" | "work"
  skills: string[]
  achievements?: string[]
  current?: boolean
}

const experiences: Experience[] = [
  {
    id: "assistente-ti",
    title: "Assistente TI",
    company: "Assaí Atacadista",
    location: "Petrolina - PE",
    period: "2025 - Presente",
    description: [
      "Manutenção e configuração de hardware e software",
      "Suporte técnico aos colaboradores",
      "Atualização e monitoramento de sistemas internos",
      "Gestão de redes e infraestrutura de TI",
    ],
    type: "work",
    skills: ["Hardware", "Software", "Redes", "Suporte Técnico"],
    achievements: ["Implementação de novos sistemas", "Otimização de processos"],
    current: true,
  },
  {
    id: "ads-faculdade",
    title: "Análise e Desenvolvimento de Sistemas",
    company: "Faculdade Maurício de Nassau",
    location: "EaD",
    period: "2025 - Presente",
    description: [
      "Graduação em Análise e Desenvolvimento de Sistemas",
      "Foco em aprofundar conhecimentos em programação e sistemas de informação",
      "Preparação para carreira profissional na área de tecnologia",
    ],
    type: "education",
    skills: ["Programação", "Sistemas", "Banco de Dados", "Engenharia de Software"],
    current: true,
  },
  {
    id: "fullstack-ebac",
    title: "Desenvolvimento Full-Stack Java",
    company: "EBAC - Escola Britânica de Artes Criativas e Tecnologia",
    location: "EaD",
    period: "2023 - Presente",
    description: [
      "Aprendendo Java, Spring Boot, e desenvolvimento web moderno",
      "Trabalhando em projetos práticos e colaborativos",
      "Desenvolvendo habilidades em front-end e back-end",
    ],
    type: "education",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "BootStrap", "SASS"],
    achievements: ["3+ projetos desenvolvidos"],
    current: true,
  },
  {
    id: "jovem-aprendiz",
    title: "Jovem Aprendiz - Setor de TI",
    company: "Construtora Venâncio",
    location: "Petrolina - PE",
    period: "2021 - 2022",
    description: [
      "Montagem, desmontagem e manutenção de computadores",
      "Suporte técnico e resolução de problemas em hardware e software",
      "Manutenção e atualização de sistemas utilizados",
    ],
    type: "work",
    skills: ["Hardware", "Manutenção", "Suporte Técnico", "Sistemas"],
    achievements: ["Primeira experiência profissional em TI", "Desenvolvimento de habilidades técnicas"],
  },
]

interface ExperienceTimelineProps {
  id: string
}

export default function ExperienceTimeline({ id }: ExperienceTimelineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id={id} ref={ref} className={styles.timeline}>
      <motion.div
        className={styles.container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          <span className={styles.titleIcon}>🚀</span>
          Jornada Profissional
          <span className={styles.titleSubtext}>Experiência & Educação</span>
        </motion.h2>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine} />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`${styles.timelineItem} ${styles[exp.type]}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
            >
              <div className={styles.timelineMarker}>
                {exp.type === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                {exp.current && <div className={styles.pulseRing} />}
              </div>

              <motion.div
                className={styles.timelineContent}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={styles.contentHeader}>
                  <div className={styles.titleSection}>
                    <h3 className={styles.experienceTitle}>{exp.title}</h3>
                    <div className={styles.companyInfo}>
                      <span className={styles.company}>{exp.company}</span>
                      {exp.current && <span className={styles.currentBadge}>Atual</span>}
                    </div>
                  </div>

                  <div className={styles.metaInfo}>
                    <div className={styles.period}>
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className={styles.location}>
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.description}>
                  {exp.description.map((item, i) => (
                    <motion.div
                      key={i}
                      className={styles.descriptionItem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className={styles.bullet}>▸</span>
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className={styles.skills}>
                  {exp.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className={styles.skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <AnimatePresence>
                  {selectedExperience === exp.id && exp.achievements && (
                    <motion.div
                      className={styles.achievements}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.achievementsHeader}>
                        <Award size={16} />
                        <span>Conquistas</span>
                      </div>
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className={styles.achievement}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className={styles.achievementIcon}>🏆</span>
                          {achievement}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button className={styles.expandButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {selectedExperience === exp.id ? "Ver menos" : "Ver mais"}
                  <ExternalLink size={16} />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div className={styles.stats} variants={itemVariants}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>1+</div>
            <div className={styles.statLabel}>Anos de Experiência</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>3+</div>
            <div className={styles.statLabel}>Projetos Desenvolvidos</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>7+</div>
            <div className={styles.statLabel}>Tecnologias Dominadas</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
