import { useCallback, useEffect, useRef, useState } from 'react'
import usePrefersReducedMotion from './usePrefersReducedMotion'

const CLOSE_ANIMATION_DURATION = 220

const useProjectModal = ({ project, onClose }) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isClosing, setIsClosing] = useState(false)
  const closeTimeout = useRef(null)
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)

  // Conserva la animación antes de desmontar el modal
  const handleClose = useCallback(() => {
    if (isClosing) return

    setIsClosing(true)

    const closeDelay = prefersReducedMotion ? 0 : CLOSE_ANIMATION_DURATION

    closeTimeout.current = window.setTimeout(() => {
      onClose()
    }, closeDelay)
  }, [isClosing, onClose, prefersReducedMotion])

  // Bloquea el fondo y controla Escape y el foco con teclado
  useEffect(() => {
    if (!project) return undefined

    const previousOverflow = document.body.style.overflow

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }

      if (event.key === 'Tab') {
        const focusableElements = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )

        if (!focusableElements?.length) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, handleClose])

  // Devuelve el foco al elemento que abrió el modal
  useEffect(() => {
    const previouslyFocusedElement = document.activeElement

    closeButtonRef.current?.focus()

    return () => {
      previouslyFocusedElement?.focus()
    }
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        window.clearTimeout(closeTimeout.current)
      }
    }
  }, [])

  return {
    isClosing,
    handleClose,
    closeButtonRef,
    dialogRef,
  }
}

export default useProjectModal
