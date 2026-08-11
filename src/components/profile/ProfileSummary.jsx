const profileTags = ['AWS Cloud', 'Full Stack', 'Mobile']

const ProfileSummary = () => {
  return (
    <aside className='sticky top-8 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm'>
      <div className='mx-auto mb-6 flex h-32 w-32 -rotate-3 transform items-center justify-center rounded-2xl bg-linear-to-br from-blue-700 to-blue-500 text-4xl font-black text-white shadow-2xl shadow-blue-200'>
        NH
      </div>
      <h1 className='text-2xl font-bold leading-tight text-slate-900'>
        Natanael Eusebio Huenullan Acevedo
      </h1>
      <p className='mt-2 font-medium text-blue-600'>Full Stack Developer</p>

      <div className='mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2'>
        <span className='text-xs font-bold uppercase tracking-wider text-blue-700'>
          Inglés: Intermedio
        </span>
      </div>

      <div className='mt-6 flex flex-wrap justify-center gap-2'>
        {profileTags.map((tag) => (
          <span
            key={tag}
            className='rounded-md bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase text-slate-600'
          >
            {tag}
          </span>
        ))}
      </div>
    </aside>
  )
}

export default ProfileSummary
