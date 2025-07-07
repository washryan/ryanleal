// Bundle optimization utilities
export const preloadRoute = (route: string) => {
  const link = document.createElement("link")
  link.rel = "prefetch"
  link.href = route
  document.head.appendChild(link)
}

export const preloadImage = (src: string) => {
  const link = document.createElement("link")
  link.rel = "preload"
  link.as = "image"
  link.href = src
  document.head.appendChild(link)
}

export const debounce = <T extends (...args: any[]) => any>(func: T, wait: number): T => {
  let timeout: NodeJS.Timeout
  return ((...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(null, args), wait)
  }) as T
}

export const throttle = <T extends (...args: any[]) => any>(func: T, limit: number): T => {
  let inThrottle: boolean
  return ((...args: any[]) => {
    if (!inThrottle) {
      func.apply(null, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }) as T
}
