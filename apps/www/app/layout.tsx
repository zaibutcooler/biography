import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import profile from "@repo/data/profile";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zai - Sai Ye Yint Aung",
  description: profile.about,
  keywords: [
    "Zai",
    "Sai Ye Yint Aung",
    "Entrepreneur",
    "Software Engineer",
    "Myanmar",
    "Burma",
    "Personal Website",
    "Portfolio",
    "Tech Blog",
    "Web Development",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
  ],
};

export default function RootLayout({
  children,
}:PropsWithChildren){
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
