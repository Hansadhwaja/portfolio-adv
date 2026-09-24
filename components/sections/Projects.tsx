import ProjectCard from "./ProjectCard"

const projects = [
  {
    number: "01",
    label: "Business Management Platform",
    name: "StorePilot",
    description:
      "A business management platform built to help a paint and hardware store manage customers, painters, orders, payments, inventory and outstanding dues in one place.",
    problem:
      "The business was relying on notebooks and manual calculations to track customer credit, dealer purchases and payments.",
    contribution:
      "Designed and developed the application end-to-end, including the data model, dashboards, transaction flows and responsive interface.",
    features: [
      "Customer & painter management",
      "Orders & partial payments",
      "Customer dues tracking",
      "Dealer purchase management",
      "Inventory & business analytics",
    ],
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    links: {
      live: "https://store-pilot-dev.vercel.app",
      github: "",
    },
    variant: "wide" as const,
    preview: "storepilot" as const,
  },
  {
    number: "02",
    label: "Local Business Website",
    name: "Shri Krishna Paints",
    description:
      "A modern website for a local paint and hardware business focused on product discovery, customer enquiries and improving local online presence.",
    problem:
      "The business had no dedicated website to communicate its products, services and location to potential customers.",
    contribution:
      "Designed and developed a responsive website with product presentation, brand sections, business information and direct customer contact actions.",
    features: [
      "Responsive business website",
      "Product & brand showcase",
      "Google Business integration",
      "WhatsApp conversion flow",
      "Analytics & local SEO foundation",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "GA4"],
    links: {
      live: "https://shrikrishnapaints.vercel.app",
      github: "",
    },
    variant: "default" as const,
    reverse: true,
    preview: "paint-store" as const,
  },
  {
    number: "03",
    label: "Security Management Platform",
    name: "Vigilo",
    description:
      "An administrative platform for managing security operations, guard compliance, scheduling and real-time workflows through a structured web interface.",
    problem:
      "Complex operational workflows require clear interfaces for scheduling, compliance management and monitoring guard activity.",
    contribution:
      "Worked on reusable React interfaces, API integration, scheduling workflows, compliance flows and real-time application features.",
    features: [
      "Admin dashboards",
      "Guard compliance workflows",
      "Shift & assignment management",
      "RTK Query API architecture",
      "Real-time Socket.IO integration",
    ],
    tags: ["React", "TypeScript", "RTK Query", "Socket.IO"],
    links: {
      live: "",
      github: "",
    },
    variant: "default" as const,
    preview: "vigilo" as const,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-4 font-mono text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            01 / Selected projects
          </div>

          <h2 className="font-serif text-4xl leading-[1.05] font-normal tracking-tight md:text-6xl">
            Products, not just{" "}
            <em className="text-primary not-italic">repositories.</em>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            A selection of products and systems I have designed and built, from
            business tools to production web applications.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
