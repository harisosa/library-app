"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { isValidCover, MAX_COVER_MB } from "@/constants";

type CoverFieldProps = {
  value: { previewUrl: string | null; imageUrl: string | null };
  onPick: (file: File, previewUrl: string) => void;
  onDelete: () => void;
  disabled?: boolean;
};

export const CoverField: React.FC<CoverFieldProps> = ({
  value,
  onPick,
  onDelete,
  disabled,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const currentUrl = value.previewUrl ?? value.imageUrl;

  useEffect(() => {
    return () => {
      if (value.previewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(value.previewUrl);
      }
    };
  }, [value.previewUrl]);

  const open = () => inputRef.current?.click();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    if (!f) return;

    const v = isValidCover(f);
    if (!v.okType) {
      setErr("File harus PNG / JPG.");
      e.target.value = "";
      return;
    }
    if (!v.okSize) {
      setErr(`Max ${MAX_COVER_MB}MB.`);
      e.target.value = "";
      return;
    }

    setErr(null);

    if (value.previewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(value.previewUrl);
    }

    const url = URL.createObjectURL(f);
    onPick(f, url);
    e.target.value = "";
  };

  return (
    <div className="space-y-3">
      <div
        className={cn(
          "rounded-xl border border-dashed bg-muted/20 p-4",
          "flex flex-col items-center justify-center gap-3"
        )}
      >
        <div
          className={cn(
            "relative h-35 w-27.5",
            "overflow-hidden rounded-md bg-background shadow-sm"
          )}
        >
          {currentUrl ? (
            <Image
              src={currentUrl}
              alt="Cover preview"
              fill
              className="object-contain"
              sizes="110px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-xs text-muted-foreground">No image</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            onClick={open}
            disabled={disabled}
          >
            Change Image
          </Button>

          <Button
            type="button"
            variant="ghost"
            className="rounded-full text-destructive hover:text-destructive"
            onClick={onDelete}
            disabled={disabled || !currentUrl}
          >
            Delete Image
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          PNG or JPG (max. {MAX_COVER_MB}mb)
        </p>

        {err ? <p className="text-xs text-destructive">{err}</p> : null}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};