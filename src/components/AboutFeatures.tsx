"use client";

import { Title, Text, Grid, Flex, Image } from "@mantine/core";
import React from "react";

import featuresData from "../data/about/features.json";

export default function AboutFeatures() {
  return (
    <>
      <Grid>
        {featuresData.map((feature, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6 }}>
            <Flex>
              <Image mx={"sm"} src={feature.image} height={50} alt="Norway" />
              <Flex direction={"column"} gap={5}>
                <Title order={4}>{feature.title}</Title>
                <Text c="dimmed">{feature.description}</Text>
              </Flex>
            </Flex>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
