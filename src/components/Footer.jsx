import { useEffect, useRef, useState } from 'react'
import useContactHighlightStore from '../store/useContactHighlightStore'

const Footer = () => {
  const requestId = useContactHighlightStore((state) => state.requestId)
  const [activeRequest, setActiveRequest] = useState(0)
  const footerRef = useRef(null)

  // Lleva al contacto y activa su resaltado
  useEffect(() => {
    if (requestId === 0) return undefined

    footerRef.current?.scrollIntoView({ behavior: 'smooth' })

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
      className='border-t border-slate-200 bg-slate-50 py-12'
    >
      <div className='mx-auto max-w-6xl px-6'>
        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
          {/* Identidad */}
          <div className='text-center md:text-left'>
            <p className='text-2xl font-black tracking-tighter text-slate-800'>
              NATANAEL<span className='text-3xl text-blue-600'>.</span>
            </p>
            <p className='mt-1 text-sm text-slate-500'>
              Full Stack Developer · AWS & GCP
            </p>
          </div>

          {/* Datos de contacto */}
          <div
            key={activeRequest}
            className='flex flex-col items-center gap-2 text-sm text-slate-600 md:items-start'
          >
            <a
              href='mailto:natanaelhuenullan31@gmail.com'
              className={`contact-item flex items-center gap-2 transition-colors hover:text-blue-600 ${contactAnimation}`}
            >
              <span className='font-bold text-slate-800'>Email:</span>
              natanaelhuenullan31@gmail.com
            </a>
            <a
              href='https://wa.me/56937245527'
              target='_blank'
              rel='noreferrer'
              className={`contact-item flex items-center gap-2 transition-colors hover:text-blue-600 ${contactAnimation}`}
            >
              <span className='font-bold text-slate-800'>Celular:</span>
              +56 9 3724 5527
            </a>
            <a
              href='https://www.linkedin.com/in/natanael-huenullan-acevedo-3140b0239'
              target='_blank'
              rel='noreferrer'
              className={`contact-item flex items-center gap-2 transition-colors hover:text-blue-600 ${contactAnimation}`}
            >
              <span className='font-bold text-slate-800'>LinkedIn:</span>
              natanael-huenullan-acevedo
            </a>
            <a
              href='https://github.com/NatanaelHA'
              target='_blank'
              rel='noreferrer'
              className={`contact-item flex items-center gap-2 transition-colors hover:text-blue-600 ${contactAnimation}`}
            >
              <span className='font-bold text-slate-800'>GitHub:</span>
              NatanaelHA
            </a>
            <p className='flex items-center gap-2'>
              <span className='font-bold text-slate-800'>Ubicación:</span>
              Colina, Región Metropolitana
            </p>
          </div>

          {/* Derechos */}
          <div className='text-center md:text-right'>
            <p className='mt-2 text-sm text-slate-500'>
              &copy; {new Date().getFullYear()} - Natanael Huenullan
            </p>
          </div>
        </div>

        <div className='mt-10 flex justify-center'>
          <div className='h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
