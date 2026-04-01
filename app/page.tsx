"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import InquirySection from "@/components/InquirySection";
import PeopleSection from "@/components/PeopleSection";
import HistorySection from "@/components/HistorySection";
import Footer from "@/components/Footer";

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
        <HeroSection />
        <ProjectsSection />
        <InquirySection />
        <PeopleSection />
        <HistorySection />
      </main>
      <Footer />
    </>
  );
}
