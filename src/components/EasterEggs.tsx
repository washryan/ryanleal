"use client"

import { useEffect, useState } from "react"
import { useToast } from "./ToastProvider"

export default function EasterEggs() {
  const [clickCount, setClickCount] = useState(0)
  const { addToast } = useToast()

  useEffect(() => {
    // Easter egg: Triple click no logo
    const handleLogoClick = () => {
      setClickCount((prev) => {
        const newCount = prev + 1
        if (newCount === 3) {
          addToast({
            type: "info",
            title: "🥚 Easter Egg!",
            message: "Você encontrou um segredo! Tente o código Konami: ↑↑↓↓←→←→BA",
            duration: 7000,
          })
          return 0
        }
        return newCount
      })

      // Reset counter after 2 seconds
      setTimeout(() => setClickCount(0), 2000)
    }

    // Easter egg: Sequência de cliques em elementos específicos
    const handleSecretSequence = () => {
      const sequence = ["header", "main", "footer"]
      let currentIndex = 0

      const handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        const tagName = target.tagName.toLowerCase()

        if (tagName === sequence[currentIndex]) {
          currentIndex++
          if (currentIndex === sequence.length) {
            addToast({
              type: "success",
              title: "🎯 Sequência Secreta!",
              message: "Você descobriu a sequência mágica: Header → Main → Footer!",
              duration: 5000,
            })
            currentIndex = 0
          }
        } else {
          currentIndex = 0
        }
      }

      document.addEventListener("click", handleClick)
      return () => document.removeEventListener("click", handleClick)
    }

    // Adicionar event listener para o logo
    const logo = document.querySelector('[data-logo="true"]')
    if (logo) {
      logo.addEventListener("click", handleLogoClick)
    }

    const cleanupSequence = handleSecretSequence()

    return () => {
      if (logo) {
        logo.removeEventListener("click", handleLogoClick)
      }
      cleanupSequence()
    }
  }, [addToast])

  return null
}
