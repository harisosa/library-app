
const isHttpUrl = (v: string) => /^https?:\/\//i.test(v)
const isDataUrl = (v: string) => /^data:image\/[a-zA-Z+.-]+;base64,/i.test(v)
const isBlobUrl = (v: string) => /^blob:/i.test(v)
const isAbsolutePath = (v: string) => v.startsWith("/") // e.g. /images/cover.png

export const normalizeCoverImageSrc = (coverImage?: string | null) => {
  if (!coverImage) return null
  const raw = coverImage.trim()
  if (!raw) return null

  if (isHttpUrl(raw)) return raw
  if (isDataUrl(raw)) return raw
  if (isBlobUrl(raw)) return raw
  if (isAbsolutePath(raw)) return raw

  // assume raw base64 (no prefix)
  return `data:image/jpeg;base64,${raw}`
}