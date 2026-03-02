import * as React from "react";
import { Star } from "lucide-react";

export const ReviewStars: React.FC<{ value: number }> = ({ value }) => {
  const v = Math.max(0, Math.min(5, Math.round(value)));

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < v;
        return (
          <Star
            key={i}
            className={`h-6 w-6 ${filled ? "fill-current" : ""} text-amber-500`}
          />
        );
      })}
    </div>
  );
};