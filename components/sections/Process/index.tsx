import { steps } from "@/constants/process"
import StepCard from "./StepCard"

export default function Process() {
  return (
    <section
      id="process"
      className="border-t border-border/70 py-16 md:py-24 lg:py-32"
    >
      <div className="max-container">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="mb-4 font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              06 / Process
            </div>

            <h2 className="max-w-md font-heading text-4xl leading-[1.02] font-semibold tracking-[-0.045em] md:text-6xl">
              How an idea becomes a{" "}
              <span className="text-primary">product.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground md:text-base">
              Good development is more than writing code. I like to move from
              understanding the problem to building, testing and improving the
              final product.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-5 left-[19px] hidden h-[calc(100%-40px)] w-px bg-border sm:block" />

            <div className="space-y-3">
              {steps.map((step) => (
                <StepCard key={step.number} step={step} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-muted/20 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-mono text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
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
