import { useMutation, useQueryClient } from "@tanstack/react-query";
import { booksQueryKeys } from "@/features/books/queryKeys"; // kalau kamu udah punya factory
import { toast } from "sonner";
import { BookUpsertValues } from "@/features/books/types";
import { updateBook } from "@/features/books/api";

export const useUpdateBook = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (vars: { id: number; payload: BookUpsertValues }) => updateBook(vars),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: booksQueryKeys.all });

      toast.success("Book updated");
    },
    onError: () => {
      toast.error("Failed to update book");
    },
  });
};