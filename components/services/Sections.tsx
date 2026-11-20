"use client";
import { Bullets, Table, sx } from "@/components/PageHero";

export function EngineeringSection() {
  return (
    <>
      <section>
        <div style={sx.wrap}>
          <p style={sx.lead}>
            Owner-side engineering coordination and technical review for coal-fired power plants and carbon capture facilities,
            with particular emphasis on integration across critical interfaces.
          </p>
          <p style={sx.p}>
            DKC manages the engineering for the owner. It sets the design basis, coordinates the packages, reviews each deliverable,
            and resolves the interfaces between them. Power plant engineers review the boiler, balance of plant, and host-plant
            interfaces; process engineers review the capture process; and the financial team prices capture in the project model.
            Specialist engineering firms carry out design, and an independent owner&apos;s engineer reviews at agreed gates.
          </p>
          <p style={sx.label}>WHAT DKC DOES ON A COAL-FIRED POWER AND CCS PROJECT</p>
          <Table
            head={["Service", "What it covers", "Lead discipline"]}
            widths={["24%", "52%", "24%"]}
            rows={[
              ["Design basis and configuration", "Site, configuration, design basis, and cost estimate for the plant and boiler / CFBC; functional specifications", "Boiler; power plant / CCS integration; cost"],
              ["Capture technology screening", "Capture technologies and configurations against host-plant constraints, performance, cost, and supplier guarantees", "CCS process"],
              ["Host-plant integration and interfaces", "Steam, power, cooling water, and CO₂ battery limits between the plant and the capture facility", "Boiler; electrical; civil; CCS process"],
              ["EPC scope, bids, and construction", "EPC scope and bid evaluation; contractor design review; commissioning and performance tests", "All disciplines; controls and cost"],
              ["Economics of capture", "Capture cost and carbon-related revenues in the financial model, and their effect on tariff and bankability", "Financial advisory"],
            ]}
          />
          <p style={sx.label}>POWER PLANT AND CARBON CAPTURE INTERFACES</p>
          <img src="/img/brochure/interfaces.png" alt="Power plant and carbon capture interfaces" style={sx.img} />
          <p style={sx.note}>Amber links change the host plant&apos;s net output, steam balance, and cost: the interfaces DKC resolves before EPC award.</p>
          <p style={sx.label}>REVIEW LOOP FOR EVERY DELIVERABLE</p>
          <p style={sx.p}>
            Material review comments are tracked to resolution before deliverables are approved for their intended use.
            Third-party deliverables go through discipline review, and DKC&apos;s own documents through originator, checker, and
            approver. Each issued model carries the cost-estimate revision it reflects.
          </p>
          <img src="/img/brochure/review-loop.png" alt="Review loop for every deliverable" style={sx.img} />
          <p style={sx.label}>WHO DELIVERS IT</p>
          <p style={sx.p}>
            Discipline leads from KEPCO E&amp;C&apos;s thermal power engineering (boiler / CFBC, electrical, civil, cost and schedule)
            and from POSCO E&amp;C&apos;s power business (instrumentation and controls, environmental systems, OSBL integration,
            constructability), with a process lead for gas processing and CCS, under one engineering coordinator.{" "}
            <a href="/people" style={{ color: "#416ab3", fontWeight: 700 }}>Our people →</a>{" "}
            <a href="/team-experience" style={{ color: "#416ab3", fontWeight: 700 }}>Team experience →</a>
          </p>
        </div>
      </section>
    </>
  );
}

