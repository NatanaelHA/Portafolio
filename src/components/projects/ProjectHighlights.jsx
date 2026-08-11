const ProjectHighlights = ({ highlights, twoColumns = false }) => {
  return (
    <section className='rounded-2xl border border-slate-200/80 bg-white/70 p-5'>
      <h3 className='mb-3 text-xs font-black uppercase tracking-[0.16em] text-slate-700'>
        Puntos destacados
      </h3>
      <ul
        className={`grid gap-2 text-xs leading-relaxed text-slate-600 ${
          twoColumns ? 'lg:grid-cols-2' : ''
        }`}
      >
        {highlights.map((highlight) => (
          <li key={highlight} className='flex gap-2'>
            <span aria-hidden='true' className='text-slate-400'>
              •
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectHighlights
