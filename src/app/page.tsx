import MainVisual from "@/components/MainVisual";
import News from "@/components/News";
import About from "@/section/About";
import Alumni from "@/section/Alumni";
import Member from "@/section/Member";
// import CompanyInfo from "@/section/CompanyInfo";
// import Services from "@/section/Services";
import { Flex } from "@mantine/core";

export default function Home() {
  return (
    <Flex direction={"column"} mb={"lg"}>
      <MainVisual />
      <div id="news">
        <News />
      </div>
      <About />
      <Member />
      <div id="news">
        <Alumni />
      </div>
      {/* <Services /> */}
      {/* <CompanyInfo /> */}
      {/* <InfoBar /> */}
      {/* <MainVisual /> */}
    </Flex>
  );
}
