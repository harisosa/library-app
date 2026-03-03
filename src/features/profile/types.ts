import { AuthUser } from "@/features/auth/types";

export type UserRole = "USER" | "ADMIN";

export type MyProfile = AuthUser & {
  createdAt: string; // ISO
};

export type LoanStats = {
  borrowed: number;
  late: number;
  returned: number;
  total: number;
};

export type GetMeData = {
  profile: MyProfile;
  loanStats: LoanStats;
  reviewsCount: number;
};

export type PatchMeData = {
  profile: MyProfile;
};

export type UpdateMyProfileInput = {
  name?: string;
  phone?: string;
  profilePhoto?: File | null;
};