// Clients page: organizations DKC has advised, grouped by client type.
// `match` lists the client names used in data/projects.ts, so each card shows the mandates on record.
// Organizations without a mandate in data/projects.ts are listed in OTHER_CLIENTS.

export interface Client {
  name: string;
  logo?: string;
  about: string;
  match?: string[];
}

export interface ClientGroup {
  key: string;
  title: string;
  text: string;
  clients: Client[];
}

const L = (k: string) => `/img/img_04_02_${k}.jpg`;

export const CLIENT_GROUPS: ClientGroup[] = [
  {
    key: "public",
    title: "Public financiers and government agencies",
    text: "Korea's export credit agency, overseas infrastructure investor, and environmental and health agencies commission feasibility studies before they finance or support Korean participation in overseas projects. They need an independent view of the market, the technical concept, the financial case, and the legal and tax position, delivered within fixed public-sector timetables.",
    clients: [
      { name: "Korea Environmental Industry & Technology Institute (KEITI)", logo: L("1_1"), about: "Agency under Korea's Ministry of Environment that supports overseas environmental and energy projects, including feasibility studies.", match: ["KEITI"] },
      { name: "Korea Overseas Infrastructure & Urban Development Corporation (KIND)", logo: L("1_3"), about: "Government-owned corporation that invests in and supports overseas infrastructure and urban development projects with Korean participation.", match: ["KIND"] },
      { name: "The Export-Import Bank of Korea (KEXIM)", logo: L("1_2"), about: "Korea's official export credit agency, which also administers the Economic Development Cooperation Fund (EDCF).", match: ["KEXIM", "EDCF"] },
      { name: "Ministry of Land, Infrastructure and Transport (MOLIT)", logo: L("1_4"), about: "Korean government ministry responsible for land, infrastructure, and transport, including overseas infrastructure cooperation.", match: ["MOLIT"] },
      { name: "Korea Health Industry Development Institute (KHIDI)", logo: L("4_1"), about: "Agency under Korea's Ministry of Health and Welfare that supports the overseas expansion of Korea's health industry.", match: ["KHIDI"] },
      { name: "Uljin County", about: "Local government in North Gyeongsang Province, Korea.", match: ["Uljin-gun"] },
    ],
  },
  {
    key: "energy",
    title: "Energy companies and utilities",
    text: "Utilities, gas companies, and independent power developers ask DKC to test whether a project is worth joining and how it should be financed: feasibility studies, financial models, commercial operations models, and financial and transaction advisory for power, gas, storage, and heat projects.",
    clients: [
      { name: "Korea Gas Corporation (KOGAS)", logo: L("2_4"), about: "Korea's state-owned natural gas company, active in LNG import, supply, and overseas gas and power projects.", match: ["KOGAS"] },
      { name: "Hanwha Energy", logo: L("3_1"), about: "Energy company of the Hanwha Group developing renewable energy, storage, and power projects in Korea and overseas.", match: ["Hanwha Energy"] },
      { name: "Sejin G&E", about: "Korean environmental energy company.", match: ["Sejin G&E"] },
    ],
  },
  {
    key: "epc",
    title: "EPC contractors and engineering firms",
    text: "Korean EPC contractors, equipment suppliers, and engineering firms bring DKC in when a bid, an investment, or a partner's study needs a financial, commercial, or bankability view: bid strategy and simulation, financial and transaction advisory, reviews of feasibility studies, and financial, tax, and legal reviews.",
    clients: [
      { name: "KEPCO Engineering & Construction (KEPCO E&C)", logo: L("2_3"), about: "Korea's power plant engineering company, part of the KEPCO group.", match: ["KEPCO E&C"] },
      { name: "Samsung E&A (formerly Samsung Engineering)", logo: L("3_5"), about: "Korean engineering, procurement, and construction company for energy, chemical, and environmental facilities.", match: ["Samsung Engineering", "Samsung E&A"] },
      { name: "SK ecoplant", logo: L("3_6"), about: "Engineering and environmental infrastructure company of the SK Group.", match: ["SK ecoplant"] },
      { name: "Hanwha Power Systems", logo: L("3_2"), about: "Hanwha Group company supplying compressors and power systems, including supercritical CO₂ power technology.", match: ["Hanwha Power Systems"] },
      { name: "Sae-A STX Entech", logo: L("3_4"), about: "Korean plant engineering and construction company.", match: ["Sae-A STX Entech"] },
      { name: "Korea Railroad Technical Corporation (KRTC)", logo: L("2_6"), about: "Korean railway engineering and consulting company.", match: ["KRTC (Korean Railroad Technical Corporation)"] },
      { name: "Dohwa Engineering", about: "Korean engineering consultancy for water, energy, and infrastructure.", match: ["Dohwa Engineering"] },
      { name: "Samil PwC", about: "Korean member firm of the PwC network.", match: ["Samil PwC", "Daeyoung Engineering, Samil PwC"] },
      { name: "Daeyoung Engineering", about: "Korean engineering consultancy.", match: ["Daeyoung Engineering, Samil PwC"] },
    ],
  },
  {
    key: "other",
    title: "Project sponsors, healthcare, and other clients",
    text: "Private sponsors in Indonesia and Korean healthcare organizations have engaged DKC for bankable feasibility studies, financial advisory, hospital planning and financing structures, and overseas business development.",
    clients: [
      { name: "PT Angkasa Jaya Mulia", about: "Indonesian sponsor of a nickel and cobalt processing project.", match: ["PT Angkasa Jaya Mulia"] },
      { name: "PT Aldaberta", about: "Indonesian project sponsor (engagement through Synergy Korea).", match: ["Synergy Korea, for PT Aldaberta"] },
      { name: "SCL Healthcare", logo: L("4_2"), about: "Korean healthcare group.", match: ["SCL Healthcare"] },
    ],
  },
];

// Organizations DKC has worked with outside the mandates listed on this site (shown as a logo section).
export const OTHER_CLIENTS: Client[] = [
  { name: "Korea Electric Power Corporation (KEPCO)", logo: L("2_2"), about: "Korea's state-owned electric utility." },
  { name: "Korea District Heating Corporation", logo: L("2_1"), about: "Korea's largest district heating and cooling provider." },
  { name: "Korea Western Power", logo: L("2_5"), about: "Power generation subsidiary of KEPCO." },
  { name: "POSCO E&C", logo: L("3_3"), about: "Engineering and construction company of the POSCO Group." },
  { name: "Batulicin Enam Sembilan", logo: L("2_7"), about: "Indonesian industrial group." },
  { name: "Yonsei University Health System (Severance)", logo: L("4_3"), about: "Korean university hospital system." },
];
