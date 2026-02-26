"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { selectAccessToken } from "@/features/auth/store/selectors";

export default function Page() {
  const router = useRouter();
  const accessToken = useAppSelector(selectAccessToken);

  useEffect(() => {
    router.replace(accessToken ? "/books" : "/login");
  }, [accessToken, router]);
  return <main />;
}