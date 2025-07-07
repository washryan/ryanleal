"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Mail, Github, Linkedin, Download } from "lucide-react"
import styles from "../styles/FloatingActionButton.module.css"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:washr.3103@gmail.com",
      color: "#64ffda",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/washryan",
      color: "#333",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ryanleall/",
      color: "#0077b5",
    },
    {
      icon: Download,
      label: "CV",
      href: "/cv-ryan-leal.pdf",
      color: "#ff6b6b",
    },
  ]

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.actionsContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : "_self"}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : ""}
                className={styles.actionButton}
                style={{ backgroundColor: action.color }}
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <action.icon size={20} />
                <span className={styles.tooltip}>{action.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.mainButton}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <Plus size={24} />
      </motion.button>
    </div>
  )
}
