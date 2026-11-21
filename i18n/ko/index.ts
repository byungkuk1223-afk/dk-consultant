// Korean dictionary: English display text → Korean. One file per source so gaps are easy to find
// (node scripts/i18n-extract.mts --missing lists data strings without a Korean entry).
import ui from "./ui.json";
import site from "./site.json";
import projects from "./projects.json";
import profiles from "./profiles.json";
import marketPov from "./marketPov.json";
import insights from "./insights.json";
import teamProjects from "./teamProjects.json";
import clients from "./clients.json";

export const KO: Record<string, string> = { ...projects, ...profiles, ...marketPov, ...insights, ...teamProjects, ...clients, ...site, ...ui };
