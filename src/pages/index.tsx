import MainVisual from "@/components/MainVisual";
import { client } from "@/sanity/client";
import Alumni from "@/section/alumni/Alumni";
import Member from "@/section/Member";
import { Flex } from "@mantine/core";
import { Alumni as AlumniType } from "@/types/alumni";

type HomeProps = {
  alumni: AlumniType[];
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

  return {
    props: {
      alumni,
    },
  };
}

export default function Home({ alumni }: HomeProps) {
  return (
    <Flex direction={"column"} mb={"lg"}>
      <MainVisual />
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
