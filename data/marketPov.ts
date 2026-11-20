// DKC's point of view on each market (market pages). Statistics repeat the corporate brochure (p.5) and its sources.

export interface MarketPov {
  slug: string;
  headline: string;
  context: string[];
  stats: { v: string; n: string; src: string }[];
  views: { t: string; d: string }[];
  tests: string[];
  help: string;
}

export const MARKET_POV: MarketPov[] = [
  {
    slug: "power-generation",
    headline: "Firm capacity is back on the agenda, and it has to be financed for decades.",
    context: [
      "Electricity demand is rising again, led by industry, electrification, and data centers. Grids that added variable renewables quickly now need firm, dispatchable capacity to keep the lights on, and new thermal plants are again being developed alongside solar, wind, and storage.",
      "These plants are built for thirty years or more. Their design basis, their contracts, and their financing are fixed at the start, and mistakes made then are expensive to correct later.",
    ],
    stats: [
      { v: "3.6% / yr", n: "Global electricity demand growth, 2026–2030", src: "IEA" },
      { v: "2×", n: "Data-center electricity demand by 2030", src: "IEA" },
    ],
    views: [
      { t: "Bankability starts at the design basis", d: "Configuration, unit size, fuel, and performance targets set CAPEX, heat rate, and availability, and these set the tariff and the debt a project can carry. A design basis written without the financial model in view is the most common source of late re-work in lender due diligence." },
      { t: "Firm capacity needs firm contracts", d: "A dispatchable plant earns its keep through capacity, availability, and fuel pass-through terms. The power purchase agreement, EPC contract, fuel supply, and O&M agreement have to allocate the same risks the same way; any gap between them is a risk the lenders will price." },
      { t: "Owner-side engineering is a lender issue, not only a technical one", d: "Lenders rely on the owner's control of scope, interfaces, and change. Owners who can show an approved design basis, a frozen interface schedule, and a reviewed bid package close faster and with fewer conditions." },
      { t: "Renewables and storage move the risk to the grid and the market", d: "For solar and battery storage, the questions shift from construction to curtailment, grid connection, market rules, and, in the United States, tax equity structures. These have to be priced in the model before the developer commits." },
    ],
    tests: [
      "A design basis and performance guarantees consistent with the tariff",
      "Completion risk: fixed price, completion date, liquidated damages, and security",
      "Fuel supply and price pass-through",
      "Offtaker credit and termination provisions",
      "Change in law and permitting",
    ],
    help: "DKC carries the design basis, the project agreements, and the financial model on one baseline, from feasibility to financial close.",
  },
  {
    slug: "carbon-capture",
    headline: "Carbon capture is moving into deployment. The hard questions sit at the host plant and in the revenue case.",
    context: [
      "Carbon capture is no longer only a research topic: dozens of facilities are operating and hundreds are in development, across power, industry, and low-carbon fuels such as blue ammonia. Policy support, including tax credits and carbon pricing, has moved many projects into front-end engineering and financing.",
      "What separates a financeable capture project from a study is whether the plant, the capture facility, the CO₂ chain, and the revenue case have been designed together.",
    ],
    stats: [
      { v: "77", n: "CCS facilities in operation (2025)", src: "Global CCS Institute" },
      { v: "734", n: "CCS facilities in development (2025)", src: "Global CCS Institute" },
    ],
    views: [
      { t: "Capture is a host-plant problem first", d: "A post-combustion capture plant draws steam for solvent regeneration, power for fans, pumps, and compression, and cooling water, and it returns a lower net output. Those interfaces change the heat balance and the cost of every megawatt-hour, and they must be fixed before the EPC award, not after." },
      { t: "Technology risk lives in the guarantees", d: "Capture rate, energy penalty, solvent consumption, and availability are the numbers lenders will test. Technology screening has to compare suppliers on what they will guarantee at the project's scale, not only on what they have demonstrated." },
      { t: "The revenue case rests on policy, and must survive it", d: "Tax credits, carbon prices, and low-carbon product premiums carry the economics of capture. A bankable structure shows how the project performs if a policy changes, and who carries that risk." },
      { t: "The CO₂ chain needs its own contracts", d: "Transport and storage capacity, availability, CO₂ specification, and long-term liability for stored CO₂ have to be allocated between the emitter, the pipeline, and the storage operator. These agreements are as important to lenders as the power purchase agreement." },
      { t: "Low-carbon fuels depend on the buyer's market", d: "For blue ammonia and hydrogen, the offtake often sits in another country, in markets such as Korea and Japan that are building demand for co-firing and clean power. The study has to price that offtake, the shipping, and the certification of the product's carbon intensity." },
    ],
    tests: [
      "Capture-rate and energy-penalty guarantees at the project's scale",
      "Host-plant integration: steam, power, cooling, and net output",
      "CO₂ transport and storage capacity, availability, and liability",
      "Policy-dependent revenues and their downside cases",
      "First-of-a-kind risk and the contingency carried for it",
    ],
    help: "DKC screens capture technologies against host-plant constraints, resolves the interfaces before EPC award, and prices capture and carbon-related revenues in the project model.",
  },
  {
    slug: "environmental-infrastructure",
    headline: "Environmental infrastructure is financed only when a public problem becomes a priced asset.",
    context: [
      "Cities produce more waste, need cleaner heat and cooling, and face rising pressure to cut landfill methane. Waste-to-energy plants, landfill gas projects, and district heating and cooling networks answer these problems, but they proceed only when their revenues can be financed.",
      "Their economics depend less on technology than on tariffs, feedstock, and the strength of the public counterparty.",
    ],
    stats: [
      { v: "3.4 bn t", n: "Municipal solid waste per year by 2050", src: "World Bank" },
    ],
    views: [
      { t: "Revenue is a policy decision", d: "Gate fees, power tariffs, and heat prices are set or approved by public authorities. A bankable project shows that the tariff is affordable to the city and its residents and that it adjusts for inflation and currency." },
      { t: "Feedstock is the hidden construction risk", d: "Waste quantity, composition, and calorific value decide the output of a waste-to-energy plant. Feedstock studies and put-or-pay commitments matter as much as the boiler." },
      { t: "Carbon revenues are an upside, not a base case", d: "Carbon credits, from the Clean Development Mechanism to newer crediting schemes, can improve returns, but lenders rarely size debt on them. We model them separately and test the project without them." },
      { t: "The PPP structure decides bankability", d: "Payment security, termination compensation, and government support carry more weight than any single technical choice. DKC structures these from the first study, so the project is not re-designed when lenders arrive." },
    ],
    tests: [
      "Tariff or gate-fee affordability and indexation",
      "Feedstock quantity and quality, and who carries the shortfall",
      "Credit of the public counterparty and payment security",
      "Carbon revenues treated as upside",
      "Environmental and social standards of the lenders",
    ],
    help: "DKC advises from feasibility to transaction: market and feedstock analysis, tariff and gate-fee structure, carbon credit revenues, PPP structure, and the financial model.",
  },
  {
    slug: "industrial-infrastructure",
    headline: "Large industrial projects close when market, financing, and contract structure are assessed together.",
    context: [
      "Refinery upgrades, metal processing, ports, and public infrastructure are often developed with foreign partners and export credit support. Their risks sit across commodity markets, construction, host-country regulation, and the financing structure.",
    ],
    stats: [],
    views: [
      { t: "The market case comes first", d: "Product demand, margins, and competing supply set the value of an upgrade or a new plant. A feasibility study that treats the market as an input rather than a question is easy to challenge." },
      { t: "Export credit support shapes the structure", d: "Where Korean contractors or equipment are involved, export credit and development finance can carry a large share of the debt, with their own eligibility rules. The structure has to be designed for them from the start." },
      { t: "Contracts must follow the risks", d: "Offtake, feedstock supply, EPC, and operation agreements must allocate commodity, completion, and operating risks consistently, especially when sponsors and contractors come from different countries." },
    ],
    tests: [
      "Market and margin cases, including downside",
      "Eligibility for export credit and development finance",
      "Completion and performance risk",
      "Host-country legal, tax, and permitting regime",
    ],
    help: "DKC's financial and transaction work covers market, financing structure, contract structure, legal and tax analysis, and bankability.",
  },
];

export const povFor = (slug: string) => MARKET_POV.find((m) => m.slug === slug);
