"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useCartCount } from "@/features/cart/hooks";
import { useRouter } from "next/navigation";


type NotificationButtonProps = {
    className?: string;
};

export const NotificationButton: React.FC<NotificationButtonProps> = ({
    className,
}) => {
    const router = useRouter();
    const { data: count = 0 } = useCartCount();
    const onClick =() => {
        router.push("/cart");
    }

    return (
        <div className={cn("relative inline-flex", className)}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/40" onClick={onClick}>
                <Image
                    src="/icons/bag.svg"
                    alt="notification"
                    fill
                    className="object-contain"
                />
            </div>

            {count > 0 && (
                <span
                    className={cn(
                        "absolute -right-1 -top-1",
                        "flex h-5 min-w-5 items-center justify-center",
                        "rounded-full bg-red-500 px-1",
                        "text-[10px] font-semibold text-white leading-none"
                    )}
                >
                    {count > 9 ? "9+" : count}
                </span>
            )}
        </div>
    );
};