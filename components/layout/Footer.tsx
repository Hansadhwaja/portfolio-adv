"use client"

import Link from "next/link"
import { ArrowUp, ArrowUpRight } from "lucide-react"

import { navItems } from "@/constants"
import TrackedLink from "../analytics/TrackedLink"
import { ANALYTICS_EVENTS } from "@/lib/analytics"

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background">
      <div className="max-container">
        <div className="flex flex-col gap-10 py-10 md:flex-row md:items-start md:justify-between md:py-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="#home" className="group inline-flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-foreground font-mono text-[11px] font-semibold tracking-tight text-background transition-transform duration-200 group-hover:scale-[1.03]">
                HB
              </span>

              <span className="font-heading text-base font-semibold tracking-[-0.02em]">
                Hansadhwaja Biswal
              </span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Full Stack Developer building modern web applications, business
              tools, and digital products.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Navigate
            </span>

            <nav
              className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 md:grid-cols-2"
              aria-label="Footer navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}

                  <ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Back to top */}
          <TrackedLink
            href="#home"
            aria-label="Back to top"
            eventName={ANALYTICS_EVENTS.BACK_TO_TOP_CLICK}
            eventParameters={{
              location: "footer",
            }}
            className="inline-flex size-10 items-center justify-center self-start rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary md:ml-auto"
          >
            <ArrowUp className="size-4" />
          </TrackedLink>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-border/80 py-5 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Hansadhwaja Biswal. All rights
            reserved.
          </span>

          <span className="font-mono tracking-[-0.01em]">
            Designed & built with Next.js
          </span>
        </div>
      </div>
    </footer>
  )
}
