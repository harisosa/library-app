import { UserRole } from "@/features/auth/types";

export type NavbarMenuItem = {
  label: string;
  href: string;
  roles: UserRole[];
};
