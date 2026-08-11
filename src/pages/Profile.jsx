import ProfileBio from '../components/profile/ProfileBio'
import ProfileExperienceSection from '../components/profile/ProfileExperienceSection'
import ProfileSkillsGrid from '../components/profile/ProfileSkillsGrid'
import ProfileSummary from '../components/profile/ProfileSummary'
import { skills } from '../data/skills'
import { experience } from '../data/experience'

const Profile = () => {
  return (
    <div className='grow w-full max-w-5xl mx-auto p-6 py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Resumen */}
        <div className='lg:col-span-1'>
          <ProfileSummary />
        </div>

        {/* Biografía y habilidades */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Biografía */}
          <ProfileBio />

          {/* Habilidades */}
          <ProfileSkillsGrid skills={skills} />
        </div>
      </div>

      {/* Experiencia */}
      <ProfileExperienceSection experience={experience} />
    </div>
  )
}

export default Profile
