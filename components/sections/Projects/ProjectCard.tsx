import Link from "next/link"
import { ExternalLink, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Project } from "@/lib/types/project/project.types"
import ProjectImageCarousel from "./ProjectImageCarousel"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    number,
    label,
    name,
    description,
    problem,
    contribution,
    features,
    tags,
    links,
    variant = "default",
    reverse = false,
    images,
  } = project

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-card",
        "transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
      )}
    >
      <div
        className={cn(
          "grid lg:grid-cols-2",
          variant === "wide" && "lg:grid-cols-[1.1fr_0.9fr]",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        <div className="p-5 sm:p-7 lg:p-10">
          <div className="mb-6 flex items-center justify-between">
            <div className="font-mono text-xs text-muted-foreground">
              {number}
            </div>

            <div className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
              {label}
            </div>
          </div>

          <h3 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {name}
          </h3>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            {description}
          </p>

          <div className="mt-7 space-y-5">
            <div>
              <div className="mb-1.5 font-mono text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                The problem
              </div>

              <p className="text-sm leading-6">{problem}</p>
            </div>

            <div>
              <div className="mb-1.5 font-mono text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                My contribution
              </div>

              <p className="text-sm leading-6">{contribution}</p>
            </div>
          </div>

          <div className="mt-7 grid gap-2 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {(links.live || links.github) && (
            <div className="mt-8 flex flex-wrap gap-2">
              {links.live && (
                <Link
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex h-9 items-center gap-2 rounded-md bg-foreground px-3.5 text-xs font-medium text-background transition-colors hover:bg-primary"
                >
                  Live project
                  <ExternalLink className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              )}

              {links.github && (
                <Link
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-3.5 text-xs font-medium transition-colors hover:border-foreground"
                >
                  Source
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-border bg-muted/20 p-4 sm:p-6 lg:border-t-0 lg:border-l">
          <ProjectImageCarousel images={images} />
        </div>
      </div>
    </article>
  )
}
