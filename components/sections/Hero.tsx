import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CodeTerminal from "./CodeTerminal";

export default function Hero() {
  return (
    <section id="home" className="border-0 py-10 md:py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 font-mono text-xs font-medium">
            <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]" />
            Open to opportunities
          </div>

          <h1 className="max-w-5xl font-serif text-[clamp(3rem,10vw,5.5rem)] font-normal leading-[0.98] tracking-tight">
            I build modern web products that{" "}
            <em className="text-primary not-italic">solve real problems.</em>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Full Stack Developer. B.Tech Computer Engineering graduate from
            IIIT Bhubaneswar. I design and develop scalable, responsive web
            applications using React, Next.js, TypeScript and modern backend
            technologies.
          </p>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-primary"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-foreground"
            >
              Let's Connect
            </Link>
          </div>
        </div>

        <CodeTerminal />
      </div>
    </section>
  );
}