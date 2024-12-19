'use client'

import { useEffect, useRef } from 'react'
import styles from '../styles/Cursor.module.css'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    const moverCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e
      if (cursor) {
        cursor.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
      }
      if (cursorDot) {
        cursorDot.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
      }
    }

    document.addEventListener('mousemove', moverCursor)

    return () => {
      document.removeEventListener('mousemove', moverCursor)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={cursorDotRef} className={styles.cursorDot} />
    </>
  )
}

