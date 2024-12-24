import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/washryan" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/washington-ryan-leal-passos-a47065331/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/ryanleall" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaInstagram size={24} />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Ryan Leal. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

