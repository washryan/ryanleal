"use client"

import type { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Meta from "./Meta"
import OptimizedBackground from "./OptimizedBackground"
import IntroAnimation from "./IntroAnimation"
import ScrollProgress from "./ScrollProgress"
import OfflineIndicator from "./OfflineIndicator"
import ErrorBoundary from "./ErrorBoundary"
import FloatingActionButton from "./FloatingActionButton"
import ToastProvider from "./ToastProvider"
import SmoothScroll from "./SmoothScroll"
import GradientAnimation from "./GradientAnimation"
import KonamiCode from "./KonamiCode"
import EasterEggs from "./EasterEggs"
import styles from "../styles/Layout.module.css"
import { useServiceWorker } from "../hooks/useServiceWorker"

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  image?: string
}

export default function Layout({ children, title, description, image }: LayoutProps) {
  useServiceWorker()

  return (
    <ErrorBoundary>
      <ToastProvider>
        <Meta title={title} description={description} image={image} />
        <div className={styles.container}>
          <GradientAnimation />
          <ScrollProgress />
          <OfflineIndicator />
          <IntroAnimation />
          <OptimizedBackground />
          <Header />
          <main className={styles.main} data-main="true">
            {children}
          </main>
          <Footer />
          <FloatingActionButton />
          <SmoothScroll />
          <KonamiCode />
          <EasterEggs />
        </div>
      </ToastProvider>
    </ErrorBoundary>
  )
}
