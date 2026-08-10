import ProjectModal from '../components/projects/ProjectModal'
import ProjectCard from '../components/projects/ProjectCard'

const Home = () => {
  const projects = [
    {
      title: 'Gestor de Notas Cloud',
      variant: 'aws',
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
      images: [
        '/projects/notas/portada.png',
        '/projects/notas/mis-notas.png',
        '/projects/notas/editor.png',
        '/projects/notas/nota-creada.png',
      ],
    },
    {
      title: 'E-Commerce App',
      variant: 'commerce',
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
      variant: 'dashboard',
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
      variant: 'route',
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
          Diseño productos web y móviles conectando interfaces claras, backends
          mantenibles y servicios cloud preparados para crecer.
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-16'>
        {[
          ['2 años', 'Experiencia profesional'],
          ['4', 'Proyectos seleccionados'],
          ['AWS + GCP', 'Experiencia cloud'],
          ['Web + Mobile', 'Productos end-to-end'],
        ].map(([value, label]) => (
          <div
            key={label}
            className='rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm'
          >
            <p className='font-black text-slate-900 text-lg'>{value}</p>
            <p className='text-[11px] text-slate-500 mt-1'>{label}</p>
          </div>
        ))}
      </div>

      {/* Grid de Proyectos */}

      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
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
      <ProjectModal />
    </div>
  )
}

export default Home
