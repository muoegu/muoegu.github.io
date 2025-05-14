"use client";

import { UnstyledButton, Anchor } from "@mantine/core";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <UnstyledButton>
      <Anchor fw={700} href={href} c="#661452">
        {label}
      </Anchor>
    </UnstyledButton>
  );
}
