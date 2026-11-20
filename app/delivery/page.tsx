"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Intro, Matrix, Steps, Tiers } from "@/components/services/Sections";

// How DKC delivers: the brochure's Part C messages (stages, organization, reporting, quality) in web-native layouts.
export default function DeliveryPage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <PageHero
        title="How We Deliver"
        subtitle="One project director, one baseline, and a review discipline that every deliverable passes before it reaches the owner."
        bg="/img/power_plant.jpg"
      />

      <Intro
        statement="DKC organizes its work by project stage. Each stage closes with a decision that the owner takes, and every deliverable that supports it has passed DKC's review."
        why={[
          "A large power or environmental project involves the owner, an advisor on the owner's side, an independent owner's engineer, contractors, and lenders, each with a different job at each stage. Projects slip when those roles blur, or when a decision is taken before the work behind it is complete.",
          "DKC keeps the roles explicit: the owner decides, DKC coordinates and advises on the owner's side, the owner's engineer reviews independently, and the contractors execute.",
        ]}
        outcomes={[
          "A single point of accountability to the owner",
          "One baseline for design, cost, contracts, and the financial model",
          "Decisions taken at defined gates, with the evidence behind them",
          "Issues resolved at the lowest level that can close them",
        ]}
      />

      <Matrix
        eyebrow="ROLES BY PROJECT STAGE"
        title="Who does what, from feasibility to commercial operation"
        intro="The owner's decision closes each stage. The owner's engineer is appointed once the design basis is in development and reviews independently from then on."
        head={["Party", "Feasibility / BFS", "FEL3 / pre-NTP", "LNTP / procurement", "Financial close", "Execution to COD"]}
        rows={[
          ["Owner — decides and approves", "Approves feasibility and BFS basis", "Approves design basis; releases EPC tender", "Awards EPC; authorizes long-lead procurement", "Signs agreements; closes financing", "Approves changes; accepts the plant"],
          ["DKC — integrated advisor", "Design and cost review; functional specifications; base-case model", "Design firm management; owner's requirements; tender packages", "Bid evaluation; EPC negotiation support; model updated with bids", "PPA / EPC terms; CP checklist; final model; lender coordination", "Submittal review; cost, schedule, and change control; punch list"],
          ["Independent owner's engineer", "—", "Reviews BFS and design basis", "Independent review of design and procurement", "Technical due diligence for lenders", "Independent oversight of construction"],
          ["EPC / EPCM contractors", "—", "Bids against tender packages", "Critical engineering; long-lead orders", "Contract and price input", "Detailed design, construction, commissioning"],
        ]}
        note="BFS = bankable feasibility study; FEL = front-end loading; NTP / LNTP = (limited) notice to proceed; CP = condition precedent; COD = commercial operation date."
      />

      <Tiers
        eyebrow="DELIVERY ORGANIZATION"
        title="One project director, three workstreams"
        intro="DKC's project director is the owner's single point of accountability and leads the commercial and financing work. An engineering coordinator leads the technical workstream; a commercial and financial PMO supports documentation, reporting, and quality."
        tiers={[
          { k: "WORKSTREAM 1", t: "Technical & engineering management", d: "Power plant and CCS integration; boiler / CFBC; CCS process; electrical, I&C, and civil; OSBL integration and environmental systems; project controls and cost; constructability. Interface with technology suppliers and EPC / EPCM contractors." },
          { k: "WORKSTREAM 2", t: "Commercial & contract advisory", d: "Contract strategy, risk allocation, and alignment of the project agreements, led by the project director. Interface with the owner's legal, tax, and insurance advisors." },
          { k: "WORKSTREAM 3", t: "Financial advisory & capital raising", d: "Financing strategy, financial analysis, and lender engagement, led by the project director. Interface with lenders and their advisors." },
        ]}
      />

      <Tiers
        eyebrow="REPORTING RHYTHM"
        tint
        title="A fixed rhythm the owner can plan around"
        tiers={[
          { k: "WEEKLY", t: "Coordination inside DKC", d: "Workstream leads review progress, the interface register, and open issues against the integrated schedule." },
          { k: "MONTHLY", t: "Progress report to the owner", d: "Progress, cost and schedule status, key risks, and recommendations; instructions and approvals recorded in return." },
          { k: "AT EACH STAGE", t: "Steering committee review", d: "The owner's steering committee takes the stage decision on the evidence DKC has assembled, with funder reporting where required." },
        ]}
      />

      <Steps
        eyebrow="ISSUE ESCALATION"
        title="Issues are resolved at the lowest level that can close them"
        labels={["WHO RESOLVES", "TIME LIMIT"]}
        steps={[
          { t: "Raise and log", does: "Every issue is logged in a single register with an owner and a due date.", out: "Issue owner", gate: "Logged on the day it is raised" },
          { t: "Resolve in the workstream", does: "If the issue sits within one workstream and the current baseline, the workstream lead closes it.", out: "Workstream lead", gate: "5 working days" },
          { t: "Escalate to the project director", does: "If it crosses workstreams or the baseline, the DKC project director resolves it.", out: "DKC project director", gate: "10 working days" },
          { t: "Steering committee", does: "If it changes scope, budget, risk allocation, or a stage date, the owner's steering committee decides.", out: "Owner's steering committee", gate: "Next committee or a special meeting" },
          { t: "Close-out", does: "Baseline, model, contracts, and schedule are updated; affected parties are notified; the owner's engineer is informed where scoped.", out: "DKC project director", gate: "Recorded in the decision register" },
        ]}
      />

      <Tiers
        eyebrow="QUALITY REVIEW"
        tint
        title="Three levels of review before a deliverable is used"
        intro="Material review comments are tracked to resolution before a deliverable is approved for its intended use."
        tiers={[
          { k: "LEVEL 1", t: "Discipline review", d: "Third-party deliverables are reviewed by DKC's discipline leads and checked against the interface register." },
          { k: "LEVEL 2", t: "Originator, checker, approver", d: "DKC's own documents pass a second professional's check and a director's approval; each issued model carries the cost-estimate revision it reflects." },
          { k: "LEVEL 3", t: "Independent owner's engineer", d: "At the gates the owner sets, an independent owner's engineer reviews and reports directly to the owner." },
        ]}
      />

      <section style={{ background: "#0b2545" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "44px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <p style={{ color: "#fff", fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: 22, lineHeight: "30px", maxWidth: 760 }}>
            See how this applies to each of our services.
          </p>
          <Link href="/services" style={{ background: "#fff", color: "#0b2545", padding: "13px 26px", fontSize: 12.5, letterSpacing: 1.5, fontWeight: 700, fontFamily: "'Lato', sans-serif" }}>OUR SERVICES</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
