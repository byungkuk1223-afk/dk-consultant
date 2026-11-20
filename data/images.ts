// Page and card images. One image per page; all from Unsplash (free under the Unsplash License, no attribution required).
// Source photo ids are listed in public/img/site/CREDITS.md.
import type { Project } from "./projects";
import { marketOf } from "./projects";

const S = (n: string) => `/img/site/${n}.jpg`;

export const IMG = {
  homeHero: S("home-hero"),
  markets: S("markets"),
  services: S("services"),
  projects: S("projects"),
  clients: S("clients"),
  teamExperience: S("team-experience"),
  delivery: S("delivery"),
  about: S("about"),
  people: S("people"),
  careers: S("careers"),
  careersBand: S("careers-band"),
  contact: S("contact"),
  privacy: S("privacy"),
};

// Project detail pages: case studies have their own image; other projects use one image per market,
// different from the market page hero.
const CASE: Record<number, string> = { 63: S("case-63"), 23: S("case-23"), 34: S("case-34"), 50: S("case-50") };
const BY_MARKET: Record<string, string> = {
  "Power Generation": S("proj-power"),
  "Carbon Capture & Low-Carbon Fuels": S("proj-ccs"),
  "Environmental Infrastructure": S("proj-env"),
  "Industrial & Infrastructure": S("proj-industrial"),
};
export const projectImg = (p: Project) => CASE[p.id] ?? BY_MARKET[marketOf(p)] ?? S("proj-other");
