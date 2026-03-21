const About = () => {
  const education = [
    {
      period: '2024 - Presente',
      title: 'Ingeniería en Informática',
      place: 'Duoc UC - Plaza Norte',
      desc: 'Especialización profesional y liderazgo de proyectos.',
    },
    {
      period: '2019 - 2022',
      title: 'Analista Programador Computacional',
      place: 'Duoc UC - Plaza Norte',
      desc: 'Base sólida en lógica, bases de datos y desarrollo.',
    },
    {
      period: '2015 - 2018',
      title: 'Educación Media',
      place: 'Liceo Peldehue, Colina',
      desc: 'Primeros pasos en formación técnica y profesional.',
    },
  ]

  return (
    <div className='grow w-full max-w-4xl mx-auto p-6 py-12'>
      {/* Sección Hero Personal */}
      <div className='text-center mb-16'>
        <span className='text-blue-600 font-bold tracking-widest uppercase text-sm'>
          Trayectoria
        </span>
        <h1 className='text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6'>
          Mi recorrido en el mundo del{' '}
          <span className='text-blue-600'>desarrollo.</span>
        </h1>
        <p className='text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed'>
          Soy Natanael, estudiante de Ingeniería en Informática apasionado por
          el aprendizaje continuo. Mi camino en el desarrollo comenzó en 2019 y
          desde entonces no he dejado de crecer, buscando siempre nuevos
          desafíos que me permitan aportar valor real.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Línea de Tiempo de Formación */}
        <div className='space-y-8'>
          <h2 className='text-xl font-bold text-slate-800 flex items-center gap-2'>
            🎓 Formación Académica
          </h2>
          <div className='border-l-2 border-slate-100 ml-3 space-y-8'>
            {education.map((edu, index) => (
              <div key={index} className='relative pl-8'>
                {/* Circulito de la línea de tiempo */}
                <div className='absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white'></div>
                <p className='text-sm font-bold text-blue-600'>{edu.period}</p>
                <h3 className='font-bold text-slate-900'>{edu.title}</h3>
                <p className='text-sm text-slate-500'>{edu.place}</p>
                <p className='text-sm text-slate-400 mt-1 italic'>{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Información Adicional & Cursos */}
        <div className='space-y-6'>
          {/* Cursos */}
          <h2 className='text-xl font-bold text-slate-800 flex items-center gap-2'>
            ✨ Cursos & Especializaciones
          </h2>
          <div className='bg-slate-50 p-6 rounded-2xl border border-slate-100'>
            <ul className='space-y-4'>
              <li className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-green-500'></div>
                <span className='text-slate-700 text-sm'>
                  <span className='font-bold text-slate-900 underline underline-offset-2'>
                    Full Stack:
                  </span>{' '}
                  Desarrollo web completo — Duoc UC (2022)
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-green-500'></div>
                <span className='text-slate-700 text-sm'>
                  <span className='font-bold text-slate-900 underline underline-offset-2'>
                    Inglés:
                  </span>{' '}
                  Nivel intermedio — Duoc UC
                </span>
              </li>
            </ul>
          </div>

          {/* Objetivo Profesional */}
          <h2 className='text-xl font-bold text-slate-800 flex items-center gap-2'>
            🎯 Objetivo Profesional
          </h2>
          <div className='bg-slate-50 p-6 rounded-2xl border border-slate-100'>
            <p className='text-slate-600 text-sm leading-relaxed'>
              Busco oportunidades que me permitan aplicar mis conocimientos en
              entornos desafiantes y seguir creciendo profesionalmente, dentro
              de una organización que valore la estabilidad y el desarrollo a
              largo plazo.
            </p>
          </div>

          {/* Intereses */}
          <h2 className='text-xl font-bold text-slate-800 flex items-center gap-2'>
            💡 Intereses
          </h2>
          <div className='flex flex-wrap gap-2'>
            <span className='px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-xl'>
              👨‍👩‍👧‍👦 Familia
            </span>
            <span className='px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-xl'>
              🎵 Música
            </span>
            <span className='px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-xl'>
              🎮 Videojuegos
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
