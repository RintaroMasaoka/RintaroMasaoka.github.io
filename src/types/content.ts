// バイリンガルテキスト
export interface BilingualText {
  en: string;
  ja: string;
}

// ページメタデータ
export interface PageMeta {
  title: BilingualText;
  description: BilingualText;
}

// カテゴリ定義
export interface Category {
  id: string;
  label: BilingualText;
}

// リンク
export interface Link {
  label: string;
  url: string;
}

// 統一コンテンツアイテム（すべてのフィールドはオプショナル）
export interface ContentItem {
  title: string | BilingualText;
  category: string;
  // 学術系（publications/presentations）
  year?: number;
  authors?: string[] | BilingualText;
  venue?: string | BilingualText;
  links?: Link[];
  abstract?: string | BilingualText;
  // リソース系（notes/tools）
  description?: string | BilingualText;
  filename?: string;
  url?: string;
  tags?: string[] | BilingualText;
  icon?: string;
  color?: string;
}

// 統一されたページデータ構造
export interface PageData {
  page: PageMeta;
  categories: Category[];
  items: ContentItem[];
}
