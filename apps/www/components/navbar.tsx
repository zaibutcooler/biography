"use client";

import React from "react";
import { Container } from "@repo/ui/components/ui/container";
import { siteConfig } from "@repo/data/site";
import Link from "next/link";
import { buttonVariants } from "@repo/ui/components/ui/button";

import { Logo } from "@repo/ui/components/logo";
import { MobileNav } from "~/components/mobile-nav";

const links = [
  { name: "About", href: siteConfig.aboutUrl },
  { name: "Contact", href: siteConfig.contactUrl },
  { name: "Resume", href: siteConfig.resumeUrl },
];

export const Navbar: React.FC = () => (
  <>
    {/* Desktop Navbar */}
    <header
      className="sticky top-0 z-40 -mt-8 hidden h-16 items-center border-b border-foreground/5 bg-background/75 px-4 backdrop-blur-lg md:flex"
      aria-label="Main Navigation">
      <Container className="flex justify-between items-center h-full w-full">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <nav className="flex gap-4">
          {links.map(({ name, href }) => (
            <Link
              key={name}
              className={buttonVariants({ variant: "ghost" })}
              href={href}
              aria-label={name}
            >
              {name}
            </Link>
          ))}
        </nav>
      </Container>
    </header>

    {/* Mobile Navbar */}
    <MobileNav/>
  </>
);
