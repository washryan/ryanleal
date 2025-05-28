"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useTransform, useScroll } from "framer-motion"
import { ChevronDown, Download, Mail, Github, Linkedin, Instagram, Code, Database, Cpu } from "lucide-react"
import TypewriterEffect from "./TypewriterEffect"
import styles from "../styles/Hero.module.css"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/washryan",
      label: "GitHub",
      color: "#333",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ryanleall/",
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ryanleall",
      label: "Instagram",
      color: "#e4405f",
    },
  ]

  const stats = [
    { icon: Code, label: "Projetos", value: "4+", color: "#64ffda" },
    { icon: Database, label: "Tecnologias", value: "9+", color: "#ff6b6b" },
    { icon: Cpu, label: "Experiência", value: "2+", color: "#4ecdc4" },
  ]

  return (
    <motion.section
      ref={heroRef}
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div className={styles.textContent} variants={itemVariants}>
            <motion.div
              className={styles.greeting}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.span
                className={styles.wave}
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                👋
              </motion.span>
              Olá, eu sou
            </motion.div>

            <motion.h1 className={styles.title} variants={itemVariants}>
              <span className={styles.firstName}>Ryan</span>
              <span className={styles.lastName}>Leal</span>
            </motion.h1>

            <div className={styles.subtitle}>
              <TypewriterEffect
                texts={[
                  "Assistente de TI",
                  "Estudante de Desenvolvimento Full-Stack Java",
                  "Estudante de Análise e Desenvolvimento de Sistemas",
                  "Apaixonado por Tecnologia",
                ]}
                speed={80}
                deleteSpeed={40}
                delayBetweenTexts={2500}
              />
            </div>

            <motion.p className={styles.description} variants={itemVariants}>
              Atualmente trabalho como Assistente de TI no Assaí Atacadista, estudando Desenvolvimento Full-Stack Java
              na EBAC e cursando Análise e Desenvolvimento de Sistemas na Faculdade Maurício de Nassau.
            </motion.p>

            {/* Stats */}
            <motion.div className={styles.stats} variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statItem}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <stat.icon size={24} style={{ color: stat.color }} />
                  <div>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className={styles.ctaButtons} variants={itemVariants}>
              <motion.a
                href="#expertise"
                className={styles.primaryButton}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(100, 255, 218, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ver Projetos</span>
                <ChevronDown size={20} />
              </motion.a>

              <motion.a
                href="/cv-ryan-leal.pdf"
                download
                className={styles.secondaryButton}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.a>

              <motion.a
                href="mailto:washr.3103@gmail.com"
                className={styles.contactButton}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>

            <motion.div className={styles.socialLinks} variants={itemVariants}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{
                    scale: 1.2,
                    y: -8,
                    backgroundColor: social.color,
                    color: "white",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.2 + index * 0.1,
                    hover: { duration: 0.2 },
                  }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className={styles.imageContainer} variants={itemVariants} style={{ y }}>
            <motion.div
              className={styles.imageWrapper}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.imageGlow} />
              <Image
                src="/images/ryan-leal.jpg"
                alt="Ryan Leal - Assistente de TI e Desenvolvedor"
                width={320}
                height={400}
                className={styles.profileImage}
                priority
              />

              {/* Floating tech badges */}
              <motion.div
                className={styles.techBadge1}
                animate={{
                  y: [-8, 8, -8],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <span>☕</span>
                <span>Java</span>
              </motion.div>

              <motion.div
                className={styles.techBadge2}
                animate={{
                  y: [8, -8, 8],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span>⚛️</span>
                <span>React</span>
              </motion.div>

              <motion.div
                className={styles.techBadge3}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <span>🖥️</span>
                <span>IT</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Single scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => {
          document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <motion.div
          className={styles.scrollIcon}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown size={20} />
        </motion.div>
        <span>Explore mais</span>
      </motion.div>
    </motion.section>
  )
}
