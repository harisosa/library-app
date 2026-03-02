import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

type Props = {
  onRetry: () => void;
};

export const CartError: React.FC<Props> = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
      <AlertTriangle className="h-10 w-10 text-destructive" />

      <div className="text-lg font-semibold">
        Failed to load cart
      </div>

      <div className="text-sm text-muted-foreground">
        Something went wrong while fetching your cart items.
      </div>

      <Button onClick={onRetry}>
        Retry
      </Button>
    </div>
  );
};