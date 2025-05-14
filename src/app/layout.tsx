"use client";

import "@mantine/core/styles.css";
import {
  AppShell,
  Burger,
  Flex,
  MantineProvider,
  Image,
  ColorSchemeScript,
  createTheme,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Footer from "@/components/Footer";
import NavLink from "@/components/NavLink";
// import NavLink from "@/components/NavLink";
// import MobileNavLink from "@/components/MobileNavLink";
// import { Zen_Maru_Gothic } from "next/font/google";

// const zenMaruGothic = Zen_Maru_Gothic({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

const theme = createTheme({
  // fontFamily: `${zenMaruGothic.style.fontFamily}, sans-serif`,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  const logo = "/images/lope-logo.jpg";

  return (
    <html lang="en">
      <head>
        <title>The LOPE Lab</title>
        <link rel="icon" href="/favicon.ico" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 40 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { desktop: true, mobile: !opened },
            }}
            // padding="md"
          >
            <AppShell.Header>
              <Flex mx={"md"} align={"center"} gap={"md"}>
                <Flex gap="md">
                  <Anchor href="/" style={{ textDecoration: "none" }}>
                    <Image
                      h={40}
                      w={40}
                      src={logo}
                      alt="Logo"
                      style={{ cursor: "pointer" }}
                    />
                  </Anchor>
                </Flex>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                  m={"sm"}
                />
                <Flex gap={"sm"} visibleFrom="sm">
                  <NavLink href="#news" label="最新" />
                  <NavLink href="#news" label="關於" />
                  <NavLink href="#news" label="資源" />
                  <NavLink href="#news" label="成員" />
                  <NavLink href="#news" label="成果" />
                </Flex>
              </Flex>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
              {/* <MobileNavLink /> */}
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>

            <Footer />
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
