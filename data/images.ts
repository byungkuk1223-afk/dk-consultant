// Page and card images. One image per page. Stock images are from Unsplash (free under the Unsplash License, no attribution
// required); dkc-*.jpg are DKC's own site-visit photos. Sources are listed in public/img/site/CREDITS.md.
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
  careersBand: S("dkc-bc-site-walk"),
  contact: S("contact"),
  privacy: S("privacy"),
};

// Project detail pages: case studies have their own image; other projects use one image per market,
// different from the market page hero.
// Projects with DKC's own site photos use them (63 Alberta, 58 Jujuy, 44 Sri Lanka Customs).
const CASE: Record<number, string> = {
  63: S("dkc-alberta-substation"), 23: S("case-23"), 34: S("case-34"), 50: S("case-50"),
  58: S("dkc-jujuy-site"), 44: S("dkc-srilanka-site"),
};
const BY_MARKET: Record<string, string> = {
  "Power Generation": S("proj-power"),
  "Carbon Capture & Low-Carbon Fuels": S("proj-ccs"),
  "Environmental Infrastructure": S("proj-env"),
  "Industrial & Infrastructure": S("proj-industrial"),
};
export const projectImg = (p: Project) => CASE[p.id] ?? BY_MARKET[marketOf(p)] ?? S("proj-other");
