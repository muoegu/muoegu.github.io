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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Footer from "@/components/Footer";
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
  const logo = "/images/logo.png";

  return (
    <html lang="en">
      <head>
        <title>知識本體、語言處理與人文計算實驗室 | 台大語言學研究所</title>
        <link rel="icon" href="/favicon.ico" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { desktop: true, mobile: !opened },
            }}
            // padding="md"
          >
            <AppShell.Header>
              <Flex mx={"md"} justify={"space-between"} align={"center"}>
                <Flex gap="md">
                  <Image
                    h={60}
                    w={60}
                    src={logo}
                    alt="Logo"
                    style={{ cursor: "pointer" }}
                  />
                </Flex>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                  m={"sm"}
                />
                {/* <Flex gap={"sm"} visibleFrom="sm">
                  <UnstyledButton>
                    <Anchor fw={700} href="/ai-in-taiwan" c="#1c9770"></Anchor>
                  </UnstyledButton>
                </Flex> */}
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
