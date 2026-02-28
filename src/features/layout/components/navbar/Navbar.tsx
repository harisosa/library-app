'use client';

import { selectIsAuthenticated } from "@/features/auth/store";
import { NavbarDesktop, NavbarMobile } from "@/features/layout/ui";
import { Container } from "@/shared/components/layout";
import { useAppSelector } from "@/store/hooks";


export const Navbar: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <header className="fixed w-full border-b bg-background z-50 shadow-[0_0_20px_0_#CBCACA40]">
      <Container >
      <NavbarMobile isAuthenticated={isAuthenticated} />
      <NavbarDesktop isAuthenticated={isAuthenticated} />
      </Container>
    </header>
  );
};