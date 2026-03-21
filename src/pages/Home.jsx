import { useState } from 'react'
import ProjectModal from './Modal'

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'E-Commerce App',
      category: 'Full Stack',
      desc: 'Simulacion de una aplicación de comercio, con precios, mantenciones, carrito de compras y plataformas de pago integrados.',
      stack: 'React · Node.js · MongoDB Atlas · Stripe · PayPal',
      thumbnail: '/projects/ecomerce/e-comerce.png',
      images: [
        '/projects/ecomerce/img2.png',
        '/projects/ecomerce/img1.png',
        '/projects/ecomerce/img3.png',
        '/projects/ecomerce/img4.png',
        '/projects/ecomerce/img5.png',
      ],
    },
    {
      title: 'Dashboard de Administración',
      category: 'Frontend',
      desc: 'Panel administrativo para tienda con métricas, gestión de usuarios y tablas',
      stack: 'HTML · CSS · JavaScript',
      thumbnail: '/projects/dashboard/dashboard.png',
      images: [
        '/projects/dashboard/dashboard.png',
        '/projects/dashboard/img2.png',
        '/projects/dashboard/img1.png',
      ],
    },
    {
      title: 'SmartRoute',
      category: 'Mobile Full Stack · IA',
      desc: 'App móvil optimizador de itinerarios. Incluye autenticacion, subscripción Plus, clima en tiempo real, estado de transporte público y navegación GPS. Las rutas son reordenadas por Gemini AI según proximidad, horarios y tipo de lugar.',
      stack:
        'Ionic · Angular · Node.js · Gemini AI · Google Maps · Firestore · Procesos GCP · PayPal',
      thumbnail: '/projects/smartroute/SmartRoute.png',
      images: [
        '/projects/smartroute/SmartRoute.png',
        '/projects/smartroute/img1.png',
        '/projects/smartroute/img2.png',
        '/projects/smartroute/img3.png',
        '/projects/smartroute/img4.png',
        '/projects/smartroute/img5.png',
        '/projects/smartroute/img6.jpg',
        '/projects/smartroute/img8.png',
        '/projects/smartroute/img7.png',
        '/projects/smartroute/img9.png',
      ],
    },
  ]

  return (
    <div className='py-16 px-4'>
      {/* Hero Section */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight'>
          Portafolio de <span className='text-blue-600'>Proyectos</span>
        </h1>
        <p className='text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed'>
          Explora mis desarrollos más recientes en software full stack,
          diseñados con enfoque en calidad, optimización y experiencia de
          usuario.
        </p>
      </div>

      {/* Grid de Proyectos */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='group flex flex-col p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300'
          >
            {/* Category badge */}
            <div className='mb-3'>
              <span className='text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full'>
                {project.category}
              </span>
            </div>

            {/* Título */}
            <h3 className='text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors'>
              {project.title}
            </h3>

            {/* Imagen */}
            <div className='w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-100'>
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center text-slate-400 text-xs font-medium'>
                  📷 Sin imagen
                </div>
              )}
            </div>

            {/* Descripción */}
            <p className='text-slate-500 text-sm leading-relaxed mb-6 grow'>
              {project.desc}
            </p>

            {/* Botón */}
            <button
              onClick={() => setSelectedProject(project)}
              className='flex items-center justify-center gap-2 w-full py-3 bg-slate-50 text-slate-700 font-bold text-sm rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all'
            >
              Ver Proyecto
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Sección contacto */}
      <div className='mt-20 text-center bg-slate-900 rounded-[3rem] p-12 text-white'>
        <h2 className='text-3xl font-bold mb-4'>
          ¿Tienes una propuesta en mente?
        </h2>
        <p className='text-slate-400 mb-8 max-w-md mx-auto'>
          Estoy disponible para nuevas oportunidades y colaboraciones técnicas.
        </p>
        <button
          onClick={() => {
            document
              .getElementById('footer')
              .scrollIntoView({ behavior: 'smooth' })
            setTimeout(() => {
              document.querySelectorAll('.contact-item').forEach((el) => {
                el.classList.add('animate-highlight')
                el.addEventListener(
                  'animationend',
                  () => el.classList.remove('animate-highlight'),
                  { once: true },
                )
              })
            }, 200)
          }}
          className='bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-2xl transition-all'
        >
          Hablemos
        </button>
      </div>

      {/* Modal */}
      <ProjectModal
        key={selectedProject?.title}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default Home
