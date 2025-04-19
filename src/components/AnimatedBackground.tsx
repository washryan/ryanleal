'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import styles from '../styles/AnimatedBackground.module.css'

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current;

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    const geometriaLua = new THREE.SphereGeometry(5, 32, 32)
    const materialLua = new THREE.MeshPhongMaterial({ color: 0xffffff })
    const lua = new THREE.Mesh(geometriaLua, materialLua)
    lua.position.set(20, 15, -20)
    scene.add(lua)


    const geometriaCubo = new THREE.BoxGeometry(2, 2, 2)
    const materialCubo = new THREE.MeshPhongMaterial({ color: 0x00ff00, wireframe: true })
    for (let i = 0; i < 10; i++) {
      const cubo = new THREE.Mesh(geometriaCubo, materialCubo)
      cubo.position.set(
        Math.random() * 40 - 20,
        Math.random() * 40 - 20,
        Math.random() * 40 - 20
      )
      scene.add(cubo)
    }

    const geometriaCilindro = new THREE.CylinderGeometry(1, 1, 4, 32)
    const materialCilindro = new THREE.MeshPhongMaterial({ color: 0x0000ff, wireframe: true })
    for (let i = 0; i < 5; i++) {
      const cilindro = new THREE.Mesh(geometriaCilindro, materialCilindro)
      cilindro.position.set(
        Math.random() * 40 - 20,
        Math.random() * 40 - 20,
        Math.random() * 40 - 20
      )
      scene.add(cilindro)
    }

    const luzAmbiente = new THREE.AmbientLight(0x404040)
    scene.add(luzAmbiente)

    const luzPontual = new THREE.PointLight(0xffffff, 1, 100)
    luzPontual.position.set(10, 10, 10)
    scene.add(luzPontual)

    camera.position.z = 30

    function animar() {
      requestAnimationFrame(animar)

      lua.rotation.y += 0.005

      scene.traverse((objeto) => {
        if (objeto instanceof THREE.Mesh && objeto !== lua) {
          objeto.rotation.x += 0.01
          objeto.rotation.y += 0.01
        }
      })

      renderer.render(scene, camera)
    }

    animar()

    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()

      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className={styles.background} />
}

