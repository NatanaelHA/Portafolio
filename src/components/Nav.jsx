import { NavLink, Link } from 'react-router'

const Nav = () => {
  // Estilos compartidos por los enlaces
  const linkStyles =
    'rounded-lg px-2 py-2 text-[11px] font-bold transition-colors sm:p-0 sm:text-sm md:text-base'

  // Resalta la ruta activa
  const activeControl = ({ isActive }) =>
    isActive
      ? `${linkStyles} bg-blue-50 text-blue-600 sm:bg-transparent`
      : `${linkStyles} text-slate-500 hover:bg-slate-50 hover:text-blue-600 sm:hover:bg-transparent`

  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between border-b border-slate-100 bg-white/95 px-3 py-3 backdrop-blur-sm sm:bg-white sm:px-8 sm:py-4'>
      {/* Logo */}
      <Link to='/' className='group flex items-center gap-2 shrink-0'>
        <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-lg font-black text-white transition-colors group-hover:bg-slate-900 sm:h-9 sm:w-9 sm:rounded-xl sm:text-xl md:h-10 md:w-10'>
          N
        </div>
        <div className='hidden sm:flex flex-col leading-none'>
          <span className='font-black text-slate-900 text-lg tracking-tighter uppercase'>
            Natanael<span className='text-blue-600'>.</span>
          </span>
          <span className='text-[10px] text-slate-400 font-bold uppercase tracking-widest'>
            Full Stack · Cloud
          </span>
        </div>
      </Link>

      {/* Navegación  */}
      <div className='flex items-center gap-1 sm:gap-6 md:gap-8'>
        <NavLink to='/' className={activeControl}>
          Inicio
        </NavLink>

        <NavLink to='/about' className={activeControl}>
          Trayectoria
        </NavLink>

        <NavLink
          to='/profile'
          className={({ isActive }) =>
            `whitespace-nowrap rounded-lg px-2.5 py-2 text-[10px] font-bold shadow-md transition-all active:scale-95 sm:px-4 sm:text-xs md:text-sm ${
              isActive
                ? 'bg-blue-600 text-white shadow-blue-200'
                : 'bg-slate-900 text-white hover:bg-blue-600'
            }`
          }
        >
          Sobre mí
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
