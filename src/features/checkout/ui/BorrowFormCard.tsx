"use client";

import React from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type Props = {
  borrowDate: Dayjs;
  onBorrowDateChange: (next: Dayjs) => void;
  days: 3 | 5 | 10;
  onDaysChange: (next: 3 | 5 | 10) => void;
  dueDateLabel: string;
  agreeDueDate: boolean;
  onAgreeDueDateChange: (next: boolean) => void;
  agreePolicy: boolean;
  onAgreePolicyChange: (next: boolean) => void;
  confirmDisabled: boolean;
  confirmLoading: boolean;
  onConfirm: () => void;
};

export const BorrowFormCard: React.FC<Props> = ({
  borrowDate,
  onBorrowDateChange,
  days,
  onDaysChange,
  dueDateLabel,
  agreeDueDate,
  onAgreeDueDateChange,
  agreePolicy,
  onAgreePolicyChange,
  confirmDisabled,
  confirmLoading,
  onConfirm,
}) => {
  return (
    <Card className="rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold">Complete Your Borrow Request</h3>

      <div className="mt-6 space-y-6">

        <div className="space-y-2">
          <div className="text-sm font-medium">Borrow Date</div>

          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm"
                aria-label="Pick borrow date"
              >
                <span>{borrowDate.format("D MMM YYYY")}</span>
                <CalendarIcon size={18} className="text-muted-foreground" />
              </button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-2" align="end">
              <Calendar
                mode="single"
                selected={borrowDate.toDate()}
                onSelect={(d) => {
                  if (!d) return;
                  onBorrowDateChange(dayjs(d));
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium">Borrow Duration</div>

          <RadioGroup
            value={String(days)}
            onValueChange={(v) => onDaysChange(Number(v) as 3 | 5 | 10)}
            className="space-y-3"
          >
            <label className="flex items-center gap-3 text-sm">
              <RadioGroupItem value="3" />
              <span>3 Days</span>
            </label>

            <label className="flex items-center gap-3 text-sm">
              <RadioGroupItem value="5" />
              <span>5 Days</span>
            </label>

            <label className="flex items-center gap-3 text-sm">
              <RadioGroupItem value="10" />
              <span>10 Days</span>
            </label>
          </RadioGroup>
        </div>


        <div className="rounded-xl bg-muted/40 p-4">
          <div className="text-sm font-medium">Return Date</div>
          <div className="mt-1 text-sm text-muted-foreground">
            Please return the book no later than{" "}
            <span className="font-semibold text-red-500">{dueDateLabel}</span>
          </div>
        </div>


        <div className="space-y-3">
          <label className="flex items-start gap-3 text-sm">
            <Checkbox
              checked={agreeDueDate}
              onCheckedChange={(v) => onAgreeDueDateChange(Boolean(v))}
            />
            <span className="leading-relaxed">
              I agree to return the book(s) before the due date.
            </span>
          </label>

          <label className="flex items-start gap-3 text-sm">
            <Checkbox
              checked={agreePolicy}
              onCheckedChange={(v) => onAgreePolicyChange(Boolean(v))}
            />
            <span className="leading-relaxed">
              I accept the library borrowing policy.
            </span>
          </label>
        </div>

        <Button
          className="w-full rounded-full"
          size="lg"
          onClick={onConfirm}
          disabled={confirmDisabled}
        >
          {confirmLoading ? "Processing..." : "Confirm & Borrow"}
        </Button>
      </div>
    </Card>
  );
};