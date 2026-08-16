import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import Threads from '../backgrounds/Threads'

const HomeAnimatedBackground = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden bg-slate-50'
    >
      <div className='absolute inset-0'>
        <Threads
          color={[0.22, 0.38, 0.82]}
          amplitude={1.15}
          distance={0.35}
          isAnimated={!prefersReducedMotion}
          className='opacity-30'
        />
      </div>

    </div>
  )
}

export default HomeAnimatedBackground
