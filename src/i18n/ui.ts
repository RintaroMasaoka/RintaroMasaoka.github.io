export const languages = {
  en: 'English',
  ja: '日本語',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.publications': 'Publications',
    'nav.presentations': 'Presentations',
    'nav.notes': 'Notes',
    'nav.cv': 'CV',

    // Page titles and descriptions
    'page.home.title': 'Academic Website',
    'page.publications.title': 'Publications',
    'page.publications.description': 'List of research publications.',
    'page.presentations.title': 'Presentations',
    'page.presentations.description': 'List of presentations and talks.',
    'page.notes.title': 'Notes',
    'page.notes.description': 'Notes and memos are published here.',
    'page.cv.title': 'Curriculum Vitae',

    // Section headings
    'section.positions': 'Positions',
    'section.education': 'Education',
    'section.awards': 'Awards & Honors',
    'section.grants': 'Grants & Funding',
    'section.skills': 'Skills',
    'section.researchInterests': 'Research Interests',
    'section.recentPublications': 'Recent Publications',

    // UI elements
    'ui.viewAll': 'View all',
    'ui.contact': 'Contact',
    'ui.affiliation': 'Affiliation',
    'ui.email': 'Email',
    'ui.viewCV': 'View CV',
    'ui.downloadPDF': 'Download PDF',
    'ui.topics': 'Topics',
    'ui.mathDemo.title': 'Math Rendering Demo',
    'ui.mathDemo.description': 'This site supports mathematical formula rendering with KaTeX. You can write formulas in Markdown files as follows:',
    'ui.mathDemo.inline': 'Inline math:',
    'ui.mathDemo.block': 'Block math:',
    'ui.mathDemo.note': '* The above is code display. See actual rendering in Markdown pages.',

    // Tools section
    'section.tools': 'Tools',
    'tools.converter.title': 'Unicode ⇌ LaTeX Converter',
    'tools.converter.description': 'A tool to convert between Unicode characters and LaTeX commands.',

    // Skills
    'skills.programming': 'Programming',
    'skills.tools': 'Tools',
    'skills.languages': 'Languages',
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.publications': '論文',
    'nav.presentations': '発表',
    'nav.notes': 'ノート',
    'nav.cv': '履歴書',

    // Page titles and descriptions
    'page.home.title': 'アカデミックサイト',
    'page.publications.title': '論文一覧',
    'page.publications.description': '研究論文の一覧です。',
    'page.presentations.title': '発表一覧',
    'page.presentations.description': '学会発表・講演の一覧です。',
    'page.notes.title': 'ノート',
    'page.notes.description': 'ノートやメモを公開しています。',
    'page.cv.title': '履歴書',

    // Section headings
    'section.positions': '職歴',
    'section.education': '学歴',
    'section.awards': '受賞歴',
    'section.grants': '研究費',
    'section.skills': 'スキル',
    'section.researchInterests': '研究分野',
    'section.recentPublications': '最新の業績',

    // UI elements
    'ui.viewAll': 'すべて見る',
    'ui.contact': 'お問い合わせ',
    'ui.affiliation': '所属',
    'ui.email': 'メール',
    'ui.viewCV': 'CVを見る',
    'ui.downloadPDF': 'PDFをダウンロード',
    'ui.topics': 'トピック',
    'ui.mathDemo.title': '数式レンダリングのデモ',
    'ui.mathDemo.description': 'このサイトでは KaTeX による数式レンダリングをサポートしています。Markdown ファイル内で以下のように数式を記述できます：',
    'ui.mathDemo.inline': 'インライン数式:',
    'ui.mathDemo.block': 'ブロック数式:',
    'ui.mathDemo.note': '※ 上記はコード表示です。実際のレンダリングは Markdown ページで確認できます。',

    // Tools section
    'section.tools': 'ツール',
    'tools.converter.title': 'Unicode ⇌ LaTeX 変換ツール',
    'tools.converter.description': 'Unicode文字とLaTeXコマンドを相互変換するツールです。',

    // Skills
    'skills.programming': 'プログラミング',
    'skills.tools': 'ツール',
    'skills.languages': '言語',
  },
} as const;
