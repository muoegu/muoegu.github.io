import MainVisual from "@/components/MainVisual";
import { client } from "@/sanity/client";
import Member from "@/section/Member";
import { Flex } from "@mantine/core";
import Alumni from "@/section/Alumni";
import Resources from "@/section/Resources";
import type { Alumni as AlumniType } from "@/types/alumni";
import type { Resource } from "@/types/resource";

type HomeProps = {
  alumni: AlumniType[];
  resources: Resource[];
};

export async function getStaticProps() {
  const alumni = await client.fetch(
    `*[_type == "alumni"] | order(order asc){
      _id,
      english_name,
      chinese_name,
      degree,
      tag[]->{_id, title},
      order
    }`
  );

  const resources = await client.fetch(
    `*[_type == "resource"] | order(order asc){
      _id,
      title,
      tag[]->{_id, title},
      order,
      mainImage,
      url,
      description
    }`
  );

  return {
    props: {
      alumni,
      resources,
    },
  };
}

export default function Home({ alumni, resources }: HomeProps) {
  return (
    <Flex direction={"column"} mb={"lg"}>
      <MainVisual />
      {/* <Resources data={resources} /> */}

      <div id="services">{/* <Services /> */}</div>
      <div id="companyInfo">{/* <CompanyInfo /> */}</div>
      <div id="news">{/* <News posts={posts} /> */}</div>
      <div id="member">
        <Member />
      </div>
      <Alumni alumni={alumni} />
    </Flex>
  );
}
