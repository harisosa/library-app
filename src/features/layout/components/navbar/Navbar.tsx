'use client';

import { selectIsAuthenticated } from "@/features/auth/store";
import { NavbarDesktop } from "@/features/layout/components/navbar/NavbarDesktop";
import { NavbarMobile } from "@/features/layout/components/navbar/NavbarMobile";
import { Container } from "@/shared/components/layout";
import { useAppSelector } from "@/store/hooks";


export const Navbar: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <header className="w-full border-b bg-background shadow-[0_0_20px_0_#CBCACA40]">
      <Container >
      <NavbarMobile isAuthenticated={isAuthenticated} />
      <NavbarDesktop isAuthenticated={isAuthenticated} />
      </Container>
    </header>
  );
};