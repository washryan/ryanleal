"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import styles from "../styles/MobileMenu.module.css"

interface NavItem {
  number: string
  name: string
  path: string
  icon: React.ElementType
  color: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Liquid background */}
            <div className={styles.liquidBackground}>
              <motion.div
                className={styles.liquidShape}
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>

            <nav className={styles.nav}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link href={item.path} className={styles.navItem} onClick={onClose}>
                    <motion.div
                      className={styles.navItemInner}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: `${item.color}20`,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={styles.navIcon} style={{ color: item.color }}>
                        <item.icon size={20} />
                      </div>
                      <div className={styles.navContent}>
                        <span className={styles.navNumber} style={{ color: item.color }}>
                          {item.number}
                        </span>
                        <span className={styles.navText}>{item.name}</span>
                      </div>

                      {/* Magnetic effect indicator */}
                      <motion.div
                        className={styles.magneticIndicator}
                        style={{ backgroundColor: item.color }}
                        whileHover={{ scale: 1.2, opacity: 1 }}
                        initial={{ scale: 0, opacity: 0 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Floating particles */}
            <div className={styles.particles}>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className={styles.particle}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    backgroundColor: navItems[Math.floor(Math.random() * navItems.length)].color,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
