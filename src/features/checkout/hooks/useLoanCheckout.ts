"use client";

import { postLoan } from "@/features/checkout/api";
import { cartQueryKeys } from "@/features/checkout/queryKeys";
import { PostLoansFromCartPayload } from "@/features/checkout/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLoanCheckout = () => {
  const qc = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: PostLoansFromCartPayload) => postLoan(payload),

    onSuccess: async (res) => {
      const loans = res.loans ?? [];
      const failed = res.failed ?? [];

      if (loans.length > 0) {
        const dueAt = loans[0].dueAt;
        const returnByMessage = loans[0].returnByMessage;

        await qc.invalidateQueries({ queryKey: cartQueryKeys.all });

        router.replace(
          `/success?due=${encodeURIComponent(dueAt)}&msg=${encodeURIComponent(
            returnByMessage
          )}`
        );
        return;
      }

      const lines: string[] = [];
      if (failed.length > 0) {
        lines.push("");
        lines.push("Reasons:");
        for (const f of failed) {
          lines.push(`• ${f.reason}`);
        }
      }

      toast.error("Borrow failed", {
        description: lines.join("\n"),
      });
    },

    onError: () => {
      toast.error("Borrow failed", {
        description: "Something went wrong. Please try again.",
      });
    },
  });
};