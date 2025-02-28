import React from "react";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { Container } from "@repo/ui/components/ui/container";
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div className={"font-mono"}>
      <Navbar />
      <Container className={"flex flex-col sm:flex-row justify-between items-center mt-24 sm:mt-48 mb-24 sm:mb-48 gap-12 text-center sm:text-left"}>
        <div className={"max-w-xl space-y-6"}>
          <h1 className={"text-4xl sm:text-5xl font-extrabold leading-[3rem] sm:leading-[3.5rem]"}>
            Building The Future With Technology
          </h1>
          <p className={"max-w-lg text-base"}>
            I believe technology should serve humanity. My goal is to create
            products that make a difference and bring good things to the world.
          </p>
          <div className={"flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start"}>
            <Button size={"lg"}>Get Started</Button>
            <Button size={"lg"} variant={"ghost"}>
              Contact Now
            </Button>
          </div>
        </div>

        <div className={"relative h-[300px] w-[300px] sm:h-[424px] sm:w-[424px] rounded-lg overflow-hidden bg-primary"}>
          {/*<Image src={"/me.jpeg"} alt={"Zai"} layout={"fill"} objectFit={"cover"} />*/}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
