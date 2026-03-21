import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-slate-900 text-white overflow-hidden relative'>
      {/* Fondo de Estrellas/Pixeles */}
      <div
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          size: '40px 40px',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* El 404 con efecto Glitch */}
      <h1 className='relative font-black text-8xl md:text-9xl tracking-tighter animate-pulse text-slate-800'>
        404
        <span className='absolute inset-0 text-blue-500 opacity-50 animate-ping'>
          404
        </span>
      </h1>

      {/* PERSONAJE PIXEL ART*/}
      <div className='relative w-24 h-24 my-10 animate-bounce'>
        {/* Cuerpo del Personaje Pixel */}
        <div className='absolute inset-0 flex flex-col items-center'>
          {/* Cabeza */}
          <div className='w-12 h-12 bg-yellow-400 border-4 border-black rounded-sm relative overflow-visible'>
            {/* PELO  */}
            <div className='absolute -top-3 left-1/2 -translate-x-1/2 flex'>
              {/* Lateral izquierdo */}
              <div className='w-2 h-6 bg-black'></div>

              {/* Cresta */}
              <div className='flex flex-col'>
                <div className='w-2 h-2 bg-black'></div>
                <div className='w-2 h-2 bg-black'></div>
                <div className='w-2 h-2 bg-black'></div>
              </div>

              {/* Lateral derecho */}
              <div className='w-2 h-6 bg-black'></div>
            </div>

            {/* Ojos */}
            <div className='absolute top-4 left-2 w-2 h-2 bg-black animate-blink'></div>
            <div className='absolute top-4 right-2 w-2 h-2 bg-black animate-blink'></div>

            {/* Barba */}
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center'>
              {/* Bigote */}
              <div className='flex gap-1'>
                <div className='w-2 h-1 bg-black'></div>
                <div className='w-2 h-1 bg-black'></div>
              </div>

              {/* Perilla */}
              <div className='mt-1 w-2 h-2 bg-black'></div>
            </div>
          </div>

          {/* Cuerpo */}
          <div className='w-10 h-8 bg-blue-600 border-x-4 border-b-4 border-black'></div>
          {/* Pies */}
          <div className='flex gap-2'>
            <div className='w-4 h-3 bg-slate-800 border-b-4 border-black'></div>
            <div className='w-4 h-3 bg-slate-800 border-b-4 border-black'></div>
          </div>
        </div>
      </div>

      {/* Mensaje */}
      <div className='z-10 text-center px-6'>
        <h2 className='font-bold text-2xl md:text-4xl mb-4 uppercase tracking-widest text-blue-400'>
          ¡Te has perdido!
        </h2>
        <p className='text-slate-400 mb-8 max-w-sm mx-auto font-mono text-sm'>
          Has tomado una ruta que no existe.
        </p>

        <Link
          to='/'
          className='inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-none border-b-4 border-blue-800 font-bold hover:bg-blue-500 active:border-b-0 active:translate-y-1 transition-all uppercase tracking-tighter italic'
        >
          <span className='text-xl'>⟵</span> Volver al Inicio
        </Link>
      </div>

      {/* CSS Extra para animaciones */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes blink {
          0%, 90%, 100% { height: 8px; }
          95% { height: 1px; }
        }
        .animate-blink {
          animation: blink 3s infinite;
        }
      `,
        }}
      />
    </div>
  )
}

export default NotFound
