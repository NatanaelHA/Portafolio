import useProjectModalStore from '../../store/useProjectModalStore'
import ProjectModalContent from './ProjectModalContent'

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
