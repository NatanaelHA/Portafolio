import ProfileExperienceCard from './ProfileExperienceCard'

const ProfileExperienceSection = ({ experience }) => {
  return (
    <section className='mt-12'>
      <div className='mb-6 flex items-center gap-3'>
        <span aria-hidden='true' className='h-7 w-2 rounded-full bg-blue-600' />
        <div>
          <p className='text-xs font-bold uppercase tracking-[0.18em] text-blue-600'>
            Trayectoria
          </p>
          <h2 className='text-2xl font-black text-slate-900'>
            Experiencia profesional
          </h2>
        </div>
      </div>

      <div className='grid gap-5 md:grid-cols-2'>
        {experience.map((job) => (
          <ProfileExperienceCard
            key={`${job.company}-${job.period}`}
            experience={job}
          />
        ))}
      </div>
    </section>
  )
}

export default ProfileExperienceSection
