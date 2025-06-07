"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";

export default function NewsDetailClient() {
  const router = useRouter();

  return (
    <Button
      variant="light"
      color="blue"
      fullWidth
      mt="md"
      onClick={() => router.push("/news")}
    >
      お知らせ一覧に戻る
    </Button>
  );
}