import { createPortal } from 'react-dom'
import useProjectModal from '../../hooks/useProjectModal'
import ProjectGallery from './ProjectGallery'
import ProjectModalHeader from './ProjectModalHeader'
import ProjectTechnicalDetails from './ProjectTechnicalDetails'
import { getProjectTheme } from './projectThemes'

const ProjectModalContent = ({ project, onClose }) => {
  const theme = getProjectTheme(project?.variant).modal
  const { isClosing, handleClose, closeButtonRef, dialogRef } = useProjectModal(
    {
      project,
      onClose,
    },
  )

  if (!project) return null

  return createPortal(
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-black/60 p-2 backdrop-blur-sm ${
        isClosing ? 'animate-modal-overlay-out' : 'animate-modal-overlay'
      }`}
      onClick={handleClose}
    >
      <div
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby='project-modal-title'
        className={`relative max-h-[calc(100dvh-1rem)] w-full max-w-6xl overflow-y-auto rounded-2xl p-4 pt-6 shadow-2xl sm:max-h-[95vh] sm:rounded-3xl sm:p-8 ${
          isClosing ? 'animate-modal-content-out' : 'animate-modal-content'
        } ${theme.surface}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          aria-hidden='true'
          className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${theme.accent}`}
        />

        <button
          ref={closeButtonRef}
          type='button'
          aria-label='Cerrar detalles del proyecto'
          onClick={handleClose}
          className='sticky right-3 top-3 z-20 float-right flex h-10 w-10 items-center justify-center rounded-full bg-slate-100/95 text-slate-500 shadow-md backdrop-blur-sm transition-colors hover:bg-slate-200 sm:absolute sm:right-4 sm:top-4 sm:float-none sm:h-8 sm:w-8 sm:shadow-none'
        >
          ✕
        </button>

        {/* Identidad del proyecto */}
        <ProjectModalHeader project={project} theme={theme} />

        {/* Información técnica */}
        <ProjectTechnicalDetails project={project} />

        {/* Capturas */}
        <ProjectGallery
          images={project.images}
          projectTitle={project.title}
          frameClass={theme.frame}
          dotClass={theme.dot}
          compact={project.variant === 'route'}
        />
      </div>
    </div>,
    document.body,
  )
}

export default ProjectModalContent
