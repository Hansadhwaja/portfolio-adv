import { ExternalLink } from "lucide-react"
import { highlights } from "@/constants/highlights"
import HighlightCard from "./HighlightCard"

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="border-t border-border/70 py-16 md:py-20 lg:py-24"
    >
      <div className="max-container">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              07 / Highlights
            </div>

            <h2 className="font-heading text-4xl leading-[1.02] font-semibold tracking-[-0.045em] md:text-5xl">
              A few things <span className="text-primary">worth knowing.</span>
            </h2>
          </div>

          <ExternalLink className="hidden size-5 text-muted-foreground/40 md:block" />
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-border md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={highlight.label}
              highlight={highlight}
              index={index}
              length={highlights.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
