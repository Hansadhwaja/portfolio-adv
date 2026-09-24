import { StackCategory } from "@/lib/types/stack/stack.types"
import { Database, Globe2, Server, Wrench } from "lucide-react"

export const stack: StackCategory[] = [
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
    technologies: ["MongoDB", "Mongoose", "Database Design", "Aggregation"],
  },
  {
    title: "Development",
    description: "Tools and engineering workflow",
    icon: Wrench,
    technologies: ["Git", "GitHub", "Vercel", "VS Code", "Postman", "Figma"],
  },
]
