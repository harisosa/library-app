"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { CheckoutUser } from "@/features/checkout/types";


type Props = {
  user?: CheckoutUser;
};

export const UserInformation: React.FC<Props> = ({ user }) => {
  return (
    <>
      <h2 className="text-display-xs font-bold">User Information</h2>

      <div className="mt-4 space-y-4 text-md ">
            <div className="flex items-center justify-between">
              <span className="font-medium text-neutral-950">Name</span>
              <span className="font-bold">{user?.name ?? "-"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-neutral-950">Email</span>
              <span className="font-bold">{user?.email ?? "-"}</span>
            </div>
            <div className="flex items-center justify-between ">
              <span className="font-medium text-neutral-950">Nomor Handphone</span>
              <span className="font-bold">
                {user?.nomorHandphone ?? "-"}
              </span>
            </div>
      </div>

      <Separator className="mt-6" />
    </>
  );
};