import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  TransformComponent,
  TransformWrapper,
} from 'react-zoom-pan-pinch'
import { getProjectGallerySrcSet } from '../../utils/getProjectImageSrcSet'
import { GALLERY_SIZES } from '../../utils/imageSizes'

// Visor de pantalla completa exclusivo para teléfonos y pantallas pequeñas.
const ProjectMobileImageViewer = ({ imageUrl, alt, onClose }) => {
  const closeButtonRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (!imageUrl) return undefined

    const previouslyFocusedElement = document.activeElement

    // Captura Escape antes que el modal principal para cerrar únicamente el visor.
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

  // El segundo portal coloca el visor por encima del modal completo del proyecto.
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

      <div
        className='flex h-full w-full touch-none items-center justify-center overflow-hidden'
        onClick={(event) => event.stopPropagation()}
      >
        {/* La librería limita el zoom y el desplazamiento dentro del visor. */}
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={4}
          centerOnInit
          centerZoomedOut
          limitToBounds
          doubleClick={{ mode: 'toggle' }}
          onTransform={(_, state) => setScale(state.scale)}
        >
          <TransformComponent
            wrapperStyle={{ width: '100%', height: '100%' }}
            contentStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={imageUrl}
              srcSet={getProjectGallerySrcSet(imageUrl)}
              sizes={GALLERY_SIZES}
              alt={alt}
              draggable='false'
              className='max-h-[calc(100dvh-5rem)] max-w-full select-none object-contain'
            />
          </TransformComponent>
        </TransformWrapper>
      </div>

      {scale > 1 && (
        <span className='pointer-events-none absolute bottom-4 rounded-full bg-black/45 px-3 py-1 text-xs font-bold text-white/85'>
          {scale.toFixed(1)}x
        </span>
      )}
    </div>,
    document.body,
  )
}

export default ProjectMobileImageViewer
