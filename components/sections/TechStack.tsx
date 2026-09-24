import {
  Braces,
  Database,
  Globe2,
  Server,
  Wrench,
} from "lucide-react";

const stack = [
  {
    title: "Frontend",
    description: "Interfaces and client-side applications",
    icon: Globe2,
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    description: "APIs and application logic",
    icon: Server,
    technologies: [
      "Node.js",
      "REST APIs",
      "Next.js Server Actions",
      "Authentication",
      "API Integration",
    ],
  },
  {
    title: "Database",
    description: "Data modelling and persistence",
    icon: Database,
    technologies: [
      "MongoDB",
      "Mongoose",
      "Database Design",
      "Aggregation",
    ],
  },
  {
    title: "Development",
    description: "Tools and engineering workflow",
    icon: Wrench,
    technologies: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Postman",
      "Figma",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="border-t border-border py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              04 / Technical stack
            </div>

            <h2 className="max-w-2xl font-serif text-4xl font-normal leading-[1.05] tracking-tight md:text-6xl">
              Tools I use to turn ideas into{" "}
              <em className="text-primary not-italic">products.</em>
            </h2>
          </div>

          <Braces className="hidden size-10 text-muted-foreground/40 md:block" />
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-border md:grid-cols-2">
          {stack.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className={`group p-6 sm:p-8 ${
                  index < 2 ? "border-b border-border" : ""
                } ${
                  index % 2 === 0
                    ? "md:border-r md:border-border"
                    : ""
                } ${
                  index === 2
                    ? "md:border-b-0"
                    : ""
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
            );
          })}
        </div>

        <div className="mt-5 grid gap-5 rounded-xl border border-border bg-muted/20 p-5 sm:grid-cols-3 sm:p-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Primary
            </div>

            <p className="mt-2 text-sm font-medium">
              Next.js + React + TypeScript
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Data
            </div>

            <p className="mt-2 text-sm font-medium">
              MongoDB + API-driven architecture
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Focus
            </div>

            <p className="mt-2 text-sm font-medium">
              Scalable, responsive web products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}