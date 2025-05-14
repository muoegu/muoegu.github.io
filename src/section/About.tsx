import AboutFeatures from "@/components/AboutFeatures";
import { Title, Text, Container } from "@mantine/core";

export default function About() {
  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} ta="center" m={"xl"}>
        關於LOPE
      </Title>

      <Text size="lg" style={{ marginBottom: "40px" }}>
        LOPE (Lab of Ontologies, Language Processing, and e-Humanities)
        實驗室是由謝舒凱老師在 2007 年起創立的研究團隊，
        期待以其中世紀原意「大步慢走」(&apos;walk with a long bounding stride&apos;)
        的團隊精神，對於語言研究的基礎建設、自然語言處理與理解、
        與人文社會計算應用領域有所貢獻。實驗室的信念是，希望人文與知識的價值，在計算數位時代被尊重、發揮與創化。本著實證方法、人文關懷與哲學思辨，
        我們已經在語料庫與計算語言學領域發表了超過百餘篇研究，包括 4
        本博士論文、30多本碩士論文，
        以及數件產學技術轉移。我們也竭誠歡迎大學部同學與有志一同的社群夥伴加入我們的研發行列。
      </Text>
      <AboutFeatures/>
    </Container>
  );
}
