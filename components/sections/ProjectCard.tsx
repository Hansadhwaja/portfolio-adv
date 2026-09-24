import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectPreviewType = "storepilot" | "paint-store" | "vigilo";

interface ProjectCardProps {
  number: string;
  label: string;
  name: string;
  description: string;
  problem: string;
  contribution: string;
  features: string[];
  tags: string[];
  links: {
    live: string;
    github: string;
  };
  variant?: "default" | "wide";
  reverse?: boolean;
  preview: ProjectPreviewType;
}

function ProjectPreview({
  type,
}: {
  type: ProjectPreviewType;
}) {
  if (type === "storepilot") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background p-3 shadow-sm sm:p-5">
        <div className="flex h-full overflow-hidden rounded-md border border-border bg-muted/30">
          <div className="hidden w-36 border-r border-border bg-background p-3 sm:block">
            <div className="mb-6 h-3 w-20 rounded bg-foreground/10" />

            <div className="space-y-2">
              <div className="h-7 rounded bg-primary/10" />
              <div className="h-7 rounded bg-muted" />
              <div className="h-7 rounded bg-muted" />
              <div className="h-7 rounded bg-muted" />
              <div className="h-7 rounded bg-muted" />
            </div>
          </div>

          <div className="min-w-0 flex-1 p-3 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="h-2.5 w-20 rounded bg-foreground/15" />
                <div className="mt-2 h-2 w-28 rounded bg-foreground/5" />
              </div>

              <div className="h-7 w-7 rounded-full bg-muted" />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Sales", "Received", "Due", "Inventory"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-border bg-background p-2.5"
                >
                  <div className="text-[8px] text-muted-foreground">
                    {item}
                  </div>
                  <div className="mt-2 h-2 w-12 rounded bg-foreground/15" />
                </div>
              ))}
            </div>

            <div className="mt-3 h-[calc(100%-100px)] min-h-24 rounded-md border border-border bg-background p-3">
              <div className="mb-4 h-2 w-24 rounded bg-foreground/10" />

              <div className="flex h-[calc(100%-20px)] items-end gap-2">
                {[45, 65, 52, 80, 60, 92, 72, 86].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-primary/30"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "paint-store") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background p-3 shadow-sm sm:p-5">
        <div className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-background">
          <div className="flex h-10 items-center justify-between border-b border-border px-3">
            <div className="h-2.5 w-24 rounded bg-foreground/15" />

            <div className="flex gap-2">
              <div className="h-5 w-5 rounded-full bg-muted" />
              <div className="h-5 w-12 rounded bg-primary/10" />
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-3 p-3 sm:grid-cols-3">
            {[
              "Interior Paint",
              "Exterior Paint",
              "Wall Putty",
              "Tools",
              "Wood Finish",
              "Auto Colors",
            ].map((item, index) => (
              <div
                key={item}
                className={cn(
                  "overflow-hidden rounded-md border border-border",
                  index > 3 && "hidden sm:block",
                )}
              >
                <div className="h-16 bg-muted sm:h-20" />

                <div className="p-2">
                  <div className="h-2 w-16 rounded bg-foreground/10" />
                  <div className="mt-1.5 h-1.5 w-10 rounded bg-foreground/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background p-3 shadow-sm sm:p-5">
      <div className="flex h-full overflow-hidden rounded-md border border-border bg-muted/30">
        <div className="hidden w-32 border-r border-border bg-background p-3 sm:block">
          <div className="mb-5 h-3 w-16 rounded bg-foreground/10" />

          <div className="space-y-2">
            <div className="h-6 rounded bg-primary/10" />
            <div className="h-6 rounded bg-muted" />
            <div className="h-6 rounded bg-muted" />
            <div className="h-6 rounded bg-muted" />
          </div>
        </div>

        <div className="min-w-0 flex-1 p-3 sm:p-4">
          <div className="mb-4 flex justify-between">
            <div>
              <div className="h-2.5 w-28 rounded bg-foreground/15" />
              <div className="mt-2 h-2 w-20 rounded bg-foreground/5" />
            </div>

            <div className="h-6 w-16 rounded bg-muted" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="h-20 rounded-md border border-border bg-background p-3">
              <div className="h-2 w-16 rounded bg-foreground/10" />
              <div className="mt-4 h-3 w-10 rounded bg-primary/20" />
            </div>

            <div className="h-20 rounded-md border border-border bg-background p-3">
              <div className="h-2 w-16 rounded bg-foreground/10" />
              <div className="mt-4 h-3 w-12 rounded bg-foreground/10" />
            </div>
          </div>

          <div className="mt-2 h-[calc(100%-112px)] min-h-20 rounded-md border border-border bg-background p-3">
            <div className="mb-3 h-2 w-20 rounded bg-foreground/10" />

            <div className="space-y-2">
              <div className="h-2 rounded bg-muted" />
              <div className="h-2 w-4/5 rounded bg-muted" />
              <div className="h-2 w-3/5 rounded bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({
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
  preview,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-card",
        "transition-all duration-300 hover:border-foreground/20 hover:shadow-lg",
      )}
    >
      <div
        className={cn(
          "grid lg:grid-cols-2",
          variant === "wide" && "lg:grid-cols-[1.1fr_0.9fr]",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="p-5 sm:p-7 lg:p-10">
          <div className="mb-6 flex items-center justify-between">
            <div className="font-mono text-xs text-muted-foreground">
              {number}
            </div>

            <div className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {label}
            </div>
          </div>

          <h3 className="font-serif text-4xl font-normal tracking-tight sm:text-5xl">
            {name}
          </h3>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            {description}
          </p>

          <div className="mt-7 space-y-5">
            <div>
              <div className="mb-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                The problem
              </div>

              <p className="text-sm leading-6">{problem}</p>
            </div>

            <div>
              <div className="mb-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
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
                  <ExternalLink className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>
              )}

              {links.github && (
                <Link
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-3.5 text-xs font-medium transition-colors hover:border-foreground"
                >
                  {/* <Github className="size-3.5" /> */}
                  Source
                </Link>
              )}

              {!links.live && !links.github && (
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  Internal project
                  <ArrowUpRight className="size-3.5" />
                </span>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-border bg-muted/20 p-4 sm:p-6 lg:border-t-0 lg:border-l">
          <ProjectPreview type={preview} />
        </div>
      </div>
    </article>
  );
}