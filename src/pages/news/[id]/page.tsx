import { Container, Title, Text } from "@mantine/core";
import { client } from "../../../../libs/client";
import NewsDetailClient from "./NewsDetailClient";

type NewsItem = {
  id: string;
  title: string;
  content: string;
  categories?: { id: string; name: string }[];
};

export async function generateStaticParams() {
  try {
    const data = await client.get({
      endpoint: "news",
      queries: {
        fields: "id",
        limit: 100,
      },
    });

    return data.contents.map((item: NewsItem) => ({
      id: item.id,
    }));
  } catch (error) {
    console.error("Error fetching static params:", error);
    return [];
  }
}

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; 
  const post = await client.get({
    endpoint: "news",
    contentId: resolvedParams.id, 
  });

  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} style={{ marginBottom: "20px" }}>
        {post.title}
      </Title>
      <Text dangerouslySetInnerHTML={{ __html: post.content }} />
      <NewsDetailClient/>
    </Container>
  );
}
