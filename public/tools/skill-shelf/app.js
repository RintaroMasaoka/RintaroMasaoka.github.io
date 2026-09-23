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
};

const dialog = document.querySelector("#package-dialog");
const title = document.querySelector("#dialog-title");
const description = document.querySelector("#dialog-description");
const skillList = document.querySelector("#dialog-skills");
const packageVersion = document.querySelector("#package-version");
const licenseLabel = document.querySelector("#license-label");

function openPackage(packageName) {
  const data = packages[packageName];
  if (!data) return;

  title.textContent = data.title;
  description.textContent = data.description;
  packageVersion.textContent = `Version ${data.version}`;
  licenseLabel.textContent = `License: ${data.license}`;
  skillList.replaceChildren(...data.skills.map((skill) => {
    const item = document.createElement("li");
    item.textContent = `${packageName}:${skill}`;
    return item;
  }));

  dialog.showModal();
}

document.querySelectorAll(".package-open").forEach((button) => {
  button.addEventListener("click", () => openPackage(button.dataset.package));
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
