import "@mantine/core/styles.css";
import {
  Anchor,
  Stack,
  Text,
  AppShell,
  MantineProvider,
  ColorSchemeScript,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import Header from "@/components/Header";

const menuItems = [
  { label: "最新", href: "/" },
  { label: "關於", href: "#services" },
  { label: "資源", href: "#news" },
  { label: "会社情報", href: "#companyInfo" },
];

export default function MyApp({ Component, pageProps }: AppProps) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <ColorSchemeScript />
      <MantineProvider>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { desktop: true, mobile: !opened },
          }}
        >
          <AppShell.Header>
            <Header opened={opened} toggle={toggle} />
          </AppShell.Header>

          <AppShell.Navbar
            py="md"
            px={4}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Stack align="center" justify="space-between" gap="xl">
              {menuItems.map((item, index) => (
                <Anchor key={index} href={item.href} onClick={() => toggle()}>
                  <Text size="lg" fw={700} c={"#659AD2"}>
                    {item.label}
                  </Text>
                </Anchor>
              ))}
            </Stack>
          </AppShell.Navbar>

          <AppShell.Main>
            <Component {...pageProps} />
          </AppShell.Main>

          <Footer />
        </AppShell>
      </MantineProvider>
    </>
  );
}
