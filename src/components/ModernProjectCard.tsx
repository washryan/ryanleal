"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import OptimizedImage from "./OptimizedImage"
import { ExternalLink, Github, Eye } from "lucide-react"
import styles from "../styles/ModernProjectCard.module.css"
import Interactive3DCard from "./Interactive3DCard"

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

interface ModernProjectCardProps {
  project: Project
  index: number
}

export default function ModernProjectCard({ project, index }: ModernProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Fallback personalizado para cada projeto
  const getFallbackImage = (projectId: string) => {
    const fallbacks = {
      "cafe-aroma": `https://via.placeholder.com/400x250/facc15/000000?text=Café+Aroma`,
      "agenda-de-contatos": `https://via.placeholder.com/400x250/4ade80/000000?text=Agenda+Contatos`,
      "onepiece-site": `https://via.placeholder.com/400x250/60a5fa/000000?text=One+Piece+Site`,
    }
    return (
      fallbacks[projectId as keyof typeof fallbacks] ||
      `https://via.placeholder.com/400x250/64ffda/000000?text=${encodeURIComponent(project.title)}`
    )
  }

  return (
    <Interactive3DCard>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
        whileHover={{
          y: -10,
          transition: { duration: 0.2 },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className={styles.imageContainer}>
          <OptimizedImage
            src={project.image}
            alt={project.title}
            width={400}
            height={250}
            className={styles.projectImage}
            quality={90}
            fallback={getFallbackImage(project.id)}
          />

          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.overlayContent}>
              <motion.a
                href={project.website || project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewIcon}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye size={24} />
              </motion.a>
            </div>
          </motion.div>

          <div className={styles.typeBadge} style={{ backgroundColor: project.color }}>
            {project.type}
          </div>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.techStack}>
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className={styles.techTag}
                style={{ borderColor: project.color + "40", color: project.color }}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && <span className={styles.moreTag}>+{project.tech.length - 4}</span>}
          </div>

          <div className={styles.actions}>
            <motion.a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              <span>Código</span>
            </motion.a>

            {project.website && (
              <motion.a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryAction}
                style={{ backgroundColor: project.color }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                <span>Ver Site</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </Interactive3DCard>
  )
}
