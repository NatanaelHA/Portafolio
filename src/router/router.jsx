import { createBrowserRouter } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/', // Ruta base
        element: <Home />,
      },
      {
        path: 'about', // Se carga cuando entras a /about
        element: <About />,
      },
      {
        path: 'profile', // Se carga cuando entras a /profile
        element: <Profile />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
