"use client";


import { Footer } from "@/features/layout/components/Footer";
import { Navbar } from "@/features/layout/components/navbar";
import React from "react";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[90vh]">
      {children}
      </main>
      <Footer />
    </>

  );
};

export default MainLayout;