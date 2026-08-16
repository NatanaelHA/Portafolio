import AboutAnimatedBackground from '../components/about/AboutAnimatedBackground'
import AboutDetailsSection from '../components/about/AboutDetailsSection'
import AboutEducationSection from '../components/about/AboutEducationSection'
import AboutHero from '../components/about/AboutHero'
import { education } from '../data/education'

const About = () => {
  return (
    <div className='relative isolate mx-auto w-full max-w-4xl grow p-6 py-12'>
      <AboutAnimatedBackground />

      {/* Presentación */}
      <AboutHero />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Formación */}
        <AboutEducationSection education={education} />

        {/* Información adicional */}
        <AboutDetailsSection />
      </div>
    </div>
  )
}

export default About
