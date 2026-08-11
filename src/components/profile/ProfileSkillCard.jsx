const ProfileSkillCard = ({ skill, icons = [] }) => {
  return (
    <article className='flex h-full transform-gpu flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-blue-200 hover:shadow-md motion-reduce:hover:scale-100'>
      <h3 className='mb-3 flex items-center gap-2 text-sm font-bold text-slate-800'>
        <span
          aria-hidden='true'
          className='h-1.5 w-1.5 rounded-full bg-blue-500'
        />
        {skill.category}
      </h3>
      <p className='grow text-sm leading-loose text-slate-500'>{skill.items}</p>

      {icons.length > 0 && (
        <div className='mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4'>
          {icons.map(({ label, Icon, color }) => (
            <span
              key={label}
              role='img'
              aria-label={label}
              title={label}
              className='flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-lg shadow-xs transition-transform duration-200 hover:z-10 hover:scale-[1.4] motion-reduce:hover:scale-100'
              style={{ color }}
            >
              <Icon aria-hidden='true' />
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default ProfileSkillCard
