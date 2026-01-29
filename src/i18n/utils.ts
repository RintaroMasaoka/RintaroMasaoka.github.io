import { ui, defaultLang, type Lang } from './ui';

export type { Lang };
export { defaultLang };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en' || lang === 'ja') {
    return lang;
  }
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  // Remove existing language prefix if present
  const pathWithoutLang = currentPath.replace(/^\/(en|ja)/, '');
  const cleanPath = pathWithoutLang || '/';

  // English has no prefix (prefixDefaultLocale: false)
  if (targetLang === 'en') {
    return cleanPath;
  }
  // Other languages get prefix
  return `/${targetLang}${cleanPath === '/' ? '' : cleanPath}`;
}

// Helper to get localized value from bilingual data
export function localize<T>(
  data: { en: T; ja: T } | T,
  lang: Lang
): T {
  if (data && typeof data === 'object' && 'en' in data && 'ja' in data) {
    return (data as { en: T; ja: T })[lang];
  }
  return data as T;
}
