import config from '../note.config.json';

const base = import.meta.env.BASE_URL;
const chapterIds = new Set(config.chapters.map(chapter => chapter.id));

/** Translate authored note paths only when they become browser destinations. */
export function noteUrl(href: string | undefined): string | undefined {
  if (!href || href.startsWith('#') || href.startsWith('//') || /^[a-z][a-z0-9+.-]*:/i.test(href)) return href;
  const relative = href.startsWith(base) ? href.slice(base.length) : href.replace(/^\/+/, '');
  const [, pathname, suffix] = relative.match(/^([^?#]*)(.*)$/)!;
  const chapterId = pathname.replace(/\/$/, '');
  const path = chapterIds.has(chapterId) ? `${chapterId}/` : pathname;
  return `${base}${path}${suffix}`;
}

export function chapterIdFromPath(pathname: string): string | undefined {
  if (!pathname.startsWith(base)) return undefined;
  let id: string;
  try { id = decodeURIComponent(pathname.slice(base.length).split('/')[0]); }
  catch { return undefined; }
  return chapterIds.has(id) ? id : undefined;
}
