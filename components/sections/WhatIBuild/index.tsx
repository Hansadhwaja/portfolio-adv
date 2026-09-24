import { capabilities } from "@/constants/build"
import CapabilityCard from "./CapabilityCard"

export default function WhatIBuild() {
  return (
    <section
      id="what-i-build"
      className="border-t border-border/70 py-16 md:py-24 lg:py-32"
    >
      <div className="max-container">
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-4 font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
            05 / What I build
          </div>

          <h2 className="font-heading text-4xl leading-[1.02] font-semibold tracking-[-0.045em] md:text-6xl">
            Software built around{" "}
            <span className="text-primary">real workflows.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            I focus on practical web products where good engineering and a clear
            user experience need to work together.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.number} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  )
}
