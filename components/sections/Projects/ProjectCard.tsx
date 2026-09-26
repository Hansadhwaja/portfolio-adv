import Link from "next/link"
import { Building2, Check, ExternalLink } from "lucide-react"
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
    context,
  } = project

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-card",
        "transition-all duration-300",
        "hover:border-foreground/20 hover:shadow-lg"
      )}
    >
      <div
        className={cn(
          "grid lg:grid-cols-2",
          variant === "wide" && "lg:grid-cols-[1.1fr_0.9fr]"
        )}
      >
        {/* =========================================================
            LEFT — PROJECT STORY
        ========================================================== */}
        <div className={cn("p-5 sm:p-7 lg:p-10", reverse && "lg:order-2")}>
          {/* Header */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="font-mono text-xs text-muted-foreground">
              {number}
            </div>

            <div
              className={cn(
                "rounded-full border border-border",
                "px-2.5 py-1",
                "font-mono text-[10px] tracking-wider",
                "text-muted-foreground uppercase"
              )}
            >
              {label}
            </div>
          </div>

          {/* Title */}
          <h3
            className={cn(
              "font-heading text-4xl font-semibold tracking-tight",
              "sm:text-5xl"
            )}
          >
            {name}
          </h3>

          {/* Description */}
          <p
            className={cn(
              "mt-4 max-w-xl",
              "text-sm leading-6 text-muted-foreground",
              "sm:text-base"
            )}
          >
            {description}
          </p>

          {/* =======================================================
              PROJECT CONTEXT
          ======================================================== */}
          {context && (
            <div
              className={cn(
                "mt-6 flex items-center gap-3",
                "border-y border-border/60 py-3"
              )}
            >
              <div
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center",
                  "rounded-md border border-border",
                  "bg-muted/40"
                )}
              >
                <Building2 className="size-3.5 text-muted-foreground" />
              </div>

              <div className="min-w-0">
                <div
                  className={cn(
                    "font-mono text-[9px] font-medium",
                    "tracking-wider text-muted-foreground uppercase"
                  )}
                >
                  {context.type === "professional"
                    ? "Built at"
                    : "Project type"}
                </div>

                <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="text-sm font-medium">
                    {context.organization}
                  </span>

                  {context.role && (
                    <>
                      <span className="text-muted-foreground">·</span>

                      <span className="text-xs text-muted-foreground">
                        {context.role}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Problem + Contribution */}
          <div className="mt-8 space-y-7">
            {/* Problem */}
            <div>
              <div
                className={cn(
                  "mb-1.5",
                  "font-mono text-[10px] font-medium",
                  "tracking-wider text-muted-foreground uppercase"
                )}
              >
                The problem
              </div>

              <p className="max-w-xl text-sm leading-6">{problem}</p>
            </div>

            {/* Contribution */}
            <div>
              <div
                className={cn(
                  "mb-1.5",
                  "font-mono text-[10px] font-medium",
                  "tracking-wider text-muted-foreground uppercase"
                )}
              >
                My contribution
              </div>

              <p className="max-w-xl text-sm leading-6">{contribution}</p>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT — IMAGE + PROJECT DETAILS
        ========================================================== */}
        <div
          className={cn(
            "flex flex-col border-t border-border",
            "bg-muted/20 p-4 sm:p-6",
            "lg:border-t-0",
            reverse
              ? "lg:order-1 lg:border-r lg:border-l-0"
              : "lg:order-2 lg:border-l"
          )}
        >
          {/* Image */}
          <ProjectImageCarousel images={images} />

          {/* =====================================================
              FEATURES
          ====================================================== */}
          {features.length > 0 && (
            <div className="mt-7">
              <div
                className={cn(
                  "mb-3",
                  "font-mono text-[10px] font-medium",
                  "tracking-wider text-muted-foreground uppercase"
                )}
              >
                Highlights
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className={cn(
                      "flex items-start gap-2",
                      "text-xs text-muted-foreground"
                    )}
                  >
                    <Check
                      className={cn("mt-0.5 size-3.5 shrink-0", "text-primary")}
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              STACK
          ====================================================== */}
          {tags.length > 0 && (
            <div className="mt-7">
              <div
                className={cn(
                  "mb-3",
                  "font-mono text-[10px] font-medium",
                  "tracking-wider text-muted-foreground uppercase"
                )}
              >
                Stack
              </div>

              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "rounded-md bg-background/60",
                      "border border-border/60",
                      "px-2.5 py-1",
                      "font-mono text-[10px]",
                      "text-muted-foreground",
                      "transition-all duration-200",
                      "hover:border-foreground/30",
                      "hover:bg-background",
                      "hover:text-foreground",
                      "hover:-translate-y-0.5"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              CTA
          ====================================================== */}
          {(links.live || links.github) && (
            <div className="mt-7 flex flex-wrap gap-2">
              {links.live && (
                <Link
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group/link inline-flex h-9 items-center gap-2",
                    "rounded-md bg-foreground px-3.5",
                    "text-xs font-medium text-background",
                    "transition-colors duration-200",
                    "hover:bg-primary"
                  )}
                >
                  Live project
                  <ExternalLink
                    className={cn(
                      "size-3.5",
                      "transition-transform duration-200",
                      "group-hover/link:translate-x-0.5",
                      "group-hover/link:-translate-y-0.5"
                    )}
                  />
                </Link>
              )}

              {links.github && (
                <Link
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex h-9 items-center gap-2",
                    "rounded-md border border-border px-3.5",
                    "text-xs font-medium",
                    "transition-colors duration-200",
                    "hover:border-foreground"
                  )}
                >
                  Source
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
