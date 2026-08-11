const ProfileBio = () => {
  return (
    <section className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
      <h2 className='mb-4 flex items-center gap-2 text-xl font-bold text-slate-900'>
        <span aria-hidden='true' className='h-6 w-2 rounded-full bg-blue-600' />
        Sobre mí
      </h2>
      <p className='text-justify text-base leading-relaxed text-slate-600 md:text-lg'>
        Ingeniero en Informática y Analista Programador Computacional con 2 años
        de experiencia profesional en desarrollo full stack. Creo aplicaciones
        web y móviles, backends e integraciones cloud con foco en soluciones
        escalables, mantenibles y orientadas a eventos.
      </p>
    </section>
  )
}

export default ProfileBio
