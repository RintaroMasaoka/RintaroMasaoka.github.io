import yaml from 'js-yaml';
import { getCollection } from 'astro:content';

// Import YAML files as raw strings using Vite's ?raw suffix
import profileRaw from '../data/site/profile.yaml?raw';
import navigationRaw from '../data/site/navigation.yaml?raw';
import homeIntroRaw from '../data/home/intro.yaml?raw';
import newsRaw from '../data/home/news.yaml?raw';
import cvRaw from '../data/cv.yaml?raw';

export const profile = yaml.load(profileRaw) as any;
export const navigation = yaml.load(navigationRaw) as any;
export const home = yaml.load(homeIntroRaw) as any;
export const news = yaml.load(newsRaw) as any;
export const cv = yaml.load(cvRaw) as any;

// リストページ用YAMLを動的に読み込み
// - 直下: publications.yaml, presentations.yaml（トップナビ直下ページ）
// - others/: notes.yaml, tools.yaml, ai-gen-articles.yaml（Others サブメニュー）
const topLevelPageModules = import.meta.glob('../data/{publications,presentations}.yaml', { query: '?raw', eager: true, import: 'default' });
const othersPageModules = import.meta.glob('../data/others/*.yaml', { query: '?raw', eager: true, import: 'default' });
const pageModules = { ...topLevelPageModules, ...othersPageModules };

// ページデータを動的に構築
const dataSources: Record<string, any> = {};
const pageTypes: string[] = [];

for (const path in pageModules) {
  const fileName = path.split('/').pop()?.replace('.yaml', '') || '';
  const content = yaml.load(pageModules[path] as string) as any;
  dataSources[fileName] = content;
  pageTypes.push(fileName);
}

// 利用可能なページタイプを取得
export function getPageTypes(): string[] {
  return pageTypes;
}

// 統一インターフェースでページデータを取得
// collection フィールドがある場合は Content Collections から自動取得
export async function getPageData(type: string) {
  const data = dataSources[type];
  if (!data) {
    throw new Error(`Unknown page type: ${type}`);
  }

  let items = data.items || [];

  // Content Collections から自動取得
  if (data.collection) {
    const collectionItems = await getCollection(data.collection);
    const sortedItems = collectionItems.sort((a, b) => {
      const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
      const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
      return dateB - dateA;
    });

    // Content Collections のアイテムを統一フォーマットに変換
    const collectionFormatted = sortedItems.map((item) => ({
      title: item.data.title,
      category: data.categories?.[0]?.id || 'default',
      url: `/${data.collection}/${item.slug}`,
      description: item.data.description || `arXiv:${item.data.arxiv || ''}`,
      tags: item.data.tags,
    }));

    items = [...items, ...collectionFormatted];
  }

  return {
    page: data.page,
    categories: data.categories,
    items,
  };
}
