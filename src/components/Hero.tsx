import { useEffect, useRef } from 'react'
import Image from 'next/image'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { motion } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator'
import ParticleField from './ParticleField'
import FloatingTechStack from './FloatingTechStack'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sceneRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    sceneRef.current.appendChild(renderer.domElement)

    // Create a more complex geometry
    const geometry = new THREE.IcosahedronGeometry(2, 1)
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x64ffda, 
      wireframe: true,
      emissive: 0x64ffda,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.8
    })
    const icosahedron = new THREE.Mesh(geometry, material)
    
    // Add a second, larger geometry for depth
    const outerGeometry = new THREE.IcosahedronGeometry(2.2, 1)
    const outerMaterial = new THREE.MeshPhongMaterial({
      color: 0x64ffda,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    })
    const outerIcosahedron = new THREE.Mesh(outerGeometry, outerMaterial)
    
    scene.add(icosahedron)
    scene.add(outerIcosahedron)

    // Adjust light position and intensity
    const light = new THREE.PointLight(0x64ffda, 2, 100)
    light.position.set(5, 5, 5)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)

    // Adjust camera position
    camera.position.z = 6
    camera.position.y = 1

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5

    const animate = () => {
      requestAnimationFrame(animate)
      icosahedron.rotation.x += 0.001
      icosahedron.rotation.y += 0.001
      outerIcosahedron.rotation.x -= 0.0005
      outerIcosahedron.rotation.y -= 0.0005
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

    return (
    <section className={styles.hero}>
      <ParticleField />
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className={styles.greeting}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Olá, eu sou
            </motion.span>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ryan Leal
            </motion.h1>
            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Desenvolvedor Full-Stack Java & Front-End em Formação
            </motion.p>
            <motion.div
              className={styles.cta}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a
                href="#work"
                className={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
              </motion.a>
            </motion.div>
            <FloatingTechStack />
          </motion.div>

          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/images/ryan-leal.jpg"
                alt="Ryan Leal"
                width={300}
                height={400}
                className={styles.profileImage}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div ref={sceneRef} className={styles.scene} />
      <ScrollIndicator />
    </section>
  )
}


