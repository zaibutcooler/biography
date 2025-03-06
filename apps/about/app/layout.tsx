import "@repo/ui/globals.css";
import type { Metadata } from "next";
import {PropsWithChildren} from "react"
import {mono} from "~/lib/fonts";

export const metadata: Metadata = {
  title: "About Zai",
  description:
    "Sai Ye Yint Aung (Zai) is a passionate entrepreneur and software engineer from Myanmar, building innovative tech solutions and sharing insights on web development, AI, and startups.",
  keywords: [
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
    "Web Development",
    "Tech Blog",
    "About",
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
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <div className={"mx-auto max-w-7xl px-5"}>
          {children}
        </div>
      </body>
    </html>
  );
}
