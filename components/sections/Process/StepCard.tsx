import { ProcessStep } from "@/lib/types"

interface Props{
    step:ProcessStep
}

const StepCard = ({step}:Props) => {
  const Icon = step.icon

  return (
    <article
      key={step.number}
      className="group relative grid gap-5 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-foreground/20 sm:grid-cols-[40px_1fr] sm:gap-6 sm:p-6"
    >
      <div className="relative z-10 flex size-10 items-center justify-center rounded-lg border border-border bg-background transition-colors duration-200 group-hover:border-primary/30">
        <Icon className="size-4 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] font-medium text-muted-foreground">
            {step.number}
          </span>

          <h3 className="font-heading text-base font-semibold tracking-tight">
            {step.title}
          </h3>
        </div>

        <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
          {step.description}
        </p>
      </div>
    </article>
  )
}

export default StepCard
