import React from "react";
import type { Resource } from "@/types/resource";
import { Container, Title } from "@mantine/core";

interface Props {
  data: Resource[];
}

export default function Resources({ data }: Props) {
    console.log("Resources data:", data);
  return (
    <Container>
      <Title order={1} ta="center" m={"xl"}>
        實驗室資源與工具
      </Title>
      <Resources data={data}/>
    </Container>
  );
}
