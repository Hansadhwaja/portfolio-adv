import {
  Lightbulb,
  Layers3,
  Code2,
  Gauge,
  Workflow,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Start with the problem",
    description:
      "I first understand what needs to be solved before deciding what to build.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Think in systems",
    description:
      "I care about data flow, architecture and reusable components—not just individual screens.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build with intention",
    description:
      "I prefer clean, maintainable code and interfaces that stay understandable as products grow.",
  },
  {
    number: "04",
    icon: Gauge,
    title: "Keep the experience simple",
    description:
      "Complex functionality should still feel clear and intuitive to the person using it.",
  },
  {
    number: "05",
    icon: Workflow,
    title: "Ship and improve",
    description:
      "I believe a useful product is built through iteration, feedback and continuous refinement.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              02 / About
            </div>

            <h2 className="max-w-xl font-serif text-4xl font-normal leading-[1.05] tracking-tight md:text-6xl">
              From idea → interface →{" "}
              <em className="text-primary not-italic">working product.</em>
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-10">
            <p className="text-lg leading-8 text-foreground/90 md:text-xl">
              I&apos;m a Full Stack Developer who enjoys turning ideas and
              real-world problems into useful web products.
            </p>

            <p className="mt-5 text-base leading-7 text-muted-foreground">
              My work spans the entire development process—from understanding
              requirements and designing interfaces to building APIs,
              databases and production-ready frontends.
            </p>

            <p className="mt-5 text-base leading-7 text-muted-foreground">
              I particularly enjoy projects where software has a direct
              connection to how people work. StorePilot, for example, started
              from a simple business problem and evolved into a complete
              management system.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Problem solving",
                "Product thinking",
                "Clean architecture",
                "Responsive UI",
                "Continuous learning",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border md:mt-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-5">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.number}
                  className="group border-b border-border p-5 first:pl-0 last:border-b-0 md:min-h-60 md:border-r md:p-6 md:last:border-r-0 lg:border-b-0 lg:first:pl-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {principle.number}
                    </span>

                    <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>

                  <h3 className="mt-12 text-sm font-semibold tracking-tight">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}