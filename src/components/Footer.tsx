import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/washryan" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/washington-ryan-leal-passos-a47065331/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/ryanleall" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
        </div>
        <p className={styles.copyright}>© {new Date().getFullYear()} Ryan Leal. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

