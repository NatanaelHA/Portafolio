import { useRef, useState } from 'react'

const SWIPE_DISTANCE = 50

const ProjectGallery = ({
  images = [],
  projectTitle,
  frameClass,
  dotClass,
  compact = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const dragStart = useRef(null)

  if (images.length === 0) {
    return (
      <div className='flex aspect-video items-center justify-center rounded-2xl bg-slate-100 text-xs font-medium text-slate-400'>
        📷 Sin imágenes disponibles
      </div>
    )
  }

  const showPreviousImage = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1))
  }

  const showNextImage = () => {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1))
  }

  const startDragging = (event) => {
    if (images.length < 2 || event.target.closest('button')) return

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

  return (
    <div>
      <div
        onPointerDown={startDragging}
        onPointerMove={dragImage}
        onPointerUp={finishDragging}
        onPointerCancel={cancelDragging}
        className={`
          relative flex ${
            compact
              ? 'h-[45vh] min-h-[240px] max-h-[500px]'
              : 'h-[60vh] min-h-[280px] max-h-[680px]'
          }
          touch-pan-y select-none items-center justify-center overflow-hidden
          rounded-2xl border bg-slate-100 cursor-grab active:cursor-grabbing
          ${frameClass}
        `}
      >
        <img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`${projectTitle} - imagen ${currentIndex + 1}`}
          draggable='false'
          style={{ transform: `translateX(${dragOffset}px)` }}
          className={`h-auto max-h-full w-auto max-w-full object-contain animate-gallery-image ${
            dragOffset === 0
              ? 'transition-transform duration-150'
              : 'transition-none'
          }`}
        />

        {images.length > 1 && (
          <>
            <button
              type='button'
              aria-label='Ver imagen anterior'
              onClick={showPreviousImage}
              className='absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-2xl text-slate-700 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white hover:text-slate-950 active:scale-95'
            >
              ‹
            </button>
            <button
              type='button'
              aria-label='Ver imagen siguiente'
              onClick={showNextImage}
              className='absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-2xl text-slate-700 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white hover:text-slate-950 active:scale-95'
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className='mt-4 flex justify-center gap-2'>
          {images.map((image, index) => (
            <button
              type='button'
              aria-label={`Ver imagen ${index + 1} de ${images.length}`}
              aria-current={index === currentIndex ? 'true' : undefined}
              key={image}
              onClick={() => setCurrentIndex(index)}
              className='group flex h-6 w-6 items-center justify-center rounded-full'
            >
              <span
                aria-hidden='true'
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `w-5 ${dotClass}`
                    : 'w-2 bg-slate-300 group-hover:scale-125 group-hover:bg-slate-400'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectGallery
