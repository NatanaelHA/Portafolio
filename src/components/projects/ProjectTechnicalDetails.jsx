import ProjectArchitecture from './ProjectArchitecture'
import ProjectHighlights from './ProjectHighlights'

const ProjectTechnicalDetails = ({ project }) => {
  const hasArchitecture = project.architecture?.length > 0
  const hasHighlights = project.highlights?.length > 0

  if (!hasArchitecture && !hasHighlights) return null

  const isRouteProject = project.variant === 'route'

  return (
    <div
      className={`mb-7 grid gap-5 sm:mb-6 sm:gap-4 md:grid-cols-2 ${
        isRouteProject ? 'lg:grid-cols-[0.75fr_1.25fr]' : ''
      }`}
    >
      {hasArchitecture && (
        <ProjectArchitecture technologies={project.architecture} />
      )}

      {hasHighlights && (
        <ProjectHighlights
          highlights={project.highlights}
          twoColumns={isRouteProject}
        />
      )}
    </div>
  )
}

export default ProjectTechnicalDetails
