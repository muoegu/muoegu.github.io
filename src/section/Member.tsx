import MemberCards from "@/components/MemberCards";
import {
  Title,
} from "@mantine/core";

export default function Member() {
  return (
    <>
      <Title order={1} ta="center" m={"xl"}>
        成員
      </Title>
      <MemberCards />
    </>
  );
}
