import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sceneRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth / 2, window.innerHeight)
    sceneRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x64ffda, wireframe: true })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      renderer.dispose()
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>RYAN LEAL</h1>
        <p className={styles.subtitle}>
          DESENVOLVEDOR FULL-STACK JAVA & FRONT-END EM FORMAÇÃO.
        </p>
      </div>
      <div ref={sceneRef} className={styles.scene}></div>
    </section>
  )
}

