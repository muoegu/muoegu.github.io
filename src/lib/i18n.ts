// src/lib/i18n.ts
export const locales = [ 'zh','en'];
export const defaultLocale = 'zh';

// URLパスから現在の言語を取得
export function getLocaleFromPath(path: string): string {
  // パスからロケールを抽出 (例: "/en/about" => "en")
  const segments = path.split('/').filter(Boolean);
  const possibleLocale = segments[0];
  
  if (locales.includes(possibleLocale) && possibleLocale !== defaultLocale) {
    return possibleLocale;
  }
  
  return defaultLocale;
}

// 特定の言語のメッセージを取得
export async function getMessages(locale: string) {
  return (await import(`@/i18n/${locale}.json`)).default;
}

// 言語切り替え用のURL生成
export function getLocalizedPath(path: string, newLocale: string): string {
  const currentLocale = getLocaleFromPath(path);
  
  // 現在のパスから言語部分を削除
  let cleanPath = path;
  if (currentLocale !== defaultLocale) {
    cleanPath = path.replace(`/${currentLocale}`, '') || '/';
  }
  
  // 新しい言語のパスを作成
  if (newLocale === defaultLocale) {
    return cleanPath;
  } else {
    return `/${newLocale}${cleanPath === '/' ? '' : cleanPath}`;
  }
}
