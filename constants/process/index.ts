import { ProcessStep } from "@/lib/types"
import { Lightbulb, Search, PenTool, Code2, RefreshCw } from "lucide-react"

export const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the problem, users and requirements. Understand what actually needs to be solved.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Break the problem into features, data flows and technical requirements before writing code.",
    icon: Search,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Shape the interface and user experience around the workflow, keeping the product clear and responsive.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Develop the frontend, backend and database together with reusable components and maintainable architecture.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Iterate",
    description:
      "Test the result, identify friction and continuously improve the product based on real usage.",
    icon: RefreshCw,
  },
]
