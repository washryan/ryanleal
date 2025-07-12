"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ModernProjectCard from "./ModernProjectCard"
import styles from "../styles/ProjectShowcase.module.css"
import SkeletonCard from "./SkeletonCard"

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
    id: "sistema-gestao-restaurantes",
    title: "Sistema de Gestão para Restaurantes (Em andamento)",
    description:
      'Sistema completo de gestão para restaurantes. O sistema possui funcionalidades como controle de pedidos, inventário, cardápio e painel admininstrativo com gráficos.',
    image: "/images/sistema-gestao-restaurantes.png",
    repository: "https://github.com/washryan/sistema-gestao-restaurantes/",
    tech: [
      "Java", "Spring Boot", "Spring Security", "JWT", "Spring WebSocket", "Springdoc OpenAPI", "H2 Database", "Maven", "Docker", "React", "TypeScript", "Tailwind CSS", "Recharts", "STOMP.js", "Lucid (Ícones)", "Radix UI",
    ],
    color: "#60a5fa",
    tags: ["Web", "Frontend", "Backend", "fullstack"],
    type: "frontend",
  },
  {
    id: "roguerl",
    title: "RogueRL (Em andamento)",
    description:
      'Loja de roupas automatizada com Inteligência artifical.',
    image: "/images/roguerl.png",
    repository: "https://github.com/washryan/roguerl/",
    website: "https://www.roguerl.com.br/",
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Radix UI", "NextAuth"],
    color: "#000080",
    tags: ["Web", "Frontend"],
    type: "frontend",
  },
  {
    id: "app-financas",
    title: "Finanças Pessoais (Em andamento)",
    description:
      'Site para gerenciamento de Finanças pessoais',
    image: "/images/app-financas.png",
    repository: "https://github.com/washryan/app-financas/",
    website: "https://app-financas-fawn.vercel.app/",
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Date-fns", "Supabase Auth"],
    color: "#000080",
    tags: ["Web", "Frontend"],
    type: "frontend",
  },
  {
    id: "cafe-aroma",
    title: "Landing Page Cafeteria",
    description:
      'Landing page para uma cafeteria artesanal fictícia chamada "Café Aroma", desenvolvido como exercício para o curso da EBAC.',
    image: "/images/cafe-aroma.png",
    repository: "https://github.com/washryan/cafe-aroma/",
    website: "https://cafe-aroma-psi.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    color: "#facc15",
    tags: ["Web", "Frontend"],
    type: "frontend",
  },
  {
    id: "agenda-de-contatos",
    title: "Agenda de Contatos",
    description: "Projeto desenvolvido como exercício para o curso da EBAC para testar conhecimentos com jQuery.",
    image: "/images/agenda-de-contatos.png",
    repository: "https://github.com/washryan/projeto_agenda_contatos/",
    website: "https://projeto-agenda-contatos-orcin.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    color: "#4ade80",
    tags: ["Web", "Frontend"],
    type: "frontend",
  },
  {
    id: "onepiece-site",
    title: "One Piece Biografia",
    description: "Site desenvolvido durante o curso com o professor da EBAC para demonstrar habilidades em HTML e CSS.",
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter)
    if (filter) {
      setFilteredProjects(projects.filter((project) => project.tags.includes(filter)))
    } else {
      setFilteredProjects(projects)
    }
  }

  return (
    <section id={id} className={styles.showcase} ref={containerRef}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Projetos em Destaque</h2>
        <p className={styles.subtitle}>Alguns dos projetos que desenvolvi durante minha jornada de aprendizado</p>
      </motion.div>

      <motion.div
        className={styles.filterContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button
          className={`${styles.filterButton} ${activeFilter === null ? styles.active : ""}`}
          onClick={() => handleFilterChange(null)}
        >
          Todos
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`${styles.filterButton} ${activeFilter === tag ? styles.active : ""}`}
            onClick={() => handleFilterChange(tag)}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      <motion.div layout className={styles.projectsGrid}>
        <AnimatePresence mode="wait">
          {isLoading
            ? [...Array(3)].map((_, index) => <SkeletonCard key={index} />)
            : filteredProjects.map((project, index) => (
                <ModernProjectCard key={project.id} project={project} index={index} />
              ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
