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
  sponsor?: string;
  team?: { name: string; role: string }[];
  nextStep?: string;
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
      "In April 2025 the Korea Overseas Infrastructure & Urban Development Corporation (KIND) tendered a feasibility study on a blue ammonia development of 1 million tonnes a year in Alberta, Canada. Blue ammonia is made from natural gas, with the CO₂ released in hydrogen production captured and stored underground, so a project of this kind depends on gas supply and access to permanent CO₂ storage as much as on the ammonia plant itself.",
      "Alberta grants rights to inject CO₂ into deep formations through a competitive process for carbon storage hubs. The province has selected 24 hub proposals in two competitions; each starts under an evaluation agreement, and injection requires approval from the Alberta Energy Regulator. At the federal level, Canada's refundable CCUS investment tax credit, which received Royal Assent in June 2024, covers 50% of eligible capture equipment and 37.5% of transport and storage equipment from 2022 to 2030, with the rates halved from 2031 to 2040."
    ],
    role: "Lead firm of the study consortium, carrying the majority of the scope.",
    scope: ["Project management", "Market analysis", "Project financial model", "Assessment of the CCS-linked revenue case"],
    challenge: "KIND needed an investment-grade view of a 1 Mt/yr blue ammonia plant in Alberta, where the CO₂ from production is captured and stored, to inform Korean participation in the project.",
    solution: "DKC led the consortium and carried the majority of the scope: project management, market analysis, the project financial model, and the assessment of the CCS-linked revenue case.",
    result: "The feasibility study was completed and delivered to KIND within five months, giving the client a basis for its participation decision.",
    relevance: "Capture, CO₂ storage, and carbon-related revenues assessed together, the way lenders will assess any CCS-linked plant.",
    refs: [
      {
        "label": "Quantum Commodity Intelligence — KIND issues feasibility study tender for Alberta blue ammonia project (Apr 2025)",
        "url": "https://www.qcintel.com/ammonia/article/kind-issues-feasibility-study-tender-for-alberta-blue-ammonia-project-38804.html"
      },
      {
        "label": "Government of Alberta — Carbon capture, utilization and storage: hub development process",
        "url": "https://www.alberta.ca/carbon-capture-utilization-and-storage-hub-development-process"
      },
      {
        "label": "Department of Finance Canada — Deputy Prime Minister highlights the federal CCUS investment tax credit (Aug 2024)",
        "url": "https://www.canada.ca/en/department-finance/news/2024/08/deputy-prime-minister-visits-the-polaris-carbon-capture-project-to-highlight-the-federal-ccus-investment-tax-credit.html"
      }
    ],  },
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
      "The Hai Lang LNG power center in Quang Tri province is developed by Vietnam's T&T Group with Hanwha Energy, Korea Southern Power (KOSPO) and Korea Gas Corporation (KOGAS). Phase 1 comprises a 1,500 MW combined-cycle plant and an LNG import terminal of about 1.5 million tonnes a year on a 120-hectare site, and a later phase would add 3,000 MW. Quang Tri authorities approved the Phase 1 investment of about US$2.3 billion in October 2021, and ground was broken in January 2022.",
      "Progress after groundbreaking was slow. In October 2024 the consortium adjusted its investment plan and targeted commercial operation in the fourth quarter of 2029, and Vietnam's Ministry of Industry and Trade approved the feasibility study in January 2025. LNG-to-power is central to Vietnam's revised Power Development Plan VIII, which targets 22,524 MW of LNG-fired capacity by 2030."
    ],
    role: "Financial and project execution workstreams of the feasibility study for KEXIM.",
    scope: ["Financing structure", "Project risk analysis", "Financial and legal review", "Lender information memorandum"],
    challenge: "KEXIM needed to assess how a 4,500 MW LNG-to-power complex, developed in two phases with Korean participation, could be structured and financed, and how lenders would view its risks.",
    solution: "DKC analyzed the financing structure and project risks, carried out the financial and legal review, and prepared the information memorandum for lenders.",
    result: "Feasibility study and lender information memorandum delivered to KEXIM, built on one model from the first assumptions to the lender materials.",
    relevance: "A financing structure and lender materials prepared to the standard that commercial banks and ECAs expect at financial close.",
    refs: [
      {
        "label": "VietnamPlus — Work starts on US$2.37-billion Hai Lang LNG power centre in Quang Tri (Jan 2022)",
        "url": "https://en.vietnamplus.vn/work-starts-on-237-billion-usd-hai-lang-lng-power-centre-in-quang-tri-post220764.vnp"
      },
      {
        "label": "LNG Prime — Vietnam OKs $2.3 billion LNG-to-power project (Oct 2021)",
        "url": "https://lngprime.com/contracts-and-tenders/vietnam-oks-2-3-billion-lng-to-power-project/30788"
      },
      {
        "label": "The Investor — S Korea-invested $2.3 bln LNG power project adjusts investment plan, to operate in Q4/2029 (Oct 2024)",
        "url": "https://theinvestor.vn/s-korea-invested-23-bln-lng-power-project-adjusts-investment-plan-to-operate-in-q4-2029-d12927.html"
      }
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
      "In March 2021 the Dominican Republic's Ministry of Energy and Mines opened an international tender (EDES-LPI-NG-01-2021) for two natural gas-fired combined-cycle plants at Manzanillo, on the country's north-west coast, together with a gas terminal with onshore storage sized for 800 MW of continuous operation. Each plant had to contract between 350 MW and 400 MW under a 15-year power purchase contract starting 36 months after signing."
    ],
    role: "Lead of the feasibility study for KOGAS, including tax and legal review and the financial model.",
    scope: ["Feasibility study", "Tax and legal review", "Financial model", "Tariff, fuel, and financing sensitivities"],
    challenge: "KOGAS was assessing participation in a 350–400 MW gas-to-power project at Manzanillo and needed a feasibility study and a financial model within three months.",
    solution: "DKC led the study, covered tax and legal review, and built the financial model, testing tariff, fuel, and financing assumptions.",
    result: "Feasibility study and financial model delivered to KOGAS on schedule, giving the client a priced, risk-tested basis for its participation decision.",
    relevance: "A priced, risk-tested basis for an investment decision, delivered within a fixed timetable.",
    refs: [
      {
        "label": "Riviera — Dominican Republic tenders for natural gas-fired plants and terminal (Mar 2021)",
        "url": "https://www.rivieramm.com/news-content-hub/news-content-hub/dominican-republic-tenders-for-natural-gas-fired-plants-and-terminal-64703"
      }
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
      "The Dumai refinery in Riau province, on the east coast of Sumatra, is one of Pertamina's main refineries, with a capacity of about 170,000 barrels per day. Its upgrade is one of the projects in Pertamina's Refinery Development Master Plan (RDMP), the state company's program to expand and modernize Indonesia's refineries, and has been listed as a National Strategic Project.",
      "In May 2020 Pertamina and the state-owned contractor Nindya Karya signed a memorandum of understanding with a South Korean consortium to study the upgrade, then valued at about US$1.5 billion. In June 2021 the parties followed with a joint study agreement covering a review of the refinery configuration, including the residue fluid catalytic cracking unit, together with the business model, funding scheme, market study, and a feasibility study for the Dumai RDMP."
    ],
    role: "Half of the feasibility study for KEXIM, with Jong Sang Lee as overall manager.",
    scope: ["Market analysis", "Financial analysis and model", "Financing structure", "Legal and tax review"],
    challenge: "KEXIM needed a feasibility study covering the market, financing, and legal case for upgrading the Dumai refinery.",
    solution: "DKC carried half of the feasibility study for KEXIM, with Jong Sang Lee as overall manager.",
    result: "Feasibility study completed and delivered to KEXIM in May 2024.",
    relevance: "Market, financing structure, and legal and tax analysis carried on one model for a large industrial project.",
    refs: [
      {
        "label": "Enerdata — Pertamina will invest US$25bn to upgrade refining capacity in Indonesia (Dec 2014)",
        "url": "https://www.enerdata.net/publications/daily-energy-news/pertamina-will-invest-us25bn-upgrade-refining-capacity-indonesia.html"
      },
      {
        "label": "detikFinance — Pertamina partners with South Korea on Dumai refinery, Rp 21 trillion (May 2020, Indonesian)",
        "url": "https://finance.detik.com/energi/d-5023940/pertamina-gandeng-korsel-garap-kilang-dumai-rp-21-t"
      },
      {
        "label": "Industry.co.id — Nindya and Pertamina sign joint study agreement with three Korean companies on Dumai Unit II refinery revitalization (Jun 2021, Indonesian)",
        "url": "https://www.industry.co.id/read/88024/nindya-dan-pertamina-gandeng-3-perusahaan-asal-korea-sepakati-perjanjian-studi-bersama-proyek-revitalisasi-kilang-unit-ii-dumai"
      }
    ],
  },

  // ───────────── further profiles with public project information
  {
    id: 25,
    tag: "LNG-to-power",
    headline: "Long An I and II LNG-to-power, Vietnam",
    location: "Can Giuoc district, Long An province (now part of Tay Ninh province), Vietnam",
    capacity: "3,000 MW (Long An I and II, 1,500 MW each)",
    delivered: "With Synergy Korea",
    summary: "DKC carried the financing and project development workstreams of KEXIM's feasibility study for the Long An I and II LNG-to-power plants.",
    about: [
      "Long An I and II are two 1,500 MW LNG-fired combined-cycle plants developed by VinaCapital GS Energy, a joint venture of Vietnam's VinaCapital and Korea's GS Energy, with a combined investment of about US$3.1 billion. Long An province granted the investment certificate in March 2021, and the project is included in Vietnam's Power Development Plan VIII. In June 2023 the Export-Import Bank of Korea signed a memorandum with the two sponsors to explore credit facilities for the project.",
      "As of late 2025 the feasibility study had been appraised, while power purchase agreement talks with EVN and gas supply talks with PV Gas were continuing. In December 2025 the Prime Minister ordered authorities to resolve the remaining bottlenecks. The revised Power Development Plan VIII of April 2025 targets 22,524 MW of LNG-fired capacity by 2030."
    ],
    role: "Financing and project development workstreams of the feasibility study for KEXIM.",
    scope: ["Financing structure", "Project development review", "Financial analysis"],
    challenge: "KEXIM needed to know whether the Long An I and II LNG-to-power plants could be financed and developed as planned, before deciding on its support for the project.",
    solution: "DKC carried the financing and project development workstreams of the feasibility study: the financing structure, a review of the development plan, and the financial analysis.",
    result: "Financing and project development workstreams delivered within KEXIM's feasibility study (February to November 2021).",
    relevance: "Large LNG-to-power projects need a financing structure that matches their development path; testing both early shapes the lender's decision.",
    refs: [
      {
        "label": "VnExpress — Long An Province licenses $3-bln LNG power plant (Mar 2021)",
        "url": "https://e.vnexpress.net/news/business/industries/long-an-province-licenses-3-bln-lng-power-plant-4252076.html"
      },
      {
        "label": "VnEconomy — VinaCapital & GS Energy sign MoU with Export-Import Bank of Korea (Jun 2023)",
        "url": "https://en.vneconomy.vn/vinacapital-gs-energy-sign-mou-with-export-import-bank-of-korea.htm"
      },
      {
        "label": "The Investor — Vietnam PM orders resolution of bottlenecks at GS Energy-backed LNG projects (Dec 2025)",
        "url": "https://theinvestor.vn/vietnam-pm-orders-resolution-of-bottlenecks-at-gs-energy-backed-lng-projects-d17954.html"
      }
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
      "Upper Karnali is a 900 MW hydropower project on the Karnali River in Achham and Dailekh districts of western Nepal, developed by GMR Upper Karnali Hydropower, a subsidiary of India's GMR Group, under a project development agreement signed with Nepal's Investment Board in 2014. In 2024 GMR agreed to develop the project jointly with India's SJVN and IREDA, with proposed stakes of 34% each for GMR and SJVN, 5% for IREDA and 27% for the Nepal Electricity Authority. After repeated extensions of the financial close deadline, the Investment Board decided in October 2026 to facilitate the immediate start of construction."
    ],
    role: "Financial structure, risk, and financial analysis within KEITI's feasibility study.",
    scope: ["Financial structure", "Risk analysis", "Financial analysis"],
    challenge: "KEITI's feasibility study for the 900 MW Upper Karnali hydropower project needed a financial structure and a view of the project's risks and returns.",
    solution: "DKC prepared the financial structure, the risk analysis, and the financial analysis within the study led by Yooshin Engineering.",
    result: "Financial structure, risk, and financial analysis delivered within KEITI's feasibility study (November 2020 to August 2021).",
    relevance: "Large hydropower carries long construction and hydrology risk; the financial structure has to show how those risks are carried.",
    refs: [
      {
        "label": "The Kathmandu Post — GMR ropes in two Indian partners for 900MW Upper Karnali hydel project (Sep 2024)",
        "url": "https://kathmandupost.com/money/2024/09/13/gmr-ropes-in-two-indian-partners-for-900mw-upper-karnali-hydel-project"
      },
      {
        "label": "The Kathmandu Post — Upper Karnali project set to advance after years of funding delays (Oct 2026)",
        "url": "https://kathmandupost.com/money/2026/10/19/upper-karnali-project-set-to-advance-after-years-of-funding-delays"
      }
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
      "Phou Ngoy is a proposed 728 MW hydropower plant on the Mekong mainstream in Champassak province, southern Laos, about 18 km south of Pakse, and is the seventh of nine existing or planned large hydropower projects on the Mekong mainstream. The lead developer is Thailand's Charoen Energy and Water Asia. The project cost has been reported at US$2.4 billion, with power expected to be sold to Thailand.",
      "As reported in April 2022, Korea Western Power and Doosan Heavy Industries & Construction were slated to build the dam, and no power purchase agreement had yet been signed. Lao officials planned to submit the project to the Mekong River Commission for prior consultation, in which member countries assess cross-border effects on river flow, water quality, and environmental and social conditions. Completion was targeted for 2029."
    ],
    role: "Financial, tax, and legal review for Dohwa Engineering.",
    scope: ["Financial analysis", "Tax review", "Legal review"],
    challenge: "Dohwa Engineering needed an independent financial, tax, and legal view of the 728 MW Phou Ngoy hydropower project in Laos.",
    solution: "DKC carried out the financial analysis and the tax and legal review of the project.",
    result: "Financial, tax, and legal review delivered to Dohwa Engineering (November 2021 to May 2022).",
    relevance: "Tax and legal terms in the host country can change a hydropower project's returns as much as its engineering.",
    refs: [
      {
        "label": "Radio Free Asia — Another Mekong River dam in Laos begins review process (Apr 2022)",
        "url": "https://www.rfa.org/english/news/laos/phou-ngoy-dam-04272022184005.html"
      }
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
      "The Limbe gas-fired power project is a 350 MW combined-cycle plant on Cameroon's Atlantic coast, intended to ease power shortages in the south-west, coastal and western regions and to reduce the country's reliance on hydropower. It supports the government's goal of 5,000 MW of installed capacity by 2030, against about 2,000 MW today. The project is structured as a public-private partnership in which the government contributes 15% of the cost."
    ],
    role: "Financial and economic analysis within KIND's feasibility study.",
    scope: ["Financial analysis", "Economic analysis"],
    challenge: "KIND's feasibility study for the 350 MW Limbe combined-cycle plant needed a financial and economic case for the project.",
    solution: "DKC prepared the financial analysis and the economic analysis within the study.",
    result: "Financial and economic analysis delivered within KIND's feasibility study (April to October 2021).",
    relevance: "Public financiers weigh both the project's own returns and its economic value to the host country; the study has to show both.",
    refs: [
      {
        "label": "Enerdata — Cameroon plans 350 MW gas-fired power plant in partnership with China (May 2023)",
        "url": "https://www.enerdata.net/publications/daily-energy-news/cameroon-plans-350-mw-gas-fired-power-plant-partnership-china.html"
      }
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
      "Sejin G&E of Korea is developing landfill gas capture and power generation at the Akhangaran landfill in Akhangaran district and the Maidontol landfill in Parkent district, both in Tashkent region. The complex is to use 12 generators with a total capacity of up to 16 MW, and the project involves about US$55 million of direct investment. A joint venture, Sejin Uz LLC, was set up to carry it out.",
      "A foundation stone was laid on January 26, 2023, and Uzbek authorities describe the project as the only complex in Central Asia generating electricity from household landfill gas. Implementation is scheduled for 2023 through 2026, with Uzbekistan's Ministry of Ecology, Environmental Protection and Climate Change and its Ministry of Investment, Industry and Trade overseeing the project."
    ],
    role: "Financial advisory: finance, risk, and procedure review for Sejin G&E.",
    scope: ["Financing review", "Risk review", "Procedure review", "Carbon credit (CDM) revenue case"],
    challenge: "Sejin G&E needed financial advice on a landfill gas-to-energy project in Tashkent that combined power sales with carbon credit revenues.",
    solution: "DKC reviewed the financing, the project's risks and approval procedures, and the carbon credit (CDM) revenue case.",
    result: "Financial advisory delivered to Sejin G&E (August 2021 to April 2022).",
    relevance: "Projects that rely on carbon credits need that revenue tested separately, so financing does not depend on it alone.",
    refs: [
      {
        "label": "Kun.uz — A complex of electricity production from waste gas to be built in Tashkent region (Jan 2023)",
        "url": "https://kun.uz/en/news/2023/01/28/a-complex-of-electricity-production-from-waste-gas-to-be-built-in-tashkent-region"
      },
      {
        "label": "Trend — South Korean Sejin launches alternative energy production in Uzbekistan (Oct 2023)",
        "url": "https://www.trend.az/casia/uzbekistan/3815096.html"
      }
    ],
  },
  // ───────────── all other projects (case-study format; about/refs from public sources only, empty where none found)
  {
    "id": 69,
    "tag": "Green hydrogen and ammonia",
    "headline": "Pre-feasibility study for green hydrogen and ammonia, Dubai",
    "location": "Dubai, United Arab Emirates",
    "delivered": "With Synergy Korea",
    "summary": "DKC carried out the market analysis for KEITI's pre-feasibility study on a green hydrogen and ammonia plant in Dubai, ahead of the full feasibility study in 2024.",
    "about": [
      "The United Arab Emirates adopted its National Hydrogen Strategy in 2023. The strategy sets a target of 1.4 million tonnes a year of low-carbon hydrogen by 2031, made up of 1 million tonnes of green hydrogen, produced by electrolysis with renewable power, and 0.4 million tonnes of blue hydrogen, produced from natural gas with carbon capture. The targets rise to 7.5 million tonnes a year by 2040 and 15 million tonnes a year by 2050."
    ],
    "role": "Market analysis within KEITI's pre-feasibility study, led by Synergy Korea.",
    "scope": [
      "Green hydrogen and ammonia market analysis",
      "Demand and offtake outlook",
      "Price assumptions for the study"
    ],
    "challenge": "KEITI needed an early view of whether a green hydrogen and ammonia plant in Dubai had a market, before committing to a full feasibility study.",
    "solution": "Within the pre-feasibility study led by Synergy Korea, DKC analyzed the market for green hydrogen and ammonia: demand, likely offtakers, and price assumptions.",
    "result": "Market analysis delivered for KEITI's pre-feasibility study (July 2023 to January 2024). KEITI's full feasibility study followed in 2024.",
    "relevance": "A market screen before a full study keeps owners from spending on projects that have no buyer.",
    "refs": [
      {
        "label": "IEA — National Hydrogen Strategy, United Arab Emirates (policy database, 2023)",
        "url": "https://www.iea.org/policies/25916"
      }
    ]
  },
  {
    "id": 68,
    "tag": "Waste-to-energy",
    "headline": "Yen Binh waste-to-energy, Vietnam",
    "location": "Vietnam",
    "delivered": "With Synergy Korea",
    "summary": "DKC advised Samsung E&A on the business structure, tariff structure, and financing of the Yen Binh waste-to-energy project in Vietnam.",
    "about": [
      "Vietnam supports waste-to-energy power through Prime Minister's Decision 31/2014/QD-TTg, in force since June 2014. It sets a fixed 20-year feed-in tariff of VND 2,114 per kWh, about 10.05 US cents, for electricity from the direct combustion of solid waste, and a lower rate of VND 1,532 per kWh for electricity from landfill gas.",
      "Vietnam is moving away from fixed tariffs. In December 2023 the Ministry of Industry and Trade published a second draft circular under which new waste-to-energy and biomass projects would negotiate tariffs with Vietnam Electricity (EVN), subject to an annual ceiling price set by the ministry. Projects that had already signed power purchase agreements and were receiving feed-in tariffs under earlier decisions would not be affected."
    ],
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
    "refs": [
      {
        "label": "IEA — Decision on support mechanisms for the development of waste-to-energy power projects in Vietnam (feed-in tariff)",
        "url": "https://www.iea.org/policies/5705-decision-on-support-mechanisms-for-the-development-of-waste-to-energy-power-projects-in-vietnam-feed-in-tariff"
      },
      {
        "label": "Allens — Draft Circular set to end FiT era for all renewable power projects in Vietnam (Feb 2024)",
        "url": "https://allens.com.au/insights-news/insights/2024/03/draft-circular-set-to-end-fit-era-for-all-renewable-power-projects-in-vietnam"
      }
    ]
  },
  {
    "id": 67,
    "tag": "Blue ammonia and CCS",
    "headline": "Blue ammonia pre-feasibility study, Indonesia",
    "location": "Indonesia",
    "delivered": "With Synergy Korea",
    "summary": "DKC carried out a pre-feasibility study for PT Aldaberta, engaged through Synergy Korea, on a blue ammonia development with carbon capture and storage in Indonesia.",
    "about": [
      "Blue ammonia is made from natural gas, with the CO₂ released in hydrogen production captured and stored underground, so its development depends on a legal basis for CO₂ storage. In 2024 Indonesia issued Presidential Regulation 14/2024 on carbon capture and storage. It extends the CCS framework beyond the upstream oil and gas sector, which is covered by Energy and Mineral Resources Ministry Regulation 2/2023, and according to the IEA it opens the way for developments such as blue hydrogen and blue ammonia."
    ],
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
    "refs": [
      {
        "label": "IEA — CCS regulation (Presidential Regulation 14/2024), Indonesia (policy database)",
        "url": "https://www.iea.org/policies/28534"
      }
    ]
  },
  {
    "id": 66,
    "tag": "Battery storage",
    "headline": "Townsville battery storage, Queensland, Australia",
    "location": "Townsville, Queensland, Australia",
    "delivered": "DKC",
    "summary": "DKC is leading KEITI's feasibility study for a battery energy storage project in Townsville, Queensland, under way since April 2026.",
    "about": [
      "Queensland's Energy Roadmap 2025, released by the state government in October 2025, treats storage as essential to firm variable renewable energy and to manage minimum system load when rooftop solar output is high. The government expects the state to host at least 3.1 GW of short-duration batteries by 2030, about 2.4 GW more than in 2025, and an additional 1.6 to 3.4 GW of medium-duration storage by 2035. Batteries charge during the midday solar surplus and release energy during evening peaks, reducing reliance on peaking generators."
    ],
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
    "refs": [
      {
        "label": "Queensland Treasury — Queensland Energy Roadmap 2025: Storage",
        "url": "https://www.treasury.qld.gov.au/policies-and-programs/energy/energy-roadmap/storage/"
      }
    ]
  },
  {
    "id": 65,
    "tag": "Solar PV",
    "headline": "Kochkor solar power, Kyrgyzstan",
    "location": "Kochkor district, Naryn region, Kyrgyzstan",
    "capacity": "300 MWp DC (study basis)",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study for the 300 MWp Kochkor solar power project in Kyrgyzstan.",
    "about": [
      "Kyrgyzstan's power system depends heavily on hydropower: large plants such as Toktogul, Kurpsai and Tash-Kumyr provide up to 85% of generation. When winter water inflows fall, the load on thermal and combined heat and power plants rises sharply, and the country has faced winter shortfalls and rolling blackouts in dry years. New solar capacity is one way to diversify a supply that depends on river flows.",
      "Renewable development is governed by the Law on Renewable Energy Sources of June 30, 2022, administered by the Ministry of Energy. The state guarantees purchase of qualifying renewable output, with a tariff linked to the average end-consumer tariff during the payback period and capped by a ministry ceiling. Large and medium projects are allocated through state tenders in which investors compete on the lowest price per kWh."
    ],
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
    "refs": [
      {
        "label": "National Investment Agency of the Kyrgyz Republic — Energy sector overview",
        "url": "https://invest.gov.kg/en/invest-compass/sectors/energy"
      },
      {
        "label": "IEA — Strengthening Power System Security in Kyrgyzstan: A Roadmap, policy context (2022)",
        "url": "https://www.iea.org/reports/strengthening-power-system-security-in-kyrgyzstan-a-roadmap/kyrgyzstans-power-system-security-policy-context"
      }
    ]
  },
  {
    "id": 64,
    "tag": "Solar and storage",
    "headline": "Solar PV and battery storage development, Texas, USA",
    "location": "Texas, USA",
    "capacity": "Solar PV approx. 300 MW with battery storage",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study for a solar PV and battery storage development of about 300 MW in Texas.",
    "about": [
      "Texas's ERCOT grid is the fastest-growing solar market in the United States. Solar's share of ERCOT generation rose from 4% in 2021 to 12% in 2025, and the US Energy Information Administration expects Texas to account for about 40% of US solar capacity additions in 2026, with solar generation overtaking coal in ERCOT that year. Demand is also rising, driven by data centers, industrial loads, and oil and gas processing.",
      "Federal tax credits shape project economics. Under the One Big Beautiful Bill Act of July 2025, solar facilities that begin construction after July 4, 2026 must be placed in service by the end of 2027 to claim the Section 45Y or 48E credits. Energy storage keeps a longer runway, with credits phasing down only for construction starting in 2034 and later. New foreign-entity-of-concern rules also restrict ownership and supply chains."
    ],
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
    "refs": [
      {
        "label": "US EIA — Electricity generation from solar could exceed coal in ERCOT for the first time in 2026 (May 2026)",
        "url": "https://www.eia.gov/todayinenergy/detail.php?id=67685"
      },
      {
        "label": "Kirkland & Ellis — One Big Beautiful Bill Act brings big changes to green energy tax credits (Aug 2025)",
        "url": "https://www.kirkland.com/publications/kirkland-alert/2025/08/one-big-beautiful-bill-act-brings-big-changes-to-green-energy-tax-credits"
      }
    ]
  },
  {
    "id": 62,
    "tag": "Sustainable aviation fuel",
    "headline": "Sustainable aviation fuel development, Indonesia",
    "location": "Indonesia",
    "capacity": "200,000 t/yr",
    "delivered": "DKC",
    "summary": "DKC carried out a feasibility study for KEXIM on a sustainable aviation fuel (SAF) development in Indonesia with a planned output of 200,000 tonnes a year.",
    "about": [
      "Indonesia is preparing a mandate for sustainable aviation fuel (SAF). As reported in January 2026, the Ministry of Energy and Mineral Resources plans a 1% SAF blending requirement in 2027, rising to 5% in 2029, as part of the country's 2060 net-zero roadmap. Palm-based oils are the main feedstock discussed; a commercial Garuda Indonesia test flight in October 2023 used a blend containing refined palm kernel oil. In July 2026 the Coordinating Minister for Infrastructure and Regional Development said the government was preparing to make SAF use mandatory from 2027."
    ],
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
    "refs": [
      {
        "label": "OFI Magazine — Indonesian government plans to introduce 1% SAF mandate in 2027 (Jan 2026)",
        "url": "https://www.ofimagazine.com/news/indonesian-government-plans-to-introduce-1-saf-mandate-in-2027"
      },
      {
        "label": "Antara — Indonesia to mandate sustainable aviation fuel use starting in 2027 (Jul 2026)",
        "url": "https://en.antaranews.com/news/423840/indonesia-to-mandate-sustainable-aviation-fuel-use-starting-in-2027"
      }
    ]
  },
  {
    "id": 61,
    "tag": "Pharmaceutical manufacturing (Healthcare Unit)",
    "headline": "Pharmaceutical manufacturing facility, Kyrgyzstan",
    "location": "Kyrgyzstan",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit supported business development for a pharmaceutical manufacturing facility in Kyrgyzstan for a private client.",
    "about": [
      "Kyrgyzstan relies heavily on imported medicines. According to the Ministry of Economy and Commerce, imports cover about 96 percent of domestic demand for medicines and medical products. A state support program approved in 2026 offers concessional financing to drug and medical device makers for building and upgrading production sites, buying modern equipment, setting up quality-control laboratories, training staff, and introducing labeling and traceability systems.",
      "Regulation is also tightening. Under Eurasian Economic Union rules, domestic manufacturers must bring their facilities into line with EAEU Good Manufacturing Practice (GMP) requirements and the ISO 13485 standard by the end of 2027. The government has made reducing reliance on imported medicines a priority, with attention to medicines on the national List of Vital Medicines that are not yet produced in the country."
    ],
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
    "refs": [
      {
        "label": "24.kg — Drug manufacturers in Kyrgyzstan to gain access to preferential loans (Jun 2026)",
        "url": "https://24.kg/english/379816_Drug_manufacturers_in_Kyrgyzstan_to_gain_access_to_preferential_loans/"
      },
      {
        "label": "The Times of Central Asia — Kyrgyzstan gears toward self-sufficiency in medication (Jan 2025)",
        "url": "https://timesca.com/kyrgyzstan-gears-toward-self-sufficiency-in-medication/"
      }
    ]
  },
  {
    "id": 60,
    "tag": "Pharmaceutical manufacturing (Healthcare Unit)",
    "headline": "Pharmaceutical manufacturing facility on a BOO basis, Uzbekistan",
    "location": "Uzbekistan",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit carried out business development for KIND on a pharmaceutical manufacturing facility in Uzbekistan to be developed on a build-own-operate (BOO) basis.",
    "about": [
      "Uzbekistan treats the localization of pharmaceutical production as a national priority. At a March 2026 meeting chaired by President Shavkat Mirziyoyev, the government set a target of raising the share of domestically produced medicines in the home market to 70 percent by 2030. Officials reported that domestic output of medicines had doubled, put the market for medicines and medical devices at about US$2.5 billion, and noted that almost half of imported medicines come from 34 foreign companies, making localization of their products a priority.",
      "Support measures announced at the same meeting include three-year exemptions from land, profit, and property taxes for new projects, foreign-currency loans at 7 percent for medicines on a published localization list, reimbursement of half of technology transfer costs for high-demand medicines launched within a year, and compensation of half the cost of European GMP certification. The Tashkent Pharma Park is to be expanded by 100 hectares to produce the 100 most frequently imported medicines."
    ],
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
    "refs": [
      {
        "label": "Government of Uzbekistan (gov.uz) — Measures to expand pharmaceutical production and accelerate technology transfer discussed (Mar 2026)",
        "url": "https://gov.uz/en/news/view/139665"
      }
    ]
  },
  {
    "id": 59,
    "tag": "Green hydrogen",
    "headline": "Port of Brisbane green hydrogen hub, Australia",
    "location": "Port of Brisbane, Queensland, Australia",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a green hydrogen development at the Port of Brisbane, Queensland.",
    "about": [
      "A green hydrogen production and refuelling hub is being developed at the Port of Brisbane in Queensland, aimed at heavy-vehicle fleets such as public buses and trucks. A joint development agreement among the hub's partners was signed in August 2024, under which the project is to be developed and the hydrogen sold in the Australian domestic market.",
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
        "label": "pv magazine — Green hydrogen hub planned at the Port of Brisbane (Aug 2024)",
        "url": "https://www.pv-magazine.com/2024/08/26/lion-energy-mitsubishis-dga-samsung-ct-to-build-hydrogen-hub-in-australia/"
      },
      {
        "label": "Etoday — Port of Brisbane green hydrogen hub agreement (Aug 2024, Korean)",
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
    "about": [
      "Argentina's utility-scale renewables were built under Law 27,191 of 2015, which created renewable energy auctions with power purchase agreements of 15 years or more, a trust fund (FODER) for payment guarantees and financing, and tax incentives for independent producers. The law also lets large users above 300 kW buy renewable power directly from generators, which became the basis of the corporate renewable power market."
    ],
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
    "refs": [
      {
        "label": "IEA — Law 27.191 Program to Promote the Use of Renewable Energy in Electricity Generation",
        "url": "https://www.iea.org/policies/6129"
      }
    ]
  },
  {
    "id": 57,
    "tag": "Green hydrogen and ammonia",
    "headline": "Green hydrogen and ammonia plant, Dubai",
    "location": "Dubai, United Arab Emirates",
    "capacity": "600 MW electrolysis, 1,200 MW renewables; 37,000 t/yr green hydrogen and 200,000 t/yr green ammonia",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a green hydrogen and ammonia plant in Dubai, with 600 MW of electrolysis and 200,000 tonnes a year of green ammonia.",
    "about": [
      "Under its National Hydrogen Strategy, adopted in 2023, the United Arab Emirates aims to produce 1.4 million tonnes a year of low-carbon hydrogen by 2031. Of this, 1 million tonnes is to be green hydrogen, made by electrolysis powered by renewable electricity, and 0.4 million tonnes blue hydrogen, made from natural gas with carbon capture. Production targets rise to 7.5 million tonnes a year by 2040 and 15 million tonnes a year by 2050."
    ],
    "role": "Feasibility study for KEITI.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEITI needed a feasibility study on a green hydrogen and ammonia plant in Dubai, combining 1,200 MW of renewables with 600 MW of electrolysis, to assess whether it could be delivered and financed.",
    "solution": "DKC carried out the feasibility study, reviewing the market for green ammonia, the project's economics, and the main risks across power supply, production, and offtake.",
    "result": "Feasibility study delivered to KEITI (June to December 2024).",
    "relevance": "Integrated renewables-to-ammonia projects tie several risks into one revenue line, and owners need them assessed together.",
    "refs": [
      {
        "label": "IEA — National Hydrogen Strategy, United Arab Emirates (policy database, 2023)",
        "url": "https://www.iea.org/policies/25916"
      }
    ]
  },
  {
    "id": 56,
    "tag": "Green ammonia",
    "headline": "Green ammonia project, Western Australia",
    "location": "Western Australia",
    "capacity": "1.1 GW electrolysis, 1.9 GW renewables; 500,000 t/yr green ammonia",
    "delivered": "DKC",
    "summary": "DKC carried out KEXIM's feasibility study on a green ammonia project in Western Australia with 1.1 GW of electrolysis and 500,000 tonnes a year of output.",
    "about": [
      "Western Australia's Renewable Hydrogen Strategy 2024–2030, published in October 2024, aims for renewable hydrogen production to begin at scale in the state by 2030 and for a large project using renewable hydrogen in green ammonia or green metals to be approved by 2028. It names Kwinana, the Pilbara, and the Mid West as hydrogen hubs and Strategic Industrial Areas for infrastructure investment, and targets an offtake agreement for international export by 2030.",
      "At the federal level, the Hydrogen Production Tax Incentive, legislated in February 2025, pays A$2 for each kilogram of renewable hydrogen produced between 2027–28 and 2039–40, for up to ten years per project. Separately, the Australian Renewable Energy Agency (ARENA) runs Hydrogen Headstart, a revenue support program for large-scale renewable hydrogen production with up to A$2 billion in its first round."
    ],
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
    "refs": [
      {
        "label": "Government of Western Australia — Western Australia's Renewable Hydrogen Strategy 2024–2030 (Oct 2024)",
        "url": "https://www.wa.gov.au/government/publications/western-australias-renewable-hydrogen-strategy-2024-2030"
      },
      {
        "label": "Ammonia Energy Association — Hydrogen production tax credits pass the Australian Senate (Feb 2025)",
        "url": "https://ammoniaenergy.org/articles/hydrogen-production-tax-credits-pass-the-australian-senate"
      },
      {
        "label": "ARENA — Hydrogen Headstart Round 1",
        "url": "https://arena.gov.au/funding/hydrogen-headstart"
      }
    ]
  },
  {
    "id": 55,
    "tag": "Medical waste-to-energy",
    "headline": "Medical waste-to-energy plant, Tashkent, Uzbekistan",
    "location": "Tashkent, Uzbekistan",
    "capacity": "4.5 MW power; 22,000 t/yr medical waste",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a 4.5 MW medical waste-to-energy plant in Tashkent treating 22,000 tonnes of waste a year.",
    "about": [
      "Uzbekistan's Strategy for Solid Household Waste Management for 2019–2028, approved by presidential decree in April 2019, targets full coverage of waste collection services, processing of at least 60 percent of generated waste, a 60 percent cut in waste sent to landfill, and raising the use of alternative energy at waste treatment facilities to 35 percent. The country generates about 7 million tonnes of waste a year, and the US International Trade Administration notes government interest in expanding waste-to-energy capacity.",
      "Treatment of medical waste with energy recovery is at an early stage in Uzbekistan. The country's first medical waste incineration unit with heat recovery began test operation at a city hospital in Tashkent's Chilanzar district in August 2025, under a presidential decree of July 2024. The heat it produces is used for the hospital's heating and hot water, and similar units are planned for other medical institutions in Tashkent."
    ],
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
    "refs": [
      {
        "label": "Kun.uz — Recycling of solid household waste to be brought up to 60% by 2028 (Apr 2019)",
        "url": "https://kun.uz/en/news/2019/04/18/recycling-of-solid-household-waste-to-be-brought-up-to-60-by-2028"
      },
      {
        "label": "US International Trade Administration — Uzbekistan waste management opportunities (Nov 2022)",
        "url": "https://www.trade.gov/market-intelligence/uzbekistan-waste-management-opportunities"
      },
      {
        "label": "UzDaily — Uzbekistan launches first medical waste-to-energy plant (Aug 2025)",
        "url": "https://www.uzdaily.uz/en/uzbekistan-launches-first-medical-waste-to-energy-plant/"
      }
    ]
  },
  {
    "id": 54,
    "tag": "Green methanol",
    "headline": "Green methanol project, Queensland, Australia",
    "location": "Queensland, Australia",
    "capacity": "200 MW",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a 200 MW green methanol project in Queensland.",
    "about": [
      "Renewable methanol, made from biomass or from green hydrogen combined with captured CO₂, is one of the main candidate fuels for cutting emissions from shipping. In a December 2025 white paper, the classification society DNV counted more than 450 methanol-capable vessels in operation and on order and found that methanol engines and bunkering have reached high technical readiness. DNV put current production of low-emission methanol at about 2.2 million tonnes a year, against potential demand of up to 60 million tonnes by 2040, and named cost and availability as the main barriers to uptake."
    ],
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
    "refs": [
      {
        "label": "DNV — Methanol as marine fuel at high readiness level, but adoption hurdles remain (Dec 2025)",
        "url": "https://www.dnv.com/news/2025/dnv-report-methanol-as-marine-fuel-at-high-readiness-level-but-adoption-hurdles-remain/"
      }
    ]
  },
  {
    "id": 53,
    "tag": "Green ammonia",
    "headline": "Green hydrogen and ammonia project, British Columbia, Canada",
    "location": "British Columbia, Canada",
    "capacity": "255 MW electrolysis; 37,815 t/yr green hydrogen; 210,000 t/yr green ammonia",
    "delivered": "DKC",
    "summary": "DKC carried out KEXIM's feasibility study on a green hydrogen and ammonia project in British Columbia producing 210,000 tonnes of green ammonia a year.",
    "about": [
      "British Columbia released its hydrogen strategy in 2021 as part of CleanBC. The strategy sets out 63 actions for government, industry, and innovators over the short, medium, and long term, with immediate priorities of scaling up renewable hydrogen production, establishing regional hydrogen hubs, and deploying medium- and heavy-duty fuel-cell vehicles.",
      "Canada's federal Clean Hydrogen Investment Tax Credit, introduced in 2023, covers 15% to 40% of eligible project costs, depending on the carbon intensity of the hydrogen produced, with the cleanest hydrogen receiving the highest rate. A 15% credit also applies to equipment that converts hydrogen into ammonia for transport. The rates are halved in 2034 and eliminated after that."
    ],
    "role": "Feasibility study for KEXIM.",
    "scope": [
      "Feasibility study",
      "Market review",
      "Financial analysis",
      "Risk review"
    ],
    "challenge": "KEXIM needed a feasibility study on a 210,000 t/yr green ammonia project in British Columbia, to inform its view of the project's financing case.",
    "solution": "DKC carried out the feasibility study, reviewing the market for green ammonia exports, the project's economics, and the risks a lender would weigh.",
    "result": "Feasibility study delivered to KEXIM (December 2023 to December 2024).",
    "relevance": "Canadian ammonia exports to Asia depend on power, logistics, and offtake lining up, which a feasibility study must test together.",
    "refs": [
      {
        "label": "IEA — British Columbia's Hydrogen Strategy (policy database, 2021)",
        "url": "https://www.iea.org/policies/28590"
      },
      {
        "label": "IEA — Investment Tax Credit for Clean Hydrogen, Canada (policy database, 2023)",
        "url": "https://www.iea.org/policies/17330"
      }
    ]
  },
  {
    "id": 52,
    "tag": "Green hydrogen and ammonia",
    "headline": "Port of Newcastle green hydrogen and ammonia, Australia",
    "location": "Kooragang Island, Port of Newcastle, New South Wales, Australia",
    "delivered": "DKC",
    "summary": "DKC carried out KIND's feasibility study on green hydrogen and ammonia development at the Port of Newcastle, New South Wales.",
    "about": [
      "The Port of Newcastle is developing a Clean Energy Precinct on a 220-hectare former industrial site on Kooragang Island, in the Hunter region of New South Wales, as a hub for producing, storing, and exporting renewable hydrogen and ammonia. When the plans were announced in May 2023, the precinct was designed to support about 1.6 GW of electrolytic hydrogen production within five years, backed by an A$100 million federal commitment.",
      "In October 2024 the port reported that it had signed agreements for front-end engineering design and environmental impact statements covering electrical, water, storage, berth, and pipeline infrastructure, with design work expected to take about 18 months. Construction of production facilities was expected to begin in 2027, subject to planning approvals, and the precinct to be operational from 2030."
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
        "url": "https://www.pv-magazine-australia.com/2024/10/15/newcastle-port-progress-plans-for-clean-energy-precinct/"
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
    "id": 48,
    "tag": "LNG-to-power",
    "headline": "Review of the Hai Lang LNG-to-power feasibility study, Vietnam",
    "location": "Hai Lang district, Quang Tri province, Vietnam",
    "capacity": "1,500 MW combined cycle (Phase 1)",
    "delivered": "DKC",
    "summary": "DKC reviewed the feasibility study report for the Hai Lang LNG-to-power project for KEPCO E&C.",
    "about": [
      "The Hai Lang LNG power center in Quang Tri province is developed by Vietnam's T&T Group with Korea Gas Corporation (KOGAS), Hanwha Energy and Korea Southern Power (KOSPO). Its first phase is a 1,500 MW combined-cycle plant with an LNG import terminal of about 1.5 million tonnes a year on a 120-hectare site. Ground was broken in January 2022 on an investment of about US$2.37 billion, and Vietnam's Ministry of Industry and Trade approved the project's feasibility study in January 2025, ahead of power purchase agreement negotiations and contractor selection."
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
      "Shannonbridge B in County Offaly is Ireland's first hybrid grid-stabilization plant combining a synchronous condenser with a battery energy storage system. The 63.2 MW station couples a generator with a flywheel storing 4,000 MVA·s of rotational energy, providing inertia, with a battery that can supply up to 160 MWh. Groundbreaking took place in September 2022, and the Taoiseach officially opened the plant on March 6, 2026.",
      "The plant serves EirGrid's growing need for system services. Under its DS3 program, EirGrid raised the limit on instantaneous non-synchronous generation, such as wind and solar, from 50% to 75% by March 2022, and it is working toward 95%. Operating at those levels requires inertia and fast frequency response that conventional power stations used to supply."
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
      },
      {
        "label": "EirGrid — DS3 Programme: Delivering a Secure, Sustainable Electricity System",
        "url": "https://www.eirgrid.ie/ds3-programme-delivering-secure-sustainable-electricity-system"
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
    "about": [
      "Western Australia's Renewable Hydrogen Strategy 2024–2030 sets the goal of starting renewable hydrogen production at scale in the state by 2030, with a large project using renewable hydrogen to make green ammonia or green metals approved by 2028 and an international export offtake agreement secured by 2030. The strategy identifies Kwinana, the Pilbara, and the Mid West as hydrogen hubs for infrastructure investment.",
      "Federal support includes the Hydrogen Production Tax Incentive, legislated in February 2025, which provides A$2 per kilogram of renewable hydrogen produced from 2027–28 to 2039–40 for up to ten years per project. The Australian Renewable Energy Agency (ARENA) also offers revenue support for large-scale renewable hydrogen production through its Hydrogen Headstart program."
    ],
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
    "refs": [
      {
        "label": "Government of Western Australia — Western Australia's Renewable Hydrogen Strategy 2024–2030 (Oct 2024)",
        "url": "https://www.wa.gov.au/government/publications/western-australias-renewable-hydrogen-strategy-2024-2030"
      },
      {
        "label": "Ammonia Energy Association — Hydrogen production tax credits pass the Australian Senate (Feb 2025)",
        "url": "https://ammoniaenergy.org/articles/hydrogen-production-tax-credits-pass-the-australian-senate"
      },
      {
        "label": "ARENA — Hydrogen Headstart Round 1",
        "url": "https://arena.gov.au/funding/hydrogen-headstart"
      }
    ]
  },
  {
    "id": 44,
    "tag": "Customs infrastructure",
    "headline": "Container inspection facility for Sri Lanka Customs",
    "location": "Sri Lanka",
    "delivered": "DKC",
    "summary": "DKC carried out KIND's feasibility study on a container inspection facility for Sri Lanka Customs, planned on a build-operate-transfer (BOT) basis.",
    "about": [
      "Sri Lanka Customs examines imported sea cargo through its Central Cargo Examination Directorate, which selects containers by risk. High-risk full container loads go to a dedicated unit at Grayline Yard I in Orugodawatta, medium-risk cargo to Grayline Yards I and II, and low-risk cargo to the Rank Container Terminal. Customs lists four scanners operating around the clock at Colombo Port and the Rank Container Terminal, used mainly to speed clearance of low-risk cargo.",
      "Physical inspection capacity remains limited. In October 2026, after a large drug seizure at Colombo Port, the Public Security Minister announced plans to introduce container scanners at the country's ports. Officials said about 35 percent of imports are physically examined and the rest are cleared without physical scrutiny, that capacity for high-risk cargo had been capped at about 500 containers a day, and that Colombo handles 1,500 to 3,000 units a day."
    ],
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
    "refs": [
      {
        "label": "Sri Lanka Customs — Central Cargo Examination Directorate",
        "url": "https://www.customs.gov.lk/about-us/directorates-and-divisions/central-cargo-examination-directorate/"
      },
      {
        "label": "Maritime Gateway — Sri Lanka to install container scanners at ports after major ice seizure at Colombo (Oct 2026)",
        "url": "https://www.maritimegateway.com/sri-lanka-port-container-scanners/"
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
    "about": [
      "Small hydropower in Indonesia is developed mainly by independent power producers selling to the state utility PLN. Since Presidential Regulation 112 of 2022, hydropower tariffs are negotiated with PLN under a ceiling price set in the regulation, with no escalation during the power purchase agreement and approval required from the energy ministry. PLN's electricity supply business plan for 2025 to 2034 adds 11.7 GW of hydropower, including pumped storage, and expects about 73% of new plants to be developed by private producers."
    ],
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
    "refs": [
      {
        "label": "ABNR — Long-awaited Presidential Regulation signals transition to greener energy in Indonesia (Oct 2022)",
        "url": "https://www.abnrlaw.com/news/long-awaited-presidential-regulation-signals-transition-to-greener-energy-in-indonesia"
      },
      {
        "label": "Enerdata — Indonesia aims to add 69.5 GW of new power capacity between 2025 and 2034 (May 2025)",
        "url": "https://www.enerdata.net/publications/daily-energy-news/indonesia-aims-add-695-gw-new-power-capacity-between-2025-and-2034.html"
      }
    ]
  },
  {
    "id": 41,
    "tag": "Solar PV",
    "headline": "Alfonso el Sabio solar PV, Spain",
    "location": "Spain",
    "capacity": "600 MW",
    "delivered": "With Synergy Korea",
    "summary": "DKC carried out KEITI's feasibility study for the 600 MW Alfonso el Sabio solar PV project in Spain.",
    "about": [
      "Spain is one of Europe's largest solar markets. Its updated National Integrated Energy and Climate Plan, approved in September 2024, targets 76 GW of solar by 2030, of which 19 GW is self-consumption, alongside 62 GW of wind and 22.5 GW of storage, so that renewables supply 81% of electricity generation. Spain had about 22.5 GW of grid-connected solar in September 2024.",
      "Rapid growth has pressured midday prices. Spain recorded 404 hours of negative wholesale prices in the first half of 2025, the most of any European country tracked by consultancy Enervis, and about a third of potential solar output fell in negative-price periods from January to May. Price cannibalization of this kind shapes how utility-scale solar is contracted and financed."
    ],
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
    "refs": [
      {
        "label": "pv magazine — Spain sets new 2030 solar target of 76 GW (Sep 2024)",
        "url": "https://www.pv-magazine.com/2024/09/25/spain-sets-new-2030-solar-target-of-76-gw/"
      },
      {
        "label": "pv magazine — Negative price hours on the rise in Europe (Jul 2025)",
        "url": "https://www.pv-magazine.com/2025/07/22/negative-price-hours-on-the-rise-in-europe/"
      }
    ]
  },
  {
    "id": 40,
    "tag": "Hydropower",
    "headline": "Battambang II hydropower, Cambodia",
    "location": "Battambang province, Cambodia",
    "capacity": "approx. 30 MW (study basis)",
    "delivered": "DKC",
    "summary": "DKC carried out KIND's feasibility study for the 30 MW Battambang II hydropower project in Cambodia.",
    "about": [
      "Hydropower is the backbone of Cambodia's power supply. Under the Power Development Master Plan 2022 to 2040, hydropower capacity is planned to rise from 1,331 MW in late 2021, about 44% of installed capacity, to 1,560 MW by 2030 and 3,000 MW by 2040. Solar is planned to grow from 377 MW to 1,000 MW by 2030 and 3,155 MW by 2040, and the country aims for carbon neutrality by 2050."
    ],
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
    "refs": [
      {
        "label": "Enerdata — Cambodia targets 3,155 MW solar and 3,000 MW hydro capacity by 2040 (Dec 2022)",
        "url": "https://www.enerdata.net/publications/daily-energy-news/cambodia-targets-3155-mw-solar-and-3000-mw-hydro-capacity-2040.html"
      }
    ]
  },
  {
    "id": 39,
    "tag": "Green ammonia",
    "headline": "Green ammonia project, Duqm, Oman",
    "location": "Duqm, Oman",
    "capacity": "1,200 kt/yr green ammonia (3.4 kt/day)",
    "delivered": "DKC",
    "summary": "DKC carried out KEITI's feasibility study on a green ammonia project at Duqm, Oman, with a capacity of about 1.2 million tonnes a year.",
    "about": [
      "Oman adopted a green hydrogen strategy in 2022 and set up Hydrogen Oman (Hydrom), a subsidiary of Energy Development Oman, to run the sector. Under the strategy, government land for renewable hydrogen production is allocated through public auctions, with reduced land fees during development and construction and an incentive fee linked to in-country value.",
      "In June 2023 Hydrom signed the first three agreements for green hydrogen land blocks in Al Wusta Governorate, where Duqm lies, each covering about 320 square kilometers. Together they represent more than US$20 billion of investment and about 500,000 tonnes of green hydrogen a year from more than 12 GW of renewable capacity. In November 2026 Hydrom awarded two further integrated projects in Duqm under its third auction round."
    ],
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
    "refs": [
      {
        "label": "IEA — Oman Green Hydrogen Strategy (policy database, 2022)",
        "url": "https://www.iea.org/policies/28712"
      },
      {
        "label": "Oman Ministry of Finance — Agreements signed for $20 billion of green hydrogen projects (Jun 2023)",
        "url": "https://archive.fm.gov.om/en/5929/"
      },
      {
        "label": "Oman Ministry of Finance — Oman signs Duqm green hydrogen projects (Nov 2026)",
        "url": "https://www.fm.gov.om/en/64630/"
      }
    ]
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
      "In February 2021 Qatar's Ministry of Commerce and Industry, with the Ministry of Education and Higher Education and the Public Works Authority (Ashghal), announced the third package of the Qatar Schools Public-Private Partnership Development Program and invited expressions of interest. The program covers 47 schools in four packages; at the time, the first package had been signed and the second launched.",
      "The third package covers 14 schools: four secondary, five preparatory, and four primary schools, and one school for students with special needs. The private partner would design, build, and finance the schools, demolish vacated school buildings, and operate and maintain the facilities over a 25-year term, after which the assets transfer to the public authority."
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
    "about": [
      "Supercritical CO2 power cycles use carbon dioxide above its critical point as the working fluid in place of steam. According to the US Department of Energy's National Energy Technology Laboratory, they offer higher heat-to-electricity conversion efficiency than steam-based cycles, high power density with small turbomachinery, and simpler operation, and they can work with almost any fuel or heat source. The Department of Energy supports the technology through research and a 10 MWe pilot plant program."
    ],
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
    "refs": [
      {
        "label": "US DOE NETL — Supercritical CO2 Power Cycles",
        "url": "https://netl.doe.gov/carbon-management/turbines/sco2"
      }
    ]
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
      "In March 2021 the Dominican Republic's Ministry of Energy and Mines opened an international tender (EDES-LPI-NG-01-2021) for two natural gas-fired combined-cycle plants at Manzanillo, together with a gas terminal with onshore storage. Each plant had to contract between 350 MW and 400 MW under a 15-year power purchase contract."
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
    "about": [
      "Sri Lanka aims to meet 70% of its electricity demand from renewable sources by 2030 and to reach carbon neutrality by 2050. In February 2026 the Cabinet approved a Renewable Energy Resources Development Plan for 2025 to 2030, prepared by the Sri Lanka Sustainable Energy Authority. The plan prioritizes land for projects, sets an implementation timeframe, and introduces a national renewable energy map and dedicated renewable energy parks, along with floating solar development."
    ],
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
    "refs": [
      {
        "label": "Daily FT — Cabinet clears Renewable Energy Resources Development Plan 2025–2030 (Feb 2026)",
        "url": "https://www.ft.lk/front-page/Cabinet-clears-Renewable-Energy-Resources-Development-Plan-20252030/44-787937"
      }
    ]
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
      "The Mubarek thermal power plant, about 520 km south-west of Tashkent, is a 60 MW combined heat and power plant that began operating in 1985. In January 2021 SK Engineering & Construction, now SK ecoplant, secured exclusive development rights to modernize it and add a high-efficiency gas-fired plant of about 300 to 450 MW, with an investment of up to US$600 million. As announced, the Uzbek government would buy the plant's power for 25 years and supply its fuel. In November 2021 SK ecoplant signed a wider memorandum with Uzbekistan on energy modernization."
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
      "Hanwha Energy and Irish developer Lumcloon Energy developed battery storage plants at Lumcloon and Shannonbridge in County Offaly, where construction began in 2019. Their legal adviser described the projects in 2020 as Ireland's largest battery energy storage systems, at 200 MW in total. According to Hanwha, the plants were completed in 2021 with financing from the Export-Import Bank of Korea.",
      "The plants earn revenue by providing system services to EirGrid under its DS3 program, which pays for fast frequency response and operating reserves needed to run the grid with high shares of wind. Batteries have competed strongly for these services: in one capped procurement round, all 110 MW of contracts went to battery projects."
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
        "label": "Hanwha — Hanwha Energy promotes third energy storage system (ESS) project in Ireland (Oct 2022)",
        "url": "https://www.hanwha.com/en/news_and_media/press_release/hanwha-energy-promotes-third-energye-storage-system-ess-project-in-ireland.html"
      },
      {
        "label": "EirGrid — DS3 Programme: Delivering a Secure, Sustainable Electricity System",
        "url": "https://www.eirgrid.ie/ds3-programme-delivering-secure-sustainable-electricity-system"
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
      "Hanwha Energy and Irish developer Lumcloon Energy developed battery storage plants at Lumcloon and Shannonbridge in County Offaly, where construction began in 2019. Their legal adviser described the projects in 2020 as Ireland's largest battery energy storage systems, at 200 MW in total. According to Hanwha, the plants were completed in 2021 with financing from the Export-Import Bank of Korea.",
      "Battery revenue in Ireland comes largely from system services. Under EirGrid's DS3 program, the grid operator pays for fast frequency response and primary, secondary and tertiary operating reserves, which allow it to run the system with up to 75% of instantaneous generation from wind and other non-synchronous sources. How often and how quickly a battery responds therefore drives its commercial performance."
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
        "label": "Hanwha — Hanwha Energy promotes third energy storage system (ESS) project in Ireland (Oct 2022)",
        "url": "https://www.hanwha.com/en/news_and_media/press_release/hanwha-energy-promotes-third-energye-storage-system-ess-project-in-ireland.html"
      },
      {
        "label": "EirGrid — DS3 Programme: Delivering a Secure, Sustainable Electricity System",
        "url": "https://www.eirgrid.ie/ds3-programme-delivering-secure-sustainable-electricity-system"
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
    "about": [
      "Indonesia has banned exports of nickel ore in full since January 2020, after a first ban in 2014 and a period from 2017 to 2019 in which lower-grade ore could still be exported. Nickel must now be processed in the country before it is exported. The government's stated aims are to strengthen domestic processing, capture more of the value of the nickel supply chain in Indonesia, and create jobs. The European Union has challenged the measures under World Trade Organization rules."
    ],
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
    "refs": [
      {
        "label": "IEA — Prohibition of the export of nickel ore, Indonesia (policy database)",
        "url": "https://www.iea.org/policies/16084-prohibition-of-the-export-of-nickel-ore"
      }
    ]
  },
  {
    "id": 22,
    "tag": "District cooling",
    "headline": "District cooling for South Saad Al Abdullah smart city, Kuwait",
    "location": "South Saad Al Abdullah City, Kuwait",
    "capacity": "About 228,500 RT across six plants",
    "delivered": "With Synergy Korea",
    "summary": "DKC carried out KEXIM's feasibility study on district cooling for the South Saad Al Abdullah smart city in Kuwait, totaling about 228,500 refrigeration tons across six plants.",
    "about": [
      "South Saad Al Abdullah is a new residential city on the outskirts of Kuwait City, developed by Kuwait's Public Authority for Housing Welfare (PAHW) and planned as a smart city with Korean participation, including Korea Land and Housing Corporation (LH). As reported in 2024, it covers about 64 square kilometers with some 24,508 housing units across five residential areas, and completion is expected in the last quarter of 2027.",
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
      "KOC tendered the facilities on a build-own-operate basis, with an option to buy them back later, and received bids in April 2021. In December 2021 contracts were signed with Spetco for JPF-4 (about US$398 million) and with China's Jereh for JPF-5 (about US$426 million), each to operate and maintain its facility for five years."
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
        "label": "Offshore Technology — Kuwait confirms lowest bidder for Jurassic projects (Apr 2021)",
        "url": "https://www.offshore-technology.com/?p=94615"
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
    "about": [
      "India depends heavily on imports for medical devices, which meet up to 85 percent of domestic demand. In March 2020 the Union Cabinet approved two schemes to build up domestic manufacturing, both running from 2020–21 to 2024–25: Promotion of Medical Device Parks, with Rs 400 crore to finance common infrastructure facilities in four parks, and a production-linked incentive scheme of Rs 3,420 crore paying 5 percent on incremental sales. The parks aim to cut manufacturing costs through shared infrastructure, offsetting an estimated 12 to 15 percent cost disadvantage against competing economies."
    ],
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
    "refs": [
      {
        "label": "BioSpectrum India — Cabinet approves promoting domestic manufacturing of medical devices (Mar 2020)",
        "url": "https://www.biospectrumindia.com/news/22/16011/cabinetapproves-promoting-domestic-manufacturing-of-medicaldevices.html"
      }
    ]
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
      "The plan was later reworked. In October 2023 the Korea Rail Network Authority, in a consortium with KRTC and other Korean firms, signed a contract for a feasibility study commissioned by the Export-Import Bank of Korea on a 5.3 km, four-station section of a Bali LRT linking the airport with Kuta."
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
    "about": [
      "In the United Arab Emirates, new desalination capacity is increasingly procured from private developers as independent water projects (IWPs), under long-term water purchase agreements with state utilities including Abu Dhabi's EWEC, Dubai's DEWA, Etihad Water & Electricity, and the Sharjah Electricity & Water Authority. Utilities are shifting from thermal desalination to seawater reverse osmosis, in line with the country's goal of net zero by 2050. In Abu Dhabi, EWEC plans to dismantle or convert thermal plants as their contracts expire between 2025 and 2029."
    ],
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
    "refs": [
      {
        "label": "MEED — UAE begins massive reverse osmosis buildup (Apr 2023)",
        "url": "https://guest.meed.com/uae-begins-massive-reverse-osmosis-buildup"
      }
    ]
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
    "about": [
      "The Philippine Department of Energy sees imported liquefied natural gas (LNG) as a complement to gas from the Malampaya field, a source of fuel diversification, and support for variable renewables such as solar and wind. By June 2023 two LNG import facilities in Batangas had been completed, the first imported LNG was supplying a gas-fired power plant, and the department had approved seven LNG terminal projects.",
      "In January 2025 the President signed Republic Act 12120, the Philippine Natural Gas Industry Development Act. It establishes the downstream natural gas industry, positions gas as a transition fuel toward renewables, and aims to make natural gas a reliable fuel for power plants serving peaking, mid-merit, and baseload demand. The law's principal author noted that Malampaya remains the country's only producing gas field."
    ],
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
    "refs": [
      {
        "label": "Philstar — DOE upbeat on fuel supply as 2 LNG facilities completed (Jun 2023)",
        "url": "https://www.philstar.com/business/2023/06/04/2271231/doe-upbeat-fuel-supply-2-lng-facilities-completed"
      },
      {
        "label": "Daily Tribune — PBBM signs natgas law to seal energy security (Jan 2025)",
        "url": "https://tribune.net.ph/2025/01/15/pbbm-signs-natgas-law-to-seal-energy-security"
      }
    ]
  },
  {
    "id": 13,
    "tag": "Solar PV",
    "headline": "Solar power for the Philippine Department of National Defense",
    "location": "Philippines",
    "delivered": "DKC",
    "summary": "DKC reviewed the Philippine power market and provided financial advisory to KEPCO E&C on a solar power project for the Philippine Department of National Defense.",
    "about": [
      "Power generation in the Philippines was restructured under the Electric Power Industry Reform Act of 2001 (EPIRA). Electricity is traded on the Wholesale Electricity Spot Market (WESM), which began commercial operations in Luzon in June 2006 and integrated the Visayas in December 2010. The market is run by the Independent Electricity Market Operator of the Philippines (IEMOP), a non-stock, non-profit corporation.",
      "The Department of Energy also contracts new renewable capacity through competitive auctions. The first round of its Green Energy Auction Program, held in June 2022, awarded nearly 2 GW of renewable projects, just under 1.5 GW of them solar PV, for delivery from 2023 to 2025. Bids had to come in at or below a reserve price set by the Energy Regulatory Commission, and the department plans to hold auctions yearly."
    ],
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
    "refs": [
      {
        "label": "IEMOP — About the Philippine Electricity Market",
        "url": "https://www.iemop.ph/the-market/"
      },
      {
        "label": "PV Tech — Philippines awards 1.5GW of solar PV in maiden renewables auction (Jun 2022)",
        "url": "https://www.pv-tech.org/philippines-awards-1-5gw-of-solar-pv-in-maiden-renewables-auction/"
      }
    ]
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
      "The Karbala solar plant is a 300 MW photovoltaic project in central Iraq, first announced as part of Iraq's first solar tender in 2019. It has been developed by a private consortium at a cost of about US$360 million, under the authority of Iraq's National Investment Commission. The first phase was inaugurated in September 2025, generating 22 MW, with output planned to rise in stages to the full 300 MW."
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
    "about": [
      "Kazakhstan has used public-private partnerships to build new hospitals under its PPP Development Program, and in October 2024 the first healthcare PPP in Kazakhstan and Central Asia closed its financing with EBRD support.",
      "In the Kyrgyz Republic, the first-ever PPP, prepared with IFC support in 2017, was in healthcare: a private operator was to open four dialysis centers in major cities, including Bishkek, covering about 75 percent of the population. At the time, only about 20 percent of people who needed dialysis could obtain it through public health centers, which faced outdated facilities and shortages of equipment and expertise."
    ],
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
    "refs": [
      {
        "label": "EBRD — EBRD supports first healthcare-sector PPP in Central Asia (Oct 2024)",
        "url": "https://www.ebrd.com/home/news-and-events/news/2024/ebrd-supports-first-healthcaresector-ppp-in-central-asia.html"
      },
      {
        "label": "IFC — Kyrgyz Republic healthcare PPP (Dec 2017)",
        "url": "https://www.ifc.org/en/stories/2010/kyrgyz-republic-healthcare-ppp"
      }
    ]
  },
  {
    "id": 10,
    "tag": "District heating",
    "headline": "District heating modernization in Bukhara and Jizzakh, Uzbekistan",
    "location": "Bukhara and Jizzakh, Uzbekistan",
    "delivered": "DKC",
    "summary": "DKC carried out the risk and sensitivity analysis of KEXIM's feasibility study for modernizing district heating with combined heat and power in Bukhara and Jizzakh, Uzbekistan.",
    "about": [
      "Uzbekistan's district heating enterprises were established in the Soviet period, and many face high heat and water losses in their networks. In January 2018 the World Bank approved a US$140 million credit for the District Heating Energy Efficiency Project, covering Andijan, Bukhara, Chirchik, Samarkand, and Tashkent, to modernize heat production, transmission, and distribution and improve service for more than 240,000 residents.",
      "The government is also turning to private investment in heat supply. In June 2026 JSC Issiqlikta'minoti and the Ministry of Economy and Finance invited expressions of interest in a Bukhara District Heating System Modernization PPP, seeking partners with experience in gas-fired combined heat and power, heat networks, building-level substations and metering, and infrastructure financing. The notice was issued to gauge market interest and does not commit the government to a procurement."
    ],
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
    "refs": [
      {
        "label": "The Times of Central Asia — World Bank to help improve heating and hot water services in Uzbekistan (Jan 2018)",
        "url": "https://timesca.com/world-bank-to-help-improve-heating-and-hot-water-services-in-uzbekistan/"
      },
      {
        "label": "Ministry of Construction and Housing and Communal Services of Uzbekistan (gov.uz) — Request for expression of interest: Bukhara District Heating System Modernization PPP (Jun 2026)",
        "url": "https://gov.uz/en/mc/news/view/172675"
      }
    ]
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
      "The Sutiakhali solar power plant in Mymensingh sits on 174 acres of char land beside the Brahmaputra River in Gauripur upazila. It is owned by HDFC SinPower, a joint venture of Bangladeshi, Malaysian, and Singaporean partners, and cost about Tk 800 crore. The project began in 2014, signed its implementation agreement in 2016 and a 20-year power purchase agreement with the Bangladesh Power Development Board in 2017, and declared commercial operation on 4 November 2020, with 73 MW installed and 50 MW net capacity.",
      "Bangladesh's generation capacity grew from less than 5,000 MW in 2009 to more than 30,000 MW in 2025, and private producers supply roughly half of installed generation. Solar makes up about 80 percent of the country's roughly 1,550 to 1,600 MW of renewable capacity, and the draft Renewable Energy Policy 2025 targets 20 percent of electricity from renewables by 2030."
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
      },
      {
        "label": "Energy Transition BD — Sutiakhali 50 MW (HDFC) Solar Power Plant",
        "url": "https://www.energytransitionbd.org/infrastructure/sutiakhali-50-mw-hdfc-solar-power-plant"
      },
      {
        "label": "US International Trade Administration — Bangladesh Country Commercial Guide: Power and Energy (Mar 2026)",
        "url": "https://trade.gov/country-commercial-guides/bangladesh-power-and-energy"
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
      "Dhaka West is a 108 MW reciprocating-engine power plant fired by heavy fuel oil, planned at Washpur, Bosila, in Keraniganj upazila near Dhaka. It was to be run by Dhaka West Power Limited, a Maisha Group subsidiary, as a private independent power producer for 15 years. The project did not meet its original commercial operation date of October 2012. Public tracking listed the project as shelved as of March 2023."
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
    "about": [
      "The Kyrgyz Republic's first-ever public-private partnership, prepared with IFC support in 2017, was in healthcare: a private operator was to open four dialysis centers in major cities, including Bishkek, covering about 75 percent of the population. At the time, only about 20 percent of people who needed dialysis could obtain it through public health centers, which faced outdated facilities and shortages of equipment and expertise.",
      "Hospital infrastructure remains a government priority. In December 2025 the President outlined plans for a medical campus in Bishkek with more than 5,000 beds, at least 25 new hospitals and clinics nationwide, perinatal centers in Osh, Talas, and Manas, and new equipment for more than 1,000 rural outpatient clinics, as part of the National Development Program through 2030."
    ],
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
    "refs": [
      {
        "label": "IFC — Kyrgyz Republic healthcare PPP (Dec 2017)",
        "url": "https://www.ifc.org/en/stories/2010/kyrgyz-republic-healthcare-ppp"
      },
      {
        "label": "Kabar — Kyrgyzstan plans large-scale upgrade of medical infrastructure (Dec 2025)",
        "url": "https://en.kabar.kg/news/kyrgyzstan-plans-large-scale-upgrade-of-medical-infrastructure/"
      }
    ]
  },
  {
    "id": 6,
    "tag": "Hospital economics (Healthcare Unit)",
    "headline": "Tarija National Cardiac Center, Bolivia",
    "location": "Tarija, Bolivia",
    "capacity": "400 beds",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit carried out the social and economic cost-benefit analysis for EDCF on a 400-bed national cardiac center in Tarija, Bolivia.",
    "about": [
      "A national cardiovascular hospital for Tarija was first announced in 2014 and planned as a fourth-level hospital on a 7-hectare site in the community of Rancho Norte, in San Lorenzo municipality. The land concession for the site was reversed at the end of 2020, leaving the Ministry of Health without a site for the project, and as of March 2022 construction had not begun."
    ],
    "role": "Social and economic cost-benefit analysis for EDCF (DKC Healthcare Unit).",
    "scope": [
      "Economic cost-benefit analysis",
      "Social benefit assessment"
    ],
    "challenge": "EDCF needed to know whether a 400-bed national cardiac center in Tarija would deliver enough social and economic benefit to justify development financing.",
    "solution": "DKC's Healthcare Unit carried out the social and economic cost-benefit analysis of the project.",
    "result": "Social and economic cost-benefit analysis delivered to EDCF (April to August 2019).",
    "relevance": "Concessional lenders fund public hospitals on their economic return to society, which has to be demonstrated, not assumed.",
    "refs": [
      {
        "label": "eju.tv — El Hospital Cardiovascular, otra promesa pendiente con Tarija (Mar 2022)",
        "url": "https://eju.tv/?p=2793553"
      }
    ]
  },
  {
    "id": 5,
    "tag": "Healthcare strategy (Healthcare Unit)",
    "headline": "Strategy for construction-based overseas healthcare packages",
    "location": "Indonesia, Kyrgyzstan, Kazakhstan, and Uzbekistan",
    "delivered": "DKC",
    "summary": "DKC's Healthcare Unit developed an overseas healthcare business strategy for KHIDI on construction-based healthcare packages in Indonesia, Kyrgyzstan, Kazakhstan, and Uzbekistan.",
    "about": [
      "Several of the countries covered have opened hospital development to private partners. Uzbekistan adopted a presidential decision on public-private partnership in healthcare in April 2019, allowing the Ministry of Health to contract private partners for 3 to 49 years to design, build, and operate clinics, with land, buildings, and equipment passing to the state at the end of the term. In May 2023 IFC agreed to structure a PPP for new multispecialty hospitals in the Samarkand, Jizzakh, and Kashkadarya regions.",
      "Kazakhstan has used public-private partnerships to build new hospitals under its PPP Development Program, and in October 2024 the first healthcare PPP in Kazakhstan and Central Asia closed its financing with EBRD support."
    ],
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
    "refs": [
      {
        "label": "Kun.uz — Shavkat Mirziyoyev signs a decree on attracting business into healthcare system (Apr 2019)",
        "url": "https://kun.uz/en/news/2019/04/17/shavkat-mirziyoyev-signs-a-decree-on-attracting-business-into-healthcare-system"
      },
      {
        "label": "IFC — IFC assists Uzbekistan to modernize healthcare services through public-private partnership (May 2023)",
        "url": "https://www.ifc.org/en/pressroom/2023/ifc-assists-uzbekistan-to-modernize-healthcare-services-through-public-private-partnership"
      },
      {
        "label": "EBRD — EBRD supports first healthcare-sector PPP in Central Asia (Oct 2024)",
        "url": "https://www.ebrd.com/home/news-and-events/news/2024/ebrd-supports-first-healthcaresector-ppp-in-central-asia.html"
      }
    ]
  },
  {
    "id": 4,
    "tag": "Public investment planning",
    "headline": "Prioritization guideline for public infrastructure, Thailand",
    "location": "Thailand",
    "delivered": "DKC",
    "summary": "DKC prepared a prioritization guideline for public infrastructure projects in Thailand under the Knowledge Sharing Program (KSP), for KEXIM.",
    "about": [
      "The Knowledge Sharing Program (KSP) was launched in 2004 by Korea's Ministry of Economy and Finance, which runs it with the Korea Development Institute, to share Korea's development experience through policy consultation tailored to partner countries. Infrastructure planning is a recurring theme in comparisons of Korea and Thailand: a 2014 Asian Development Bank assessment recommended that Thailand base infrastructure investment on an integrated national plan backed by sector master plans, ground projects in cost-benefit analysis, align plans with medium-term budgets, and, following Korea's example, link a national land-use plan to its infrastructure investment plan."
    ],
    "role": "Prioritization guideline for public infrastructure projects, under the Knowledge Sharing Program (KSP), for KEXIM.",
    "scope": [
      "Prioritization criteria",
      "Project appraisal framework",
      "Guideline drafting"
    ],
    "challenge": "Under the Knowledge Sharing Program, Thailand sought guidance on how to rank competing public infrastructure projects so that investment goes to those with the strongest case.",
    "solution": "DKC prepared a guideline setting out how public infrastructure projects can be assessed and prioritized.",
    "result": "Prioritization guideline delivered to KEXIM for the KSP (July to November 2018).",
    "relevance": "Owners in the public sector need a consistent basis for deciding which projects proceed first.",
    "refs": [
      {
        "label": "KDI — 2023 KSP Dissemination Conference (Sep 2023)",
        "url": "https://www.kdi.re.kr/eng/share/conferInfo?sm_no=567"
      },
      {
        "label": "ADB — A Comparative Infrastructure Development Assessment of the Republic of Korea and Kingdom of Thailand (Oct 2014)",
        "url": "https://www.adb.org/publications/comparative-infrastructure-development-assessment-kor-tha"
      }
    ]
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
      "Indonesia's Ministry of National Development Planning listed a public-private partnership for a National Cancer Center at Dharmais Hospital in Jakarta, under which a private partner would design, build, finance, and maintain the facility and transfer it at the end of the concession. The listing, last updated in July 2019, gives a capital value of about US$171 million and a 15-year concession. Separately, in August 2024 the President inaugurated a new Women and Children Cancer Care Building at Dharmais, built at a cost of Rp427 billion, with a further Rp313 billion for hospital equipment."
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
      },
      {
        "label": "Cabinet Secretariat of Indonesia — President Jokowi inaugurates new cancer care building at Dharmais Cancer Hospital (Aug 2024)",
        "url": "https://setkab.go.id/en/president-jokowi-inaugurates-new-cancer-care-building-at-dharmais-cancer-hospital/"
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
