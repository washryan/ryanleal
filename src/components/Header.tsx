'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import styles from '../styles/Header.module.css'

export default function Header() {
  const pathname = usePathname()
  const navItems = [
    { number: '01', name: 'início', path: '/' },
    { number: '02', name: 'habilidades', path: '#expertise' },
    { number: '03', name: 'projetos', path: '#work' },
    { number: '04', name: 'experiência', path: '#work-experience' },
    { number: '05', name: 'contato', path: '#contact' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          RyanLeal._
        </Link>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link 
              key={item.number} 
              href={item.path} 
              className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
            >
              <motion.span
                className={styles.navNumber}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.number}
              </motion.span>
              <motion.span
                className={styles.navText}
                whileHover={{ color: '#64ffda' }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

