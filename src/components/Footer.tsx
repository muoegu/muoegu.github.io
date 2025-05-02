"use client";

import { Box, Text, Flex, Title } from "@mantine/core";

export default function Footer() {
  return (
    <Box bg="gray">
      <Flex direction={"column"} align={"center"}>
        <Title order={2} ta="center" mt={"xl"} mb={"sm"} c={"white"}>
          聯絡我們
        </Title>

        <Text c={"white"}>謝舒凱老師 email : shukaihsieh@ntu.edu.tw</Text>

        <Text c={"white"} style={{ marginTop: "10px" }}>
          臺大語言所 | 知識本體、語言處理與人文計算實驗室
        </Text>
        <Text c={"white"} mb={"lg"}>
          LOPE lab @ National Taiwan University, Graduate Institute of
          Linguistics
        </Text>
      </Flex>
    </Box>
  );
}
