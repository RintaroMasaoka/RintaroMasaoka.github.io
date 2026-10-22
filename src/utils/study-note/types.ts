/** Adapters supply manuscript data, never reader chrome. */
export type StudyNoteHeading = { id: string; depth: number; text?: string; label?: string; labelHtml?: string; href?: string; chapterId?: string };
export type StudyNoteChapter = { id: string; section?: string; title: string; titleHtml?: string; description?: string; plainTitle?: string; plainDescription?: string; file?: string; href?: string };
export type StudyNote = {
  specVersion?: string; id: string; title: string; description?: string; language?: string;
  source?: { title: string; authors?: string[]; locator?: string };
  chapters: StudyNoteChapter[];
  reader?: { mode?: 'continuous' | 'routed' | (string & {}); basePath?: string; notesHref?: string; equationScope?: 'note' | (string & {}); themeKeys?: string[] };
  resources?: { label: string; href: string }[];
};
export type PreviewEntry = { html: string; title?: string; href?: string; heading?: string };
export type PreviewIndex = Record<string, PreviewEntry | string>;
