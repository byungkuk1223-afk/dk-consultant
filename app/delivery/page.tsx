"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero, { Bullets, sx } from "@/components/PageHero";

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

      <section>
        <div style={sx.wrap}>
          <h2 style={sx.h2}>Delivery Framework: From Feasibility to Execution</h2>
          <p style={sx.lead}>DKC organizes its work by project stage; each stage closes with a decision that the owner takes.</p>
          <p style={sx.p}>
            The framework follows the stages of a large power or environmental project, and shows what the owner, DKC, an independent
            owner&apos;s engineer, and the EPC or EPCM contractors do at each: the owner takes the decision that closes each stage,
            DKC coordinates and advises on the owner&apos;s side, the owner&apos;s engineer reviews independently, and the contractors
            execute.
          </p>
          <p style={sx.label}>WHO DOES WHAT AT EACH STAGE</p>
          <img src="/img/brochure/stages.png" alt="Who does what at each project stage" style={sx.img} />
          <p style={sx.note}>
            BFS = bankable feasibility study; FEL = front-end loading; NTP / LNTP = (limited) notice to proceed; CP = condition
            precedent; COD = commercial operation date.
          </p>
        </div>
      </section>

      <section style={{ background: "#f8f9fb" }}>
        <div style={sx.wrap}>
          <h2 style={sx.h2}>Engineering Management &amp; Quality Review</h2>
          <p style={sx.lead}>
            DKC coordinates engineering development, design reviews, and interface management on behalf of the owner, supported by
            specialist engineering firms and independent technical review where required.
          </p>
          <Bullets
            items={[
              "Design basis and scope definition: owner's requirements, site data, battery limits, and package split",
              "Consultant and package coordination: scopes of work for specialist consultants and an integrated engineering schedule",
              "Technical review and interface resolution: discipline reviews (boiler, CCS, electrical, civil, cost) and interface meetings",
              "Specifications and bid packages: technical volume of the bid package, checked against EPC risk allocation",
              "Bid evaluation and execution planning: technical and commercial bid evaluation and the execution plan",
            ]}
          />
          <p style={sx.label}>REVIEW LOOP FOR EVERY DELIVERABLE</p>
          <img src="/img/brochure/review-loop.png" alt="Review loop for every deliverable" style={sx.img} />
        </div>
      </section>

      <section>
        <div style={sx.wrap}>
          <h2 style={sx.h2}>Delivery Organization &amp; Reporting</h2>
          <p style={sx.lead}>One DKC project director reports to the owner; issues are resolved at the lowest level that can close them.</p>
          <Bullets
            items={[
              "Project director: single point of accountability to the owner; commercial and financing lead",
              "Technical and engineering management, led by the engineering coordinator: power plant and CCS integration, boiler / CFBC, CCS process, electrical, I&C, civil, OSBL integration, environmental systems, project controls and cost, constructability",
              "Commercial and contract advisory, and financial advisory and capital raising, led by the project director with the commercial and financial PMO",
              "Interfaces: independent owner's engineer (reports directly to the owner); technology suppliers and EPC / EPCM contractors; legal, tax, and insurance advisors; lenders and their advisors",
            ]}
          />
          <p style={sx.label}>REPORTING AND ISSUE ESCALATION</p>
          <img src="/img/brochure/escalation.png" alt="Reporting and issue escalation" style={sx.img} />
          <p style={sx.note}>
            Weekly coordination inside DKC; monthly progress report to the owner; stage review with the owner&apos;s steering committee
            at each decision.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
