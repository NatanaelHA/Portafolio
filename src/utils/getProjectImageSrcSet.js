const THUMBNAIL_WIDTHS = [480, 800, 1200]
const GALLERY_WIDTHS = [640, 1200, 1800]
const IMAGE_QUALITY = 75

// Construye una URL que Netlify transforma y comprime bajo demanda.
const createNetlifyImageUrl = (imageUrl, width) => {
  const params = new URLSearchParams({
    url: imageUrl,
    w: String(width),
    q: String(IMAGE_QUALITY),
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
