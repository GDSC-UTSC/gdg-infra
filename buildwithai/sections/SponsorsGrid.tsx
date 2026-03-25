import Image from "next/image";
import { sponsors } from "@buildwithai/data/sponsors-tiered";

type SponsorSize = 'large' | 'medium' | 'small';

interface Sponsor {
  name: string;
  logo: string;
  url: string;
  backgroundColor: string;
  scale?: number;
}

interface SponsorCardProps {
  sponsor: Sponsor;
  size: SponsorSize;
}

function SponsorCard({ sponsor, size }: SponsorCardProps) {
  const sizeClasses = {
    large: {
      container: 'h-32 md:h-48',
      image: 'h-24 md:h-40 w-auto',
      padding: 'px-12 py-4 md:px-20 md:py-4'
    },
    medium: {
      container: 'h-20 md:h-36',
      image: 'h-12 md:h-28 w-auto',
      padding: 'px-6 py-3 md:px-14 md:py-4'
    },
    small: {
      container: 'h-16 md:h-20',
      image: 'h-8 md:h-16 w-auto min-w-[6rem] md:min-w-[10rem]',
      padding: 'px-4 py-2 md:px-6 md:py-3'
    }
  };

  const classes = sizeClasses[size];

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes.container} ${classes.padding} flex items-center justify-center rounded-full border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300`}
      style={{ backgroundColor: sponsor.backgroundColor }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={`/sponsors/${sponsor.logo}`}
          alt={sponsor.name}
          width={300}
          height={200}
          className={`${classes.image} object-contain`}
          style={{ transform: sponsor.scale ? `scale(${sponsor.scale})` : undefined }}
        />
      </div>
    </a>
  );
}

export default function SponsorsGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="text-3xl md:text-5xl font-normal text-white/90 mb-2">
            Meet the
          </div>
          <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            SPONSORS
          </div>
        </div>

        {/* Main Sponsor - Google */}
        <div className="max-w-2xl mx-auto mb-16">
          <SponsorCard sponsor={sponsors.main} size="large" />
        </div>

        {/* Secondary Sponsors - Manulife & UTSC */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {sponsors.secondary.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} size="medium" />
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-5xl font-normal text-white/90 text-center mb-12">
            Nerworkers From
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {sponsors.partners.map((partner) => (
              <SponsorCard key={partner.name} sponsor={partner} size="small" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
