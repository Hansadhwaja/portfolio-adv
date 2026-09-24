import { projects } from "@/constants/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border/70 py-16 md:py-24 lg:py-32"
    >
      <div className="max-container">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-4 font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
            01 / Selected projects
          </div>

          <h2 className="font-heading text-4xl leading-[1.02] font-semibold tracking-[-0.045em] md:text-6xl">
            Products, not just{" "}
            <span className="text-primary">repositories.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            A selection of products and systems I have designed and built, from
            business tools to production web applications.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8 md:space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
