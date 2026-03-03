"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Loader2 } from "lucide-react";
import type { MyProfile, UpdateMyProfileInput } from "../types";
import { useUpdateMe } from "../hooks/useUpdateMe";

type UpdateDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: MyProfile;
};

const initials = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] ?? "";
  const b = parts[1]?.[0] ?? "";
  return (a + b).toUpperCase() || "U";
};

export const UpdateDialog: React.FC<UpdateDialogProps> = ({ open, onOpenChange, profile }) => {
  const updateMeM = useUpdateMe();

  const [name, setName] = React.useState(profile.name);
  const [phone, setPhone] = React.useState(profile.phone ?? "");
  const [photo, setPhoto] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const disabled = updateMeM.isPending;

  // reset form setiap modal dibuka
  React.useEffect(() => {
    if (!open) return;

    setName(profile.name);
    setPhone(profile.phone ?? "");
    setPhoto(null);
    setPreviewUrl(null);

    // reset value input file supaya pilih file yg sama tetap trigger onChange
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [open, profile.name, profile.phone, profile.profilePhoto]);

  // generate preview URL dari file
  React.useEffect(() => {
    if (!photo) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(photo);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);

  const handleAvatarClick = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: UpdateMyProfileInput = {
      name: name.trim() ? name.trim() : undefined,
      phone: phone.trim() ? phone.trim() : undefined,
      profilePhoto: photo ?? undefined,
    };

    updateMeM.mutate(payload, {
      onSuccess: () => {
        onOpenChange(false); // auto close
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={(v) => (!disabled ? onOpenChange(v) : undefined)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <fieldset disabled={disabled} className="space-y-4">
            {/* Avatar picker */}
            <div className="space-y-2">
              <Label>Profile Photo</Label>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleAvatarClick}
                  className="relative rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60"
                  disabled={disabled}
                  aria-label="Change profile photo"
                >
                  <Avatar className="h-24 w-24 ring-2 ring-muted transition hover:ring-primary">
                    <AvatarImage
                      src={previewUrl ?? profile.profilePhoto ?? undefined}
                      alt={profile.name}
                    />
                    <AvatarFallback>{initials(profile.name)}</AvatarFallback>
                  </Avatar>

                  <span className="absolute bottom-0 right-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
                    <Camera className="h-4 w-4" />
                  </span>
                </button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                disabled={disabled}
                onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
              />

              <p className="text-center text-xs text-muted-foreground">
                Klik avatar untuk mengganti foto (opsional)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Nomor Handphone</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08xxxxxxxxxx"
              />
            </div>
          </fieldset>

          <div className="pt-2">
            <Button type="submit" className="w-full" disabled={disabled}>
              {disabled ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save"
              )}
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="mt-2 w-full"
              onClick={() => onOpenChange(false)}
              disabled={disabled}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};