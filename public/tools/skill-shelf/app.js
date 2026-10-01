const packages = {
  "physics-paper": {
    version: "0.1.5",
    title: "Physics Paper",
    license: "MIT License",
    description: "Physics research-paper introductions grounded in the manuscript, literature, readership, and venue.",
    skills: ["introduction"],
  },
  "academic-writing": {
    version: "0.2.2",
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
    version: "0.1.1",
    title: "Research Workflow",
    license: "MIT License",
    description: "A structured theoretical-physics research cycle with bounded investigation, independent checks, and research memory initialized as needed.",
    skills: ["auto-research", "research-planner", "direction-challenger", "researcher", "critic", "curator", "guide-writer"],
  },
  "study-notes": {
    version: "0.1.0",
    title: "Study Notes",
    license: "MIT License",
    description: "Create and revise scholarly study notes. Includes an optional HTML manuscript specification; a renderer is not bundled.",
    skills: ["study-note"],
  },
  "ai-bias": {
    version: "0.1.0",
    title: "AI Bias",
    license: "MIT License",
    description: "Recognize and correct recurring biases in AI reasoning, writing, and revision. Includes 19 patterns across five categories, with explanations, practical checks, and remedies. English instructions; responses follow your requested language.",
    skills: ["ai-bias-check"],
  },
};

const dialog = document.querySelector("#package-dialog");
const title = document.querySelector("#dialog-title");
const description = document.querySelector("#dialog-description");
const skillList = document.querySelector("#dialog-skills");
const packageVersion = document.querySelector("#package-version");
const licenseLabel = document.querySelector("#license-label");

let currentPackage;
let chapterIndex = 0;
let requestId = 0;
let readerPromise;
const chapterBody = document.querySelector('#chapter-body');
const previous = document.querySelector('#previous-chapter');
const next = document.querySelector('#next-chapter');

async function openChapter(index, documentPath) {
  chapterIndex = index;
  const data = packages[currentPackage];
  const identity = documentPath || `${currentPackage}:${data.skills[index]}`;
  document.querySelector("#back-to-skill").hidden = !documentPath;
  const request = ++requestId;
  document.querySelector('#chapter-label').textContent = documentPath ? documentPath.split('/').at(-1).replace(/\.md$/, '') : identity;
  document.querySelector('#page-number').textContent = `${index + 1} / ${data.skills.length}`;
  previous.disabled = index === 0;
  next.disabled = index === data.skills.length - 1;
  skillList.querySelectorAll('button').forEach((button, i) => {
    if (i === index) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  chapterBody.textContent = 'Opening chapter…';
  const source = document.querySelector('#chapter-source');
  source.hidden = true;
  try {
    readerPromise ??= fetch('./reader.json').then((response) => {
      if (!response.ok) throw new Error('Could not load chapters');
      return response.json();
    }).catch((error) => { readerPromise = undefined; throw error; });
    const chapters = await readerPromise;
    if (request !== requestId) return;
    if (!chapters[identity]) throw new Error('Chapter missing');
    chapterBody.innerHTML = chapters[identity].html;
    source.href = chapters[identity].source;
    source.hidden = false;
    chapterBody.scrollTop = 0;
    document.querySelector('.reading-page').scrollTop = 0;
  } catch (error) {
    if (request !== requestId) return;
    chapterBody.textContent = 'This chapter could not be opened. ';
    const retry = document.createElement('button');
    retry.textContent = 'Try again';
    retry.addEventListener('click', () => openChapter(index));
    chapterBody.append(retry);
  }
}

function openPackage(packageName) {
  const data = packages[packageName];
  if (!data) return;
  currentPackage = packageName;
  title.textContent = data.title;
  description.textContent = data.description;
  packageVersion.textContent = `Version ${data.version}`;
  licenseLabel.textContent = `License: ${data.license}`;
  skillList.replaceChildren(...data.skills.map((skill, index) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = skill;
    button.addEventListener('click', () => openChapter(index));
    item.append(button);
    return item;
  }));
  dialog.showModal();
  openChapter(0);
}

previous.addEventListener('click', () => openChapter(chapterIndex - 1));
next.addEventListener('click', () => openChapter(chapterIndex + 1));
document.querySelectorAll('.package-open').forEach((button) => {
  button.addEventListener('click', () => openPackage(button.dataset.package));
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

chapterBody.addEventListener('click', (event) => {
  const link = event.target.closest('a[data-document]');
  if (!link) return;
  event.preventDefault();
  openChapter(chapterIndex, link.dataset.document);
});
document.querySelector('#back-to-skill').addEventListener('click', () => openChapter(chapterIndex));
