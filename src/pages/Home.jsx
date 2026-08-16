import HomeAnimatedBackground from '../components/home/HomeAnimatedBackground'
import HomeContactSection from '../components/home/HomeContactSection'
import HomeHero from '../components/home/HomeHero'
import HomeProjectsSection from '../components/home/HomeProjectsSection'
import HomeStatsGrid from '../components/home/HomeStatsGrid'
import { homeStats } from '../data/homeStats'
import { projects } from '../data/projects'

const Home = () => {
  return (
    <div className='relative isolate px-4 py-12 md:py-16'>
      <HomeAnimatedBackground />

      {/* Presentación */}
      <HomeHero />
      {/* Resumen profesional */}
      <HomeStatsGrid stats={homeStats} />
      {/* Proyectos */}
      <HomeProjectsSection projects={projects} />
      {/* Contacto */}
      <HomeContactSection />
    </div>
  )
}

export default Home
