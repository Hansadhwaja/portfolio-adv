import { Lightbulb, Search, PenTool, Code2, RefreshCw } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the problem, users and requirements. Understand what actually needs to be solved.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Break the problem into features, data flows and technical requirements before writing code.",
    icon: Search,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Shape the interface and user experience around the workflow, keeping the product clear and responsive.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Develop the frontend, backend and database together with reusable components and maintainable architecture.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Iterate",
    description:
      "Test the result, identify friction and continuously improve the product based on real usage.",
    icon: RefreshCw,
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="border-t border-border py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="mb-4 font-mono text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              06 / Process
            </div>

            <h2 className="max-w-md font-serif text-4xl leading-[1.05] font-normal tracking-tight md:text-6xl">
              How an idea becomes a{" "}
              <em className="text-primary not-italic">product.</em>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground md:text-base">
              Good development is more than writing code. I like to move from
              understanding the problem to building, testing and improving the
              final product.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-5 left-[19px] hidden h-[calc(100%-40px)] w-px bg-border sm:block" />

            <div className="space-y-3">
              {steps.map((step) => {
                const Icon = step.icon

                return (
                  <article
                    key={step.number}
                    className="group relative grid gap-5 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20 sm:grid-cols-[40px_1fr] sm:gap-6 sm:p-6"
                  >
                    <div className="relative z-10 flex size-10 items-center justify-center rounded-lg border border-border bg-background">
                      <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {step.number}
                        </span>

                        <h3 className="text-base font-semibold tracking-tight">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-muted/20 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                The goal
              </div>

              <p className="mt-2 text-sm font-medium">
                Build software that is useful, understandable and built to grow.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
              <span>Problem</span>
              <span>→</span>
              <span>Product</span>
              <span>→</span>
              <span>Iteration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
