"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faHtml5, faCss3Alt, faJs, faGitAlt, faBootstrap, faSass } from "@fortawesome/free-brands-svg-icons"
import styles from "../styles/Skills3DCarousel.module.css"

interface Skill {
  id: string
  name: string
  level: number
  icon: any
  iconType: "lucide" | "fontawesome"
  color: string
  category: "frontend" | "backend" | "tools" | "learning"
  description: string
  projects: number
  experience: string
}

const skills: Skill[] = [
  {
    id: "html",
    name: "HTML5",
    level: 100,
    icon: faHtml5,
    iconType: "fontawesome",
    color: "#E34F26",
    category: "frontend",
    description: "Estruturação semântica e acessível de páginas web",
    projects: 3,
    experience: "1+ anos",
  },
  {
    id: "css",
    name: "CSS3",
    level: 75,
    icon: faCss3Alt,
    iconType: "fontawesome",
    color: "#1572B6",
    category: "frontend",
    description: "Layouts responsivos, animações e design moderno",
    projects: 6,
    experience: "1+ anos",
  },
  {
    id: "javascript",
    name: "JavaScript",
    level: 50,
    icon: faJs,
    iconType: "fontawesome",
    color: "#F7DF1E",
    category: "frontend",
    description: "Programação dinâmica e interativa",
    projects: 6,
    experience: "6+ meses",
  },
  {
    id: "jquery",
    name: "jQuery",
    level: 45,
    icon: faCode,
    iconType: "fontawesome",
    color: "#0769AD",
    category: "tools",
    description: "Biblioteca para manipulação DOM e plugins",
    projects: 2,
    experience: "6+ meses",
  },
  {
    id: "git",
    name: "Git",
    level: 100,
    icon: faGitAlt,
    iconType: "fontawesome",
    color: "#f05032",
    category: "tools",
    description: "Controle de versão e colaboração",
    projects: 6,
    experience: "2+ anos",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    level: 35,
    icon: faBootstrap,
    iconType: "fontawesome",
    color: "#7952B3",
    category: "frontend",
    description: "Framework CSS para desenvolvimento rápido",
    projects: 1,
    experience: "3+ meses",
  },
  {
    id: "sass",
    name: "SASS",
    level: 20,
    icon: faSass,
    iconType: "fontawesome",
    color: "#ff7b94",
    category: "frontend",
    description: "Pré-processador CSS para melhor organização",
    projects: 1,
    experience: "1+ meses",
  },
  {
    id: "less",
    name: "LESS",
    level: 20,
    icon: faCode,
    iconType: "fontawesome",
    color: "#1D365D",
    category: "frontend",
    description: "Pré-processador CSS para melhor organização e variáveis",
    projects: 1,
    experience: "1+ meses",
  },
  {
  id: "grunt",
  name: "GruntJS",
  level: 20,
  icon: faCode,
  iconType: "fontawesome",
  color: "#FBA919", // Cor baseada na logo do Grunt
  category: "tools",
  description: "Automação de tarefas front-end com pré-processadores, minificação, monitoramento e build.",
  projects: 1,
  experience: "1+ meses"
  }
]

interface Skills3DCarouselProps {
  id: string
}

