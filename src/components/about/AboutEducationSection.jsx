import AboutEducationItem from './AboutEducationItem'

const AboutEducationSection = ({ education }) => {
  return (
    <section className='space-y-8'>
      <h2 className='flex items-center gap-2 text-xl font-bold text-slate-800'>
        🎓 Formación Académica
      </h2>
      <div className='ml-3 space-y-8 border-l-2 border-slate-100'>
        {education.map((educationItem) => (
          <AboutEducationItem
            key={`${educationItem.title}-${educationItem.period}`}
            education={educationItem}
          />
        ))}
      </div>
    </section>
  )
}

export default AboutEducationSection
