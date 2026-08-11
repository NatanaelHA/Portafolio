const ProfileExperienceCard = ({ experience }) => {
  return (
    <article className='rounded-3xl border border-slate-200 bg-white p-7 shadow-sm'>
      <p className='text-xs font-bold uppercase tracking-[0.14em] text-blue-600'>
        {experience.period}
      </p>
      <h3 className='mt-3 text-lg font-black text-slate-900'>
        {experience.role}
      </h3>
      <p className='mt-1 text-sm font-semibold text-slate-500'>
        {experience.company}
      </p>

      <ul className='mt-5 space-y-3 text-sm leading-relaxed text-slate-600'>
        {experience.highlights.map((highlight) => (
          <li key={highlight} className='flex gap-2'>
            <span aria-hidden='true' className='text-blue-500'>
              •
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ProfileExperienceCard
