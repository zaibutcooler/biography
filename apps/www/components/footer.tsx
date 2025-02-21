import React from "react";
import { Container } from "@repo/ui/components/ui/container";

export const Footer: React.FC = () => {
  return (
    <div className={"border-t border-border/50 text-sm font-medium"}>
      <Container className={"flex justify-between py-4"}>
        <div>© 2021</div>
        <div>Footer</div>
      </Container>
    </div>
  );
};
