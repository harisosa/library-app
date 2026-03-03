"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import type { BookUpsertValues } from "@/features/books/types";
import { InputWithLabel } from "@/components/ui/input-label";
import { CoverField } from "@/components/ui/cover-field";


export type BookUpsertFormProps = {
    initialValues: BookUpsertValues;
    categories: { id: number; name: string }[];
    disabled?: boolean;
    onSubmit: (values: BookUpsertValues) => Promise<void> | void;
};

type Errors = Partial<Record<keyof BookUpsertValues, string>>;

export const BookUpsertForm: React.FC<BookUpsertFormProps> = ({
    initialValues,
    categories,
    disabled,
    onSubmit,
}) => {
    const [values, setValues] = React.useState<BookUpsertValues>(initialValues);
    const [errors, setErrors] = React.useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const isBusy = Boolean(disabled || isSubmitting);

    const setField = <K extends keyof BookUpsertValues>(key: K, value: BookUpsertValues[K]) => {
        setValues((p) => ({ ...p, [key]: value }));
        setErrors((p) => ({ ...p, [key]: undefined }));
    };

    const validate = (): boolean => {
        const next: Errors = {};

        if (!values.title.trim()) next.title = "Title wajib diisi.";
        if (!values.authorName.trim()) next.authorName = "Author wajib diisi.";
        if (!values.categoryId) next.categoryId = "Category wajib dipilih.";
        if (!values.description.trim()) next.description = "Description wajib diisi.";

        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        try {
            await onSubmit({
                ...values,
                title: values.title.trim(),
                authorName: values.authorName.trim(),
                description: values.description.trim(),
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="w-full md:w-150 md:mx-auto">
            <form onSubmit={submit} className="space-y-5">
                <InputWithLabel
                    label="Title"
                    value={values.title}
                    error={errors.title}
                    disabled={isBusy}
                    onChange={(e) => setField("title", e.target.value)}
                />

                <InputWithLabel
                    label="Author"
                    value={values.authorName}
                    error={errors.authorName}
                    disabled={isBusy}
                    onChange={(e) => setField("authorName", e.target.value)}
                />

                <Field className="space-y-1">
                    <FieldLabel
                        className={cn(
                            "text-sm font-bold",
                            errors.categoryId ? "text-red-600" : "text-neutral-950"
                        )}
                    >
                        Category
                    </FieldLabel>

                    <Select
                        disabled={isBusy}
                        value={values.categoryId ? String(values.categoryId) : ""}
                        onValueChange={(v) => setField("categoryId", Number(v))}
                    >
                        <SelectTrigger
                            className={cn(
                                "h-11 text-md font-semibold",
                                errors.categoryId &&
                                "border-red-500 focus:ring-red-500 focus-visible:ring-red-500"
                            )}
                        >
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>

                        <SelectContent>
                            {categories.map((c) => (
                                <SelectItem key={c.id} value={String(c.id)}>
                                    {c.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {errors.categoryId ? (
                        <p className="text-sm font-medium text-red-600">{errors.categoryId}</p>
                    ) : null}
                </Field>

                <InputWithLabel
                    label="Number of Page"
                    value={values.totalCopies ? String(values.totalCopies) : ""}
                    error={errors.totalCopies}
                    disabled={isBusy}
                    onChange={(e) => setField("totalCopies", Number(e.target.value))}
                />

                <Field className="space-y-1">
                    <FieldLabel
                        className={cn(
                            "text-sm font-bold",
                            errors.description ? "text-red-600" : "text-neutral-950"
                        )}
                    >
                        Description
                    </FieldLabel>

                    <Textarea
                        className={cn(
                            "min-h-27.5 resize-none text-md font-semibold",
                            errors.description ? "border-red-500 focus-visible:ring-red-500" : ""
                        )}
                        disabled={isBusy}
                        value={values.description}
                        onChange={(e) => setField("description", e.target.value)}
                    />

                    {errors.description ? (
                        <p className="text-sm font-medium text-red-600">{errors.description}</p>
                    ) : null}
                </Field>

                <CoverField
                    disabled={isBusy}
                    value={{
                        previewUrl: values.coverPreviewUrl,
                        imageUrl: values.coverImageUrl,
                    }}
                    onPick={(file, previewUrl) =>
                        setValues((prev) => ({
                            ...prev,
                            coverFile: file,
                            coverPreviewUrl: previewUrl,
                        }))
                    }
                    onDelete={() =>
                        setValues((prev) => ({
                            ...prev,
                            coverFile: null,
                            coverPreviewUrl: null,
                            coverImageUrl: null,
                        }))
                    }
                />


                <Button type="submit" className="h-12 w-full rounded-full" disabled={isBusy}>
                    {isSubmitting ? "Saving..." : "Save"}
                </Button>
            </form>
        </div>
    );
};