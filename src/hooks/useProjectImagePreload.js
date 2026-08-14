import { useEffect } from 'react'
import { getProjectGallerySrcSet } from '../utils/getProjectImageSrcSet'
import { GALLERY_SIZES } from '../utils/imageSizes'

const DELAY_BETWEEN_IMAGES_MS = 100

// Pausa la ejecución por "ms" milisegundos.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Descarga una imagen en segundo plano (sin mostrarla) para que
// quede guardada en la caché del navegador.
const preloadImage = (imageUrl) =>
  new Promise((resolve) => {
    const image = new Image()
    image.srcset = getProjectGallerySrcSet(imageUrl) ?? ''
    image.sizes = GALLERY_SIZES
    image.src = imageUrl
    image.onload = resolve
    image.onerror = resolve // un error no debe frenar la cola
  })

// Arma la lista de imágenes de galería, sin repetir las que ya son portada.
const getGalleryQueue = (projects) => {
  const thumbnails = new Set(projects.map((project) => project.thumbnail))
  const allGalleryImages = projects.flatMap((project) => project.images ?? [])
  const uniqueImages = new Set(
    allGalleryImages.filter((url) => !thumbnails.has(url))
  )
  return [...uniqueImages]
}

const useProjectImagePreload = (projects) => {
  useEffect(() => {
    // Permite detener el recorrido si Home se desmonta durante la precarga.
    let isCancelled = false
    const galleryQueue = getGalleryQueue(projects)

    // Recorre la cola en orden, dejando una pausa breve entre descargas.
    const preloadQueueSequentially = async () => {
      for (const imageUrl of galleryQueue) {
        if (isCancelled) return
        await preloadImage(imageUrl)
        if (isCancelled) return
        await wait(DELAY_BETWEEN_IMAGES_MS)
      }
    }

    // Espera que la página inicial termine antes de solicitar las galerías.
    const startPreloading = () => {
      preloadQueueSequentially()
    }

    if (document.readyState === 'complete') {
      startPreloading()
    } else {
      window.addEventListener('load', startPreloading, { once: true })
    }

    return () => {
      isCancelled = true
      window.removeEventListener('load', startPreloading)
    }
  }, [projects])
}

export default useProjectImagePreload
