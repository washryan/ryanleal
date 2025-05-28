"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import styles from "../styles/ProjectShowcase.module.css"

interface Project {
  id: string
  title: string
  description: string
  image: string
  repository: string
  website?: string
  tech: string[]
  color: string
  tags: string[]
  type: "frontend" | "fullstack" | "backend"
}

const projects: Project[] = [
  {
    id: "cafe-aroma",
    title: "Landing Page Cafeteria",
    description:
      'Este projeto é uma landing page para uma cafeteria artesanal fictícia chamada "Café Aroma", desenvolvido como exercício para o curso da EBAC.',
    image: "/images/cafe-aroma.png",
    repository: "https://github.com/washryan/cafe-aroma/",
    website: "https://cafe-aroma-psi.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript", "jQuery Plugins", "BootStrap"],
    color: "#facc15",
    tags: ["Web", "Frontend"],
    type: "frontend",
  },
  {
    id: "agenda-de-contatos",
    title: "Agenda de Contatos",
    description:
      "Este projeto foi desenvolvido como exercício para o curso da EBAC para testar conhecimentos com jQuery.",
    image: "/images/agenda-de-contatos.png",
    repository: "https://github.com/washryan/projeto_agenda_contatos/",
    website: "https://projeto-agenda-contatos-orcin.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript", "jQuery Plugins"],
    color: "#4ade80",
    tags: ["Web", "Frontend"],
    type: "frontend",
  },
  {
    id: "onepiece-site",
    title: "One Piece biografia",
    description:
      "Este repositório contém o código-fonte para um site que foi desenvolvido durante o curso com o professor da EBAC. O objetivo deste projeto foi criar um site funcional e estilizado para demonstrar habilidades em HTML e CSS, seguindo as diretrizes fornecidas durante o curso.",
    image: "/images/one-piece.png",
    repository: "https://github.com/washryan/projeto_onepiecesite/",
    website: "https://projeto-onepiecesite.vercel.app/",
    tech: ["HTML", "CSS"],
    color: "#60a5fa",
    tags: ["Web", "Frontend"],
    type: "frontend",
  },
]

const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

interface ProjectShowcaseProps {
  id: string
}

export default function ProjectShowcase({ id }: ProjectShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 3
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeFilter) {
      setFilteredProjects(projects.filter((project) => project.tags.includes(activeFilter)))
    } else {
      setFilteredProjects(projects)
    }
    setCurrentPage(0)
  }, [activeFilter])

  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount)
  }

  const displayedProjects = filteredProjects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  return (
    <section id={id} className={styles.showcase} ref={containerRef}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projetos em Destaque
      </motion.h2>

      <motion.div
        className={styles.filterContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button
          className={`${styles.filterButton} ${activeFilter === null ? styles.active : ""}`}
          onClick={() => setActiveFilter(null)}
        >
          Todos
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`${styles.filterButton} ${activeFilter === tag ? styles.active : ""}`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      <motion.div layout className={styles.projectsGrid}>
        <AnimatePresence mode="wait">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.projectCard}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={225}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <span className={styles.projectType}>{project.type}</span>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={styles.tag}
                      style={{ backgroundColor: `${project.color}20`, color: project.color }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  <a href={project.repository} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    <Github size={16} />
                    Repositório
                  </a>

                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.projectLink} ${styles.websiteLink}`}
                    >
                      <ExternalLink size={16} />
                      Ver Website
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {pageCount > 1 && (
        <motion.div
          className={styles.pagination}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button onClick={prevPage} className={styles.paginationButton}>
            ← Anterior
          </button>
          <span className={styles.pageIndicator}>
            {currentPage + 1} / {pageCount}
          </span>
          <button onClick={nextPage} className={styles.paginationButton}>
            Próximo →
          </button>
        </motion.div>
      )}
    </section>
  )
}
