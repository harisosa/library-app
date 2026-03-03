export const MAX_COVER_MB = 5;
export const MAX_COVER_BYTES = MAX_COVER_MB * 1024 * 1024;

export const isValidCover = (file: File) => {
  const okType = file.type === "image/png" || file.type === "image/jpeg";
  const okSize = file.size <= MAX_COVER_BYTES;
  return { okType, okSize };
};