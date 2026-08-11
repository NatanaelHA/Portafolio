const HomeHero = () => {
  return (
    <header className='mb-12 text-center'>
      <span className='mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700'>
        Full Stack · Cloud · Mobile
      </span>
      <h1 className='mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl'>
        Soluciones que viven más allá del{' '}
        <span className='text-blue-600'>código.</span>
      </h1>
      <p className='mx-auto max-w-2xl text-lg leading-relaxed text-slate-600'>
        Diseño productos web y móviles conectando interfaces claras, backends
        mantenibles y servicios cloud preparados para crecer.
      </p>
    </header>
  )
}

export default HomeHero
