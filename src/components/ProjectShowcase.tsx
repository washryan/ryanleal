import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles/ProjectShowcase.module.css'

interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  tech: string[]
  color: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 'one-piece-site',
    title: 'One Piece Bio',
    description: 'Site com a biografia do anime One Piece e seus personagens principais.',
    image: '/images/one-piece.jpg',
    link: 'https://github.com/washryan/projeto_onepiecesite',
    tech: ['HTML', 'CSS'],
    color: '#facc15',
    tags: ['Web', 'Frontend']
  },
  {
    id: 'agenda-de-contatos',
    title: 'Agenda de Contatos',
    description: 'Aplicativo para gerenciamento de contatos, facilitando a organização e acessibilidade.',
    image: '/images/agenda-contatos.jpg',
    link: 'https://github.com/washryan/projeto_agenda_contatos',
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: '#60a5fa',
    tags: ['Web', 'Frontend']
  },
  // Preciso adicionar mais 7 projetos para chegar a 9
]

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))

interface ProjectShowcaseProps {
  id: string;
}

export default function ProjectShowcase({ id }: ProjectShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 3
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeFilter) {
      setFilteredProjects(projects.filter(project => project.tags.includes(activeFilter)))
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

  const displayedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  )

  return (
    <section id={id} className={styles.showcase} ref={containerRef}>
      <h2 className={styles.title}>Projetos em Destaque</h2>
      
      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterButton} ${activeFilter === null ? styles.active : ''}`}
          onClick={() => setActiveFilter(null)}
        >
          Todos
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`${styles.filterButton} ${activeFilter === tag ? styles.active : ''}`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.projectsGrid}>
        <AnimatePresence mode="wait">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.projectCard}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={225}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.tag} style={{ backgroundColor: project.color }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Ver Projeto
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {pageCount > 1 && (
        <div className={styles.pagination}>
          <button onClick={prevPage} className={styles.paginationButton}>
            &larr; Anterior
          </button>
          <span className={styles.pageIndicator}>
            {currentPage + 1} / {pageCount}
          </span>
          <button onClick={nextPage} className={styles.paginationButton}>
            Próximo &rarr;
          </button>
        </div>
      )}
    </section>
  )
}

