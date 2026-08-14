import useProjectImagePreload from '../../hooks/useProjectImagePreload'
import ProjectCard from '../projects/ProjectCard'
import ProjectModal from '../projects/ProjectModal'

const HomeProjectsSection = ({ projects }) => {
  const registerSettledThumbnail = useProjectImagePreload(projects)

  return (
    <section className='mx-auto max-w-6xl'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onThumbnailSettled={registerSettledThumbnail}
          />
        ))}
      </div>

      {/* Detalle del proyecto seleccionado */}
      <ProjectModal />
    </section>
  )
}

export default HomeProjectsSection
