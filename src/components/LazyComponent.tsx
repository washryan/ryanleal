"use client"

import type React from "react"

import { lazy, Suspense, type ComponentType } from "react"
import LoadingSpinner from "./LoadingSpinner"

interface LazyComponentProps {
  factory: () => Promise<{ default: ComponentType<any> }>
  fallback?: React.ReactNode
  [key: string]: any
}

export default function LazyComponent({ factory, fallback, ...props }: LazyComponentProps) {
  const Component = lazy(factory)

  return (
    <Suspense fallback={fallback || <LoadingSpinner size="large" />}>
      <Component {...props} />
    </Suspense>
  )
}
