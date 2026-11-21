"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalFootprint from "@/components/GlobalFootprint";
import { HomeHero, WhoWeAre, ServicesGrid, MarketsGrid, FeaturedProjects, ClientStrip, CareersContact } from "@/components/HomeSections";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <HomeHero />
        <WhoWeAre />
        <ServicesGrid />
        <MarketsGrid />
        <GlobalFootprint background="#f6f8fb" />
        <FeaturedProjects />
        <ClientStrip />
        <CareersContact />
      </main>
      <Footer />
    </>
  );
}
