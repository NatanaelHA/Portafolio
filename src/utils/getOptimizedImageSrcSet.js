const IMAGE_WIDTHS = [480, 800, 1200]
const IMAGE_QUALITY = 75

const createNetlifyImageUrl = (imageUrl, width) => {
  const params = new URLSearchParams({
    url: imageUrl,
    w: String(width),
    q: String(IMAGE_QUALITY),
  })

  return `/.netlify/images?${params.toString()}`
}

const getOptimizedImageSrcSet = (imageUrl) => {
  if (import.meta.env.DEV) return undefined

  return IMAGE_WIDTHS.map(
    (width) => `${createNetlifyImageUrl(imageUrl, width)} ${width}w`
  ).join(', ')
}

export default getOptimizedImageSrcSet