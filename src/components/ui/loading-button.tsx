"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LoadingButtonProps = React.ComponentProps<typeof Button> & {
  loading?: boolean;
  loadingText?: string;
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  loadingText,
  disabled,
  children,
  className,
  ...props
}) => {
  const isDisabled = Boolean(disabled || loading);

  return (
    <Button
      {...props}
      disabled={isDisabled}
      className={cn(className)}
      aria-busy={loading ? true : undefined}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText ?? children}
        </>
      ) : (
        children
      )}
    </Button>
  );
};