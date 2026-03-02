import * as React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  total: number;
  onBorrow?: () => void;
  disabled?: boolean;
};

export const LoanSummary: React.FC<Props> = ({ total, onBorrow, disabled }) => {
  return (
    <div className="w-full">
      <div className="hidden lg:block">
        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="text-base font-semibold">Loan Summary</div>

          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <span>Total Book</span>
            <span className="font-medium text-foreground">{total} items</span>
          </div>

          <Button className="mt-5 w-full" disabled={disabled || total === 0} onClick={onBorrow}>
            Borrow Book
          </Button>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="fixed inset-x-0 bottom-0 z-50">
          <div
            className="
              border-t bg-background/95 backdrop-blur
              shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.25)]
              px-4 pt-4 pb-[calc(env(safe-area-inset-bottom)+16px)]
            "
          >
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="text-sm text-muted-foreground">Total Book</div>
                <div className="mt-1 text-sm font-semibold">{total} items</div>
              </div>

              <Button
                className="h-11 shrink-0 px-8"
                disabled={disabled || total === 0}
                onClick={onBorrow}
              >
                Borrow Book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};