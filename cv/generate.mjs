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
const publications = yaml.load(
  readFileSync(resolve(root, "src/data/publications.yaml"), "utf-8")
);

const lang = process.argv[2] || "en";
const l = (obj) => (typeof obj === "string" ? obj : obj[lang] || obj.en);
const separator = lang === "ja" ? "、" : ", ";
const contactLabels =
  lang === "ja"
    ? { affiliation: "所属", email: "メール", website: "ウェブサイト" }
    : { affiliation: "Affiliation", email: "Email", website: "Website" };

// --- Build markdown ---
const lines = [];

lines.push(`# ${l(profile.name)}`);
lines.push("");
lines.push(
  `${contactLabels.affiliation}${lang === "ja" ? "：" : ":"} ${l(profile.affiliation)}<br>`
);
lines.push(
  `${contactLabels.email}${lang === "ja" ? "：" : ":"} ${profile.contact.email}<br>`
);
lines.push(
  `${contactLabels.website}${lang === "ja" ? "：" : ":"} [https://rintaromasaoka.github.io/](https://rintaromasaoka.github.io/)`
);

// Research interests
lines.push("");
lines.push(`## ${lang === "ja" ? "研究概要" : "Research interests"}`);
lines.push("");
lines.push(l(cv.research_interests).trim());

// Education and positions
if (cv.career && cv.career.length > 0) {
  lines.push("");
  lines.push(`## ${lang === "ja" ? "学歴・職歴" : "Education and Positions"}`);
  lines.push("");
  for (const entry of cv.career) {
    lines.push(
      [l(entry.period), l(entry.title), l(entry.institution)].join(separator)
    );
    lines.push("");
  }
}

// Awards
lines.push(`## ${lang === "ja" ? "受賞" : "Awards"}`);
lines.push("");
for (const award of cv.awards) {
  const year = lang === "ja" ? `${award.year}年` : award.year;
  const parts = [year, l(award.name)];
  if (award.description) parts.push(l(award.description));
  lines.push(parts.join(separator));
  lines.push("");
}

// Grants
lines.push(
  `## ${lang === "ja" ? "フェローシップ・研究支援" : "Fellowships and Funding"}`
);
lines.push("");
for (const grant of cv.grants) {
  const parts = [l(grant.title), l(grant.institution)];
  if (grant.amount) parts.push(grant.amount);
  let entry = parts.join(separator);
  if (grant.period) {
    entry +=
      lang === "ja" ? `（${l(grant.period)}）` : ` (${l(grant.period)})`;
  }
  lines.push(entry);
  lines.push("");
}

// Publications
if (publications.items && publications.items.length > 0) {
  lines.push(
    `## <span class="publications-heading">${lang === "ja" ? "論文" : "Publications"}</span>`
  );
  lines.push("");

  for (const category of publications.categories) {
    const items = publications.items.filter(
      (publication) => publication.category === category.id
    );
    if (items.length === 0) continue;

    lines.push(`### ${l(category.label)}`);
    lines.push("");
    lines.push('<div class="publication-list">');

    items.forEach((publication, index) => {
      const authors = publication.authors
        .map((author) =>
          author === profile.name.en ? `<strong>${author}</strong>` : author
        )
        .join(", ");
      lines.push(
        `<div class="publication-entry"><span class="publication-number">${index + 1}.</span><span>${authors}. “${publication.title}.” <em>${publication.venue}</em>.</span></div>`
      );
    });
    lines.push("</div>");
    lines.push("");
  }
}

const markdown = lines.join("\n");

// --- Generate PDF ---
const pdf = await mdToPdf(
  { content: markdown },
  {
    stylesheet: resolve(__dirname, "style.css"),
    document_title:
      lang === "ja"
        ? `${l(profile.name)} - 履歴書`
        : `${l(profile.name)} - Curriculum Vitae`,
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
