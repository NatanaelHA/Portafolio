import { useEffect, useRef, useState } from 'react'

const useScrollReveal = () => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Observa la sección hasta que entra por primera vez en la pantalla.
  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setIsVisible(true)
        // La entrada ocurre una sola vez durante la vida de la sección.
        observer.disconnect()
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    // Evita mantener el observer si la sección deja de existir antes de entrar.
    return () => observer.disconnect()
  }, [])

  return {
    elementRef,
    revealClassName: `scroll-reveal ${
      isVisible ? 'scroll-reveal-visible' : ''
    }`,
  }
}

export default useScrollReveal
