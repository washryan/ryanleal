import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Cursor from './Cursor'
import styles from '../styles/Layout.module.css'
import AnimatedBackground from './AnimatedBackground'
import IntroAnimation from './IntroAnimation'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <IntroAnimation />
      <Cursor />
      <AnimatedBackground />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

