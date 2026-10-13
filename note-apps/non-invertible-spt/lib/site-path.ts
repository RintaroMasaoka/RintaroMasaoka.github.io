/** Public files and native anchors need the deployment prefix explicitly. */
const deploymentBase = import.meta.env.VITE_SITE_BASE_PATH
  || (typeof process !== 'undefined' ? process.env.VITE_SITE_BASE_PATH : '')
  || '';
export const siteBasePath = deploymentBase.replace(/\/$/, '');

export function sitePath(path: string | undefined) {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return path;
  return `${siteBasePath}${path}`;
}

export function chapterIdFromPath(pathname: string) {
  const relative = siteBasePath && pathname.startsWith(siteBasePath + '/')
    ? pathname.slice(siteBasePath.length) : pathname;
  return relative.split('/').filter(Boolean)[0];
}
