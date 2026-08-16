import useScrollReveal from '../../hooks/useScrollReveal'
import ProfileSkillCard from './ProfileSkillCard'
import { profileSkillIcons } from './profileSkillIcons'

const ProfileSkillsGrid = ({ skills }) => {
  const { elementRef, revealClassName } = useScrollReveal()

  return (
    <section
      ref={elementRef}
      aria-label='Habilidades técnicas'
      className={revealClassName}
    >
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
