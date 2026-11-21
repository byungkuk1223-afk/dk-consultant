// Korean dictionary check. Lists English display text that has no Korean entry in i18n/ko/*.json.
// Run before every push:  npm run i18n:check   (exit code 1 when something is missing)
// Covers: display fields in the data files, and every tr("...") literal in app/ and components/.
// Not covered: plain strings in component constants that are rendered through tr(x.field); check those by
// eye on /ko after editing (see AGENTS.md).
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { profiles } from "../data/projectProfiles.ts";
import { projects } from "../data/projects.ts";
import { SERVICES, MARKET_PAGES } from "../data/site.ts";
import { MARKET_POV } from "../data/marketPov.ts";
import { TEAM_PROJECTS } from "../data/teamProjects.ts";
import * as clients from "../data/clients.ts";

// Kept in English on purpose: identifiers, sources, people's names, numbers.
const SKIP = new Set(["id", "slug", "url", "img", "logo", "href", "imgUrl", "imgExt", "hasImage", "time", "services", "cites", "match", "key", "refs", "sources", "src", "year", "publisher", "name"]);
const KEEP = (s: string) => !/[A-Za-z]{2}/.test(s) || /^[\d\s.,~±≥>+–-]*(MW|MWp|GW|TWh|MIGD|bpd|t\/year|Beds?)?[\d\s.,]*$/i.test(s) || /^PT /.test(s);

const ko: Record<string, string> = {};
for (const f of readdirSync("i18n/ko").filter((x) => x.endsWith(".json"))) Object.assign(ko, JSON.parse(readFileSync(`i18n/ko/${f}`, "utf8")));

const missing = new Map<string, string>();
function walk(v: unknown, where: string, k = "") {
  if (SKIP.has(k)) return;
  if (typeof v === "string") { if (!KEEP(v) && !(v in ko)) missing.set(v, where); return; }
  if (Array.isArray(v)) { v.forEach((x) => walk(x, where, k)); return; }
  if (v && typeof v === "object") for (const [kk, vv] of Object.entries(v)) walk(vv, where, kk);
}
walk(profiles, "data/projectProfiles.ts");
walk(projects, "data/projects.ts");
walk({ SERVICES, MARKET_PAGES }, "data/site.ts");
walk(MARKET_POV, "data/marketPov.ts");
walk(TEAM_PROJECTS, "data/teamProjects.ts");
walk(clients, "data/clients.ts");
for (const f of readdirSync("data/insights")) walk(JSON.parse(readFileSync(`data/insights/${f}`, "utf8")), `data/insights/${f}`);

const files: string[] = [];
const collect = (d: string) => { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) { if (!p.endsWith("ko")) collect(p); } else if (p.endsWith(".tsx")) files.push(p); } };
collect("app"); collect("components");
for (const f of files) for (const m of readFileSync(f, "utf8").matchAll(/\btr\("((?:[^"\\]|\\.)*)"/g)) {
  const s = JSON.parse(`"${m[1]}"`);
  if (!KEEP(s) && !(s in ko)) missing.set(s, f);
}

if (missing.size) {
  console.error(`Korean translation missing for ${missing.size} string(s). Add them to i18n/ko/*.json:`);
  for (const [s, where] of missing) console.error(`  [${where}] ${s.slice(0, 120)}`);
  process.exit(1);
}
console.log("i18n:check OK: every checked English string has a Korean entry.");
