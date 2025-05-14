"use client";

import {
  Container,
  Grid,
  Card,
  Text,
  Title,
  Badge,
  Button,
  Flex,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "../../libs/client";

type NewsItem = {
  id: string;
  title: string;
  content: string;
  date: string;
  tag: string;
  categories?: { id: string; name: string }[];
};

export default function News() {
  const [posts, setPosts] = useState<NewsItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await client.get({
          endpoint: "news",
          queries: {
            fields: "id,title,content,categories",
            limit: 4,
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
      <Title order={1} ta="center" m={"xl"}>
        最新消息
      </Title>

      <Grid gutter="lg">
        {posts.map((post) => (
          <Grid.Col key={post.id} span={{ base: 12, sm: 6 }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              h={200}
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/news/${post.id}`)}
            >
              <Flex gap={"sm"}>
                {/* <Text size="xs" c="dimmed">
                  {post.date.split("T")[0]}
                </Text> */}
                <Badge color="blue" variant="light">
                  {post.tag}
                </Badge>
              </Flex>

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
      <Flex justify={"center"}>
        <Button
          variant="light"
          color="blue"
          w={160}
          mt="md"
          onClick={() => router.push(`/news`)}
        >
          更多
        </Button>
      </Flex>
    </Container>
  );
}
