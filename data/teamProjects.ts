// Team experience: plants DKC team members delivered with previous employers, before joining DKC.
// "about" uses public sources only (refs); "people" and roles follow the team members' CVs.
// These are NOT DKC projects and must never be presented as DKC's own work.

export interface TeamProject {
  slug: string;
  tag: string;
  title: string;
  short: string;
  location: string;
  owner: string;
  capacity: string;
  technology?: string;
  operation: string;
  employer: string;
  img: string;
  about: string[];
  highlights: string[];
  people: { name: string; dkcRole: string; role: string }[];
  note?: string;
  refs: { label: string; url: string }[];
}

const S = (n: string) => `/img/site/${n}.jpg`;

export const TEAM_PROJECTS: TeamProject[] = [
  {
    slug: "sgc-gunsan-co2-capture",
    tag: "Carbon capture in operation",
    title: "CO₂ capture and liquefaction plant, Gunsan, Korea",
    short: "Commercial post-combustion capture at a combined heat and power plant: up to 300 t of CO₂ a day.",
    location: "Gunsan, North Jeolla Province, Korea",
    owner: "SGC Energy",
    capacity: "Up to 300 t CO₂/day (about 100,000 t/yr)",
    technology: "Post-combustion capture licensed from KEPCO (2021); liquefaction to food-grade liquid CO₂",
    operation: "Completed November 2023; liquid CO₂ supplied under a 10-year contract from January 2024",
    employer: "SGC E&C",
    img: S("proj-ccs"),
    about: [
      "SGC Energy built a carbon capture and utilization (CCU) facility at its combined heat and power plant in Gunsan to capture carbon dioxide from the plant's flue gas and liquefy it for sale. The company licensed KEPCO's capture technology in November 2021, which separates more than 90% of the CO₂ from power plant flue gas, and announced an investment of about KRW 57 billion in the facility.",
      "The plant is designed to capture up to 300 tonnes of CO₂ a day, about 100,000 tonnes a year. Before completion, SGC Energy signed a 10-year contract to supply liquid CO₂ to domestic customers from January 2024. The facility was completed in November 2023 and has since operated commercially.",
    ],
    highlights: ["Commercial-scale capture at an operating power plant", "Capture integrated with an operating host plant", "Captured CO₂ sold under a long-term offtake contract"],
    people: [{ name: "Namjin Park", dkcRole: "DKC Technical Lead, Instrumentation & Controls", role: "Project Director, at SGC E&C" }],
    note: "Also at SGC E&C: Project Director for the retrofit of SGC Energy's 250 MW coal-fired power plant.",
    refs: [
      { label: "Korea Economic Daily — SGC Energy signs 10-year contract to supply liquid CO₂ (Dec 2022)", url: "https://www.kedglobal.com/newsView/ked202212190020" },
      { label: "Asia Economy — SGC Energy invests KRW 57 billion in CCU facility (May 2022)", url: "https://www.asiae.co.kr/en/article/2022053113021122791" },
      { label: "Kuki News — SGC Energy CCU facility (Mar 2025)", url: "https://www.kukinews.com/article/view/kuk202503170020" },
    ],
  },
  {
    slug: "samcheok-green-power",
    tag: "Circulating fluidized bed (CFB)",
    title: "Samcheok Green Power Plant, Korea",
    short: "Four 550 MWe ultra-supercritical CFB boilers: the world's largest CFB plant.",
    location: "Samcheok, Gangwon Province, Korea",
    owner: "Korea Southern Power (KOSPO)",
    capacity: "2,200 MW (two units, each with two 550 MWe boilers and one 1,100 MW steam turbine)",
    technology: "Once-through ultra-supercritical CFB boilers (Amec Foster Wheeler, now Sumitomo SHI FW); 603°C main and reheat steam",
    operation: "Unit 1 December 2016; Unit 2 June 2017",
    employer: "KEPCO E&C (architect-engineer)",
    img: S("team-experience"),
    about: [
      "Samcheok Green Power is a 2,200 MW coal-fired plant owned by Korea Southern Power. Each of its two units has two 550 MWe once-through ultra-supercritical circulating fluidized bed boilers feeding a single 1,100 MW steam turbine. The boilers, contracted to Foster Wheeler in 2011, use vertical-tube Benson evaporators and produce steam at 603°C for both main and reheat.",
      "Unit 1 entered service in December 2016 and Unit 2 in June 2017. The plant fires a wide range of imported coals and is designed to co-fire up to 5% biomass; it meets its sulfur oxide limit without flue gas desulfurization. It remains the world's largest CFB plant, with a reported net efficiency of about 42% (LHV).",
    ],
    highlights: ["World's largest CFB plant", "Ultra-supercritical steam conditions on CFB boilers", "Wide fuel range with biomass co-firing"],
    people: [{ name: "Young Hoon Ha", dkcRole: "DKC Technical Lead, Boiler / CFBC", role: "Mechanical Engineering Team Leader, at KEPCO E&C" }],
    refs: [
      { label: "POWER — South Korean plant finds flexibility with advanced CFB technology", url: "https://www.powermag.com/south-korean-plant-finds-flexibility-with-advanced-cfb-technology/" },
      { label: "Hydrocarbon Processing — Foster Wheeler to supply CFB steam generators for Green Power project in Korea (Jun 2011)", url: "https://hydrocarbonprocessing.com/news/2011/06/foster-wheeler-to-supply-cfb-steam-generators-for-green-power-project-in-korea/" },
    ],
  },
  {
    slug: "samcheok-blue-power",
    tag: "Ultra-supercritical coal",
    title: "Samcheok Blue Power (POSCO Power Samcheok), Korea",
    short: "Two 1,050 MW-class ultra-supercritical coal-fired units with a 345 kV transmission line.",
    location: "Samcheok, Gangwon Province, Korea",
    owner: "Samcheok Blue Power (shareholders: NongHyup Financial Group, POSCO Holdings, Doosan Enerbility)",
    capacity: "2 × 1,050 MW-class (about 2,100 MW)",
    technology: "Ultra-supercritical pulverized coal",
    operation: "Unit 2 began operating in January 2025",
    employer: "POSCO E&C (EPC)",
    img: S("market-power"),
    about: [
      "Samcheok Blue Power is a coal-fired station of about 2,100 MW on Korea's east coast, built with two ultra-supercritical units of about 1,050 MW each. POSCO E&C and Doosan Heavy Industries (now Doosan Enerbility) invested in the project and formed the EPC consortium; the project company's shareholders are NongHyup Financial Group, POSCO Holdings, and Doosan Enerbility.",
      "Unit 1 began test operation in 2023 and Unit 2 officially began operating in January 2025. Since then, limited transmission capacity from the east coast has constrained the plant's output.",
    ],
    highlights: ["Among the last coal-fired units built in Korea", "EPC delivery including a 345 kV transmission line", "A live example of grid connection as the binding constraint"],
    people: [{ name: "Namjin Park", dkcRole: "DKC Technical Lead, Instrumentation & Controls", role: "Project Manager and Project Director, at POSCO E&C" }],
    refs: [
      { label: "POSCO E&C — Samcheok coal-fired power plant (project page)", url: "https://poscoenc.com/en/business_areas/project.aspx?brpt=167" },
      { label: "Global Energy Monitor — Samcheok Blue power station", url: "https://www.gem.wiki/Pospower_Samcheok_power_station" },
    ],
  },
  {
    slug: "angamos",
    tag: "Coal-fired EPC, Chile",
    title: "Angamos power plant, Mejillones, Chile",
    short: "520 MW coal-fired plant in the Atacama Desert, delivered early; POWER's 2012 Plant of the Year.",
    location: "Mejillones, Antofagasta Region, Chile",
    owner: "AES Gener (now AES Andes)",
    capacity: "520 MW gross (470 MW net), two units",
    technology: "Subcritical coal; seawater cooling towers; 20 MW battery energy storage",
    operation: "Unit 1 April 2011; Unit 2 October 2011",
    employer: "POSCO E&C (turnkey EPC)",
    img: S("proj-power"),
    about: [
      "Angamos is a two-unit, 520 MW gross coal-fired plant on the Pacific coast of northern Chile, about 55 km north of Antofagasta. AES Gener built it at a cost of about US$1.3 billion under a turnkey EPC contract with POSCO Engineering & Construction valued at US$870 million, with Doosan boilers and Ansaldo Energia steam turbines and generators.",
      "Construction began in August 2008. Unit 1 entered commercial service in April 2011, about two weeks early, and Unit 2 in October 2011, several weeks early, earning a schedule bonus. The plant was the first in South America to use seawater cooling towers, makes its own process water by desalination, and added a 20 MW lithium-ion battery system in 2012. POWER magazine named it its 2012 Plant of the Year.",
    ],
    highlights: ["Both units handed over ahead of schedule", "First seawater cooling towers in South America", "POWER magazine Plant of the Year 2012"],
    people: [
      { name: "Jong Kyu Han", dkcRole: "DKC Constructability & Construction Planning Lead", role: "Project Director, at POSCO E&C" },
      { name: "Won Suc Kim", dkcRole: "DKC EPC Engagement Lead", role: "Country Manager, Chile, and project lead, at POSCO E&C" },
    ],
    refs: [
      { label: "POWER — AES Gener's Angamos power plant earns POWER's highest honor (2012)", url: "https://www.powermag.com/plant-of-the-yearaes-geners-angamos-power-plant-earns-powers-highest-honor/" },
    ],
  },
  {
    slug: "cochrane",
    tag: "Coal-fired EPC, Chile",
    title: "Cochrane power plant, Mejillones, Chile",
    short: "Two-unit coal-fired plant financed in 2013 and fully commissioned in 2016, supplying mining customers.",
    location: "Mejillones, Antofagasta Region, Chile",
    owner: "Empresa Eléctrica Cochrane (AES Gener, with Mitsubishi Corporation at financing)",
    capacity: "2 × 266 MW gross (about 532 MW)",
    technology: "Subcritical coal",
    operation: "Fully commissioned in 2016",
    employer: "POSCO E&C (EPC)",
    img: S("proj-industrial"),
    about: [
      "Cochrane is a two-unit coal-fired plant next to the Angamos plant in Mejillones, northern Chile. AES Gener (60%) and Mitsubishi Corporation (40%) closed US$1.05 billion of financing for the US$1.3 billion project in March 2013. The plant delivers about 532 MW to the northern grid, and its output is contracted to mining customers.",
      "POSCO E&C delivered the plant under its contract for two 266 MW subcritical coal-fired units. Construction began in 2013 and the plant was fully commissioned in 2016.",
    ],
    highlights: ["Project-financed alongside a long-term supply contract base", "Delivered next to an operating plant by the same EPC team"],
    people: [
      { name: "Jong Kyu Han", dkcRole: "DKC Constructability & Construction Planning Lead", role: "Project Director, at POSCO E&C" },
      { name: "Won Suc Kim", dkcRole: "DKC EPC Engagement Lead", role: "Country Manager, Chile, and project lead, at POSCO E&C" },
    ],
    refs: [
      { label: "POSCO E&C — Chile Cochrane coal-fired power plant (project page)", url: "https://poscoenc.com/en/business_areas/project.aspx?brpt=168" },
      { label: "Systep — AES Gener announces financing for Cochrane power plant (2013)", url: "https://systep.cl/en/aes-gener-announces-financing-for-cochrane-power-plant/" },
      { label: "IJGlobal — Deal analysis: Cochrane", url: "https://www.ijglobal.com/articles/125323/deal-analysis-cochrane?home=1" },
    ],
  },
  {
    slug: "nueva-ventanas",
    tag: "Coal-fired EPC, Chile",
    title: "Nueva Ventanas power plant, Ventanas, Chile",
    short: "About 270 MW coal-fired unit built next to the existing Ventanas units in central Chile.",
    location: "Puchuncaví (Ventanas), Valparaíso Region, Chile",
    owner: "AES Gener (now AES Andes)",
    capacity: "About 272 MW (267 MW gross / 242 MW net reported)",
    technology: "Subcritical coal",
    operation: "In operation since 2010",
    employer: "POSCO E&C (EPC)",
    img: S("markets"),
    about: [
      "Nueva Ventanas is a coal-fired unit of about 270 MW built next to the existing Ventanas units on Chile's central coast. POSCO E&C signed the contract with AES Gener in 2006 and the unit entered operation in 2010.",
      "In December 2025 Chile's National Energy Commission used October 2030 as a reference retirement date for Nueva Ventanas and the neighboring Campiche unit in its planning models.",
    ],
    highlights: ["Brownfield construction beside operating units", "Part of a four-plant program delivered in Chile by the same team"],
    people: [
      { name: "Myong-heon Han", dkcRole: "DKC OSBL Integration & Execution Planning Lead", role: "Project Manager and Mechanical Lead Engineer, at POSCO E&C" },
      { name: "Hyoseok Seo", dkcRole: "DKC Technical Lead, Environmental Systems", role: "Environmental Lead Engineer and Construction Manager, at POSCO E&C" },
      { name: "Won Suc Kim", dkcRole: "DKC EPC Engagement Lead", role: "Country Manager, Chile, at POSCO E&C" },
    ],
    refs: [
      { label: "Industrial Info — Korea's POSCO awarded two contracts for power projects in Chile", url: "https://www.industrialinfo.com/news/article/koreas-posco-awarded-two-contracts-for-power-projects-in-chile--131279" },
      { label: "Global Energy Monitor — Ventanas power station", url: "https://www.gem.wiki/Ventanas_power_station" },
    ],
  },
  {
    slug: "campiche",
    tag: "Coal-fired EPC, Chile",
    title: "Campiche power plant, Ventanas, Chile",
    short: "About 270 MW coal-fired unit with a Doosan boiler and Ansaldo steam turbine, completed in 2013.",
    location: "Puchuncaví (Ventanas), Valparaíso Region, Chile",
    owner: "AES Gener (now AES Andes)",
    capacity: "About 272 MW",
    technology: "Subcritical coal; Doosan boiler, Ansaldo steam turbine generator",
    operation: "In operation since 2013",
    employer: "POSCO E&C (EPC)",
    img: S("case-50"),
    about: [
      "Campiche (Ventanas IV) is a coal-fired unit of about 270 MW at the Ventanas complex on Chile's central coast, built by POSCO E&C for AES Gener under an EPC contract reported at US$440 million. It uses a Doosan boiler and an Ansaldo steam turbine generator and entered operation in 2013.",
      "Chile's National Energy Commission has used October 2030 as a reference retirement date for Campiche and Nueva Ventanas in its planning models.",
    ],
    highlights: ["Second unit delivered at the same site by the same team"],
    people: [
      { name: "Hyoseok Seo", dkcRole: "DKC Technical Lead, Environmental Systems", role: "Environmental Lead Engineer and Construction Manager, at POSCO E&C" },
      { name: "Won Suc Kim", dkcRole: "DKC EPC Engagement Lead", role: "Country Manager, Chile, at POSCO E&C" },
    ],
    refs: [
      { label: "POWER — Campiche coal project (POSCO EPC)", url: "https://www.powermag.com/coal/4816.html" },
      { label: "Global Energy Monitor — Ventanas power station (Campiche unit)", url: "https://www.gem.wiki/Campiche_power_station" },
    ],
  },
  {
    slug: "korea-500mw-coal",
    tag: "500 MW coal-fired units",
    title: "Korea standard coal-fired units: Dangjin, Taean, and Hadong",
    short: "Design and commissioning of KEPCO's standardized 500 MW-class supercritical coal units.",
    location: "Dangjin and Taean (South Chungcheong) and Hadong (South Gyeongsang), Korea",
    owner: "KEPCO generation subsidiaries (Korea East-West Power, Korea Western Power, Korea Southern Power)",
    capacity: "500 MW-class units: Dangjin 8, Taean 8, Hadong 6 (later units added)",
    technology: "Korea Standard Coal Power Plant: once-through supercritical boilers with variable-pressure operation",
    operation: "Hadong units 1–6, 1997–2001; Dangjin units 1–4, 2000–2001; later units through the 2000s",
    employer: "KEPCO E&C (formerly KOPEC), architect-engineer",
    img: S("market-industrial"),
    about: [
      "In the 1990s KEPCO standardized its coal-fired fleet on a once-through supercritical unit design with variable-pressure operation, built in series at Hadong, Dangjin, Taean, and other sites. KEPCO's engineering subsidiary KOPEC, now KEPCO E&C, was the prime architect-engineer, and Hanjung, now Doosan Enerbility, was the lead equipment supplier.",
      "At Hadong, construction began in 1993; units 1 and 2 entered commercial operation in 1997 and the six-unit, 3,000 MW plant was completed in November 2001. At Dangjin, the first units entered service in 2000 and 2001.",
    ],
    highlights: ["A standardized design built in series across several sites", "Design through commissioning on the owner's architect-engineer team"],
    people: [
      { name: "Young Jong Youn", dkcRole: "DKC Technical Lead, Civil", role: "Civil design and commissioning: Dangjin 8 × 500 MW, Taean 8 × 500 MW, Hadong 6 × 500 MW, at KEPCO E&C" },
      { name: "Ho Gi Kim", dkcRole: "DKC Technical Lead, Electrical", role: "Responsible electrical engineer, Taean; electrical group supervisor, Boryong, Dangjin, West Incheon, and Ulsan, at KEPCO E&C" },
      { name: "Young Hoon Ha", dkcRole: "DKC Technical Lead, Boiler / CFBC", role: "Engineer, Hadong Units 7 & 8 (ministerial commendation, 2009), at KEPCO E&C" },
    ],
    refs: [
      { label: "Power Technology — Hadong coal-fired power plant", url: "https://www.power-technology.com/projects/hadong/" },
      { label: "Power Technology — Dangjin coal-fired power plant", url: "https://www.power-technology.com/projects/dangjin/" },
    ],
  },
  {
    slug: "gas-separation",
    tag: "Gas processing",
    title: "Gas separation and gas processing plants",
    short: "Process engineering for PTT's gas separation plants in Thailand and other gas processing facilities.",
    location: "Rayong (Map Ta Phut), Thailand, and other locations",
    owner: "PTT and other owners",
    capacity: "PTT GSP-6: 800 MMscfd",
    technology: "Gas separation (ethane, propane, and heavier components); LNG regasification",
    operation: "PTT GSP-6 completed in 2010",
    employer: "Samsung Engineering (now Samsung E&A)",
    img: S("market-ccs"),
    about: [
      "PTT's sixth gas separation plant (GSP-6) at the Map Ta Phut complex in Rayong, Thailand, recovers ethane, propane, and other components from natural gas at a capacity of 800 million standard cubic feet a day. PTT awarded the EPC contract to Samsung Engineering, with Foster Wheeler as front-end engineering and project management consultant.",
      "The plant was completed in 2010 and received the Project Management Institute's 2011 Distinguished Project Award. It was then the largest gas separation plant in the world by number of production-through-fractionation units.",
    ],
    highlights: ["Large-scale gas separation, the process base for CO₂ capture and compression", "Lead process engineering on EPC delivery"],
    people: [{ name: "Kyong Jin Mun", dkcRole: "DKC Executive Vice President · Technical Lead, CCS", role: "Lead Process Engineer, at Samsung Engineering: PTT gas separation and ethane separation plants; Petronas / PTT Songkran gas separation; VOGC gas processing; LNG regasification" }],
    refs: [
      { label: "Oil & Gas Journal — PTT lets contract for sixth gas-separation plant", url: "https://www.ogj.com/refining-processing/article/17281228/ptt-lets-contract-for-sixth-gas-separation-plant" },
      { label: "PMI — Samsung Engineering uses PMBOK Guide to implement integration methods (GSP-6 case study)", url: "https://www.pmi.org/business-solutions/case-studies/samsung-engineering-co-ltd-uses-pmbok-guide-to-implement-integration-methods" },
    ],
  },
];

export const teamProjectBySlug = (s: string) => TEAM_PROJECTS.find((p) => p.slug === s);
