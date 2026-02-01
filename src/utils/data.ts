import yaml from 'js-yaml';
import type { PageType } from '../types/content';

// Import YAML files as raw strings using Vite's ?raw suffix
import profileRaw from '../data/profile.yaml?raw';
import navigationRaw from '../data/navigation.yaml?raw';
import cvRaw from '../data/cv.yaml?raw';
import publicationsRaw from '../data/publications.yaml?raw';
import presentationsRaw from '../data/presentations.yaml?raw';
import resourcesRaw from '../data/resources.yaml?raw';
import newsRaw from '../data/news.yaml?raw';

export const profile = yaml.load(profileRaw) as any;
export const navigation = yaml.load(navigationRaw) as any;
export const cv = yaml.load(cvRaw) as any;
export const publications = yaml.load(publicationsRaw) as any;
export const presentations = yaml.load(presentationsRaw) as any;
export const resources = yaml.load(resourcesRaw) as any;
export const news = yaml.load(newsRaw) as any;

// データソースマップ
const dataSources: Record<PageType, any> = {
  publications,
  presentations,
  resources,
};

// 統一インターフェースでページデータを取得
export function getPageData(type: PageType) {
  const data = dataSources[type];
  return {
    page: data.page,
    categories: data.categories,
    items: data.items,
  };
}
