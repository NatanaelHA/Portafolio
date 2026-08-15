import useProjectImagePreload from '../../hooks/useProjectImagePreload'
import useScrollReveal from '../../hooks/useScrollReveal'
import ProjectCard from '../projects/ProjectCard'
import ProjectModal from '../projects/ProjectModal'

const HomeProjectsSection = ({ projects }) => {
  useProjectImagePreload(projects)
  const { elementRef, revealClassName } = useScrollReveal()

  return (
    <section
      ref={elementRef}
      className={`mx-auto max-w-6xl ${revealClassName}`}
    >
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Detalle del proyecto seleccionado */}
      <ProjectModal />
    </section>
  )
}

export default HomeProjectsSection
