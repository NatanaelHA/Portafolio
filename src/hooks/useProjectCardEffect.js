import { useRef } from 'react'
import usePrefersReducedMotion from './usePrefersReducedMotion'

const useProjectCardEffect = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const cardBounds = useRef(null)

  const registerCardBounds = (event) => {
    cardBounds.current = event.currentTarget.getBoundingClientRect()
  }

  const updateCardEffect = (event) => {
    const card = event.currentTarget
    const bounds = cardBounds.current || card.getBoundingClientRect()

    const pointerX = event.clientX - bounds.left
    const pointerY = event.clientY - bounds.top

    card.style.setProperty('--mouse-x', `${pointerX}px`)
    card.style.setProperty('--mouse-y', `${pointerY}px`)

    if (event.pointerType === 'touch' || prefersReducedMotion) return

    const rotateY = (pointerX / bounds.width - 0.5) * 6
    const rotateX = (pointerY / bounds.height - 0.5) * -6

    card.style.transform = `
      perspective(900px)
      translateY(0)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `
  }

  const resetCardEffect = (event) => {
    event.currentTarget.style.transform = `
      perspective(900px)
      translateY(0)
      rotateX(0deg)
      rotateY(0deg)
    `

    cardBounds.current = null
  }

  return {
    registerCardBounds,
    updateCardEffect,
    resetCardEffect,
  }
}

export default useProjectCardEffect
