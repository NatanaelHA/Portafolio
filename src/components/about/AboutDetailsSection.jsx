import useScrollReveal from '../../hooks/useScrollReveal'

const AboutDetailsSection = () => {
  const { elementRef, revealClassName } = useScrollReveal()

  return (
    <section
      ref={elementRef}
      className={`space-y-6 ${revealClassName}`}
    >
      {/* Cursos */}
      <h2 className='flex items-center gap-2 text-xl font-bold text-slate-800'>
        ✨ Cursos & Especializaciones
      </h2>
      <div className='rounded-2xl border border-slate-100 bg-slate-50 p-6'>
        <ul className='space-y-4'>
          <li className='flex items-center gap-3'>
            <div className='h-2 w-2 rounded-full bg-green-500'></div>
            <span className='text-sm text-slate-700'>
              <span className='font-bold text-slate-900 underline underline-offset-2'>
                Desarrollo Full Stack:
              </span>{' '}
              Curso especializado
            </span>
          </li>
          <li className='flex items-center gap-3'>
            <div className='h-2 w-2 rounded-full bg-green-500'></div>
            <span className='text-sm text-slate-700'>
              <span className='font-bold text-slate-900 underline underline-offset-2'>
                Metodologías Ágiles:
              </span>{' '}
              Certificación profesional
            </span>
          </li>
          <li className='flex items-center gap-3'>
            <div className='h-2 w-2 rounded-full bg-green-500'></div>
            <span className='text-sm text-slate-700'>
              <span className='font-bold text-slate-900 underline underline-offset-2'>
                Bases de Datos:
              </span>{' '}
              Curso de Base de Datos Aplicada
            </span>
          </li>
        </ul>
      </div>

      {/* Objetivo */}
      <h2 className='flex items-center gap-2 text-xl font-bold text-slate-800'>
        🎯 Objetivo Profesional
      </h2>
      <div className='rounded-2xl border border-slate-100 bg-slate-50 p-6'>
        <p className='text-sm leading-relaxed text-slate-600'>
          Busco aportar en equipos donde pueda conectar producto, código e
          infraestructura, construyendo soluciones útiles y sostenibles a largo
          plazo sin dejar de aprender.
        </p>
      </div>

      {/* Intereses */}
      <h2 className='flex items-center gap-2 text-xl font-bold text-slate-800'>
        💡 Intereses
      </h2>
      <div className='flex flex-wrap gap-2'>
        <span className='rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700'>
          👨‍👩‍👧‍👦 Familia
        </span>
        <span className='rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700'>
          🎵 Música
        </span>
        <span className='rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700'>
          🎮 Videojuegos
        </span>
      </div>
    </section>
  )
}

export default AboutDetailsSection
