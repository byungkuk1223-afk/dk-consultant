// Market insights (market pages): trends, figures, and regional outlook drawn from published reports.
// Every figure carries its source; content is maintained in data/insights/<slug>.json.
import power from "./insights/power-generation.json";
import ccs from "./insights/carbon-capture.json";
import env from "./insights/environmental-infrastructure.json";
import industrial from "./insights/industrial-infrastructure.json";

export interface MarketInsight {
  slug: string;
  dek: string;
  keyFigures: { v: string; n: string; src: string; url: string }[];
  sections: { h: string; paras: string[]; cites?: number[] }[];
  regional: { region: string; text: string }[];
  implications: { t: string; d: string }[];
  sources: { label: string; publisher: string; year: string; url: string }[];
}

const ALL = ([power, ccs, env, industrial] as MarketInsight[]).filter((m) => m.sections.length > 0);
export const insightFor = (slug: string) => ALL.find((m) => m.slug === slug);
