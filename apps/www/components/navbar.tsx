"use client";

import React from "react";
import { Container } from "@repo/ui/components/ui/container";
import { siteConfig } from "@repo/data/site";
import Link from "next/link";
import { Button, buttonVariants } from "@repo/ui/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/ui/components/ui/drawer";
import {
  Home,
  NotebookPen,
  User,
  ScrollText,
  Sun,
  History,
  LucideIcon, MapIcon
} from "lucide-react";
import { Logo } from "@repo/ui/components/logo";

const links = [
  { name: "About", href: siteConfig.aboutUrl },
  { name: "Contact", href: siteConfig.contactUrl },
  { name: "Resume", href: siteConfig.resumeUrl },
];

interface Navlink {
  label: string;
  route?: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const mobileNavlinks: Navlink[] = [
  { label: "Home", route: "/", icon: Home },
  { label: "About", route: "/about", icon: User },
  { label: "Projects", route: "/projects", icon: History },
  { label: "Resume", route: "/resume", icon: ScrollText },
  { label: "Blogs", route: "/blogs", icon: NotebookPen },
  { label: "Theme", icon: Sun, onClick: () => {} },
];

interface MobileLinkButtonProps {
  label: string;
  route?: string;
  onClick?: () => void;
  Icon: LucideIcon;
}

const MobileLinkButton: React.FC<MobileLinkButtonProps> = ({
                                                             label,
                                                             route = "#",
                                                             onClick = () => {},
                                                             Icon,
                                                           }) => (
  <Link
    href={route}
    onClick={onClick}
    className="flex h-16 w-full flex-col items-center justify-center gap-1"
  >
    <Icon className="h-5 w-5" />
    <p className="text-sm">{label}</p>
  </Link>
);

export const Navbar: React.FC = () => (
  <>
    {/* Desktop Navbar */}
    <nav className="sticky top-0 z-40 -mt-8 hidden h-16 items-center border-b border-foreground/5 bg-background/75 px-4 backdrop-blur-lg md:flex">
      <Container className="flex justify-between items-center h-full w-full">
        <Logo />
        <div className="flex gap-4">
          {links.map(({ name, href }) => (
            <Link key={name} className={buttonVariants({ variant: "ghost" })} href={href}>
              {name}
            </Link>
          ))}
        </div>

        <div className={"flex gap-4"}>

        </div>
      </Container>
    </nav>

    {/* Mobile Navbar */}
    <nav className="fixed bottom-0 left-0 z-40 block h-16 w-full border-t md:hidden bg-background">
      <Container className="flex items-center justify-between h-full">
        <Logo />
        <Drawer>
          <DrawerTrigger>
            <Button size="icon" variant="ghost">
              <MapIcon className={"h-4 w-4"}/>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Navigator</DrawerTitle>
              <DrawerDescription >
                Click and it will automatically redirect.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid grid-cols-3 gap-4">
              {mobileNavlinks.map(({ label, route, icon, onClick }) => (
                <DrawerClose key={label}>
                  <MobileLinkButton label={label} route={route} onClick={onClick} Icon={icon} />
                </DrawerClose>
              ))}
            </div>
            <DrawerFooter />
          </DrawerContent>
        </Drawer>
      </Container>
    </nav>
  </>
);
