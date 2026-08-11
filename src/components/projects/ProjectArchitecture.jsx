const ProjectArchitecture = ({ technologies }) => {
  return (
    <section className='rounded-2xl border border-slate-200/80 bg-white/70 p-5'>
      <h3 className='mb-3 text-xs font-black uppercase tracking-[0.16em] text-slate-700'>
        Arquitectura
      </h3>
      <div className='flex flex-wrap gap-2'>
        {technologies.map((technology) => (
          <span
            key={technology}
            className='rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-600'
          >
            {technology}
          </span>
        ))}
      </div>
    </section>
  )
}

export default ProjectArchitecture
