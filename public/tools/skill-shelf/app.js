const packages = {
  "physics-paper": {
    version: "0.1.5",
    title: "Physics Paper",
    license: "MIT License",
    description: "Physics research-paper introductions grounded in the manuscript, literature, readership, and venue.",
    skills: ["introduction"],
  },
  "academic-writing": {
    version: "0.2.3",
    title: "Academic Writing",
    license: "MIT License · includes CC BY 4.0 material",
    description: "Scoped authoring and review skills with shared evidence and reader conventions.",
    skills: ["abstract", "claim-audit", "exposition", "figures", "introduction", "notation", "prose-review", "sentence-revision", "terminology"],
  },
  nogap: {
    version: "0.1.0",
    title: "Nogap",
    license: "MIT License",
    description: "Detect, repair, and verify reader-facing gaps in rigorous explanations.",
    skills: ["nogap-scan", "nogap-fill", "nogap-ja-friction", "nogap-verify", "nogap-run"],
  },
  manim: {
    version: "0.1.0+codex.20260820030822",
    title: "Manim",
    license: "MIT License",
    description: "Source-grounded mathematical animation from requirements through verification.",
    skills: ["3b1b", "argument-clip-orchestrator", "argument-clip-requirements", "manim-asset-implementer", "manim-asset-system", "manim-audience-state-review", "manim-clip-implementer", "manim-clip-verifier", "manim-math-derivation", "manim-slides-deck", "manim-static-figures", "manim-visual-planner", "manim-visual-review"],
  },
  "research-workflow": {
    version: "0.1.2",
    title: "Research Workflow",
    license: "MIT License",
    description: "A structured theoretical-physics research cycle with bounded investigation, independent checks, and research memory initialized as needed.",
    skills: ["auto-research", "research-planner", "direction-challenger", "researcher", "critic", "curator", "guide-writer"],
  },
  "study-notes": {
    version: "0.1.1",
    title: "Study Notes",
    license: "MIT License",
    description: "Create and revise scholarly study notes. Includes an optional HTML manuscript specification; a renderer is not bundled.",
    skills: ["study-note"],
  },
  "ai-bias": {
    version: "0.4.0",
    title: "AI Bias",
    license: "MIT License",
    description: "Recognize and correct recurring biases in AI reasoning, writing, and revision. Includes 23 patterns across five categories, with explanations, checks, and remedies for reasoning and phrasing—including invented terms, drafting residue, and unsupported rhetorical contrasts. English instructions; responses follow your requested language.",
    skills: ["ai-bias-check"],
  },
};

const dialog = document.querySelector('#package-dialog');
const title = document.querySelector('#dialog-title');
const description = document.querySelector('#dialog-description');
const skillList = document.querySelector('#dialog-skills');
const packageVersion = document.querySelector('#package-version');
const licenseLabel = document.querySelector('#license-label');
const chapterBody = document.querySelector('#chapter-body');
const previous = document.querySelector('#previous-chapter');
const next = document.querySelector('#next-chapter');
const backToSkill = document.querySelector('#back-to-skill');
const source = document.querySelector('#chapter-source');

let currentPackage;
let chapterIndex = 0;
let requestId = 0;
let readerPromise;
let chapters = [];

function loadReader() {
  readerPromise ??= fetch('./reader.json').then(response => {
    if (!response.ok) throw new Error('Could not load chapters');
    return response.json();
  }).catch(error => { readerPromise = undefined; throw error; });
  return readerPromise;
}

function skillPath(packageName, skill) {
  return `${packageName}/skills/${skill}/SKILL.md`;
}

