import { Grid, Card, Image, Text, Button } from "@mantine/core";
import type { Resource } from "@/types/resource";

type Props = {
  data: Resource[];
};

export default function ResourcesCards({ data }: Props) {
  return (
    <Grid gutter="lg">
      {data.map((resource, index) => (
        <Grid.Col key={resource._id ?? index} span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder h={350}>
            <Card.Section>
              <Image
                src={resource.mainImage?.asset?.url || ""}
                alt={resource.title}
                height={130}
                fit="cover"
              />
            </Card.Section>
            <Text fw={700} size="lg" mt="md" mb="md">
              {resource.title}
            </Text>
            <Text size="sm" color="dimmed" mb="lg">
              {resource.description}
            </Text>
            <Button
              component="a"
              href={resource.url}
              target="_blank"
              variant="light"
              color="blue"
              fullWidth
            >
              查看更多
            </Button>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}