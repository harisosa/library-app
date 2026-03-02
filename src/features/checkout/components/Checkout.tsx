"use client";

import React, { useMemo } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useCartCheckout, useLoanCheckout } from "@/features/checkout/hooks";
import { BorrowFormCard, UserInformation } from "@/features/checkout/ui";
import { Section } from "@/shared/components";
import { BorrowItem } from "@/features/cart/ui";


export const CheckoutComponent: React.FC = () => {
    const q = useCartCheckout();
    const m = useLoanCheckout();

    const [borrowDate, setBorrowDate] = React.useState<Dayjs>(() => dayjs());
    const [days, setDays] = React.useState<3 | 5 | 10>(3);
    const [agreeDueDate, setAgreeDueDate] = React.useState(false);
    const [agreePolicy, setAgreePolicy] = React.useState(false);

    const checkout = q?.data;
    const items = useMemo(() => {
        return checkout?.items ?? []
    }, [checkout]);

    const user = checkout?.user;


    const effectiveItemIds = useMemo(() => {
        return items.map((x) => x.id); // id = cart item id
    }, [items]);

    const dueDateLabel = useMemo(() => {
        return borrowDate.add(days, "day").format("D MMMM YYYY");
    }, [borrowDate, days]);

    const confirmDisabled =
        effectiveItemIds.length === 0 ||
        !agreeDueDate ||
        !agreePolicy ||
        m.isPending ||
        q.isLoading;

    const onConfirm = () => {
        if (confirmDisabled) return;

        m.mutate({
            itemIds: effectiveItemIds,
            days,
            borrowDate: borrowDate.format("YYYY-MM-DD"),
        });
    };

    return (
        <Section id='checkout' title="Checkout">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start">

                <div className="flex-1">
                    <UserInformation
                        user={user}
                    />

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold">Book List</h2>
                        <div>
                            {
                                items.map((it) => {
                                    return <BorrowItem key={it.id} item={it} />
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-105">
                    <BorrowFormCard
                        borrowDate={borrowDate}
                        onBorrowDateChange={setBorrowDate}
                        days={days}
                        onDaysChange={setDays}
                        dueDateLabel={dueDateLabel}
                        agreeDueDate={agreeDueDate}
                        onAgreeDueDateChange={setAgreeDueDate}
                        agreePolicy={agreePolicy}
                        onAgreePolicyChange={setAgreePolicy}
                        confirmDisabled={confirmDisabled}
                        confirmLoading={m.isPending}
                        onConfirm={onConfirm}
                    />
                </div>
            </div>
        </Section>


    );
};