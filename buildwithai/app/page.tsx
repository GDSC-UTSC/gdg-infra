"use client";
import dynamic from "next/dynamic";
import FAQ from "@buildwithai/sections/FAQ";
import { HeroSection } from "@buildwithai//sections/Herosection";
import { StatsSection } from "@buildwithai//sections/Statssection";
import SponsorsGrid from "@buildwithai/sections/SponsorsGrid";
import WhyNow from "@buildwithai/sections/WhyNow";
import FinalCTA from "@buildwithai/sections/FinalCTA";
export default function Home() {
  return (
    <main className="relative min-h-screen">

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />

        {/* Content sections with space theme background */}
        <div className="relative bg-gradient-to-b from-black via-[#0a0a1f] to-black">
          <StatsSection />
          <SponsorsGrid />
          <WhyNow />
          <FAQ />
          <FinalCTA />
        </div>
      </div>
    </main>
  );
}
