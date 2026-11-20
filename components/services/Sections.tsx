"use client";
// Service page bodies. They carry the brochure's messages (Part C) in web-native layouts: no brochure diagrams are reused.

const F = "'Lato', sans-serif";
const SERIF = "'Libre Baskerville', Georgia, serif";
const NAVY = "#0b2545";
const TEAL = "#0e7c86";
const WRAP: React.CSSProperties = { maxWidth: 1200, margin: "0 auto", padding: "64px 24px" };
const EYEBROW: React.CSSProperties = { fontSize: 11.5, letterSpacing: 2.4, color: TEAL, fontWeight: 700, fontFamily: F, marginBottom: 12 };
const H2: React.CSSProperties = { fontSize: 30, lineHeight: "38px", fontFamily: SERIF, fontWeight: 400, color: NAVY, margin: "0 0 18px" };
const BODY: React.CSSProperties = { fontSize: 16, lineHeight: "28px", color: "#3d4752", fontFamily: F };

export function Intro({ statement, why, outcomes }: { statement: string; why: string[]; outcomes: string[] }) {
  return (
    <section>
      <div style={{ ...WRAP, paddingBottom: 40 }}>
        <p style={{ fontSize: 24, lineHeight: "36px", fontFamily: SERIF, color: NAVY, maxWidth: 940, marginBottom: 34 }}>{statement}</p>
        <div className="rg" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: 56 }}>
          <div>
            <p style={EYEBROW}>WHY IT MATTERS</p>
            {why.map((t) => <p key={t} style={{ ...BODY, marginBottom: 14 }}>{t}</p>)}
          </div>
          <div style={{ background: "#f4f7fb", borderLeft: `3px solid ${NAVY}`, padding: "22px 26px" }}>
            <p style={EYEBROW}>WHAT THE OWNER GETS</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {outcomes.map((o) => (
                <li key={o} style={{ ...BODY, fontSize: 15, lineHeight: "24px", padding: "9px 0 9px 26px", position: "relative", borderTop: "1px solid #e1e7ef" }}>
                  <span style={{ position: "absolute", left: 0, top: 9, color: TEAL, fontWeight: 700 }}>✓</span>{o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Capabilities({ title, items }: { title: string; items: { t: string; d: string }[] }) {
  return (
    <section style={{ background: "#f6f8fb" }}>
      <div style={WRAP}>
        <p style={EYEBROW}>WHAT WE DO</p>
        <h2 style={H2}>{title}</h2>
        <div className="rg" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 10 }}>
          {items.map((c, i) => (
            <div key={c.t} style={{ background: "#fff", border: "1px solid #e3e8ef", padding: "22px 22px 24px" }}>
              <p style={{ fontFamily: SERIF, fontSize: 15, color: TEAL, marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</p>
              <p style={{ fontFamily: F, fontSize: 16.5, fontWeight: 700, color: NAVY, marginBottom: 8, lineHeight: "23px" }}>{c.t}</p>
              <p style={{ fontFamily: F, fontSize: 14.5, lineHeight: "23px", color: "#55606d" }}>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps({ title, intro, steps, eyebrow = "HOW WE WORK", labels = ["DELIVERABLE", "DECISION GATE"] }: { title: string; intro?: string; steps: { t: string; does: string; out: string; gate: string }[]; eyebrow?: string; labels?: [string, string] }) {
  return (
    <section>
      <div style={WRAP}>
        <p style={EYEBROW}>{eyebrow}</p>
        <h2 style={H2}>{title}</h2>
        {intro && <p style={{ ...BODY, maxWidth: 900, marginBottom: 26 }}>{intro}</p>}
        <div className="rg" style={{ display: "grid", gridTemplateColumns: `repeat(${steps.length}, 1fr)`, borderTop: `3px solid ${NAVY}` }}>
          {steps.map((s, i) => (
            <div key={s.t} style={{ padding: "20px 18px 6px", borderLeft: i ? "1px solid #e3e8ef" : "none", position: "relative" }}>
              <span style={{ position: "absolute", top: -9, left: i ? 18 : 0, width: 15, height: 15, borderRadius: "50%", background: "#fff", border: `3px solid ${NAVY}` }} />
              <p style={{ fontFamily: F, fontSize: 11.5, letterSpacing: 1.8, color: TEAL, fontWeight: 700, margin: "6px 0 6px" }}>STEP {i + 1}</p>
              <p style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: NAVY, lineHeight: "22px", marginBottom: 12, minHeight: 44 }}>{s.t}</p>
              <p style={{ fontFamily: F, fontSize: 14, lineHeight: "22px", color: "#55606d", marginBottom: 12 }}>{s.does}</p>
              <p style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.4, color: "#8a94a0", fontWeight: 700, marginBottom: 3 }}>{labels[0]}</p>
              <p style={{ fontFamily: F, fontSize: 14, lineHeight: "21px", color: "#333", marginBottom: 12 }}>{s.out}</p>
              <p style={{ fontFamily: F, fontSize: 11, letterSpacing: 1.4, color: "#8a94a0", fontWeight: 700, marginBottom: 3 }}>{labels[1]}</p>
              <p style={{ fontFamily: F, fontSize: 14, lineHeight: "21px", color: NAVY, marginBottom: 14 }}>{s.gate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Matrix({ eyebrow, title, intro, head, rows, note }: { eyebrow: string; title: string; intro?: string; head: string[]; rows: string[][]; note?: string }) {
  return (
    <section style={{ background: "#f6f8fb" }}>
      <div style={WRAP}>
        <p style={EYEBROW}>{eyebrow}</p>
        <h2 style={H2}>{title}</h2>
        {intro && <p style={{ ...BODY, maxWidth: 900, marginBottom: 22 }}>{intro}</p>}
        <div className="rscroll"><div style={{ background: "#fff", border: "1px solid #e3e8ef", minWidth: 760 }}>
          <div style={{ display: "grid", gridTemplateColumns: `1.1fr repeat(${head.length - 1}, 1fr)`, background: NAVY }}>
            {head.map((h) => <p key={h} style={{ color: "#fff", fontFamily: F, fontSize: 11.5, letterSpacing: 1.4, fontWeight: 700, padding: "13px 16px" }}>{h.toUpperCase()}</p>)}
          </div>
          {rows.map((r, i) => (
            <div key={r[0]} style={{ display: "grid", gridTemplateColumns: `1.1fr repeat(${head.length - 1}, 1fr)`, borderTop: i ? "1px solid #edf0f4" : "none" }}>
              {r.map((c, j) => (
                <p key={j} style={{ fontFamily: j === 0 ? SERIF : F, fontSize: j === 0 ? 15 : 14, lineHeight: "22px", color: j === 0 ? NAVY : "#444", padding: "14px 16px", borderLeft: j ? "1px solid #edf0f4" : "none" }}>{c}</p>
              ))}
            </div>
          ))}
        </div></div>
        {note && <p style={{ fontFamily: F, fontSize: 13.5, color: "#6b7580", marginTop: 12 }}>{note}</p>}
      </div>
    </section>
  );
}

export function Tiers({ eyebrow, title, intro, tiers, tint }: { eyebrow: string; title: string; intro?: string; tiers: { k: string; t: string; d: string }[]; tint?: boolean }) {
  return (
    <section style={tint ? { background: "#f6f8fb" } : undefined}>
      <div style={WRAP}>
        <p style={EYEBROW}>{eyebrow}</p>
        <h2 style={H2}>{title}</h2>
        {intro && <p style={{ ...BODY, maxWidth: 900, marginBottom: 24 }}>{intro}</p>}
        <div className="rg" style={{ display: "grid", gridTemplateColumns: `repeat(${tiers.length}, 1fr)`, gap: 18 }}>
          {tiers.map((t) => (
            <div key={t.t} style={{ border: "1px solid #e3e8ef", borderTop: `3px solid ${TEAL}`, padding: "20px 22px 22px" }}>
              <p style={{ fontFamily: F, fontSize: 11.5, letterSpacing: 1.8, color: TEAL, fontWeight: 700, marginBottom: 8 }}>{t.k}</p>
              <p style={{ fontFamily: SERIF, fontSize: 18, color: NAVY, marginBottom: 10, lineHeight: "25px" }}>{t.t}</p>
              <p style={{ fontFamily: F, fontSize: 14.5, lineHeight: "23px", color: "#55606d" }}>{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────── Engineering
export function EngineeringSection() {
  return (
    <>
      <Intro
        statement="DKC manages the engineering for the owner: it sets the design basis, coordinates the packages, reviews every deliverable, and resolves the interfaces between them before they reach the EPC tender."
        why={[
          "On a coal-fired power plant with carbon capture, the capture facility draws steam, power, and cooling water from the host plant and returns a lower net output. Each of these links moves the heat balance, the cost estimate, and the tariff the project needs.",
          "Left to separate packages, these interfaces are settled late, by contractors, at the owner's cost. DKC holds them on the owner's side from the design basis onward, supported by specialist engineering firms for design and an independent owner's engineer at agreed gates.",
        ]}
        outcomes={[
          "One approved design basis and battery-limit schedule for plant and capture facility",
          "Interfaces frozen before EPC award, with their cost and performance effect priced",
          "Every deliverable reviewed and closed out against a single comment register",
          "Technical bid packages consistent with the EPC risk allocation",
        ]}
      />
      <Capabilities
        title="Owner-side engineering for power and carbon capture"
        items={[
          { t: "Design basis and configuration", d: "Site, configuration, and design basis for the plant and the boiler / CFBC; functional specifications that the design firms work to." },
          { t: "Capture technology screening", d: "Capture technologies and configurations compared against host-plant constraints, performance, cost, and supplier guarantees." },
          { t: "Host-plant integration", d: "Steam, power, cooling water, flue gas, and CO₂ battery limits defined between the power plant and the capture facility." },
          { t: "Package coordination", d: "Scopes of work for specialist consultants, an integrated engineering schedule, and interface meetings chaired on the owner's behalf." },
          { t: "EPC scope and bid evaluation", d: "The technical volume of the bid package, technical and commercial bid evaluation, and contractor design review." },
          { t: "Commissioning and performance", d: "Review of commissioning plans and performance tests against the guarantees in the EPC and supply contracts." },
        ]}
      />
      <Matrix
        eyebrow="CRITICAL INTERFACES"
        title="The links that decide net output and cost"
        intro="These are the battery limits DKC resolves between the host plant and the capture facility before the EPC award."
        head={["Interface", "What crosses it", "What it changes", "Lead disciplines"]}
        rows={[
          ["Flue gas", "Flue gas from the boiler to the capture plant", "Duct routing, fan duty, and pre-treatment scope", "Boiler; CCS process; civil"],
          ["LP steam extraction", "Steam for solvent regeneration", "Turbine output, heat balance, and net efficiency", "Boiler / turbine; CCS process"],
          ["Auxiliary power", "Electricity for capture, compression, and pumps", "Net export, switchyard and auxiliary system sizing", "Electrical"],
          ["Cooling water", "Cooling for capture and compression", "Cooling system capacity and water balance", "Civil; mechanical; environmental systems"],
          ["CO₂ delivery", "Captured CO₂ to compression, transport, and storage", "Specification, pressure, metering, and liability point", "CCS process; commercial"],
        ]}
      />
      <Tiers
        eyebrow="QUALITY REVIEW"
        title="Three levels of review before a deliverable is used"
        intro="Material review comments are tracked to resolution before a deliverable is approved for its intended use."
        tiers={[
          { k: "LEVEL 1", t: "Discipline review", d: "Third-party deliverables are reviewed by DKC's boiler / CFBC, CCS, electrical, I&C, civil, environmental, and cost leads, then checked against the interface register." },
          { k: "LEVEL 2", t: "Originator, checker, approver", d: "DKC's own documents pass a second professional's check and a director's approval; each issued model carries the cost-estimate revision it reflects." },
          { k: "LEVEL 3", t: "Independent owner's engineer", d: "At the gates the owner sets, an independent owner's engineer reviews the design and procurement and reports directly to the owner." },
        ]}
      />
      <Steps
        title="From design basis to preferred bidder"
        steps={[
          { t: "Design basis and scope", does: "Consolidate owner's requirements and site data; define battery limits and the package split.", out: "Design basis; package split", gate: "Owner approves the design basis" },
          { t: "Package coordination", does: "Draft scopes for specialist firms; run the integrated engineering schedule.", out: "Scopes of work; master schedule", gate: "Deliverables issued against the register" },
          { t: "Review and interfaces", does: "Discipline reviews; chair interface meetings; close comments.", out: "Comment register; interface schedule", gate: "All comments closed; interfaces frozen" },
          { t: "Specifications and bid packages", does: "Assemble the technical volume; align it with the EPC risk allocation.", out: "Technical bid package", gate: "Cross-checked by commercial and financial leads" },
          { t: "Bid evaluation", does: "Evaluate technical and commercial bids; prepare the execution plan.", out: "Bid evaluation report; execution plan", gate: "Preferred bidder recommended" },
        ]}
      />
    </>
  );
}

// ─────────────────────────────────────────────────────────── Commercial
export function CommercialSection() {
  return (
    <>
      <Intro
        statement="Every project agreement allocates risk, and the allocations must fit together. DKC reviews each agreement against the same technical baseline and the same financial model."
        why={[
          "A power and carbon capture project rests on a set of agreements: power purchase, EPC, equipment supply and service, fuel supply, CO₂ transport and storage, and O&M. A gap between any two of them becomes a risk that lenders will price or refuse.",
          "DKC's project director leads the review, discipline leads check the technical terms, and the financial team tests each allocation in the model, so that the agreements, the design, and the financing stay consistent.",
        ]}
        outcomes={[
          "A risk allocation matrix approved by the owner",
          "Issues ranked and assigned for each agreement before negotiation",
          "Positions and fallbacks prepared with the owner's counsel",
          "Back-to-back terms with no open gap affecting bankability",
        ]}
      />
      <Capabilities
        title="Techno-commercial advisory for project agreements"
        items={[
          { t: "Contract strategy", d: "Contract structure and package strategy matched to the project's risk profile and financing plan." },
          { t: "Risk allocation", d: "Each project risk identified and assigned to the party best able to carry it, in one matrix across all agreements." },
          { t: "Term sheet and draft review", d: "Techno-commercial review of each draft; gaps flagged against the matrix and marked up for counsel." },
          { t: "Negotiation support", d: "Negotiation positions and fallbacks; attendance at negotiations with the owner and counsel." },
          { t: "EPC and supply terms", d: "Scope completeness, performance guarantees, liquidated damages and caps, and completion tests." },
          { t: "Alignment check", d: "Final terms compared across all agreements and against the model and lender terms." },
        ]}
      />
      <Matrix
        eyebrow="REVIEW BY AGREEMENT"
        title="What we check in each agreement"
        head={["Agreement", "Technical", "Commercial", "Financial link"]}
        rows={[
          ["Power purchase / offtake", "Capacity, availability, dispatch, testing regime", "Tariff and indexation; change in law; termination", "Revenue and debt service cover"],
          ["EPC contract", "Scope completeness; performance guarantees; completion tests", "Fixed price; completion date; LDs and caps; security", "CAPEX, drawdown, contingency"],
          ["Equipment supply and service", "Guaranteed output, heat rate, degradation", "Warranty; service fees; liability caps", "Major maintenance reserve; ECA eligibility"],
          ["Fuel supply", "Fuel specification, delivery point, metering", "Volume commitment; price pass-through", "Fuel cost pass-through; working capital"],
          ["CO₂ transport and storage", "CO₂ specification, pressure, delivery point", "Capacity, availability, liability for stored CO₂", "Storage fees; carbon-related revenues"],
          ["O&M agreement", "Scope split; availability and heat-rate KPIs", "Fee structure; bonus and LDs; step-in", "OPEX; operator incentives"],
        ]}
      />
      <Steps
        title="From risk matrix to aligned agreements"
        steps={[
          { t: "Risk allocation matrix", does: "Identify project risks and assign each to the party best able to carry it.", out: "Risk allocation matrix; contract structure", gate: "Matrix approved by the owner" },
          { t: "Term sheet and draft review", does: "Techno-commercial review of each draft against the matrix.", out: "Issues list per agreement; mark-ups to counsel", gate: "Issues ranked and assigned" },
          { t: "Negotiation support", does: "Prepare positions and fallbacks; attend negotiations.", out: "Position papers; record of agreed terms", gate: "Key terms agreed" },
          { t: "Back-to-back check", does: "Compare final terms across agreements, the model, and lender terms.", out: "Alignment table; open-gap list", gate: "No open gap affecting bankability" },
        ]}
      />
    </>
  );
}

// ─────────────────────────────────────────────────────────── Financial
export function FinancialSection() {
  return (
    <>
      <Intro
        statement="The financial model is the common reference: it takes CAPEX and schedule from the technical workstream and tariff and contract terms from the commercial workstream, and carries the project to financial close."
        why={[
          "Because the model is updated whenever the design, the cost estimate, or a contract term changes, the information memorandum, the lenders' due diligence, and the finance documents all rest on the same numbers.",
          "DKC prepares the financing strategy, approaches investors, banks, export credit agencies, and international financial institutions, and coordinates lenders' due diligence through to financial close.",
        ]}
        outcomes={[
          "A base-case model and assumptions book that pass an integrity check",
          "A financing plan with sources and uses and an ECA / IFI map",
          "Lender materials prepared to the standard banks and ECAs expect",
          "A tracked path from committed terms to conditions precedent and close",
        ]}
      />
      <Capabilities
        title="Financial advisory and capital raising"
        items={[
          { t: "Financial modeling", d: "Project financial models built and maintained from the first assumptions, with sensitivities and an audit-ready structure." },
          { t: "Financing strategy", d: "Funding structures compared; debt and equity sized; ECA, IFI, and commercial bank options mapped." },
          { t: "Lender materials", d: "Information memoranda and lender presentations; outreach and Q&A with investors and lenders." },
          { t: "Due diligence coordination", d: "Lenders' technical, legal, insurance, and model advisors coordinated; data room managed." },
          { t: "Bankability review", d: "Bankability and financing structure tested for public financiers, utilities, and EPC contractors." },
          { t: "Transaction support", d: "Bid and debt advisory, financial due diligence, model audit, M&A, and restructuring." },
        ]}
      />
      <Steps
        title="Five steps to financial close"
        steps={[
          { t: "Project inputs and model", does: "Collect technical and commercial inputs; build and maintain the model.", out: "Assumptions book; base case; sensitivities", gate: "Inputs signed off; model integrity check passed" },
          { t: "Financing strategy", does: "Compare funding structures; size debt and equity.", out: "Financing plan; sources and uses; ECA / IFI map", gate: "Strategy approved by the owner" },
          { t: "Investor and lender engagement", does: "Prepare marketing materials; run outreach and Q&A.", out: "Information memorandum; lender short list", gate: "Indicative terms received" },
          { t: "Due diligence and terms", does: "Coordinate lenders' advisors; manage the data room.", out: "Due diligence tracker; negotiated term sheet", gate: "Committed term sheet / credit approval" },
          { t: "Documentation and close", does: "Support finance documents; track conditions precedent.", out: "CP checklist; final audited model", gate: "All CPs satisfied; financial close" },
        ]}
      />
    </>
  );
}

// ─────────────────────────────────────────────────────────── Development
export function DevelopmentSection() {
  return (
    <>
      <Intro
        statement="A bankable feasibility study answers one question for owners, lenders, and public financiers: can this project be built, operated, and financed on the terms assumed? DKC leads the study and is accountable for that answer."
        why={[
          "Feasibility and bankability work is the core of DKC's track record. Since 2016, most of our mandates have been feasibility studies, and most of those were commissioned by Korea's public financiers and agencies: KEXIM, Korea's export credit agency, KIND, and KEITI. These institutions use the studies to decide whether to lend to, invest in, or support a project, so the work is written for a credit decision, not for promotion.",
          "A study is bankable only when its engineering, cost estimate, schedule, market case, contract structure, and financial model agree with each other. DKC's role is to lead and integrate those workstreams on one baseline. Engineering deliverables are prepared by DKC's discipline leads and, where the scope requires, by specialist design firms working under DKC's coordination; the result is then open to review by an independent engineer acting for the owner or the lenders.",
        ]}
        outcomes={[
          "A design basis, cost estimate, and schedule that an independent engineer can test",
          "A market and offtake case with stated sources and downside cases",
          "A contract structure and risk allocation that lenders can follow",
          "A financial model and financing plan built on the same numbers",
          "A risk register and the conditions the project must meet before financing",
        ]}
      />
      <Matrix
        eyebrow="WHAT A BANKABLE STUDY CONTAINS"
        title="Each part of the study, who prepares it, and what DKC does"
        intro="A bankable feasibility study is a multi-discipline deliverable. This is how the work is divided on a power or carbon capture project."
        head={["Study component", "What lenders and financiers look for", "Prepared by", "DKC's role"]}
        rows={[
          ["Design basis and technical concept", "Proven configuration; performance and guarantees consistent with the tariff", "DKC discipline leads; specialist design firms and technology suppliers for process and equipment data", "Sets the design basis; reviews and integrates all technical inputs"],
          ["Capital and operating cost estimate", "Estimate class and contingency appropriate to the stage; EPC and O&M budget quotes", "DKC project controls and cost lead, with supplier and contractor budget quotes", "Builds and owns the estimate; reconciles it with the model"],
          ["Schedule and execution plan", "Credible path to commercial operation; long-lead items identified", "DKC construction planning and execution leads", "Prepares the schedule and execution strategy"],
          ["Market and offtake", "Creditworthy offtake; price and volume cases with downside", "DKC market and financial team", "Prepares the market and offtake analysis"],
          ["Contracts and risk allocation", "Each risk placed with the party best able to carry it", "DKC commercial team, with the owner's legal counsel", "Prepares the contract structure and risk matrix"],
          ["Financial model and financing plan", "Debt capacity, coverage ratios, and sensitivities on audited logic", "DKC financial team", "Builds the model and the financing plan"],
          ["Permitting, environmental, and legal", "A permitting path and no unpriced legal or environmental exposure", "Specialist consultants and counsel in the host country", "Scopes, coordinates, and reflects their findings in the study"],
          ["Independent review", "An engineer independent of the study team confirms its conclusions", "Independent engineer for the owner or the lenders", "Supports the review and closes its comments"],
        ]}
        note="Specialist firms and counsel are engaged for each project according to its location and technology."
      />
      <Matrix
        eyebrow="TRACK RECORD"
        title="Feasibility studies across four markets"
        head={["Market", "Examples of DKC feasibility work", "Commissioned by"]}
        rows={[
          ["Carbon capture and low-carbon fuels", "Blue ammonia with carbon capture, Alberta (lead consultant); green hydrogen and ammonia in Oman, the UAE, Australia, and Canada", "KIND, KEITI, KEXIM"],
          ["Power generation", "LNG-to-power and gas-to-power in Vietnam, Cameroon, the Philippines, and the Dominican Republic; solar and battery storage in the US, Ireland, and Australia", "KEXIM, KIND, KOGAS, KEITI"],
          ["Environmental infrastructure", "District heating modernization in Uzbekistan; medical waste-to-energy in Tashkent", "KEXIM, KEITI"],
          ["Industrial and infrastructure", "Refinery upgrade at Dumai, Indonesia; container inspection facility BOT, Sri Lanka", "KEXIM, KIND"],
        ]}
      />
    </>
  );
}
