import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Ye Yint Aung",
  description:
    "Resume of Sai Ye Yint Aung, a skilled software engineer and entrepreneur from Myanmar. Explore my professional experience, technical skills, and projects.",
  keywords: [
    "Sai Ye Yint Aung",
    "Resume",
    "Software Engineer",
    "Entrepreneur",
    "Professional Experience",
    "Technical Skills",
    "Projects",
    "Myanmar",
    "Full Stack Developer",
    "AI",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Tech Blog",
    "Innovation",
    "Open Source",
    "Ruby on Rails",
    "Node.js",
    "Business",
  ],
};

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
