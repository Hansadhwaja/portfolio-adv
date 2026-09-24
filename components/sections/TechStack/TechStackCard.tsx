import { StackCategory } from "@/lib/types/stack/stack.types"

interface Props {
  category: StackCategory
  index: number
}

const TechStackCard = ({ category, index }: Props) => {
  const Icon = category.icon

  return (
    <div
      className={`group p-6 sm:p-8 ${
        index < 2 ? "border-b border-border" : ""
      } ${index % 2 === 0 ? "md:border-r md:border-border" : ""} ${
        index === 2 ? "md:border-b-0" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-muted/30">
          <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>

        <span className="font-mono text-[10px] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-8 text-lg font-semibold tracking-tight">
        {category.title}
      </h3>

      <p className="mt-1.5 text-sm text-muted-foreground">
        {category.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {category.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-[10px] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechStackCard
