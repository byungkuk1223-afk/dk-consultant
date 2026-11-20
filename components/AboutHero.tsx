"use client";
import PageHero from "@/components/PageHero";

// About-section pages use the same page hero as the rest of the site (no sub-tab bar; the ABOUT menu links the pages).
const HEADS = {
  about: { title: "About DK Consultants", subtitle: "A project development advisor working on the owner's side" },
  people: { title: "Our People", subtitle: "Leaders, discipline engineers, and financial advisors in one team" },
  healthcare: { title: "Healthcare Unit", subtitle: "DKC's separate business unit for hospital and pharmaceutical projects" },
  ppp: { title: "About DK Consultants", subtitle: "A project development advisor working on the owner's side" },
};

export default function AboutHero({ active }: { active: "about" | "ppp" | "healthcare" | "people" }) {
  const h = HEADS[active];
  return <PageHero title={h.title} subtitle={h.subtitle} bg="/img/sf_01_bg_n.jpg" />;
}
