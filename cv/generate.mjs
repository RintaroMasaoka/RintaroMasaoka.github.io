import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "js-yaml";
import { mdToPdf } from "md-to-pdf";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const profile = yaml.load(
  readFileSync(resolve(root, "src/data/site/profile.yaml"), "utf-8")
);
const cv = yaml.load(
  readFileSync(resolve(root, "src/data/cv.yaml"), "utf-8")
);

const lang = process.argv[2] || "en";
const l = (obj) => (typeof obj === "string" ? obj : obj[lang] || obj.en);

// --- Build markdown ---
const lines = [];

lines.push(`# ${l(profile.name)}`);
lines.push("");
lines.push(`Affiliation: ${l(profile.affiliation)}<br>`);
lines.push(`Email: ${profile.contact.email}<br>`);
lines.push(
  `Website: [https://rintaromasaoka.github.io/](https://rintaromasaoka.github.io/)`
);

// Research interests
lines.push("");
lines.push(`## ${lang === "ja" ? "研究概要" : "Research interests"}`);
lines.push("");
lines.push(l(cv.research_interests).trim());

// Positions
if (cv.positions && cv.positions.length > 0) {
  lines.push("");
  lines.push(`## ${lang === "ja" ? "職歴" : "Positions"}`);
  lines.push("");
  for (const pos of cv.positions) {
    lines.push(`${l(pos.period)}, ${l(pos.title)}, ${l(pos.institution)}`);
    lines.push("");
  }
}

// Education
lines.push("");
lines.push(`## ${lang === "ja" ? "学歴" : "Education"}`);
lines.push("");
for (const edu of cv.education) {
  const period = edu.period ? l(edu.period) : edu.year;
  lines.push(`${period}, ${l(edu.degree)}, ${l(edu.institution)}`);
  lines.push("");
}

// Awards
lines.push(`## ${lang === "ja" ? "受賞" : "Awards"}`);
lines.push("");
for (const award of cv.awards) {
  lines.push(`${award.year}, ${l(award.name)}, ${l(award.description)}`);
  lines.push("");
}

// Grants
lines.push(`## ${lang === "ja" ? "研究費" : "Grants"}`);
lines.push("");
for (const grant of cv.grants) {
  const parts = [l(grant.title), l(grant.institution)];
  if (grant.amount) parts.push(grant.amount);
  if (grant.period) parts.push(`(${l(grant.period)})`);
  lines.push(parts.join(", "));
  lines.push("");
}

const markdown = lines.join("\n");

// --- Generate PDF ---
const pdf = await mdToPdf(
  { content: markdown },
  {
    stylesheet: resolve(__dirname, "style.css"),
    pdf_options: {
      format: "A4",
      margin: { top: "25mm", bottom: "25mm", left: "25mm", right: "25mm" },
      printBackground: true,
    },
    launch_options: {
      executablePath:
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    },
  }
);

const suffix = lang === "en" ? "" : `_${lang}`;
const dest = resolve(root, `public/cv${suffix}.pdf`);
writeFileSync(dest, pdf.content);
console.log(`Generated ${dest}`);
