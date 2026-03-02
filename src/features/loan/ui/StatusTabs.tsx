import * as React from "react";
import { Button } from "@/components/ui/button";
import type { LoanStatusTab } from "../types";
import { TABS } from "@/features/loan/constants";

type StatusTabsProps = {
  value: LoanStatusTab;
  onChange: (value: LoanStatusTab) => void;
  className?: string;
};


export const StatusTabs: React.FC<StatusTabsProps> = ({ value, onChange, className }) => {
  return (
    <div className={["flex flex-wrap gap-2", className ?? ""].join(" ")}>
      {TABS.map((t) => {
        const isActive = t.value === value;

        return (
          <Button
            key={t.value}
            type="button"
            variant={isActive ? "default" : "outline"}
            size="sm"
            onClick={() => onChange(t.value)}
            className={[
              "h-8 rounded-full px-4 text-sm",
              isActive
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-background text-foreground hover:bg-muted",
            ].join(" ")}
          >
            {t.label}
          </Button>
        );
      })}
    </div>
  );
};