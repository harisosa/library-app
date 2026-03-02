import * as React from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ReviewStars } from "./ReviewStars";

import { formatDateTime } from "@/lib/utils";
import { Review } from "@/features/review/types";

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm">
      <div className="flex gap-3">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/images/profile.svg" alt={review.user.name} />
        </Avatar>

        <div className="min-w-0">
          <div className="truncate text-lg font-bold  text-neutral-950">
            {review.user?.name ?? "—"}
          </div>
          <div className="mt-1 text-md font-medium  text-neutral-950">
            {formatDateTime(review.createdAt)}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <ReviewStars value={review.star} />
      </div>

      <p className="mt-4 text-md font-semibold leading-6 text-neutral-950">
        {review.comment}
      </p>
    </div>
  );
};