export default function Skills3DCarousel({ id }: Skills3DCarouselProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [filter, setFilter] = useState<string>("all")

  const filteredSkills = filter === "all" ? skills : skills.filter((skill) => skill.category === filter)
  const skillsPerView = 3
  const totalSlides = Math.ceil(filteredSkills.length / skillsPerView)

  const categories = [
    { id: "all", name: "Todas", icon: "🚀", color: "#64ffda" },
    { id: "frontend", name: "Frontend", icon: "🎨", color: "#ff6b6b" },
    { id: "tools", name: "Ferramentas", icon: "🛠️", color: "#4ecdc4" },
  ]

  useEffect(() => {
    if (!isAutoRotating) return

    // Aumentado de 4000ms para 8000ms (8 segundos)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 8000)

    return () => clearInterval(interval)
  }, [totalSlides, isAutoRotating])

  useEffect(() => {
    setCurrentIndex(0)
  }, [filter])

  const nextSlide = () => {
    setIsAutoRotating(false)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setIsAutoRotating(false)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating)
  }

  const getCurrentSkills = () => {
    const start = currentIndex * skillsPerView
    return filteredSkills.slice(start, start + skillsPerView)
  }

  return (
    <section id={id} ref={ref} className={styles.skillsCarousel}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            <span className={styles.titleIcon}>⚡</span>
            Arsenal Tecnológico
            <span className={styles.titleSubtext}>Skills & Expertise</span>
          </h2>

          <div className={styles.controls}>
            <div className={styles.filters}>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`${styles.filterButton} ${filter === category.id ? styles.active : ""}`}
                  onClick={() => setFilter(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ "--category-color": category.color } as React.CSSProperties}
                >
                  <span className={styles.filterIcon}>{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </div>

            <div className={styles.carouselControls}>
              <motion.button
                className={styles.controlButton}
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={totalSlides <= 1}
              >
                <ChevronLeft size={20} />
              </motion.button>

              <motion.button
                className={`${styles.controlButton} ${isAutoRotating ? styles.active : ""}`}
                onClick={toggleAutoRotate}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={isAutoRotating ? "Pausar rotação automática" : "Ativar rotação automática"}
              >
                <RotateCcw size={20} />
              </motion.button>

              <motion.button
                className={styles.controlButton}
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={totalSlides <= 1}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>

          {/* Auto-rotation indicator */}
          {isAutoRotating && (
            <motion.div
              className={styles.autoRotateIndicator}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className={styles.progressBar}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
              />
              <span className={styles.indicatorText}>Auto-rotação ativa (8s)</span>
            </motion.div>
          )}
        </motion.div>

        <div className={styles.carouselContainer}>
          <motion.div
            className={styles.carousel3D}
            initial={{ opacity: 0, rotateY: -30 }}
            animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${filter}-${currentIndex}`}
                className={styles.skillsGrid}
                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              >
                {getCurrentSkills().map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    className={styles.skillCard}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 12,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 10,
                      z: 50,
                      transition: { duration: 0.3 },
                    }}
                    style={{ "--skill-color": skill.color } as React.CSSProperties}
                  >
                    <div className={styles.skillCardInner}>
                      {/* Skill Icon */}
                      <div className={styles.skillIcon}>
                        {skill.iconType === "fontawesome" ? (
                          <FontAwesomeIcon icon={skill.icon} size="2x" />
                        ) : (
                          <skill.icon size={32} />
                        )}
                      </div>

                      {/* Skill Info */}
                      <div className={styles.skillInfo}>
                        <h3 className={styles.skillName}>{skill.name}</h3>
                        <p className={styles.skillDescription}>{skill.description}</p>

                        {/* Progress Ring */}
                        <div className={styles.progressRing}>
                          <svg className={styles.progressSvg} viewBox="0 0 100 100">
                            <circle
                              className={styles.progressBackground}
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="8"
                            />
                            <motion.circle
                              className={styles.progressFill}
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke={skill.color}
                              strokeWidth="8"
                              strokeLinecap="round"
                              strokeDasharray={`${2 * Math.PI * 45}`}
                              initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                              animate={
                                isInView
                                  ? { strokeDashoffset: 2 * Math.PI * 45 * (1 - skill.level / 100) }
                                  : { strokeDashoffset: 2 * Math.PI * 45 }
                              }
                              transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                            />
                          </svg>
                          <div className={styles.progressText}>
                            <span className={styles.progressValue}>{skill.level}%</span>
                          </div>
                        </div>

                        {/* Skill Meta */}
                        <div className={styles.skillMeta}>
                          <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Projetos</span>
                            <span className={styles.metaValue}>{skill.projects}</span>
                          </div>
                          <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Experiência</span>
                            <span className={styles.metaValue}>{skill.experience}</span>
                          </div>
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div className={styles.skillGlow} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className={styles.pagination}>
              {[...Array(totalSlides)].map((_, index) => (
                <motion.button
                  key={index}
                  className={`${styles.paginationDot} ${index === currentIndex ? styles.active : ""}`}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoRotating(false)
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        <motion.div
          className={styles.skillsStats}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{skills.length}+</div>
            <div className={styles.statLabel}>Tecnologias</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3+</div>
            <div className={styles.statLabel}>Projetos</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>2+</div>
            <div className={styles.statLabel}>Anos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
