import { useQuery } from "@tanstack/react-query";

import { profileQueryKeys } from "../queryKeys";
import { getMe } from "@/features/profile/api";
import { useAppSelector } from "@/store/hooks";
import { selectAccessToken } from "@/features/auth/store";

export const useMe = () => {
  const token = useAppSelector(selectAccessToken);

  return useQuery({
    queryKey: profileQueryKeys.me(),
    queryFn: getMe,
    enabled: Boolean(token),
    staleTime: 5 * 60 * 1000,
  });
};