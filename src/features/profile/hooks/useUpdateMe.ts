import { useMutation, useQueryClient } from "@tanstack/react-query";
import { profileQueryKeys } from "../queryKeys";
import type { GetMeData, UpdateMyProfileInput } from "../types";
import { patchMe } from "@/features/profile/api";
import { toast } from "sonner";

export const useUpdateMe = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (input: UpdateMyProfileInput) => patchMe(input),

    onMutate: async (input) => {
      await qc.cancelQueries({ queryKey: profileQueryKeys.me() });

      const prev = qc.getQueryData<GetMeData>(profileQueryKeys.me());
      if (prev) {
        qc.setQueryData<GetMeData>(profileQueryKeys.me(), {
          ...prev,
          profile: {
            ...prev.profile,
            name: typeof input.name === "string" ? input.name : prev.profile.name,
            phone: typeof input.phone === "string" ? input.phone : prev.profile.phone,
          },
        });
      }

      return { prev };
    },

    onError: (_err, _input, ctx) => {
      toast.success("Update Profile Failed!")
      if (ctx?.prev) qc.setQueryData(profileQueryKeys.me(), ctx.prev);
    },

    onSuccess: (patched) => {

      toast.success("Update Profile Success")
      qc.setQueryData<GetMeData>(profileQueryKeys.me(), (prev) => {
        if (!prev) return prev;
        return { ...prev, profile: patched.profile };
      });

      qc.invalidateQueries({ queryKey: profileQueryKeys.me() });
    },
  });
};