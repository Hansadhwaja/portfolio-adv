import { principles, traits } from "@/constants/about"

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border/70 py-16 md:py-24 lg:py-32"
    >
      <div className="max-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Heading */}
          <div>
            <div className="mb-4 font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              02 / About
            </div>

            <h2 className="max-w-xl font-heading text-4xl leading-[1.02] font-semibold tracking-[-0.045em] md:text-6xl">
              From idea → interface →{" "}
              <span className="text-primary">working product.</span>
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-2xl lg:pt-8">
            <p className="text-lg leading-8 text-foreground/90 md:text-xl md:leading-9">
              I&apos;m a Full Stack Developer who enjoys turning ideas and
              real-world problems into useful web products.
            </p>

            <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
              My work spans the entire development process—from understanding
              requirements and designing interfaces to building APIs, databases
              and production-ready frontends.
            </p>

            <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
              I particularly enjoy projects where software has a direct
              connection to how people work. StorePilot, for example, started
              from a simple business problem and evolved into a complete
              management system.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-16 border-t border-border/70 md:mt-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-5">
            {principles.map((principle, index) => {
              const Icon = principle.icon

              return (
                <div
                  key={principle.number}
                  className={`group relative flex min-h-[220px] flex-col border-b border-border/70 p-5 transition-colors duration-200 hover:bg-muted/30 md:p-6 lg:border-r lg:border-b-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0 ${
                    index === principles.length - 1 ? "md:last:border-b-0" : ""
                  } `}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-medium text-muted-foreground">
                      {principle.number}
                    </span>

                    <Icon className="size-4 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
                  </div>

                  <div className="mt-auto pt-12">
                    <h3 className="font-heading text-sm font-semibold tracking-tight">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-xs leading-5 text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
