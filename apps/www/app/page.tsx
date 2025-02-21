import React from "react";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { Container } from "@repo/ui/components/ui/container";
import { Button } from "@repo/ui/components/ui/button";

export default function Page() {
  return (
    <div className={"font-mono"}>
      <Navbar />
      <Container
        className={"flex justify-between items-center mt-48 mb-48 gap-12"}
      >
        <div className={"max-w-xl space-y-6"}>
          <h1 className={"text-5xl font-extrabold leading-[3.5rem]"}>
            Building The Future With Technology
          </h1>
          <p className={"max-w-lg text-base"}>
            I believe technology should serve humanity. My goal is to create
            products that make a difference and bring good things to the world.
          </p>
          <div className={"flex gap-6"}>
            <Button size={"lg"}>Get Started</Button>
            <Button size={"lg"} variant={"ghost"}>
              Contact Now
            </Button>
          </div>
        </div>

        <div className={"h-[424px] w-[424px] bg-primary rounded-lg"}></div>
      </Container>
      <Footer />
    </div>
  );
}