function openChapter(index, fragment = '', moveToText = false) {
  const chapter = chapters[index];
  if (!chapter) return;
  chapterIndex = index;
  const parent = chapter.skill && skillPath(currentPackage, chapter.skill);
  backToSkill.hidden = !parent || parent === chapter.path;
  backToSkill.dataset.document = parent || '';
  document.querySelector('#chapter-label').textContent = chapter.title;
  document.querySelector('#page-number').textContent = `${index + 1} / ${chapters.length}`;
  previous.disabled = index === 0;
  next.disabled = index === chapters.length - 1;
  skillList.querySelectorAll('button[data-document]').forEach(button => {
    if (button.dataset.document === chapter.path) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  chapterBody.innerHTML = chapter.html;
  source.href = chapter.source;
  source.hidden = false;
  document.querySelector('.reading-page').scrollTop = 0;
  if (moveToText && window.matchMedia('(max-width: 760px)').matches) {
    document.querySelector('.reading-page').scrollIntoView({block: 'start'});
  }
  if (fragment) {
    let id = fragment;
    try { id = decodeURIComponent(fragment); } catch { /* Retain a literal fragment. */ }
    const target = Array.from(chapterBody.querySelectorAll('[id]')).find(node => node.id === id);
    target?.scrollIntoView({block: 'start'});
  }
  if (moveToText) chapterBody.focus({preventScroll: true});
}

function appendDocument(list, chapter, label = chapter.title) {
  const item = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = label;
  button.dataset.document = chapter.path;
  button.title = chapter.path.split('/').slice(1).join('/');
  item.append(button);
  list.append(item);
  chapters.push(chapter);
  return item;
}

function buildContents(reader, packageName) {
  chapters = [];
  skillList.replaceChildren();
  // Canonical file keys exclude the skill aliases in reader.json.
  const documents = Object.entries(reader)
    .filter(([key, doc]) => key === doc.path && doc.package === packageName)
    .map(([, doc]) => doc)
    .sort((a, b) => a.title.localeCompare(b.title, 'en', {numeric: true}) || a.path.localeCompare(b.path));
  const included = new Set();
  for (const skill of packages[packageName].skills) {
    const main = documents.find(doc => doc.path === skillPath(packageName, skill));
    if (!main) throw new Error(`Missing skill: ${skill}`);
    const item = appendDocument(skillList, main, skill);
    included.add(main.path);
    const references = documents.filter(doc => doc.skill === skill && doc.path !== main.path);
    if (references.length) {
      const label = document.createElement('span');
      label.className = 'reference-label';
      label.textContent = 'Supporting documents';
      const list = document.createElement('ul');
      list.className = 'reference-list';
      item.append(label, list);
      for (const doc of references) {
        appendDocument(list, doc);
        included.add(doc.path);
      }
    }
  }
  const shared = documents.filter(doc => !included.has(doc.path));
  if (shared.length) {
    const group = document.createElement('li');
    group.className = 'contents-group';
    const heading = document.createElement('h4');
    heading.textContent = 'Package references & guides';
    const list = document.createElement('ul');
    list.className = 'reference-list shared-references';
    group.append(heading, list);
    skillList.append(group);
    shared.forEach(doc => appendDocument(list, doc));
  }
}

async function openPackage(packageName, documentPath, fragment = '', moveToText = false) {
  const data = packages[packageName];
  if (!data) return;
  const request = ++requestId;
  currentPackage = packageName;
  chapters = [];
  title.textContent = data.title;
  description.textContent = data.description;
  packageVersion.textContent = `Version ${data.version}`;
  licenseLabel.textContent = `License: ${data.license}`;
  skillList.replaceChildren();
  chapterBody.textContent = 'Opening chapters…';
  document.querySelector('#chapter-label').textContent = '';
  document.querySelector('#page-number').textContent = '';
  previous.disabled = next.disabled = true;
  backToSkill.hidden = source.hidden = true;
  if (!dialog.open) dialog.showModal();
  document.querySelector('.contents-page').scrollTop = 0;
  dialog.scrollTop = 0;
  try {
    const reader = await loadReader();
    if (request !== requestId) return;
    buildContents(reader, packageName);
    const index = documentPath ? chapters.findIndex(doc => doc.path === documentPath) : 0;
    if (index < 0) throw new Error('Document missing');
    openChapter(index, fragment, moveToText);
  } catch {
    if (request !== requestId) return;
    chapters = [];
    skillList.replaceChildren();
    chapterBody.textContent = 'This package could not be opened. ';
    const retry = document.createElement('button');
    retry.textContent = 'Try again';
    retry.addEventListener('click', () => openPackage(packageName, documentPath, fragment, moveToText));
    chapterBody.append(retry);
  }
}

function openDocument(path, fragment = '') {
  const index = chapters.findIndex(doc => doc.path === path);
  if (index >= 0) openChapter(index, fragment, true);
  else openPackage(path.split('/')[0], path, fragment, true);
}

previous.addEventListener('click', () => openChapter(chapterIndex - 1, '', true));
next.addEventListener('click', () => openChapter(chapterIndex + 1, '', true));
skillList.addEventListener('click', event => {
  const button = event.target.closest('button[data-document]');
  if (button) openDocument(button.dataset.document);
});
document.querySelectorAll('.package-open').forEach(button => {
  button.addEventListener('click', () => openPackage(button.dataset.package));
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => { ++requestId; });
chapterBody.addEventListener('click', event => {
  const link = event.target.closest('a[data-document]');
  if (!link) return;
  event.preventDefault();
  openDocument(link.dataset.document, link.dataset.fragment);
});
backToSkill.addEventListener('click', () => openDocument(backToSkill.dataset.document));
