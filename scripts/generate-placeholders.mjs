/**
 * One-off dev utility: generates gradient placeholder imagery for the portfolio
 * content layer (avatar, project covers/gallery, certificates) so the site
 * looks complete before real assets are swapped in.
 *
 * Run with: node scripts/generate-placeholders.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..", "public", "images");

const GRADIENTS = [
  ["#3B82F6", "#06B6D4"],
  ["#06B6D4", "#8B5CF6"],
  ["#8B5CF6", "#3B82F6"],
  ["#3B82F6", "#8B5CF6"],
];

function svgCard({ width, height, title, subtitle, gradient, pattern = true }) {
  const [from, to] = gradient;
  const id = Math.random().toString(36).slice(2, 8);
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${from}" />
        <stop offset="100%" stop-color="${to}" />
      </linearGradient>
      <radialGradient id="glow-${id}" cx="50%" cy="0%" r="80%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="#020617" />
    <rect width="${width}" height="${height}" fill="url(#grad-${id})" opacity="0.9" />
    <rect width="${width}" height="${height}" fill="url(#glow-${id})" />
    ${
      pattern
        ? Array.from({ length: 6 })
            .map(
              (_, i) =>
                `<circle cx="${(i * width) / 5}" cy="${height * 0.15 + (i % 2) * height * 0.6}" r="${
                  Math.min(width, height) * 0.18
                }" fill="#ffffff" opacity="0.05" />`
            )
            .join("")
        : ""
    }
    <rect width="${width}" height="${height}" fill="#020617" opacity="0.18" />
    <text x="50%" y="${subtitle ? "46%" : "50%"}" text-anchor="middle" dominant-baseline="middle"
      font-family="Arial, Helvetica, sans-serif" font-weight="700"
      font-size="${Math.round(Math.min(width, height) * 0.09)}" fill="#F8FAFC">${title}</text>
    ${
      subtitle
        ? `<text x="50%" y="58%" text-anchor="middle" dominant-baseline="middle" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="${Math.round(
            Math.min(width, height) * 0.045
          )}" fill="#F8FAFC" opacity="0.85">${subtitle}</text>`
        : ""
    }
  </svg>`;
}

async function render(filePath, options) {
  await mkdir(path.dirname(filePath), { recursive: true });
  const svg = svgCard(options);
  await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(filePath);
  console.log("generated:", path.relative(process.cwd(), filePath));
}

async function main() {
  let gradientIndex = 0;
  const nextGradient = () => GRADIENTS[gradientIndex++ % GRADIENTS.length];

  // Avatar
  await render(path.join(ROOT, "profile", "avatar.jpg"), {
    width: 900,
    height: 900,
    title: "MNT",
    gradient: ["#3B82F6", "#8B5CF6"],
    pattern: true,
  });

  // Projects
  const projects = [
    { slug: "commerceos", title: "CommerceOS", shots: 3 },
    { slug: "devboard", title: "DevBoard", shots: 2 },
    { slug: "qaflow", title: "QAFlow", shots: 2 },
    { slug: "portfolio", title: "NyverZ Portfolio", shots: 1 },
  ];

  for (const project of projects) {
    await render(path.join(ROOT, "projects", project.slug, "cover.jpg"), {
      width: 1200,
      height: 750,
      title: project.title,
      subtitle: "Cover",
      gradient: nextGradient(),
    });
    for (let i = 1; i <= project.shots; i += 1) {
      await render(path.join(ROOT, "projects", project.slug, `${i}.jpg`), {
        width: 1200,
        height: 750,
        title: project.title,
        subtitle: `Screenshot ${i}`,
        gradient: nextGradient(),
      });
    }
  }

  // Certificates
  const certificates = [
    { id: "nextjs", title: "Next.js" },
    { id: "typescript", title: "TypeScript" },
    { id: "aws", title: "AWS" },
    { id: "laravel", title: "Laravel" },
    { id: "sql", title: "SQL" },
    { id: "qa", title: "QA" },
  ];

  for (const cert of certificates) {
    await render(path.join(ROOT, "certificates", `${cert.id}.jpg`), {
      width: 800,
      height: 600,
      title: cert.title,
      subtitle: "Certificate",
      gradient: nextGradient(),
    });
  }

  console.log("\nAll placeholder images generated.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
