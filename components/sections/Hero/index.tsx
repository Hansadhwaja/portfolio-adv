import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import CodeTerminal from "./CodeTerminal"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/70"
    >
      <div className="max-container grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-28">
        {/* Content */}
        <div>
          {/* Availability */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[11px] font-medium tracking-[-0.01em] text-muted-foreground">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/50" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl font-heading text-[clamp(3.25rem,7.5vw,6.25rem)] leading-[0.94] font-semibold tracking-[-0.055em] text-foreground">
            I build modern web products that{" "}
            <span className="text-primary">solve real problems.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-base md:text-lg md:leading-8">
            Full Stack Developer and B.Tech Computer Engineering graduate from
            IIIT Bhubaneswar. I build scalable, responsive web applications with
            React, Next.js, TypeScript, and modern backend technologies.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="#projects"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-sm font-semibold text-background transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              Let's Connect
              <ArrowUpRight className="size-4 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </Link>
          </div>

          {/* Small supporting info */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/70 pt-5">
            <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
              Based in Odisha, India
            </span>

            <span className="hidden size-1 rounded-full bg-border sm:block" />

            <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
              Full Stack Development
            </span>
          </div>
        </div>

        {/* Terminal */}
        <div className="w-full lg:translate-y-2">
          <CodeTerminal />
        </div>
      </div>
    </section>
  )
}
