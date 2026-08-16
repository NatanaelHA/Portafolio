import { useRef, useState } from 'react'

const SWIPE_DISTANCE = 50
// Evita que un pequeño movimiento del dedo convierta un toque en arrastre.
const DRAG_TOLERANCE = 8

const useProjectGallery = (imageCount) => {
  // Estado compartido por el carrusel de desktop y móvil.
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const dragStart = useRef(null)

  // Permite que el visor móvil distinga un toque de un deslizamiento.
  const imageWasDragged = useRef(false)

  // Navegación utilizada por flechas, indicadores y gestos.
  const showPreviousImage = () => {
    setCurrentIndex((index) => (index === 0 ? imageCount - 1 : index - 1))
  }

  const showNextImage = () => {
    setCurrentIndex((index) => (index === imageCount - 1 ? 0 : index + 1))
  }

  const selectImage = (index) => {
    setCurrentIndex(index)
  }

  // El mismo flujo admite arrastre con mouse en desktop y con dedo en móvil.
  const startDragging = (event) => {
    if (imageCount < 2 || event.target.closest('button')) return

    dragStart.current = event.clientX
    imageWasDragged.current = false
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const dragImage = (event) => {
    if (dragStart.current === null) return

    const distance = event.clientX - dragStart.current

    if (Math.abs(distance) > DRAG_TOLERANCE) {
      imageWasDragged.current = true
    }

    setDragOffset(distance)
  }

  const finishDragging = (event) => {
    if (dragStart.current === null) return

    const distance = event.clientX - dragStart.current

    if (distance <= -SWIPE_DISTANCE) showNextImage()
    if (distance >= SWIPE_DISTANCE) showPreviousImage()

    dragStart.current = null
    setDragOffset(0)

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const cancelDragging = () => {
    dragStart.current = null
    setDragOffset(0)
  }

  // ProjectGallery consulta esta señal antes de abrir el visor móvil.
  const wasImageDragged = () => imageWasDragged.current

  return {
    currentIndex,
    dragOffset,
    showPreviousImage,
    showNextImage,
    selectImage,
    startDragging,
    dragImage,
    finishDragging,
    cancelDragging,
    wasImageDragged,
  }
}

export default useProjectGallery
