const ProjectModalHeader = ({ project, theme }) => {
  return (
    <header>
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
    </header>
  )
}

export default ProjectModalHeader
