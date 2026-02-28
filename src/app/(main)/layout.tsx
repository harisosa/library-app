"use client";


import { Navbar } from "@/features/layout/components/navbar";
import React from "react";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
      {children}
      </main>

    </>

  );
};

export default MainLayout;