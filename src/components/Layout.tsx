import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Cursor from './Cursor'
import Meta from './Meta'
import ScrollToTop from './ScrollToTop'
import styles from '../styles/Layout.module.css'
import AnimatedBackground from './AnimatedBackground'
import IntroAnimation from './IntroAnimation'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  image?: string
}

export default function Layout({ 
  children, 
  title,
  description,
  image 
}: LayoutProps) {
  return (
    <>
      <Meta title={title} description={description} image={image} />
      <div className={styles.container}>
        <IntroAnimation />
        <Cursor />
        <AnimatedBackground />
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

