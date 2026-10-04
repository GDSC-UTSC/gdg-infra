import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeaderClient from "./HeaderClient";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { AdminButton, AdminButtonMobile } from "./AdminButton";

const HeaderServer = () => {
  return (
    <HeaderClient>
      <div className="px-4 sm:px-8 py-3 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image src="/gdg-logo.png" alt="GDG Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-foreground font-semibold text-base hidden sm:inline">GDG @ UTSC</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1 overflow-x-auto whitespace-nowrap">
              <Link href="/events">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground/80 hover:text-foreground hover:bg-white/30 text-sm px-3 sm:px-4 h-9"
                >
                  Events
                </Button>
              </Link>
              <Link href="/team">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground/80 hover:text-foreground hover:bg-white/30 text-sm px-3 sm:px-4 h-9"
                >
                  Team
                </Button>
              </Link>
              <Link href="/positions">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground/80 hover:text-foreground hover:bg-white/30 text-sm px-3 sm:px-4 h-9"
                >
                  Positions
                </Button>
              </Link>
            </nav>
          </div>

          {/* Right side - Social Icons and Account Button */}
          <div className="hidden md:flex items-center gap-6">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/gdscutsc/posts/"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/gdgutsc/"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Admin Button (conditionally rendered) */}
            <AdminButton />

            {/* Account Button */}
            <Link href="/account">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white text-sm px-5 h-9 font-semibold">
                Account
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-white/30">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white border-border">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                {/* Logo */}
                <SheetClose asChild>
                  <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image src="/gdg-logo.png" alt="GDG Logo" width={32} height={32} className="w-8 h-8" />
                    <span className="text-foreground font-semibold text-base">GDG @ UTSC</span>
                  </Link>
                </SheetClose>
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  <SheetClose asChild>
                    <Link href="/events">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-foreground/70 hover:text-foreground hover:bg-accent text-base h-12"
                      >
                        Events
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/team">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-foreground/70 hover:text-foreground hover:bg-accent text-base h-12"
                      >
                        Team
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/positions">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-foreground/70 hover:text-foreground hover:bg-accent text-base h-12"
                      >
                        Positions
                      </Button>
                    </Link>
                  </SheetClose>
                </nav>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* Admin Button (conditionally rendered) */}
                <SheetClose asChild>
                  <AdminButtonMobile />
                </SheetClose>

                {/* Account Button */}
                <SheetClose asChild>
                  <Link href="/account" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white text-base h-12 font-semibold">
                      Account
                    </Button>
                  </Link>
                </SheetClose>

                {/* Social Media Icons */}
                <div className="flex items-center gap-4 justify-center">
                  <a
                    href="https://www.linkedin.com/company/gdscutsc/posts/"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/gdgutsc/"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </HeaderClient>
  );
};

export default HeaderServer;
