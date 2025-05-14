"use client";

import React, { useEffect, useState } from "react";
import { Grid } from "@mantine/core";
import { client } from "../../libs/client";
import MemberCard from "./MemberCard";

interface NewsItem {
  image: string;
  researchField: string;
  chineseName: string;
  email: string;
  site: string;
}

export default function MemberCards() {
  const [members, setMembers] = useState<NewsItem[]>([]);
  // const router = useRouter();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await client.get({
          endpoint: "member",
          queries: {
            // fields: "id,title,content,categories",
            limit: 30,
          },
        });
        setMembers(data.contents);
        console.log('member-data',data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    }

    fetchPosts();
  }, []);
  return (
    <Grid>
      {members.map((member, index) => (
        <Grid.Col key={index} span={{ base: 12, md: 3, lg: 3 }}>
          <MemberCard
            image={member.image}
            reserch_instrasts={[member.researchField]}
            name={member.chineseName}
            email={member.email}
            site={member.site}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
}
