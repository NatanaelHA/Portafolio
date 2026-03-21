const Profile = () => {
  const skills = [
    {
      category: 'Front-End & Mobile',
      items:
        'React.js (Hooks, Redux), Angular, Ionic Framework, HTML5, CSS3, JavaScript (ES6+), Bootstrap, TailwindCSS',
    },
    {
      category: 'Back-End & APIs',
      items: 'Node.js, Express.js, APIs RESTful',
    },
    {
      category: 'Bases de Datos & Cloud',
      items: 'MySQL, Oracle, MongoDB, Firestore, Google Cloud Platform (GCP)',
    },
    {
      category: 'QA & Testing',
      items: 'Postman, Insomnia, Selenium IDE, Katalon Studio, JUnit, Cucumber',
    },
    {
      category: 'Diseño & Prototipado',
      items: 'Figma, Visily, Canva',
    },
    {
      category: 'Habilidades Blandas',
      items:
        'Liderazgo técnico, trabajo colaborativo, capacidad analítica, orientación a resultados, mejora continua',
    },
  ]

  return (
    <div className='grow w-full max-w-5xl mx-auto p-6 py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Columna Izquierda: Info Básica */}
        <div className='lg:col-span-1'>
          <div className='bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center sticky top-8'>
            <div className='w-32 h-32 bg-linear-to-br from-blue-700 to-blue-500 rounded-2xl mx-auto flex items-center justify-center text-white text-4xl font-black shadow-blue-200 shadow-2xl mb-6 transform -rotate-3'>
              NH
            </div>
            <h1 className='text-2xl font-bold text-slate-900 leading-tight'>
              Natanael Eusebio Huenullan Acevedo
            </h1>
            <p className='text-blue-600 font-medium mt-2'>
              Ingeniero en Informática
            </p>

            {/* Idioma destacado */}
            <div className='mt-4 py-2 px-4 bg-blue-50 rounded-xl inline-flex items-center gap-2'>
              <span className='text-blue-700 text-xs font-bold uppercase tracking-wider'>
                Inglés: Intermedio
              </span>
            </div>

            <div className='mt-6 flex flex-wrap justify-center gap-2'>
              <span className='px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase'>
                Full Stack
              </span>
              <span className='px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase'>
                UX/UI Design
              </span>
              <span className='px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase'>
                Mobile Dev
              </span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Bio y Skills */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Bio Card */}
          <div className='bg-white border border-slate-200 rounded-3xl p-8 shadow-sm'>
            <h2 className='text-xl font-bold text-slate-900 mb-4 flex items-center gap-2'>
              <span className='w-2 h-6 bg-blue-600 rounded-full'></span>
              Sobre mí
            </h2>
            <p className='text-slate-600 leading-relaxed text-justify text-base md:text-lg'>
              Estudiante de último año de Ingeniería en Informática con sólida
              capacidad para liderar proyectos tecnológicos, resolver problemas
              de manera eficiente y adaptarme a entornos colaborativos o
              autónomos. Me especializo en desarrollo full stack con enfoque en
              calidad, optimización y mejora continua.
            </p>
          </div>

          {/* Stack Grid - Aquí están todas tus nuevas tecnologías */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:border-blue-200 transition-colors'
              >
                <h3 className='font-bold text-slate-800 mb-3 text-sm flex items-center gap-2'>
                  <div className='w-1.5 h-1.5 bg-blue-500 rounded-full'></div>
                  {skill.category}
                </h3>
                <p className='text-sm text-slate-500 leading-loose'>
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
