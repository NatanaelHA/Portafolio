const Profile = () => {
  const skills = [
    {
      category: 'Front-End & Mobile',
      items:
        'React.js, Next.js (SSR, API Routes, SPA), TypeScript, Angular, Ionic Framework, JavaScript, Tailwind CSS',
    },
    {
      category: 'Back-End & APIs',
      items: 'Node.js, Express.js, APIs RESTful, middlewares, microservicios y arquitectura orientada a eventos',
    },
    {
      category: 'AWS & Arquitectura Cloud',
      items: 'Lambda, API Gateway, DynamoDB, Cognito, S3, SQS, SES, IAM, CloudWatch, AWS CDK y CI/CD',
    },
    {
      category: 'Datos & Google Cloud',
      items: 'Oracle PL/SQL, MySQL, MongoDB, Firestore, Cloud Run, BigQuery, Cloud Storage y Firebase',
    },
    {
      category: 'Calidad & Entrega',
      items: 'Git, GitHub Actions, Jest, Postman, Insomnia, Katalon Studio, Selenium IDE y Figma',
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
              Full Stack Developer
            </p>

            {/* Idioma destacado */}
            <div className='mt-4 py-2 px-4 bg-blue-50 rounded-xl inline-flex items-center gap-2'>
              <span className='text-blue-700 text-xs font-bold uppercase tracking-wider'>
                Inglés: Intermedio
              </span>
            </div>

            <div className='mt-6 flex flex-wrap justify-center gap-2'>
              <span className='px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase'>
                AWS Cloud
              </span>
              <span className='px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase'>
                Full Stack
              </span>
              <span className='px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase'>
                Mobile
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
              Ingeniero en Informática y Analista Programador Computacional con
              2 años de experiencia profesional en desarrollo full stack. Creo
              aplicaciones web y móviles, backends e integraciones cloud con
              foco en soluciones escalables, mantenibles y orientadas a eventos.
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
