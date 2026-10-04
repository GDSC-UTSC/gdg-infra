"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import HeaderClient from "@/components/layout/HeaderClient";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient-light">
      {/* Header inside hero section */}

      {/* Grid pattern background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-20",
          "[background-image:linear-gradient(to_right,#E8EAED_1px,transparent_1px),linear-gradient(to_bottom,#E8EAED_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#4285F4"
      />

      <div className="container mx-auto px-4 text-center relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/gdg-logo.png"
              alt="GDG Logo"
              width={192}
              height={192}
              className="w-32 h-32 md:w-48 md:h-48"
            />
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Build. Learn. Connect.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Join UTSC&apos;s premier developer community. Where innovation meets collaboration, and where the next
            generation of tech leaders are born.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              onClick={() => scrollToSection("recruitment")}
            >
              Join Our Community
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
