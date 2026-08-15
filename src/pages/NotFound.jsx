import { Link } from 'react-router'
import inspectorMascot from '../assets/mascot/inspector_mascot.svg'

const NotFound = () => {
  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-900 text-white'>
      {/* Fondo decorativo */}
      <div
        aria-hidden='true'
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Código de error */}
      <h1 className='relative animate-pulse text-8xl font-black tracking-tighter text-slate-800 motion-reduce:animate-none md:text-9xl'>
        404
        <span
          aria-hidden='true'
          className='absolute inset-0 animate-ping text-blue-500 opacity-50 motion-reduce:animate-none'
        >
          404
        </span>
      </h1>

      {/* Mascota animada */}
      <div
        aria-label='Mascota inspectora buscando la página'
        className='relative my-4 h-44 w-64'
        role='img'
      >
        <div className='absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2'>
          <img
            src={inspectorMascot}
            alt=''
            className='animate-inspector-search h-full w-full'
          />
        </div>
        <span
          aria-hidden='true'
          className='animate-inspector-shadow absolute bottom-2 left-[58%] h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/55 blur-[2px]'
        />
      </div>

      {/* Mensaje y regreso al inicio */}
      <div className='z-10 px-6 text-center'>
        <h2 className='mb-4 text-2xl font-bold uppercase tracking-widest text-blue-400 md:text-4xl'>
          ¡Te has perdido!
        </h2>
        <p className='mx-auto mb-8 max-w-sm font-mono text-sm text-slate-400'>
          La inspectora está buscando esta página, pero parece que no existe.
        </p>

        <Link
          to='/'
          className='inline-flex items-center gap-2 rounded-none border-b-4 border-blue-800 bg-blue-600 px-8 py-4 font-bold uppercase tracking-tighter text-white transition-all hover:bg-blue-500 active:translate-y-1 active:border-b-0'
        >
          <span aria-hidden='true' className='text-xl'>
            ⟵
          </span>
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound
