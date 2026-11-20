// Case studies shown on project detail pages, in the order of the DKC corporate brochure (Part B).
// Text follows the brochure case studies; keep the two in step.

export interface CaseStudy {
  id: number; // project id in data/projects.ts
  tag: string;
  headline: string;
  location: string;
  delivered: string;
  highlights: string[];
  challenge: string;
  solution: string;
  result: string;
  scope?: string[];
  relevance: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 63,
    tag: "Blue ammonia with carbon capture",
    headline: "Blue ammonia with carbon capture, Alberta, Canada",
    location: "Alberta, Canada",
    delivered: "DKC, lead firm of the study consortium",
    highlights: ["1 Mt/yr ammonia plant with CO₂ capture and storage", "Feasibility study delivered within five months"],
    challenge:
      "KIND needed an investment-grade view of a 1 Mt/yr blue ammonia plant in Alberta, where the CO₂ from production is captured and stored, to inform Korean participation in the project.",
    solution:
      "DKC led the consortium and carried the majority of the scope: project management, market analysis, the project financial model, and the assessment of the CCS-linked revenue case.",
    result:
      "The feasibility study was completed and delivered to KIND within five months, giving the client a basis for its participation decision.",
    relevance: "Capture, CO₂ storage, and carbon-related revenues assessed together, the way lenders will assess any CCS-linked plant.",
  },
  {
    id: 23,
    tag: "LNG-to-power",
    headline: "Structuring the financing case for a 4,500 MW LNG-to-power complex, Vietnam",
    location: "Hai Lang, Quang Tri, Vietnam",
    delivered: "With Synergy Korea",
    highlights: ["Phase 1 1,500 MW, Phase 2 3,000 MW", "Feasibility study and lender information memorandum for KEXIM"],
    challenge:
      "KEXIM needed to assess how a 4,500 MW LNG-to-power complex, developed in two phases with Korean participation, could be structured and financed, and how lenders would view its risks.",
    solution:
      "DKC analyzed the financing structure and project risks, carried out the financial and legal review, and prepared the information memorandum for lenders.",
    result:
      "Feasibility study and lender information memorandum delivered to KEXIM, built on one model from the first assumptions to the lender materials.",
    relevance: "A financing structure and lender materials prepared to the standard that commercial banks and ECAs expect at financial close.",
  },
  {
    id: 34,
    tag: "Gas-to-power",
    headline: "Feasibility study for gas-to-power, Dominican Republic",
    location: "Manzanillo, Dominican Republic",
    delivered: "With Synergy Korea",
    highlights: ["350–400 MW gas-to-power", "Feasibility study and financial model within three months"],
    challenge:
      "KOGAS was assessing participation in a 350–400 MW gas-to-power project at Manzanillo and needed a feasibility study and a financial model within three months.",
    solution:
      "DKC led the study, covered tax and legal review, and built the financial model, testing tariff, fuel, and financing assumptions.",
    result:
      "Feasibility study and financial model delivered to KOGAS on schedule, giving the client a priced, risk-tested basis for its participation decision.",
    relevance: "A priced, risk-tested basis for an investment decision, delivered within a fixed timetable.",
  },
  {
    id: 50,
    tag: "Refinery upgrading",
    headline: "Upgrading the Dumai refinery, Indonesia",
    location: "Dumai, Indonesia · refinery owner: Pertamina",
    delivered: "DKC, half of the study scope",
    highlights: ["Existing refinery of about 170,000 barrels per day", "One-year feasibility study for KEXIM"],
    challenge: "KEXIM needed a feasibility study covering the market, financing, and legal case for upgrading the Dumai refinery.",
    solution: "DKC carried half of the feasibility study for KEXIM, with Jong Sang Lee as overall manager.",
    scope: ["Market analysis", "Financial analysis and model", "Financing structure", "Legal and tax review"],
    result: "Feasibility study completed and delivered to KEXIM in May 2024.",
    relevance: "Market, financing structure, and legal and tax analysis carried on one model for a large industrial project.",
  },
];

export const caseStudyFor = (id: number) => caseStudies.find((c) => c.id === id);
