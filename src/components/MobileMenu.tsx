import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/MobileMenu.module.css';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { number: '01', name: 'início', path: '/' },
    { number: '02', name: 'habilidades', path: '#expertise' },
    { number: '03', name: 'projetos', path: '#work' },
    { number: '04', name: 'experiência', path: '#work-experience' },
    { number: '05', name: 'contato', path: '#contact' },
  ];

  // Função para rolar suavemente até a seção
  const handleLinkClick = (path: string) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setIsOpen(false); // Fecha o menu após a seleção
  };

  return (
    <div className={styles.mobileMenu}>
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menuContent}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <nav className={styles.nav}>
              {menuItems.map((item) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href={item.path}
                    className={styles.navItem}
                    onClick={() => handleLinkClick(item.path)}
                  >
                    <span className={styles.navNumber}>{item.number}</span>
                    <span className={styles.navText}>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

