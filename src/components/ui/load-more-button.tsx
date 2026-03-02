import * as React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type Props = {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  label?: string;
};

export const LoadMoreButton: React.FC<Props> = ({
  onClick,
  disabled,
  loading,
  className,
  label = "Load More",
}) => {
  return (
    <div className={["flex justify-center", className ?? ""].join(" ")}>
      <Button
        type="button"
        variant="outline"
        className="h-10 rounded-full px-10"
        onClick={onClick}
        disabled={disabled || loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Loading
          </>
        ) : (
          label
        )}
      </Button>
    </div>
  );
};