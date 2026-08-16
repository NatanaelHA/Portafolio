import { useState } from 'react'
import useProjectCardEffect from '../../hooks/useProjectCardEffect'
import useProjectModalStore from '../../store/useProjectModalStore'
import { getProjectThumbnailSrcSet } from '../../utils/getProjectImageSrcSet'
import { THUMBNAIL_SIZES } from '../../utils/imageSizes'
import { getProjectTheme } from './projectThemes'

const ProjectCard = ({ project }) => {
  // Estado y acciones
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false)
  const openProject = useProjectModalStore((state) => state.openProject)

  // Configuración visual
  const theme = getProjectTheme(project.variant).card
  const thumbnailSrcSet = getProjectThumbnailSrcSet(project.thumbnail)

  // Interacciones del card
  const { registerCardBounds, updateCardEffect, resetCardEffect } =
    useProjectCardEffect()

  const handleThumbnailError = (event) => {
    // Si Netlify Images falla, reintenta la portada original sin `srcSet`.
    event.currentTarget.onerror = null
    event.currentTarget.removeAttribute('srcset')
    event.currentTarget.src = project.thumbnail
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

      {/* Identidad del proyecto */}
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

      {/* Vista previa */}
      <div className='relative mb-5 aspect-video overflow-hidden rounded-2xl bg-slate-900/5'>
        {!isThumbnailLoaded && (
          <div
            aria-hidden='true'
            className='absolute inset-0 animate-pulse bg-slate-300 motion-reduce:animate-none'
          />
        )}

        <img
          src={project.thumbnail}
          srcSet={thumbnailSrcSet}
          sizes={THUMBNAIL_SIZES}
          alt={`Vista previa de ${project.title}`}
          loading='eager'
          fetchPriority='high'
          decoding='async'
          onLoad={() => setIsThumbnailLoaded(true)}
          onError={handleThumbnailError}
          className={`h-full w-full object-cover transition-[opacity,transform] duration-700 group-hover:scale-105 ${
            isThumbnailLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <p className={`mb-6 grow text-sm leading-relaxed ${theme.description}`}>
        {project.desc}
      </p>

      <p className='mb-5 text-xs font-semibold leading-relaxed opacity-70'>
        {project.architecture.join(' · ')}
      </p>

      {/* Acciones */}
      <div className='flex'>
        <button
          type='button'
          onClick={() => openProject(project)}
          className={`
            flex grow items-center justify-center rounded-xl
            px-5 py-3 text-sm font-bold transition-[background-color,transform]
            active:scale-95 ${theme.button}
          `}
        >
          Ver proyecto
        </button>
      </div>
    </article>
  )
}

export default ProjectCard
