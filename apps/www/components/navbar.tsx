"use client";

import React, { Fragment } from "react";
import { Container } from "@repo/ui/components/ui/container";
import { siteConfig } from "@repo/data/site";
import Link from "next/link";
import { buttonVariants } from "@repo/ui/components/ui/button";

const links = [
  { name: "About", href: siteConfig.aboutUrl },
  { name: "Contact", href: siteConfig.contactUrl },
  { name: "Resume", href: siteConfig.resumeUrl },
];


const Logo = () => <div>Logo</div>

export const Navbar: React.FC = () => {
  return (
    <Fragment>
      <nav
        className={"sticky top-0 z-40 -mt-8 hidden h-16 items-center border-b border-foreground/5 bg-background/75 px-4 backdrop-blur-lg md:flex"}
      >
        <Container className={"flex justify-between items-center h-full"}>
          <Logo/>
          <div className={"flex gap-4"}>
            {links.map((link) => (
              <Link className={buttonVariants({ variant: "ghost" })} key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </Container>
      </nav>

      <nav className={"fixed bottom-0 left-0 z-40 block h-16 w-full border-t md:hidden"}>
        <Container className="flex items-center justify-between h-full">
          <div><Logo /></div>
          {/*<div>*/}
          {/*  <Drawer.Root>*/}
          {/*    <Drawer.Trigger>*/}
          {/*      <Button size="icon" on:click={() => {}} variant="ghost">*/}
          {/*        <Map />*/}
          {/*      </Button>*/}
          {/*    </Drawer.Trigger>*/}
          {/*    <Drawer.Content>*/}
          {/*      <Drawer.Header>*/}
          {/*        <Drawer.Title>Navigator</Drawer.Title>*/}
          {/*        <Drawer.Description>Click and it will automatically redirected.</Drawer.Description>*/}
          {/*      </Drawer.Header>*/}
          {/*      <div class="grid grid-cols-3 gap-4">*/}
          {/*        {#each mobileNavlinks as link}*/}
          {/*        <Drawer.Close>*/}
          {/*          <a*/}
          {/*            href={link.route}*/}
          {/*            class="flex h-16 w-full flex-col items-center justify-center gap-1"*/}
          {/*          >*/}
          {/*            {#if link.label === 'Home'}*/}
          {/*            <Home class="h-5 w-5" />*/}
          {/*            {:else if link.label === 'About'}*/}
          {/*            <User class="h-5 w-5" />*/}
          {/*            {:else if link.label === 'Projects'}*/}
          {/*            <History class="h-5 w-5" />*/}
          {/*            {:else if link.label === 'Resume'}*/}
          {/*            <ScrollText class="h-5 w-5" />*/}
          {/*            {:else if link.label === 'Blogs'}*/}
          {/*            <NotebookPen class="h-5 w-5" />*/}
          {/*            {:else if link.label === 'Theme'}*/}
          {/*            <Sun class="h-5 w-5" />*/}
          {/*            {/if}*/}

          {/*              <p class="text-sm">{link.label}</p>*/}
          {/*        </a>*/}
          {/*      </Drawer.Close>*/}
          {/*      {/each}*/}
          {/*        </div>*/}
          {/*        <Drawer.Footer>*/}
          {/*        </Drawer.Footer>*/}
          {/*        </Drawer.Content>*/}
          {/*        </Drawer.Root>*/}
          {/*        </div>*/}
                  </Container>

      </nav>
    </Fragment>

  );
};
