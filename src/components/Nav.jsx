import { NavLink, Link } from 'react-router'

const Nav = () => {
  // Estilos compartidos por los enlaces
  const linkStyles =
    'font-bold text-xs sm:text-sm md:text-base transition-colors'

  // Resalta la ruta activa
  const activeControl = ({ isActive }) =>
    isActive
      ? `${linkStyles} text-blue-600`
      : `${linkStyles} text-slate-500 hover:text-blue-600`

  return (
    <nav className='flex items-center justify-between px-4 sm:px-8 py-4 bg-white border-b border-slate-100 sticky top-0 z-50'>
      {/* Logo */}
      <Link to='/' className='group flex items-center gap-2 shrink-0'>
        <div className='bg-blue-600 text-white w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl font-black text-xl group-hover:bg-slate-900 transition-colors'>
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
      <div className='flex items-center gap-3 sm:gap-6 md:gap-8'>
        <NavLink to='/' className={activeControl}>
          Inicio
        </NavLink>

        <NavLink to='/about' className={activeControl}>
          Trayectoria
        </NavLink>

        <NavLink
          to='/profile'
          className={({ isActive }) =>
            `px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-bold transition-all shadow-md active:scale-95 whitespace-nowrap ${
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
