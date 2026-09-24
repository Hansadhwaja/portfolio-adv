import {
  Code2,
  ExternalLink,
  GraduationCap,
  Layers3,
} from "lucide-react";

const highlights = [
  {
    value: "3+",
    label: "Real-world products",
    description:
      "Business, local commerce and enterprise applications built through hands-on development.",
    icon: Layers3,
  },
  {
    value: "Full Stack",
    label: "Development focus",
    description:
      "Frontend, backend, database and API development across complete web applications.",
    icon: Code2,
  },
  {
    value: "IIIT",
    label: "B.Tech Computer Engineering",
    description:
      "Computer Engineering graduate from IIIT Bhubaneswar.",
    icon: GraduationCap,
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="border-t border-border py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              07 / Highlights
            </div>

            <h2 className="font-serif text-4xl font-normal leading-[1.05] tracking-tight md:text-5xl">
              A few things{" "}
              <em className="text-primary not-italic">worth knowing.</em>
            </h2>
          </div>

          <ExternalLink className="hidden size-5 text-muted-foreground md:block" />
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-border md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <article
                key={highlight.label}
                className={`group p-6 sm:p-8 ${
                  index < highlights.length - 1
                    ? "border-b border-border md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />

                  <span className="font-mono text-[10px] text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-10">
                  <div className="font-serif text-4xl tracking-tight sm:text-5xl">
                    {highlight.value}
                  </div>

                  <h3 className="mt-2 text-sm font-semibold">
                    {highlight.label}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}