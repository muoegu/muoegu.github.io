import { Container, Text, SimpleGrid, Group } from "@mantine/core";
import { Alumni } from "@/types/alumni";

type Props = {
  data: Alumni[];
  tagId?: string;
};

export default function AlumniList({ data, tagId }: Props) {
  const filtered = tagId
    ? data.filter(a => (a.tag ?? []).some(t => t._id === tagId))
    : data;

  return (
    <Container>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        {filtered.map((a) => (
          <Group gap={"xs"} key={a._id}>
            <Text fw={700}>{a.english_name}</Text>
            <Text>｜</Text>
            <Text>{a.chinese_name}</Text>
            <Text>,</Text>
            <Text>{a.degree}</Text>
          </Group>
        ))}
      </SimpleGrid>
    </Container>
  );
}