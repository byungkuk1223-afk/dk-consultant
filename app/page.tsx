"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HomeHero, KeyFigures, WhoWeAre, ServicesGrid, MarketsGrid, FeaturedProjects, DeliveryBand, ClientStrip, CareersContact } from "@/components/HomeSections";

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
        <KeyFigures />
        <WhoWeAre />
        <ServicesGrid />
        <MarketsGrid />
        <FeaturedProjects />
        <DeliveryBand />
        <ClientStrip />
        <CareersContact />
      </main>
      <Footer />
    </>
  );
}
