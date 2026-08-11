import { createPortal } from 'react-dom'
import useProjectModal from '../../hooks/useProjectModal'
import ProjectGallery from './ProjectGallery'
import ProjectModalHeader from './ProjectModalHeader'
import ProjectTechnicalDetails from './ProjectTechnicalDetails'
import { getProjectTheme } from './projectThemes'

const ProjectModalContent = ({ project, onClose }) => {
  const theme = getProjectTheme(project?.variant).modal
  const { isClosing, handleClose, closeButtonRef, dialogRef } = useProjectModal({
    project,
    onClose,
  })

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
        className={`relative max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-3xl p-8 shadow-2xl ${
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
          className='absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200'
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
