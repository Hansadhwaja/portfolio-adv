"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md transition-all duration-200 ${
          scrolled ? "border-border" : "border-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1200px] items-center justify-between px-5 transition-all duration-200 lg:px-10 ${
            scrolled ? "h-14" : "h-[72px]"
          }`}
        >
          <Link
            href="#home"
            className="flex items-center gap-2.5 text-sm font-semibold"
          >
            <span className="rounded-md bg-foreground px-2 py-1 font-mono text-xs text-background">
              HB
            </span>

            <span>Hansadhwaja Biswal</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    activeSection === sectionId
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-1 lg:flex">
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>

            <Link
              href="#"
              className="ml-1 inline-flex min-h-9 items-center rounded-md border border-border bg-background px-3.5 text-sm font-medium transition-colors hover:border-foreground"
            >
              Resume
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-background lg:hidden"
          >
            <Menu className="size-[18px]" />
          </button>
        </div>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}