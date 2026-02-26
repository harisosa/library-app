"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Field, FieldLabel } from "@/components/ui/field";

type PasswordInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  error?: string;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  className,
  error: externalError,
  onChange,
  disabled,
  ...props
}) => {
  const [show, setShow] = React.useState(false);
  const [internalError, setInternalError] = React.useState<string | undefined>();

  React.useEffect(() => {
    setInternalError(externalError);
  }, [externalError]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalError(undefined);
    onChange?.(e);
  };

  const hasError = Boolean(internalError);

  return (
    <Field className="space-y-1">
      {label ? (
        <FieldLabel
          htmlFor={props.id}
          className={cn(
            "text-sm font-bold",
            hasError ? "text-red-600" : "text-neutral-950"
          )}
        >
          {label}
        </FieldLabel>
      ) : null}

      <div className="relative">
        <Input
          {...props}
          disabled={disabled}
          onChange={handleChange}
          type={show ? "text" : "password"}
          className={cn(
            "pr-10",
            hasError ? "border-red-500 focus-visible:ring-red-500" : "",
            className
          )}
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          disabled={disabled}
          onClick={() => setShow((prev) => !prev)}
          className={cn(
            "absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 text-muted-foreground hover:text-foreground",
            disabled ? "cursor-not-allowed opacity-60" : ""
          )}
          tabIndex={disabled ? -1 : 0}
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>

      {hasError ? (
        <p className="text-sm font-medium text-red-600">{internalError}</p>
      ) : null}
    </Field>
  );
};