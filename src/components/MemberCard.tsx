"use client";

import { ActionIcon, Badge, Card, Flex, Group, Image, Title } from "@mantine/core";
import React from "react";
import { IconMail, IconLink } from "@tabler/icons-react";

interface MemberCardProps {
  image: string;
  name: string;
  email: string;
  site: string;
  reserch_instrasts: string[];
}

export default function MemberCard({
  image,
  name,
  email,
  site,
  reserch_instrasts,
}: MemberCardProps) {
  return (
    <>
      <Card shadow="sm" m={-4} padding={0} radius={"md"} withBorder>
        <Card.Section>
          <Image src={image} height={160} alt={name} />
        </Card.Section>

        <Flex direction="column" m={"sm"} gap="xs">
          <Title order={4}>{name}</Title>
          
          {/* 研究分野をBadgeで表示 */}
          <Group>
            {reserch_instrasts && reserch_instrasts.map((interest, index) => (
              <Badge 
                key={index} 
                color="blue" 
                variant="light"
                size="sm"
                radius="sm"
              >
                {interest}
              </Badge>
            ))}
          </Group>
        </Flex>
        
        <Flex justify={"center"} gap={"md"} mb="sm">
          <ActionIcon
            component="a"
            href={`mailto:${email}`}
            variant="light"
            color="green"
            aria-label="Email"
            radius="xl"
            style={{ width: 40, height: 40 }}
          >
            <IconMail style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={site}
            target="_blank"
            variant="light"
            color="blue"
            aria-label="site"
            radius="xl"
            style={{ width: 40, height: 40 }}
          >
            <IconLink style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
        </Flex>
      </Card>
    </>
  );
}
