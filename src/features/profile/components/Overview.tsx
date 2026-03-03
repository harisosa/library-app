"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { MyProfile } from "../types";
import { useMe } from "../hooks/useMe";
import { getInitials } from "@/lib/utils";
import { ProfileOverviewSkeleton, ProfileOverviewError } from "@/features/profile/ui";
import { UpdateDialog } from "@/features/profile/components/UpdateDialog";


export const Overview: React.FC = () => {
  const meQ = useMe();
  const [open, setOpen] = React.useState(false);

  if (meQ.isLoading) return <ProfileOverviewSkeleton />;

  if (meQ.isError || !meQ.data) {
    return <ProfileOverviewError onRetry={() => meQ.refetch()} />;
  }

  const profile: MyProfile = meQ.data.profile;

  return (
    <div className="mt-6 lg:w-139.25">
      <h1 className="text-2xl font-semibold">Profile</h1>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-col  items-start gap-4">

          <Avatar className="h-16 w-16">
            <AvatarImage src={profile.profilePhoto ?? undefined} alt={profile.name} />
            <AvatarFallback>{getInitials(profile.name)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-4 w-full">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="text-sm font-semibold">{profile.name}</p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-sm font-semibold">{profile.email}</p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">Nomor Handphone</p>
              <p className="text-sm font-semibold">{profile.phone ?? "-"}</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button className="h-12 w-full rounded-full" onClick={() => setOpen(true)}>
            Update Profile
          </Button>
        </div>
      </div>

      <UpdateDialog open={open} onOpenChange={setOpen} profile={profile} />
    </div>
  );
};