"use client";
import dynamic from "next/dynamic";
import AgendaTeaser from "@buildwithai/sections/AgendaTeaser";
import Contact from "@buildwithai/sections/Contact";
import FAQ from "@buildwithai/sections/FAQ";
import Speakers from "@buildwithai/sections/Speakers";
import Sponsors from "@buildwithai/sections/Sponsors";
import WorkshopsPreview from "@buildwithai/sections/WorkshopsPreview";
import { HeroSection } from "@buildwithai//sections/Herosection";
import { StatsSection } from "@buildwithai//sections/Statssection";
import SponsorCarousel from "@buildwithai/sections/SponsorCarousel";
import WhyNow from "@buildwithai/sections/WhyNow";

export default function Home() {
  return (
    <main className="relative min-h-screen">

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />

        {/* Content sections with space theme background */}
        <div className="relative bg-gradient-to-b from-black via-[#0a0a1f] to-black">
          <StatsSection />
          <SponsorCarousel />
          <WhyNow />
          <FAQ />
          <Contact />
        </div>
      </div>
    </main>
  );
}
