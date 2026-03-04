"use client";

import { Button } from "@/components/ui/button";
import { NotificationButton } from "@/components/ui/notification";
import { SearchInput } from "@/components/ui/search-input";
import { GuestActions } from "@/features/layout/ui/GuestActions";
import { UserMenu } from "@/features/layout/ui/UserMenu";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export const NavbarMobile: React.FC<{ isAuthenticated: boolean, onSearch: (value: string) => void }> = ({ isAuthenticated, onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="relative flex lg:hidden h-16 items-center justify-between gap-4">
      <Link href="/" className="shrink-0">
        <div className="relative h-8 w-8">
          <Image src="/images/logo-mobile.svg" alt="bookly" fill className="object-contain" priority />
        </div>
      </Link>

      {isAuthenticated && isSearchOpen ? (
        <div className="flex items-center w-full gap-2">
          <SearchInput autoFocus placeholder="Search book"
            className="flex-1 h-12 rounded-full"
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch(e.currentTarget.value)
            }}
          />
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} aria-label="Close search">
            <X style={{ width: "24px", height: "24px" }} />
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-3 shrink-0">
          {isAuthenticated && (
            <>
              <Button variant="ghost" size="icon" className="h-7 w-7 p-0" onClick={() => setIsSearchOpen(true)}>
                <Search style={{ width: "24px", height: "24px" }} />
              </Button>
              <NotificationButton className="h-7 w-7" />
            </>
          )}

          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen((v) => !v)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      )}

      {/* Menu panel (no drawer) */}
      {isMenuOpen && !isSearchOpen && (
        <div className="absolute right-0 top-16 z-50 w-[320px] max-w-[calc(100vw-16px)]">
          <div className="rounded-2xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            {!isAuthenticated ? (
              <div className="grid grid-cols-2 gap-2">
                <GuestActions className="col-span-2" />
              </div>
            ) : (
              <UserMenu variant="mobilePanel" onNavigate={() => setIsMenuOpen(false)} />
            )}
          </div>

          {/* click-outside backdrop (opsional, tapi enak) */}
          <button
            type="button"
            aria-label="Close menu backdrop"
            className="fixed inset-0 -z-10"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
};