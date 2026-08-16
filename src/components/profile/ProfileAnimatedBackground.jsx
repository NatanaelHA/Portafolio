import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import Particles from '../backgrounds/Particles'

const PROFILE_PARTICLE_COLORS = ['#2563eb', '#38bdf8', '#8b5cf6']

const ProfileAnimatedBackground = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden bg-slate-50'
    >
      <Particles
        colors={PROFILE_PARTICLE_COLORS}
        count={420}
        spread={11}
        speed={0.08}
        baseSize={210}
        isAnimated={!prefersReducedMotion}
        className='opacity-40'
      />
    </div>
  )
}

export default ProfileAnimatedBackground
