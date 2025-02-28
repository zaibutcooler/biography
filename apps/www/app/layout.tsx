import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import profile from "@repo/data/profile";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Ye Yint Aung | Zai",
  description:
    "Sai Ye Yint Aung (Zai) is a passionate entrepreneur and software engineer from Myanmar, building innovative tech solutions and sharing insights on web development, AI, and startups.",
  keywords: [
    "Zai",
    "Sai Ye Yint Aung",
    "Software Engineer",
    "Entrepreneur",
    "Myanmar",
    "Full Stack Developer",
    "AI",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Mobile Development",
    "Flutter",
    "Web Development",
    "Tech Blog",
    "Portfolio",
    "Startup",
    "Innovation",
    "Open Source",
    "Ruby on Rails",
    "Node.js",
    "Business",
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
