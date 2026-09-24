import { Experience } from "@/lib/types/experience/experience.types"
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react"

interface Props {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      key={`${experience.company}-${experience.role}`}
      className="relative pl-8 sm:pl-10"
    >
      {/* Timeline marker */}
      <span
        className={`absolute top-6 left-0 flex size-4 items-center justify-center rounded-full border bg-background ${
          experience.current ? "border-primary" : "border-border"
        }`}
      >
        <span
          className={`size-1.5 rounded-full ${
            experience.current ? "bg-primary" : "bg-muted-foreground/40"
          }`}
        />
      </span>

      {/* Experience card */}
      <div
        className={`group rounded-xl border bg-card p-5 transition-all duration-200 sm:p-6 ${
          experience.current
            ? "border-primary/30"
            : "border-border hover:border-foreground/20"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <BriefcaseBusiness className="size-4 shrink-0 text-muted-foreground" />

              <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                {experience.period}
              </span>

              {experience.current && (
                <>
                  <span className="text-muted-foreground">·</span>

                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium tracking-[0.1em] text-primary uppercase">
                    <span className="size-1.5 rounded-full bg-current" />
                    Current
                  </span>
                </>
              )}
            </div>

            <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight">
              {experience.role}
            </h3>

            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <span className="font-medium">{experience.company}</span>

              <span className="text-muted-foreground">·</span>

              <span className="text-muted-foreground">
                {experience.location}
              </span>
            </div>
          </div>

          <ArrowUpRight
            className={`mt-0.5 hidden size-4 shrink-0 transition-all duration-200 sm:block ${
              experience.current
                ? "text-primary"
                : "text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
            }`}
          />
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
          {experience.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {experience.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-md bg-muted px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
