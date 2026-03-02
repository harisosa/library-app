import * as React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description?: string;
  onRetry?: () => void;
};

export const BorrowedListError: React.FC<Props> = ({ title, description, onRetry }) => {
  return (
    <div className="rounded-2xl border bg-background p-6">
      <div className="text-base font-semibold">{title}</div>
      {description ? (
        <div className="mt-1 text-sm text-muted-foreground">{description}</div>
      ) : null}

      {onRetry ? (
        <div className="mt-4">
          <Button type="button" onClick={onRetry}>
            Retry
          </Button>
        </div>
      ) : null}
    </div>
  );
};