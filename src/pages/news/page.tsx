"use client";

import {
  Container,
  Grid,
  Card,
  Text,
  Title,
  Badge,
  Group,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import { client } from "../../../libs/client";

type NewsItem = {
  id: string;
  title: string;
  content: string;
  categories?: { id: string; name: string }[];
};

export default function NewsArchive() {
  const [posts, setPosts] = useState<NewsItem[]>([]);
  const router = useRouter(); 

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await client.get({
          endpoint: "news",
          queries: {
            fields: "id,title,content,categories",
            limit: 10,
          },
        });
        setPosts(data.contents);
        console.log(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} ta="center" m="xl">
        お知らせ一覧
      </Title>

      <Grid gutter="lg">
        {posts.map((post) => (
          <Grid.Col key={post.id} span={{ base: 12, sm: 6 }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/news/${post.id}`)}
            >
              <Group style={{ marginBottom: "10px" }}>
                {post.categories?.map((category) => (
                  <Badge key={category.id} color="teal" variant="light">
                    {category.name || "カテゴリなし"}
                  </Badge>
                ))}
              </Group>

              <Text fw={700} size="lg" style={{ marginBottom: "10px" }}>
                {post.title || "タイトルなし"}
              </Text>

              <Text
                lineClamp={3}
                size="sm"
                color="dimmed"
                style={{ marginBottom: "10px" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
