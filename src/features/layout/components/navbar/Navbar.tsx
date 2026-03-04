'use client';

import { selectIsAuthenticated } from "@/features/auth/store";
import { NavbarDesktop, NavbarMobile } from "@/features/layout/ui";
import { Container } from "@/shared/components/layout";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";


export const Navbar: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
   const router = useRouter()
  const handleSearch = (value: string) => {
     
    if (!value.trim()) return

    router.push(`/category?q=${encodeURIComponent(value.trim())}`)
  }
  return (
    <header className="fixed w-full border-b bg-background z-50 shadow-[0_0_20px_0_#CBCACA40]">
      <Container >
      <NavbarMobile isAuthenticated={isAuthenticated} onSearch={(value) => handleSearch(value) }/>
      <NavbarDesktop isAuthenticated={isAuthenticated} onSearch={(value) => handleSearch(value) } />
      </Container>
    </header>
  );
};