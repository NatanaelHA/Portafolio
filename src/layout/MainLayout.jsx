import Nav from '../components/Nav'
import { Outlet, useLocation } from 'react-router'
import Footer from '../components/Footer'

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <main className='grow container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col'>
        
        <div key={location.pathname} className="animate-fade-in grow flex flex-col">
          <Outlet />
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default MainLayout