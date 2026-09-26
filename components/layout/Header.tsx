"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"
import MobileDrawer from "./MobileDrawer"
import { navItems } from "@/constants"
import { cn } from "cn"
import { Button } from "../ui/button"
import { siteConfig } from "@/config/site"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) return

    const updateActiveSection = () => {
      const activationPoint = window.innerHeight * 0.3

      let currentSection = sections[0]

      for (const section of sections) {
        const rect = section.getBoundingClientRect()

        if (rect.top <= activationPoint) {
          currentSection = section
        } else {
          break
        }
      }

      setActiveSection(currentSection.id)
    }

    updateActiveSection()

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    })

    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border/80 bg-background/80 backdrop-blur-xl"
            : "bg-background"
        )}
      >
        <div
          className={cn(
            "max-container flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-19"
          )}
        >
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Hansadhwaja Biswal - Home"
          >
            <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-lg bg-foreground font-mono text-[11px] font-semibold tracking-tight text-background transition-transform duration-200 group-hover:scale-[1.03]">
              HB
            </span>

            <span className="hidden font-heading text-sm font-semibold tracking-[-0.01em] sm:block">
              Hansadhwaja Biswal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const sectionId = item.href.slice(1)
              const isActive = activeSection === sectionId

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-1.5 lg:flex">
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-2.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>

            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-2.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>

            <Link
              href={siteConfig.resume}
              className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3.5 text-[13px] font-semibold text-primary-foreground transition-opacity duration-200 hover:opacity-90"
            >
              Resume
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          {/* Mobile Menu */}
          <Button
            size="icon"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            className="inline-flex items-center justify-center rounded-lg border border-border/80 bg-card text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            <Menu />
          </Button>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
