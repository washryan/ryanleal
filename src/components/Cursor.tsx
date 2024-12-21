import { useEffect, useState } from 'react'
import styles from '../styles/Cursor.module.css'

export default function Cursor() {
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector(`.${styles.cursor}`) as HTMLElement
      const ring = document.querySelector(`.${styles.cursorRing}`) as HTMLElement
      
      if (cursor && ring) {
        const x = e.clientX
        const y = e.clientY
        
        cursor.style.transform = `translate3d(${x - 5}px, ${y - 5}px, 0) scale(${isPointer ? 1.5 : 1})`
        ring.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0) scale(${isPointer ? 1.2 : 1})`
      }
      
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer' || 
                   target.tagName === 'A' || 
                   target.tagName === 'BUTTON')
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isPointer])

  return (
    <>
      <div className={styles.cursor} />
      <div className={styles.cursorRing} />
    </>
  )
}

