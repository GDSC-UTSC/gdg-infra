"use client"

import Image from "next/image"
import { sponsors } from "@buildwithai/data/sponsors"

export default function SponsorCarousel() {
  // Calculate total width needed for seamless loop
  // Mobile: 170px per card, Desktop: 280px per card
  const mobileWidth = 170;
  const desktopWidth = 280;
  const totalWidthMobile = sponsors.length * mobileWidth;
  const totalWidthDesktop = sponsors.length * desktopWidth;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Sponsors
        </h2>

        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="relative">
            <style jsx>{`
              @keyframes scrollMobile {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-${totalWidthMobile}px);
                }
              }
              @keyframes scrollDesktop {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-${totalWidthDesktop}px);
                }
              }
              .scroll-container {
                animation: scrollMobile 18s linear infinite;
              }
              @media (min-width: 768px) {
                .scroll-container {
                  animation: scrollDesktop 12s linear infinite;
                }
              }
            `}</style>

            <div className="flex scroll-container">
              {/* First set of logos */}
              {sponsors.map((sponsor, index) => (
                <div
                  key={`${sponsor.name}-${index}`}
                  className="flex-shrink-0 px-3 md:px-6 flex items-center justify-center w-[170px] md:w-[280px]"
                >
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-20 md:h-32 flex items-center justify-center p-3 md:p-6 rounded-lg hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: sponsor.backgroundColor || '#1a1a2e' }}
                  >
                    <Image
                      src={`/sponsors/${sponsor.logo}`}
                      alt={`${sponsor.name} logo`}
                      width={200}
                      height={80}
                      className="object-contain max-h-12 md:max-h-20 w-auto"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </a>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {sponsors.map((sponsor, index) => (
                <div
                  key={`${sponsor.name}-duplicate-${index}`}
                  className="flex-shrink-0 px-3 md:px-6 flex items-center justify-center w-[170px] md:w-[280px]"
                >
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-20 md:h-32 flex items-center justify-center p-3 md:p-6 rounded-lg hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: sponsor.backgroundColor || '#1a1a2e' }}
                  >
                    <Image
                      src={`/sponsors/${sponsor.logo}`}
                      alt={`${sponsor.name} logo`}
                      width={200}
                      height={80}
                      className="object-contain max-h-12 md:max-h-20 w-auto"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
