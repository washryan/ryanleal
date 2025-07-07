"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import type { ReactNode } from "react"
import styles from "../styles/PageTransition.module.css"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter()

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 1.02,
    },
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={router.asPath}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className={styles.pageContainer}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
