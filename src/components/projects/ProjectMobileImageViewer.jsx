import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { getProjectGallerySrcSet } from '../../utils/getProjectImageSrcSet'
import { GALLERY_SIZES } from '../../utils/imageSizes'

// Visor de pantalla completa exclusivo para teléfonos y pantallas pequeñas.
const ProjectMobileImageViewer = ({ imageUrl, alt, onClose }) => {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!imageUrl) return undefined

    const previouslyFocusedElement = document.activeElement

    // Captura Escape antes que el modal del proyecto para cerrar solo el visor.
    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return

      event.preventDefault()
      event.stopImmediatePropagation()
      onClose()
    }

    document.addEventListener('keydown', handleKeyDown, true)
    closeButtonRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
      previouslyFocusedElement?.focus()
    }
  }, [imageUrl, onClose])

  if (!imageUrl) return null

  return createPortal(
    <div
      role='dialog'
      aria-modal='true'
      aria-label='Vista ampliada de la imagen'
      className='fixed inset-0 z-10000 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm md:hidden'
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type='button'
        aria-label='Cerrar imagen ampliada'
        onClick={onClose}
        className='absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl text-white backdrop-blur-sm transition-colors hover:bg-white/25'
      >
        ✕
      </button>

      <img
        src={imageUrl}
        srcSet={getProjectGallerySrcSet(imageUrl)}
        sizes={GALLERY_SIZES}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
        className='max-h-[calc(100dvh-5rem)] max-w-full object-contain'
      />
    </div>,
    document.body,
  )
}

export default ProjectMobileImageViewer