export function CommercialSection() {
  return (
    <>
      <section>
        <div style={sx.wrap}>
          <p style={sx.lead}>Every project agreement is reviewed against the same technical baseline and the same financial model.</p>
          <p style={sx.p}>
            Each project agreement allocates risk, and the allocations must fit together. DKC reviews the PPA, EPC contract, equipment
            and fuel supply, CO₂ transport and storage, and O&amp;M agreements against one risk allocation matrix. The project director
            leads the review, discipline leads check the technical terms, and the financial team tests each allocation in the model.
          </p>
          <Bullets
            items={[
              "Risk allocation matrix and contract structure",
              "Term sheet and draft review: techno-commercial review of each agreement",
              "Negotiation support: positions and fallbacks, attendance with the owner and counsel",
              "Back-to-back alignment check across all agreements, the model, and lender terms",
            ]}
          />
          <p style={sx.label}>TECHNO-COMMERCIAL REVIEW BY AGREEMENT</p>
          <Table
            head={["Agreement", "Technical checks", "Commercial checks", "Financial link"]}
            rows={[
              ["Power purchase / offtake (PPA)", "Capacity, availability, dispatch, testing regime", "Tariff and indexation; change in law; termination", "Revenue and debt service cover"],
              ["EPC contract", "Scope completeness; performance guarantees; completion tests", "Fixed price; completion date; LDs and caps; security", "CAPEX, drawdown, contingency"],
              ["Equipment supply and long-term service", "Guaranteed output, heat rate, degradation", "Warranty; service fees; liability caps", "Major maintenance reserve; ECA eligibility"],
              ["Fuel supply", "Fuel specification, delivery point, metering", "Volume commitment; price pass-through", "Fuel cost pass-through; working capital"],
              ["CO₂ transport and storage", "CO₂ specification, pressure, delivery point", "Capacity, availability, and liability for stored CO₂", "Storage fees; carbon-related revenues"],
              ["O&M agreement", "Scope split; availability and heat-rate KPIs", "Fee structure; bonus and LDs; step-in", "OPEX lines; operator incentives"],
            ]}
          />
        </div>
      </section>
    </>
  );
}

export function FinancialSection() {
  return (
    <>
      <section>
        <div style={sx.wrap}>
          <p style={sx.lead}>One financial model from the first assumptions to financial close.</p>
          <p style={sx.p}>
            The financial model is the common reference. It takes CAPEX and schedule from the technical workstream and tariff and
            contract terms from the commercial workstream. DKC prepares the financing strategy, approaches investors, banks, ECAs,
            and IFIs, and coordinates lenders&apos; due diligence through to financial close. Because the model is updated whenever
            the design, the cost estimate, or a contract term changes, the information memorandum, the lenders&apos; due diligence,
            and the finance documents all rest on the same numbers.
          </p>
          <Table
            head={["Step", "DKC role", "Key outputs"]}
            widths={["24%", "38%", "38%"]}
            rows={[
              ["1. Project inputs & financial model", "Collect technical and commercial inputs; build and maintain the model", "Assumptions book; base-case model; sensitivity cases"],
              ["2. Financing strategy", "Compare funding structures; size debt and equity", "Financing plan; sources and uses; ECA / IFI map"],
              ["3. Investor / lender engagement", "Prepare marketing materials; run outreach and Q&A", "Information memorandum; lender short list"],
              ["4. Due diligence & term negotiation", "Coordinate lenders' advisors; manage the data room", "Due diligence tracker; negotiated term sheet"],
              ["5. Documentation & financial close", "Support finance documents; track CPs to closing", "CP checklist; final audited model"],
            ]}
          />
          <p style={sx.label}>ALSO</p>
          <Bullets items={["Bid advisory and debt advisory", "Financial due diligence and financial model audit", "Capital structuring, mergers and acquisitions, and financial restructuring"]} />
        </div>
      </section>
    </>
  );
}

export function DevelopmentSection() {
  return (
    <>
      <section>
        <div style={sx.wrap}>
          <p style={sx.lead}>Feasibility studies that carry a project to an investment decision.</p>
          <p style={sx.p}>
            Most of DKC&apos;s mandates since 2016 have been feasibility studies commissioned by Korean public financiers and
            agencies (KEXIM, KIND, KEITI) and by Korean utilities and EPC contractors assessing overseas projects. Each study covers
            the market, technical, financial, and legal and tax analysis needed for an investment decision.
          </p>
          <Bullets
            items={[
              "Pre-feasibility, feasibility, and bankable feasibility studies",
              "Market, demand, and offtake analysis",
              "Economic cost-benefit and impact analysis",
              "Risk analysis and mitigation plan",
              "Project structuring, PPP structure, and partnership strategy",
            ]}
          />
          <p style={sx.p}>
            <a href="/projects" style={{ color: "#416ab3", fontWeight: 700 }}>See DKC projects →</a>
          </p>
        </div>
      </section>
    </>
  );
}
