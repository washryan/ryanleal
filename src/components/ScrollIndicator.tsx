import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from '../styles/ScrollIndicator.module.css'

export default function ScrollIndicator() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setHidden(latest > window.innerHeight)
    })
  }, [scrollY])

  const handleClick = () => {
    const heroHeight = window.innerHeight * 0.9
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      className={styles.scrollIndicator}
      onClick={handleClick}
      animate={{ opacity: hidden ? 0 : 1 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.arrow}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.button>
  )
}

