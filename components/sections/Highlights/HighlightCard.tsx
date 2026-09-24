import type { Highlight } from "@/lib/types"

interface HighlightCardProps {
  highlight: Highlight
  index: number
  length: number
}

export default function HighlightCard({
  highlight,
  index,
  length,
}: HighlightCardProps) {
  const Icon = highlight.icon

  return (
    <article
      className={`group bg-card p-6 transition-colors duration-200 hover:bg-muted/20 sm:p-8 ${
        index < length - 1
          ? "border-b border-border md:border-r md:border-b-0"
          : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <Icon className="size-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />

        <span className="font-mono text-[10px] font-medium text-muted-foreground">
          0{index + 1}
        </span>
      </div>

      <div className="mt-10">
        <div className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          {highlight.value}
        </div>

        <h3 className="mt-2 font-heading text-sm font-semibold">
          {highlight.label}
        </h3>

        <p className="mt-3 text-xs leading-5 text-muted-foreground">
          {highlight.description}
        </p>
      </div>
    </article>
  )
}
