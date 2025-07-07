"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, Code, Zap, User, Briefcase, Mail } from "lucide-react"
import MobileMenu from "./MobileMenu"
import styles from "../styles/Header.module.css"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95])
  const headerBlur = useTransform(scrollY, [0, 100], [10, 20])

  const navItems = [
    {
      number: "01",
      name: "início",
      path: "/",
      icon: User,
      color: "#64ffda",
    },
    {
      number: "02",
      name: "habilidades",
      path: "/#expertise",
      icon: Code,
      color: "#ff6b6b",
    },
    {
      number: "03",
      name: "projetos",
      path: "/#projects",
      icon: Zap,
      color: "#4ecdc4",
    },
    {
      number: "04",
      name: "experiência",
      path: "/#experience",
      icon: Briefcase,
      color: "#45b7d1",
    },
    {
      number: "05",
      name: "contato",
      path: "/#contact",
      icon: Mail,
      color: "#96ceb4",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        data-header="true"
        style={{
          backdropFilter: `blur(${headerBlur}px)`,
          backgroundColor: `rgba(15, 17, 23, ${headerOpacity})`,
        }}
      >
        {/* Animated background */}
        <div className={styles.headerBackground}>
          <motion.div
            className={styles.morphingShape}
            animate={{
              borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "70% 30% 30% 70% / 70% 70% 30% 30%",
                "30% 70% 70% 30% / 30% 30% 70% 70%",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className={styles.container}>
          {/* Logo with liquid animation */}
          <Link href="/" className={styles.logo}>
            <motion.div
              className={styles.logoContainer}
              data-logo="true"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={styles.logoBackground}
                whileHover={{
                  borderRadius: ["20px", "30px", "20px"],
                  transition: { duration: 0.6, repeat: Number.POSITIVE_INFINITY },
                }}
              />
              <motion.span
                className={styles.logoText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                RyanLeal._
              </motion.span>
              <motion.div
                className={styles.logoGlow}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation with magnetic buttons */}
          <nav className={`${styles.nav} desktop-menu`}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.number}
                className={styles.navItemWrapper}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.path} className={styles.navItem}>
                  <motion.div
                    className={styles.magneticButton}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: item.color,
                      boxShadow: `0 0 20px ${item.color}40`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.span
                      className={styles.navNumber}
                      style={{ color: item.color }}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.number}
                    </motion.span>

                    <motion.div className={styles.navContent}>
                      <item.icon size={16} />
                      <motion.span
                        className={styles.navText}
                        whileHover={{ color: "white" }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                    </motion.div>

                    {/* Liquid background effect */}
                    <motion.div
                      className={styles.liquidBackground}
                      style={{ backgroundColor: item.color }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{
                        scale: 1,
                        opacity: 0.1,
                        borderRadius: ["50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50%"],
                      }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button with gesture control */}
          <motion.button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
          >
            <motion.div className={styles.menuIcon} animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}>
              <Menu size={24} />
            </motion.div>
            <motion.div className={styles.closeIcon} animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}>
              <X size={24} />
            </motion.div>
          </motion.button>
        </div>

        {/* Parallax particles */}
        <div className={styles.headerParticles}>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} navItems={navItems} />
    </>
  )
}
