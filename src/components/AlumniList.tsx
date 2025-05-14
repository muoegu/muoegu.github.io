"use client";

import { Container, Text, Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { client } from "../../libs/client";

type NewsItem = {
  id: string;
  title: string;
  content: string;
  categories?: { id: string; name: string }[];
  englishName: string;
  chineseName: string;
  degree: string;
};

export default function AlumniList() {
  const [posts, setPosts] = useState<NewsItem[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await client.get({
          endpoint: "member",
          queries: {
            // fields: "id,title,content,categories",
            filters: "type[contains]alumni",
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
      {/* <Grid gutter="lg"> */}
      {posts.map((post) => (
        //   <Grid.Col key={post.id} span={{ base: 12, sm: 6 }}>
        <Flex key={post.id} direction={"row"}>
          <Text fw={700} size="lg" style={{ marginBottom: "10px" }}>
            {post.englishName || ""}
          </Text>
          <Text> | </Text>
          <Text size="lg" style={{ marginBottom: "10px" }}>
            {post.chineseName || ""}
          </Text>
          <Text>,</Text>
          <Text size="lg" style={{ marginBottom: "10px" }}>
            {post.degree || ""}
          </Text>
        </Flex>
        //   </Grid.Col>/
      ))}
      {/* </Grid> */}
    </Container>
  );
}
