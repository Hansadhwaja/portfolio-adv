import { Braces } from "lucide-react"
import { stack } from "@/constants/stack"
import TechStackCard from "./TechStackCard"

export default function TechStack() {
  return (
    <section
      id="stack"
      className="border-t border-border/70 py-16 md:py-24 lg:py-32"
    >
      <div className="max-container">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              04 / Technical stack
            </div>

            <h2 className="max-w-2xl font-heading text-4xl leading-[1.02] font-semibold tracking-[-0.045em] md:text-6xl">
              Tools I use to turn ideas into{" "}
              <span className="text-primary">products.</span>
            </h2>
          </div>

          <Braces className="hidden size-10 text-muted-foreground/30 md:block" />
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2">
          {stack.map((category, index) => (
            <TechStackCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        <div className="mt-5 grid gap-0 overflow-hidden rounded-xl border border-border bg-muted/20 sm:grid-cols-3">
          <div className="p-5 sm:p-6">
            <div className="font-mono text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
              Primary
            </div>

            <p className="mt-2 text-sm font-medium">
              Next.js + React + TypeScript
            </p>
          </div>

          <div className="border-t border-border sm:border-t-0 sm:border-l">
            <div className="p-5 sm:p-6">
              <div className="font-mono text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                Data
              </div>

              <p className="mt-2 text-sm font-medium">
                MongoDB + API-driven architecture
              </p>
            </div>
          </div>

          <div className="border-t border-border sm:border-t-0 sm:border-l">
            <div className="p-5 sm:p-6">
              <div className="font-mono text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                Focus
              </div>

              <p className="mt-2 text-sm font-medium">
                Scalable, responsive web products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
