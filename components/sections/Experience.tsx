import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    period: "2026 — Present",
    role: "Software Engineer",
    company: "Quantum IT Innovation",
    location: "Remote",
    description:
      "Working on modern web applications across frontend and backend, with a focus on building responsive interfaces, integrating APIs and delivering production-ready features.",
    highlights: [
      "Full Stack Web Development",
      "React & Next.js applications",
      "REST API integration",
      "Reusable UI components",
    ],
    current: true,
  },
  {
    period: "Jan 2025 — Apr 2025",
    role: "Software Engineer Trainee",
    company: "Pixel Compute",
    location: "Bhubaneswar, India",
    description:
      "Worked on web development tasks while gaining hands-on experience with modern JavaScript technologies, application development and collaborative software workflows.",
    highlights: [
      "Frontend development",
      "JavaScript & React",
      "API integration",
      "Responsive interfaces",
    ],
    current: false,
  },
  {
    period: "2024",
    role: "Full Stack Web Development Trainee",
    company: "NullClass",
    location: "Remote",
    description:
      "Completed practical full stack development training focused on building web applications and understanding frontend, backend and database workflows.",
    highlights: [
      "MERN stack",
      "Full stack projects",
      "Database fundamentals",
      "REST APIs",
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <div className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              03 / Experience
            </div>

            <h2 className="max-w-md font-serif text-4xl font-normal leading-[1.05] tracking-tight md:text-6xl">
              Building experience through{" "}
              <em className="text-primary not-italic">real products.</em>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground md:text-base">
              My experience has grown through a combination of professional
              development, hands-on projects and solving real-world problems.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-border" />

            <div className="space-y-10">
              {experiences.map((experience) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="relative pl-8 sm:pl-10"
                >
                  <span
                    className={`absolute left-0 top-1.5 flex size-4 items-center justify-center rounded-full border bg-background ${
                      experience.current
                        ? "border-primary"
                        : "border-border"
                    }`}
                  >
                    <span
                      className={`size-1.5 rounded-full ${
                        experience.current
                          ? "bg-primary"
                          : "bg-muted-foreground/40"
                      }`}
                    />
                  </span>

                  <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20 sm:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <BriefcaseBusiness className="size-4 text-muted-foreground" />

                          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                            {experience.period}
                          </span>
                        </div>

                        <h3 className="mt-3 text-lg font-semibold tracking-tight">
                          {experience.role}
                        </h3>

                        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                          <span className="font-medium">
                            {experience.company}
                          </span>

                          <span className="text-muted-foreground">·</span>

                          <span className="text-muted-foreground">
                            {experience.location}
                          </span>

                          {experience.current && (
                            <>
                              <span className="text-muted-foreground">·</span>

                              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                                <span className="size-1.5 rounded-full bg-current" />
                                Current
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <ArrowUpRight className="hidden size-4 text-muted-foreground sm:block" />
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}