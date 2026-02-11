import yaml from 'js-yaml';
import { getCollection } from 'astro:content';

// Import YAML files as raw strings using Vite's ?raw suffix
import profileRaw from '../data/profile.yaml?raw';
import navigationRaw from '../data/navigation.yaml?raw';
import cvRaw from '../data/cv.yaml?raw';
import newsRaw from '../data/news.yaml?raw';

export const profile = yaml.load(profileRaw) as any;
export const navigation = yaml.load(navigationRaw) as any;
export const cv = yaml.load(cvRaw) as any;
export const news = yaml.load(newsRaw) as any;

// ページ用YAMLを動的に読み込み
// src/data/pages/ にYAMLを追加するだけで自動的にページとして認識される
const pageModules = import.meta.glob('../data/pages/*.yaml', { query: '?raw', eager: true, import: 'default' });

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
