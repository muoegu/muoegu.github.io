import AlumniList from '@/components/AlumniList';
import { Container, Title } from '@mantine/core';
import React from 'react';
import type { Alumni } from '@/types/alumni';

type Props = {
  alumni: Alumni[];
};

export default function Alumni({ alumni }: Props) {
  return (
    <Container>
      <Title order={1} ta="center" m={"xl"}>
        歷任成員
      </Title>
      <Title order={2} ta="center" m={"xl"}>
        已畢業成員
      </Title>
      <AlumniList data={alumni} tagId="d6fe1376-c1fc-4622-9be3-87a8730accfc" />
      <Title order={2} ta="center" m={"xl"}>
        研究助理＆交換生
      </Title>
      <AlumniList data={alumni} tagId="c5a7056d-e677-4755-a200-2426df6a6c37" />
      <Title order={2} ta="center" m={"xl"}>
        博士後研究員＆專任助理
      </Title>
      <AlumniList data={alumni} tagId="051e76cb-0f03-4149-8a12-096a2bd8e281" />
    </Container>
  );
}
