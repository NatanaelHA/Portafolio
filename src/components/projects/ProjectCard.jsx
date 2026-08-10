import { useRef } from 'react'
import useProjectModalStore from '../../store/useProjectModalStore'
import { getProjectTheme } from './projectThemes'

const ProjectCard = ({ project }) => {
  const cardBounds = useRef(null)
  const openProject = useProjectModalStore((state) => state.openProject)
  const theme = getProjectTheme(project.variant).card

  const registerCardBounds = (event) => {
    cardBounds.current = event.currentTarget.getBoundingClientRect()
  }

  const updateCardEffect = (event) => {
    const card = event.currentTarget
    const bounds = cardBounds.current || card.getBoundingClientRect()

    const pointerX = event.clientX - bounds.left
    const pointerY = event.clientY - bounds.top

    card.style.setProperty('--mouse-x', `${pointerX}px`)
    card.style.setProperty('--mouse-y', `${pointerY}px`)

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (event.pointerType === 'touch' || reducedMotion) return

    const rotateY = (pointerX / bounds.width - 0.5) * 6
    const rotateX = (pointerY / bounds.height - 0.5) * -6

    card.style.transform = `
    perspective(900px)
    translateY(0)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `
  }

  const resetCardEffect = (event) => {
    event.currentTarget.style.transform = `
    perspective(900px)
    translateY(0)
    rotateX(0deg)
    rotateY(0deg)
  `

    cardBounds.current = null
  }

  return (
    <article
      onPointerEnter={registerCardBounds}
      onPointerMove={updateCardEffect}
      onPointerLeave={resetCardEffect}
      className={`
        project-card group relative isolate flex h-full flex-col overflow-hidden
        rounded-3xl border p-6 shadow-sm
        transition-[transform,box-shadow] duration-100 ease-out
        transform-gpu will-change-transform hover:shadow-2xl
        ${theme.container}
      `}
    >
      {/* Brillo que sigue la posición del cursor */}
      <div
        aria-hidden='true'
        style={{
          background: `
      radial-gradient(
        480px circle at
        var(--mouse-x, 50%)
        var(--mouse-y, 50%),
        ${theme.glow},
        transparent 55%
      )
    `,
        }}
        className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
      />

      <header className='mb-4'>
        <span
          className={`
            inline-flex rounded-full border px-3 py-1
            text-[10px] font-bold uppercase tracking-[0.16em]
            ${theme.badge}
          `}
        >
          {project.category}
        </span>

        <h3 className={`mt-4 text-2xl font-black ${theme.title}`}>
          {project.title}
        </h3>
      </header>

      <div className='mb-5 aspect-video overflow-hidden rounded-2xl bg-slate-900/5'>
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`Vista previa de ${project.title}`}
            className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
          />
        ) : (
          <div className='flex h-full flex-col items-center justify-center gap-3 p-6 text-center'>
            <span className='text-4xl' aria-hidden='true'>
              ☁
            </span>

            <span className='text-xs font-bold uppercase tracking-[0.18em] opacity-70'>
              Arquitectura serverless
            </span>
          </div>
        )}
      </div>

      <p className={`mb-6 grow text-sm leading-relaxed ${theme.description}`}>
        {project.desc}
      </p>

      <p className='mb-5 text-xs font-semibold leading-relaxed opacity-70'>
        {project.stack}
      </p>

      <div className='flex flex-col gap-3 sm:flex-row'>
        <button
          type='button'
          onClick={() => openProject(project)}
          className={`
            flex grow items-center justify-center rounded-xl
            px-5 py-3 text-sm font-bold transition-all
            active:scale-95 ${theme.button}
          `}
        >
          Ver proyecto
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noreferrer'
            aria-label={`Abrir ${project.title} en una pestaña nueva`}
            className='flex items-center justify-center rounded-xl border border-current/15 px-5 py-3 text-sm font-bold transition-colors hover:bg-white/10'
          >
            Abrir <span aria-hidden='true'>↗</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
