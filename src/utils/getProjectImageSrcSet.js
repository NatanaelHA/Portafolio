const THUMBNAIL_WIDTHS = [480, 800, 1200]
const GALLERY_WIDTHS = [640, 1200, 1800]
const IMAGE_QUALITY = 75
const EXPANDED_IMAGE_WIDTH = 2400
const EXPANDED_IMAGE_QUALITY = 90

// Construye una URL que Netlify transforma y comprime bajo demanda.
const createNetlifyImageUrl = (
  imageUrl,
  width,
  quality = IMAGE_QUALITY,
) => {
  const params = new URLSearchParams({
    url: imageUrl,
    w: String(width),
    q: String(quality),
  })

  return `/.netlify/images?${params.toString()}`
}

const createImageSrcSet = (imageUrl, widths) => {
  // Vite sirve los archivos originales localmente; Netlify Images solo existe desplegado.
  if (import.meta.env.DEV) return undefined

  return widths.map(
    (width) => `${createNetlifyImageUrl(imageUrl, width)} ${width}w`
  ).join(', ')
}

export const getProjectThumbnailSrcSet = (imageUrl) =>
  createImageSrcSet(imageUrl, THUMBNAIL_WIDTHS)

// La galería ofrece resoluciones mayores porque ocupa más espacio que las portadas.
export const getProjectGallerySrcSet = (imageUrl) =>
  createImageSrcSet(imageUrl, GALLERY_WIDTHS)

// El visor solicita una única versión de mayor calidad solo cuando se abre.
export const getProjectExpandedImageUrl = (imageUrl) => {
  if (import.meta.env.DEV) return imageUrl

  return createNetlifyImageUrl(
    imageUrl,
    EXPANDED_IMAGE_WIDTH,
    EXPANDED_IMAGE_QUALITY,
  )
}
