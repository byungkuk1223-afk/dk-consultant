"use client";
import PageHero from "@/components/PageHero";
import { IMG } from "@/data/images";

// About-section pages use the same page hero as the rest of the site (no sub-tab bar; the ABOUT menu links the pages).
const HEADS = {
  about: { title: "Who We Are", subtitle: "A project development advisor working on the owner's side" },
  people: { title: "Our People", subtitle: "Leaders, discipline engineers, and financial advisors in one team" },
  ppp: { title: "About DK Consultants", subtitle: "A project development advisor working on the owner's side" },
};

export default function AboutHero({ active }: { active: "about" | "ppp" | "people" }) {
  const h = HEADS[active];
  return <PageHero title={h.title} subtitle={h.subtitle} bg={active === "people" ? IMG.people : IMG.about} />;
}
