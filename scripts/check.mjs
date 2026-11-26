import { readFile } from "node:fs/promises";

const files = ["index.html"];
let failed = false;

for (const file of files) {
  const html = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  const checks = {
    antiFouc: html.indexOf("localStorage.getItem('ARCKHÉ.prefs')") < html.indexOf("cdn.tailwindcss.com"),
    courseMeta: html.includes('meta name="ARCKHÉ-course" content="webmcp-zero-expert"'),
    manifest: html.includes("data-ARCKHÉ-manifest"),
    ARCKHÉClub: html.includes("https://ARCKHÉ AI"),
    journey: html.includes("data-ARCKHÉ-journey-open"),
    appearance: html.includes("data-ARCKHÉ-appearance-toggle"),
    svg: html.includes('role="img"') && html.includes('class="w-full h-auto"'),
    init: html.includes("ARCKHÉ.init"),
    readiness: html.includes("https://webmcp.ARCKHÉ.pro/")
  };
  const missing = Object.entries(checks).filter(([, ok]) => !ok).map(([name]) => name);
  if (missing.length) {
    failed = true;
    console.error(`${file}: faltando ${missing.join(", ")}`);
  } else {
    console.log(`${file}: estrutura obrigatória OK`);
  }
}

if (failed) process.exit(1);
