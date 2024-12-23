import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles/ProjectShowcase.module.css'

interface Project {
  title: string
  description: string
  image: string
  link: string
  tech: string[]
  color: string
}

const projects: Project[] = [
  {
    title: 'EcoCode',
    description: 'Plataforma de e-commerce sustentável com Java e Spring Boot',
    image: '/images/ecocode.jpg',
    link: 'https://github.com/ryanleal/ecocode',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
    color: '#4ade80'
  },
  {
    title: 'TaskFlow',
    description: 'Aplicativo de gerenciamento de tarefas com React e Node.js',
    image: '/images/taskflow.jpg',
    link: 'https://github.com/ryanleal/taskflow',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: '#60a5fa'
  },
  {
    title: 'CodeQuest',
    description: 'Plataforma gamificada para aprendizado de programação',
    image: '/images/codequest.jpg',
    link: 'https://github.com/ryanleal/codequest',
    tech: ['Vue.js', 'Firebase', 'Node.js', 'Express'],
    color: '#f472b6'
  }
]

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const nextProject = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    controls.start({
      x: direction * -100 + '%',
      opacity: 0,
      transition: { duration: 0.3 }
    }).then(() => {
      controls.set({ x: direction * 100 + '%' })
      controls.start({
        x: '0%',
        opacity: 1,
        transition: { duration: 0.3 }
      })
    })
  }, [activeIndex, controls, direction])

  return (
    <section className={styles.showcase}>
      <h2 className={styles.title}>Projetos em Destaque</h2>
      <div className={styles.container} ref={containerRef}>
        <motion.div className={styles.project} animate={controls}>
          <div className={styles.imageWrapper}>
            <Image
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.projectTitle}>{projects[activeIndex].title}</h3>
            <p className={styles.description}>{projects[activeIndex].description}</p>
            <div className={styles.techStack}>
              {projects[activeIndex].tech.map((tech) => (
                <span key={tech} className={styles.techItem} style={{ backgroundColor: projects[activeIndex].color }}>
                  {tech}
                </span>
              ))}
            </div>
            <a href={projects[activeIndex].link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              Ver Projeto
            </a>
          </div>
        </motion.div>
      </div>
      <div className={styles.navigation}>
        <button onClick={prevProject} className={styles.navButton}>
          &#8592; Anterior
        </button>
        <button onClick={nextProject} className={styles.navButton}>
          Próximo &#8594;
        </button>
      </div>
    </section>
  )
}

