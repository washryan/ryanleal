import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { motion } from 'framer-motion'
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

    const geometry = new THREE.IcosahedronGeometry(1, 1)
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x64ffda, 
      wireframe: true,
      emissive: 0x64ffda,
      emissiveIntensity: 0.2,
    })
    const icosahedron = new THREE.Mesh(geometry, material)
    scene.add(icosahedron)

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(10, 10, 10)
    scene.add(light)

    camera.position.z = 5

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1

    const animate = () => {
      requestAnimationFrame(animate)
      icosahedron.rotation.x += 0.001
      icosahedron.rotation.y += 0.001
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

    // Variável para armazenar o ref do container
    const sceneContainer = sceneRef.current;

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (sceneContainer) {
        sceneContainer.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          RYAN LEAL
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          DESENVOLVEDOR FULL-STACK JAVA & FRONT-END EM FORMAÇÃO.
        </motion.p>
        <motion.a 
          href="#work"
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          Ver Projetos
        </motion.a>
      </div>
      <div ref={sceneRef} className={styles.scene}></div>
    </section>
  )
}
