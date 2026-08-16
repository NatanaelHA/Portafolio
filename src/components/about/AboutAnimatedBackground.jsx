import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import Radar from '../backgrounds/Radar'

const AboutAnimatedBackground = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden bg-slate-50'
    >
      <Radar
        color='#2563eb'
        scale={0.72}
        speed={0.32}
        isAnimated={!prefersReducedMotion}
        className='opacity-12'
      />
    </div>
  )
}

export default AboutAnimatedBackground
