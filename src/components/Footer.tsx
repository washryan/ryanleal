"use client"

import { motion } from "framer-motion"
import { Heart, Code, Coffee, Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react"
import styles from "../styles/Footer.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
    {
      icon: Mail,
      href: "mailto:washr.3103@gmail.com",
      label: "Email",
      color: "#64ffda",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.topSection}>
            <div className={styles.brandSection}>
              <motion.h3
                className={styles.brand}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                RyanLeal._
              </motion.h3>
              <p className={styles.tagline}>Criando experiências digitais incríveis, uma linha de código por vez.</p>
            </div>

            <div className={styles.linksSection}>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>Navegação</h4>
                <div className={styles.linkList}>
                  <motion.a href="#" className={styles.link} whileHover={{ x: 5 }}>
                    Início
                  </motion.a>
                  <motion.a href="#expertise" className={styles.link} whileHover={{ x: 5 }}>
                    Habilidades
                  </motion.a>
                  <motion.a href="#projects" className={styles.link} whileHover={{ x: 5 }}>
                    Projetos
                  </motion.a>
                  <motion.a href="#experience" className={styles.link} whileHover={{ x: 5 }}>
                    Experiência
                  </motion.a>
                  <motion.a href="#contact" className={styles.link} whileHover={{ x: 5 }}>
                    Contato
                  </motion.a>
                </div>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>Projetos</h4>
                <div className={styles.linkList}>
                  <motion.a
                    href="https://github.com/washryan/projeto_onepiecesite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    whileHover={{ x: 5 }}
                  >
                    One Piece Site
                  </motion.a>
                  <motion.a
                    href="https://github.com/washryan/cafe-aroma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    whileHover={{ x: 5 }}
                  >
                    Landing Page Cafeteria
                  </motion.a>
                  <motion.a
                    href="https://github.com/washryan/projeto_agenda_contatos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    whileHover={{ x: 5 }}
                  >
                    Agenda de Contatos
                  </motion.a>
                </div>
              </div>
            </div>

            <motion.button
              className={styles.backToTop}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>

          <div className={styles.socialSection}>
            <h4 className={styles.socialTitle}>Conecte-se comigo</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: social.color,
                    color: "white",
                    y: -3,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.madeWith}>
              <span>Feito com</span>
              <motion.span
                className={styles.heart}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              <span>usando</span>
              <motion.span className={styles.tech} whileHover={{ scale: 1.1 }}>
                <Code size={16} />
                Next.js
              </motion.span>
              <span>&</span>
              <motion.span className={styles.tech} whileHover={{ scale: 1.1 }}>
                <Coffee size={16} />
                Muito café
              </motion.span>
            </div>

            <div className={styles.copyright}>
              <span>&copy; {currentYear} Ryan Leal. Todos os direitos reservados.</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated background */}
      <div className={styles.backgroundPattern}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.patternDot}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </footer>
  )
}
