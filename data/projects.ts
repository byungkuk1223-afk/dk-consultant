export type Region =
  | "Asia"
  | "Middle East·Africa"
  | "Europe"
  | "Oceania"
  | "Latin America"
  | "Northern America"
  | "Etc.";

export interface Project {
  id: number;
  title: string;
  category: string;
  region: Region;
}

// ──────────────────────────────────────────────────────────────
// 프로젝트 데이터
// 새 프로젝트 추가 시 이 배열 맨 앞에 항목을 추가하세요.
// id는 현재 최댓값(63)보다 1 큰 숫자를 사용하세요.
// ──────────────────────────────────────────────────────────────
export const projects: Project[] = [
  // ── Page 1 (63 ~ 49) ──────────────────────────────────────
  {
    id: 63,
    title: "Blue Ammonia Project in Canada",
    category: "Feasibility Study",
    region: "Northern America",
  },
  {
    id: 62,
    title: "SAF Development Project in Indonesia",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 61,
    title: "Pharmaceutical Manufacturing Facility in Kyrgyzstan",
    category: "Business Development",
    region: "Asia",
  },
  {
    id: 60,
    title: "Pharmaceutical Manufacturing Facility in Uzbekistan",
    category: "Business Development (BOO)",
    region: "Asia",
  },
  {
    id: 59,
    title: "Green Hydrogen Development Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
  },
  {
    id: 58,
    title: "Solar Power Generation and Carbon Credit Acquisition Project",
    category: "Feasibility Study",
    region: "Etc.",
  },
  {
    id: 57,
    title: "Green Hydrogen Ammonia Project in Dubai",
    category: "Feasibility Study",
    region: "Middle East·Africa",
  },
  {
    id: 56,
    title: "Green Hydrogen Ammonia Project in Western Australia",
    category: "Feasibility Study",
    region: "Oceania",
  },
  {
    id: 55,
    title: "Tashkent Medical Waste-to-Energy Project in Uzbekistan",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 54,
    title: "Queensland Green Methanol Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
  },
  {
    id: 53,
    title: "BC Green Ammonia Project in Canada",
    category: "Feasibility Study",
    region: "Northern America",
  },
  {
    id: 52,
    title: "Newcastle Green Ammonia Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
  },
  {
    id: 51,
    title: "Uljin Nuclear Hydrogen Basic Plan in Korea",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 50,
    title: "Dumai Refinery Project in Indonesia",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 49,
    title: "BESS Construction Project in Ireland",
    category: "Feasibility Study",
    region: "Europe",
  },

  // ── Page 2 (48 ~ 34) ──────────────────────────────────────
  {
    id: 48,
    title: "Hai Lang FS Report Review in Vietnam",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 47,
    title: "Financial Advisory Service in Korea",
    category: "Financial Advisory",
    region: "Asia",
  },
  {
    id: 46,
    title: "BESS Implementation Project in Ireland",
    category: "Feasibility Study",
    region: "Europe",
  },
  {
    id: 45,
    title: "Renewable Energy Complex Development Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
  },
  {
    id: 44,
    title: "Customs Container Inspection Facility Project in Sri Lanka",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 43,
    title: "School PPP PKG III in Qatar",
    category: "Pre-feasibility Study",
    region: "Middle East·Africa",
  },
  {
    id: 42,
    title: "Sulawesi 30MW Small Hydropower Project in Indonesia",
    category: "Financial Advisory Services",
    region: "Asia",
  },
  {
    id: 41,
    title: "Alfonso el Sabio Solar PV in Spain",
    category: "Feasibility Study",
    region: "Europe",
  },
  {
    id: 40,
    title: "Battambang II Hydro Power Project in Cambodia",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 39,
    title: "Duqm Green Ammonia Project in Oman",
    category: "Feasibility Study",
    region: "Middle East·Africa",
  },
  {
    id: 38,
    title: "Western Australia Green Ammonia Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
  },
  {
    id: 37,
    title: "Phou Ngoy Mekong Hydro Power Plant in Laos",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 36,
    title: "School PPP PKG III in Qatar (Synergy Korea)",
    category: "Pre-feasibility Study",
    region: "Middle East·Africa",
  },
  {
    id: 35,
    title: "Texas Supercritical CO2 Power Plant in USA",
    category: "Transaction Advisory Services",
    region: "Northern America",
  },
  {
    id: 34,
    title: "Gas To Power Project in Dominican Republic",
    category: "Feasibility Study",
    region: "Latin America",
  },

  // ── Page 3 (33 ~ 19) ──────────────────────────────────────
  {
    id: 33,
    title: "Gas To Power Project in Dominican Republic (Synergy Korea)",
    category: "Financial and Bid Advisory Service",
    region: "Latin America",
  },
  {
    id: 32,
    title: "Tashkent Landfill Gas to Energy and CDM Project in Uzbekistan",
    category: "Financial Advisory Services",
    region: "Asia",
  },
  {
    id: 31,
    title: "Anuradhapura Solar PV in Sri Lanka",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 30,
    title: "Mubarek CHP Modernization in Uzbekistan (Synergy Korea)",
    category: "Financial and Transaction Advisory Services",
    region: "Asia",
  },
  {
    id: 29,
    title: "BESS Project in Ireland (Synergy Korea) – Financial Advisory",
    category: "Financial Advisory Services",
    region: "Europe",
  },
  {
    id: 28,
    title: "BESS Project in Ireland (Synergy Korea) – Operations Modeling",
    category: "Commercial Operations Modeling",
    region: "Europe",
  },
  {
    id: 27,
    title: "Nickel and Cobalt Smelter for PT BES in Indonesia",
    category: "Bankable Feasibility Study, Financial Advisory Services",
    region: "Asia",
  },
  {
    id: 26,
    title: "CCGT in Limbe in Cameroon",
    category: "Feasibility Study",
    region: "Middle East·Africa",
  },
  {
    id: 25,
    title: "Long An Gas to Power in Vietnam",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 24,
    title: "BOT-based Gas Supply Project in Indonesia",
    category: "Feasibility Study and Financial Advisory Services",
    region: "Asia",
  },
  {
    id: 23,
    title: "Hai Lang LNG to Power in Vietnam",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 22,
    title: "District Cooling Project for South Saad Al Abdullah Smart City",
    category: "Feasibility Study",
    region: "Middle East·Africa",
  },
  {
    id: 21,
    title: "Development of Jurassic Production Facility 4&5 at North Kuwait",
    category: "Financial Advisory Services",
    region: "Middle East·Africa",
  },
  {
    id: 20,
    title: "Hydro Power Development in Upper Karnali River in Nepal",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 19,
    title: "Development of Wanasari Port in Indonesia",
    category: "Establishment of Basic Plan and Feasibility Study",
    region: "Asia",
  },

  // ── Page 4 (18 ~ 4) ───────────────────────────────────────
  {
    id: 18,
    title: "Rajasthan Bio-Medical Cluster PPP in India",
    category: "Advisory Services, Research and Analysis for Business Development",
    region: "Asia",
  },
  {
    id: 17,
    title: "Bali Ngurah Rai Int'l Airport City-Air Terminal and LRT Development",
    category: "Financial Analysis",
    region: "Asia",
  },
  {
    id: 16,
    title: "IWP in UAE",
    category: "Bid Strategy and Simulation",
    region: "Middle East·Africa",
  },
  {
    id: 15,
    title: "Annual Financial Advisory",
    category: "Financial Advisory",
    region: "Etc.",
  },
  {
    id: 14,
    title: "Philippines Batangas Gas-to-Power",
    category: "Feasibility Study",
    region: "Asia",
  },
  {
    id: 13,
    title: "Philippines Ministry of Defense Solar Power",
    category: "Philippine Power Market Review, Financial Advisory Services",
    region: "Asia",
  },
  {
    id: 12,
    title: "Karbala Solar PV Farm in Iraq",
    category: "Financial Feasibility and Bankability Studies",
    region: "Middle East·Africa",
  },
  {
    id: 11,
    title: "Bidding Strategy for Hospital PPP Project",
    category: "Bidding Strategy including Bankable Project Structuring",
    region: "Etc.",
  },
  {
    id: 10,
    title: "Modernization of District Heating Systems in Uzbekistan",
    category: "Feasibility Study, Financial Advisory",
    region: "Asia",
  },
  {
    id: 9,
    title: "Mymensingh Solar Park in Bangladesh",
    category: "M&A Valuation and Due Diligence Support",
    region: "Asia",
  },
  {
    id: 8,
    title: "Dhaka West IPP Diesel Power Plant in Bangladesh",
    category: "Financial Advisory Services",
    region: "Asia",
  },
  {
    id: 7,
    title: "Kyrgyzstan State Medical Academy Hospital Project in Bishkek",
    category: "Hospital Planning and Financing Structure",
    region: "Asia",
  },
  {
    id: 6,
    title: "Tarija National Cardiac Center in Bolivia",
    category: "Social/Economic Cost Benefit Analysis",
    region: "Latin America",
  },
  {
    id: 5,
    title: "Strategy for Construction-based Healthcare Package in Overseas",
    category: "Overseas Healthcare Business Strategy",
    region: "Etc.",
  },
  {
    id: 4,
    title: "KSP for Public Infrastructure in Thailand",
    category: "Prioritization Guideline for Public Infrastructure Projects",
    region: "Asia",
  },

  // ── Page 5 (3 ~ 1) ────────────────────────────────────────
  {
    id: 3,
    title: "Dharmais National Cancer Center in Indonesia",
    category: "Feasibility Study including Hospital Planning and Payment Structure",
    region: "Asia",
  },
  {
    id: 2,
    title: "Iran Saveh and Zahedan CCGT",
    category: "Bankability Study & Non Traditional Financing Advisory",
    region: "Middle East·Africa",
  },
  {
    id: 1,
    title: "PCPC Aramco Cogeneration Projects",
    category: "Arbitration Advisory Services",
    region: "Middle East·Africa",
  },
];
