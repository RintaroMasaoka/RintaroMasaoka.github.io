export const languages = {
  en: 'English',
  ja: '日本語',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Section labels
    'section.notes': 'Notes',
    'section.tools': 'Tools',

    // Section headings
    'section.career': 'Education and Positions',
    'section.awards': 'Awards & Honors',
    'section.grants': 'Fellowships and Funding',
    'section.skills': 'Skills',
    'section.researchInterests': 'Research Interests',
    'section.recentPublications': 'Recent Publications',
    'section.recentNews': 'News',

    // UI elements
    'ui.viewAll': 'View all',
    'ui.affiliation': 'Affiliation',
    'ui.email': 'Email',
    'ui.downloadPDF': 'Download PDF',

    // Skills
    'skills.programming': 'Programming',
    'skills.tools': 'Tools',
    'skills.languages': 'Languages',

    // CV
    'cv.thesis': 'Thesis',
  },
  ja: {
    // Section labels
    'section.notes': 'ノート',
    'section.tools': 'ツール',

    // Section headings
    'section.career': '学歴・職歴',
    'section.awards': '受賞歴',
    'section.grants': 'フェローシップ・研究支援',
    'section.skills': 'スキル',
    'section.researchInterests': '研究分野',
    'section.recentPublications': '最近の論文',
    'section.recentNews': '最近のニュース',

    // UI elements
    'ui.viewAll': 'すべて見る',
    'ui.affiliation': '所属',
    'ui.email': 'メール',
    'ui.downloadPDF': 'PDFをダウンロード',

    // Skills
    'skills.programming': 'プログラミング',
    'skills.tools': 'ツール',
    'skills.languages': '言語',

    // CV
    'cv.thesis': '論文',
  },
} as const;
