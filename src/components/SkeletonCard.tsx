"use client"

import { motion } from "framer-motion"
import styles from "../styles/SkeletonCard.module.css"

export default function SkeletonCard() {
  return (
    <div className={styles.card}>
      <motion.div
        className={styles.imageContainer}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className={styles.content}>
        <motion.div
          className={styles.title}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className={styles.description}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 0.2,
          }}
        />

        <div className={styles.techStack}>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.techTag}
              animate={{
                backgroundPosition: ["200% 0", "-200% 0"],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 0.4 + i * 0.1,
              }}
            />
          ))}
        </div>

        <div className={styles.actions}>
          <motion.div
            className={styles.button}
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 0.6,
            }}
          />
          <motion.div
            className={styles.button}
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 0.7,
            }}
          />
        </div>
      </div>
    </div>
  )
}
