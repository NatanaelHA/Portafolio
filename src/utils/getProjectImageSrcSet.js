const THUMBNAIL_WIDTHS = [480, 800, 1200]
const GALLERY_WIDTHS = [640, 1200, 1800]
const IMAGE_QUALITY = 75

const createNetlifyImageUrl = (imageUrl, width) => {
  const params = new URLSearchParams({
    url: imageUrl,
    w: String(width),
    q: String(IMAGE_QUALITY),
  })

  return `/.netlify/images?${params.toString()}`
}

const createImageSrcSet = (imageUrl, widths) => {
  if (import.meta.env.DEV) return undefined

  return widths.map(
    (width) => `${createNetlifyImageUrl(imageUrl, width)} ${width}w`
  ).join(', ')
}

export const getProjectThumbnailSrcSet = (imageUrl) =>
  createImageSrcSet(imageUrl, THUMBNAIL_WIDTHS)

export const getProjectGallerySrcSet = (imageUrl) =>
  createImageSrcSet(imageUrl, GALLERY_WIDTHS)
