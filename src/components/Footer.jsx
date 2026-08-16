import { useEffect, useRef, useState } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import useContactHighlightStore from '../store/useContactHighlightStore'

const Footer = () => {
  const requestId = useContactHighlightStore((state) => state.requestId)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [activeRequest, setActiveRequest] = useState(0)
  const footerRef = useRef(null)
  // Conserva la preferencia actual sin reiniciar el efecto por cada cambio.
  const reducedMotionRef = useRef(prefersReducedMotion)

  useEffect(() => {
    reducedMotionRef.current = prefersReducedMotion
  }, [prefersReducedMotion])

  // Lleva al contacto y retrasa el resaltado hasta que el scroll haya comenzado.
  useEffect(() => {
    if (requestId === 0) return undefined

    const scrollBehavior = reducedMotionRef.current ? 'auto' : 'smooth'

    footerRef.current?.scrollIntoView({ behavior: scrollBehavior })

    const highlightTimer = window.setTimeout(() => {
      setActiveRequest(requestId)
    }, 250)

    return () => window.clearTimeout(highlightTimer)
  }, [requestId])

  const contactAnimation = activeRequest > 0 ? 'animate-highlight' : ''

  return (
    <footer
      ref={footerRef}
      id='footer'
      className='border-t border-blue-900 bg-slate-950 py-12'
    >
      <div className='mx-auto max-w-6xl px-6'>
        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
          {/* Identidad */}
          <div className='text-center md:text-left'>
            <p className='text-2xl font-black tracking-tighter text-white'>
              NATANAEL<span className='text-3xl text-blue-400'>.</span>
            </p>
            <p className='mt-1 text-sm text-slate-300'>
              Full Stack Developer · AWS & GCP
            </p>
          </div>

          {/* Datos de contacto */}
          {/* Una nueva key remonta el bloque y permite repetir la animación CSS. */}
          <div
            key={activeRequest}
            className={`flex flex-col items-center gap-2 text-sm text-slate-300 md:items-start ${contactAnimation}`}
          >
            <a
              href='mailto:natanaelhuenullan31@gmail.com'
              className='flex items-center gap-2 transition-colors hover:text-blue-300'
            >
              <span className='font-bold text-slate-100'>Email:</span>
              natanaelhuenullan31@gmail.com
            </a>
            <a
              href='https://wa.me/56937245527'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 transition-colors hover:text-blue-300'
            >
              <span className='font-bold text-slate-100'>Celular:</span>
              +56 9 3724 5527
            </a>
            <a
              href='https://www.linkedin.com/in/natanael-huenullan-acevedo-3140b0239'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 transition-colors hover:text-blue-300'
            >
              <span className='font-bold text-slate-100'>LinkedIn:</span>
              natanael-huenullan-acevedo
            </a>
            <a
              href='https://github.com/NatanaelHA'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 transition-colors hover:text-blue-300'
            >
              <span className='font-bold text-slate-100'>GitHub:</span>
              NatanaelHA
            </a>
            <p className='flex items-center gap-2'>
              <span className='font-bold text-slate-100'>Ubicación:</span>
              Colina, Región Metropolitana
            </p>
          </div>

          {/* Derechos */}
          <div className='text-center md:text-right'>
            <p className='mt-2 text-sm text-slate-400'>
              &copy; {new Date().getFullYear()} - Natanael Huenullan
            </p>
          </div>
        </div>

        <div className='mt-10 flex justify-center'>
          <div className='h-1 w-20 rounded-full bg-linear-to-r from-blue-500 to-cyan-300' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
