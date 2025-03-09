import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/next";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zai",
  description:
    "Join Zai on a journey through technology, innovation, and open-source contributions.",
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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={mono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
