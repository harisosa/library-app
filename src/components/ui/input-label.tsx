import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

type InputWithLabelProps = React.ComponentProps<"input"> & {
  label: string;
  error?: string;
  className?: string;
};

export const InputWithLabel: React.FC<InputWithLabelProps> = ({
  className,
  label,
  error: externalError,
  onChange,
  ...props
}) => {
  const [internalError, setInternalError] = useState<string | undefined>();

  // kalau parent kirim error → sync ke internal
  useEffect(() => {
    setInternalError(externalError);
  }, [externalError]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalError(undefined); // clear error saat user ngetik
    onChange?.(e);
  };

  const hasError = Boolean(internalError);

  return (
    <Field className="space-y-1">
      <FieldLabel
        htmlFor={props.id}
        className={cn(
          "text-sm font-bold",
          hasError ? "text-red-600" : "text-neutral-950"
        )}
      >
        {label}
      </FieldLabel>

      <Input
        {...props}
        onChange={handleChange}
        className={cn(
          "text-md font-semibold",
          hasError
            ? "border-red-500 focus-visible:ring-red-500"
            : "text-neutral-950",
          className
        )}
      />

      {hasError && (
        <p className="text-sm font-medium text-red-600">
          {internalError}
        </p>
      )}
    </Field>
  );
};