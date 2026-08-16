const ProjectModalHeader = ({ project, theme }) => {
  return (
    <header>
      {project.featured && (
        <div className='pr-12 sm:pr-10'>
          <span className='inline-flex rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white'>
            Proyecto destacado
          </span>
        </div>
      )}

      <h2
        id='project-modal-title'
        className='mb-3 mt-5 text-xl font-black leading-tight text-slate-900 sm:mb-2 sm:mt-3 sm:text-2xl'
      >
        {project.title}
      </h2>

      <p className='mb-7 text-sm leading-relaxed text-slate-500 sm:mb-6'>
        {project.desc}
      </p>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target='_blank'
          rel='noreferrer'
          className={`
            mb-7 inline-flex w-full items-center justify-center gap-2
            rounded-xl px-5 py-3 text-sm font-bold transition-colors
            sm:mb-6 sm:w-auto ${theme.button}
          `}
        >
          Abrir aplicación
          <span aria-hidden='true'>↗</span>
        </a>
      )}
    </header>
  )
}

export default ProjectModalHeader
