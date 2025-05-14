import AlumniList from '@/components/AlumniList';
import { Container, Title } from '@mantine/core'
import React from 'react'

export default function Alumni() {
  return (
    <Container>
      <Title order={1} ta="center" m={"xl"}>
        歷任成員
      </Title>
      <AlumniList/>
    </Container>
  );
}
