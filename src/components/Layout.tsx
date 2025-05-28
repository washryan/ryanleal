"use client"

import type { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Meta from "./Meta"
import ScrollToTop from "./ScrollToTop"
import GlobalBackground from "./GlobalBackground"
import IntroAnimation from "./IntroAnimation"
import styles from "../styles/Layout.module.css"

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  image?: string
}

export default function Layout({ children, title, description, image }: LayoutProps) {
  return (
    <>
      <Meta title={title} description={description} image={image} />
      <div className={styles.container}>
        <IntroAnimation />
        <GlobalBackground />
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}
