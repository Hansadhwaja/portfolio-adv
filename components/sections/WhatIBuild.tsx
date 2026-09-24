import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Business Applications",
    description:
      "Internal tools and management platforms that help businesses organize operations, customers, transactions and data.",
    examples: ["Dashboards", "CRM", "Inventory", "Business management"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Full Stack Web Apps",
    description:
      "Complete web applications connecting polished interfaces with APIs, authentication, databases and application logic.",
    examples: ["SaaS", "REST APIs", "Authentication", "Database systems"],
  },
  {
    number: "03",
    icon: Boxes,
    title: "Product Interfaces",
    description:
      "Responsive interfaces designed around clarity, reusable components and the actual workflows of the people using them.",
    examples: ["Admin panels", "User portals", "Responsive UI", "Design systems"],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Data & Operations",
    description:
      "Systems that turn operational data into useful information through structured workflows, reporting and analytics.",
    examples: ["Analytics", "Reports", "Tracking", "Operational workflows"],
  },
];

export default function WhatIBuild() {
  return (
    <section
      id="what-i-build"
      className="border-t border-border py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            05 / What I build
          </div>

          <h2 className="font-serif text-4xl font-normal leading-[1.05] tracking-tight md:text-6xl">
            Software built around{" "}
            <em className="text-primary not-italic">real workflows.</em>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            I focus on practical web products where good engineering and a
            clear user experience need to work together.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.number}
                className="group bg-card p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-lg border border-border bg-background">
                    <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>

                  <span className="font-mono text-[10px] text-muted-foreground">
                    {capability.number}
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-semibold tracking-tight">
                  {capability.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                  {capability.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {capability.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-md bg-muted px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}