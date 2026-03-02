import { Button } from "@/components/ui/button";
import { NotificationButton } from "@/components/ui/notification";
import { SearchInput } from "@/components/ui/search-input";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const NavbarMobile: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="flex lg:hidden h-16 items-center justify-between gap-4">
            <Link href="/" className="shrink-0">
                <div className="relative h-8 w-8">
                    <Image
                        src="/images/logo-mobile.svg"
                        alt="bookly"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>
            {isAuthenticated && isSearchOpen ? (
                <div className="flex items-center w-full gap-2">

                    <SearchInput
                        autoFocus
                        placeholder="Search book"
                        className="flex-1 h-12 rounded-full"
                    />

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSearchOpen(false)}
                    >
                        <X style={{
                                        width: "24px",
                                        height: "24px",
                                    }}  />
                    </Button>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-3 shrink-0">
                        {!isAuthenticated ? (
                            <Button variant="ghost" size="icon">
                                <Menu className="h-7 w-7" />
                            </Button>
                        ) : (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7 p-0"
                                    onClick={() => setIsSearchOpen(true)

                                    }
                                >
                                    <Search style={{
                                        width: "24px",
                                        height: "24px",
                                    }} />
                                </Button>
                                <NotificationButton className="h-7 w-7" />


                                <Button variant="ghost" size="icon" >
                                    <Menu style={{
                                        width: "24px",
                                        height: "24px",
                                    }}  />
                                </Button>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};