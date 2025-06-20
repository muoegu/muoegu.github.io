import { getMessages, locales } from "@/lib/i18n";
import MainVisual from "@/components/MainVisual";
import { client } from "@/sanity/client";
import Member from "@/section/Member";
import { Flex } from "@mantine/core";
import Alumni from "@/section/Alumni";
import type { Alumni as AlumniType } from "@/types/alumni";
import type { Resource } from "@/types/resource";
import type { Locale, Messages } from "@/types/i18n"; 
import I18nProvider from "@/components/I18nProvider";
import About from "@/section/About";


export async function getStaticPaths() {
  const paths = locales
    .filter((l) => l !== "zh")
    .map((locale) => ({
      params: { locale },
    }));
  return { paths, fallback: false };
}



type HomeProps = {
  alumni: AlumniType[];
  resources: Resource[];
  locale: Locale;
  messages: Messages;
};

export async function getStaticProps({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  const messages = await getMessages(locale);

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
      locale,
      messages,
    },
  };
}

export default function LocalizedHome({ alumni, resources, locale, messages }: HomeProps) {
  return (
    <I18nProvider locale={locale} messages={messages}>
      <Flex direction={"column"} mb={"lg"}>
        <MainVisual />
        {/* <Resources data={resources} /> */}
        <About/>

        <div id="services">{/* <Services /> */}</div>
        <div id="companyInfo">{/* <CompanyInfo /> */}</div>
        <div id="news">{/* <News posts={posts} /> */}</div>
        <div id="member">
          <Member />
        </div>
        <Alumni alumni={alumni} />
      </Flex>
    </I18nProvider>
  );
}
