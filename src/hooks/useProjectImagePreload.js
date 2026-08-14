import { useCallback, useEffect, useState } from 'react'
import { getProjectGallerySrcSet } from '../utils/getProjectImageSrcSet'

const GALLERY_SIZES = '(max-width: 767px) calc(100vw - 80px), 1088px'

const useProjectImagePreload = (projects) => {
  // Guarda las rutas de las portadas que ya finalizaron su carga.
  const [settledThumbnails, setSettledThumbnails] = useState(() => new Set())

  // ProjectCard llama a esta función al cargar o fallar su portada.
  const registerSettledThumbnail = useCallback((thumbnail) => {
    setSettledThumbnails((currentThumbnails) => {
      // El Set impide contar dos veces una misma portada.
      if (currentThumbnails.has(thumbnail)) return currentThumbnails

      const nextThumbnails = new Set(currentThumbnails)
      nextThumbnails.add(thumbnail)
      return nextThumbnails
    })
  }, [])

  // La segunda etapa espera hasta que todos los cards hayan respondido.
  const areThumbnailsReady = settledThumbnails.size === projects.length

  useEffect(() => {
    if (!areThumbnailsReady) return undefined

    // Crea la cola con todas las galerías y elimina portadas o rutas repetidas.
    const thumbnailUrls = new Set(projects.map((project) => project.thumbnail))
    const galleryUrls = [
      ...new Set(
        projects
          .flatMap((project) => project.images ?? [])
          .filter((imageUrl) => !thumbnailUrls.has(imageUrl)),
      ),
    ]

    let currentIndex = 0
    let preloadTimer
    let isCancelled = false

    // Procesa una sola imagen por turno para no competir con la página inicial.
    const preloadNextImage = () => {
      // Detiene el recorrido al desmontar el componente o terminar la cola.
      if (isCancelled || currentIndex >= galleryUrls.length) return

      const imageUrl = galleryUrls[currentIndex]
      currentIndex += 1

      // Esta imagen no se renderiza: fuerza su descarga y almacenamiento en caché.
      const image = new Image()
      image.srcset = getProjectGallerySrcSet(imageUrl) ?? ''
      image.sizes = GALLERY_SIZES
      image.src = imageUrl

      // Éxito y error continúan la cola para que una imagen no bloquee las demás.
      const continuePreloading = () => {
        if (!isCancelled) preloadTimer = window.setTimeout(preloadNextImage, 100)
      }

      image.onload = continuePreloading
      image.onerror = continuePreloading
    }

    preloadNextImage()

    // Cancela la siguiente iteración si Home deja de estar montado.
    return () => {
      isCancelled = true
      window.clearTimeout(preloadTimer)
    }
  }, [areThumbnailsReady, projects])

  // Home entrega esta función a cada ProjectCard.
  return registerSettledThumbnail
}

export default useProjectImagePreload
