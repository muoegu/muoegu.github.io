import { Select } from "@mantine/core";
import { useRouter, usePathname } from "next/navigation";
import { getLocalizedPath, locales } from "@/lib/i18n";

const languageNames: Record<string, string> = {
  ja: "日本語",
  en: "English",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
  zh: "中文",
  ko: "한국어",
  ru: "Русский",
  pt: "Português",
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Select
      data={locales.map((locale) => ({
        value: locale,
        label: languageNames[locale] || locale,
      }))}
      placeholder="言語を選択"
      onChange={(locale) => {
        if (locale) {
          router.push(getLocalizedPath(pathname, locale));
        }
      }}
      w={80}
      size="xs"
    />
  );
}
