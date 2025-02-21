"use client";

import React from "react";
import { Container } from "@repo/ui/components/ui/container";
import { siteConfig } from "@repo/data/site";
import Link from "next/link";
import { buttonVariants } from "@repo/ui/components/ui/button";

const links = [
  { name: "About", href: siteConfig.aboutUrl },
  { name: "Contact", href: siteConfig.contactUrl },
  { name: "Resume", href: siteConfig.resumeUrl },
];

export const Navbar: React.FC = () => {
  return (
    <header
      className={"h-16 w-screen border-b border-border/50 text-sm font-medium"}
    >
      <Container className={"flex justify-between items-center h-full"}>
        <div>Logo</div>
        <div className={"flex gap-4"}>
          {links.map((link) => (
            <Link className={buttonVariants()} key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
};
