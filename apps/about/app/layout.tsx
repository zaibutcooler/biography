import "@repo/ui/globals.css";
import type { Metadata } from "next";
import {PropsWithChildren} from "react"
import {mono} from "~/lib/fonts";

export const metadata: Metadata = {
  title: "Zai",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
