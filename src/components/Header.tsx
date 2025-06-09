import { Flex, Burger, Anchor, Image } from "@mantine/core";
import NavLink from "@/components/NavLink";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  const t = useTranslations("Header");

  const navLinks = [
    { href: "#services", key: "news" },
    { href: "#news", key: "about" },
    { href: "＃companyInfo", key: "resources" },
    { href: "#contact", key: "member" },
    { href: "#contact", key: "publication" },
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
            w={60}
            src="/images/lope-logo.jpg"
            alt="Logo"
            style={{ cursor: "pointer" }}
          />
        </Anchor>
      </Flex>
      <Flex gap={"sm"} visibleFrom="sm" align={"center"}>
        {navLinks.map((item) => (
          <NavLink
            key={item.key}
            href={item.href}
            label={t(`navlink.${item.key}`)}
          />
        ))}

        <LanguageSwitcher />
      </Flex>
    </Flex>
  );
}
