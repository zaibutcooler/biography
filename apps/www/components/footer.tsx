import React from "react";
import { Container } from "@repo/ui/components/ui/container";
import Link from "next/link";
import { Github, Instagram, LinkedinIcon, YoutubeIcon } from "lucide-react";

const footerLinks = [
  { route: "https://github.com", icon: Github },
  { route: "https://linkedin.com", icon: LinkedinIcon },
  { route: "https://instagram.com", icon: Instagram },
  { route: "https://youtube.com", icon: YoutubeIcon },
]

export const Footer: React.FC = () => {
  return (
    <footer className={"border-t mt-24"}>
    <Container className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-col items-center gap-4 px-8 text-sm font-medium md:flex-row md:gap-2 md:px-0">
        Copyright © 2025 Sai Ye Yint Aung
      </div>
      <div className="flex items-center space-x-6">
        {footerLinks.map((item, index) => (
          <Link href={item.route} key={index}>
            <item.icon className="h-6 w-6 p-1 border rounded text-muted-foreground hover:text-foreground/70" />
          </Link>
        ))}
      </div>
    </Container>
    </footer>
  );
};
