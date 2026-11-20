// Site structure (services and markets), following the corporate brochure.
import type { Market } from "@/data/projects";

export type ServiceSlug = "engineering" | "commercial" | "financial" | "development";

export const SERVICES: { slug: ServiceSlug; title: string; short: string; lead: string; img: string }[] = [
  {
    slug: "engineering",
    title: "Engineering Management & Technical Advisory",
    short: "Design basis, package coordination, interface management, and independent review of every deliverable.",
    lead: "Owner-side engineering coordination and technical review for coal-fired power plants and carbon capture facilities, with particular emphasis on integration across critical interfaces.",
    img: "/img/site/svc-engineering.jpg",
  },
  {
    slug: "commercial",
    title: "Commercial & Contract Advisory",
    short: "PPA, EPC, supply, CO₂ transport and storage, and O&M agreements reviewed against one risk allocation matrix.",
    lead: "Every project agreement is reviewed against the same technical baseline and the same financial model.",
    img: "/img/site/svc-commercial.jpg",
  },
  {
    slug: "financial",
    title: "Financial Advisory & Capital Raising",
    short: "One financial model from the first assumptions to financial close: financing strategy, lender engagement, and due diligence.",
    lead: "One financial model from the first assumptions to financial close.",
    img: "/img/site/svc-financial.jpg",
  },
  {
    slug: "development",
    title: "Bankable Feasibility & Project Development",
    short: "Bankable feasibility studies that tell owners, lenders, and public financiers whether a project can be built and financed.",
    lead: "Bankable feasibility studies led and integrated by DKC: engineering, cost, market, contracts, and finance on one baseline.",
    img: "/img/site/svc-development.jpg",
  },
];

export const serviceBySlug = (s: string) => SERVICES.find((x) => x.slug === s);

export const MARKET_PAGES: {
  slug: string;
  name: Market;
  lead: string;
  text: string;
  focus: string[];
  services: ServiceSlug[];
  img: string;
}[] = [
  {
    slug: "power-generation",
    name: "Power Generation",
    lead: "Firm capacity and renewable generation, from the design basis to financial close.",
    text: "Grids need firm, dispatchable capacity while emissions must fall. DKC advises owners, public financiers, and EPC contractors on coal- and gas-fired, hydro, solar, and battery storage projects: the design basis and EPC scope, the project agreements, and the financing case, on one baseline.",
    focus: ["Coal-fired and CFB power plants", "Gas-to-power and LNG-to-power", "Hydropower", "Solar PV and battery storage", "Grid interface and switchyards"],
    services: ["engineering", "commercial", "financial", "development"],
    img: "/img/site/market-power.jpg",
  },
  {
    slug: "carbon-capture",
    name: "Carbon Capture & Low-Carbon Fuels",
    lead: "Carbon capture at the host plant, blue and green ammonia, and hydrogen.",
    text: "Carbon capture is moving into deployment. Its steam, power, and CO₂ interfaces change the host plant's net output and cost, and its revenues depend on carbon policy. DKC screens capture technologies against host-plant constraints, resolves the interfaces before EPC award, and prices capture and carbon-related revenues in the project model.",
    focus: ["Post-combustion capture at power plants", "Blue ammonia with CO₂ capture and storage", "Green hydrogen and ammonia", "CO₂ compression, transport, and storage interfaces", "Carbon-related revenues"],
    services: ["engineering", "commercial", "financial", "development"],
    img: "/img/site/market-ccs.jpg",
  },
  {
    slug: "environmental-infrastructure",
    name: "Environmental Infrastructure",
    lead: "Waste-to-energy, landfill gas, district heating and cooling.",
    text: "Environmental infrastructure turns a public problem, such as municipal waste, landfill methane, or inefficient heating, into an asset with a tariff, a feedstock risk, and often a carbon revenue. DKC advises from feasibility to transaction: market and feedstock analysis, tariff and gate-fee structure, carbon credit revenues, PPP structure, and the financial model.",
    focus: ["Waste-to-energy", "Landfill gas and CDM", "District heating and CHP", "District cooling", "Water and wastewater"],
    services: ["financial", "development", "commercial"],
    img: "/img/site/market-env.jpg",
  },
  {
    slug: "industrial-infrastructure",
    name: "Industrial & Infrastructure",
    lead: "Refineries, smelters, ports, and public infrastructure.",
    text: "DKC's financial and transaction work extends to industrial and public infrastructure: market, financing structure, contract structure, and bankability for refineries, smelters, ports, and PPP programmes.",
    focus: ["Refinery upgrading", "Metal smelting", "Ports and logistics", "Public infrastructure PPP"],
    services: ["financial", "development", "commercial"],
    img: "/img/site/market-industrial.jpg",
  },
];

export const marketBySlug = (s: string) => MARKET_PAGES.find((m) => m.slug === s);
export const marketSlugOf = (name: string) => MARKET_PAGES.find((m) => m.name === name)?.slug;
