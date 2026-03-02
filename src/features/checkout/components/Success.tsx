"use client";

import React, { useMemo } from "react";
import dayjs from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Section } from "@/shared/components";
import Image from "next/image";

export const SuccessComponent: React.FC = () => {
    const router = useRouter();
    const sp = useSearchParams();

    const dueRaw = sp.get("due") ?? "";
    const msg = sp.get("msg") ?? "";

    const dueLabel = useMemo(() => {
        if (!dueRaw) return "";
        const d = dayjs(dueRaw);
        if (!d.isValid()) return "";
        return d.format("D MMMM YYYY");
    }, [dueRaw]);

    const subtitle = msg
        ? msg
        : dueLabel
            ? `Please return it by ${dueLabel}`
            : "Your book has been successfully borrowed.";

    return (
        <Section id="success" className="h-full" >
            <div className="flex min-h-[calc(100vh-240px)] items-center justify-center px-4">
                <div className="w-full max-w-225 text-center">
                    <div className="w-full flex justify-center mb-2">
                        <Image src="/icons/success.svg" width={142} height={142} alt="success" />
                    </div>


                    <h1 className="text-2xl font-semibold">Borrowing Successful!</h1>

                    <p className="mt-3 text-sm text-muted-foreground">
                        Your book has been successfully borrowed. {subtitle}
                    </p>

                    <div className="mt-8 w-full space-y-3">
                        <Button className="w-full rounded-full" asChild>
                            <a href="/loans">View My Loans</a>
                        </Button>

                        <Button className="w-full rounded-full bg-[#1C65DA]" variant="outline" asChild
                            onClick={() => { router.push('/') }}
                        >
                            Back to Home
                        </Button>
                    </div>
                </div>

            </div>
        </Section>


    );
};