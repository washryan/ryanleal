import Image from 'next/image'
import styles from '../styles/ProjectCard.module.css'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Ver Projeto
        </a>
      </div>
    </div>
  )
}

