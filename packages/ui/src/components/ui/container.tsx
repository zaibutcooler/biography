"use client";

import { cn } from "@repo/ui/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container: React.FC<ContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("max-w-7xl mx-auto px-4 lg:px-6 ", className)}
      {...props}
    />
  );
};
