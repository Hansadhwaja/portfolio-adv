"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

import { navItems } from "@/constants"
import { siteConfig } from "@/config/site"
import TrackedLink from "../analytics/TrackedLink"
import { ANALYTICS_EVENTS } from "@/lib/analytics"

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="max-h-[88dvh] border-border bg-background">
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader className="border-b border-border/80 px-5 pt-2 pb-5 text-left">
            <DrawerTitle className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-foreground font-mono text-[11px] font-semibold tracking-tight text-background">
                HB
              </span>

              <span className="font-heading text-sm font-semibold tracking-tight">
                Hansadhwaja Biswal
              </span>
            </DrawerTitle>
          </DrawerHeader>

          {/* Navigation */}
          <nav className="px-5 pt-4" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between border-b border-border/80 py-4"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    0{index + 1}
                  </span>

                  <span className="font-heading text-2xl font-medium tracking-[-0.025em] transition-colors group-hover:text-primary">
                    {item.label}
                  </span>
                </span>

                <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>
            ))}
          </nav>

          {/* Connect */}
          <div className="px-5 pt-6 pb-8">
            <p className="mb-3 font-mono text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Connect
            </p>

            <div className="grid grid-cols-3 gap-2">
              {/* GitHub */}
              <TrackedLink
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                eventName={ANALYTICS_EVENTS.GITHUB_CLICK}
                eventParameters={{
                  location: "mobile_menu",
                }}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-card text-xs font-medium transition-colors hover:bg-muted"
              >
                GitHub
              </TrackedLink>

              {/* LinkedIn */}
              <TrackedLink
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                eventName={ANALYTICS_EVENTS.LINKEDIN_CLICK}
                eventParameters={{
                  location: "mobile_menu",
                }}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-card text-xs font-medium transition-colors hover:bg-muted"
              >
                LinkedIn
              </TrackedLink>

              {/* Resume */}
              <TrackedLink
                href={siteConfig.resume}
                onClick={onClose}
                eventName={ANALYTICS_EVENTS.RESUME_DOWNLOAD}
                eventParameters={{
                  location: "mobile_menu",
                }}
                className="inline-flex h-10 items-center justify-center gap-1 rounded-lg bg-primary text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Resume
                <ArrowUpRight className="size-3.5" />
              </TrackedLink>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
