import MemberCards from "@/components/MemberCards";
import {
  Title,
} from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Member() {
  const t = useTranslations("Member");

  
  return (
    <>
      <Title order={1} ta="center" m={"xl"}>
        {t("title")}
      </Title>
      <MemberCards />
    </>
  );
}
