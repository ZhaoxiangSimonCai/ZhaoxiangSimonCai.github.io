import { strings, type Lang } from './strings';

export type { Lang } from './strings';
export { strings, expRoleZh, expCompanyZh, expDescZh, educationZh, awardsZh, skillGroupsZh, serviceItemsZh, teachingZh } from './strings';

export const LANGS: readonly Lang[] = ['en', 'zh'];

/** Detect language from a path. /zh, /zh/, /zh/foo → zh; everything else → en. */
export function getLang(pathname: string): Lang {
  if (pathname === '/zh' || pathname === '/zh/' || pathname.startsWith('/zh/')) {
    return 'zh';
  }
  return 'en';
}

/** Strip the locale prefix from a path so we can re-prefix for another lang. */
export function stripLocale(pathname: string): string {
  if (pathname === '/zh' || pathname === '/zh/') return '/';
  if (pathname.startsWith('/zh/')) return pathname.slice(3);
  return pathname;
}

/** Add the locale prefix for a given lang. EN is at root. */
export function withLocale(pathname: string, lang: Lang): string {
  const bare = stripLocale(pathname);
  if (lang === 'en') return bare;
  if (bare === '/') return '/zh/';
  return `/zh${bare}`;
}

/** Path to switch language while keeping the same logical page. */
export function oppositePath(pathname: string): string {
  const current = getLang(pathname);
  const next: Lang = current === 'en' ? 'zh' : 'en';
  return withLocale(pathname, next);
}

export function t(lang: Lang) {
  return strings[lang];
}
