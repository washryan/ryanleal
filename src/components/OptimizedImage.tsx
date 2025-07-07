"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import LoadingSpinner from "./LoadingSpinner"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
  fallback?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 85,
  fallback,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  // Fallback para quando a imagem não carrega
  const handleError = () => {
    setError(true)
    setIsLoading(false)

    // Usar fallback personalizado ou placeholder genérico
    const fallbackSrc = fallback || `/placeholder.svg?height=${height}&width=${width}&text=${encodeURIComponent(alt)}`
    setImageSrc(fallbackSrc)
  }

  return (
    <div className={className} style={{ position: "relative", width, height }}>
      {isLoading && !error && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <LoadingSpinner size="medium" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading && !error ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </motion.div>
    </div>
  )
}
