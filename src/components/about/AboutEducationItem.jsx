const AboutEducationItem = ({ education }) => {
  return (
    <article className='relative pl-8'>
      <div
        aria-hidden='true'
        className='absolute -left-2.25 top-1 h-4 w-4 rounded-full border-4 border-white bg-blue-600'
      />
      <p className='text-sm font-bold text-blue-600'>{education.period}</p>
      <h3 className='font-bold text-slate-900'>{education.title}</h3>
      <p className='text-sm text-slate-500'>{education.place}</p>
      <p className='mt-1 text-sm italic text-slate-400'>{education.desc}</p>
    </article>
  )
}

export default AboutEducationItem
