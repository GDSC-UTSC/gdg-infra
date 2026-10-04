"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/GDSC-UTSC", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/gdscutsc/posts/", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/gdgutsc/", label: "Instagram" },
  ];

  return (
    <footer className="py-8 border-google-multi">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/gdg-logo.png"
            alt="GDG Logo"
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © 2026 Google Developer Group @ UTSC, All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
