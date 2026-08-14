import { useState } from 'react'
import useProjectGallery from '../../hooks/useProjectGallery'
import { getProjectGallerySrcSet } from '../../utils/getProjectImageSrcSet'
import { GALLERY_SIZES } from '../../utils/imageSizes'

const ProjectGallery = ({
  images = [],
  projectTitle,
  frameClass,
  dotClass,
  compact = false,
}) => {
  const [loadedImage, setLoadedImage] = useState(null)

  const {
    currentIndex,
    dragOffset,
    showPreviousImage,
    showNextImage,
    selectImage,
    startDragging,
    dragImage,
    finishDragging,
    cancelDragging,
  } = useProjectGallery(images.length)

  // Mantiene un espacio visual cuando el proyecto no tiene capturas
  if (images.length === 0) {
    return (
      <div className='flex aspect-video items-center justify-center rounded-2xl bg-slate-100 text-xs font-medium text-slate-400'>
        📷 Sin imágenes disponibles
      </div>
    )
  }

  const currentImage = images[currentIndex]
  const currentImageSrcSet = getProjectGallerySrcSet(currentImage)
  const isCurrentImageLoaded = loadedImage === currentImage

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
        {!isCurrentImageLoaded && (
          <div
            aria-hidden='true'
            className='animate-image-skeleton pointer-events-none absolute inset-0 z-10'
          />
        )}

        <img
          key={currentImage}
          src={currentImage}
          srcSet={currentImageSrcSet}
          sizes={GALLERY_SIZES}
          alt={`${projectTitle} - imagen ${currentIndex + 1}`}
          draggable='false'
          onLoad={() => setLoadedImage(currentImage)}
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.removeAttribute('srcset')
            event.currentTarget.src = currentImage
          }}
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

      {/* Indicadores de imagen */}
      {images.length > 1 && (
        <div className='mt-4 flex justify-center gap-2'>
          {images.map((image, index) => (
            <button
              type='button'
              aria-label={`Ver imagen ${index + 1} de ${images.length}`}
              aria-current={index === currentIndex ? 'true' : undefined}
              key={image}
              onClick={() => selectImage(index)}
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
