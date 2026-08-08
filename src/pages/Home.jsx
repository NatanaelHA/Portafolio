import { useState } from 'react'
import ProjectModal from './Modal'

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Gestor de Notas Cloud',
      category: 'Proyecto destacado · AWS',
      desc: 'Aplicación full stack para gestionar notas y archivos, construida sobre una arquitectura serverless, segura y orientada a eventos.',
      stack:
        'Next.js 16 · TypeScript · AWS Lambda · API Gateway · DynamoDB · Cognito · S3 · SQS · SES · GitHub Actions',
      liveUrl: 'https://notas-app-one-bice.vercel.app',
      featured: true,
      architecture: ['Next.js', 'Cognito', 'API Gateway', 'Lambda', 'DynamoDB'],
      highlights: [
        'Sesiones validadas server-side mediante Amazon Cognito y cookies.',
        'Carga segura de adjuntos en S3 usando presigned URLs.',
        'Notificaciones asíncronas con SQS, SES y Dead Letter Queue.',
        'Despliegues automatizados mediante GitHub Actions.',
      ],
      images: [],
    },
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
        'Ionic 8 · Angular 21 · Node.js · Gemini AI · Google Maps · Firebase · Render',
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
    <div className='py-12 md:py-16 px-4'>
      {/* Hero Section */}
      <div className='text-center mb-12'>
        <span className='inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 px-4 py-2 rounded-full mb-6'>
          Full Stack · Cloud · Mobile
        </span>
        <h1 className='text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight'>
          Soluciones que viven más allá del{' '}
          <span className='text-blue-600'>código.</span>
        </h1>
        <p className='text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed'>
          Diseño productos web y móviles conectando interfaces claras,
          backends mantenibles y servicios cloud preparados para crecer.
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-16'>
        {[
          ['2 años', 'Experiencia profesional'],
          ['4', 'Proyectos seleccionados'],
          ['AWS + GCP', 'Experiencia cloud'],
          ['Web + Mobile', 'Productos end-to-end'],
        ].map(([value, label]) => (
          <div key={label} className='rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm'>
            <p className='font-black text-slate-900 text-lg'>{value}</p>
            <p className='text-[11px] text-slate-500 mt-1'>{label}</p>
          </div>
        ))}
      </div>

      {/* Grid de Proyectos */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl'>
        {projects.map((project) => (
          <div
            key={project.title}
            className={`group flex flex-col p-6 rounded-3xl transition-all duration-300 ${
              project.featured
                ? 'md:col-span-2 bg-slate-950 text-white border border-slate-800 shadow-2xl shadow-blue-950/20'
                : 'bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400'
            }`}
          >
            {/* Category badge */}
            <div className='mb-3'>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${project.featured ? 'text-blue-300 bg-blue-500/10' : 'text-blue-600 bg-blue-50'}`}>
                {project.category}
              </span>
            </div>

            {/* Título */}
            <h3 className={`text-xl font-bold mb-4 transition-colors ${project.featured ? 'text-white md:text-3xl' : 'text-slate-800 group-hover:text-blue-600'}`}>
              {project.title}
            </h3>

            {/* Imagen */}
            {project.featured ? (
              <div className='rounded-2xl border border-white/10 bg-white/5 p-5 mb-5 overflow-hidden'>
                <p className='text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-4'>Arquitectura principal</p>
                <div className='flex items-center gap-2 overflow-x-auto pb-2'>
                  {project.architecture.map((service, index) => (
                    <div key={service} className='flex items-center gap-2 shrink-0'>
                      <span className='px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200'>{service}</span>
                      {index < project.architecture.length - 1 && <span className='text-blue-400'>→</span>}
                    </div>
                  ))}
                </div>
              </div>
            ) : <div className='w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-100'>
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
            </div>}

            {/* Descripción */}
            <p className={`text-sm leading-relaxed mb-6 grow ${project.featured ? 'text-slate-300 max-w-3xl' : 'text-slate-500'}`}>
              {project.desc}
            </p>

            {project.highlights && (
              <div className='grid sm:grid-cols-2 gap-2 mb-6'>
                {project.highlights.map((item) => (
                  <p key={item} className='text-xs text-slate-300 flex gap-2'>
                    <span className='text-blue-400'>✓</span>{item}
                  </p>
                ))}
              </div>
            )}

            {/* Botón */}
            <div className='flex flex-col sm:flex-row gap-3'>
              {project.liveUrl && (
                <a href={project.liveUrl} target='_blank' rel='noreferrer' className='flex items-center justify-center gap-2 py-3 px-5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all'>
                  Abrir aplicación <span aria-hidden='true'>↗</span>
                </a>
              )}
              {!project.featured && (
                <button
                  onClick={() => setSelectedProject(project)}
                  className='flex items-center justify-center gap-2 w-full py-3 bg-slate-50 text-slate-700 font-bold text-sm rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all'
                >
                  Ver proyecto <span aria-hidden='true'>→</span>
                </button>
              )}
            </div>
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
