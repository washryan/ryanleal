"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, Phone, MapPin, Github, Linkedin, Instagram, CheckCircle } from "lucide-react"
import styles from "../styles/ContactSection.module.css"

interface ContactSectionProps {
  id: string
}

export default function ContactSection({ id }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitStatus("success")
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "washr.3103@gmail.com",
      href: "mailto:washr.3103@gmail.com",
      color: "#64ffda",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (87) 99129-0104",
      href: "tel:+5587991290104",
      color: "#ff6b6b",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Petrolina - PE",
      href: "#",
      color: "#4ecdc4",
    },
  ]

  const socialLinks = [
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
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/ryanleall",
      color: "#e4405f",
    },
  ]

  return (
    <section id={id} ref={ref} className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            <span className={styles.titleIcon}>🚀</span>
            Vamos Conversar?
            <span className={styles.titleSubtext}>Entre em contato comigo</span>
          </h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.infoTitle}>Informações de Contato</h3>
            <p className={styles.infoDescription}>
              Estou sempre aberto a novas oportunidades e projetos interessantes. Vamos criar algo incrível juntos!
            </p>

            <div className={styles.infoList}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className={styles.infoItem}
                  whileHover={{ scale: 1.05, x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className={styles.infoIcon} style={{ backgroundColor: `${info.color}20`, color: info.color }}>
                    <info.icon size={20} />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>{info.label}</span>
                    <span className={styles.infoValue}>{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Redes Sociais</h4>
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
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.formContainer}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">
                    Nome
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`${styles.input} ${focusedField === "name" ? styles.focused : ""}`}
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`${styles.input} ${focusedField === "email" ? styles.focused : ""}`}
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="subject">
                  Assunto
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className={`${styles.input} ${focusedField === "subject" ? styles.focused : ""}`}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">
                  Mensagem
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className={`${styles.textarea} ${focusedField === "message" ? styles.focused : ""}`}
                  rows={6}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ""} ${
                  submitStatus === "success" ? styles.success : ""
                }`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner} />
                    Enviando...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle size={20} />
                    Enviado com sucesso!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={16} />
                  Obrigado! Sua mensagem foi enviada com sucesso.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
