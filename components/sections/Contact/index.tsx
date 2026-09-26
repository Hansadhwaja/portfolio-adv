import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { links } from "@/constants/contact"
import { siteConfig } from "@/config/site"

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border py-20 md:py-28 lg:py-36"
    >
      <div className="max-container">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-foreground px-6 py-12 text-background sm:px-10 md:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full border border-background/10" />
          <div className="pointer-events-none absolute -top-12 -right-12 size-48 rounded-full border border-background/10" />

          <div className="relative max-w-3xl">
            <div className="mb-5 font-mono text-xs tracking-[0.16em] text-background/50 uppercase">
              08 / Contact
            </div>

            <h2 className="font-heading text-5xl leading-[0.98] font-semibold tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Have an idea worth <span className="text-primary">building?</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-background/60 sm:text-base">
              Whether it&apos;s a product idea, a web application or an
              interesting engineering problem, I&apos;d be happy to hear about
              it.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`mailto:${siteConfig.contact.email}`}
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-background px-5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                Start a conversation
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#projects"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-background/20 px-5 text-sm font-medium text-background transition-colors hover:border-background/40"
              >
                Explore my work
              </Link>
            </div>
          </div>

          <div className="relative mt-12 flex flex-wrap gap-2 border-t border-background/10 pt-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="inline-flex items-center gap-2 rounded-md border border-background/10 px-3 py-2 text-xs text-background/60 transition-colors hover:border-background/30 hover:text-background"
              >
                <link.icon className="size-3.5" />

                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
