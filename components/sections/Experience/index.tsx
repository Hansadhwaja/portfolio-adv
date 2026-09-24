import { ArrowUpRight, BriefcaseBusiness } from "lucide-react"
import ExperienceCard from "./ExperienceCard"
import { experiences } from "@/constants/experience"



export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border/70 py-16 md:py-24 lg:py-32"
    >
      <div className="max-container">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Intro */}
          <div>
            <div className="mb-4 font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              03 / Experience
            </div>

            <h2 className="max-w-md font-heading text-4xl leading-[1.02] font-semibold tracking-[-0.045em] md:text-6xl">
              Building experience through{" "}
              <span className="text-primary">real products.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground md:text-base">
              My experience has grown through professional development, hands-on
              projects, and solving problems with software.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute top-3 bottom-3 left-[7px] w-px bg-border" />

            <div className="space-y-6 md:space-y-8">
              {experiences.map((experience) => (
                <ExperienceCard
                  key={experience.company}
                  experience={experience}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
