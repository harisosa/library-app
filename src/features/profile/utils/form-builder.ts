import { UpdateMyProfileInput } from "@/features/profile/types";

export const buildMeFormData = (input: UpdateMyProfileInput): FormData => {
  const fd = new FormData();

  if (typeof input.name === "string") fd.append("name", input.name);
  if (typeof input.phone === "string") fd.append("phone", input.phone);

  // kirim file hanya kalau ada File (jangan append null/undefined)
  if (input.profilePhoto instanceof File) {
    fd.append("profilePhoto", input.profilePhoto);
  }

  return fd;
};