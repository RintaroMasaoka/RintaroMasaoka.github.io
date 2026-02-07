import fs from 'node:fs';
import path from 'node:path';

export interface PrerequisiteItem {
  title: string;
  url: string;
  date: Date;
}

export function getPrerequisites(): PrerequisiteItem[] {
  const dir = path.join(process.cwd(), 'public/prerequisites');

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html'));

  return files
    .map((filename) => {
      const filepath = path.join(dir, filename);
      const content = fs.readFileSync(filepath, 'utf-8');
      const titleMatch = content.match(/<title>(.+?)<\/title>/);
      const stat = fs.statSync(filepath);

      return {
        title: titleMatch ? titleMatch[1] : filename.replace('.html', ''),
        url: `/prerequisites/${filename}`,
        date: stat.mtime,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
