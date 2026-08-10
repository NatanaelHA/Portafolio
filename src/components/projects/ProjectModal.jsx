import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import useProjectModalStore from '../../store/useProjectModalStore'
import ProjectGallery from './ProjectGallery'
import { getProjectTheme } from './projectThemes'

const ProjectModalContent = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false)
  const closeTimeout = useRef(null)
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)

  const handleClose = useCallback(() => {
    if (isClosing) return

    setIsClosing(true)

    closeTimeout.current = window.setTimeout(() => {
      onClose()
    }, 220)
  }, [isClosing, onClose])
  const theme = getProjectTheme(project?.variant).modal

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

  if (!project) return null

  return createPortal(
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-black/60 p-2 backdrop-blur-sm ${isClosing ? 'animate-modal-overlay-out' : 'animate-modal-overlay'}`}
      onClick={handleClose}
    >
      <div
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby='project-modal-title'
        className={`relative max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-3xl p-8 shadow-2xl ${isClosing ? 'animate-modal-content-out' : 'animate-modal-content'} ${theme.surface}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          aria-hidden='true'
          className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${theme.accent}`}
        />

        {/* Cierre */}
        <button
          ref={closeButtonRef}
          type='button'
          aria-label='Cerrar detalles del proyecto'
          onClick={handleClose}
          className='absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200'
        >
          ✕
        </button>

        <div className='flex flex-wrap items-center gap-2 pr-10'>
          <span
            className={`
              inline-flex rounded-full border px-3 py-1 text-[10px]
              font-bold uppercase tracking-widest ${theme.badge}
            `}
          >
            {project.stack}
          </span>

          {project.featured && (
            <span className='inline-flex rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white'>
              Proyecto destacado
            </span>
          )}
        </div>

        <h2
          id='project-modal-title'
          className='mt-3 mb-2 text-2xl font-black text-slate-900'
        >
          {project.title}
        </h2>

        <p className='mb-6 text-sm leading-relaxed text-slate-500'>
          {project.desc}
        </p>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noreferrer'
            className={`
              mb-6 inline-flex items-center gap-2 rounded-xl px-5 py-3
              text-sm font-bold transition-colors ${theme.button}
            `}
          >
            Abrir aplicación
            <span aria-hidden='true'>↗</span>
          </a>
        )}

        {(project.architecture?.length > 0 || project.highlights?.length > 0) && (
          <div className='mb-6 grid gap-4 md:grid-cols-2'>
            {project.architecture?.length > 0 && (
              <section className='rounded-2xl border border-slate-200/80 bg-white/70 p-5'>
                <h3 className='mb-3 text-xs font-black uppercase tracking-[0.16em] text-slate-700'>
                  Arquitectura
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {project.architecture.map((technology) => (
                    <span
                      key={technology}
                      className='rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-600'
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {project.highlights?.length > 0 && (
              <section className='rounded-2xl border border-slate-200/80 bg-white/70 p-5'>
                <h3 className='mb-3 text-xs font-black uppercase tracking-[0.16em] text-slate-700'>
                  Puntos destacados
                </h3>
                <ul className='space-y-2 text-xs leading-relaxed text-slate-600'>
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className='flex gap-2'>
                      <span aria-hidden='true' className='text-slate-400'>
                        •
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}

        <ProjectGallery
          images={project.images}
          projectTitle={project.title}
          frameClass={theme.frame}
          dotClass={theme.dot}
        />
      </div>
    </div>,
    document.body,
  )
}

const ProjectModal = () => {
  const project = useProjectModalStore((state) => state.selectedProject)
  const closeProject = useProjectModalStore((state) => state.closeProject)

  if (!project) return null

  return (
    <ProjectModalContent
      key={project.title}
      project={project}
      onClose={closeProject}
    />
  )
}

export default ProjectModal
