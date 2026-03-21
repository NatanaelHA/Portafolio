import { useState } from 'react'
import { createPortal } from 'react-dom'

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!project) return null

  const images = project.images || []
  const hasImages = images.length > 0

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return createPortal(
    <div
      className='fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-9999 flex items-center justify-center p-2 animate-modal-overlay'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-y-auto p-8 relative animate-modal-content'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-all'
        >
          ✕
        </button>

        <span className='text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full'>
          {project.stack}
        </span>

        <h2 className='text-2xl font-black text-slate-900 mt-3 mb-2'>
          {project.title}
        </h2>

        <p className='text-slate-500 text-sm leading-relaxed mb-6'>
          {project.desc}
        </p>

        {/* Carrusel */}
        {hasImages ? (
          <div>
            {/* Imagen con flechas */}
            <div className='relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex justify-center items-center'>
              <img
                src={images[currentIndex]}
                alt={`${project.title} - imagen ${currentIndex + 1}`}
                className='max-w-full max-h-[65vh] w-auto h-auto'
              />

              {/* Flechas */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className='absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-slate-700 shadow transition-all'
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    className='absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-slate-700 shadow transition-all'
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Puntitos */}
            {images.length > 1 && (
              <div className='flex justify-center gap-2 mt-4'>
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? 'bg-blue-600 w-4' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className='aspect-video bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 text-xs font-medium'>
            📷 Sin imágenes disponibles
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}

export default ProjectModal
