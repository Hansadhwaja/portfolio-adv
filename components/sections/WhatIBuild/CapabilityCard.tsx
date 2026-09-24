import { Capability } from "@/lib/types"
import React from "react"

interface Props {
  capability: Capability
}

const CapabilityCard = ({ capability }: Props) => {
  const Icon = capability.icon

  return (
    <article
      key={capability.number}
      className="group bg-card p-6 transition-colors duration-200 hover:bg-muted/20 sm:p-8 lg:p-10"
    >
      <div className="flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-lg border border-border bg-background transition-colors duration-200 group-hover:border-primary/30">
          <Icon className="size-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
        </div>

        <span className="font-mono text-[10px] font-medium text-muted-foreground">
          {capability.number}
        </span>
      </div>

      <h3 className="mt-10 font-heading text-xl font-semibold tracking-tight">
        {capability.title}
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
        {capability.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-1.5">
        {capability.examples.map((example) => (
          <span
            key={example}
            className="rounded-md bg-muted px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground"
          >
            {example}
          </span>
        ))}
      </div>
    </article>
  )
}

export default CapabilityCard
