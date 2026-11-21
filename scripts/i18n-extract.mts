// Lists every display string in the data files, grouped by file, so the Korean dictionaries can be checked for gaps.
// Run: node scripts/i18n-extract.mts [--missing]
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { profiles } from "../data/projectProfiles.ts";
import { projects } from "../data/projects.ts";
import { SERVICES, MARKET_PAGES } from "../data/site.ts";
import { MARKET_POV } from "../data/marketPov.ts";
import { TEAM_PROJECTS } from "../data/teamProjects.ts";
import * as clients from "../data/clients.ts";

const SKIP = new Set(["id", "slug", "url", "img", "logo", "href", "imgUrl", "imgExt", "hasImage", "time", "services", "cites", "match", "key", "refs", "sources", "src", "year", "publisher"]);
function walk(v: unknown, out: Set<string>, k = "") {
  if (SKIP.has(k)) return;
  if (typeof v === "string") { if (/[A-Za-z]/.test(v)) out.add(v); return; }
  if (Array.isArray(v)) { v.forEach((x) => walk(x, out, k)); return; }
  if (v && typeof v === "object") for (const [kk, vv] of Object.entries(v)) walk(vv, out, kk);
}
const insights = readdirSync("data/insights").map((f) => JSON.parse(readFileSync(`data/insights/${f}`, "utf8")));
const groups: Record<string, unknown> = {
  profiles, projects, site: { SERVICES, MARKET_PAGES }, marketPov: MARKET_POV, teamProjects: TEAM_PROJECTS, clients, insights,
};
const missingOnly = process.argv.includes("--missing");
const res: Record<string, string[]> = {};
for (const [g, v] of Object.entries(groups)) {
  const s = new Set<string>(); walk(v, s);
  let list = [...s];
  if (missingOnly) {
    const f = `i18n/ko/${g}.json`;
    const d = existsSync(f) ? JSON.parse(readFileSync(f, "utf8")) : {};
    list = list.filter((x) => !(x in d));
  }
  res[g] = list;
}
console.log(JSON.stringify(res, null, 1));
