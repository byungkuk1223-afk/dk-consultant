// Project profiles for /projects/[id] (standard engineering-consultancy format: key facts, about the project,
// DKC's role and scope, outcome, references).
// - "About the project" uses public sources only (listed in refs) and describes the project, not DKC.
// - DKC's role, scope, period, and client follow the verified track-record workbook and the corporate brochure.
// - Case studies repeat the brochure (Part B) text; keep the two in step.

export interface ProjectProfile {
  id: number;
  caseStudy?: boolean;
  tag: string;
  headline: string;
  location: string;
  capacity?: string;
  delivered: string;
  summary: string;
  about: string[];
  role: string;
  scope: string[];
  challenge?: string;
  solution?: string;
  result?: string;
  outcome?: string;
  relevance?: string;
  refs: { label: string; url: string }[];
}

export const profiles: ProjectProfile[] = [
  // ───────────── case studies (brochure Part B)
  {
    id: 63,
    caseStudy: true,
    tag: "Blue ammonia with carbon capture",
    headline: "Blue ammonia with carbon capture, Alberta, Canada",
    location: "Alberta, Canada",
    capacity: "1 Mt/yr ammonia with CO₂ capture and storage",
    delivered: "DKC, lead firm of the study consortium",
    summary: "DKC led the feasibility study commissioned by KIND on a 1 Mt/yr blue ammonia development in Alberta, in which the CO₂ from ammonia production is captured and stored.",
    about: [
      "In April 2025 the Korea Overseas Infrastructure & Urban Development Corporation (KIND) tendered a feasibility study on a blue ammonia development of 1 million tonnes a year in Alberta, Canada, to inform Korean participation.",
      "Blue ammonia is made from natural gas, with the CO₂ from production captured and stored underground. Alberta's gas resources and CO₂ storage capacity make it one of the main candidate regions for low-carbon ammonia supply to Asia.",
    ],
    role: "Lead firm of the study consortium, carrying the majority of the scope.",
    scope: ["Project management", "Market analysis", "Project financial model", "Assessment of the CCS-linked revenue case"],
    challenge: "KIND needed an investment-grade view of a 1 Mt/yr blue ammonia plant in Alberta, where the CO₂ from production is captured and stored, to inform Korean participation in the project.",
    solution: "DKC led the consortium and carried the majority of the scope: project management, market analysis, the project financial model, and the assessment of the CCS-linked revenue case.",
    result: "The feasibility study was completed and delivered to KIND within five months, giving the client a basis for its participation decision.",
    relevance: "Capture, CO₂ storage, and carbon-related revenues assessed together, the way lenders will assess any CCS-linked plant.",
    refs: [{ label: "Quantum Commodity Intelligence — KIND issues feasibility study tender for Alberta blue ammonia project (Apr 2025)", url: "https://www.qcintel.com/ammonia/article/kind-issues-feasibility-study-tender-for-alberta-blue-ammonia-project-38804.html" }],
  },
  {
    id: 23,
    caseStudy: true,
    tag: "LNG-to-power",
    headline: "Structuring the financing case for a 4,500 MW LNG-to-power complex, Vietnam",
    location: "Hai Lang district, Quang Tri province, Vietnam",
    capacity: "4,500 MW (Phase 1 1,500 MW, Phase 2 3,000 MW)",
    delivered: "With Synergy Korea",
    summary: "DKC carried the financial and project execution workstreams of KEXIM's feasibility study for the Hai Lang LNG-to-power complex, and prepared the information memorandum for lenders.",
    about: [
      "The Hai Lang LNG power centre is being developed by Vietnam's T&T Group with Korean partners Hanwha, Korea Southern Power (KOSPO), and Korea Gas Corporation (KOGAS). Phase 1 comprises a 1,500 MW combined-cycle plant and an LNG import terminal of about 1.5 million tonnes a year, on a 120-hectare site in the Southeast Quang Tri economic zone.",
      "Quang Tri authorities approved the Phase 1 investment of about US$2.3 billion in October 2021, and ground was broken in January 2022.",
    ],
    role: "Financial and project execution workstreams of the feasibility study for KEXIM.",
    scope: ["Financing structure", "Project risk analysis", "Financial and legal review", "Lender information memorandum"],
    challenge: "KEXIM needed to assess how a 4,500 MW LNG-to-power complex, developed in two phases with Korean participation, could be structured and financed, and how lenders would view its risks.",
    solution: "DKC analyzed the financing structure and project risks, carried out the financial and legal review, and prepared the information memorandum for lenders.",
    result: "Feasibility study and lender information memorandum delivered to KEXIM, built on one model from the first assumptions to the lender materials.",
    relevance: "A financing structure and lender materials prepared to the standard that commercial banks and ECAs expect at financial close.",
    refs: [
      { label: "VietnamPlus — Work starts on US$2.37-billion Hai Lang LNG power centre in Quang Tri (Jan 2022)", url: "https://en.vietnamplus.vn/work-starts-on-237-billion-usd-hai-lang-lng-power-centre-in-quang-tri-post220764.vnp" },
      { label: "NS Energy — Hai Lang LNG power centre", url: "https://www.nsenergybusiness.com/projects/hai-lang-lng-power-centre/" },
      { label: "LNG Prime — Vietnam OKs $2.3 billion LNG-to-power project (Oct 2021)", url: "https://lngprime.com/contracts-and-tenders/vietnam-oks-2-3-billion-lng-to-power-project/30788" },
    ],
  },
  {
    id: 34,
    caseStudy: true,
    tag: "Gas-to-power",
    headline: "Feasibility study for gas-to-power, Dominican Republic",
    location: "Manzanillo, Montecristi province, Dominican Republic",
    capacity: "350–400 MW combined cycle (tender basis)",
    delivered: "With Synergy Korea",
    summary: "DKC led KOGAS's feasibility study and financial model for participation in a 350–400 MW gas-to-power project at Manzanillo, delivered within three months.",
    about: [
      "In 2021 the Dominican government tendered new gas-fired generation at Manzanillo, on the country's north-west coast, together with an LNG import terminal. The tender required each combined-cycle plant to contract between 350 MW and 400 MW.",
    ],
    role: "Lead of the feasibility study for KOGAS, including tax and legal review and the financial model.",
    scope: ["Feasibility study", "Tax and legal review", "Financial model", "Tariff, fuel, and financing sensitivities"],
    challenge: "KOGAS was assessing participation in a 350–400 MW gas-to-power project at Manzanillo and needed a feasibility study and a financial model within three months.",
    solution: "DKC led the study, covered tax and legal review, and built the financial model, testing tariff, fuel, and financing assumptions.",
    result: "Feasibility study and financial model delivered to KOGAS on schedule, giving the client a priced, risk-tested basis for its participation decision.",
    relevance: "A priced, risk-tested basis for an investment decision, delivered within a fixed timetable.",
    refs: [
      { label: "Riviera — Dominican Republic tenders for natural gas-fired plants and terminal", url: "https://www.rivieramm.com/news-content-hub/news-content-hub/dominican-republic-tenders-for-natural-gas-fired-plants-and-terminal-64703" },
      { label: "Global Energy Monitor — Manzanillo (Dominican Republic) LNG Terminal", url: "https://gem.wiki/Manzanillo_(Dominican_Republic)_LNG_Terminal" },
    ],
  },
  {
    id: 50,
    caseStudy: true,
    tag: "Refinery upgrading",
    headline: "Upgrading the Dumai refinery, Indonesia",
    location: "Dumai, Riau province, Indonesia",
    capacity: "Existing refinery of about 170,000 barrels per day",
    delivered: "DKC, half of the study scope",
    summary: "DKC carried half of KEXIM's one-year feasibility study on upgrading Pertamina's Dumai refinery, covering the market, financing structure, and legal and tax case.",
    about: [
      "The Dumai refinery on the east coast of Sumatra is one of Pertamina's main refineries, with an installed capacity of about 170,000 barrels per day. Its upgrade forms part of Pertamina's Refinery Development Master Plan (RDMP), which aims to raise Indonesia's crude processing capacity.",
      "In 2020 Pertamina signed a non-binding memorandum of understanding with a South Korean consortium for an upgrade of the refinery valued at about US$1.5 billion.",
    ],
    role: "Half of the feasibility study for KEXIM, with Jong Sang Lee as overall manager.",
    scope: ["Market analysis", "Financial analysis and model", "Financing structure", "Legal and tax review"],
    challenge: "KEXIM needed a feasibility study covering the market, financing, and legal case for upgrading the Dumai refinery.",
    solution: "DKC carried half of the feasibility study for KEXIM, with Jong Sang Lee as overall manager.",
    result: "Feasibility study completed and delivered to KEXIM in May 2024.",
    relevance: "Market, financing structure, and legal and tax analysis carried on one model for a large industrial project.",
    refs: [
      { label: "The Jakarta Post — Pertamina, South Korean consortium to develop Dumai refinery (May 2020)", url: "https://www.thejakartapost.com/news/2020/05/22/pertamina-south-korean-consortium-to-develop-dumai-refinery.html" },
      { label: "Tank Terminals — Pertamina, South Korean consortium to develop Dumai refinery", url: "https://tankterminals.com/news/pertamina-south-korean-consortium-to-develop-dumai-refinery/" },
    ],
  },

  // ───────────── further profiles with public project information
  {
    id: 25,
    tag: "LNG-to-power",
    headline: "Long An I and II LNG-to-power, Vietnam",
    location: "Can Giuoc district, Long An province, Vietnam",
    capacity: "3,000 MW (Long An I and II, 1,500 MW each)",
    delivered: "With Synergy Korea",
    summary: "DKC carried the financing and project development workstreams of KEXIM's feasibility study for the Long An I and II LNG-to-power plants.",
    about: [
      "Long An I and II are two 1,500 MW LNG-fired combined-cycle plants developed by VinaCapital GS Energy, a joint venture of VinaCapital and Korea's GS Energy, with a combined investment of about US$3.1 billion. Long An province granted the investment certificate in March 2021, and the project is included in Vietnam's Power Development Plan VIII.",
      "In June 2023 the Export-Import Bank of Korea signed a memorandum of understanding with VinaCapital and GS Energy to finance the project.",
    ],
    role: "Financing and project development workstreams of the feasibility study for KEXIM.",
    scope: ["Financing structure", "Project development review", "Financial analysis"],
    refs: [
      { label: "VnExpress — Long An Province licenses $3-bln LNG power plant (Mar 2021)", url: "https://e.vnexpress.net/news/business/industries/long-an-province-licenses-3-bln-lng-power-plant-4252076.html" },
      { label: "The Investor — GS Energy to operate $3 bln LNG power project in Vietnam from 2029", url: "https://theinvestor.vn/gs-energy-to-operate-3-bln-lng-power-project-in-vietnam-from-2029-d14857.html" },
      { label: "VnEconomy — VinaCapital & GS Energy sign MoU with Export-Import Bank of Korea (Jun 2023)", url: "https://en.vneconomy.vn/vinacapital-gs-energy-sign-mou-with-export-import-bank-of-korea.htm" },
    ],
  },
  {
    id: 20,
    tag: "Hydropower",
    headline: "Upper Karnali hydropower, Nepal",
    location: "Achham and Dailekh districts, Nepal",
    capacity: "900 MW",
    delivered: "With Synergy Korea; KEITI study led by Yooshin Engineering",
    summary: "DKC carried the financial structure, risk, and financial analysis of KEITI's feasibility study for the 900 MW Upper Karnali hydropower project.",
    about: [
      "Upper Karnali is a 900 MW hydropower project on the Karnali River in western Nepal, developed by GMR Upper Karnali Hydropower, a subsidiary of India's GMR Group. In 2024 GMR agreed to develop the project jointly with India's SJVN and IREDA.",
    ],
    role: "Financial structure, risk, and financial analysis within KEITI's feasibility study.",
    scope: ["Financial structure", "Risk analysis", "Financial analysis"],
    refs: [
      { label: "The Kathmandu Post — GMR ropes in two Indian partners for 900MW Upper Karnali hydel project (Sep 2024)", url: "https://kathmandupost.com/money/2024/09/13/gmr-ropes-in-two-indian-partners-for-900mw-upper-karnali-hydel-project" },
      { label: "GMR Group — Upper Karnali Hydropower", url: "https://www.gmrgroup.com/energy/renewable-energy/hydro-nepal" },
    ],
  },
  {
    id: 37,
    tag: "Hydropower",
    headline: "Phou Ngoy Mekong hydropower, Laos",
    location: "Champasak province, Laos",
    capacity: "728 MW run-of-river",
    delivered: "DKC",
    summary: "DKC carried out the financial, tax, and legal review of the 728 MW Phou Ngoy hydropower project for Dohwa Engineering.",
    about: [
      "Phou Ngoy is a proposed 728 MW run-of-river hydropower plant on the Mekong mainstream in Champasak province, southern Laos, planned on a build-operate-transfer basis. Its sponsors include Thailand's Charoen Energy and Water Asia, and Korean companies including Doosan and Korea Western Power have been associated with the project together with KIND.",
    ],
    role: "Financial, tax, and legal review for Dohwa Engineering.",
    scope: ["Financial analysis", "Tax review", "Legal review"],
    refs: [
      { label: "Dialogue Earth — Phou Ngoy Mekong dam in Laos faces economic and regulatory hurdles", url: "https://dialogue.earth/en/energy/phou-ngoy-mekong-dam-laos-faces-economic-regulatory-hurdles/" },
      { label: "Global Energy Monitor — Phou Ngoy hydroelectric plant", url: "https://www.gem.wiki/Phou_Ngoy_hydroelectric_plant" },
    ],
  },
  {
    id: 26,
    tag: "Combined cycle",
    headline: "Limbe combined-cycle power plant, Cameroon",
    location: "Limbe, South-West Region, Cameroon",
    capacity: "350 MW combined cycle",
    delivered: "With Synergy Korea",
    summary: "DKC carried out the financial and economic analysis of KIND's feasibility study for the 350 MW Limbe combined-cycle power plant.",
    about: [
      "The Limbe gas-fired power project is a 350 MW combined-cycle plant on Cameroon's Atlantic coast, intended to relieve power shortages in the south-west, coastal, and western regions. It converts an existing 85 MW heavy-fuel-oil plant to natural gas and adds a new 265 MW combined-cycle unit.",
    ],
    role: "Financial and economic analysis within KIND's feasibility study.",
    scope: ["Financial analysis", "Economic analysis"],
    refs: [
      { label: "Global Energy Monitor — Limbé power station", url: "https://gem.wiki/Limb%C3%A9_power_station" },
      { label: "Power Technology — Limbe CCGT power plant, Cameroon", url: "https://www.power-technology.com/marketdata/power-plant-profile-eranove-limbe-ccgt-power-plant-cameroon/" },
    ],
  },
  {
    id: 32,
    tag: "Landfill gas and CDM",
    headline: "Tashkent landfill gas-to-energy and CDM, Uzbekistan",
    location: "Akhangaran and Maidontol landfills, Tashkent region, Uzbekistan",
    capacity: "16 MW landfill gas power; 720 kt/yr CO₂e reductions assessed",
    delivered: "As Synergy Korea",
    summary: "DKC provided financial advisory to Sejin G&E on the Tashkent landfill gas-to-energy and CDM project: finance, risk, and procedure review.",
    about: [
      "Sejin G&E of Korea is developing landfill gas capture and power generation at the Akhangaran and Maidontol landfills near Tashkent, with twelve gas engines totalling at least 16 MW. The landfill gas capture project is registered under the UN Clean Development Mechanism as project 2750.",
      "Uzbekistan describes it as the first landfill-gas-to-power project in Central Asia; a groundbreaking ceremony was held in January 2023.",
    ],
    role: "Financial advisory: finance, risk, and procedure review for Sejin G&E.",
    scope: ["Financing review", "Risk review", "Procedure review", "Carbon credit (CDM) revenue case"],
    refs: [
      { label: "UNFCCC CDM — Project 2750: Akhangaran Landfill Gas Capture Project in Tashkent", url: "https://cdm.unfccc.int/Projects/DB/JQA1247461564.7/iProcess/LRQA%20Ltd1522910002.84/view" },
      { label: "Kun.uz — A complex of electricity production from waste gas to be built in Tashkent region (Jan 2023)", url: "https://kun.uz/en/news/2023/01/28/a-complex-of-electricity-production-from-waste-gas-to-be-built-in-tashkent-region" },
      { label: "Trend — South Korean Sejin launches alternative energy production in Uzbekistan", url: "https://www.trend.az/casia/uzbekistan/3815096.html" },
    ],
  },
];

export const profileFor = (id: number) => profiles.find((p) => p.id === id);
export const caseStudies = profiles.filter((p) => p.caseStudy);
