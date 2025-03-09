import type { MetadataRoute } from "next";
import { metadata } from "~/app/layout";
import profile from "@repo/data/profile";
import { colors } from "@repo/ui/lib/colors";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.fullName as string,
    short_name: profile.nickName,
    description: metadata.description as string,
    start_url: "/",
    display: "standalone",
    background_color: colors.light.background,
    theme_color: colors.light.primary,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
