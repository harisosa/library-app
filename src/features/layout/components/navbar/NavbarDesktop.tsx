import { SearchInput } from "@/components/ui/search-input";
import { GuestActions } from "@/features/layout/components/navbar/GuestActions";
import { UserMenu } from "@/features/layout/components/navbar/UserMenu";
import Image from "next/image";
import Link from "next/link";

export const NavbarDesktop: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {

  return (
    <div className="hidden lg:flex h-20 items-center gap-[152.5px]">
      <div className="flex items-center gap-4">
        <Link href="/">
          <div className="relative w-30 h-8.25">
            <Image
              src="/images/logo.svg"
              alt="bookly"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
      </div>

      {!isAuthenticated ? (
        <GuestActions />
      ) : (
        <>
          <SearchInput placeholder="Search book" />
          <UserMenu />
        </>
      )}
    </div>
  );
};