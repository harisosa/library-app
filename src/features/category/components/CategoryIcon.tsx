

const slugify = (name: string) =>
  name
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "")

const aliases: Record<string, string> = {
  nonfiction: "non-fiction",
  "science-technology": "science",
  "science-and-technology": "science",
}

export const DEFAULT_CATEGORY_ICON_SRC = "/icons/education.svg"

export const getCategoryIconSrc = (name: string) => {
  const slug = slugify(name)
  const resolved = aliases[slug] ?? slug
  return `/icons/${resolved}.svg`
}