'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from '../styles/ScrollIndicator.module.css';

export default function ScrollIndicator() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Se o usuário estiver perto do topo, mostramos o indicador
      if (scrollPosition < 100) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // A rolagem irá parar no topo da seção
      });
    }
  };

  return (
    <div className={styles.scrollIndicator} onClick={scrollToWork}>
      <motion.div
        className={styles.circleContainer}
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
        >
          <motion.circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </svg>
        <motion.div
          className={styles.arrow}
          initial={{ opacity: 0, y: -5 }}
          animate={{
            opacity: scrolling ? 0 : 1,  // Torna o indicador invisível quando estiver rolando
            y: scrolling ? [0, 5, 0] : 0, // O movimento do indicador é pausado quando estiver rolando
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ↓
        </motion.div>
      </motion.div>
    </div>
  );
}
