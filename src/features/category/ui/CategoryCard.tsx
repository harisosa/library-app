"use client"

import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { DEFAULT_CATEGORY_ICON_SRC, getCategoryIconSrc } from "./CategoryIcon"

type CategoryCardProps = {
    id: number
    name: string
    onClick?: (categoryId: number) => void
    className?: string
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, onClick, className }) => {
    return (
        <button
            type="button"
            onClick={() => onClick?.(id)}
            className={cn("shrink-0 text-left", className)}
            aria-label={`Open category ${name}`}
        >
            <Card className="rounded-2xl flex 
            w-28 h-33
            sm:w-32 sm:h-33
            md:w-36 md:h-32.75
            lg:w-40.5 lg:h-32.75
            xl:w-44 xl:h-34
            2xl:w-48 2xl:h-36
            3xl:w-[320px] 3xl:h-[180px]
            lg:p-3 p-2 shadow-sm transition-transform duration-200 hover:scale-[1.01] gap-3">
                <div className="flex relative items-center justify-center rounded-xl bg-[#D8E7FF] w-full h-full">
                    <Image
                        src={getCategoryIconSrc(name)}
                        fill
                        className="object-contain"
                        onError={(e) => {
                            const img = e.currentTarget as HTMLImageElement
                            if (!img.src.endsWith(DEFAULT_CATEGORY_ICON_SRC)) img.src = DEFAULT_CATEGORY_ICON_SRC
                        }} alt={name} />
                </div>
                <p className="text-md font-semibold text-neutral-950 tracking-[-0.02em]">{name}</p>
            </Card>
        </button>
    )
}