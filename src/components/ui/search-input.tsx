"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
};

export const SearchInput = React.forwardRef<HTMLInputElement, Props>(
  ({ className, containerClassName, ...inputProps }, ref) => {
    return (
      <div
        className={cn(
          "flex h-11 w-full items-center gap-2 rounded-full border border-neutral-300",
          "px-4",
          "focus-within:ring-2 focus-within:ring-primary/20",
          "transition-colors",
          containerClassName
        )}
      >
        <Search className="h-5 w-5 text-muted-foreground" />

        <Input
          ref={ref}
          type="text"
          className={cn(
            "border-0 bg-transparent shadow-none text-sm font-medium",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
            "placeholder:text-muted-foreground",
            "p-0",
            className
          )}
          {...inputProps}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";