import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles/ProjectCard.module.css'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  link: string
  site?: string
}

export default function ProjectCard({ title, description, image, tech, link, site }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={styles.cardInner}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
      >
        <div className={styles.cardFront}>
          <Image src={image} alt={title} width={400} height={225} className={styles.projectImage} />
          <h3 className={styles.projectTitle}>{title}</h3>
          <button className={styles.flipButton} onClick={() => setIsFlipped(true)}>
            Saiba mais
          </button>
        </div>
        <div className={styles.cardBack}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
          <div className={styles.techStack}>
            {tech.map((item) => (
              <span key={item} className={styles.techItem}>
                {item}
              </span>
            ))}
          </div>
          <div className={styles.buttonRow}>
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              Ver Projeto
            </a>
            {site && (
              <a href={site} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                Ver Site
              </a>
            )}
          </div>
          <button className={styles.flipButton} onClick={() => setIsFlipped(false)}>
            Voltar
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
