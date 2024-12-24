import Link from 'next/link'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'
import styles from '../styles/Header.module.css'

export default function Header() {
  const navItems = [
    { number: '01', name: 'início', path: '/' },
    { number: '02', name: 'habilidades', path: '/#expertise' },
    { number: '03', name: 'projetos', path: '/#projects' },
    { number: '04', name: 'experiência', path: '/#experience' },
    { number: '05', name: 'contato', path: '/#contact' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            RyanLeal._
          </motion.span>
        </Link>
        
        <nav className={`${styles.nav} desktop-menu`}>
          {navItems.map((item) => (
            <Link 
              key={item.number} 
              href={item.path} 
              className={styles.navItem}
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
                whileHover={{ color: 'var(--color-primary)' }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  )
}

