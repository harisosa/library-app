import { api } from "@/lib/http/api";
import type {
  GetMeData,
  PatchMeData,
  UpdateMyProfileInput,
} from "../types";
import { buildMeFormData } from "@/features/profile/utils";

export const getMe = async (): Promise<GetMeData> => {
  return await api<GetMeData>({
    method: "GET",
    url: "/me",
  });
};

export const patchMe = async (
  input: UpdateMyProfileInput,
): Promise<PatchMeData> => {
  const fd = buildMeFormData(input);
  return await api<PatchMeData>({
    method: "PATCH",
    url: "/me",
    data: fd,
  });
};
