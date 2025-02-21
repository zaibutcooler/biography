"use client";

import React from "react";
import { Container } from "@repo/ui/components/ui/container";

export const Navbar: React.FC = () => {
  return (
    <header
      className={"h-16 w-screen border-b border-border/50 text-sm font-medium"}
    >
      <Container className={"flex justify-between items-center h-full"}>
        <div>Logo</div>
        <div>Navigations</div>
      </Container>
    </header>
  );
};
