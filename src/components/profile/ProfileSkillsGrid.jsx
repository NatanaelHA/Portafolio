import ProfileSkillCard from './ProfileSkillCard'
import { profileSkillIcons } from './profileSkillIcons'

const ProfileSkillsGrid = ({ skills }) => {
  return (
    <section aria-label='Habilidades técnicas'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {skills.map((skill) => (
          <ProfileSkillCard
            key={skill.category}
            skill={skill}
            icons={profileSkillIcons[skill.category] || []}
          />
        ))}
      </div>
    </section>
  )
}

export default ProfileSkillsGrid
