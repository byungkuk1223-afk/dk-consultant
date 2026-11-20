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
  // ───────────── all other projects (case-study format; about/refs from public sources only, empty where none found)
  {
    "id": 68,
    "tag": "Waste-to-energy",
    "headline": "Yen Binh waste-to-energy, Vietnam",
    "location": "Vietnam",
    "delivered": "With Synergy Korea",
    "summary": "DKC advised Samsung E&A on the business structure, tariff structure, and financing of the Yen Binh waste-to-energy project in Vietnam.",
    "about": [],
    "role": "Business structure, tariff structure, and financial advisory for Samsung E&A, delivered as Synergy Korea.",
    "scope": [
      "Business structure",
      "Tariff structure",
      "Financial advisory"
    ],
    "challenge": "Samsung E&A was assessing the Yen Binh waste-to-energy project in Vietnam and needed advice on how the business and its tariffs should be structured and financed.",
    "solution": "DKC advised on the business structure, the tariff structure, and the financing of the project.",
    "result": "Business, tariff, and financial structuring advice delivered to Samsung E&A (May to July 2022).",
    "relevance": "Waste-to-energy returns depend on how gate fees and power tariffs are set, which has to be settled before financing.",
    "refs": []
  },
  {
    "id": 67,
    "tag": "Blue ammonia and CCS",
    "headline": "Blue ammonia pre-feasibility study, Indonesia",
    "location": "Indonesia",
    "delivered": "With Synergy Korea",
    "summary": "DKC carried out a pre-feasibility study for PT Aldaberta, engaged through Synergy Korea, on a blue ammonia development with carbon capture and storage in Indonesia.",
    "about": [],
    "role": "Pre-feasibility study for PT Aldaberta, engaged through Synergy Korea.",
    "scope": [
      "Pre-feasibility study",
      "Market review",
      "Preliminary financial analysis",
      "CCS considerations"
    ],
    "challenge": "PT Aldaberta needed an early view of whether a blue ammonia development in Indonesia, with the CO₂ from production captured and stored, could be taken forward.",
    "solution": "DKC carried out the pre-feasibility study, reviewing the market for low-carbon ammonia, the preliminary economics, and the role of carbon capture and storage in the case.",
    "result": "Pre-feasibility study delivered to PT Aldaberta.",
    "relevance": "Blue ammonia depends on gas supply and CO₂ storage as much as on the plant, and a pre-feasibility study shows early where the case is weakest.",
    "refs": []
  },
  {
    "id": 66,
    "tag": "Battery storage",
    "headline": "Townsville battery storage, Queensland, Australia",
    "location": "Townsville, Queensland, Australia",
    "delivered": "DKC",
    "summary": "DKC is leading KEITI's feasibility study for a battery energy storage project in Townsville, Queensland, under way since April 2026.",
    "about": [],
    "role": "Lead of the feasibility study for KEITI.",
    "scope": [
      "Project management of the study",
      "Market and revenue analysis",
      "Project financial model",
      "Risk and sensitivity analysis"
    ],
    "challenge": "KEITI needed a feasibility study on a battery energy storage project in Townsville to assess whether the project could support Korean participation in Queensland's storage market.",
    "solution": "DKC is leading the study, covering the market and revenue case for storage in Queensland, the project financial model, and the risks and sensitivities that drive the investment case.",
    "result": "Feasibility study for KEITI under way since April 2026.",
    "relevance": "Grid-scale storage in the Australian market assessed from the owner's side, from revenue streams to the financial model.",
    "refs": []
  },
  {
    "id": 65,
    "tag": "Solar PV",
    "headline": "Kochkor solar power, Kyrgyzstan",
    "location": "Kochkor district, Naryn region, Kyrgyzstan",
    "capacity": "300 MWp (DC)",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study for the 300 MWp Kochkor solar power project in Kyrgyzstan.",
    "about": [],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Market and offtake review",
      "Project financial model",
      "Financing structure",
      "Risk and sensitivity analysis"
    ],
    "challenge": "KEITI needed a feasibility study on a 300 MWp solar project in Kochkor, Kyrgyzstan, a market where large-scale solar is new and the offtake and financing framework is still developing.",
    "solution": "DKC's feasibility study reviewed the market and offtake arrangements, built the project financial model, and tested the financing structure and the main risks.",
    "result": "Feasibility study delivered to KEITI (September 2025 to June 2026).",
    "relevance": "Utility-scale solar assessed in an early-stage Central Asian market, where offtake and currency risk shape the financing case.",
    "refs": []
  },
  {
    "id": 64,
    "tag": "Solar and storage",
    "headline": "Solar PV and battery storage development, Texas, USA",
    "location": "Texas, USA",
    "capacity": "Solar PV approx. 300 MW with battery storage",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study for a solar PV and battery storage development of about 300 MW in Texas.",
    "about": [],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Market and revenue analysis",
      "Project financial model",
      "Risk and sensitivity analysis"
    ],
    "challenge": "KEITI needed a feasibility study on a solar PV development of about 300 MW with battery storage in Texas to inform Korean participation in the project.",
    "solution": "DKC's feasibility study covered the market and revenue case for combined solar and storage, the project financial model, and the main risks and sensitivities.",
    "result": "Feasibility study delivered to KEITI (November 2025 to June 2026).",
    "relevance": "Solar and storage assessed together for a merchant-exposed US market, where revenue structure decides bankability.",
    "refs": []
  },
  {
    "id": 62,
    "tag": "Sustainable aviation fuel",
    "headline": "Sustainable aviation fuel development, Indonesia",
    "location": "Indonesia",
    "capacity": "200,000 t/yr",
    "delivered": "DKC",
    "summary": "DKC carried out a feasibility study for KEXIM on a sustainable aviation fuel (SAF) development in Indonesia with a planned output of 200,000 tonnes a year.",
    "about": [],
    "role": "Feasibility study for KEXIM.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEXIM needed an independent assessment of a 200,000 t/yr sustainable aviation fuel development in Indonesia, to judge whether the project could be built and financed.",
    "solution": "DKC carried out the feasibility study, reviewing the market for the product, the project's economics, and the main risks to the financing case.",
    "result": "Feasibility study prepared for KEXIM.",
    "relevance": "SAF projects combine feedstock, technology, and offtake risk, and owners need these assessed together before committing capital.",
    "refs": []
  },
  {
    "id": 61,
    "tag": "Pharmaceutical manufacturing (Healthcare Unit)",
    "headline": "Pharmaceutical manufacturing facility, Kyrgyzstan",
    "location": "Kyrgyzstan",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit supported business development for a pharmaceutical manufacturing facility in Kyrgyzstan for a private client.",
    "about": [],
    "role": "Business development for a private client (DKC Healthcare Unit).",
    "scope": [
      "Business development support",
      "Project structuring",
      "Coordination with local counterparts"
    ],
    "challenge": "A private client planning a pharmaceutical manufacturing facility in Kyrgyzstan needed support in shaping the project and taking it forward with local counterparts.",
    "solution": "DKC's Healthcare Unit supported business development for the facility, including how the project could be structured and advanced.",
    "result": "Business development advice provided to the client.",
    "relevance": "Industrial healthcare projects in Central Asia depend on early structuring and local coordination, which shape everything that follows.",
    "refs": []
  },
  {
    "id": 60,
    "tag": "Pharmaceutical manufacturing (Healthcare Unit)",
    "headline": "Pharmaceutical manufacturing facility on a BOO basis, Uzbekistan",
    "location": "Uzbekistan",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit carried out business development for KIND on a pharmaceutical manufacturing facility in Uzbekistan to be developed on a build-own-operate (BOO) basis.",
    "about": [],
    "role": "Business development (BOO) for KIND (DKC Healthcare Unit).",
    "scope": [
      "Business development support",
      "BOO project structuring",
      "Coordination with Uzbek counterparts"
    ],
    "challenge": "KIND was supporting a pharmaceutical manufacturing facility in Uzbekistan to be developed on a build-own-operate basis, and needed the project shaped into a form that could be taken forward.",
    "solution": "DKC's Healthcare Unit carried out business development for the facility, working on how a BOO structure could be applied to the project.",
    "result": "Business development work prepared for KIND.",
    "relevance": "A BOO structure puts ownership and operating risk with the developer, so the structure has to be right before an owner commits.",
    "refs": []
  },
  {
    "id": 59,
    "tag": "Green hydrogen",
    "headline": "Port of Brisbane green hydrogen hub, Australia",
    "location": "Port of Brisbane, Queensland, Australia",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a green hydrogen development at the Port of Brisbane, Queensland.",
    "about": [
      "Lion Energy is developing a green hydrogen production and refuelling hub at the Port of Brisbane in Queensland, aimed at heavy-vehicle fleets such as public buses and trucks. In August 2024 Lion signed a joint development agreement with DGA Energy Solutions Australia, a Mitsubishi subsidiary, and Korea's Samsung C&T. Lion holds 50% of the project and the two partners 25% each.",
      "The hub is planned around two 1 MW alkaline electrolysers producing about 850 kg of hydrogen a day, or more than 300 tonnes a year, for the Australian domestic market. At signing, the site lease and the relevant government approvals were in place, with the start of construction subject to the partners' agreement."
    ],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEITI needed a feasibility study on a green hydrogen development at the Port of Brisbane, to assess whether the project could be delivered and financed.",
    "solution": "DKC carried out the feasibility study, reviewing the project's market, economics, and the main risks to its financing case.",
    "result": "Feasibility study delivered to KEITI (engagement November 2024 to July 2025).",
    "relevance": "Small, domestic-market hydrogen hubs rest on offtake from fleet operators, and owners need that demand case tested before scaling up.",
    "refs": [
      {
        "label": "pv magazine — Lion Energy, Mitsubishi's DGA, Samsung C&T to build hydrogen hub in Australia (Aug 2024)",
        "url": "https://www.pv-magazine.com/2024/08/26/lion-energy-mitsubishis-dga-samsung-ct-to-build-hydrogen-hub-in-australia/"
      },
      {
        "label": "Etoday — Green hydrogen supply in Australia; Samsung C&T signs co-development agreement (Aug 2024, Korean)",
        "url": "https://www.etoday.co.kr/news/view/2394113"
      }
    ]
  },
  {
    "id": 58,
    "tag": "Solar PV and carbon credits",
    "headline": "Jujuy solar power and carbon credits, Argentina",
    "location": "Jujuy province, Argentina",
    "capacity": "210 MW solar PV, with carbon credits",
    "delivered": "DKC",
    "summary": "DKC carried the market and carbon credit workstreams of KEITI's feasibility study for a 210 MW solar project and carbon credit acquisition in Jujuy, Argentina.",
    "about": [],
    "role": "Market and carbon credit workstreams of the feasibility study for KEITI.",
    "scope": [
      "Power market analysis",
      "Carbon credit market and mechanism review",
      "Carbon credit revenue assessment"
    ],
    "challenge": "KEITI needed to understand the power market for a 210 MW solar project in Jujuy and how carbon credits from the project could be generated, acquired, and valued.",
    "solution": "DKC carried the market and carbon credit parts of the study: the Argentine power market, the carbon credit mechanisms available to the project, and the resulting carbon credit case.",
    "result": "Market and carbon credit analysis delivered to KEITI as part of the feasibility study (November 2024 to June 2025).",
    "relevance": "Carbon credits treated as a revenue line that has to be evidenced, not assumed, alongside the power market case.",
    "refs": []
  },
  {
    "id": 57,
    "tag": "Green hydrogen and ammonia",
    "headline": "Green hydrogen and ammonia plant, Dubai",
    "location": "Dubai, United Arab Emirates",
    "capacity": "600 MW electrolysis, 1,200 MW renewables; 37,000 t/yr green hydrogen and 200,000 t/yr green ammonia",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a green hydrogen and ammonia plant in Dubai, with 600 MW of electrolysis and 200,000 tonnes a year of green ammonia.",
    "about": [],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEITI needed a feasibility study on a green hydrogen and ammonia plant in Dubai, combining 1,200 MW of renewables with 600 MW of electrolysis, to assess whether it could be delivered and financed.",
    "solution": "DKC carried out the feasibility study, reviewing the market for green ammonia, the project's economics, and the main risks across power supply, production, and offtake.",
    "result": "Feasibility study delivered to KEITI.",
    "relevance": "Integrated renewables-to-ammonia projects tie several risks into one revenue line, and owners need them assessed together.",
    "refs": []
  },
  {
    "id": 56,
    "tag": "Green ammonia",
    "headline": "Green ammonia project, Western Australia",
    "location": "Western Australia",
    "capacity": "1.1 GW electrolysis, 1.9 GW renewables; 500,000 t/yr green ammonia",
    "delivered": "DKC",
    "summary": "DKC carried out KEXIM's feasibility study on a green ammonia project in Western Australia with 1.1 GW of electrolysis and 500,000 tonnes a year of output.",
    "about": [],
    "role": "Feasibility study for KEXIM.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEXIM needed a feasibility study on a 500,000 t/yr green ammonia project in Western Australia, powered by 1.9 GW of renewables, to inform its view of the project's financing case.",
    "solution": "DKC carried out the feasibility study, reviewing the export market for green ammonia, the project's economics, and the risks a lender would weigh.",
    "result": "Feasibility study delivered to KEXIM (engagement May 2024 to April 2025).",
    "relevance": "Export-scale green ammonia is assessed by lenders on the strength of its offtake and power supply, which a feasibility study must test early.",
    "refs": []
  },
  {
    "id": 55,
    "tag": "Medical waste-to-energy",
    "headline": "Medical waste-to-energy plant, Tashkent, Uzbekistan",
    "location": "Tashkent, Uzbekistan",
    "capacity": "4.5 MW power; 22,000 t/yr medical waste",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a 4.5 MW medical waste-to-energy plant in Tashkent treating 22,000 tonnes of waste a year.",
    "about": [],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Feasibility study",
      "Waste volume and tariff review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEITI needed a feasibility study on a plant in Tashkent that would treat 22,000 tonnes of medical waste a year and generate 4.5 MW of power.",
    "solution": "DKC carried out the feasibility study, reviewing the project's revenue basis from waste treatment and power, its economics, and its main risks.",
    "result": "Feasibility study delivered to KEITI (engagement June to November 2024).",
    "relevance": "Waste-to-energy revenues depend on both waste supply and power sales, so the two must be tested together.",
    "refs": []
  },
  {
    "id": 54,
    "tag": "Green methanol",
    "headline": "Green methanol project, Queensland, Australia",
    "location": "Queensland, Australia",
    "capacity": "200 MW",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a 200 MW green methanol project in Queensland.",
    "about": [],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEITI needed a feasibility study on a 200 MW green methanol project in Queensland, to assess whether it could be delivered and financed.",
    "solution": "DKC carried out the feasibility study, reviewing the market for green methanol, the project's economics, and its main risks.",
    "result": "Feasibility study prepared for KEITI.",
    "relevance": "Green methanol depends on both hydrogen and a low-carbon CO₂ source, and owners need both supply chains tested.",
    "refs": []
  },
  {
    "id": 53,
    "tag": "Green ammonia",
    "headline": "Green hydrogen and ammonia project, British Columbia, Canada",
    "location": "British Columbia, Canada",
    "capacity": "255 MW electrolysis; 37,815 t/yr green hydrogen; 210,000 t/yr green ammonia",
    "delivered": "DKC",
    "summary": "DKC carried out KEXIM's feasibility study on a green hydrogen and ammonia project in British Columbia producing 210,000 tonnes of green ammonia a year.",
    "about": [],
    "role": "Feasibility study for KEXIM.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEXIM needed a feasibility study on a 210,000 t/yr green ammonia project in British Columbia, to inform its view of the project's financing case.",
    "solution": "DKC carried out the feasibility study, reviewing the market for green ammonia exports, the project's economics, and the risks a lender would weigh.",
    "result": "Feasibility study delivered to KEXIM.",
    "relevance": "Canadian ammonia exports to Asia depend on power, logistics, and offtake lining up, which a feasibility study must test together.",
    "refs": []
  },
  {
    "id": 52,
    "tag": "Green hydrogen and ammonia",
    "headline": "Port of Newcastle green hydrogen and ammonia, Australia",
    "location": "Kooragang Island, Port of Newcastle, New South Wales, Australia",
    "delivered": "DKC",
    "summary": "DKC carried out KIND's feasibility study on green hydrogen and ammonia development at the Port of Newcastle, New South Wales.",
    "about": [
      "The Port of Newcastle is developing a Clean Energy Precinct on a 220-hectare former industrial site on Kooragang Island, in the Hunter region of New South Wales, as a hub for producing, storing, and exporting green hydrogen and ammonia. The precinct was planned to support about 1.6 GW of electrolytic hydrogen production within five years, backed by an A$100 million federal commitment for shared infrastructure.",
      "In October 2024 the port reported that front-end engineering design and environmental impact work were under way. It named Korea Electric Power Corporation (KEPCO) as its production partner, expected to begin building facilities in 2027, with the precinct operational from 2030."
    ],
    "role": "Feasibility study for KIND.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Carbon credit considerations"
    ],
    "challenge": "KIND needed a feasibility study on green hydrogen and ammonia development at the Port of Newcastle, including its carbon-credit dimension.",
    "solution": "DKC carried out the feasibility study, reviewing the export market, the project's economics, and how carbon credits bear on the case.",
    "result": "Feasibility study delivered to KIND (engagement November 2023 to May 2024).",
    "relevance": "Port-based hydrogen hubs share infrastructure among several producers, so an owner's case depends on the precinct as well as its own plant.",
    "refs": [
      {
        "label": "Ammonia Energy Association — The Clean Energy Precinct: Port of Newcastle's renewable ammonia plans unveiled (May 2023)",
        "url": "https://ammoniaenergy.org/articles/the-clean-energy-precinct-port-of-newcastles-renewable-ammonia-plans-unveiled"
      },
      {
        "label": "pv magazine Australia — Newcastle port progresses clean energy precinct plans (Oct 2024)",
        "url": "http://www.pv-magazine-australia.com/2024/10/15/newcastle-port-progress-plans-for-clean-energy-precinct/"
      }
    ]
  },
  {
    "id": 51,
    "tag": "Nuclear-based hydrogen",
    "headline": "Basic plan for nuclear-based hydrogen, Uljin, Korea",
    "location": "Uljin County, North Gyeongsang Province, Korea",
    "delivered": "DKC",
    "summary": "DKC carried out a feasibility study for Uljin County on its plan for nuclear-based hydrogen production.",
    "about": [
      "Uljin County, on Korea's east coast, hosts ten nuclear reactors. In March 2023 it was designated a candidate site for a national industrial complex for nuclear-based hydrogen, intended to use electricity and heat from the reactors to produce clean hydrogen at scale.",
      "The complex is planned on about 1.45 million square meters at Hujeong-ri, Jukbyeon-myeon, with a total project cost of about KRW 433 billion, and is being developed by Korea Land and Housing Corporation (LH) and Gyeongbuk Development Corporation. LH applied for approval of the industrial complex plan in November 2025; the published schedule shows construction from 2028 and completion in 2033."
    ],
    "role": "Feasibility study for Uljin County, recorded as the basic plan for nuclear hydrogen.",
    "scope": [
      "Feasibility study",
      "Basic plan",
      "Demand and market review",
      "Financial analysis"
    ],
    "challenge": "Uljin County needed a basic plan and feasibility assessment for nuclear-based hydrogen, to support its designation as a candidate site for a national hydrogen industrial complex.",
    "solution": "DKC carried out the feasibility study for the county's nuclear hydrogen basic plan, reviewing how the project could be developed and what its economics would be.",
    "result": "Feasibility study delivered to Uljin County (engagement August 2023 to August 2024).",
    "relevance": "Public-sector hydrogen plans need a grounded economic case before land, infrastructure, and private investment can follow.",
    "refs": [
      {
        "label": "Asia Economy — Global nuclear clean hydrogen industry, Uljin-gun leads the way (May 2023)",
        "url": "https://www.asiae.co.kr/en/article/2023052616195178266"
      },
      {
        "label": "Asia Economy — Draft industrial complex plan and impact assessments released by LH and Gyeongbuk Development Corporation (Dec 2025)",
        "url": "https://www.asiae.co.kr/en/article/2025120216592438918"
      }
    ]
  },
  {
    "id": 49,
    "tag": "Battery storage",
    "headline": "Shannonbridge B battery storage and grid stabilization, Ireland",
    "location": "Shannonbridge, County Offaly, Ireland",
    "capacity": "63.2 MW battery storage with synchronous condenser",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study for a 63.2 MW battery storage construction project in Ireland, the Shannonbridge B hybrid grid-stabilization plant.",
    "about": [
      "Shannonbridge B in County Offaly is a hybrid grid-stabilization plant that combines a battery energy storage system of about 63 MW and 160 MWh with a synchronous condenser and flywheel, providing inertia and other system services to EirGrid. It is held through a special purpose vehicle owned 80% by Hanwha Energy and 20% by Javah Energy, developed with Irish developer Lumcloon Energy. Groundbreaking took place in September 2022, with an investment of about US$122.5 million. The plant was officially opened by the Taoiseach on 6 March 2026."
    ],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Market and grid services revenue review",
      "Project financial model",
      "Risk and sensitivity analysis"
    ],
    "challenge": "KEITI needed a feasibility study on a 63.2 MW battery storage construction project in Ireland, where revenue depends on grid system services rather than energy sales alone.",
    "solution": "DKC's feasibility study reviewed the Irish system services market, modeled the project's revenues and costs, and tested the main risks and sensitivities.",
    "result": "Feasibility study delivered to KEITI (May 2023 to March 2024).",
    "relevance": "Storage revenues built on grid services, assessed the way an owner and its lenders need to see them.",
    "refs": [
      {
        "label": "Hanwha — Hanwha Energy promotes third energy storage system (ESS) project in Ireland (Oct 2022)",
        "url": "https://www.hanwha.com/en/news_and_media/press_release/hanwha-energy-promotes-third-energye-storage-system-ess-project-in-ireland.html"
      },
      {
        "label": "University of Limerick — Official reopening of a power station, 6th March 2026",
        "url": "https://www.ul.ie/scieng/schools-and-departments/school-natural-sciences/department-physics/news/official-reopening-of-a-power-station-6th-march-2026"
      }
    ]
  },
  {
    "id": 48,
    "tag": "LNG-to-power",
    "headline": "Review of the Hai Lang LNG-to-power feasibility study, Vietnam",
    "location": "Hai Lang district, Quang Tri province, Vietnam",
    "capacity": "1,500 MW combined cycle (Phase 1)",
    "delivered": "DKC",
    "summary": "DKC reviewed the feasibility study report for the Hai Lang LNG-to-power project for KEPCO E&C.",
    "about": [
      "The Hai Lang LNG power centre in Quang Tri province is being developed by a consortium of Vietnam's T&T Group with Korea Gas Corporation (KOGAS), Hanwha Energy, and Korea Southern Power (KOSPO). Its first phase is a 1,500 MW combined-cycle plant with an LNG import terminal on a 120-hectare site; ground was broken in January 2022 on an investment of about US$2.37 billion. Vietnam's Ministry of Industry and Trade approved the project's local feasibility study in January 2025."
    ],
    "role": "Feasibility study report review for KEPCO E&C.",
    "scope": [
      "Review of the feasibility study report",
      "Financial and commercial assumptions review",
      "Risk review"
    ],
    "challenge": "KEPCO E&C needed an independent review of the feasibility study report for the Hai Lang LNG-to-power project.",
    "solution": "DKC reviewed the feasibility study report, checking its financial and commercial assumptions and the risks it identified.",
    "result": "Feasibility study review delivered to KEPCO E&C (March to July 2023).",
    "relevance": "An owner-side check of a feasibility study prepared by others, before it is relied on for decisions.",
    "refs": [
      {
        "label": "VietnamPlus — Work starts on US$2.37-billion Hai Lang LNG power centre in Quang Tri (Jan 2022)",
        "url": "https://en.vietnamplus.vn/work-starts-on-237-billion-usd-hai-lang-lng-power-centre-in-quang-tri-post220764.vnp"
      },
      {
        "label": "Asia Economy — Nambu Power, approval for local feasibility study of 'Vietnam Hai Lang Gas Project' (Feb 2025)",
        "url": "https://www.asiae.co.kr/en/article/2025020414043739067"
      }
    ]
  },
  {
    "id": 47,
    "tag": "Financial advisory",
    "headline": "Financial advisory for KIND, Korea",
    "location": "Korea",
    "delivered": "DKC",
    "summary": "DKC provided financial advisory services to KIND in 2023.",
    "about": [],
    "role": "Financial advisory for KIND.",
    "scope": [
      "Financial analysis",
      "Financial model review",
      "Financing structure advice"
    ],
    "challenge": "KIND needed financial advisory support for an infrastructure engagement in 2023.",
    "solution": "DKC provided financial advisory services to KIND, covering financial analysis and advice on financing structure.",
    "result": "Financial advisory delivered to KIND (March to July 2023).",
    "relevance": "Financial advisory support for a public development agency that sponsors Korean participation in overseas infrastructure.",
    "refs": []
  },
  {
    "id": 46,
    "tag": "Battery storage and grid stability",
    "headline": "Shannonbridge B battery storage with synchronous condenser, Ireland",
    "location": "Shannonbridge, County Offaly, Ireland",
    "capacity": "63.2 MW battery storage; synchronous condenser of 4,000 MWs inertia",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study for a hybrid project in Ireland combining 63.2 MW of battery storage with a synchronous condenser, the Shannonbridge B grid-stabilization plant.",
    "about": [
      "Shannonbridge B in County Offaly is a hybrid grid-stabilization plant that combines a battery energy storage system of about 63 MW and 160 MWh with a synchronous condenser and flywheel, providing inertia and other system services to EirGrid. It is held through a special purpose vehicle owned 80% by Hanwha Energy and 20% by Javah Energy, developed with Irish developer Lumcloon Energy. Groundbreaking took place in September 2022, with an investment of about US$122.5 million. The plant was officially opened by the Taoiseach on 6 March 2026."
    ],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Grid system services market review",
      "Project financial model",
      "Risk and sensitivity analysis"
    ],
    "challenge": "KEITI needed a feasibility study on a hybrid battery storage and synchronous condenser project in Ireland, whose revenues come from inertia and other grid system services.",
    "solution": "DKC's feasibility study reviewed the Irish system services market for both the battery and the synchronous condenser, modeled the project's revenues and costs, and tested the main risks and sensitivities.",
    "result": "Feasibility study delivered to KEITI (May to November 2023).",
    "relevance": "Grid-stability assets valued on system services, a revenue model that grows as power systems take on more renewables.",
    "refs": [
      {
        "label": "Hanwha — Hanwha Energy promotes third energy storage system (ESS) project in Ireland (Oct 2022)",
        "url": "https://www.hanwha.com/en/news_and_media/press_release/hanwha-energy-promotes-third-energye-storage-system-ess-project-in-ireland.html"
      },
      {
        "label": "University of Limerick — Official reopening of a power station, 6th March 2026",
        "url": "https://www.ul.ie/scieng/schools-and-departments/school-natural-sciences/department-physics/news/official-reopening-of-a-power-station-6th-march-2026"
      }
    ]
  },
  {
    "id": 45,
    "tag": "Renewables and green ammonia",
    "headline": "Renewable energy complex with green hydrogen and ammonia, Western Australia",
    "location": "Western Australia",
    "capacity": "667 MW electrolysis, 900 MW renewables; 28,000 t/yr green hydrogen; 150,000 t/yr green ammonia",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a renewable energy complex in Western Australia producing green hydrogen and 150,000 tonnes a year of green ammonia.",
    "about": [],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEITI needed a feasibility study on a renewable energy complex in Western Australia combining 900 MW of renewables with 667 MW of electrolysis for green hydrogen and ammonia.",
    "solution": "DKC carried out the feasibility study, reviewing the market for green ammonia, the project's economics, and the main risks across power, production, and offtake.",
    "result": "Feasibility study delivered to KEITI (engagement May to December 2022).",
    "relevance": "Integrated renewables-to-ammonia complexes need power, production, and offtake tested on one model before an owner commits.",
    "refs": []
  },
  {
    "id": 44,
    "tag": "Customs infrastructure",
    "headline": "Container inspection facility for Sri Lanka Customs",
    "location": "Sri Lanka",
    "delivered": "DKC",
    "summary": "DKC carried out KIND's feasibility study on a container inspection facility for Sri Lanka Customs, planned on a build-operate-transfer (BOT) basis.",
    "about": [],
    "role": "Feasibility study for KIND.",
    "scope": [
      "Feasibility study",
      "Demand review",
      "BOT structure and financial analysis",
      "Risk review"
    ],
    "challenge": "KIND needed a feasibility study on a container inspection facility for Sri Lanka Customs, to be delivered on a BOT basis, to judge whether the project could work for a private investor.",
    "solution": "DKC carried out the feasibility study, reviewing inspection demand, the BOT structure, and the project's economics and risks.",
    "result": "Feasibility study delivered to KIND (engagement April to November 2022).",
    "relevance": "Public-service BOT projects depend on how the revenue mechanism is designed, which a feasibility study must test first.",
    "refs": []
  },
  {
    "id": 43,
    "tag": "Education PPP",
    "headline": "Qatar Schools PPP, Package 3",
    "location": "Qatar",
    "capacity": "14 schools",
    "delivered": "DKC",
    "summary": "DKC carried out a pre-feasibility study for Samil PwC on the third package of Qatar's schools public-private partnership program, covering 14 schools.",
    "about": [
      "In February 2021 Qatar's Ministry of Commerce and Industry, with the Ministry of Education and Higher Education and the Public Works Authority (Ashghal), announced the third package of the Qatar Schools Public-Private Partnership Development Program and invited expressions of interest.",
      "The package covers 14 schools: four secondary, five preparatory, and four primary schools, and one school for students with special needs. The private partner would design, build, and finance the schools, demolish vacated school buildings, and operate and maintain the facilities over a 25-year term, after which the assets transfer to the public authority."
    ],
    "role": "Pre-feasibility study for Samil PwC.",
    "scope": [
      "Pre-feasibility study",
      "PPP structure review",
      "Preliminary financial analysis"
    ],
    "challenge": "Samil PwC needed an early assessment of the third package of Qatar's schools PPP program, a 25-year design, build, finance, operate, and maintain concession for 14 schools.",
    "solution": "DKC carried out the pre-feasibility study, reviewing the PPP structure and the preliminary economics of the package.",
    "result": "Pre-feasibility study delivered to Samil PwC.",
    "relevance": "Availability-based social infrastructure PPPs are won or lost on long-term operating and lifecycle costs, which need to be understood before bidding.",
    "refs": [
      {
        "label": "Qatar News Agency — Third package of Qatar Public Private Partnership Schools Development Program announced (Feb 2021)",
        "url": "https://www.qna.org.qa/en/News-Area/News/2021-02/22/0049-third-package-of-qatar-public-private-partnership-schools-development-program-announced"
      }
    ]
  },
  {
    "id": 42,
    "tag": "Hydropower",
    "headline": "Sulawesi 30 MW small hydropower, Indonesia",
    "location": "Sulawesi, Indonesia",
    "capacity": "30 MW",
    "delivered": "DKC",
    "summary": "DKC carried out the financial, tax, and legal review of a 30 MW small hydropower project in Sulawesi for Dohwa Engineering.",
    "about": [],
    "role": "Financial, tax, and legal review for Dohwa Engineering.",
    "scope": [
      "Financial analysis",
      "Tax review",
      "Legal review"
    ],
    "challenge": "Dohwa Engineering needed a financial, tax, and legal review of a 30 MW small hydropower project in Sulawesi.",
    "solution": "DKC reviewed the project's financial case together with the Indonesian tax and legal framework that applies to it.",
    "result": "Financial, tax, and legal review delivered to Dohwa Engineering (December 2021 to April 2022).",
    "relevance": "Financial, tax, and legal questions reviewed together, as lenders will review them, for a small run-of-river project.",
    "refs": []
  },
  {
    "id": 41,
    "tag": "Solar PV",
    "headline": "Alfonso el Sabio solar PV, Spain",
    "location": "Spain",
    "capacity": "600 MW",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study for the 600 MW Alfonso el Sabio solar PV project in Spain.",
    "about": [],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Spanish power market and offtake review",
      "Project financial model",
      "Risk and sensitivity analysis"
    ],
    "challenge": "KEITI needed a feasibility study on a 600 MW solar PV project in Spain, a market where large solar plants sell into a liberalized wholesale market or under corporate power purchase agreements.",
    "solution": "DKC's feasibility study reviewed the Spanish power market and offtake options, built the project financial model, and tested the main risks and sensitivities.",
    "result": "Feasibility study delivered to KEITI.",
    "relevance": "Large-scale solar assessed against wholesale price risk in a mature European market.",
    "refs": []
  },
  {
    "id": 40,
    "tag": "Hydropower",
    "headline": "Battambang II hydropower, Cambodia",
    "location": "Battambang province, Cambodia",
    "capacity": "30 MW",
    "delivered": "DKC",
    "summary": "DKC carried out KIND's feasibility study for the 30 MW Battambang II hydropower project in Cambodia.",
    "about": [],
    "role": "Feasibility study for KIND.",
    "scope": [
      "Power market and offtake review",
      "Project financial model",
      "Financing structure",
      "Risk analysis"
    ],
    "challenge": "KIND needed a feasibility study on the 30 MW Battambang II hydropower project to inform Korean participation in Cambodia's power sector.",
    "solution": "DKC's feasibility study reviewed the offtake arrangements with the Cambodian power sector, built the project financial model, and assessed the financing structure and the main risks.",
    "result": "Feasibility study delivered to KIND (August 2022 to January 2023).",
    "relevance": "A small hydropower project assessed for bankability in a developing market with a single state offtaker.",
    "refs": []
  },
  {
    "id": 39,
    "tag": "Green ammonia",
    "headline": "Green ammonia project, Duqm, Oman",
    "location": "Duqm, Oman",
    "capacity": "1,200 kt/yr green ammonia (3.4 kt/day)",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a green ammonia project at Duqm, Oman, with a capacity of about 1.2 million tonnes a year.",
    "about": [],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEITI needed a feasibility study on an export-scale green ammonia project at Duqm, to assess whether it could be delivered and financed.",
    "solution": "DKC carried out the feasibility study, reviewing the export market for green ammonia, the project's economics, and its main risks.",
    "result": "Feasibility study delivered to KEITI (engagement November 2021 to July 2022).",
    "relevance": "Export-scale green ammonia in the Gulf competes on power cost and offtake, both of which need testing before an owner commits.",
    "refs": []
  },
  {
    "id": 38,
    "tag": "Green ammonia",
    "headline": "Green ammonia project, Western Australia",
    "location": "Western Australia",
    "capacity": "1,200 kt/yr green ammonia (3.4 kt/day)",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a green ammonia project in Western Australia.",
    "about": [],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEITI needed a feasibility study on a green ammonia project in Western Australia, to assess whether it could be delivered and financed.",
    "solution": "DKC carried out the feasibility study, reviewing the export market for green ammonia, the project's economics, and its main risks.",
    "result": "Feasibility study delivered to KEITI (engagement July to December 2022).",
    "relevance": "Export-scale green ammonia depends on renewable power, port access, and offtake lining up, which a feasibility study must test together.",
    "refs": []
  },
  {
    "id": 36,
    "tag": "Education PPP",
    "headline": "Qatar Schools PPP, Package 3",
    "location": "Qatar",
    "capacity": "14 schools",
    "delivered": "With Synergy Korea",
    "summary": "DKC carried out a pre-feasibility study for Samil PwC on the third package of Qatar's schools public-private partnership program, covering 14 schools.",
    "about": [
      "In February 2021 Qatar's Ministry of Commerce and Industry, with the Ministry of Education and Higher Education and the Public Works Authority (Ashghal), announced the third package of the Qatar Schools Public-Private Partnership Development Program and invited expressions of interest.",
      "The package covers 14 schools: four secondary, five preparatory, and four primary schools, and one school for students with special needs. The private partner would design, build, and finance the schools, demolish vacated school buildings, and operate and maintain the facilities over a 25-year term, after which the assets transfer to the public authority."
    ],
    "role": "Pre-feasibility study for Samil PwC.",
    "scope": [
      "Pre-feasibility study",
      "PPP structure review",
      "Preliminary financial analysis"
    ],
    "challenge": "Samil PwC needed an early assessment of the third package of Qatar's schools PPP program, a 25-year design, build, finance, operate, and maintain concession for 14 schools.",
    "solution": "DKC carried out the pre-feasibility study, reviewing the PPP structure and the preliminary economics of the package.",
    "result": "Pre-feasibility study delivered to Samil PwC.",
    "relevance": "Availability-based social infrastructure PPPs are won or lost on long-term operating and lifecycle costs, which need to be understood before bidding.",
    "refs": [
      {
        "label": "Qatar News Agency — Third package of Qatar Public Private Partnership Schools Development Program announced (Feb 2021)",
        "url": "https://www.qna.org.qa/en/News-Area/News/2021-02/22/0049-third-package-of-qatar-public-private-partnership-schools-development-program-announced"
      }
    ]
  },
  {
    "id": 35,
    "tag": "Supercritical CO₂ power",
    "headline": "Supercritical CO₂ power plant, Texas, USA",
    "location": "Texas, USA",
    "capacity": "About 5 MW",
    "delivered": "DKC",
    "summary": "DKC provided transaction advisory services to Hanwha Power Systems on a supercritical CO₂ power plant of about 5 MW in Texas.",
    "about": [],
    "role": "Transaction advisory for Hanwha Power Systems.",
    "scope": [
      "Transaction structuring",
      "Financial analysis",
      "Commercial terms review"
    ],
    "challenge": "Hanwha Power Systems needed transaction advice on a supercritical CO₂ power plant of about 5 MW in Texas, a new technology without an established commercial track record.",
    "solution": "DKC advised on the transaction, covering its structure, the financial analysis, and the commercial terms.",
    "result": "Transaction advisory delivered to Hanwha Power Systems (October 2021 to February 2022).",
    "relevance": "A first-of-a-kind power technology taken through a commercial transaction, where risk allocation matters more than usual.",
    "refs": []
  },
  {
    "id": 33,
    "tag": "Gas-to-power",
    "headline": "Financial and bid advisory for gas-to-power, Dominican Republic",
    "location": "Manzanillo, Montecristi province, Dominican Republic",
    "capacity": "350–400 MW combined cycle (tender basis)",
    "delivered": "With Synergy Korea",
    "summary": "DKC provided financial and bid advisory to KOGAS for its participation in the 350–400 MW Manzanillo gas-to-power tender, alongside the feasibility study and financial model.",
    "about": [
      "In 2021 the Dominican Republic tendered two natural gas-fired combined-cycle plants at Manzanillo, on the country's north-west coast, together with a gas terminal with onshore storage. The tender (EDES-LPI-NG-01-2021) required each plant to contract between 350 MW and 400 MW under a 15-year power purchase contract."
    ],
    "role": "Financial and bid advisory for KOGAS.",
    "scope": [
      "Bid strategy",
      "Financial model and tariff analysis",
      "Financing assumptions",
      "Bid support"
    ],
    "challenge": "KOGAS was preparing to bid in a 350–400 MW gas-to-power tender at Manzanillo and needed financial and bid advice within the tender timetable.",
    "solution": "DKC provided the financial and bid advisory, using the project financial model to test tariff, fuel, and financing assumptions and support the bid strategy.",
    "result": "Financial and bid advisory delivered to KOGAS (October 2021 to January 2022).",
    "relevance": "Tariff and financing positions tested on one model before a bid is committed.",
    "refs": [
      {
        "label": "Riviera — Dominican Republic tenders for natural gas-fired plants and terminal (Mar 2021)",
        "url": "https://www.rivieramm.com/news-content-hub/news-content-hub/dominican-republic-tenders-for-natural-gas-fired-plants-and-terminal-64703"
      }
    ]
  },
  {
    "id": 31,
    "tag": "Solar PV",
    "headline": "Anuradhapura 100 MW solar PV, Sri Lanka",
    "location": "Anuradhapura district, Sri Lanka",
    "capacity": "100 MW",
    "delivered": "DKC",
    "summary": "DKC carried out KIND's feasibility study for a 100 MW solar PV project in Anuradhapura, Sri Lanka.",
    "about": [],
    "role": "Feasibility study for KIND.",
    "scope": [
      "Power market and offtake review",
      "Project financial model",
      "Financing structure",
      "Risk analysis"
    ],
    "challenge": "KIND needed a feasibility study on a 100 MW solar PV project in Anuradhapura to inform Korean participation in Sri Lanka's renewable power program.",
    "solution": "DKC's feasibility study reviewed the offtake arrangements with the Sri Lankan power sector, built the project financial model, and assessed the financing structure and the main risks.",
    "result": "Feasibility study delivered to KIND (July to December 2021).",
    "relevance": "Utility-scale solar assessed for bankability where the offtaker's credit is the central risk.",
    "refs": []
  },
  {
    "id": 30,
    "tag": "Combined heat and power",
    "headline": "Mubarek CHP modernization, Uzbekistan",
    "location": "Mubarek, Kashkadarya region, Uzbekistan",
    "capacity": "400 MW",
    "delivered": "With Synergy Korea",
    "summary": "DKC provided financial and transaction advisory to SK ecoplant on the modernization of the Mubarek combined heat and power plant in Uzbekistan.",
    "about": [
      "The Mubarek thermal power plant, about 520 km south-west of Tashkent, is a 60 MW combined heat and power plant that began operating in 1985. In January 2021 SK Engineering & Construction (now SK ecoplant) secured exclusive development rights to modernize it and add a new high-efficiency gas-fired plant of about 300–450 MW, with an investment of up to US$600 million. Under the agreement the Uzbek government would buy the plant's power for 25 years and supply its fuel. In November 2021 SK ecoplant signed a wider memorandum with Uzbekistan's Ministry of Investment and Foreign Trade on energy modernization."
    ],
    "role": "Financial and transaction advisory for SK ecoplant.",
    "scope": [
      "Financial model and analysis",
      "Financing structure",
      "Transaction and contract terms review",
      "Risk analysis"
    ],
    "challenge": "SK ecoplant, as developer of the Mubarek modernization, needed financial and transaction advice to structure the project under a long-term power purchase arrangement with the Uzbek government.",
    "solution": "DKC provided financial and transaction advisory, covering the financial model and analysis, the financing structure, and the review of the project's commercial terms and risks.",
    "result": "Financial and transaction advisory delivered to SK ecoplant (from June 2021).",
    "relevance": "A brownfield power and heat modernization structured as an investment, where the state is offtaker and fuel supplier.",
    "refs": [
      {
        "label": "Asia Economy — SK Construction wins $600 million Uzbekistan power plant modernization project (Feb 2021)",
        "url": "https://www.asiae.co.kr/en/article/2021013123110822504"
      },
      {
        "label": "Asia Economy — SK Ecoplant to expand Uzbekistan energy modernization project (Nov 2021)",
        "url": "https://www.asiae.co.kr/en/article/2021112907442521934"
      }
    ]
  },
  {
    "id": 29,
    "tag": "Battery storage",
    "headline": "Financial advisory for 200 MW battery storage, Ireland",
    "location": "Lumcloon and Shannonbridge, County Offaly, Ireland",
    "capacity": "200 MW",
    "delivered": "With Synergy Korea",
    "summary": "DKC provided financial advisory to Hanwha Energy on its 200 MW battery storage projects in Ireland.",
    "about": [
      "Hanwha Energy and Irish developer Lumcloon Energy developed battery storage projects at Lumcloon and Shannonbridge in County Offaly, described at the time as the largest of their kind in Ireland, with about 200 MW in total. They earn revenue from grid system services under Ireland's DS3 regime. Construction began in 2019. According to Hanwha, the two plants began operating in 2021 and were financed by the Export-Import Bank of Korea."
    ],
    "role": "Financial advisory for Hanwha Energy.",
    "scope": [
      "Financial model",
      "Financing structure",
      "Lender and financing support"
    ],
    "challenge": "Hanwha Energy needed financial advice on its 200 MW of battery storage projects in Ireland, whose revenues depend on grid system services.",
    "solution": "DKC provided financial advisory, covering the financial model and the financing structure for the projects.",
    "result": "Financial advisory delivered to Hanwha Energy (January to November 2020).",
    "relevance": "Storage financed on system services revenues, a structure lenders were still learning to assess.",
    "refs": [
      {
        "label": "Matheson — Hanwha Energy Corporation and Lumcloon Energy advised on developing Ireland's largest battery energy storage systems (Nov 2020)",
        "url": "https://www.matheson.com/experience/hanwha-energy-corporation-and-lumcloon-energy-advised-on-developing-irelands-largest-battery-energy-storage-systems"
      },
      {
        "label": "The Irish Times — Irish-Korean partnership begins work on €100m electricity project (Sep 2019)",
        "url": "https://www.irishtimes.com/business/energy-and-resources/irish-korean-partnership-begins-work-on-100m-electricity-project-1.4008146"
      },
      {
        "label": "Hanwha — Hanwha Energy promotes third energy storage system (ESS) project in Ireland (Oct 2022)",
        "url": "https://www.hanwha.com/en/news_and_media/press_release/hanwha-energy-promotes-third-energye-storage-system-ess-project-in-ireland.html"
      }
    ]
  },
  {
    "id": 28,
    "tag": "Battery storage",
    "headline": "Commercial operations modeling for 200 MW battery storage, Ireland",
    "location": "Lumcloon and Shannonbridge, County Offaly, Ireland",
    "capacity": "200 MW",
    "delivered": "With Synergy Korea",
    "summary": "DKC built the commercial operations model for Hanwha Energy's 200 MW battery storage projects in Ireland.",
    "about": [
      "Hanwha Energy and Irish developer Lumcloon Energy developed battery storage projects at Lumcloon and Shannonbridge in County Offaly, described at the time as the largest of their kind in Ireland, with about 200 MW in total. They earn revenue from grid system services under Ireland's DS3 regime. Construction began in 2019. According to Hanwha, the two plants began operating in 2021 and were financed by the Export-Import Bank of Korea."
    ],
    "role": "Commercial operations modeling for Hanwha Energy.",
    "scope": [
      "Commercial operations model",
      "System services revenue modeling",
      "Operating cost and performance assumptions"
    ],
    "challenge": "As its Irish battery storage projects moved into operation, Hanwha Energy needed a model of how the plants would earn revenue and perform commercially.",
    "solution": "DKC built the commercial operations model, covering grid system services revenues, operating costs, and performance assumptions.",
    "result": "Commercial operations model delivered to Hanwha Energy (June to September 2021).",
    "relevance": "An operating model that lets an owner track a storage asset against its investment case once it is running.",
    "refs": [
      {
        "label": "Matheson — Hanwha Energy Corporation and Lumcloon Energy advised on developing Ireland's largest battery energy storage systems (Nov 2020)",
        "url": "https://www.matheson.com/experience/hanwha-energy-corporation-and-lumcloon-energy-advised-on-developing-irelands-largest-battery-energy-storage-systems"
      },
      {
        "label": "Power Technology — Hanwha Energy-Ferbane Battery Energy Storage System, Ireland (Aug 2021)",
        "url": "https://www.power-technology.com/marketdata/hanwha-energy-ferbane-battery-energy-storage-system-ireland"
      },
      {
        "label": "Hanwha — Hanwha Energy promotes third energy storage system (ESS) project in Ireland (Oct 2022)",
        "url": "https://www.hanwha.com/en/news_and_media/press_release/hanwha-energy-promotes-third-energye-storage-system-ess-project-in-ireland.html"
      }
    ]
  },
  {
    "id": 27,
    "tag": "Nickel and cobalt processing",
    "headline": "Nickel and cobalt smelter for PT BES, Indonesia",
    "location": "Indonesia",
    "capacity": "30,000 t/yr nickel contained in nickel sulfate",
    "delivered": "DKC",
    "summary": "DKC prepared a bankable feasibility study and provided financial advisory to PT Angkasa Jaya Mulia on a nickel and cobalt smelter for PT BES in Indonesia.",
    "about": [],
    "role": "Bankable feasibility study and financial advisory for PT Angkasa Jaya Mulia.",
    "scope": [
      "Bankable feasibility study",
      "Financial model",
      "Financing structure",
      "Financial advisory"
    ],
    "challenge": "PT Angkasa Jaya Mulia needed a bankable feasibility study and financial advice for a smelter producing nickel sulfate, with 30,000 tonnes a year of contained nickel, to take the project to lenders.",
    "solution": "DKC prepared the bankable feasibility study and advised on the financial side of the project, including its financing structure.",
    "result": "Bankable feasibility study and financial advisory delivered to PT Angkasa Jaya Mulia.",
    "relevance": "Battery-metal processing projects are financed on the strength of their feedstock, product offtake, and technology, which a bankable study must demonstrate.",
    "refs": []
  },
  {
    "id": 24,
    "tag": "Gas supply",
    "headline": "BOT gas supply project, Indonesia",
    "location": "Indonesia",
    "delivered": "DKC",
    "summary": "DKC carried out the feasibility study and financial advisory for Hwangso Engineering on a gas supply project in Indonesia structured as build-operate-transfer.",
    "about": [],
    "role": "Feasibility study and financial advisory for Hwangso Engineering.",
    "scope": [
      "Feasibility study",
      "BOT structure review",
      "Financial model",
      "Financing advice"
    ],
    "challenge": "Hwangso Engineering needed to know whether a gas supply project in Indonesia could work on a build-operate-transfer basis and how it could be financed.",
    "solution": "DKC carried out the feasibility study, reviewed the BOT structure, and built the financial model on which its financing advice was based.",
    "result": "Feasibility study and financial advisory delivered to Hwangso Engineering (2021).",
    "relevance": "A BOT structure tested for feasibility and financing before the developer commits.",
    "refs": []
  },
  {
    "id": 22,
    "tag": "District cooling",
    "headline": "District cooling for South Saad Al Abdullah smart city, Kuwait",
    "location": "South Saad Al Abdullah City, Kuwait",
    "capacity": "About 228,500 RT across six plants",
    "delivered": "DKC",
    "summary": "DKC carried out KEXIM's feasibility study on district cooling for the South Saad Al Abdullah smart city in Kuwait, totaling about 228,500 refrigeration tons across six plants.",
    "about": [
      "South Saad Al Abdullah is a new residential city on the outskirts of Kuwait City, developed by Kuwait's Public Authority for Housing Welfare (PAHW) as the country's first smart city, with Korean participation including Korea Land and Housing Corporation (LH). As reported in 2024, it covers about 64 square kilometers with some 24,508 housing units across five residential areas, and completion is expected in late 2027.",
      "In March 2020 Korea District Heating Corporation (KDHC) and Samsung Engineering signed a memorandum to pursue a district cooling business for the new city jointly, building on an agreement KDHC had signed with LH in October 2018 to take part in the project."
    ],
    "role": "Feasibility study for KEXIM.",
    "scope": [
      "Feasibility study",
      "Cooling demand review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEXIM needed a feasibility study on district cooling for South Saad Al Abdullah, a new smart city of some 24,500 homes, served by six plants with a combined capacity of about 228,500 refrigeration tons.",
    "solution": "DKC carried out the feasibility study, reviewing cooling demand as the city builds out, the project's economics, and its main risks.",
    "result": "Feasibility study delivered to KEXIM.",
    "relevance": "District cooling revenues follow the pace at which a new city is occupied, so the build-out has to be modelled as carefully as the plants.",
    "refs": [
      {
        "label": "Arab Times — PAHW awards S. Korean firm city development project contract (Mar 2024)",
        "url": "https://www.arabtimesonline.com/news/pahw-awards-s-korean-firm-city-dev-project-contract"
      },
      {
        "label": "Asia Economy — KDHC and Samsung Engineering to promote entry into Kuwait cooling business (Mar 2020)",
        "url": "https://www.asiae.co.kr/en/article/2020032513533826140"
      },
      {
        "label": "MEED — South Koreans set to press ahead with Kuwait smart city (Apr 2017)",
        "url": "https://www.meed.com/south-koreans-set-to-press-ahead-with-kuwait-smart-city"
      }
    ]
  },
  {
    "id": 21,
    "tag": "Oil and gas processing",
    "headline": "Jurassic Production Facilities 4 and 5, North Kuwait",
    "location": "Sabriyah area, North Kuwait",
    "capacity": "50,000 bpd crude and 150 MMscfd gas per facility",
    "delivered": "DKC",
    "summary": "DKC provided financial advisory to Samsung Engineering (now Samsung E&A) on Kuwait Oil Company's Jurassic Production Facilities 4 and 5.",
    "about": [
      "Kuwait Oil Company's Jurassic Production Facilities 4 and 5 (JPF-4 and JPF-5) process wet and sour well fluids from North Kuwait's Jurassic reservoirs. Each facility is designed to produce about 150 million cubic feet a day of sweet gas and 50,000 barrels a day of treated light crude. JPF-4 is near the Sabriyah field, and JPF-5 lies less than 10 km to its east.",
      "KOC tendered the facilities on a build-own-operate basis, with an option to buy them back later, and received bids in 2021. In December 2021 contracts were signed with Spetco for JPF-4 (about US$398 million) and with China's Jereh for JPF-5 (about US$426 million), each to operate and maintain its facility for five years."
    ],
    "role": "Financial advisory for Samsung Engineering (now Samsung E&A).",
    "scope": [
      "Financial advisory",
      "Financial model",
      "Review of the build-own-operate structure"
    ],
    "challenge": "Samsung Engineering was assessing KOC's tender for JPF-4 and JPF-5, structured as build-own-operate, and needed financial advice on the investment case.",
    "solution": "DKC provided financial advisory on the project, covering the economics of building, owning, and operating the facilities under the tender terms.",
    "result": "Financial advisory delivered to Samsung Engineering (December 2020 to March 2021).",
    "relevance": "When an EPC contractor is asked to own and operate, the bid turns on financial terms as much as on engineering.",
    "refs": [
      {
        "label": "MEES — Kuwait receives bids for $1bn Jurassic gas production facilities (May 2021)",
        "url": "https://mees.com/2021/5/7/power-water/kuwait-receives-bids-for-1bn-jurassic-gas-production-facilities/18c56d40-af3a-11eb-886b-e33b6d7108d5"
      },
      {
        "label": "Offshore Technology — Kuwait signs $398m Jurassic gas contract (Dec 2021)",
        "url": "https://www.offshore-technology.com/?p=115872"
      }
    ]
  },
  {
    "id": 19,
    "tag": "Port",
    "headline": "Wanasari port development, Indonesia",
    "location": "Indonesia",
    "delivered": "DKC",
    "summary": "DKC prepared the basic plan and feasibility study for the development of Wanasari port in Indonesia for Daeyoung Engineering and Samil PwC.",
    "about": [],
    "role": "Basic plan and feasibility study for Daeyoung Engineering and Samil PwC.",
    "scope": [
      "Basic plan",
      "Feasibility study",
      "Demand review",
      "Financial analysis"
    ],
    "challenge": "Daeyoung Engineering and Samil PwC needed a basic plan and feasibility study for a new port at Wanasari, to establish what should be built and whether it could pay its way.",
    "solution": "DKC established the basic plan for the port and carried out the feasibility study, reviewing cargo demand and the project's economics.",
    "result": "Basic plan and feasibility study delivered to Daeyoung Engineering and Samil PwC.",
    "relevance": "Port projects are sized on cargo forecasts, and the basic plan sets the capital cost that the forecasts must support.",
    "refs": []
  },
  {
    "id": 18,
    "tag": "Healthcare PPP (Healthcare Unit)",
    "headline": "Rajasthan bio-medical cluster PPP, India",
    "location": "Rajasthan, India",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit provided advisory services, research, and analysis to SCL Healthcare for business development of a bio-medical cluster PPP in Rajasthan.",
    "about": [],
    "role": "Advisory services, research, and analysis for business development, for SCL Healthcare (DKC Healthcare Unit).",
    "scope": [
      "Advisory services",
      "Market research",
      "Business development analysis"
    ],
    "challenge": "SCL Healthcare was exploring a bio-medical cluster in Rajasthan under a PPP and needed research and analysis to support its business development.",
    "solution": "DKC's Healthcare Unit provided advisory services and carried out research and analysis on the opportunity.",
    "result": "Research, analysis, and advisory support delivered to SCL Healthcare (2020).",
    "relevance": "Early research on market and partner structure helps an owner decide whether a healthcare PPP is worth pursuing.",
    "refs": []
  },
  {
    "id": 17,
    "tag": "Airport rail link",
    "headline": "Bali airport city-air terminal and LRT, Indonesia",
    "location": "I Gusti Ngurah Rai International Airport to Kuta, Bali, Indonesia",
    "delivered": "DKC",
    "summary": "DKC carried out the financial analysis for KRTC on a city-air terminal and light rail link serving Bali's Ngurah Rai International Airport.",
    "about": [
      "In January 2020 the Korea Overseas Infrastructure & Urban Development Corporation (KIND), the Korea Rail Network Authority, and Indonesia's state-owned Nindya Karya signed a memorandum of understanding on a light rail line between I Gusti Ngurah Rai International Airport and a planned satellite terminal in Kuta. As reported at the time, the 4.78 km line would have four stations and cost about IDR 5 trillion (US$365 million).",
      "The plan was later reworked. In October 2023 the Korea Rail Network Authority, in a consortium with KRTC and other Korean firms, won a feasibility study commissioned by the Export-Import Bank of Korea for a 5.3 km, four-station section of a Bali LRT linking the airport with Kuta."
    ],
    "role": "Financial analysis for KRTC (Korean Railroad Technical Corporation).",
    "scope": [
      "Financial analysis",
      "Financial model",
      "Revenue and cost review"
    ],
    "challenge": "KRTC needed a financial analysis of a city-air terminal and light rail link between Bali's main airport and Kuta, to understand the project's economics.",
    "solution": "DKC carried out the financial analysis, modelling the project's revenues and costs.",
    "result": "Financial analysis delivered to KRTC (2020).",
    "relevance": "Urban rail links rarely pay for themselves from fares alone, so owners need a clear view of the funding gap early.",
    "refs": [
      {
        "label": "Coconuts Bali — Construction of light rail transit system connecting Bali airport and Kuta to kick off this year (Jan 2020)",
        "url": "https://coconuts.co/bali/news/construction-of-light-rail-transit-system-connecting-bali-airport-and-kuta-to-kick-off-this-year"
      },
      {
        "label": "Asia Economy — Railway corporation wins feasibility study contract for light rail connecting Bali airport to tourist attractions (Oct 2023)",
        "url": "https://www.asiae.co.kr/en/article/2023101815022311810"
      }
    ]
  },
  {
    "id": 16,
    "tag": "Water",
    "headline": "Independent water project bid strategy, UAE",
    "location": "United Arab Emirates",
    "capacity": "200 MIGD",
    "delivered": "DKC",
    "summary": "DKC developed the bid strategy and bid simulation for Samsung Engineering (now Samsung E&A) on a 200 MIGD independent water project in the UAE.",
    "about": [],
    "role": "Bid strategy and simulation for Samsung Engineering (now Samsung E&A).",
    "scope": [
      "Bid strategy",
      "Bid simulation",
      "Tariff analysis"
    ],
    "challenge": "Samsung Engineering was preparing a bid for a 200 MIGD independent water project in the UAE and needed to understand how its pricing would compare in a competitive tender.",
    "solution": "DKC developed the bid strategy and simulated the bid, testing how tariff and structuring choices would affect the offer.",
    "result": "Bid strategy and simulation delivered to Samsung Engineering (2019).",
    "relevance": "In competitive IWP tenders the water tariff decides the award, so the bid must be priced against the likely competition.",
    "refs": []
  },
  {
    "id": 15,
    "tag": "Financial advisory",
    "headline": "Annual financial advisory for KEPCO E&C",
    "location": "Various",
    "delivered": "DKC",
    "summary": "DKC served as annual financial advisor to KEPCO E&C on its power projects from June 2020 to June 2021.",
    "about": [],
    "role": "Annual financial advisory for KEPCO E&C.",
    "scope": [
      "Financial analysis of power projects",
      "Financial model review",
      "Financing and market advice"
    ],
    "challenge": "KEPCO E&C needed ongoing financial advice across its power project pipeline rather than a single study.",
    "solution": "DKC provided financial advisory to KEPCO E&C under a one-year engagement, covering financial analysis and advice on the projects it was pursuing.",
    "result": "Year-long financial advisory delivered to KEPCO E&C (June 2020 to June 2021).",
    "relevance": "A standing financial advisor that knows the client's pipeline and can respond project by project.",
    "refs": []
  },
  {
    "id": 14,
    "tag": "Gas-to-power",
    "headline": "Batangas gas-to-power, Philippines",
    "location": "Batangas, Philippines",
    "delivered": "DKC",
    "summary": "DKC carried out KIND's feasibility study for a gas-to-power project in Batangas, the Philippines.",
    "about": [],
    "role": "Feasibility study for KIND.",
    "scope": [
      "Philippine power and gas market review",
      "Project financial model",
      "Financing structure",
      "Risk analysis"
    ],
    "challenge": "KIND needed a feasibility study on a gas-to-power project in Batangas, the Philippines' main hub for LNG import and gas-fired generation, to inform Korean participation.",
    "solution": "DKC's feasibility study reviewed the Philippine power and gas markets, built the project financial model, and assessed the financing structure and the main risks.",
    "result": "Feasibility study delivered to KIND (April to December 2020).",
    "relevance": "Gas-to-power assessed in a competitive market, where fuel supply and power sales have to be matched.",
    "refs": []
  },
  {
    "id": 13,
    "tag": "Solar PV",
    "headline": "Solar power for the Philippine Department of National Defense",
    "location": "Philippines",
    "delivered": "DKC",
    "summary": "DKC reviewed the Philippine power market and provided financial advisory to KEPCO E&C on a solar power project for the Philippine Department of National Defense.",
    "about": [],
    "role": "Philippine power market review and financial advisory for KEPCO E&C.",
    "scope": [
      "Philippine power market review",
      "Regulatory and offtake review",
      "Financial analysis and advisory"
    ],
    "challenge": "KEPCO E&C needed to understand the Philippine power market and the financial case for a solar power project serving the Department of National Defense.",
    "solution": "DKC reviewed the Philippine power market and its regulation, and provided financial advisory on the project's commercial and financial case.",
    "result": "Power market review and financial advisory delivered to KEPCO E&C (January to November 2020).",
    "relevance": "A government-hosted solar project assessed against the market and regulatory rules that set its revenue.",
    "refs": []
  },
  {
    "id": 12,
    "tag": "Solar PV",
    "headline": "Karbala 300 MW solar PV, Iraq",
    "location": "Karbala governorate, Iraq",
    "capacity": "300 MW",
    "delivered": "DKC",
    "summary": "DKC carried out the financial feasibility and bankability studies for KIND on the 300 MW Karbala solar PV project in Iraq.",
    "about": [
      "The Karbala solar plant is a 300 MW photovoltaic project in central Iraq, first announced as part of Iraq's first solar tender in 2019. It has been developed by a consortium of Norway's Scatec, Egypt's Orascom Construction, and Iraq's Al-Bilal Group, which is also the EPC contractor, at a cost of about US$360 million, under the authority of the National Investment Commission. The first phase was inaugurated in September 2025, generating 22 MW, with output planned to rise in stages to the full 300 MW."
    ],
    "role": "Financial feasibility and bankability studies for KIND.",
    "scope": [
      "Financial feasibility analysis",
      "Bankability assessment",
      "Offtake and risk allocation review",
      "Project financial model"
    ],
    "challenge": "KIND needed to know whether a 300 MW solar project in Karbala could be financed, given the offtake, payment, and country risks of Iraq's power sector.",
    "solution": "DKC carried out the financial feasibility and bankability studies, modeling the project and reviewing how its offtake and risk allocation would be seen by lenders.",
    "result": "Financial feasibility and bankability studies delivered to KIND (August to December 2019).",
    "relevance": "Bankability tested early in a high-risk market, before sponsors commit bid costs.",
    "refs": [
      {
        "label": "MEED — Iraq opens first phase of Karbala solar project (Sep 2025)",
        "url": "https://guest.meed.com/iraq-opens-first-phase-of-karbala-solar-project/"
      },
      {
        "label": "pv magazine — Iraq inaugurates first phase of largest solar plant to date (Sep 2025)",
        "url": "https://www.pv-magazine.com/2025/09/22/iraq-inaugurates-first-phase-of-largest-solar-plant-to-date/"
      },
      {
        "label": "Al Jazeera — Iraq set to open huge solar plant in Karbala to battle electricity crisis (Sep 2025)",
        "url": "https://www.aljazeera.com/amp/news/2025/9/20/iraq-set-to-open-huge-solar-plant-in-karbala-to-battle-electricity-crisis"
      }
    ]
  },
  {
    "id": 11,
    "tag": "Hospital PPP (Healthcare Unit)",
    "headline": "Bidding strategy for hospital PPP projects, Kyrgyzstan and Kazakhstan",
    "location": "Kyrgyzstan and Kazakhstan",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit prepared a bidding strategy for KHIDI on hospital PPP projects in Kyrgyzstan and Kazakhstan, including bankable project structuring.",
    "about": [],
    "role": "Bidding strategy including bankable project structuring, for KHIDI (DKC Healthcare Unit).",
    "scope": [
      "Bidding strategy",
      "Bankable project structuring",
      "PPP framework review"
    ],
    "challenge": "KHIDI needed a strategy for Korean participation in hospital PPP tenders in Kyrgyzstan and Kazakhstan, and a view of how such projects could be structured to be bankable.",
    "solution": "DKC's Healthcare Unit prepared the bidding strategy and set out how the projects could be structured so that lenders would finance them.",
    "result": "Bidding strategy and project structuring recommendations delivered to KHIDI (August to November 2019).",
    "relevance": "Hospital PPPs in emerging markets succeed only if the payment mechanism and risk allocation are acceptable to lenders.",
    "refs": []
  },
  {
    "id": 10,
    "tag": "District heating",
    "headline": "District heating modernization in Bukhara and Jizzakh, Uzbekistan",
    "location": "Bukhara and Jizzakh, Uzbekistan",
    "delivered": "DKC",
    "summary": "DKC carried out the risk and sensitivity analysis of KEXIM's feasibility study for modernizing district heating with combined heat and power in Bukhara and Jizzakh, Uzbekistan.",
    "about": [],
    "role": "Risk and sensitivity analysis within KEXIM's feasibility study.",
    "scope": [
      "Project risk identification",
      "Sensitivity analysis",
      "Financial model scenarios"
    ],
    "challenge": "KEXIM needed to understand how the case for modernizing district heating with combined heat and power in Bukhara and Jizzakh would hold up under changes in key assumptions.",
    "solution": "DKC carried the risk and sensitivity part of the feasibility study, identifying the main project risks and testing the financial case against changes in key assumptions.",
    "result": "Risk and sensitivity analysis delivered to KEXIM within the feasibility study (March to December 2022).",
    "relevance": "A clear view of which assumptions move the case, for a heat and power project whose tariffs are set by the state.",
    "refs": []
  },
  {
    "id": 9,
    "tag": "Solar PV",
    "headline": "Mymensingh 50 MW solar park, Bangladesh",
    "location": "Sutiakhali, Gauripur upazila, Mymensingh, Bangladesh",
    "capacity": "50 MW",
    "delivered": "DKC",
    "summary": "DKC supported KEPCO E&C with valuation and due diligence on a potential acquisition of the 50 MW Mymensingh solar park in Bangladesh.",
    "about": [
      "The Sutiakhali solar power plant in Mymensingh is a 50 MW solar park on 174 acres of char land beside the Brahmaputra River in Gauripur upazila, developed by HDFC SinPower, a joint venture of Bangladeshi, Malaysian, and Singaporean partners. It cost about Tk 800 crore. The project began in 2014, signed its implementation agreement in 2016 and its power purchase agreement with the Bangladesh Power Development Board in 2017, and was preparing to supply power to the national grid in late 2020."
    ],
    "role": "M&A valuation and due diligence support for KEPCO E&C.",
    "scope": [
      "Valuation",
      "Financial due diligence",
      "Review of project agreements"
    ],
    "challenge": "KEPCO E&C was considering an acquisition involving the 50 MW Mymensingh solar park and needed a valuation and due diligence support to inform its decision.",
    "solution": "DKC valued the project and supported the due diligence, reviewing its financial case and project agreements.",
    "result": "Valuation and due diligence support delivered to KEPCO E&C (June to July 2019).",
    "relevance": "An acquisition priced on a reviewed model and agreements, rather than on the seller's case.",
    "refs": [
      {
        "label": "The Business Standard — Sutiakhali Solar Power Plant to add 50MW to national grid (Sep 2020)",
        "url": "https://www.tbsnews.net/bangladesh/energy/sutiakhali-solar-power-plant-add-50mw-national-grid-139279"
      }
    ]
  },
  {
    "id": 8,
    "tag": "Diesel power IPP",
    "headline": "Dhaka West 108 MW IPP, Bangladesh",
    "location": "Bosila, Keraniganj upazila, Dhaka district, Bangladesh",
    "capacity": "108 MW",
    "delivered": "DKC",
    "summary": "DKC provided financial advisory to Sae-A STX Entech on the 108 MW Dhaka West independent power plant in Bangladesh.",
    "about": [
      "Dhaka West is a 108 MW reciprocating-engine power plant fired by heavy fuel oil, planned at Washpur, Bosila, in Keraniganj upazila near Dhaka. It was to be run by Dhaka West Power Limited, a Maisha Group subsidiary, as a private independent power producer for 15 years. The project missed its original 2012 commercial operation date. Public tracking reports that US-based Beringia Energy acquired it in June 2022 and lists it as shelved as of early 2023."
    ],
    "role": "Financial advisory for Sae-A STX Entech.",
    "scope": [
      "Financial model and analysis",
      "Financing structure",
      "Review of project agreements"
    ],
    "challenge": "Sae-A STX Entech needed financial advice on the 108 MW Dhaka West independent power plant.",
    "solution": "DKC provided financial advisory, covering the financial model and analysis, the financing structure, and the review of project agreements.",
    "result": "Financial advisory delivered to Sae-A STX Entech (June to October 2019).",
    "relevance": "Financial advice on an engine-based IPP under a long-term PPA, the standard structure for fast-track power in emerging markets.",
    "refs": [
      {
        "label": "Energy Transition BD — Keraniganj 108 MW (Dhaka West) HFO Power Plant (Unit-2) (Mar 2023)",
        "url": "https://www.energytransitionbd.org/post/keraniganj-108-mw-dhaka-west-hfo-power-plant-unit-2"
      }
    ]
  },
  {
    "id": 7,
    "tag": "Hospital planning (Healthcare Unit)",
    "headline": "Kyrgyz State Medical Academy hospital, Bishkek",
    "location": "Bishkek, Kyrgyzstan",
    "capacity": "500 beds",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit carried out hospital planning and the financing structure for KIND on a 500-bed hospital for the Kyrgyz State Medical Academy in Bishkek.",
    "about": [],
    "role": "Hospital planning and financing structure for KIND (DKC Healthcare Unit).",
    "scope": [
      "Hospital planning",
      "Financing structure",
      "Financial analysis"
    ],
    "challenge": "KIND needed a plan for a 500-bed academic hospital for the Kyrgyz State Medical Academy in Bishkek and a financing structure that could support it.",
    "solution": "DKC's Healthcare Unit carried out the hospital planning and designed the financing structure for the project.",
    "result": "Hospital plan and financing structure delivered to KIND (April to August 2019).",
    "relevance": "A hospital's service plan drives its capital cost and revenues, so planning and financing need to be settled together.",
    "refs": []
  },
  {
    "id": 6,
    "tag": "Hospital economics (Healthcare Unit)",
    "headline": "Tarija National Cardiac Center, Bolivia",
    "location": "Tarija, Bolivia",
    "capacity": "400 beds",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit carried out the social and economic cost-benefit analysis for EDCF on a 400-bed national cardiac center in Tarija, Bolivia.",
    "about": [],
    "role": "Social and economic cost-benefit analysis for EDCF (DKC Healthcare Unit).",
    "scope": [
      "Economic cost-benefit analysis",
      "Social benefit assessment"
    ],
    "challenge": "EDCF needed to know whether a 400-bed national cardiac center in Tarija would deliver enough social and economic benefit to justify development financing.",
    "solution": "DKC's Healthcare Unit carried out the social and economic cost-benefit analysis of the project.",
    "result": "Social and economic cost-benefit analysis delivered to EDCF (April to August 2019).",
    "relevance": "Concessional lenders fund public hospitals on their economic return to society, which has to be demonstrated, not assumed.",
    "refs": []
  },
  {
    "id": 5,
    "tag": "Healthcare strategy (Healthcare Unit)",
    "headline": "Strategy for construction-based overseas healthcare packages",
    "location": "Indonesia, Kyrgyzstan, Kazakhstan, and Uzbekistan",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit developed an overseas healthcare business strategy for KHIDI on construction-based healthcare packages in Indonesia, Kyrgyzstan, Kazakhstan, and Uzbekistan.",
    "about": [],
    "role": "Overseas healthcare business strategy for KHIDI (DKC Healthcare Unit).",
    "scope": [
      "Market review by country",
      "Business strategy",
      "Package and delivery models"
    ],
    "challenge": "KHIDI wanted to know how Korean firms could export healthcare as a package combining hospital construction with services, and in which of four target countries this was most promising.",
    "solution": "DKC's Healthcare Unit reviewed the four markets and developed a business strategy for construction-based healthcare packages.",
    "result": "Overseas healthcare business strategy delivered to KHIDI (September to November 2018).",
    "relevance": "Healthcare projects abroad combine construction, operation, and financing, and the strategy has to fit each country's system.",
    "refs": []
  },
  {
    "id": 4,
    "tag": "Public investment planning",
    "headline": "Prioritization guideline for public infrastructure, Thailand",
    "location": "Thailand",
    "delivered": "DKC",
    "summary": "DKC prepared a prioritization guideline for public infrastructure projects in Thailand under the Knowledge Sharing Program (KSP), for KEXIM.",
    "about": [],
    "role": "Prioritization guideline for public infrastructure projects, under the Knowledge Sharing Program (KSP), for KEXIM.",
    "scope": [
      "Prioritization criteria",
      "Project appraisal framework",
      "Guideline drafting"
    ],
    "challenge": "Under the Knowledge Sharing Program, Thailand sought guidance on how to rank competing public infrastructure projects so that investment goes to those with the strongest case.",
    "solution": "DKC prepared a guideline setting out how public infrastructure projects can be assessed and prioritized.",
    "result": "Prioritization guideline delivered to KEXIM for the KSP (September to November 2018).",
    "relevance": "Owners in the public sector need a consistent basis for deciding which projects proceed first.",
    "refs": []
  },
  {
    "id": 3,
    "tag": "Hospital PPP (Healthcare Unit)",
    "headline": "Dharmais National Cancer Center, Indonesia",
    "location": "Dharmais Cancer Hospital, Jakarta, Indonesia",
    "capacity": "194 beds",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit carried out a feasibility study for MOLIT on the Dharmais National Cancer Center in Jakarta, including hospital planning and the payment structure.",
    "about": [
      "Indonesia's Ministry of National Development Planning listed a public-private partnership for a National Cancer Center at Dharmais Hospital in Jakarta, under which a private partner would design, build, finance, and maintain the facility and transfer it at the end of the concession. The listing, last updated in July 2019, gives a capital value of about US$171 million and a 15-year concession."
    ],
    "role": "Feasibility study including hospital planning and payment structure, for MOLIT (DKC Healthcare Unit).",
    "scope": [
      "Feasibility study",
      "Hospital planning",
      "Payment structure",
      "Financial analysis"
    ],
    "challenge": "MOLIT needed a feasibility study on a 194-bed National Cancer Center at Dharmais Hospital, proposed as a PPP, including how the hospital should be planned and how the private partner would be paid.",
    "solution": "DKC's Healthcare Unit carried out the feasibility study, covering hospital planning and the payment structure for the PPP.",
    "result": "Feasibility study delivered to MOLIT (July to November 2018).",
    "relevance": "In hospital PPPs the payment mechanism decides who carries demand and performance risk, which shapes bankability.",
    "refs": [
      {
        "label": "Infra PPP World — Indonesia National Cancer Center PPP project in Jakarta (updated Jul 2019)",
        "url": "https://www.infrapppworld.com/project/indonesia-national-cancer-center-ppp-project-in-jakarta"
      }
    ]
  },
  {
    "id": 1,
    "tag": "Cogeneration",
    "headline": "Aramco cogeneration projects (PCPC), Saudi Arabia",
    "location": "Abqaiq, Hawiyah, and Ras Tanura, Eastern Province, Saudi Arabia",
    "capacity": "876 MW power and steam",
    "delivered": "DKC",
    "summary": "DKC provided arbitration advisory services to Samsung Engineering (now Samsung E&A) on the 876 MW Aramco cogeneration projects of the Power Cogeneration Plant Company (PCPC).",
    "about": [
      "The Power Cogeneration Plant Company (PCPC) was set up for Saudi Aramco's third-party cogeneration project: three plants at the Abqaiq, Hawiyah, and Ras Tanura oil and gas facilities supplying a combined 876 MW of power and 3.26 million lb/hr of steam to Aramco. The contracts were signed in August 2013 with a consortium of Marubeni, JGC, and Aljomaih, with Aramco holding 50%, for 20 years of operation. The project, estimated at about US$650 million, reached financial close in January 2014, with Samsung Engineering as EPC contractor. The Ras Tanura plant began commercial operation in August 2017."
    ],
    "role": "Arbitration advisory for Samsung Engineering (now Samsung E&A).",
    "scope": [
      "Arbitration support",
      "Financial and quantum analysis",
      "Review of contract records"
    ],
    "challenge": "Samsung Engineering, as EPC contractor on the PCPC cogeneration plants, needed advisory support in an arbitration related to the projects.",
    "solution": "DKC provided arbitration advisory services, supporting Samsung Engineering's analysis of its position in the dispute.",
    "result": "Arbitration advisory delivered to Samsung Engineering (July 2017).",
    "relevance": "Experience of how large EPC contracts are tested in dispute, which informs how an owner sets up contracts and records from the start.",
    "refs": [
      {
        "label": "Aramco — Power systems (PCPC)",
        "url": "https://www.aramco.com/en/what-we-do/operations/power-systems"
      },
      {
        "label": "Digital Refining — JGC joins power and steam supply business in Saudi Arabia (Aug 2013)",
        "url": "https://www.digitalrefining.com/news/1002333/jgc-joins-power-and-steam-supply-business-in-saudi-arabia"
      },
      {
        "label": "MEED — Saudi Aramco power project reaches financial close (Jan 2014)",
        "url": "https://www.meed.com/saudi-aramco-power-project-reaches-financial-close/"
      },
      {
        "label": "Power Technology — Ras Tanura cogeneration plant, Saudi Arabia",
        "url": "https://www.power-technology.com/marketdata/power-plant-profile-ras-tanura-cogeneration-plant-saudi-arabia"
      }
    ]
  },
];

export const profileFor = (id: number) => profiles.find((p) => p.id === id);
export const caseStudies = profiles.filter((p) => p.caseStudy);
