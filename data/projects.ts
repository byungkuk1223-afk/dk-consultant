export type Region =
  | "Asia"
  | "Middle East·Africa"
  | "Europe"
  | "Oceania"
  | "Latin America"
  | "Northern America"
  | "Etc.";

export interface ProjectDetail {
  capacity?: string;
  sector?: string;
  country?: string;
  client?: string;
  time?: string;
  hasImage?: boolean;
  imgExt?: string;
  imgUrl?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  region: Region;
  detail?: ProjectDetail;
}

// ──────────────────────────────────────────────────────────────
// 프로젝트 데이터
// 새 프로젝트 추가 시 이 배열 맨 앞에 항목을 추가하세요.
// id는 현재 최댓값(69)보다 1 큰 숫자를 사용하세요.
// ──────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 69,
    title: "Green Hydrogen and Ammonia Pre-Feasibility Study in Dubai (with Synergy Korea)",
    category: "Pre-feasibility Study: Market Analysis",
    region: "Middle East·Africa",
    detail: {"sector":"Renewables","country":"UAE","client":"KEITI","time":"2023.07~2024.01"},
  },
  {
    id: 66,
    title: "Townsville BESS in Queensland, Australia",
    category: "Feasibility Study (Lead)",
    region: "Oceania",
    detail: {"sector":"Battery Energy Storage","country":"Australia","client":"KEITI","time":"2026.04~"},
  },
  {
    id: 64,
    title: "Solar PV and BESS Development in Texas, USA",
    category: "Feasibility Study",
    region: "Northern America",
    detail: {"capacity":"Solar PV approx. 300 MW with battery storage","sector":"Renewables","country":"USA","client":"KEITI","time":"2025.11~2026.06"},
  },
  {
    id: 65,
    title: "Kochkor Solar Power in Kyrgyzstan",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"300 MWp (DC)","sector":"Renewables","country":"Kyrgyzstan","client":"KEITI","time":"2025.09~2026.06"},
  },
  // ── Page 1 (63 ~ 49) ──────────────────────────────────────
  {
    id: 63,
    title: "Blue Ammonia with Carbon Capture in Alberta, Canada",
    category: "Feasibility Study (Lead Consultant)",
    region: "Northern America",
    detail: {"capacity":"1 Mt/yr ammonia with CCS","sector":"Blue Ammonia & CCS","country":"Canada","client":"KIND","time":"2025.05~2025.10","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 62,
    title: "SAF Development Project in Indonesia",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"200000t/year","sector":"Renewables","country":"Indonesia","client":"KEXIM","time":"25.03.28~","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 61,
    title: "Pharmaceutical Manufacturing Facility in Kyrgyzstan",
    category: "Business Development",
    region: "Asia",
    detail: {"sector":"Healthcare","country":"Kyrgyzstan","client":"Private","time":"25.02.28~","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 60,
    title: "Pharmaceutical Manufacturing Facility in Uzbekistan",
    category: "Business Development (BOO)",
    region: "Asia",
    detail: {"sector":"Healthcare","country":"Uzbekistan","client":"KIND","time":"25.02.05~","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 59,
    title: "Green Hydrogen Development Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
    detail: {"sector":"Renewables","country":"Australia","client":"KEITI","time":"2024.11~2025.07","hasImage":true,"imgExt":"png"},
  },
  {
    id: 58,
    title: "Jujuy Solar Power and Carbon Credit Acquisition in Argentina",
    category: "Feasibility Study: Market and Carbon Credits",
    region: "Latin America",
    detail: {"capacity":"Renewable: 210MW / Carbon Credit","sector":"Renewables","country":"Argentina","client":"KEITI","time":"2024.11~2025.06","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 57,
    title: "Green Hydrogen Ammonia Project in Dubai",
    category: "Feasibility Study",
    region: "Middle East·Africa",
    detail: {"capacity":"Electrolysis: 600MW, Renewable: 1,200MW, Green Hydrogen: 37000/year, Green Ammonia 200000t/year","sector":"Renewables","country":"UAE","client":"KEITI","time":"2024.06~2024.12","hasImage":true,"imgExt":"png"},
  },
  {
    id: 56,
    title: "Green Hydrogen Ammonia Project in Western Australia",
    category: "Feasibility Study",
    region: "Oceania",
    detail: {"capacity":"Electrolysis: 1.1GW, Renewable: 1.9 GW, Green Ammonia 500000t/year","sector":"Renewables","country":"Australia","client":"KEXIM","time":"2024.05~2025.04","hasImage":true,"imgExt":"png"},
  },
  {
    id: 55,
    title: "Tashkent Medical Waste-to-Energy Project in Uzbekistan",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"Power: 4.5 MW, Waste: 22,000 t/year","sector":"Infrastructure","country":"Uzbekistan","client":"KEITI","time":"2024.06~2024.11","hasImage":true,"imgExt":"png"},
  },
  {
    id: 54,
    title: "Queensland Green Methanol Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
    detail: {"capacity":"200MW","sector":"Renewables","country":"Australia","client":"KEITI","time":"2024.04~","hasImage":true,"imgExt":"png"},
  },
  {
    id: 53,
    title: "BC Green Ammonia Project in Canada",
    category: "Feasibility Study",
    region: "Northern America",
    detail: {"capacity":"Electrolysis: 255MW,  230MW, Green Hydrogen: 37,815TPA, Green Ammonia: 210,000 TPA","sector":"Renewables","country":"Canada","client":"KEXIM","time":"2023.12~2024.12","hasImage":true,"imgExt":"png"},
  },
  {
    id: 52,
    title: "Newcastle Green Ammonia Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
    detail: {"capacity":"Carbon Credit","sector":"Renewables","country":"Australia","client":"KIND","time":"2023.11~2024.05","hasImage":true,"imgExt":"png"},
  },
  {
    id: 51,
    title: "Uljin Nuclear Hydrogen Basic Plan in Korea",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"sector":"Infrastructure","country":"Korea","client":"Uljin-gun","time":"2023.08~2024.08","hasImage":true,"imgExt":"png"},
  },
  {
    id: 67,
    title: "Blue Ammonia Pre-Feasibility Study in Indonesia",
    category: "Pre-feasibility Study",
    region: "Asia",
    detail: {"sector":"Blue Ammonia & CCS","country":"Indonesia","client":"Synergy Korea, for PT Aldaberta","time":"2023.01~2023.07"},
  },
  {
    id: 50,
    title: "Dumai Refinery Project in Indonesia",
    category: "Feasibility Study: Market, Financing Structure, Legal and Tax",
    region: "Asia",
    detail: {"capacity":"Existing refinery, approx. 170,000 bpd","sector":"Petro-Chemical","country":"Indonesia","client":"KEXIM","time":"2023.05~2024.05","hasImage":true,"imgExt":"png"},
  },

  // ── Page 2 (48 ~ 34) ──────────────────────────────────────
  {
    id: 48,
    title: "Hai Lang FS Report Review in Vietnam",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"sector":"Power","country":"Vietnam","client":"KEPCO E&C","time":"2023.03~2023.07","hasImage":true,"imgExt":"png"},
  },
  {
    id: 47,
    title: "Financial Advisory Service in Korea",
    category: "Financial Advisory",
    region: "Asia",
    detail: {"sector":"Infrastructure","country":"Korea","client":"KIND","time":"2023.03~2023.07"},
  },
  {
    id: 46,
    title: "BESS Implementation Project in Ireland",
    category: "Feasibility Study",
    region: "Europe",
    detail: {"capacity":"BESS: 63.2MWh, Synchronous Condenser: 4,000mws","sector":"Renewables","country":"Ireland","client":"KEITI","time":"2023.05~2023.11","hasImage":true,"imgExt":"png"},
  },
  {
    id: 45,
    title: "Renewable Energy Complex Development Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
    detail: {"capacity":"Electrolysis: 667MW, Renewable: 900MW, Green Hydrogen: 28000t/year, Green Ammonia: 150000t/year","sector":"Renewables","country":"Australia","client":"KEITI","time":"2022.05~2022.12","hasImage":true,"imgExt":"png"},
  },
  {
    id: 68,
    title: "Yen Binh Waste-to-Energy in Vietnam",
    category: "Business Structure, Tariff Structure, and Financial Advisory (as Synergy Korea)",
    region: "Asia",
    detail: {"sector":"Waste-to-Energy","country":"Vietnam","client":"Samsung E&A","time":"2022.05~2022.07"},
  },
  {
    id: 44,
    title: "Customs Container Inspection Facility Project in Sri Lanka",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"sector":"Infrastructure","country":"Sri Lanka","client":"KIND","time":"2022.04~2022.11","hasImage":true,"imgExt":"png"},
  },
  {
    id: 42,
    title: "Sulawesi 30MW Small Hydropower Project in Indonesia",
    category: "Financial, Tax, and Legal Review",
    region: "Asia",
    detail: {"capacity":"30MW","sector":"Renewables","country":"Indonesia","client":"Dohwa Engineering","time":"2021.12~2022.04","hasImage":true,"imgExt":"png"},
  },
  {
    id: 41,
    title: "Alfonso el Sabio Solar PV in Spain",
    category: "Feasibility Study",
    region: "Europe",
    detail: {"capacity":"600MW","sector":"Renewables","country":"Spain","client":"KEITI","time":"2022.04~2022.10","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 40,
    title: "Battambang II Hydro Power Project in Cambodia",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"30MW","sector":"Renewables","country":"Cambodia","client":"KIND","time":"2022.08~2023.01","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 39,
    title: "Duqm Green Ammonia Project in Oman",
    category: "Feasibility Study",
    region: "Middle East·Africa",
    detail: {"capacity":"1200 kton/yr (3.4 kton/day)","sector":"Renewables","country":"Oman","client":"KEITI","time":"2021.11~2022.07","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 37,
    title: "Phou Ngoy Mekong Hydro Power Plant in Laos",
    category: "Financial, Tax, and Legal Review",
    region: "Asia",
    detail: {"capacity":"728MW","sector":"Renewables","country":"Laos","client":"Dohwa Engineering","time":"2021.11~2022.05","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 36,
    title: "School PPP PKG III in Qatar (Synergy Korea)",
    category: "Pre-feasibility Study",
    region: "Middle East·Africa",
    detail: {"capacity":"14 Schools","sector":"Education","country":"Qatar","client":"Samil PwC","time":"2021.10~2022","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 35,
    title: "Texas Supercritical CO2 Power Plant in USA",
    category: "Transaction Advisory Services",
    region: "Northern America",
    detail: {"capacity":"± 5MW","sector":"sCO2 Power","country":"USA","client":"Hanwha Power Systems","time":"2021.10~2022.02","hasImage":true,"imgExt":"png"},
  },
  {
    id: 34,
    title: "Gas To Power Project in Dominican Republic",
    category: "Feasibility Study",
    region: "Latin America",
    detail: {"capacity":"350MW~400MW","sector":"Power","country":"Dominican Republic","client":"KOGAS","time":"2021.10~2022.01","hasImage":true,"imgExt":"png"},
  },

  // ── Page 3 (33 ~ 19) ──────────────────────────────────────
  {
    id: 33,
    title: "Gas To Power Project in Dominican Republic (Synergy Korea)",
    category: "Financial and Bid Advisory Service",
    region: "Latin America",
    detail: {"capacity":"350MW~400MW","sector":"Power","country":"Dominican Republic","client":"KOGAS","time":"2021.10~2022.01","hasImage":true,"imgExt":"png"},
  },
  {
    id: 32,
    title: "Tashkent Landfill Gas to Energy and CDM Project in Uzbekistan",
    category: "Financial Advisory Services",
    region: "Asia",
    detail: {"capacity":"16MW landfill gas power + 720 kton/yr CDM","sector":"Renewables","country":"Uzbekistan","client":"Sejin G&E","time":"2021.08~2022.04","hasImage":true,"imgExt":"png"},
  },
  {
    id: 31,
    title: "Anuradhapura Solar PV in Sri Lanka",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"100MW","sector":"Renewables","country":"Sri Lanka","client":"KIND","time":"2021.07~2021.12","hasImage":true,"imgExt":"png"},
  },
  {
    id: 30,
    title: "Mubarek CHP Modernization in Uzbekistan (Synergy Korea)",
    category: "Financial and Transaction Advisory Services",
    region: "Asia",
    detail: {"capacity":"400MW","sector":"Heat and Power","country":"Uzbekistan","client":"SK ecoplant","time":"2021.06~","hasImage":true,"imgExt":"png"},
  },
  {
    id: 29,
    title: "BESS Project in Ireland (Synergy Korea) – Financial Advisory",
    category: "Financial Advisory Services",
    region: "Europe",
    detail: {"capacity":"200MW","sector":"Battery Energy Storage","country":"Ireland","client":"Hanwha Energy","time":"2020.01~2020.11","hasImage":true,"imgExt":"png"},
  },
  {
    id: 28,
    title: "BESS Project in Ireland (Synergy Korea) – Operations Modeling",
    category: "Commercial Operations Modeling",
    region: "Europe",
    detail: {"capacity":"200MW","sector":"Battery Energy Storage","country":"Ireland","client":"Hanwha Energy","time":"2021.06~2021.09","hasImage":true,"imgExt":"png"},
  },
  {
    id: 27,
    title: "Nickel and Cobalt Smelter for PT BES in Indonesia",
    category: "Bankable Feasibility Study, Financial Advisory Services",
    region: "Asia",
    detail: {"capacity":"30,000 ton Ni/yr in NiSO4 product","sector":"Smelter","country":"Indonesia","client":"PT Angkasa Jaya Mulia","time":"2021.05~","hasImage":true,"imgExt":"png"},
  },
  {
    id: 26,
    title: "CCGT in Limbe in Cameroon",
    category: "Feasibility Study",
    region: "Middle East·Africa",
    detail: {"capacity":"350MW","sector":"Power","country":"Cameroon","client":"KIND","time":"2021.04~2021.10","hasImage":true,"imgExt":"png"},
  },
  {
    id: 25,
    title: "Long An Gas to Power in Vietnam",
    category: "Feasibility Study (with Synergy Korea): Financing and Project Development",
    region: "Asia",
    detail: {"capacity":"3,000MW (Long An I and II)","sector":"Power","country":"Vietnam","client":"KEXIM","time":"2021.02~2021.11","hasImage":true,"imgExt":"png"},
  },
  {
    id: 24,
    title: "BOT-based Gas Supply Project in Indonesia",
    category: "Feasibility Study and Financial Advisory Services",
    region: "Asia",
    detail: {"sector":"Gas","country":"Indonesia","client":"Hwangso Engineering","time":"2021","hasImage":true,"imgExt":"png"},
  },
  {
    id: 23,
    title: "Hai Lang LNG to Power in Vietnam",
    category: "Feasibility Study (with Synergy Korea): Financing Structure and Project Execution",
    region: "Asia",
    detail: {"capacity":"Phase 1: 1,500MW, Phase 2: 3,000MW","sector":"Power","country":"Vietnam","client":"KEXIM","time":"2020.12~2021.12","hasImage":true,"imgExt":"png"},
  },
  {
    id: 22,
    title: "District Cooling Project for South Saad Al Abdullah Smart City",
    category: "Feasibility Study",
    region: "Middle East·Africa",
    detail: {"capacity":"~228,500 RT (Total 6 plants)","sector":"Smart City","country":"Kuwait","client":"KEXIM","time":"2020.12~2021.08"},
  },
  {
    id: 21,
    title: "Development of Jurassic Production Facility 4&5 at North Kuwait",
    category: "Financial Advisory Services",
    region: "Middle East·Africa",
    detail: {"capacity":"50,000 bpd and 150 MMscfd","sector":"Oil and Gas","country":"Kuwait","client":"Samsung Engineering","time":"2020.12~2021.03","hasImage":true,"imgExt":"png"},
  },
  {
    id: 20,
    title: "Hydro Power Development in Upper Karnali River in Nepal",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"900MW","sector":"Renewables","country":"Nepal","client":"KEITI","time":"2020.11~2021.08","hasImage":true,"imgExt":"png"},
  },
  {
    id: 19,
    title: "Development of Wanasari Port in Indonesia",
    category: "Establishment of Basic Plan and Feasibility Study",
    region: "Asia",
    detail: {"sector":"Port","country":"Indonesia","client":"Daeyoung Engineering, Samil PwC","time":"2020.08~2021.05","hasImage":true,"imgExt":"png"},
  },

  // ── Page 4 (18 ~ 4) ───────────────────────────────────────
  {
    id: 18,
    title: "Rajasthan Bio-Medical Cluster PPP in India",
    category: "Advisory Services, Research and Analysis for Business Development",
    region: "Asia",
    detail: {"sector":"Healthcare","country":"India","client":"SCL Healthcare","time":"2020","hasImage":true,"imgExt":"png"},
  },
  {
    id: 17,
    title: "Bali Ngurah Rai Int'l Airport City-Air Terminal and LRT Development",
    category: "Financial Analysis",
    region: "Asia",
    detail: {"sector":"Infrastructure","country":"Indonesia","client":"KRTC (Korean Railroad Technical Corporation)","time":"2020","hasImage":true,"imgExt":"png"},
  },
  {
    id: 16,
    title: "IWP in UAE",
    category: "Bid Strategy and Simulation",
    region: "Middle East·Africa",
    detail: {"capacity":"200 MIFD","sector":"Water","country":"UAE","client":"Samsung Engineering","time":"2019","hasImage":true,"imgExt":"png"},
  },
  {
    id: 15,
    title: "Annual Financial Advisory",
    category: "Financial Advisory",
    region: "Etc.",
    detail: {"sector":"Power","client":"KEPCO E&C","time":"2020.06~2021.06","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 14,
    title: "Philippines Batangas Gas-to-Power",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"sector":"Power","country":"Philippines","client":"KIND","time":"2020.04~2020.12","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 13,
    title: "Philippines Ministry of Defense Solar Power",
    category: "Philippine Power Market Review, Financial Advisory Services",
    region: "Asia",
    detail: {"sector":"Power","country":"Philippines","client":"KEPCO E&C","time":"2020.01~2020.11","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 12,
    title: "Karbala Solar PV Farm in Iraq",
    category: "Financial Feasibility and Bankability Studies",
    region: "Middle East·Africa",
    detail: {"capacity":"300 MW","sector":"Power","country":"Iraq","client":"KIND","time":"2019.08~2019.12","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 11,
    title: "Bidding Strategy for Hospital PPP Project",
    category: "Bidding Strategy including Bankable Project Structuring",
    region: "Etc.",
    detail: {"sector":"Infrastructure","country":"Kyrgyzstan, Kazakhstan","client":"KHIDI","time":"2019.08.30~2019.11.29","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 10,
    title: "District Heating Modernization (CHP) in Bukhara and Jizzakh, Uzbekistan",
    category: "Feasibility Study: Risk and Sensitivity Analysis",
    region: "Asia",
    detail: {"sector":"DHP","country":"Uzbekistan","client":"KEXIM","time":"2022.03~2022.12","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 9,
    title: "Mymensingh Solar Park in Bangladesh",
    category: "M&A Valuation and Due Diligence Support",
    region: "Asia",
    detail: {"capacity":"50 MW","sector":"Power","country":"Bangladesh","client":"KEPCO E&C","time":"2019.06~2019.07","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 8,
    title: "Dhaka West IPP Diesel Power Plant in Bangladesh",
    category: "Financial Advisory Services",
    region: "Asia",
    detail: {"capacity":"108 MW","sector":"Power","country":"Bangladesh","client":"Sae-A STX Entech","time":"2019.06~2019.10","hasImage":true,"imgExt":"png"},
  },
  {
    id: 7,
    title: "Kyrgyzstan State Medical Academy Hospital Project in Bishkek",
    category: "Hospital Planning and Financing Structure",
    region: "Asia",
    detail: {"capacity":"500 Beds","sector":"Healthcare","country":"Kyrgyzstan","client":"KIND","time":"2019.04~2019.08","hasImage":true,"imgExt":"png"},
  },
  {
    id: 6,
    title: "Tarija National Cardiac Center in Bolivia",
    category: "Social/Economic Cost Benefit Analysis",
    region: "Latin America",
    detail: {"capacity":"400 Beds","sector":"Healthcare","country":"Bolivia","client":"EDCF","time":"2019.04~2019.08","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 5,
    title: "Strategy for Construction-based Healthcare Package in Overseas",
    category: "Overseas Healthcare Business Strategy",
    region: "Etc.",
    detail: {"sector":"Healthcare","country":"Indonesia, Kyrgyzstan, Kazakhstan, Uzbekistan","client":"KHIDI","time":"2018.09~2018.11","hasImage":true,"imgExt":"png"},
  },
  {
    id: 4,
    title: "KSP for Public Infrastructure in Thailand",
    category: "Prioritization Guideline for Public Infrastructure Projects",
    region: "Asia",
    detail: {"sector":"Infrastructure","country":"Thailand","client":"KEXIM","time":"2018.07~2018.11","hasImage":true,"imgExt":"jpg"},
  },

  // ── Page 5 (3 ~ 1) ────────────────────────────────────────
  {
    id: 3,
    title: "Dharmais National Cancer Center in Indonesia",
    category: "Feasibility Study including Hospital Planning and Payment Structure",
    region: "Asia",
    detail: {"capacity":"194 Beds","sector":"Healthcare","country":"Indonesia","client":"MOLIT","time":"2018.07~2018.11","hasImage":true,"imgExt":"png"},
  },
  {
    id: 1,
    title: "PCPC Aramco Cogeneration Projects",
    category: "Arbitration Advisory Services",
    region: "Middle East·Africa",
    detail: {"capacity":"876 MW","sector":"Power","country":"Saudi Arabia","client":"Samsung Engineering","time":"2017.07","hasImage":true,"imgExt":"png"},
  },
];

// ──────────────────────────────────────────────────────────────
// Markets and status for the Projects filters (same four markets as the Services page)
// ──────────────────────────────────────────────────────────────
export const MARKETS = [
  "Power Generation",
  "Carbon Capture & Low-Carbon Fuels",
  "Environmental Infrastructure",
  "Industrial & Infrastructure",
  "Healthcare",
] as const;
export type Market = (typeof MARKETS)[number];

export function marketOf(p: Project): Market {
  const t = (p.title + " " + (p.detail?.sector ?? "")).toLowerCase();
  if (/health|hospital|medical center|cardiac|cancer|pharma|bio-medical/.test(t) && !/waste/.test(t)) return "Healthcare";
  if (/hydrogen|ammonia|methanol|saf |ccs|carbon capture/.test(t)) return "Carbon Capture & Low-Carbon Fuels";
  if (/waste|landfill|district|heating|cooling|chp|dhp|water|iwp/.test(t)) return "Environmental Infrastructure";
  if (/power|solar|hydro|bess|battery|ccgt|gas to power|gas-to-power|lng|cogeneration|renewable|sco2/.test(t)) return "Power Generation";
  return "Industrial & Infrastructure";
}

/** "Ongoing" only for recent open-ended periods (e.g. "2026.04~"); older open entries are not asserted as ongoing. */
export function statusOf(p: Project): "Ongoing" | "Completed" {
  const t = p.detail?.time ?? "";
  const y = Number((t.match(/^(\d{2,4})/) ?? ["", "0"])[1]);
  const year = y < 100 ? 2000 + y : y;
  return t.trim().endsWith("~") && year >= 2025 ? "Ongoing" : "Completed";
}

/** Services a project used, read from its role description (DKC's own mandates only). */
export function servicesOf(p: Project): ("engineering" | "commercial" | "financial" | "development")[] {
  const c = p.category.toLowerCase();
  const out: ("engineering" | "commercial" | "financial" | "development")[] = [];
  if (/feasibility|study|basic plan|business development|planning|market/.test(c)) out.push("development");
  if (/financ|bankab|transaction|valuation|m&a|due diligence|bid|tariff|model/.test(c)) out.push("financial");
  if (/contract|legal|risk allocation|arbitration|structure/.test(c)) out.push("commercial");
  if (/engineering|technical review|owner/.test(c)) out.push("engineering");
  return out.length ? out : ["development"];
}
