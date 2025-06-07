import { Flex, Burger, Anchor, Image } from "@mantine/core";
import NavLink from "@/components/NavLink";

export default function Header({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  const navLinks = [
    { href: "#services", key: "最新" },
    { href: "#news", key: "關於" },
    { href: "＃companyInfo", key: "資源" },
    { href: "#contact", key: "成員" },
    { href: "#contact", key: "成果" },
  ];

  return (
    <Flex justify="space-between" mx={"md"}>
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
        m={"sm"}
      />
      <Flex align="center" gap="md">
        <Anchor href="/" style={{ textDecoration: "none" }}>
          <Image
            h={60}
            w={80}
            src="/images/lope-logo.png"
            alt="Logo"
            style={{ cursor: "pointer" }}
          />
        </Anchor>
      </Flex>
      <Flex gap={"sm"} visibleFrom="sm">
        {navLinks.map((item) => (
          <NavLink key={item.key} href={item.href} label={item.key} />
        ))}
      </Flex>
    </Flex>
  );
}
