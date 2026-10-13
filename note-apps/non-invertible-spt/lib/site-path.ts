/** Public files and native anchors need the deployment prefix explicitly. */
export const siteBasePath = (import.meta.env.VITE_SITE_BASE_PATH ?? '').replace(/\/$/, '');

export function sitePath(path: string | undefined) {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return path;
  return `${siteBasePath}${path}`;
}

export function chapterIdFromPath(pathname: string) {
  const relative = siteBasePath && pathname.startsWith(siteBasePath + '/')
    ? pathname.slice(siteBasePath.length) : pathname;
  return relative.split('/').filter(Boolean)[0];
}
