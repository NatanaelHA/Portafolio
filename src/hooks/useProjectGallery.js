import { useRef, useState } from 'react'

const SWIPE_DISTANCE = 50

const useProjectGallery = (imageCount) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const dragStart = useRef(null)

  const showPreviousImage = () => {
    setCurrentIndex((index) => (index === 0 ? imageCount - 1 : index - 1))
  }

  const showNextImage = () => {
    setCurrentIndex((index) => (index === imageCount - 1 ? 0 : index + 1))
  }

  const selectImage = (index) => {
    setCurrentIndex(index)
  }

  const startDragging = (event) => {
    if (imageCount < 2 || event.target.closest('button')) return

    dragStart.current = event.clientX
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const dragImage = (event) => {
    if (dragStart.current === null) return

    setDragOffset(event.clientX - dragStart.current)
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
  }
}

export default useProjectGallery
